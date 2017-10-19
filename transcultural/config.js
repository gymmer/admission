const path = require("path");

const ROOT  = __dirname;
const src   = path.resolve(ROOT, 'src');
const dist  = path.resolve(ROOT, 'dist');
const isDev = (process.env.NODE_ENV.trim() === 'production') ? false : true;

let config = {
    src,
    dist,
    isDev,
    all: path.resolve(src,  '**/*'),
    html: {
        src:   path.resolve(src,  '**/*.html'),
        watch: path.resolve(src,  '**/*.html'),
        dist:  path.resolve(dist)
    },
    less: {
        src:   path.resolve(src,  'less/index.less'),
        watch: path.resolve(src,  'less/**/*.less'),
        dist:  path.resolve(dist, 'css')
    },
    css: {
        src:   path.resolve(src,  'css/**/*.css'),
        watch: path.resolve(src,  'css/**/*.css'),
        dist:  path.resolve(dist, 'css')
    },
    js: {
        src:   path.resolve(src,  'js/**/*.js'),
        watch: path.resolve(src,  'js/**/*.js'),
        dist:  path.resolve(dist, 'js')
    },
    font: {
        src:  path.resolve(src,   'fonts/**/*.{eot,ttf,woff,woff2,otf}'),
        dist: path.resolve(dist, 'fonts')
    },
    img: {
        src:   path.resolve(src,  'img/**/*.{png,jpg,gif,jpeg,svg}'),
        watch: path.resolve(src,  'img/**/*.{png,jpg,gif,jpeg,svg}'),
        dist:  path.resolve(dist, 'img')
    },
    server: {
        root: dist,
        port: 8080
    }
}

module.exports = config;