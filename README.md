<!--
 * @Descripttion: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2020-02-20 10:02:21
 * @LastEditors: Lianglin
 * @LastEditTime: 2020-02-20 10:58:41
 -->
### vue快速开发模板

##### 运行方式
> * npm install  
> - npm run dev   


##### 文件目录结构
.vscode     用户代码片段（快捷键）

> vueTemplate  

build （项目打包配置）
config （项目配置）
src    （项目文件）
- api （存放接口相关文件）
  -- index.js  (接口入口文件)
- assets  （存放静态资源文件）
  -- fonts  （字体文件）
  -- images  （图片文件）
  -- styles   （样式文件）
- components （存放公共组件）
- router （路由文件）
  -- index.js  （路由入口文件）
  -- routes.js  （路由配置文件）
- store （状态管理文件）
- util  （工具类组件）
  -- http.js    axios封装
- views  （页面级组件）
  -- home (首页组件)
- APP.vue  
- main.js  
static
.babelrc
.editorconfig   编辑器配置
.gitignore
.postcssrc.js
index.html
package.json
README.md

##### 已安装组件  
>  "axios": "^0.19.2",
>  "element-ui": "^2.13.0",
>  "vue-router": "^3.0.1"
>  "vuex": "^3.1.2"
>  "less": "^3.10.3",