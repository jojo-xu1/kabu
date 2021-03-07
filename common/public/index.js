// 页面简单跳转
const naviTo = (url) => uni.navigateTo({
	url
});
// 页面返回
const back = (url) => uni.navigateBack();
// tarbar页面跳转
const swiTab = (url) => uni.switchTab({
	url
});
// 页面重定向跳转
const redirTo = (url) => uni.redirectTo({
	url
});
// 清空页面栈跳转
const reLaunch = (url) => uni.reLaunch({
	url
});
// 简单的吐司
const Toast = (title, icon = 'none', duration = 1000, position = 'bottom') => uni.showToast({
	title,
	icon,
	position,
	duration
});
// 简单的弹窗提示 单按钮
const AlertOne = (title = '', content = '这是一个模态弹窗', sucCallback, faiCallback) => uni.showModal({
	title,
	content,
	showCancel: false,
	success: function(res) {
		if (res.confirm) {
			sucCallback()
		} else if (res.cancel) {
			faiCallback()
		}
	}
});
// 简单的弹窗提示 双按钮
const AlertTwo = (title = '', content = '这是一个模态弹窗', cancelText = '取消', confirmText = '确定', sucCallback = () => {},
		faiCallback = () => {}) =>
	uni.showModal({
		title,
		content,
		cancelText,
		confirmText,
		success: function(res) {
			if (res.confirm) {
				sucCallback()
			} else if (res.cancel) {
				faiCallback()
			}
		}
	});


// 存数据在本地存储
const setStorageSync = (key, value) => uni.setStorageSync(key, value);
// 读取本地数据
const getStorageSync = (key) => uni.getStorageSync(key);
// 删除本地数据
const delStorageSync = (key) => uni.removeStorageSync(key);

// 加密公钥
const pubKey = (key) =>
	`-----BEGIN PUBLIC KEY-----
	MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxaE0pR7Kw/LnRk2QhzN+kkwKT
	RrimPxO7PqH7TcQ1mp94HtCVj1WVSIosZsS5N1DDJgKDOIbQS04Tq+J47/VpaW9H
	MAXSjZwQ03euN5Z7a0v/8H/aXw4OJgzdBPillwaahaUAlpQjJXIlGvslIw93f5uE
	eNRvG9otLKTBlz+tPwIDAQAB
	-----END PUBLIC KEY-----`
export default {
	naviTo,
	back,
	swiTab,
	redirTo,
	reLaunch,
	Toast,
	AlertOne,
	AlertTwo,
	setStorageSync,
	getStorageSync,
	delStorageSync,
	pubKey
}
