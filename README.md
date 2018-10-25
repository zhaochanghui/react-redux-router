# react,redux,react-redux,react-router4.0例子

  第一个一个简单的react+redux例子
  参考Redux系列02：一个炒鸡简单的react+redux例子（https://segmentfault.com/a/1190000004215810）根据最新的react16.0写的最简单的     react-redux例子。

app下的文件名代表了该文件是什么例子


安装依赖：npm install
启动实时打包热部署：npm run dev 修改文件他会自动打包资源，刷新浏览器

浏览器：localhost:9090, 端口可以在webpack.config.js中改

* 打包的话：执行  npm run build  如果提示'Error: Cannot find module 'webpack/schemas/WebpackOptions.json'  尝试先以下命令 npm install -g webpack-cli   webpack --mode development  参考：https://blog.csdn.net/timeisprecious/article/details/80274821。 打包之后，直接用浏览器打开根目录的index.html就可以看效果




###nginx 上部署 react 项目: https://blog.csdn.net/vVvlife/article/details/79403570
* 如果部署nginx或其他服务器，就可以用BrowserRouter，去掉链接的#,点击链接正常调整，否则，不用服务器，直接打开index.html, 用BrowserRouter一直停在首页，不会跳转链接，要用HashRouter，带#号
* index.html是入口文件，里面引入打包的js 文件
#####server {
#####      listen 8080;
#####       # server_name your.domain.com;

#####       root /home/root/react-demo/dist;
#####      index index.html index.htm;

#####       location / {
#####                try_files $uri $uri/ /index.html;
#####        }
#####       location ^~ /assets/ {
#####               gzip_static on;
#####               expires max;
#####               add_header Cache-Control public;
#####       }
#####       error_page 500 502 503 504 /500.html;
#####      client_max_body_size 20M;
 #####      keepalive_timeout 10;
#####}



执行sudo service nginx restart重启Nginx服务,访问项目，http://IP:8080/
注意事项：
1、配置域名的话，需要80端口，成功后，只要访问域名即可访问的项目2、如果你使用了React-Router的browserHistory 模式，请在Nginx配置中加入如下配置：
 #####location / {
  #####try_files $uri $uri/ /index.html;
  #####}
  原理，因为我们的项目只有一个根入口，当输入类似/home的url时，找不到这个页面，这是，nginx会尝试加载index.html，加载index.html之后，react-router就能起作用并匹配我们输入的/home路由，从而显示正确的home页面，，如果browserHistory模式的项目没有配置上述内容，会出现404的情况。


