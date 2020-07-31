/**
 * 返回 querystring 对象
 * @param url
 * @return {Object} 对象
 */
export function queryParse (url) {
  let dic = {};
  url = url || location.search.slice(1);
  let array = url.split('&');
  for (let i = 0, len = array.length; i < len; i++) {
      let params = array[i].split('=');
      if (params[0]) {
          dic[decodeURIComponent(params[0])] = decodeURIComponent(params[1])
      }
  }
  return dic;
}