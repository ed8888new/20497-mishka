"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "css/*.css"
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.registerTask("build", [
    "less",
    "postcss",
    "csso",
    "imagemin"
  ]);
};
