define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'DiscSeeker';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'kaotatud_kettad', name: 'kaotatud_kettad', moduleId: './kaotatud_kettad/kaotatud_kettad', nav: true }, { route: 'leitud_kettad', name: 'leitud_kettad', moduleId: './leitud_kettad/leitud_kettad', nav: true }, { route: 'minu_kuulutused', name: 'minu_kuulutused', moduleId: './minu_kuulutused/minu_kuulutused', nav: true }, { route: 'uus_kuulutus', name: 'uus_kuulutus', moduleId: './uus_kuulutus/uus_kuulutus', nav: true }, { route: 'rajakaardi_redigeerimine', name: 'rajakaardi_redigeerimine', moduleId: './rajakaardi_redigeerimine/rajakaardi_redigeerimine', nav: true }]);
    };

    return App;
  }();
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
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

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
    aurelia.use.standardConfiguration().feature('resources');

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
define('home/index',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

    var Home = exports.Home = function () {
        function Home() {
            _classCallCheck(this, Home);
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

        return Home;
    }();
});
define('kaotatud_kettad/kaotatud_kettad',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

    var kaotatud_kettad = exports.kaotatud_kettad = function () {
        function kaotatud_kettad() {
            _classCallCheck(this, kaotatud_kettad);

            this.ads = [];
            this.types = ['kaotatud', 'leitud'];
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

        return kaotatud_kettad;
    }();
});
define('leitud_kettad/leitud_kettad',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

    var leitud_kettad = exports.leitud_kettad = function () {
        function leitud_kettad() {
            _classCallCheck(this, leitud_kettad);

            this.filterData = {};
            this.ads = [];
            this.types = ['leitud', 'kaotatud'];
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

        return leitud_kettad;
    }();
});
define('minu_kuulutused/minu_kuulutused',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

    var minu_kuulutused = exports.minu_kuulutused = function () {
        function minu_kuulutused() {
            _classCallCheck(this, minu_kuulutused);
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

        return minu_kuulutused;
    }();
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
            this.track = routeData.name;
            console.log(routeData.name);
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
            uus_kuulutus.name = dataURL;
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

	var _dec, _class;

	var uus_kuulutus = exports.uus_kuulutus = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
		function uus_kuulutus(router) {
			_classCallCheck(this, uus_kuulutus);

			this.adData = {};
			this.tracks = ['Alatskivi', 'Elva discgolfirada', 'Nõmme discgolfirada'];
			this.types = ['kaotatud', 'leitud'];
			this.selectedTrack = '';

			this.router = router;
		}

		uus_kuulutus.prototype.activate = function activate(params, routeData) {
			if (routeData.name != 'uus_kuulutus') {
				this.adData.trackPictureURL = routeData.name;
				routeData.name = "";
				console.log(routeData.name);
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
				_this.uploadFile(data.id);
			});

			console.log("Method executed!");
		};

		uus_kuulutus.prototype.choosePic = function choosePic() {
			console.log(this.adData.track);
			var rajakaardi_redigeerimine = this.router.routes.find(function (x) {
				return x.name === 'rajakaardi_redigeerimine';
			});
			rajakaardi_redigeerimine.name = this.adData.track;
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
			console.log(this.adData.file[0]);
		};

		return uus_kuulutus;
	}()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n<router-view></router-view>\r\n</template>\r\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"active\" href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Viimati lisatud kuulutused</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.disc}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=${ad.file} style=\"width:100px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                                <br>\r\n                                <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                                <h6 style=\"text-align:left\">Tüüp: ${ad.type}</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        \r\n</template>"; });
