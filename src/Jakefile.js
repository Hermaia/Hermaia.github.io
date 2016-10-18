desc("watch SCSS");
task("watch", function() {
    jake.exec("sass --watch scss/pages:../assets/css --style expanded");
});


desc("SCSS");
task("scss", function() {
    jake.exec("sass --update scss/pages:../assets/css --style expanded");
});


desc("build jade to html");
task("jade", function() {
    jake.exec("jade jade/pages --out ../");
});

desc("build ts to js");
task("ts", function() {
    jake.exec("tsc");
    jake.exec("webpack ts/pages/index.js ../assets/js/index.js");
    jake.exec("webpack ts/pages/about.js ../assets/js/about.js");
});


desc("clean");
task("clean", function() {
  var list = new jake.FileList();

  list.include("./ts/**/*.js");

  list.toArray().map(function(path) {
    jake.rmRf(path);
  });
});


desc("build");
task("build", ["ts", "jade", "scss"], function() {
});
