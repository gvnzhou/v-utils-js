/**
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
export function isSupportWebp () {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch(err) {
    return false;
  }
}