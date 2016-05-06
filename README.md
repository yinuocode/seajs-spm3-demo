#seajs+spm3 demo两则 <br>
<br>
最近研究js模块化seajs和和js构建工具spm3(seajs标配)<br>
通过这个小游戏实现了从普通js到seajs再到压缩的实现。<br>
<br>
在GitHub上找了个demo略作修改调整<br>
其中2048小游戏改自：<br>
  https://github.com/acwong00/games-demo<br>
  <br>
下面介绍下spm3的使用方法：<br>
  1、基于nodejs 需安装nodejs 可输入node -v测试<br>
  2、然后安装spm<br>
    npm install spm -g<br>
  3、查看安装版本spm -v<br>
  4、在项目下创建package.json  也可以用 npm init<br>
    {<br>
      "name": "2048",<br>
      "version": "1.0.0",<br>
      "description": "2048 with seajs",<br>
      "author": "acwong",<br>
      "license": "MIT",<br>
      "spm": {<br>
        "main": "static/game/main.js"<br>
      }<br>
    }<br>
    spm 字段是包含与 spm 构建相关的一些属性。这里把入口文件定义为 main.js (默认为 index.js)<br>
    main入口文件，要压缩的文件<br>
  5、执行<br>
    spm build<br>
  6、构建完成修改下页面引入js的路径<br>
  <br>
如若不能运行但不报错可能是因为：<br>
  spm3 当中，支持的书写规范从 CMD 模块 转向了 CommonJS。因此在构建之前，要先把原 CMD 模块的 define 包装去掉。构建之后 spm3 会自动在代码外添加。<br>
  包装(如果没有去掉，构建后会发现原 define 外又添加了一层 define，会导致代码不能执行)。<br>
  <br>
有3点疑问<br>
  1、为何我本地只生成了一个main.js 并没有生成main-debug.js呢。<br>
  2、上面的即使不去掉 define 包装也是可以用的呀，亲测。<br>
  3、命令行输入 spm init 并没有资料上说的那种会构建很多代码<br>
  分析：是不是因为我spm3用的是3.9.0版本导致<br>
  还请看到并知道的不吝告知：yinuocode@163.com 或 http://yuanqiao.win<br>