let mix = require("laravel-mix");
require("mix-html-builder");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath("dist")
    .html({
        htmlRoot: "src/views/**/*.html",
        output: "../dist",
        partialRoot: "src/views/partials",
        layoutRoot: "src/views/layouts",
        inject: true,
        versioning: true,
        minify: {
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            conservativeCollapse: true,
        },
    })
    .js("src/js/app.js", "dist/js")
    .sass("src/sass/app.scss", "dist/css")
    .options({
        postCss: [require("autoprefixer"), require("cssnano")],
        processCssUrls: true,
    })
    .browserSync({
        proxy: "127.0.0.1:8000",
        files: ["dist/**/*.html", "dist/css/*.css", "dist/js/*.js"],
        open: true,
        notify: false,
    })
    .version();

mix.extend("addWebpackLoaders", (webpackConfig, loaderRules) => {
    loaderRules.forEach(loaderRule => {
        webpackConfig.module.rules.push(loaderRule);
    });
});

mix.addWebpackLoaders([
    {
        test: /\.scss$/,
        loader: "import-glob-loader",
    },
]);
