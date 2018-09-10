// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass'); // 编译scss 为 css
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concat = require('gulp-concat'); // 合并css
var cleanCss = require('gulp-clean-css'); // css压缩
// 启动本地服务器 + 监听sass变化执行sass任务
gulp.task('server', ['sass','concat'], function() {
    // browserSync.init({
    //     server: {
    //         baseDir: './'
    //     },
    //     port: 3000
    // })
    // 监听变化
    gulp.watch('./public/scss/comps/**/*.scss', ['sass','concat'])
})

// 合并任务： 将css下的多个css文件合并输出到build/css下面
gulp.task('concat', function(){
    gulp.src(['./public/css/comps/**/*.css'])
        .pipe(concat('default.css'))
        // 压缩成一行
        //.pipe(cleanCss())
        .pipe(gulp.dest('./public/css'))
        .pipe(reload({stream: true}))
})

// 编译任务：sass文件夹下的sass文件编译为css文件存放在src/css下面
gulp.task('sass', function() {
    return gulp.src('./public/scss/comps/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./public/css/comps'))
            .pipe(reload({stream: true}))
})