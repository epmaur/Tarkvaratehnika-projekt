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
      config.title = 'My Aurelia äpp';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'kaotatud_kettad', name: 'kaotatud_kettad', moduleId: './kaotatud_kettad/kaotatud_kettad', nav: true }, { route: 'leitud_kettad', name: 'leitud_kettad', moduleId: './leitud_kettad/leitud_kettad', nav: true }, { route: 'minu_kuulutused', name: 'minu_kuulutused', moduleId: './minu_kuulutused/minu_kuulutused', nav: true }, { route: 'uus_kuulutus', name: 'uus_kuulutus', moduleId: './uus_kuulutus/uus_kuulutus', nav: true }]);
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

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('home/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
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

  var kaotatud_kettad = exports.kaotatud_kettad = function kaotatud_kettad() {
    _classCallCheck(this, kaotatud_kettad);
  };
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

			this.userData = {};

			this.appName = "adPortal";
			this.count = 0;
		}

		leitud_kettad.prototype.showUsers = function showUsers() {
			var client = new _aureliaFetchClient.HttpClient();

			client.fetch('http://localhost:8080/ads').then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("Server saatis " + toString(data));
			});

			console.log("Method executed!");
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

  var minu_kuulutused = exports.minu_kuulutused = function minu_kuulutused() {
    _classCallCheck(this, minu_kuulutused);
  };
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
		}

		uus_kuulutus.prototype.addAd = function addAd() {
			var client = new _aureliaFetchClient.HttpClient();
			client.fetch('http://localhost:8080/ads/add', {
				'method': "POST",
				'body': (0, _aureliaFetchClient.json)(this.adData)
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				console.log("Server saatis " + data.title);
			});

			console.log("Method executed!");
		};

		return uus_kuulutus;
	}();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n<router-view></router-view>\r\n  <h1>${message}</h1>\r\n</template>\r\n"; });
