define('app',['exports', 'aurelia-framework', 'aurelia-auth', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaAuth, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaAuth.FetchConfig), _dec2 = (0, _aureliaFramework.inject)(_aureliaRouter.activationStrategy), _dec(_class = _dec2(_class = function () {
    function App(fetchConfig) {
      _classCallCheck(this, App);

      this.fetchConfig = fetchConfig;
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      this.fetchConfig.configure();
      config.title = 'DiscSeeker';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index', activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'kaotatud_kettad', name: 'kaotatud_kettad', moduleId: './kaotatud_kettad/kaotatud_kettad', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'leitud_kettad', name: 'leitud_kettad', moduleId: './leitud_kettad/leitud_kettad', nav: true }, { route: 'minu_kuulutused', msg: '', name: 'minu_kuulutused', moduleId: './minu_kuulutused/minu_kuulutused', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'uus_kuulutus', name: 'uus_kuulutus', moduleId: './uus_kuulutus/uus_kuulutus', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'rajakaardi_redigeerimine', msg: '', name: 'rajakaardi_redigeerimine', moduleId: './rajakaardi_redigeerimine/rajakaardi_redigeerimine', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'vaata_rajakaarti', msg: '', name: 'vaata_rajakaarti', moduleId: './vaata_rajakaarti/vaata_rajakaarti', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }, { route: 'sign_in', name: 'sign_in', moduleId: './sign_in/sign_in', nav: true, activationStrategy: _aureliaRouter.activationStrategy.invokeLifecycle }]);
    };

    return App;
  }()) || _class) || _class);
});
define('authConfig',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var configForDevelopment = {
        providers: {
            google: {
                url: 'http://localhost:8080/googleauth',
                clientId: '661115396114-g2gskun6b0l7cuit2978rs51p21hpjp7.apps.googleusercontent.com'
            }

        }
    };

    var config;
    if (window.location.hostname === 'localhost') {
        config = configForDevelopment;
    }
    exports.default = config;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', './authConfig'], function (exports, _environment, _authConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _authConfig2 = _interopRequireDefault(_authConfig);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(_authConfig2.default);
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }
});
define('home/index',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router', 'aurelia-auth'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter, _aureliaAuth) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Home = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function Home(router) {
            _classCallCheck(this, Home);

            this.router = router;
        }

        Home.prototype.activate = function activate() {
            var _this = this;

            this.ads = [];
            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
        };

        Home.prototype.lookAtMap = function lookAtMap(trackName, trackPictureURL) {
            var vaata_rajakaarti = this.router.routes.find(function (x) {
                return x.name === 'vaata_rajakaarti';
            });
            vaata_rajakaarti.msg = trackName + '%NING%' + trackPictureURL + '%NING2%' + "home";
            this.router.navigateToRoute('vaata_rajakaarti');
        };

        Home.prototype.log = function log() {
            console.log(this.auth.getMe());
        };

        return Home;
    }()) || _class);
});
define('kaotatud_kettad/kaotatud_kettad',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.kaotatud_kettad = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var kaotatud_kettad = exports.kaotatud_kettad = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function kaotatud_kettad(router) {
            _classCallCheck(this, kaotatud_kettad);

            this.ads = [];
            this.types = ['kaotatud', 'leitud'];

            this.router = router;
        }

        kaotatud_kettad.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/kaotatud').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
        };

        kaotatud_kettad.prototype.filterAds = function filterAds() {
            var _this2 = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/params', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.filterData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.ads = data;
            });
            console.log("Ads filtered!");
        };

        kaotatud_kettad.prototype.lookAtMap = function lookAtMap(trackName, trackPictureURL) {
            var vaata_rajakaarti = this.router.routes.find(function (x) {
                return x.name === 'vaata_rajakaarti';
            });
            vaata_rajakaarti.name = trackName + '%NING%' + trackPictureURL + '%NING2%' + "kaotatud_kettad";
            this.router.navigateToRoute('vaata_rajakaarti');
        };

        return kaotatud_kettad;
    }()) || _class);
});
define('leitud_kettad/leitud_kettad',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.leitud_kettad = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var leitud_kettad = exports.leitud_kettad = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function leitud_kettad(router) {
            _classCallCheck(this, leitud_kettad);

            this.filterData = {};
            this.ads = [];
            this.types = ['leitud', 'kaotatud'];

            this.router = router;
        }

        leitud_kettad.prototype.activate = function activate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/leitud').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
        };

        leitud_kettad.prototype.filterAds = function filterAds() {
            var _this2 = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/params', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.filterData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.ads = data;
            });
            console.log("Ads filtered!");
        };

        leitud_kettad.prototype.lookAtMap = function lookAtMap(trackName, trackPictureURL) {
            var vaata_rajakaarti = this.router.routes.find(function (x) {
                return x.name === 'vaata_rajakaarti';
            });
            vaata_rajakaarti.name = trackName + '%NING%' + trackPictureURL + '%NING2%' + "leitud_kettad";
            this.router.navigateToRoute('vaata_rajakaarti');
        };

        return leitud_kettad;
    }()) || _class);
});
define('minu_kuulutused/minu_kuulutused',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.minu_kuulutused = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var minu_kuulutused = exports.minu_kuulutused = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function minu_kuulutused(router) {
            _classCallCheck(this, minu_kuulutused);

            this.router = router;
        }

        minu_kuulutused.prototype.activate = function activate() {
            var _this = this;

            this.ads = [];
            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
        };

        minu_kuulutused.prototype.deleteAd = function deleteAd(id) {
            var _this2 = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/delete', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(id)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis " + data);
            });

            this.ads = [];
            var client2 = new _aureliaFetchClient.HttpClient();
            client2.fetch('http://localhost:8080/ads/').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this2.ads = ads;
            });
        };

        return minu_kuulutused;
    }()) || _class);
});
define('rajakaardi_redigeerimine/rajakaardi_redigeerimine',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.rajakaardi_redigeerimine = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var rajakaardi_redigeerimine = exports.rajakaardi_redigeerimine = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function rajakaardi_redigeerimine(router) {
            _classCallCheck(this, rajakaardi_redigeerimine);

            this.data = {};
            this.colors = ['red', 'black', 'yellow', 'green', 'blue'];
            this.maps = [];
            this.widths = ['1', '3', '5', '7', '9'];
            this.mousePressed = false;

            this.router = router;
        }

        rajakaardi_redigeerimine.prototype.activate = function activate(params, routeData) {
            this.track = routeData.msg;
            console.log(routeData.msg);
        };

        rajakaardi_redigeerimine.prototype.attached = function attached() {
            this.init();
            this.addPic();
        };

        rajakaardi_redigeerimine.prototype.init = function init() {
            this.myCanvas = document.getElementById('myCanvas');
            this.ctx = document.getElementById('myCanvas').getContext("2d");
            var img = document.getElementById('image');
            this.ctx.drawImage(img, 200, 200);
        };

        rajakaardi_redigeerimine.prototype.save = function save() {
            var dataURL = this.myCanvas.toDataURL();
            var uus_kuulutus = this.router.routes.find(function (x) {
                return x.name === 'uus_kuulutus';
            });
            uus_kuulutus.msg = dataURL;
            this.router.navigateToRoute('uus_kuulutus');
        };

        rajakaardi_redigeerimine.prototype.canvasMouseDown = function canvasMouseDown(e, el) {
            var de = document.documentElement;
            var box = e.target.getBoundingClientRect();
            var top = box.top + window.pageYOffset - de.clientTop;
            var left = box.left + window.pageXOffset - de.clientLeft;
            this.mousePressed = true;
            console.log(e.target);

            this.draw(e.pageX - left, e.pageY - top - 11, false);
        };

        rajakaardi_redigeerimine.prototype.canvasMouseLeave = function canvasMouseLeave(e) {
            console.log("mouse leave");
            this.mousePressed = false;
        };

        rajakaardi_redigeerimine.prototype.canvasMouseUp = function canvasMouseUp(e) {
            this.mousePressed = false;
        };

        rajakaardi_redigeerimine.prototype.canvasMouseMove = function canvasMouseMove(e, el) {
            var de = document.documentElement;
            var box = e.target.getBoundingClientRect();
            var top = box.top + window.pageYOffset - de.clientTop;
            var left = box.left + window.pageXOffset - de.clientLeft;
            if (this.mousePressed) {
                this.draw(e.pageX - left, e.pageY - top - 11, true);
            }
        };

        rajakaardi_redigeerimine.prototype.draw = function draw(x, y, isDown) {
            if (isDown) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.data.color;
                this.ctx.lineWidth = this.data.width;
                this.ctx.lineJoin = "round";
                this.ctx.moveTo(this.lastX, this.lastY);
                this.ctx.lineTo(x, y);
                this.ctx.closePath();
                this.ctx.stroke();
            }
            this.lastX = x;this.lastY = y;
        };

        rajakaardi_redigeerimine.prototype.clearArea = function clearArea() {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        };

        rajakaardi_redigeerimine.prototype.addPic = function addPic() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/maps/' + this.track).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this.maps = data;
            });

            console.log(this.maps);
        };

        return rajakaardi_redigeerimine;
    }()) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('sign_in/sign_in',['exports', 'aurelia-fetch-client', '../authConfig', 'aurelia-auth', 'aurelia-framework'], function (exports, _aureliaFetchClient, _authConfig, _aureliaAuth, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.sign_in = undefined;

    var _authConfig2 = _interopRequireDefault(_authConfig);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var sign_in = exports.sign_in = (_dec = (0, _aureliaFramework.inject)(_aureliaAuth.AuthService), _dec(_class = function () {
        function sign_in(auth) {
            _classCallCheck(this, sign_in);

            this.userData = {};
            this.heading = 'Login';
            this.email = '';
            this.password = '';

            this.auth = auth;
        }

        sign_in.prototype.login = function login() {
            var _this = this;

            return this.auth.login(this.email, this.password).then(function (response) {
                _this.email = _this.userData.email;
                _this.password = _this.userData.password;
                console.log("success logged " + response);
            }).catch(function (err) {
                console.log("login failure");
            });
        };

        sign_in.prototype.authenticate = function authenticate(name) {
            return this.auth.authenticate(name, false, null).then(function (response) {
                console.log("auth response " + response);
            });
        };

        return sign_in;
    }()) || _class);
});
define('uus_kuulutus/uus_kuulutus',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.uus_kuulutus = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _class, _desc, _value, _class2;

  var uus_kuulutus = exports.uus_kuulutus = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec2 = (0, _aureliaFramework.computedFrom)('adData.disc', 'adData.color', 'adData.content', 'adData.contact'), _dec(_class = (_class2 = function () {
    function uus_kuulutus(router) {
      _classCallCheck(this, uus_kuulutus);

      this.adData = {};
      this.tracks = ['Alatskivi', 'Annikoru', 'Elva discgolfirada', 'Nõmme discgolfirada'];
      this.tracksWithMaps = ['Alatskivi', 'Annikoru'];
      this.types = ['kaotatud', 'leitud'];
      this.selectedTrack = '';

      this.router = router;
    }

    uus_kuulutus.prototype.activate = function activate(params, routeData) {
      if (routeData.msg != 'uus_kuulutus') {
        this.adData.trackPictureURL = routeData.msg;
      }
    };

    uus_kuulutus.prototype.addAd = function addAd() {
      var _this = this;

      var client = new _aureliaFetchClient.HttpClient();
      client.fetch('http://localhost:8080/ads/add', {
        'method': "POST",
        'body': (0, _aureliaFetchClient.json)(this.adData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log("Server saatis " + data.track);

        if (data.file != 'pildid/pilti_pole.jpg') {
          _this.uploadFile(data.id);
        }
        _this.router.navigateToRoute('minu_kuulutused');
      });

      console.log("Method executed!");
    };

    uus_kuulutus.prototype.choosePic = function choosePic() {
      console.log(this.adData.track);
      var rajakaardi_redigeerimine = this.router.routes.find(function (x) {
        return x.name === 'rajakaardi_redigeerimine';
      });
      rajakaardi_redigeerimine.msg = this.adData.track;
      this.router.navigateToRoute('rajakaardi_redigeerimine');
    };

    uus_kuulutus.prototype.uploadFile = function uploadFile(id) {
      var client = new _aureliaFetchClient.HttpClient();
      var formData = new FormData();
      formData.append("uploadfile", this.adData.file[0]);
      client.fetch('http://localhost:8080/ads/file/' + id, {
        method: 'POST',
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return console.log(data.message);
      }).catch(function (error) {
        return console.log(error);
      });
    };

    uus_kuulutus.prototype.isRedigatable = function isRedigatable(track) {
      return this.tracksWithMaps.indexOf(track) > -1;
    };

    _createClass(uus_kuulutus, [{
      key: 'IsSubmittable',
      get: function get() {
        var adData = this.adData;

        return adData.disc && adData.color && adData.content && adData.contact;
      }
    }]);

    return uus_kuulutus;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'IsSubmittable', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'IsSubmittable'), _class2.prototype)), _class2)) || _class);
});
define('vaata_rajakaarti/vaata_rajakaarti',['exports', 'aurelia-fetch-client', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFetchClient, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.vaata_rajakaarti = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var vaata_rajakaarti = exports.vaata_rajakaarti = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function vaata_rajakaarti(router) {
            _classCallCheck(this, vaata_rajakaarti);

            this.router = router;
        }

        vaata_rajakaarti.prototype.activate = function activate(params, routeData) {
            var indexOfSeparator1 = routeData.msg.indexOf("%NING%");
            var indexOfSeparator2 = routeData.msg.indexOf("%NING2%");
            this.track = routeData.msg.substring(0, indexOfSeparator1);
            this.trackPictureURL = routeData.msg.substring(indexOfSeparator1 + 6, indexOfSeparator2);
            this.previousView = routeData.msg.substring(indexOfSeparator2 + 7);
            console.log(this.track);
            console.log(this.trackPictureURL);
            console.log(this.previousView);
        };

        vaata_rajakaarti.prototype.attached = function attached() {
            this.addPic();
        };

        vaata_rajakaarti.prototype.addPic = function addPic() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/maps/' + this.track).then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this.maps = data;
            });

            console.log(this.maps);
        };

        vaata_rajakaarti.prototype.goToPreviousView = function goToPreviousView() {
            this.router.navigateToRoute(this.previousView);
        };

        return vaata_rajakaarti;
    }()) || _class);
});
define('aurelia-auth/auth-service',['exports', 'aurelia-dependency-injection', 'aurelia-fetch-client', 'aurelia-event-aggregator', './authentication', './base-config', './oAuth1', './oAuth2', './auth-utilities'], function (exports, _aureliaDependencyInjection, _aureliaFetchClient, _aureliaEventAggregator, _authentication, _baseConfig, _oAuth, _oAuth2, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AuthService = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AuthService = exports.AuthService = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFetchClient.HttpClient, _authentication.Authentication, _oAuth.OAuth1, _oAuth2.OAuth2, _baseConfig.BaseConfig, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function AuthService(http, auth, oAuth1, oAuth2, config, eventAggregator) {
      _classCallCheck(this, AuthService);

      this.http = http;
      this.auth = auth;
      this.oAuth1 = oAuth1;
      this.oAuth2 = oAuth2;
      this.config = config.current;
      this.tokenInterceptor = auth.tokenInterceptor;
      this.eventAggregator = eventAggregator;
    }

    AuthService.prototype.getMe = function getMe() {
      var profileUrl = this.auth.getProfileUrl();
      return this.http.fetch(profileUrl).then(_authUtilities.status);
    };

    AuthService.prototype.isAuthenticated = function isAuthenticated() {
      return this.auth.isAuthenticated();
    };

    AuthService.prototype.getTokenPayload = function getTokenPayload() {
      return this.auth.getPayload();
    };

    AuthService.prototype.setToken = function setToken(token) {
      this.auth.setToken(Object.defineProperty({}, this.config.tokenName, { value: token }));
    };

    AuthService.prototype.signup = function signup(displayName, email, password) {
      var _this = this;

      var signupUrl = this.auth.getSignupUrl();
      var content = void 0;
      if (_typeof(arguments[0]) === 'object') {
        content = arguments[0];
      } else {
        content = {
          'displayName': displayName,
          'email': email,
          'password': password
        };
      }

      return this.http.fetch(signupUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(_authUtilities.status).then(function (response) {
        if (_this.config.loginOnSignup) {
          _this.auth.setToken(response);
        } else if (_this.config.signupRedirect) {
          window.location.href = _this.config.signupRedirect;
        }
        _this.eventAggregator.publish('auth:signup', response);
        return response;
      });
    };

    AuthService.prototype.login = function login(email, password) {
      var _this2 = this;

      var loginUrl = this.auth.getLoginUrl();
      var content = void 0;
      if (typeof arguments[1] !== 'string') {
        content = arguments[0];
      } else {
        content = {
          'email': email,
          'password': password
        };
      }

      return this.http.fetch(loginUrl, {
        method: 'post',
        headers: typeof content === 'string' ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {},
        body: typeof content === 'string' ? content : (0, _aureliaFetchClient.json)(content)
      }).then(_authUtilities.status).then(function (response) {
        _this2.auth.setToken(response);
        _this2.eventAggregator.publish('auth:login', response);
        return response;
      });
    };

    AuthService.prototype.logout = function logout(redirectUri) {
      var _this3 = this;

      return this.auth.logout(redirectUri).then(function () {
        _this3.eventAggregator.publish('auth:logout');
      });
    };

    AuthService.prototype.authenticate = function authenticate(name, redirect, userData) {
      var _this4 = this;

      var provider = this.oAuth2;
      if (this.config.providers[name].type === '1.0') {
        provider = this.oAuth1;
      }

      return provider.open(this.config.providers[name], userData || {}).then(function (response) {
        _this4.auth.setToken(response, redirect);
        _this4.eventAggregator.publish('auth:authenticate', response);
        return response;
      });
    };

    AuthService.prototype.unlink = function unlink(provider) {
      var _this5 = this;

      var unlinkUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.unlinkUrl) : this.config.unlinkUrl;

      if (this.config.unlinkMethod === 'get') {
        return this.http.fetch(unlinkUrl + provider).then(_authUtilities.status).then(function (response) {
          _this5.eventAggregator.publish('auth:unlink', response);
          return response;
        });
      } else if (this.config.unlinkMethod === 'post') {
        return this.http.fetch(unlinkUrl, {
          method: 'post',
          body: (0, _aureliaFetchClient.json)(provider)
        }).then(_authUtilities.status).then(function (response) {
          _this5.eventAggregator.publish('auth:unlink', response);
          return response;
        });
      }
    };

    return AuthService;
  }()) || _class);
});
define('aurelia-auth/authentication',['exports', 'aurelia-dependency-injection', './base-config', './storage', './auth-utilities'], function (exports, _aureliaDependencyInjection, _baseConfig, _storage, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Authentication = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var Authentication = exports.Authentication = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _baseConfig.BaseConfig), _dec(_class = function () {
    function Authentication(storage, config) {
      _classCallCheck(this, Authentication);

      this.storage = storage;
      this.config = config.current;
      this.tokenName = this.config.tokenPrefix ? this.config.tokenPrefix + '_' + this.config.tokenName : this.config.tokenName;
      this.idTokenName = this.config.tokenPrefix ? this.config.tokenPrefix + '_' + this.config.idTokenName : this.config.idTokenName;
    }

    Authentication.prototype.getLoginRoute = function getLoginRoute() {
      return this.config.loginRoute;
    };

    Authentication.prototype.getLoginRedirect = function getLoginRedirect() {
      return this.initialUrl || this.config.loginRedirect;
    };

    Authentication.prototype.getLoginUrl = function getLoginUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.loginUrl) : this.config.loginUrl;
    };

    Authentication.prototype.getSignupUrl = function getSignupUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.signupUrl) : this.config.signupUrl;
    };

    Authentication.prototype.getProfileUrl = function getProfileUrl() {
      return this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, this.config.profileUrl) : this.config.profileUrl;
    };

    Authentication.prototype.getToken = function getToken() {
      return this.storage.get(this.tokenName);
    };

    Authentication.prototype.getPayload = function getPayload() {
      var token = this.storage.get(this.tokenName);
      return this.decomposeToken(token);
    };

    Authentication.prototype.decomposeToken = function decomposeToken(token) {
      if (token && token.split('.').length === 3) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        try {
          return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
        } catch (error) {
          return null;
        }
      }
    };

    Authentication.prototype.setInitialUrl = function setInitialUrl(url) {
      this.initialUrl = url;
    };

    Authentication.prototype.setToken = function setToken(response, redirect) {
      var accessToken = response && response[this.config.responseTokenProp];
      var tokenToStore = void 0;

      if (accessToken) {
        if ((0, _authUtilities.isObject)(accessToken) && (0, _authUtilities.isObject)(accessToken.data)) {
          response = accessToken;
        } else if ((0, _authUtilities.isString)(accessToken)) {
          tokenToStore = accessToken;
        }
      }

      if (!tokenToStore && response) {
        tokenToStore = this.config.tokenRoot && response[this.config.tokenRoot] ? response[this.config.tokenRoot][this.config.tokenName] : response[this.config.tokenName];
      }

      if (tokenToStore) {
        this.storage.set(this.tokenName, tokenToStore);
      }

      var idToken = response && response[this.config.responseIdTokenProp];

      if (idToken) {
        this.storage.set(this.idTokenName, idToken);
      }

      if (this.config.loginRedirect && !redirect) {
        window.location.href = this.getLoginRedirect();
      } else if (redirect && (0, _authUtilities.isString)(redirect)) {
        window.location.href = window.encodeURI(redirect);
      }
    };

    Authentication.prototype.removeToken = function removeToken() {
      this.storage.remove(this.tokenName);
    };

    Authentication.prototype.isAuthenticated = function isAuthenticated() {
      var token = this.storage.get(this.tokenName);

      if (!token) {
        return false;
      }

      if (token.split('.').length !== 3) {
        return true;
      }

      var exp = void 0;
      try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        exp = JSON.parse(window.atob(base64)).exp;
      } catch (error) {
        return false;
      }

      if (exp) {
        return Math.round(new Date().getTime() / 1000) <= exp;
      }

      return true;
    };

    Authentication.prototype.logout = function logout(redirect) {
      var _this = this;

      return new Promise(function (resolve) {
        _this.storage.remove(_this.tokenName);

        if (_this.config.logoutRedirect && !redirect) {
          window.location.href = _this.config.logoutRedirect;
        } else if ((0, _authUtilities.isString)(redirect)) {
          window.location.href = redirect;
        }

        resolve();
      });
    };

    _createClass(Authentication, [{
      key: 'tokenInterceptor',
      get: function get() {
        var config = this.config;
        var storage = this.storage;
        var auth = this;
        return {
          request: function request(_request) {
            if (auth.isAuthenticated() && config.httpInterceptor) {
              var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
              var token = storage.get(tokenName);

              if (config.authHeader && config.authToken) {
                token = config.authToken + ' ' + token;
              }

              _request.headers.set(config.authHeader, token);
            }
            return _request;
          }
        };
      }
    }]);

    return Authentication;
  }()) || _class);
});
define('aurelia-auth/base-config',['exports', './auth-utilities'], function (exports, _authUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BaseConfig = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var BaseConfig = exports.BaseConfig = function () {
    BaseConfig.prototype.configure = function configure(incomingConfig) {
      (0, _authUtilities.merge)(this._current, incomingConfig);
    };

    _createClass(BaseConfig, [{
      key: 'current',
      get: function get() {
        return this._current;
      }
    }]);

    function BaseConfig() {
      _classCallCheck(this, BaseConfig);

      this._current = {
        httpInterceptor: true,
        loginOnSignup: true,
        baseUrl: '/',
        loginRedirect: '#/',
        logoutRedirect: '#/',
        signupRedirect: '#/login',
        loginUrl: '/auth/login',
        signupUrl: '/auth/signup',
        profileUrl: '/auth/me',
        loginRoute: '/login',
        signupRoute: '/signup',
        tokenRoot: false,
        tokenName: 'token',
        idTokenName: 'id_token',
        tokenPrefix: 'aurelia',
        responseTokenProp: 'access_token',
        responseIdTokenProp: 'id_token',
        unlinkUrl: '/auth/unlink/',
        unlinkMethod: 'get',
        authHeader: 'Authorization',
        authToken: 'Bearer',
        withCredentials: true,
        platform: 'browser',
        storage: 'localStorage',
        providers: {
          identSrv: {
            name: 'identSrv',
            url: '/auth/identSrv',

            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'openid'],
            responseType: 'code',
            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            state: function state() {
              var rand = Math.random().toString(36).substr(2);
              return encodeURIComponent(rand);
            },
            display: 'popup',
            type: '2.0',
            clientId: 'jsClient',
            nonce: function nonce() {
              var val = ((Date.now() + Math.random()) * Math.random()).toString().replace('.', '');
              return encodeURIComponent(val);
            },
            popupOptions: { width: 452, height: 633 }
          },
          google: {
            name: 'google',
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope'],
            optionalUrlParams: ['display', 'state'],
            display: 'popup',
            type: '2.0',
            state: function state() {
              var rand = Math.random().toString(36).substr(2);
              return encodeURIComponent(rand);
            },
            popupOptions: {
              width: 452,
              height: 633
            }
          },
          facebook: {
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
            redirectUri: window.location.origin + '/' || window.location.protocol + '//' + window.location.host + '/',
            scope: ['email'],
            scopeDelimiter: ',',
            nonce: function nonce() {
              return Math.random();
            },
            requiredUrlParams: ['nonce', 'display', 'scope'],
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 580,
              height: 400
            }
          },
          linkedin: {
            name: 'linkedin',
            url: '/auth/linkedin',
            authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            requiredUrlParams: ['state'],
            scope: ['r_emailaddress'],
            scopeDelimiter: ' ',
            state: 'STATE',
            type: '2.0',
            popupOptions: {
              width: 527,
              height: 582
            }
          },
          github: {
            name: 'github',
            url: '/auth/github',
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            optionalUrlParams: ['scope'],
            scope: ['user:email'],
            scopeDelimiter: ' ',
            type: '2.0',
            popupOptions: {
              width: 1020,
              height: 618
            }
          },
          yahoo: {
            name: 'yahoo',
            url: '/auth/yahoo',
            authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: [],
            scopeDelimiter: ',',
            type: '2.0',
            popupOptions: {
              width: 559,
              height: 519
            }
          },
          twitter: {
            name: 'twitter',
            url: '/auth/twitter',
            authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
            type: '1.0',
            popupOptions: {
              width: 495,
              height: 645
            }
          },
          live: {
            name: 'live',
            url: '/auth/live',
            authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['wl.emails'],
            scopeDelimiter: ' ',
            requiredUrlParams: ['display', 'scope'],
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 500,
              height: 560
            }
          },
          instagram: {
            name: 'instagram',
            url: '/auth/instagram',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            requiredUrlParams: ['scope'],
            scope: ['basic'],
            scopeDelimiter: '+',
            display: 'popup',
            type: '2.0',
            popupOptions: {
              width: 550,
              height: 369
            }
          }
        }
      };
    }

    return BaseConfig;
  }();
});
define('aurelia-auth/auth-utilities',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.status = status;
  exports.isDefined = isDefined;
  exports.camelCase = camelCase;
  exports.parseQueryString = parseQueryString;
  exports.isString = isString;
  exports.isObject = isObject;
  exports.isFunction = isFunction;
  exports.joinUrl = joinUrl;
  exports.isBlankObject = isBlankObject;
  exports.isArrayLike = isArrayLike;
  exports.isWindow = isWindow;
  exports.extend = extend;
  exports.merge = merge;
  exports.forEach = forEach;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var slice = [].slice;

  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }

  function baseExtend(dst, objs, deep) {
    var h = dst.$$hashKey;

    for (var i = 0, ii = objs.length; i < ii; ++i) {
      var obj = objs[i];
      if (!isObject(obj) && !isFunction(obj)) continue;
      var keys = Object.keys(obj);
      for (var j = 0, jj = keys.length; j < jj; j++) {
        var key = keys[j];
        var src = obj[key];

        if (deep && isObject(src)) {
          if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
          baseExtend(dst[key], [src], true);
        } else {
          dst[key] = src;
        }
      }
    }

    setHashKey(dst, h);
    return dst;
  }

  function status(response) {
    if (response.status >= 200 && response.status < 400) {
      return response.json().catch(function (error) {
        return null;
      });
    }

    throw response;
  }

  function isDefined(value) {
    return typeof value !== 'undefined';
  }

  function camelCase(name) {
    return name.replace(/([\:\-\_]+(.))/g, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    });
  }

  function parseQueryString(keyValue) {
    var key = void 0;
    var value = void 0;
    var obj = {};

    forEach((keyValue || '').split('&'), function (kv) {
      if (kv) {
        value = kv.split('=');
        key = decodeURIComponent(value[0]);
        obj[key] = isDefined(value[1]) ? decodeURIComponent(value[1]) : true;
      }
    });

    return obj;
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function isObject(value) {
    return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
  }

  function isFunction(value) {
    return typeof value === 'function';
  }

  function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
      return url;
    }

    var joined = [baseUrl, url].join('/');
    var normalize = function normalize(str) {
      return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/\#/g, '#').replace(/\:\//g, '://');
    };

    return normalize(joined);
  }

  function isBlankObject(value) {
    return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Object.getPrototypeOf(value);
  }

  function isArrayLike(obj) {
    if (obj === null || isWindow(obj)) {
      return false;
    }
  }

  function isWindow(obj) {
    return obj && obj.window === obj;
  }

  function extend(dst) {
    return baseExtend(dst, slice.call(arguments, 1), false);
  }

  function merge(dst) {
    return baseExtend(dst, slice.call(arguments, 1), true);
  }

  function forEach(obj, iterator, context) {
    var key = void 0;
    var length = void 0;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (Array.isArray(obj) || isArrayLike(obj)) {
        var isPrimitive = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object';
        for (key = 0, length = obj.length; key < length; key++) {
          if (isPrimitive || key in obj) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context, obj);
      } else if (isBlankObject(obj)) {
        for (key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      } else if (typeof obj.hasOwnProperty === 'function') {
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else {
        for (key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    }
    return obj;
  }
});
define('aurelia-auth/storage',['exports', 'aurelia-dependency-injection', './base-config'], function (exports, _aureliaDependencyInjection, _baseConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Storage = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Storage = exports.Storage = (_dec = (0, _aureliaDependencyInjection.inject)(_baseConfig.BaseConfig), _dec(_class = function () {
    function Storage(config) {
      _classCallCheck(this, Storage);

      this.config = config.current;
      this.storage = this._getStorage(this.config.storage);
    }

    Storage.prototype.get = function get(key) {
      return this.storage.getItem(key);
    };

    Storage.prototype.set = function set(key, value) {
      return this.storage.setItem(key, value);
    };

    Storage.prototype.remove = function remove(key) {
      return this.storage.removeItem(key);
    };

    Storage.prototype._getStorage = function _getStorage(type) {
      if (type === 'localStorage') {
        if ('localStorage' in window && window.localStorage !== null) return localStorage;
        throw new Error('Local Storage is disabled or unavailable.');
      } else if (type === 'sessionStorage') {
        if ('sessionStorage' in window && window.sessionStorage !== null) return sessionStorage;
        throw new Error('Session Storage is disabled or unavailable.');
      }

      throw new Error('Invalid storage type specified: ' + type);
    };

    return Storage;
  }()) || _class);
});
define('aurelia-auth/oAuth1',['exports', 'aurelia-dependency-injection', './auth-utilities', './storage', './popup', './base-config', 'aurelia-fetch-client'], function (exports, _aureliaDependencyInjection, _authUtilities, _storage, _popup, _baseConfig, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OAuth1 = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var OAuth1 = exports.OAuth1 = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _popup.Popup, _aureliaFetchClient.HttpClient, _baseConfig.BaseConfig), _dec(_class = function () {
    function OAuth1(storage, popup, http, config) {
      _classCallCheck(this, OAuth1);

      this.storage = storage;
      this.config = config.current;
      this.popup = popup;
      this.http = http;
      this.defaults = {
        url: null,
        name: null,
        popupOptions: null,
        redirectUri: null,
        authorizationEndpoint: null
      };
    }

    OAuth1.prototype.open = function open(options, userData) {
      var _this = this;

      var current = (0, _authUtilities.extend)({}, this.defaults, options);
      var serverUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;

      if (this.config.platform !== 'mobile') {
        this.popup = this.popup.open('', current.name, current.popupOptions, current.redirectUri);
      }
      return this.http.fetch(serverUrl, {
        method: 'post'
      }).then(_authUtilities.status).then(function (response) {
        if (_this.config.platform === 'mobile') {
          _this.popup = _this.popup.open([current.authorizationEndpoint, _this.buildQueryString(response)].join('?'), current.name, current.popupOptions, current.redirectUri);
        } else {
          _this.popup.popupWindow.location = [current.authorizationEndpoint, _this.buildQueryString(response)].join('?');
        }

        var popupListener = _this.config.platform === 'mobile' ? _this.popup.eventListener(current.redirectUri) : _this.popup.pollPopup();
        return popupListener.then(function (result) {
          return _this.exchangeForToken(result, userData, current);
        });
      });
    };

    OAuth1.prototype.exchangeForToken = function exchangeForToken(oauthData, userData, current) {
      var data = (0, _authUtilities.extend)({}, userData, oauthData);
      var exchangeForTokenUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;
      var credentials = this.config.withCredentials ? 'include' : 'same-origin';

      return this.http.fetch(exchangeForTokenUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(data),
        credentials: credentials
      }).then(_authUtilities.status);
    };

    OAuth1.prototype.buildQueryString = function buildQueryString(obj) {
      var str = [];
      (0, _authUtilities.forEach)(obj, function (value, key) {
        return str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });
      return str.join('&');
    };

    return OAuth1;
  }()) || _class);
});
define('aurelia-auth/popup',['exports', './auth-utilities', './base-config', 'aurelia-dependency-injection'], function (exports, _authUtilities, _baseConfig, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Popup = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Popup = exports.Popup = (_dec = (0, _aureliaDependencyInjection.inject)(_baseConfig.BaseConfig), _dec(_class = function () {
    function Popup(config) {
      _classCallCheck(this, Popup);

      this.config = config.current;
      this.popupWindow = null;
      this.polling = null;
      this.url = '';
    }

    Popup.prototype.open = function open(url, windowName, options, redirectUri) {
      this.url = url;
      var optionsString = this.stringifyOptions(this.prepareOptions(options || {}));
      this.popupWindow = window.open(url, windowName, optionsString);
      if (this.popupWindow && this.popupWindow.focus) {
        this.popupWindow.focus();
      }

      return this;
    };

    Popup.prototype.eventListener = function eventListener(redirectUri) {
      var self = this;
      var promise = new Promise(function (resolve, reject) {
        self.popupWindow.addEventListener('loadstart', function (event) {
          if (event.url.indexOf(redirectUri) !== 0) {
            return;
          }

          var parser = document.createElement('a');
          parser.href = event.url;

          if (parser.search || parser.hash) {
            var queryParams = parser.search.substring(1).replace(/\/$/, '');
            var hashParams = parser.hash.substring(1).replace(/\/$/, '');
            var hash = (0, _authUtilities.parseQueryString)(hashParams);
            var qs = (0, _authUtilities.parseQueryString)(queryParams);

            (0, _authUtilities.extend)(qs, hash);

            if (qs.error) {
              reject({
                error: qs.error
              });
            } else {
              resolve(qs);
            }

            self.popupWindow.close();
          }
        });

        popupWindow.addEventListener('exit', function () {
          reject({
            data: 'Provider Popup was closed'
          });
        });

        popupWindow.addEventListener('loaderror', function () {
          deferred.reject({
            data: 'Authorization Failed'
          });
        });
      });
      return promise;
    };

    Popup.prototype.pollPopup = function pollPopup() {
      var _this = this;

      var self = this;
      var promise = new Promise(function (resolve, reject) {
        _this.polling = setInterval(function () {
          try {
            var documentOrigin = document.location.host;
            var popupWindowOrigin = self.popupWindow.location.host;

            if (popupWindowOrigin === documentOrigin && (self.popupWindow.location.search || self.popupWindow.location.hash)) {
              var queryParams = self.popupWindow.location.search.substring(1).replace(/\/$/, '');
              var hashParams = self.popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
              var hash = (0, _authUtilities.parseQueryString)(hashParams);
              var qs = (0, _authUtilities.parseQueryString)(queryParams);

              (0, _authUtilities.extend)(qs, hash);

              if (qs.error) {
                reject({
                  error: qs.error
                });
              } else {
                resolve(qs);
              }

              self.popupWindow.close();
              clearInterval(self.polling);
            }
          } catch (error) {}

          if (!self.popupWindow) {
            clearInterval(self.polling);
            reject({
              data: 'Provider Popup Blocked'
            });
          } else if (self.popupWindow.closed) {
            clearInterval(self.polling);
            reject({
              data: 'Problem poll popup'
            });
          }
        }, 35);
      });
      return promise;
    };

    Popup.prototype.prepareOptions = function prepareOptions(options) {
      var width = options.width || 500;
      var height = options.height || 500;
      return (0, _authUtilities.extend)({
        width: width,
        height: height,
        left: window.screenX + (window.outerWidth - width) / 2,
        top: window.screenY + (window.outerHeight - height) / 2.5
      }, options);
    };

    Popup.prototype.stringifyOptions = function stringifyOptions(options) {
      var parts = [];
      (0, _authUtilities.forEach)(options, function (value, key) {
        parts.push(key + '=' + value);
      });
      return parts.join(',');
    };

    return Popup;
  }()) || _class);
});
define('aurelia-auth/oAuth2',['exports', 'aurelia-dependency-injection', './auth-utilities', './storage', './popup', './base-config', './authentication', 'aurelia-fetch-client'], function (exports, _aureliaDependencyInjection, _authUtilities, _storage, _popup, _baseConfig, _authentication, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OAuth2 = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var OAuth2 = exports.OAuth2 = (_dec = (0, _aureliaDependencyInjection.inject)(_storage.Storage, _popup.Popup, _aureliaFetchClient.HttpClient, _baseConfig.BaseConfig, _authentication.Authentication), _dec(_class = function () {
    function OAuth2(storage, popup, http, config, auth) {
      _classCallCheck(this, OAuth2);

      this.storage = storage;
      this.config = config.current;
      this.popup = popup;
      this.http = http;
      this.auth = auth;
      this.defaults = {
        url: null,
        name: null,
        state: null,
        scope: null,
        scopeDelimiter: null,
        redirectUri: null,
        popupOptions: null,
        authorizationEndpoint: null,
        responseParams: null,
        requiredUrlParams: null,
        optionalUrlParams: null,
        defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        responseType: 'code'
      };
    }

    OAuth2.prototype.open = function open(options, userData) {
      var _this = this;

      var current = (0, _authUtilities.extend)({}, this.defaults, options);

      var stateName = current.name + '_state';

      if ((0, _authUtilities.isFunction)(current.state)) {
        this.storage.set(stateName, current.state());
      } else if ((0, _authUtilities.isString)(current.state)) {
        this.storage.set(stateName, current.state);
      }

      var nonceName = current.name + '_nonce';

      if ((0, _authUtilities.isFunction)(current.nonce)) {
        this.storage.set(nonceName, current.nonce());
      } else if ((0, _authUtilities.isString)(current.nonce)) {
        this.storage.set(nonceName, current.nonce);
      }

      var url = current.authorizationEndpoint + '?' + this.buildQueryString(current);

      var openPopup = void 0;
      if (this.config.platform === 'mobile') {
        openPopup = this.popup.open(url, current.name, current.popupOptions, current.redirectUri).eventListener(current.redirectUri);
      } else {
        openPopup = this.popup.open(url, current.name, current.popupOptions, current.redirectUri).pollPopup();
      }

      return openPopup.then(function (oauthData) {
        if (oauthData.state && oauthData.state !== _this.storage.get(stateName)) {
          return Promise.reject('OAuth 2.0 state parameter mismatch.');
        }

        if (current.responseType.toUpperCase().indexOf('TOKEN') !== -1) {
          if (!_this.verifyIdToken(oauthData, current.name)) {
            return Promise.reject('OAuth 2.0 Nonce parameter mismatch.');
          }

          return oauthData;
        }

        return _this.exchangeForToken(oauthData, userData, current);
      });
    };

    OAuth2.prototype.verifyIdToken = function verifyIdToken(oauthData, providerName) {
      var idToken = oauthData && oauthData[this.config.responseIdTokenProp];
      if (!idToken) return true;
      var idTokenObject = this.auth.decomposeToken(idToken);
      if (!idTokenObject) return true;
      var nonceFromToken = idTokenObject.nonce;
      if (!nonceFromToken) return true;
      var nonceInStorage = this.storage.get(providerName + '_nonce');
      if (nonceFromToken !== nonceInStorage) {
        return false;
      }
      return true;
    };

    OAuth2.prototype.exchangeForToken = function exchangeForToken(oauthData, userData, current) {
      var data = (0, _authUtilities.extend)({}, userData, {
        code: oauthData.code,
        clientId: current.clientId,
        redirectUri: current.redirectUri
      });

      if (oauthData.state) {
        data.state = oauthData.state;
      }

      (0, _authUtilities.forEach)(current.responseParams, function (param) {
        return data[param] = oauthData[param];
      });

      var exchangeForTokenUrl = this.config.baseUrl ? (0, _authUtilities.joinUrl)(this.config.baseUrl, current.url) : current.url;
      var credentials = this.config.withCredentials ? 'include' : 'same-origin';

      return this.http.fetch(exchangeForTokenUrl, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(data),
        credentials: credentials
      }).then(_authUtilities.status);
    };

    OAuth2.prototype.buildQueryString = function buildQueryString(current) {
      var _this2 = this;

      var keyValuePairs = [];
      var urlParams = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];

      (0, _authUtilities.forEach)(urlParams, function (params) {
        (0, _authUtilities.forEach)(current[params], function (paramName) {
          var camelizedName = (0, _authUtilities.camelCase)(paramName);
          var paramValue = (0, _authUtilities.isFunction)(current[paramName]) ? current[paramName]() : current[camelizedName];

          if (paramName === 'state') {
            var stateName = current.name + '_state';
            paramValue = encodeURIComponent(_this2.storage.get(stateName));
          }

          if (paramName === 'nonce') {
            var nonceName = current.name + '_nonce';
            paramValue = encodeURIComponent(_this2.storage.get(nonceName));
          }

          if (paramName === 'scope' && Array.isArray(paramValue)) {
            paramValue = paramValue.join(current.scopeDelimiter);

            if (current.scopePrefix) {
              paramValue = [current.scopePrefix, paramValue].join(current.scopeDelimiter);
            }
          }

          keyValuePairs.push([paramName, paramValue]);
        });
      });

      return keyValuePairs.map(function (pair) {
        return pair.join('=');
      }).join('&');
    };

    return OAuth2;
  }()) || _class);
});
define('aurelia-auth/authorize-step',['exports', 'aurelia-dependency-injection', 'aurelia-router', './authentication'], function (exports, _aureliaDependencyInjection, _aureliaRouter, _authentication) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AuthorizeStep = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AuthorizeStep = exports.AuthorizeStep = (_dec = (0, _aureliaDependencyInjection.inject)(_authentication.Authentication), _dec(_class = function () {
    function AuthorizeStep(auth) {
      _classCallCheck(this, AuthorizeStep);

      this.auth = auth;
    }

    AuthorizeStep.prototype.run = function run(routingContext, next) {
      var isLoggedIn = this.auth.isAuthenticated();
      var loginRoute = this.auth.getLoginRoute();

      if (routingContext.getAllInstructions().some(function (i) {
        return i.config.auth;
      })) {
        if (!isLoggedIn) {
          this.auth.setInitialUrl(window.location.href);
          return next.cancel(new _aureliaRouter.Redirect(loginRoute));
        }
      } else if (isLoggedIn && routingContext.getAllInstructions().some(function (i) {
        return i.fragment === loginRoute;
      })) {
        var loginRedirect = this.auth.getLoginRedirect();
        return next.cancel(new _aureliaRouter.Redirect(loginRedirect));
      }

      return next();
    };

    return AuthorizeStep;
  }()) || _class);
});
define('aurelia-auth/auth-fetch-config',['exports', 'aurelia-dependency-injection', 'aurelia-fetch-client', './authentication'], function (exports, _aureliaDependencyInjection, _aureliaFetchClient, _authentication) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FetchConfig = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var FetchConfig = exports.FetchConfig = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFetchClient.HttpClient, _authentication.Authentication), _dec(_class = function () {
    function FetchConfig(httpClient, authService) {
      _classCallCheck(this, FetchConfig);

      this.httpClient = httpClient;
      this.auth = authService;
    }

    FetchConfig.prototype.configure = function configure() {
      var _this = this;

      this.httpClient.configure(function (httpConfig) {
        httpConfig.withDefaults({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).withInterceptor(_this.auth.tokenInterceptor);
      });
    };

    return FetchConfig;
  }()) || _class);
});
define('aurelia-auth/auth-filter',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AuthFilterValueConverter = exports.AuthFilterValueConverter = function () {
    function AuthFilterValueConverter() {
      _classCallCheck(this, AuthFilterValueConverter);
    }

    AuthFilterValueConverter.prototype.toView = function toView(routes, isAuthenticated) {
      return routes.filter(function (r) {
        return r.config.auth === undefined || r.config.auth === isAuthenticated;
      });
    };

    return AuthFilterValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n<router-view></router-view>\r\n</template>\r\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"active\" href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Viimati lisatud kuulutused</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.disc}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=${ad.file} style=\"width:120px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                \r\n                                <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                        \r\n                                <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n            \r\n                                <h6 style=\"text-align:left\">Tüüp: ${ad.type}</h6>\r\n                                <h6 style=\"text-align:left\">Kontakt: ${ad.contact}</h6>\r\n                                <h6 style=\"text-align:left\">Lisatud: ${ad.addingDate}</h6>\r\n                            \r\n                            </div>\r\n                            <button if.bind=ad.trackPictureURL class=\"enjoy-css-nupp\" id=\"vaata_rajakaarti\" click.delegate=\"lookAtMap(ad.track, ad.trackPictureURL)\">Vaata rajakaarti</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-block btn-google-plus\" click.delegate=\"log()\">\r\n                    <span class=\"ion-social-googleplus\"></span>Log\r\n                </button>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        \r\n</template>"; });
