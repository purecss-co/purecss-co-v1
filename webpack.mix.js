let mix = require('laravel-mix');

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

 mix.js('src/js/app.js', 'js')
     .sass('src/sass/app.scss', 'css')
     .options({
          postCss: [ 
              require('autoprefixer'),
              require('cssnano'),
          ],
          processCssUrls: true
     })
     .browserSync({
        proxy: '127.0.0.1:8000',
        files: [
          '*.html',
          'css/*.css',
          'js/*.js',
        ],
        open: true,
        notify: false,
     });    