define('text!leitud_kettad/leitud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n        <header>\r\n            <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n        </header>\r\n        <nav>\r\n            <ul class=\"nav nav-justified\">\r\n                <li><a href=\"index.html\">Avaleht</a></li>\r\n                <li><a class=\"active\" href=\"leitud_kettad\">Leitud kettad</a></li>\r\n                <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <h3>Leitud Kettad</h3>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div class=\"col-md-6*\">\r\n                    <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                    <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <hr>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n                <div class=\"col-md-6*\">\r\n                    <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                    <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                </div>\r\n                <div class=\"col-md-1*\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                 <form class=\"search\">\r\n                    <h3 style=\"color:white\">Otsi kuulutust</h3>\r\n                    <input type=\"text\" placeholder=\"koht\">\r\n                    <input type=\"text\" placeholder=\"ketas\">\r\n                    <input type=\"text\" placeholder=\"värv\">\r\n                    <button>Otsi</button>\r\n                </form>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div id=\"footer\"></div>\r\n    </div>\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n    <script>${showUsers()}</script>\r\n</template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\t<div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a class=\"active\" href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Viimati lisatud kuulutused</h3>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <div class=\"col-md-10*\">\r\n                        <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                        <h4>Tere! Olen Mati ja käisin täna Endliga Keilas discgolfi mängimas. Kaotasin ära sellise ilusa ketta  kolmanda korvi lähedal. Kui keegi leiab, palun helistage 111222333.</h4>\r\n                    </div>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <div class=\"col-md-10*\">\r\n                        <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                        <h4>Leitud punane Dominator. Asukoht Keila. Võta ühendust, kui tead täpset ketta kaotuskohta ja andmeid. Tel. 5171553</h4>\r\n                    </div>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!kaotatud_kettad/kaotatud_kettad.html', ['module'], function(module) { module.exports = "<template>\r\n        <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h3>Kaotatud Kettad</h3>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <div class=\"col-md-6*\">\r\n                        <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                        <h4>Tere! Olen Mati ja käisin täna Endliga Keilas discgolfi mängimas. Kaotasin ära sellise ilusa ketta  kolmanda korvi lähedal. Kui keegi leiab, palun helistage 111222333.</h4>\r\n                    </div>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                    <div class=\"col-md-6*\">\r\n                        <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                        <h4>Tere! Olen Mati ja kaotasin oma punase Dominatori ära. Kettal all ainult nimi, kuid kui leiate helistage 543531612.</h4>\r\n                    </div>\r\n                    <div class=\"col-md-1*\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                     <form class=\"search\">\r\n                        <h3 style=\"color:white\">Otsi kuulutust</h3>\r\n                        <input type=\"text\" placeholder=\"koht\">\r\n                        <input type=\"text\" placeholder=\"ketas\">\r\n                        <input type=\"text\" placeholder=\"värv\">\r\n                        <button>Otsi</button>\r\n                    </form>\r\n                </div>\r\n                    \r\n                \r\n                \r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!minu_kuulutused/minu_kuulutused.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Minu kuulutused</h3>\r\n                    <a href=\"#/uus_kuulutus\" class=\"uus_kuulutus\">Lisa uus kuulutus</a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <div class=\"col-md-10*\">\r\n                            <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                            <h4>Tere! Olen Mati ja käisin täna Endliga Keilas discgolfi mängimas. Kaotasin ära sellise ilusa ketta  kolmanda korvi lähedal. Kui keegi leiab, palun helistage 111222333.</h4>\r\n                            <p></p>\r\n                        </div>\r\n                        <div class=\"col-md-1*\">\r\n                            <a>Eemalda</a>\r\n                            <a>Muuda</a>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <div class=\"col-md-10*\">\r\n                            <img src=\"../pildid/ketas.jpg\" class=\"pilt\">\r\n                            <h4>Tere! Olen Mati ja käisin täna Endliga Keilas discgolfi mängimas. Kaotasin ära sellise ilusa ketta  kolmanda korvi lähedal. Kui keegi leiab, palun helistage 111222333.</h4>\r\n                        </div>\r\n                        <div class=\"col-md-1*\">\r\n                            <a>Eemalda</a>\r\n                            <a>Muuda</a>\r\n                        </div>\r\n                    </div>   \r\n                </div>\r\n            </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
define('text!uus_kuulutus/uus_kuulutus.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"container pad\">\r\n            <header>\r\n                <img src=\"../pildid/header.jpg\" class=\"img-responsive\">\r\n            </header>\r\n            <nav>\r\n                <ul class=\"nav nav-justified\">\r\n                    <li><a href=\"index.html\">Avaleht</a></li>\r\n                    <li><a href=\"#/leitud_kettad\">Leitud kettad</a></li>\r\n                    <li><a href=\"#/kaotatud_kettad\">Kaotatud kettad</a></li>\r\n                    <li><a class=\"active\" href=\"#/minu_kuulutused\">Minu kuulutused</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\"> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                            <form id=\"userform\" submit.delegate =\"addAd()\" action=\"#/minu_kuulutused\">\r\n                              <fieldset>\r\n                                <legend>Lisa uus kuulutus:</legend><br>\r\n                                  Pealkiri:<br>\r\n                                <input type=\"text\" name=\"title\" value.bind = \"adData.title\"><br>\r\n                                  Tüüp:<br>\r\n                                  <select name=\"type\" value.bind = \"adData.type\">\r\n                                      <option>Otsin</option>\r\n                                      <option>Leidsin</option>\r\n                                  </select><br>\r\n                                  Sisu:<br>\r\n                                <textarea name=\"content\" value.bind = \"adData.content\"></textarea><br>\r\n                                  Seotud rada: <br>\r\n                                <select name=\"track\" value.bind = \"adData.track\">\r\n                                    <option>Nõmme discgolfi rada</option>\r\n                                    <option>Elva discgolfi rada</option>\r\n                                    <option>Viljandi discgolfi rada</option>\r\n                                    <option>Mõni neljas discgolfi rada</option>\r\n                                </select><br>\r\n                                <input type=\"button\" value=\"Tühista\">\r\n                                <input type=\"submit\" value=\"Lisa\">\r\n                                \r\n                              </fieldset>\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"col-md-1*\">\r\n                        </div>\r\n                    </div>\r\n            <div id=\"footer\"></div>\r\n        </div>\r\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map