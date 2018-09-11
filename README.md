1.安装，切到工程目录下，执行
# npm install -g
2.运行
2.1.运行监控程序，sass编译和合并，执行
# gulp server
2.2.运行前台程序，执行
设置别名
# alias supervisor='supervisor -e "node|hbs|js|css" -w .'
启动
# supervisor server.js
3.开发规约
3.1.目录结构
/views，存放的是页面
/views/comps，存放的是组件
/routes，页面路由
/public，静态文件
3.2.开发例子说明
3.2.1.在server.js中添加一条路由，如下
app.use('/alarm', require('./routes/alarm'));
3.2.2.路由文件的路径为/routes下的js文件。
3.2.3.开发页面放在/views下。
3.2.4.页面调用组件，放在/views/comps下，组件中只引用js，不引用样式文件；样式文件通过最外层的class名字配置。
3.2.5.页面样式放在/public/scss/comps下
3.2.6.页面脚本放在/public/js/comps下。
3.3.规约
3.3.1.样式中所有的变量统一写在/public/scss/variables.scss中，主要是颜色；组件的样式文件中，要以变量的形式引用；这是为了方便开发换肤功能。
