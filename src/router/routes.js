/*
 * @Descripttion: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2020-01-08 10:23:35
 * @LastEditors: Lianglin
 * @LastEditTime: 2020-02-19 17:29:07
 */
const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home/index')
    }
]

export default routes