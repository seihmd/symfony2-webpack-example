// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')

    // read main.js     -> output as web/build/app.js
    .addEntry('app', './assets/js/main.js')
    .addEntry('index', './assets/js/index.ts')
    // read global.scss -> output as web/build/global.css
    // .addStyleEntry('global', './assets/css/global.scss')

    // enable features!
    // .enableSassLoader()
    // .autoProvidejQuery()
    // .enableReactPreset()
    .enableSourceMaps(!Encore.isProduction())
    .enableTypeScriptLoader()
;

module.exports = Encore.getWebpackConfig();
