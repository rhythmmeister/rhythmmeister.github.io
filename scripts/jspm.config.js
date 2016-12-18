SystemJS.config({
  production: true,
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {
      "rhythmmeister-website/": "scripts/"
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
    "datauri": "npm:datauri@1.0.5",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "ace": "github:ajaxorg/ace-builds@1.2.6",
    "jeresig/jquery.hotkeys": "github:jeresig/jquery.hotkeys@0.2.0",
    "jquery": "npm:jquery@3.1.1",
    "nodelibs": "github:jspm/nodelibs@0.1.9",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
    "postcss": "npm:postcss@5.2.6",
    "postcss-nested": "npm:postcss-nested@1.0.0",
    "postcss-nesting": "npm:postcss-nesting@2.3.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "rhythmmeister": "npm:rhythmmeister@1.0.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0"
  },
  packages: {
    "npm:postcss@5.2.6": {
      "map": {
        "supports-color": "npm:supports-color@3.1.2",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:datauri@1.0.5": {
      "main": "module",
      "map": {
        "mimer": "npm:mimer@0.2.1",
        "image-size": "npm:image-size@0.3.5",
        "semver": "npm:semver@5.3.0",
        "process": "npm:jspm-nodelibs-process@0.2.0"
      }
    },
    "npm:postcss-nesting@2.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.6"
      }
    },
    "npm:postcss-nested@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.6"
      }
    },
    "npm:rhythmmeister@1.0.1": {
      "map": {
        "parse-unit": "npm:parse-unit@1.0.1",
        "datauri": "npm:datauri@1.0.5"
      }
    }
  }
});
