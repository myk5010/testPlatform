/**
 * 公共接口
 */
import request from '../utils/request'

// 必应每日壁纸
export function bing_background() {
  return request({
    url: `/public/bing/wallpaper`,
    method: 'get',
  })
}