define('text!kaotatud_kettad/kaotatud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n        <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h3>Kaotatud Kettad</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.disc}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=${ad.file} style=\"width:120px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                                <br>\r\n                                <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                                <h6 style=\"text-align:left\">Kontakt: ${ad.contact}</h6>\r\n                                <h6 style=\"text-align:left\">Lisatud: ${ad.addingDate}</h6>\r\n                            </div>\r\n                            <button class=\"enjoy-css-nupp\" if.bind=ad.trackPictureURL id=\"vaata_rajakaarti\" click.delegate=\"lookAtMap(ad.track, ad.trackPictureURL)\">Vaata rajakaarti</button>\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                     <form class=\"search\" submit.delegate= \"filterAds()\">\r\n                    <h3 style=\"color:white\">Otsing</h3>\r\n                    <select name=\"type\" style=\"width:100%\" value.bind = \"filterData.type\">\r\n                        <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                            ${type}\r\n                        </option>\r\n                    </select><br>\r\n                    <br>\r\n                    <input type=\"text\" placeholder=\"Rada\" value.bind = \"filterData.track\">\r\n                    <input type=\"text\" placeholder=\"Ketas\" value.bind = \"filterData.disc\">\r\n                    <input type=\"text\" placeholder=\"Värv\" value.bind = \"filterData.color\">\r\n                    <input type=\"submit\" value = \"Otsi\">\r\n                </form>\r\n                </div>     \r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>\r\n"; });
define('text!leitud_kettad/leitud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n        <header>\r\n            <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n        </header>\r\n        <nav>\r\n            <ul class=\"nav nav-justified\">\r\n                <li><a href=\"index.html\">Avaleht</a></li>\r\n                <li><a class=\"active\" href=\"leitud_kettad\">Leitud kettad</a></li>\r\n                <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <h3>Leitud Kettad</h3>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div repeat.for=\"ad of ads\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h4>${ad.disc}</h4>\r\n                        <hr>\r\n                        <div class=\"col-sm-3\">\r\n                            <img src=${ad.file} style=\"width:120px;\">\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                            <br>\r\n                            <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                            <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                            <h6 style=\"text-align:left\">Kontakt: ${ad.contact}</h6>\r\n                            <h6 style=\"text-align:left\">Lisatud: ${ad.addingDate}</h6>\r\n                        </div>\r\n                        <button class=\"enjoy-css-nupp\" if.bind=ad.trackPictureURL id=\"vaata_rajakaarti\" click.delegate=\"lookAtMap(ad.track, ad.trackPictureURL)\">Vaata rajakaarti</button>\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n             <!---   <hr>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div class=\"col-md-6*\">\r\n                    <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                    <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>-->\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                 <form class=\"search\" submit.delegate= \"filterAds()\">\r\n                    <h3 style=\"color:white\">Otsing</h3>\r\n                    <select name=\"type\" style=\"width:100%\" value.bind = \"filterData.type\">\r\n                        <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                            ${type}\r\n                        </option>\r\n                    </select><br>\r\n                    <br>\r\n                    <input type=\"text\" placeholder=\"Rada\" value.bind = \"filterData.track\">\r\n                    <input type=\"text\" placeholder=\"Ketas\" value.bind = \"filterData.disc\">\r\n                    <input type=\"text\" placeholder=\"Värv\" value.bind = \"filterData.color\">\r\n                    <input type=\"submit\" value = \"Otsi\">\r\n                </form>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div id=\"footer\"></div>\r\n    </div>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n    <script>${showUsers()}</script>\r\n</template>\r\n"; });
define('text!minu_kuulutused/minu_kuulutused.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Minu kuulutused</h3>\r\n                    <a href=\"#/uus_kuulutus\" class=\"uus_kuulutus enjoy-css-nupp\">Lisa uus kuulutus</a>\r\n                    <div class=\"row\">\r\n                        <div repeat.for=\"ad of ads\">\r\n                            <div class=\"col-sm-12\">\r\n                                <h4>${ad.disc}</h4>\r\n                                <hr>\r\n                                <div class=\"col-sm-3\">\r\n                                    <img src=\"${ad.file}\" style=\"width:120px;\">\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                    <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                                    <br>\r\n                                    <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                    <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                                    <h6 style=\"text-align:left\">Tüüp: ${ad.type}</h6>\r\n                                    <h6 style=\"text-align:left\">Kontakt: ${ad.contact}</h6>\r\n                                    <h6 style=\"text-align:left\">Lisatud: ${ad.addingDate}</h6>\r\n                                </div>\r\n                                <button class=\"enjoy-css-nupp\" click.delegate=\"deleteAd(ad.id)\">Kustuta</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!rajakaardi_redigeerimine/rajakaardi_redigeerimine.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Raja redigeerimine</h3>\r\n                    <div id=\"container\">\r\n                        <img id='image' src=${maps.mapLink} alt=\"\" width=\"1000\" height=\"550\" />\r\n                        <canvas id=\"myCanvas\" width=\"1000\" height=\"650\" mousedown.delegate=\"canvasMouseDown($event, $this)\" mouseleave.delegate=canvasMouseLeave($event)\r\n                                mouseup.delegate=canvasMouseUp($event) mousemove.delegate=\"canvasMouseMove($event, $this)\"></canvas>\r\n                    </div>\r\n                    <div align=\"center\">\r\n                        <br /><br />\r\n                        <button click.delegate=\"clearArea()\">Alusta uuesti</button>\r\n                        Joone paksus : <select value.bind=\"data.width\">\r\n                            <option repeat.for =\"width of widths\" model.bind=\"width\">\r\n                                ${width}\r\n                        </option>\r\n                        </select>\r\n                        Värv : <select value.bind=\"data.color\">\r\n                            <option repeat.for=\"color of colors\" model.bind=\"color\">\r\n                                ${color}\r\n                        </option>\r\n                        </select>\r\n                        <button click.delegate=\"save()\">Salvesta</button>\r\n                        <button onclick=\"location.href='#/minu_kuulutused'\">Tühista</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n</template>"; });
define('text!sign_in/sign_in.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"active\" href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n        <button class=\"btn btn-block btn-google-plus\" click.delegate=\"authenticate('google')\">\r\n          <span class=\"ion-social-googleplus\"></span>Sign in with Google\r\n        </button>\r\n        \r\n            \r\n</template>"; });
define('text!uus_kuulutus/uus_kuulutus.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n           \r\n            <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <!--<div class=\"col-md-10\">-->\r\n                            <form class=\"userform\" submit.delegate =\"addAd()\" action=\"#/minu_kuulutused\">\r\n                              <fieldset>\r\n                                <legend style=\"padding-top:20px\" >Lisa uus kuulutus:</legend><br>\r\n                                <h7 style=\"color:red;\">Tärniga märgitud väljad on kohustuslikud!</h7>\r\n                                  <p class=\"kuulutus\">Ketas: *<br></p>\r\n                                <input class=\"enjoy-css-input\" type=\"text\" name=\"disc\" value.bind = \"adData.disc\"><br>\r\n                                  <p class=\"kuulutus\">Värv: *<br></p>\r\n                                <input class=\"enjoy-css-input\" type=\"text\" name=\"color\" value.bind = \"adData.color\"><br>\r\n                                  <p class=\"kuulutus\">Tüüp: <br></p>\r\n                                  <select style=\"font: normal 14px/normal Verdana, Geneva, sans-serif;\" name=\"type\" value.bind = \"adData.type\">\r\n                                      <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                                        ${type}\r\n                                      </option>\r\n                                  </select><br>\r\n                                  <p class=\"kuulutus\">Sisu: *<br></p>\r\n                                <textarea class=\"enjoy-css-input\" name=\"content\" value.bind = \"adData.content\"></textarea><br>\r\n                                  <p class=\"kuulutus\">Seotud rada: <br></p>\r\n                                <select style=\"font: normal 14px/normal Verdana, Geneva, sans-serif;\" id=\"trackSelection\" value.bind = \"adData.track\" change.delegate=\"isRedigatable(adData.track)\">\r\n                                    <option repeat.for = \"track of tracks\" value.bind=\"track\">\r\n                                        ${track}\r\n                                    </option>\r\n                                </select>\r\n                                  <button class=\"enjoy-css-nupp\" if.bind=\"isRedigatable(adData.track)\" click.delegate=\"choosePic()\">Redigeeri</button>\r\n                                  <br><br>\r\n                                  <p class=\"kuulutus\">Kontakt: * <br></p>\r\n                                  <input class=\"enjoy-css-input\" type=\"text\" value.bind=\"adData.contact\"><br>\r\n                                  <p> </p>\r\n                                <label for=\"upload-file-input\">Lisa kettast pilt:</label>\r\n                                <div class=\"upload\">\r\n                                    <input files.bind=\"adData.file\" id=\"upload-file-input\" type=\"file\" name=\"uploadfile\" accept=\"*\" />\r\n                                </div>\r\n                                <button class=\"enjoy-css-nupp\" onclick=\"location.href='#/minu_kuulutused'\">Tühista</button>\r\n                                <input class=\"enjoy-css-nupp\" type=\"submit\" id=\"add\" disabled.bind=\"!IsSubmittable\" value=\"Lisa\">\r\n                                <p>\r\n                                <p>\r\n                              </fieldset>\r\n                            </form>\r\n                        <!--</div>-->\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                    </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>\r\n"; });
define('text!vaata_rajakaarti/vaata_rajakaarti.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Täpsem rajakaardi piirkond</h3>\r\n                    <div id=\"container2\">\r\n                         <div class=\"picturesOnTop\">\r\n                            <img src=${maps.mapLink} style=\"width:904px;height:556px\" style=\"position:absolute top: 0px; left: 50px\"/>\r\n                        </div>\r\n                        <div class=\"picturesOnTop\">\r\n                            <img src=${trackPictureURL} style=\"width:904px;height:556px\"\"position: absolute; top: 0px; left: 50px\"/>\r\n                        </div>\r\n                    </div>\r\n                    <div align=\"center\">\r\n                        <br /><br />\r\n                        <button click.delegate=\"goToPreviousView()\">Tagasi</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map