/*
 * @Author: wupengfei
 * @Date: 2020-09-20 11:35:16
 * @LastEditTime: 2020-09-20 22:25:06
 * @LastEditors: wupengfei
 * @Description: In User Settings Edit
 * @FilePath: /ruian_h5/src/api/test.js
 */
import axios from '@/config/httpConfig'

export function test(data) {
    return axios.get('/plans/')
}
