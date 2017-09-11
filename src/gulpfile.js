
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
return gulp.src('stylesheets/sass/styles.scss')
.pipe(sass()) // Converts Sass to CSS with gulp-sass
.pipe(gulp.dest('stylesheets'))
});

gulp.task('watch', function(){
gulp.watch('stylesheets/sass/**/*.scss', ['sass']);
});
