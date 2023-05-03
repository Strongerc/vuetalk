const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
	lintOnSave:false,  // 修改成false 就是不检查了
  // 跨域配置
  devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
    port: 5471,
    proxy: {                 //设置代理，必须填
        '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
            target: 'http://localhost:9091',     //代理的目标地址,8080/api/user,,自动转为target
            changeOrigin: true,              //是否设置同源，输入是的
            pathRewrite: {                   //路径重写
                '^/api': ''                     //选择忽略拦截器里面的内容，替换为空字符串
            }
        }
    }
}
}
