# h5

    A Vue.js H5 project 熟悉H5页面开发

### 准备工作

    1.static/css/reset.css 清除不同手机浏览器的初始样式,使各种浏览器的初始样式都保持一致
    2.static/css/border.css 防止移动端CSS里面写了1px，实际上看起来比1px粗的问题出现
    3.npm install fastclick --save 解决移动端点击300毫秒延迟问题
    4.index.html添加meta标签

### pug+stylus 简洁模式
    npm install pug pug-loader pug-filters --save-dev
    npm install style-loader stylus stylus-loader css-loader --save-dev

### 使用移动端框架 Vant
    npm i vant -S