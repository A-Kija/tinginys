const mix = require('laravel-mix');

mix.js('src/js/apskr.js', 'public')
    .sass('src/css/apskr.scss', 'public');