define('text!kaotatud_kettad/kaotatud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n        <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h3>Kaotatud Kettad</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.disc}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=${ad.file} style=\"width:100px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                                <br>\r\n                                <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                     <form class=\"search\" submit.delegate= \"filterAds()\">\r\n                    <h3 style=\"color:white\">Otsing</h3>\r\n                    <select name=\"type\" style=\"width:100%\" value.bind = \"filterData.type\">\r\n                        <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                            ${type}\r\n                        </option>\r\n                    </select><br>\r\n                    <br>\r\n                    <input type=\"text\" placeholder=\"Rada\" value.bind = \"filterData.track\">\r\n                    <input type=\"text\" placeholder=\"Ketas\" value.bind = \"filterData.disc\">\r\n                    <input type=\"text\" placeholder=\"Värv\" value.bind = \"filterData.color\">\r\n                    <input type=\"submit\" value = \"Otsi\">\r\n                </form>\r\n                </div>     \r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>\r\n"; });
define('text!leitud_kettad/leitud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n        <header>\r\n            <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n        </header>\r\n        <nav>\r\n            <ul class=\"nav nav-justified\">\r\n                <li><a href=\"index.html\">Avaleht</a></li>\r\n                <li><a class=\"active\" href=\"leitud_kettad\">Leitud kettad</a></li>\r\n                <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <h3>Leitud Kettad</h3>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div repeat.for=\"ad of ads\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h4>${ad.disc}</h4>\r\n                        <hr>\r\n                        <div class=\"col-sm-3\">\r\n                            <img src=${ad.file} style=\"width:100px;\">\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <h5 style=\"text-align:left\">${ad.content}</h5>\r\n                            <br>\r\n                            <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                            <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n             <!---   <hr>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div class=\"col-md-6*\">\r\n                    <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                    <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>-->\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                 <form class=\"search\" submit.delegate= \"filterAds()\">\r\n                    <h3 style=\"color:white\">Otsing</h3>\r\n                    <select name=\"type\" style=\"width:100%\" value.bind = \"filterData.type\">\r\n                        <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                            ${type}\r\n                        </option>\r\n                    </select><br>\r\n                    <br>\r\n                    <input type=\"text\" placeholder=\"Rada\" value.bind = \"filterData.track\">\r\n                    <input type=\"text\" placeholder=\"Ketas\" value.bind = \"filterData.disc\">\r\n                    <input type=\"text\" placeholder=\"Värv\" value.bind = \"filterData.color\">\r\n                    <input type=\"submit\" value = \"Otsi\">\r\n                </form>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div id=\"footer\"></div>\r\n    </div>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n    <script>${showUsers()}</script>\r\n</template>\r\n"; });
define('text!minu_kuulutused/minu_kuulutused.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Minu kuulutused</h3>\r\n                    <a href=\"#/uus_kuulutus\" class=\"uus_kuulutus\">Lisa uus kuulutus</a>\r\n                    <div class=\"row\">\r\n                        <div repeat.for=\"ad of ads\">\r\n                            <div class=\"col-sm-12\">\r\n                                <h4>${ad.disc}</h4>\r\n                                <hr>\r\n                                <div class=\"col-sm-3\">\r\n                                    <img src=${ad.file} style=\"width:100px;\">\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                    <h5 style=\"text-align:center\">${ad.content}</h5>\r\n                                    <br>\r\n                                    <h6 style=\"text-align:left\">Koht: ${ad.track}</h6>\r\n                                    <h6 style=\"text-align:left\">Värv: ${ad.color}</h6>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"col-md-1*\">\r\n                            <a>Eemalda</a>\r\n                            <a>Muuda</a>\r\n                        </div>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!rajakaardi_redigeerimine/rajakaardi_redigeerimine.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Raja redigeerimine</h3>\r\n                    <div id=\"container\">\r\n                        <img id='image' src=${maps.mapLink} alt=\"\" width=\"1000\" height=\"550\" />\r\n                        <canvas id=\"myCanvas\" width=\"1000\" height=\"650\" mousedown.delegate=\"canvasMouseDown($event, $this)\" mouseleave.delegate=canvasMouseLeave($event)\r\n                                mouseup.delegate=canvasMouseUp($event) mousemove.delegate=\"canvasMouseMove($event, $this)\"></canvas>\r\n                    </div>\r\n                    <div align=\"center\">\r\n                        <br /><br />\r\n                        <button click.delegate=\"clearArea()\">Alusta uuesti</button>\r\n                        Joone paksus : <select value.bind=\"data.width\">\r\n                            <option repeat.for =\"width of widths\" model.bind=\"width\">\r\n                                ${width}\r\n                        </option>\r\n                        </select>\r\n                        Värv : <select value.bind=\"data.color\">\r\n                            <option repeat.for=\"color of colors\" model.bind=\"color\">\r\n                                ${color}\r\n                        </option>\r\n                        </select>\r\n                        <button click.delegate=\"save()\">Salvesta</button>\r\n                        <button onclick=\"location.href='#/minu_kuulutused'\">Tühista</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n</template>"; });
define('text!uus_kuulutus/uus_kuulutus.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\"> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <!--<div class=\"col-md-10\">-->\r\n                            <form id=\"userform\" submit.delegate =\"addAd()\" action=\"#/minu_kuulutused\">\r\n                              <fieldset>\r\n                                <legend>Lisa uus kuulutus:</legend><br>\r\n                                  Ketas:<br>\r\n                                <input type=\"text\" name=\"disc\" value.bind = \"adData.disc\"><br>\r\n                                  Värv:<br>\r\n                                <input type=\"text\" name=\"color\" value.bind = \"adData.color\"><br>\r\n                                  Tüüp:<br>\r\n                                  <select name=\"type\" value.bind = \"adData.type\">\r\n                                      <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                                        ${type}\r\n                                      </option>\r\n                                  </select><br>\r\n                                  Sisu:<br>\r\n                                <textarea name=\"content\" value.bind = \"adData.content\"></textarea><br>\r\n                                  Seotud rada: <br>\r\n                                <select value.bind = \"adData.track\">\r\n                                    <option repeat.for = \"track of tracks\" value.bind=\"track\">\r\n                                        ${track}\r\n                                    </option>\r\n                                </select>\r\n                                  <input type=\"button\" id=\"redigate\" value=\"Redigeeri\" click.delegate=\"choosePic()\"/>\r\n                                  <br><p> </p>\r\n                                <label for=\"upload-file-input\">Lisa kettast pilt:</label>\r\n                                <div class=\"upload\">\r\n                                    <input files.bind=\"adData.file\" id=\"upload-file-input\" type=\"file\" name=\"uploadfile\" accept=\"*\" />\r\n                                </div>\r\n                                <input id=\"cancel\" type=\"button\" value=\"Tühista\" onclick=\"location.href='#/minu_kuulutused'\" />\r\n                                <input id=\"add\" type=\"submit\" value=\"Lisa\" onclick=\"location.href='#/minu_kuulutused'\"/>\r\n                                \r\n                              </fieldset>\r\n                            </form>\r\n                        <!--</div>-->\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                    </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map