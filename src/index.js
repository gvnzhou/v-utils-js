/**
 * 判断执行环境
 */
export const UA = window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

/**
 * 获取Url参数
 * name: 参数名， url: 可选（非浏览器环境必选）
 */
export const getQueryString = (name, url) => {
	let target = url ? url.substr(url.indexOf('?')) : window.location.search
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	let r = target.substr(1).match(reg)
	if (r !== null) {
		return decodeURI(r[2])
	}
	return null
}

export const ls = {
	set (key, value) {
		window.localStorage.setItem(key, JSON.stringify(value))
	},
	get (key) {
		return JSON.parse(window.localStorage.getItem(key))
	},
	r (key) {
		window.localStorage.removeItem(key)
	}
}
