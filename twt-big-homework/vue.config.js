module.exports = {
    devServer:{
        host: '127.0.0.1',
        port: 8080,
        proxy: {
            '/api':{
                target: 'http://library.justinxiao.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':  'http://library.justinxiao.cn/api'
                }
            },
        },
    }
}