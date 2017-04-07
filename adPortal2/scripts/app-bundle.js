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
        }

        kaotatud_kettad.prototype.activate = function activate() {
            var _this = this;

            this.ads = [];
            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/otsin').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
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
        }

        leitud_kettad.prototype.activate = function activate() {
            var _this = this;

            this.ads = [];
            var client = new _aureliaFetchClient.HttpClient();
            client.fetch('http://localhost:8080/ads/leidsin').then(function (response) {
                return response.json();
            }).then(function (ads) {
                return _this.ads = ads;
            });
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
define('rajakaardi_redigeerimine/rajakaardi_redigeerimine',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

    var rajakaardi_redigeerimine = exports.rajakaardi_redigeerimine = function () {
        function rajakaardi_redigeerimine() {
            _classCallCheck(this, rajakaardi_redigeerimine);

            this.data = {};
            this.colors = ['red', 'black', 'yellow', 'green', 'blue'];
            this.widths = ['1', '3', '5', '7', '9'];
            this.mousePressed = false;
        }

        rajakaardi_redigeerimine.prototype.attached = function attached() {
            this.init();
        };

        rajakaardi_redigeerimine.prototype.init = function init() {
            var myCanvas = document.getElementById('myCanvas');
            console.log(myCanvas);
            this.ctx = document.getElementById('myCanvas').getContext("2d");
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
            var selColor = document.getElementById('selColor');
            var selWidth = document.getElementById('selWidth');
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

        return rajakaardi_redigeerimine;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('uus_kuulutus/uus_kuulutus',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
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

	var uus_kuulutus = exports.uus_kuulutus = function () {
		function uus_kuulutus() {
			_classCallCheck(this, uus_kuulutus);

			this.adData = {};
			this.tracks = ['Elva discgolfirada', 'Nõmme discgolfirada'];
			this.types = ['otsin', 'leidsin'];
			this.selectedTrack = '';
		}

		uus_kuulutus.prototype.addAd = function addAd() {
			var client = new _aureliaFetchClient.HttpClient();
			client.fetch('http://localhost:8080/ads/add', {
				'method': "POST",
				'body': (0, _aureliaFetchClient.json)(this.adData)
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("Server saatis " + data.track);
			});

			console.log("Method executed!");
		};

		return uus_kuulutus;
	}();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n<router-view></router-view>\r\n</template>\r\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"active\" href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Viimati lisatud kuulutused</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.title}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=\"http://www.innovastore.net/tuotekuvat/600x600/600px_Black_Star_Destroyer.jpg\" style=\"width:100px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h6 style=\"text-align:left\">${ad.content}</h6>\r\n                                <br>\r\n                                <h5 style=\"text-align:left\">Koht: ${ad.track}</h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        \r\n</template>"; });
define('text!kaotatud_kettad/kaotatud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n        <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h3>Kaotatud Kettad</h3>\r\n                    <div repeat.for=\"ad of ads\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4>${ad.title}</h4>\r\n                            <hr>\r\n                            <div class=\"col-sm-3\">\r\n                                <img src=\"http://www.innovastore.net/tuotekuvat/600x600/600px_Black_Star_Destroyer.jpg\" style=\"width:100px;\">\r\n                            </div>\r\n                            <div class=\"col-sm-9\">\r\n                                <h6 style=\"text-align:left\">${ad.content}</h6>\r\n                                <br>\r\n                                <h5 style=\"text-align:left\">Koht: ${ad.track}</h5>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                     <form class=\"search\">\r\n                        <h3 style=\"color:white\">Otsi kuulutust</h3>\r\n                        <input type=\"text\" placeholder=\"koht\">\r\n                        <input type=\"text\" placeholder=\"ketas\">\r\n                        <input type=\"text\" placeholder=\"värv\">\r\n                        <button>Otsi</button>\r\n                    </form>\r\n                </div>     \r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!leitud_kettad/leitud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n        <header>\r\n            <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n        </header>\r\n        <nav>\r\n            <ul class=\"nav nav-justified\">\r\n                <li><a href=\"index.html\">Avaleht</a></li>\r\n                <li><a class=\"active\" href=\"leitud_kettad\">Leitud kettad</a></li>\r\n                <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <h3>Leitud Kettad</h3>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div repeat.for=\"ad of ads\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h4>${ad.title}</h4>\r\n                        <hr>\r\n                        <div class=\"col-sm-3\">\r\n                            <img src=\"http://www.innovastore.net/tuotekuvat/600x600/600px_Black_Star_Destroyer.jpg\" style=\"width:100px;\">\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <h6 style=\"text-align:left\">${ad.content}</h6>\r\n                            <br>\r\n                            <h5 style=\"text-align:left\">Koht: ${ad.track}</h5>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n             <!---   <hr>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div class=\"col-md-6*\">\r\n                    <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                    <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>-->\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                 <form class=\"search\">\r\n                    <h3 style=\"color:white\">Otsi kuulutust</h3>\r\n                    <input type=\"text\" placeholder=\"koht\">\r\n                    <input type=\"text\" placeholder=\"ketas\">\r\n                    <input type=\"text\" placeholder=\"värv\">\r\n                    <button>Otsi</button>\r\n                </form>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div id=\"footer\"></div>\r\n    </div>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n    <script>${showUsers()}</script>\r\n</template>"; });
define('text!minu_kuulutused/minu_kuulutused.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Minu kuulutused</h3>\r\n                    <a href=\"#/uus_kuulutus\" class=\"uus_kuulutus\">Lisa uus kuulutus</a>\r\n                    <div class=\"row\">\r\n                        <div repeat.for=\"ad of ads\">\r\n                            <div class=\"col-sm-12\">\r\n                                <h4>${ad.title}</h4>\r\n                                <hr>\r\n                                <div class=\"col-sm-3\">\r\n                                    <img src=\"http://www.innovastore.net/tuotekuvat/600x600/600px_Black_Star_Destroyer.jpg\" style=\"width:100px;\">\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                    <h6 style=\"text-align:left\">${ad.content}</h6>\r\n                                    <br>\r\n                                    <h5 style=\"text-align:left\">Koht: ${ad.track}</h5>\r\n                                </div>\r\n                            </div>\r\n                        <div class=\"col-md-1*\">\r\n                            <a>Eemalda</a>\r\n                            <a>Muuda</a>\r\n                        </div>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!rajakaardi_redigeerimine/rajakaardi_redigeerimine.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Raja redigeerimine</h3>\r\n                    <div id=\"container\">\r\n                        <img id='image' src=\"../pildid/jjkaart.jpg\" alt=\"\" width=\"1000\" height=\"550\" />\r\n                        <canvas id=\"myCanvas\" width=\"1000\" height=\"650\" mousedown.delegate=\"canvasMouseDown($event, $this)\" mouseleave.delegate=canvasMouseLeave($event)\r\n                                mouseup.delegate=canvasMouseUp($event) mousemove.delegate=\"canvasMouseMove($event, $this)\"></canvas>\r\n                    \r\n                    </div>\r\n                    <div align=\"center\">\r\n                        <br /><br />\r\n                        <button click.delegate=\"clearArea()\">Clear Area</button>\r\n                        Line width : <select value.bind=\"data.width\">\r\n                            <option repeat.for =\"width of widths\" model.bind=\"width\">\r\n                                ${width}\r\n                        </option>\r\n                        </select>\r\n                        Color : <select value.bind=\"data.color\">\r\n                            <option repeat.for=\"color of colors\" model.bind=\"color\">\r\n                                ${color}\r\n                        </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n</template>"; });
define('text!uus_kuulutus/uus_kuulutus.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\"> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <!--<div class=\"col-md-10\">-->\r\n                            <form id=\"userform\" submit.delegate =\"addAd()\" action=\"#/minu_kuulutused\">\r\n                              <fieldset>\r\n                                <legend>Lisa uus kuulutus:</legend><br>\r\n                                  Pealkiri:<br>\r\n                                <input type=\"text\" name=\"title\" value.bind = \"adData.title\"><br>\r\n                                  Tüüp:<br>\r\n                                  <select name=\"type\" value.bind = \"adData.type\">\r\n                                      <option repeat.for = \"type of types\" value.bind=\"type\">\r\n                                        ${type}\r\n                                      </option>\r\n                                  </select><br>\r\n                                  Sisu:<br>\r\n                                <textarea name=\"content\" value.bind = \"adData.content\"></textarea><br>\r\n                                  Seotud rada: <br>\r\n                                <select value.bind = \"adData.track\">\r\n                                    <option repeat.for = \"track of tracks\" value.bind=\"track\">\r\n                                        ${track}\r\n                                    </option>\r\n                                </select><br><p> </p>\r\n                                <input type=\"button\" value=\"Tühista\">\r\n                                <input type=\"submit\" value=\"Lisa\" onclick=\"location.href='#/minu_kuulutused'\">\r\n                                \r\n                              </fieldset>\r\n                            </form>\r\n                        <!--</div>-->\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                    </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map