// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'), // don't forget to install ruby
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

var browserSync = require('browser-sync');
var reload = browserSync.reload;


var config = {
    //files: "css/**/*.css",
    open: true,
    startPath: 'index.html',
    server: {
        baseDir: './'
    }

}



// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync(config)
    // browserSync.init({
    //     server: {
    //         baseDir: './'
    //     }
    // })

    gulp.watch("scss/**/*.scss", ['styles']);
    gulp.watch("scss/*.html").on('change', reload);

});


// Styles
gulp.task('styles', function() {
    return sass('scss/styles.scss', {
            style: 'expanded'
        })
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // .pipe(minifycss())
        // .pipe(gulp.dest('css'))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify({
            message: 'Styles task complete'
        }))
});


// Scripts
// gulp.task('scripts', function() {
//     return gulp.src('src/scripts/**/*.js')
//         .pipe(jshint('.jshintrc'))
//         .pipe(jshint.reporter('default'))
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('dist/scripts'))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/scripts'))
//         .pipe(notify({
//             message: 'Scripts task complete'
//         }));
// });

// Images
// gulp.task('images', function() {
//     return gulp.src('img/**/*')
//         .pipe(cache(imagemin({
//             optimizationLevel: 3,
//             progressive: true,
//             interlaced: true
//         })))
//         .pipe(gulp.dest('img'))
//         .pipe(notify({
//             message: 'Images task complete'
//         }));
// });

// Clean
// gulp.task('clean', function(cb) {
//     del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
// });

// Default task
gulp.task('default', ['serve']);
// gulp.task('default', ['styles', 'serve'], function() {
//     gulp.watch("scss/**/*.scss" ['styles']);
// });
