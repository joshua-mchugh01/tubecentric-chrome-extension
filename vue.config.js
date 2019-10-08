// vue.config.js
const path = require('path')

function isContentScripts() {
    return process.env.VUE_APP_MODE === 'content-scripts';
}

module.exports = {
    publicPath: process.env.PUBLIC_PATH || '/',
    filenameHashing: !isContentScripts(),
    chainWebpack: config => {

        config.resolve.alias.set('@fomanticCss', path.resolve(__dirname, 'fomantic/dist/semantic.min.css'));

        if (isContentScripts()) {
            config.optimization
                .splitChunks(false);
        }
    }
}
  