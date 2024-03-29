
const path = require('path');
const templatedir = process.env.npm_config_dir;
module.exports = {
    baseUrl: '/',
    publicPath: process.env.NODE_ENV === 'production'? '':'',
    outputDir: process.env.NODE_ENV === 'production' ? path.join('dist/'+templatedir) : path.join('src/template/'+templatedir),
    assetsDir: './code',
    lintOnSave: false,
    filenameHashing:false,
    pages: {
        [templatedir]: {
            entry:  './src/main.js',
            template: path.join('./src/template/'+templatedir+'/index.html'),
            filename:'index.html',
            title: templatedir,
            // chunks: ['chunk-vendors', 'chunk-common',templatedir]
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
    // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    pwa: {},
    //外部引入的，不要打包
    configureWebpack:{
        externals: {
            answer: "AnswerInfo"
        }
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: true, // 编译完成是否打开网页
        host: 'localhost', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        hotOnly: false,
        proxy: null, // 设置代理
        overlay: { // 全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        }
    },
    /**
   * 第三方插件配置
   */
    pluginOptions: {}
}

