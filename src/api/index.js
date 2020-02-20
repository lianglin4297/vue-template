/*
 * @Descripttion:
 * @version:
 * @Author: Lianglin
 * @Date: 2020-02-19 17:12:53
 * @LastEditors: Lianglin
 * @LastEditTime: 2020-02-19 17:19:31
 */
import { get, post } from '@/util/http.js'
import qs from 'qs';

export const casemgtAllocate = params => {
    return post(`/api/v1`, params);
};