var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: process.env.PORT
        }
    })
    .on('restart', function(){
        console.log("Restarting"); 
    });
});
