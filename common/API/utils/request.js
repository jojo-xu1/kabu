import $pub from '../../public/index.js'
/*
	@code   211 Token已过期,请重新登录
*/




// TODO  请求拦截
const interceptorsRequest = (config) => {
	let Token = $pub.getStorageSync("Token")
	if (Token) {
		config.header = {
			'Token': Token
		}
	}
	return config
}
//TODO 响应拦截
const interceptorsRespone = (type, res) => {
	uni.hideLoading();
	if (type == 'success') {
		// 身份过期
		if (res.code === 211) {
			$pub.AlertOne('', res.msg, () => {
				
				// 删除账号缓存
				let AccountList = $pub.getStorageSync('AcclountList')
				let indexS = AccountList.findIndex(i => i.Token == $pub.getStorageSync('Token'))
				AccountList.splice(indexS,1)
				$pub.setStorageSync('AcclountList',AccountList)
				
				$pub.delStorageSync('Token')
				$pub.delStorageSync('UserInfo')
				$pub.delStorageSync('StudyPlane')			// 清空操作
				$pub.reLaunch('/pages/other/login/index')
			})
		}
		if (res.code != 200 && res.code !=204) {
			$pub.Toast('服务器错误' + JSON.stringify(res))
		}
		return
	}
	//fail
}

let noLoadingInterface = [
	'APIFreshSts','SelArticleList', 'CheckUpdate', 'APISyncUploadFile',
	"APIGetFolderList",
	'SelCommonList','SelArticleDetail','getSpecifiedFileSizes','UploadRecord','onLike',
	'ReadedNotice','SelNoReadNoticeCount',
	'AsyncStyudyPlaneData'
]


let cxyServe = (con) => {
	return new Promise(async (resolve, reject) => {
		if (!noLoadingInterface.includes(con.data.type)) {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
		}
		let config = await interceptorsRequest(con)
		uni.request({
			url: config.url,
			method: config.method,
			data: config.data,
			header: config.header,
			success(e) {
				// 成功~响应拦截
				interceptorsRespone('success', e.data)
				resolve(e.data)
			},
			fail(e) {
				// 失败~响应拦截
				interceptorsRespone('fail', e.data)
				$pub.Toast('请检查网络是否可用~')
				reject(e)
			}
		});
	})
}

export default cxyServe
