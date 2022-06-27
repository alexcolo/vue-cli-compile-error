const gulp = require("gulp");
const zip = require("gulp-zip");
var argv = require("yargs").argv;
var rename = require("gulp-rename");

function preBuild() {
  return gulp
    .src(`./src/config/qlik-resources/qlik-resources.${argv.env}.json`)
    .pipe(rename("qlik-resources.json"))
    .pipe(gulp.dest("./src/config/qlik-resources/"));
}

function postBuild() {
  return gulp
    .src(`./dist/**`)
    .pipe(gulp.dest("./dist/client-reporting-no"))
    .pipe(zip("client-reporting-no.zip"))
    .pipe(gulp.dest("dist"));
}

exports.preBuild = preBuild;
exports.postBuild = postBuild;
