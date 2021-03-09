import Server from "./utils/request.js"


// 发布文章
export const API$AddArticle = (data)=>{
	let R = Object.assign({type: 'PushArticle'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 删除文章
export const API$DelArticle = (data)=>{
	let R = Object.assign({type: 'DelArticle'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 查询文章列表
export const API$SelArticleList = (data)=>{
	let R = Object.assign({type: 'SelArticleList'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 查询视频列表
export const API$SelVideoList = (data)=>{
	let R = Object.assign({type: 'SelVideoList'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}


// 点赞接口
export const API$like = (data)=>{
	let R = Object.assign({type: 'onLike'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 评论接口
export const API$AddCommon = (data)=>{
	let R = Object.assign({type: 'onCommon'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}


// 查询评论列表接口
export const API$SelCommonList = (data)=>{
	let R = Object.assign({type: 'SelCommonList'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 查询文章评论详情
export const API$SelArticleDetail = (data)=>{
	let R = Object.assign({type: 'SelArticleDetail'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 单条评论点赞
export const API$CommonLike = (data)=>{
	let R = Object.assign({type: 'CommonLike'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 评论排序接口
export const API$CommonSort = (data)=>{
	let R = Object.assign({type: 'CommonSort'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 模糊查询文章接口
export const API$SelArticle_like = (data)=>{
	let R = Object.assign({type: 'SelArticle_like'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 上传文件记录接口（社区模块的）
export const API$UploadRecord = (data)=>{
	let R = Object.assign({type: 'UploadRecord'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}
