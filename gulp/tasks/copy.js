'use strict';

module.exports = function() {
    $.gulp.task('gulp-copy', function () {
        var sourceFiles = ['source/fonts/*', 'source/images/**/*.png'];
        var destination = './build/assets';

        return $.gulp
            .src(sourceFiles)
        .pipe($.gulpCopy(destination))


    });
};
