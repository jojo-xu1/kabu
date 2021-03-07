import Server from "./utils/request.js"


// 获取文件信息
export const API$GetFolderList = (data)=>{
	let R = Object.assign({type: 'APIGetFolderList'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 获取Sts
export const API$GetSts = (data)=>{
	let R = Object.assign({type: 'APIFreshSts'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}
// 获取签名
export const API$GetMpUploadOssHelper = (data)=>{
	let R = Object.assign({type: 'APIGetMpUploadOssHelper'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 上传接口（包含获取签名）（只做数据库记录）
export const API$UploadFile = (data)=>{
	let R = Object.assign({type: 'APIUploadFile'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}
// 上传接口（同步记录调用的）
export const API$SyncUploadFile = (data)=>{
	let R = Object.assign({type: 'APISyncUploadFile'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 删除上传文件记录
export const API$DelUploadRecord = (data)=>{
	let R = Object.assign({type: 'APIDelUploadRecord'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 获取上传文件记录列表
export const API$GetUploadRecordList = (data)=>{
	let R = Object.assign({type: 'APIGetUploadRecordList'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 删除单个文件
export function API$DelFile(data) {
	let R = Object.assign({type: 'APIDelFile'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

// 获取指定目录的文件大小
export function API$getSpecifiedFileSizes(data) {
	let R = Object.assign({type: 'getSpecifiedFileSizes'},data)
	return Server({
		url: 'https://qddscxy-16b8d1.service.tcloudbase.com/YangPan',
		method: 'post',
		data:R
	})
}

