SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {
      "rhythmmeister-website/": "app/scripts/"
    }
  },
  nodeConfig: {
    "paths": {
      "rhythmmeister-website/": "scripts/"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "rhythmmeister-website": {
      "main": "rhythmmeister-website.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  },
  map: {
    "hotkeys": "github:jeresig/jquery.hotkeys@0.2.0"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.6",
    "jquery": "npm:jquery@3.1.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
  },
  packages: {}
});
