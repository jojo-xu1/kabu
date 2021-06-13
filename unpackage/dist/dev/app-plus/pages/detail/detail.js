"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {var _platformList;
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _platformList);

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' && done({
        enable: report_status_code });

    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 100:
/*!****************************************************!*\
  !*** D:/gitproject/new/kabu/common/html-parser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\r\n                                                                                                      * HTML5 Parser By Sam Blowes\r\n                                                                                                      *\r\n                                                                                                      * Designed for HTML5 documents\r\n                                                                                                      *\r\n                                                                                                      * Original code by John Resig (ejohn.org)\r\n                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/\r\n                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License\r\n                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js\r\n                                                                                                      *\r\n                                                                                                      * ----------------------------------------------------------------------------\r\n                                                                                                      * License\r\n                                                                                                      * ----------------------------------------------------------------------------\r\n                                                                                                      *\r\n                                                                                                      * This code is triple licensed using Apache Software License 2.0,\r\n                                                                                                      * Mozilla Public License or GNU Public License\r\n                                                                                                      *\r\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\r\n                                                                                                      *\r\n                                                                                                      * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\r\n                                                                                                      * use this file except in compliance with the License.  You may obtain a copy\r\n                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0\r\n                                                                                                      *\r\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\r\n                                                                                                      *\r\n                                                                                                      * The contents of this file are subject to the Mozilla Public License\r\n                                                                                                      * Version 1.1 (the \"License\"); you may not use this file except in\r\n                                                                                                      * compliance with the License. You may obtain a copy of the License at\r\n                                                                                                      * http://www.mozilla.org/MPL/\r\n                                                                                                      *\r\n                                                                                                      * Software distributed under the License is distributed on an \"AS IS\"\r\n                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the\r\n                                                                                                      * License for the specific language governing rights and limitations\r\n                                                                                                      * under the License.\r\n                                                                                                      *\r\n                                                                                                      * The Original Code is Simple HTML Parser.\r\n                                                                                                      *\r\n                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.\r\n                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights\r\n                                                                                                      * Reserved.\r\n                                                                                                      *\r\n                                                                                                      * ////////////////////////////////////////////////////////////////////////////\r\n                                                                                                      *\r\n                                                                                                      * This program is free software; you can redistribute it and/or\r\n                                                                                                      * modify it under the terms of the GNU General Public License\r\n                                                                                                      * as published by the Free Software Foundation; either version 2\r\n                                                                                                      * of the License, or (at your option) any later version.\r\n                                                                                                      *\r\n                                                                                                      * This program is distributed in the hope that it will be useful,\r\n                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n                                                                                                      * GNU General Public License for more details.\r\n                                                                                                      *\r\n                                                                                                      * You should have received a copy of the GNU General Public License\r\n                                                                                                      * along with this program; if not, write to the Free Software\r\n                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\r\n                                                                                                      *\r\n                                                                                                      * ----------------------------------------------------------------------------\r\n                                                                                                      * Usage\r\n                                                                                                      * ----------------------------------------------------------------------------\r\n                                                                                                      *\r\n                                                                                                      * // Use like so:\r\n                                                                                                      * HTMLParser(htmlString, {\r\n                                                                                                      *     start: function(tag, attrs, unary) {},\r\n                                                                                                      *     end: function(tag) {},\r\n                                                                                                      *     chars: function(text) {},\r\n                                                                                                      *     comment: function(text) {}\r\n                                                                                                      * });\r\n                                                                                                      *\r\n                                                                                                      * // or to get an XML string:\r\n                                                                                                      * HTMLtoXML(htmlString);\r\n                                                                                                      *\r\n                                                                                                      * // or to get an XML DOM Document\r\n                                                                                                      * HTMLtoDOM(htmlString);\r\n                                                                                                      *\r\n                                                                                                      * // or to inject into an existing document/DOM node\r\n                                                                                                      * HTMLtoDOM(htmlString, document);\r\n                                                                                                      * HTMLtoDOM(htmlString, document.body);\r\n                                                                                                      *\r\n                                                                                                      */\n// Regular Expressions for parsing tags and attributes\nvar startTag = /^<([-A-Za-z0-9_]+)((?:\\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\\s*=\\s*(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?)*)\\s*(\\/?)>/;\nvar endTag = /^<\\/([-A-Za-z0-9_]+)[^>]*>/;\nvar attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\\s*=\\s*(?:(?:\"((?:\\\\.|[^\"])*)\")|(?:'((?:\\\\.|[^'])*)')|([^>\\s]+)))?/g; // Empty Elements - HTML 5\n\nvar empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5\n// fixed by xxx 将 ins 标签从块级名单中移除\n\nvar block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5\n\nvar inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open\n// (and which close themselves)\n\nvar closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled=\"disabled\"\n\nvar fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)\n\nvar special = makeMap('script,style');\nfunction HTMLParser(html, handler) {\n  var index;\n  var chars;\n  var match;\n  var stack = [];\n  var last = html;\n\n  stack.last = function () {\n    return this[this.length - 1];\n  };\n\n  while (html) {\n    chars = true; // Make sure we're not in a script or style element\n\n    if (!stack.last() || !special[stack.last()]) {\n      // Comment\n      if (html.indexOf('<!--') == 0) {\n        index = html.indexOf('-->');\n\n        if (index >= 0) {\n          if (handler.comment) {\n            handler.comment(html.substring(4, index));\n          }\n\n          html = html.substring(index + 3);\n          chars = false;\n        } // end tag\n\n      } else if (html.indexOf('</') == 0) {\n        match = html.match(endTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(endTag, parseEndTag);\n          chars = false;\n        } // start tag\n\n      } else if (html.indexOf('<') == 0) {\n        match = html.match(startTag);\n\n        if (match) {\n          html = html.substring(match[0].length);\n          match[0].replace(startTag, parseStartTag);\n          chars = false;\n        }\n      }\n\n      if (chars) {\n        index = html.indexOf('<');\n        var text = index < 0 ? html : html.substring(0, index);\n        html = index < 0 ? '' : html.substring(index);\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n      }\n    } else {\n      html = html.replace(new RegExp('([\\\\s\\\\S]*?)<\\/' + stack.last() + '[^>]*>'), function (all, text) {\n        text = text.replace(/<!--([\\s\\S]*?)-->|<!\\[CDATA\\[([\\s\\S]*?)]]>/g, '$1$2');\n\n        if (handler.chars) {\n          handler.chars(text);\n        }\n\n        return '';\n      });\n      parseEndTag('', stack.last());\n    }\n\n    if (html == last) {\n      throw 'Parse Error: ' + html;\n    }\n\n    last = html;\n  } // Clean up any remaining tags\n\n\n  parseEndTag();\n\n  function parseStartTag(tag, tagName, rest, unary) {\n    tagName = tagName.toLowerCase();\n\n    if (block[tagName]) {\n      while (stack.last() && inline[stack.last()]) {\n        parseEndTag('', stack.last());\n      }\n    }\n\n    if (closeSelf[tagName] && stack.last() == tagName) {\n      parseEndTag('', tagName);\n    }\n\n    unary = empty[tagName] || !!unary;\n\n    if (!unary) {\n      stack.push(tagName);\n    }\n\n    if (handler.start) {\n      var attrs = [];\n      rest.replace(attr, function (match, name) {\n        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';\n        attrs.push({\n          name: name,\n          value: value,\n          escaped: value.replace(/(^|[^\\\\])\"/g, '$1\\\\\\\"') // \"\n        });\n\n      });\n\n      if (handler.start) {\n        handler.start(tagName, attrs, unary);\n      }\n    }\n  }\n\n  function parseEndTag(tag, tagName) {\n    // If no tag name is provided, clean shop\n    if (!tagName) {\n      var pos = 0;\n    } // Find the closest opened tag of the same type\n    else {\n        for (var pos = stack.length - 1; pos >= 0; pos--) {\n          if (stack[pos] == tagName) {\n            break;\n          }\n        }\n      }\n\n    if (pos >= 0) {\n      // Close all the open elements, up the stack\n      for (var i = stack.length - 1; i >= pos; i--) {\n        if (handler.end) {\n          handler.end(stack[i]);\n        }\n      } // Remove the open elements from the stack\n\n\n      stack.length = pos;\n    }\n  }\n}\n\nfunction makeMap(str) {\n  var obj = {};\n  var items = str.split(',');\n\n  for (var i = 0; i < items.length; i++) {\n    obj[items[i]] = true;\n  }\n\n  return obj;\n}\n\nfunction removeDOCTYPE(html) {\n  return html.replace(/<\\?xml.*\\?>\\n/, '').replace(/<!doctype.*>\\n/, '').replace(/<!DOCTYPE.*>\\n/, '');\n}\n\nfunction parseAttrs(attrs) {\n  return attrs.reduce(function (pre, attr) {\n    var value = attr.value;\n    var name = attr.name;\n\n    if (pre[name]) {\n      pre[name] = pre[name] + \" \" + value;\n    } else {\n      pre[name] = value;\n    }\n\n    return pre;\n  }, {});\n}\n\nfunction parseHtml(html) {\n  html = removeDOCTYPE(html);\n  var stacks = [];\n  var results = {\n    node: 'root',\n    children: [] };\n\n  HTMLParser(html, {\n    start: function start(tag, attrs, unary) {\n      var node = {\n        name: tag };\n\n\n      if (attrs.length !== 0) {\n        node.attrs = parseAttrs(attrs);\n      }\n\n      if (unary) {\n        var parent = stacks[0] || results;\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      } else {\n        stacks.unshift(node);\n      }\n    },\n    end: function end(tag) {\n      var node = stacks.shift();\n      if (node.name !== tag) __f__(\"error\", 'invalid state: mismatch end tag', \" at common/html-parser.js:303\");\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    chars: function chars(text) {\n      var node = {\n        type: 'text',\n        text: text };\n\n\n      if (stacks.length === 0) {\n        results.children.push(node);\n      } else {\n        var parent = stacks[0];\n\n        if (!parent.children) {\n          parent.children = [];\n        }\n\n        parent.children.push(node);\n      }\n    },\n    comment: function comment(text) {\n      var node = {\n        node: 'comment',\n        text: text };\n\n      var parent = stacks[0];\n\n      if (!parent.children) {\n        parent.children = [];\n      }\n\n      parent.children.push(node);\n    } });\n\n  return results.children;\n}var _default =\n\nparseHtml;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 36)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2h0bWwtcGFyc2VyLmpzIl0sIm5hbWVzIjpbInN0YXJ0VGFnIiwiZW5kVGFnIiwiYXR0ciIsImVtcHR5IiwibWFrZU1hcCIsImJsb2NrIiwiaW5saW5lIiwiY2xvc2VTZWxmIiwiZmlsbEF0dHJzIiwic3BlY2lhbCIsIkhUTUxQYXJzZXIiLCJodG1sIiwiaGFuZGxlciIsImluZGV4IiwiY2hhcnMiLCJtYXRjaCIsInN0YWNrIiwibGFzdCIsImxlbmd0aCIsImluZGV4T2YiLCJjb21tZW50Iiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInBhcnNlRW5kVGFnIiwicGFyc2VTdGFydFRhZyIsInRleHQiLCJSZWdFeHAiLCJhbGwiLCJ0YWciLCJ0YWdOYW1lIiwicmVzdCIsInVuYXJ5IiwidG9Mb3dlckNhc2UiLCJwdXNoIiwic3RhcnQiLCJhdHRycyIsIm5hbWUiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImVzY2FwZWQiLCJwb3MiLCJpIiwiZW5kIiwic3RyIiwib2JqIiwiaXRlbXMiLCJzcGxpdCIsInJlbW92ZURPQ1RZUEUiLCJwYXJzZUF0dHJzIiwicmVkdWNlIiwicHJlIiwicGFyc2VIdG1sIiwic3RhY2tzIiwicmVzdWx0cyIsIm5vZGUiLCJjaGlsZHJlbiIsInBhcmVudCIsInVuc2hpZnQiLCJzaGlmdCIsInR5cGUiXSwibWFwcGluZ3MiOiJxSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkE7QUFDQSxJQUFJQSxRQUFRLEdBQUcsZ0hBQWY7QUFDQSxJQUFJQyxNQUFNLEdBQUcsNEJBQWI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsb0dBQVgsQyxDQUFpSDs7QUFFakgsSUFBSUMsS0FBSyxHQUFHQyxPQUFPLENBQUMsb0dBQUQsQ0FBbkIsQyxDQUEySDtBQUMzSDs7QUFFQSxJQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQywyU0FBRCxDQUFuQixDLENBQWtVOztBQUVsVSxJQUFJRSxNQUFNLEdBQUdGLE9BQU8sQ0FBQyxrTUFBRCxDQUFwQixDLENBQTBOO0FBQzFOOztBQUVBLElBQUlHLFNBQVMsR0FBR0gsT0FBTyxDQUFDLGtEQUFELENBQXZCLEMsQ0FBNkU7O0FBRTdFLElBQUlJLFNBQVMsR0FBR0osT0FBTyxDQUFDLHdHQUFELENBQXZCLEMsQ0FBbUk7O0FBRW5JLElBQUlLLE9BQU8sR0FBR0wsT0FBTyxDQUFDLGNBQUQsQ0FBckI7QUFDQSxTQUFTTSxVQUFULENBQW9CQyxJQUFwQixFQUEwQkMsT0FBMUIsRUFBbUM7QUFDakMsTUFBSUMsS0FBSjtBQUNBLE1BQUlDLEtBQUo7QUFDQSxNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUdOLElBQVg7O0FBRUFLLE9BQUssQ0FBQ0MsSUFBTixHQUFhLFlBQVk7QUFDdkIsV0FBTyxLQUFLLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPUCxJQUFQLEVBQWE7QUFDWEcsU0FBSyxHQUFHLElBQVIsQ0FEVyxDQUNHOztBQUVkLFFBQUksQ0FBQ0UsS0FBSyxDQUFDQyxJQUFOLEVBQUQsSUFBaUIsQ0FBQ1IsT0FBTyxDQUFDTyxLQUFLLENBQUNDLElBQU4sRUFBRCxDQUE3QixFQUE2QztBQUMzQztBQUNBLFVBQUlOLElBQUksQ0FBQ1EsT0FBTCxDQUFhLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0JOLGFBQUssR0FBR0YsSUFBSSxDQUFDUSxPQUFMLENBQWEsS0FBYixDQUFSOztBQUVBLFlBQUlOLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2QsY0FBSUQsT0FBTyxDQUFDUSxPQUFaLEVBQXFCO0FBQ25CUixtQkFBTyxDQUFDUSxPQUFSLENBQWdCVCxJQUFJLENBQUNVLFNBQUwsQ0FBZSxDQUFmLEVBQWtCUixLQUFsQixDQUFoQjtBQUNEOztBQUVERixjQUFJLEdBQUdBLElBQUksQ0FBQ1UsU0FBTCxDQUFlUixLQUFLLEdBQUcsQ0FBdkIsQ0FBUDtBQUNBQyxlQUFLLEdBQUcsS0FBUjtBQUNELFNBVjRCLENBVTNCOztBQUVILE9BWkQsTUFZTyxJQUFJSCxJQUFJLENBQUNRLE9BQUwsQ0FBYSxJQUFiLEtBQXNCLENBQTFCLEVBQTZCO0FBQ2xDSixhQUFLLEdBQUdKLElBQUksQ0FBQ0ksS0FBTCxDQUFXZCxNQUFYLENBQVI7O0FBRUEsWUFBSWMsS0FBSixFQUFXO0FBQ1RKLGNBQUksR0FBR0EsSUFBSSxDQUFDVSxTQUFMLENBQWVOLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csTUFBeEIsQ0FBUDtBQUNBSCxlQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNPLE9BQVQsQ0FBaUJyQixNQUFqQixFQUF5QnNCLFdBQXpCO0FBQ0FULGVBQUssR0FBRyxLQUFSO0FBQ0QsU0FQaUMsQ0FPaEM7O0FBRUgsT0FUTSxNQVNBLElBQUlILElBQUksQ0FBQ1EsT0FBTCxDQUFhLEdBQWIsS0FBcUIsQ0FBekIsRUFBNEI7QUFDakNKLGFBQUssR0FBR0osSUFBSSxDQUFDSSxLQUFMLENBQVdmLFFBQVgsQ0FBUjs7QUFFQSxZQUFJZSxLQUFKLEVBQVc7QUFDVEosY0FBSSxHQUFHQSxJQUFJLENBQUNVLFNBQUwsQ0FBZU4sS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxNQUF4QixDQUFQO0FBQ0FILGVBQUssQ0FBQyxDQUFELENBQUwsQ0FBU08sT0FBVCxDQUFpQnRCLFFBQWpCLEVBQTJCd0IsYUFBM0I7QUFDQVYsZUFBSyxHQUFHLEtBQVI7QUFDRDtBQUNGOztBQUVELFVBQUlBLEtBQUosRUFBVztBQUNURCxhQUFLLEdBQUdGLElBQUksQ0FBQ1EsT0FBTCxDQUFhLEdBQWIsQ0FBUjtBQUNBLFlBQUlNLElBQUksR0FBR1osS0FBSyxHQUFHLENBQVIsR0FBWUYsSUFBWixHQUFtQkEsSUFBSSxDQUFDVSxTQUFMLENBQWUsQ0FBZixFQUFrQlIsS0FBbEIsQ0FBOUI7QUFDQUYsWUFBSSxHQUFHRSxLQUFLLEdBQUcsQ0FBUixHQUFZLEVBQVosR0FBaUJGLElBQUksQ0FBQ1UsU0FBTCxDQUFlUixLQUFmLENBQXhCOztBQUVBLFlBQUlELE9BQU8sQ0FBQ0UsS0FBWixFQUFtQjtBQUNqQkYsaUJBQU8sQ0FBQ0UsS0FBUixDQUFjVyxJQUFkO0FBQ0Q7QUFDRjtBQUNGLEtBMUNELE1BMENPO0FBQ0xkLFVBQUksR0FBR0EsSUFBSSxDQUFDVyxPQUFMLENBQWEsSUFBSUksTUFBSixDQUFXLG9CQUFvQlYsS0FBSyxDQUFDQyxJQUFOLEVBQXBCLEdBQW1DLFFBQTlDLENBQWIsRUFBc0UsVUFBVVUsR0FBVixFQUFlRixJQUFmLEVBQXFCO0FBQ2hHQSxZQUFJLEdBQUdBLElBQUksQ0FBQ0gsT0FBTCxDQUFhLDZDQUFiLEVBQTRELE1BQTVELENBQVA7O0FBRUEsWUFBSVYsT0FBTyxDQUFDRSxLQUFaLEVBQW1CO0FBQ2pCRixpQkFBTyxDQUFDRSxLQUFSLENBQWNXLElBQWQ7QUFDRDs7QUFFRCxlQUFPLEVBQVA7QUFDRCxPQVJNLENBQVA7QUFTQUYsaUJBQVcsQ0FBQyxFQUFELEVBQUtQLEtBQUssQ0FBQ0MsSUFBTixFQUFMLENBQVg7QUFDRDs7QUFFRCxRQUFJTixJQUFJLElBQUlNLElBQVosRUFBa0I7QUFDaEIsWUFBTSxrQkFBa0JOLElBQXhCO0FBQ0Q7O0FBRURNLFFBQUksR0FBR04sSUFBUDtBQUNELEdBMUVnQyxDQTBFL0I7OztBQUdGWSxhQUFXOztBQUVYLFdBQVNDLGFBQVQsQ0FBdUJJLEdBQXZCLEVBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckMsRUFBMkNDLEtBQTNDLEVBQWtEO0FBQ2hERixXQUFPLEdBQUdBLE9BQU8sQ0FBQ0csV0FBUixFQUFWOztBQUVBLFFBQUkzQixLQUFLLENBQUN3QixPQUFELENBQVQsRUFBb0I7QUFDbEIsYUFBT2IsS0FBSyxDQUFDQyxJQUFOLE1BQWdCWCxNQUFNLENBQUNVLEtBQUssQ0FBQ0MsSUFBTixFQUFELENBQTdCLEVBQTZDO0FBQzNDTSxtQkFBVyxDQUFDLEVBQUQsRUFBS1AsS0FBSyxDQUFDQyxJQUFOLEVBQUwsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVYsU0FBUyxDQUFDc0IsT0FBRCxDQUFULElBQXNCYixLQUFLLENBQUNDLElBQU4sTUFBZ0JZLE9BQTFDLEVBQW1EO0FBQ2pETixpQkFBVyxDQUFDLEVBQUQsRUFBS00sT0FBTCxDQUFYO0FBQ0Q7O0FBRURFLFNBQUssR0FBRzVCLEtBQUssQ0FBQzBCLE9BQUQsQ0FBTCxJQUFrQixDQUFDLENBQUNFLEtBQTVCOztBQUVBLFFBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1ZmLFdBQUssQ0FBQ2lCLElBQU4sQ0FBV0osT0FBWDtBQUNEOztBQUVELFFBQUlqQixPQUFPLENBQUNzQixLQUFaLEVBQW1CO0FBQ2pCLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FMLFVBQUksQ0FBQ1IsT0FBTCxDQUFhcEIsSUFBYixFQUFtQixVQUFVYSxLQUFWLEVBQWlCcUIsSUFBakIsRUFBdUI7QUFDeEMsWUFBSUMsS0FBSyxHQUFHQyxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQXhCLEdBQThCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQXhCLEdBQThCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQXhCLEdBQThCOUIsU0FBUyxDQUFDNEIsSUFBRCxDQUFULEdBQWtCQSxJQUFsQixHQUF5QixFQUEvSDtBQUNBRCxhQUFLLENBQUNGLElBQU4sQ0FBVztBQUNURyxjQUFJLEVBQUVBLElBREc7QUFFVEMsZUFBSyxFQUFFQSxLQUZFO0FBR1RFLGlCQUFPLEVBQUVGLEtBQUssQ0FBQ2YsT0FBTixDQUFjLGFBQWQsRUFBNkIsUUFBN0IsQ0FIQSxDQUd1QztBQUh2QyxTQUFYOztBQU1ELE9BUkQ7O0FBVUEsVUFBSVYsT0FBTyxDQUFDc0IsS0FBWixFQUFtQjtBQUNqQnRCLGVBQU8sQ0FBQ3NCLEtBQVIsQ0FBY0wsT0FBZCxFQUF1Qk0sS0FBdkIsRUFBOEJKLEtBQTlCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQVNSLFdBQVQsQ0FBcUJLLEdBQXJCLEVBQTBCQyxPQUExQixFQUFtQztBQUNqQztBQUNBLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osVUFBSVcsR0FBRyxHQUFHLENBQVY7QUFDRCxLQUZELENBRUU7QUFGRixTQUdLO0FBQ0QsYUFBSyxJQUFJQSxHQUFHLEdBQUd4QixLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUE5QixFQUFpQ3NCLEdBQUcsSUFBSSxDQUF4QyxFQUEyQ0EsR0FBRyxFQUE5QyxFQUFrRDtBQUNoRCxjQUFJeEIsS0FBSyxDQUFDd0IsR0FBRCxDQUFMLElBQWNYLE9BQWxCLEVBQTJCO0FBQ3pCO0FBQ0Q7QUFDRjtBQUNGOztBQUVILFFBQUlXLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDWjtBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHekIsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBNUIsRUFBK0J1QixDQUFDLElBQUlELEdBQXBDLEVBQXlDQyxDQUFDLEVBQTFDLEVBQThDO0FBQzVDLFlBQUk3QixPQUFPLENBQUM4QixHQUFaLEVBQWlCO0FBQ2Y5QixpQkFBTyxDQUFDOEIsR0FBUixDQUFZMUIsS0FBSyxDQUFDeUIsQ0FBRCxDQUFqQjtBQUNEO0FBQ0YsT0FOVyxDQU1WOzs7QUFHRnpCLFdBQUssQ0FBQ0UsTUFBTixHQUFlc0IsR0FBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTcEMsT0FBVCxDQUFpQnVDLEdBQWpCLEVBQXNCO0FBQ3BCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLENBQVo7O0FBRUEsT0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSSxLQUFLLENBQUMzQixNQUExQixFQUFrQ3VCLENBQUMsRUFBbkMsRUFBdUM7QUFDckNHLE9BQUcsQ0FBQ0MsS0FBSyxDQUFDSixDQUFELENBQU4sQ0FBSCxHQUFnQixJQUFoQjtBQUNEOztBQUVELFNBQU9HLEdBQVA7QUFDRDs7QUFFRCxTQUFTRyxhQUFULENBQXVCcEMsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0EsSUFBSSxDQUFDVyxPQUFMLENBQWEsZUFBYixFQUE4QixFQUE5QixFQUFrQ0EsT0FBbEMsQ0FBMEMsZ0JBQTFDLEVBQTRELEVBQTVELEVBQWdFQSxPQUFoRSxDQUF3RSxnQkFBeEUsRUFBMEYsRUFBMUYsQ0FBUDtBQUNEOztBQUVELFNBQVMwQixVQUFULENBQW9CYixLQUFwQixFQUEyQjtBQUN6QixTQUFPQSxLQUFLLENBQUNjLE1BQU4sQ0FBYSxVQUFVQyxHQUFWLEVBQWVoRCxJQUFmLEVBQXFCO0FBQ3ZDLFFBQUltQyxLQUFLLEdBQUduQyxJQUFJLENBQUNtQyxLQUFqQjtBQUNBLFFBQUlELElBQUksR0FBR2xDLElBQUksQ0FBQ2tDLElBQWhCOztBQUVBLFFBQUljLEdBQUcsQ0FBQ2QsSUFBRCxDQUFQLEVBQWU7QUFDaEJjLFNBQUcsQ0FBQ2QsSUFBRCxDQUFILEdBQVljLEdBQUcsQ0FBQ2QsSUFBRCxDQUFILEdBQVksR0FBWixHQUFrQkMsS0FBOUI7QUFDRSxLQUZELE1BRU87QUFDUmEsU0FBRyxDQUFDZCxJQUFELENBQUgsR0FBWUMsS0FBWjtBQUNFOztBQUVELFdBQU9hLEdBQVA7QUFDRCxHQVhNLEVBV0osRUFYSSxDQUFQO0FBWUQ7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQnhDLElBQW5CLEVBQXlCO0FBQ3ZCQSxNQUFJLEdBQUdvQyxhQUFhLENBQUNwQyxJQUFELENBQXBCO0FBQ0EsTUFBSXlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsT0FBTyxHQUFHO0FBQ1pDLFFBQUksRUFBRSxNQURNO0FBRVpDLFlBQVEsRUFBRSxFQUZFLEVBQWQ7O0FBSUE3QyxZQUFVLENBQUNDLElBQUQsRUFBTztBQUNmdUIsU0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZU4sR0FBZixFQUFvQk8sS0FBcEIsRUFBMkJKLEtBQTNCLEVBQWtDO0FBQ3ZDLFVBQUl1QixJQUFJLEdBQUc7QUFDVGxCLFlBQUksRUFBRVIsR0FERyxFQUFYOzs7QUFJQSxVQUFJTyxLQUFLLENBQUNqQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCb0MsWUFBSSxDQUFDbkIsS0FBTCxHQUFhYSxVQUFVLENBQUNiLEtBQUQsQ0FBdkI7QUFDRDs7QUFFRCxVQUFJSixLQUFKLEVBQVc7QUFDVCxZQUFJeUIsTUFBTSxHQUFHSixNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWFDLE9BQTFCOztBQUVBLFlBQUksQ0FBQ0csTUFBTSxDQUFDRCxRQUFaLEVBQXNCO0FBQ3BCQyxnQkFBTSxDQUFDRCxRQUFQLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRURDLGNBQU0sQ0FBQ0QsUUFBUCxDQUFnQnRCLElBQWhCLENBQXFCcUIsSUFBckI7QUFDRCxPQVJELE1BUU87QUFDTEYsY0FBTSxDQUFDSyxPQUFQLENBQWVILElBQWY7QUFDRDtBQUNGLEtBckJjO0FBc0JmWixPQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhZCxHQUFiLEVBQWtCO0FBQ3JCLFVBQUkwQixJQUFJLEdBQUdGLE1BQU0sQ0FBQ00sS0FBUCxFQUFYO0FBQ0EsVUFBSUosSUFBSSxDQUFDbEIsSUFBTCxLQUFjUixHQUFsQixFQUF1QixlQUFjLGlDQUFkOztBQUV2QixVQUFJd0IsTUFBTSxDQUFDbEMsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qm1DLGVBQU8sQ0FBQ0UsUUFBUixDQUFpQnRCLElBQWpCLENBQXNCcUIsSUFBdEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJRSxNQUFNLEdBQUdKLE1BQU0sQ0FBQyxDQUFELENBQW5COztBQUVBLFlBQUksQ0FBQ0ksTUFBTSxDQUFDRCxRQUFaLEVBQXNCO0FBQ3BCQyxnQkFBTSxDQUFDRCxRQUFQLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRURDLGNBQU0sQ0FBQ0QsUUFBUCxDQUFnQnRCLElBQWhCLENBQXFCcUIsSUFBckI7QUFDRDtBQUNGLEtBckNjO0FBc0NmeEMsU0FBSyxFQUFFLFNBQVNBLEtBQVQsQ0FBZVcsSUFBZixFQUFxQjtBQUMxQixVQUFJNkIsSUFBSSxHQUFHO0FBQ1RLLFlBQUksRUFBRSxNQURHO0FBRVRsQyxZQUFJLEVBQUVBLElBRkcsRUFBWDs7O0FBS0EsVUFBSTJCLE1BQU0sQ0FBQ2xDLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJtQyxlQUFPLENBQUNFLFFBQVIsQ0FBaUJ0QixJQUFqQixDQUFzQnFCLElBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUUsTUFBTSxHQUFHSixNQUFNLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxZQUFJLENBQUNJLE1BQU0sQ0FBQ0QsUUFBWixFQUFzQjtBQUNwQkMsZ0JBQU0sQ0FBQ0QsUUFBUCxHQUFrQixFQUFsQjtBQUNEOztBQUVEQyxjQUFNLENBQUNELFFBQVAsQ0FBZ0J0QixJQUFoQixDQUFxQnFCLElBQXJCO0FBQ0Q7QUFDRixLQXZEYztBQXdEZmxDLFdBQU8sRUFBRSxTQUFTQSxPQUFULENBQWlCSyxJQUFqQixFQUF1QjtBQUM5QixVQUFJNkIsSUFBSSxHQUFHO0FBQ1RBLFlBQUksRUFBRSxTQURHO0FBRVQ3QixZQUFJLEVBQUVBLElBRkcsRUFBWDs7QUFJQSxVQUFJK0IsTUFBTSxHQUFHSixNQUFNLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxVQUFJLENBQUNJLE1BQU0sQ0FBQ0QsUUFBWixFQUFzQjtBQUNwQkMsY0FBTSxDQUFDRCxRQUFQLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRURDLFlBQU0sQ0FBQ0QsUUFBUCxDQUFnQnRCLElBQWhCLENBQXFCcUIsSUFBckI7QUFDRCxLQXBFYyxFQUFQLENBQVY7O0FBc0VBLFNBQU9ELE9BQU8sQ0FBQ0UsUUFBZjtBQUNELEM7O0FBRWNKLFMiLCJmaWxlIjoiMTAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogSFRNTDUgUGFyc2VyIEJ5IFNhbSBCbG93ZXNcclxuICpcclxuICogRGVzaWduZWQgZm9yIEhUTUw1IGRvY3VtZW50c1xyXG4gKlxyXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEpvaG4gUmVzaWcgKGVqb2huLm9yZylcclxuICogaHR0cDovL2Vqb2huLm9yZy9ibG9nL3B1cmUtamF2YXNjcmlwdC1odG1sLXBhcnNlci9cclxuICogT3JpZ2luYWwgY29kZSBieSBFcmlrIEFydmlkc3NvbiwgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xyXG4gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIExpY2Vuc2VcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKlxyXG4gKiBUaGlzIGNvZGUgaXMgdHJpcGxlIGxpY2Vuc2VkIHVzaW5nIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMCxcclxuICogTW96aWxsYSBQdWJsaWMgTGljZW5zZSBvciBHTlUgUHVibGljIExpY2Vuc2VcclxuICpcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdFxyXG4gKiB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHlcclxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICpcclxuICogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBWZXJzaW9uIDEuMSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW5cclxuICogY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICogaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9NUEwvXHJcbiAqXHJcbiAqIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIlxyXG4gKiBiYXNpcywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZVxyXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnNcclxuICogdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqXHJcbiAqIFRoZSBPcmlnaW5hbCBDb2RlIGlzIFNpbXBsZSBIVE1MIFBhcnNlci5cclxuICpcclxuICogVGhlIEluaXRpYWwgRGV2ZWxvcGVyIG9mIHRoZSBPcmlnaW5hbCBDb2RlIGlzIEVyaWsgQXJ2aWRzc29uLlxyXG4gKiBQb3J0aW9ucyBjcmVhdGVkIGJ5IEVyaWsgQXJ2aWRzc3NvbiBhcmUgQ29weXJpZ2h0IChDKSAyMDA0LiBBbGwgUmlnaHRzXHJcbiAqIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDJcclxuICogb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlXHJcbiAqIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDEsIFVTQS5cclxuICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBVc2FnZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqXHJcbiAqIC8vIFVzZSBsaWtlIHNvOlxyXG4gKiBIVE1MUGFyc2VyKGh0bWxTdHJpbmcsIHtcclxuICogICAgIHN0YXJ0OiBmdW5jdGlvbih0YWcsIGF0dHJzLCB1bmFyeSkge30sXHJcbiAqICAgICBlbmQ6IGZ1bmN0aW9uKHRhZykge30sXHJcbiAqICAgICBjaGFyczogZnVuY3Rpb24odGV4dCkge30sXHJcbiAqICAgICBjb21tZW50OiBmdW5jdGlvbih0ZXh0KSB7fVxyXG4gKiB9KTtcclxuICpcclxuICogLy8gb3IgdG8gZ2V0IGFuIFhNTCBzdHJpbmc6XHJcbiAqIEhUTUx0b1hNTChodG1sU3RyaW5nKTtcclxuICpcclxuICogLy8gb3IgdG8gZ2V0IGFuIFhNTCBET00gRG9jdW1lbnRcclxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcpO1xyXG4gKlxyXG4gKiAvLyBvciB0byBpbmplY3QgaW50byBhbiBleGlzdGluZyBkb2N1bWVudC9ET00gbm9kZVxyXG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZywgZG9jdW1lbnQpO1xyXG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZywgZG9jdW1lbnQuYm9keSk7XHJcbiAqXHJcbiAqL1xyXG4vLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcclxudmFyIHN0YXJ0VGFnID0gL148KFstQS1aYS16MC05X10rKSgoPzpcXHMrW2EtekEtWl86XVstYS16QS1aMC05XzouXSooPzpcXHMqPVxccyooPzooPzpcIlteXCJdKlwiKXwoPzonW14nXSonKXxbXj5cXHNdKykpPykqKVxccyooXFwvPyk+LztcclxudmFyIGVuZFRhZyA9IC9ePFxcLyhbLUEtWmEtejAtOV9dKylbXj5dKj4vO1xyXG52YXIgYXR0ciA9IC8oW2EtekEtWl86XVstYS16QS1aMC05XzouXSopKD86XFxzKj1cXHMqKD86KD86XCIoKD86XFxcXC58W15cIl0pKilcIil8KD86JygoPzpcXFxcLnxbXiddKSopJyl8KFtePlxcc10rKSkpPy9nOyAvLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNVxyXG5cclxudmFyIGVtcHR5ID0gbWFrZU1hcCgnYXJlYSxiYXNlLGJhc2Vmb250LGJyLGNvbCxmcmFtZSxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLGVtYmVkLGNvbW1hbmQsa2V5Z2VuLHNvdXJjZSx0cmFjayx3YnInKTsgLy8gQmxvY2sgRWxlbWVudHMgLSBIVE1MIDVcclxuLy8gZml4ZWQgYnkgeHh4IOWwhiBpbnMg5qCH562+5LuO5Z2X57qn5ZCN5Y2V5Lit56e76ZmkXHJcblxyXG52YXIgYmxvY2sgPSBtYWtlTWFwKCdhLGFkZHJlc3MsYXJ0aWNsZSxhcHBsZXQsYXNpZGUsYXVkaW8sYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNlbnRlcixkZCxkZWwsZGlyLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxmcmFtZXNldCxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGhyLGlmcmFtZSxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW8nKTsgLy8gSW5saW5lIEVsZW1lbnRzIC0gSFRNTCA1XHJcblxyXG52YXIgaW5saW5lID0gbWFrZU1hcCgnYWJicixhY3JvbnltLGFwcGxldCxiLGJhc2Vmb250LGJkbyxiaWcsYnIsYnV0dG9uLGNpdGUsY29kZSxkZWwsZGZuLGVtLGZvbnQsaSxpZnJhbWUsaW1nLGlucHV0LGlucyxrYmQsbGFiZWwsbWFwLG9iamVjdCxxLHMsc2FtcCxzY3JpcHQsc2VsZWN0LHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRleHRhcmVhLHR0LHUsdmFyJyk7IC8vIEVsZW1lbnRzIHRoYXQgeW91IGNhbiwgaW50ZW50aW9uYWxseSwgbGVhdmUgb3BlblxyXG4vLyAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXHJcblxyXG52YXIgY2xvc2VTZWxmID0gbWFrZU1hcCgnY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyJyk7IC8vIEF0dHJpYnV0ZXMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlcyBmaWxsZWQgaW4gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblxyXG52YXIgZmlsbEF0dHJzID0gbWFrZU1hcCgnY2hlY2tlZCxjb21wYWN0LGRlY2xhcmUsZGVmZXIsZGlzYWJsZWQsaXNtYXAsbXVsdGlwbGUsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm93cmFwLHJlYWRvbmx5LHNlbGVjdGVkJyk7IC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxyXG5cclxudmFyIHNwZWNpYWwgPSBtYWtlTWFwKCdzY3JpcHQsc3R5bGUnKTtcclxuZnVuY3Rpb24gSFRNTFBhcnNlcihodG1sLCBoYW5kbGVyKSB7XHJcbiAgdmFyIGluZGV4O1xyXG4gIHZhciBjaGFycztcclxuICB2YXIgbWF0Y2g7XHJcbiAgdmFyIHN0YWNrID0gW107XHJcbiAgdmFyIGxhc3QgPSBodG1sO1xyXG5cclxuICBzdGFjay5sYXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuICB9O1xyXG5cclxuICB3aGlsZSAoaHRtbCkge1xyXG4gICAgY2hhcnMgPSB0cnVlOyAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgc2NyaXB0IG9yIHN0eWxlIGVsZW1lbnRcclxuXHJcbiAgICBpZiAoIXN0YWNrLmxhc3QoKSB8fCAhc3BlY2lhbFtzdGFjay5sYXN0KCldKSB7XHJcbiAgICAgIC8vIENvbW1lbnRcclxuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPCEtLScpID09IDApIHtcclxuICAgICAgICBpbmRleCA9IGh0bWwuaW5kZXhPZignLS0+Jyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBpbmRleCkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhpbmRleCArIDMpO1xyXG4gICAgICAgICAgY2hhcnMgPSBmYWxzZTtcclxuICAgICAgICB9IC8vIGVuZCB0YWdcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoaHRtbC5pbmRleE9mKCc8LycpID09IDApIHtcclxuICAgICAgICBtYXRjaCA9IGh0bWwubWF0Y2goZW5kVGFnKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICBodG1sID0gaHRtbC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcclxuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2UoZW5kVGFnLCBwYXJzZUVuZFRhZyk7XHJcbiAgICAgICAgICBjaGFycyA9IGZhbHNlO1xyXG4gICAgICAgIH0gLy8gc3RhcnQgdGFnXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZignPCcpID09IDApIHtcclxuICAgICAgICBtYXRjaCA9IGh0bWwubWF0Y2goc3RhcnRUYWcpO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xyXG4gICAgICAgICAgbWF0Y2hbMF0ucmVwbGFjZShzdGFydFRhZywgcGFyc2VTdGFydFRhZyk7XHJcbiAgICAgICAgICBjaGFycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYXJzKSB7XHJcbiAgICAgICAgaW5kZXggPSBodG1sLmluZGV4T2YoJzwnKTtcclxuICAgICAgICB2YXIgdGV4dCA9IGluZGV4IDwgMCA/IGh0bWwgOiBodG1sLnN1YnN0cmluZygwLCBpbmRleCk7XHJcbiAgICAgICAgaHRtbCA9IGluZGV4IDwgMCA/ICcnIDogaHRtbC5zdWJzdHJpbmcoaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoaGFuZGxlci5jaGFycykge1xyXG4gICAgICAgICAgaGFuZGxlci5jaGFycyh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UobmV3IFJlZ0V4cCgnKFtcXFxcc1xcXFxTXSo/KTxcXC8nICsgc3RhY2subGFzdCgpICsgJ1tePl0qPicpLCBmdW5jdGlvbiAoYWxsLCB0ZXh0KSB7XHJcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPnw8IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csICckMSQyJyk7XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVyLmNoYXJzKSB7XHJcbiAgICAgICAgICBoYW5kbGVyLmNoYXJzKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KTtcclxuICAgICAgcGFyc2VFbmRUYWcoJycsIHN0YWNrLmxhc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGh0bWwgPT0gbGFzdCkge1xyXG4gICAgICB0aHJvdyAnUGFyc2UgRXJyb3I6ICcgKyBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3QgPSBodG1sO1xyXG4gIH0gLy8gQ2xlYW4gdXAgYW55IHJlbWFpbmluZyB0YWdzXHJcblxyXG5cclxuICBwYXJzZUVuZFRhZygpO1xyXG5cclxuICBmdW5jdGlvbiBwYXJzZVN0YXJ0VGFnKHRhZywgdGFnTmFtZSwgcmVzdCwgdW5hcnkpIHtcclxuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKGJsb2NrW3RhZ05hbWVdKSB7XHJcbiAgICAgIHdoaWxlIChzdGFjay5sYXN0KCkgJiYgaW5saW5lW3N0YWNrLmxhc3QoKV0pIHtcclxuICAgICAgICBwYXJzZUVuZFRhZygnJywgc3RhY2subGFzdCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZVNlbGZbdGFnTmFtZV0gJiYgc3RhY2subGFzdCgpID09IHRhZ05hbWUpIHtcclxuICAgICAgcGFyc2VFbmRUYWcoJycsIHRhZ05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYXJ5ID0gZW1wdHlbdGFnTmFtZV0gfHwgISF1bmFyeTtcclxuXHJcbiAgICBpZiAoIXVuYXJ5KSB7XHJcbiAgICAgIHN0YWNrLnB1c2godGFnTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbmRsZXIuc3RhcnQpIHtcclxuICAgICAgdmFyIGF0dHJzID0gW107XHJcbiAgICAgIHJlc3QucmVwbGFjZShhdHRyLCBmdW5jdGlvbiAobWF0Y2gsIG5hbWUpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiBhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOiBmaWxsQXR0cnNbbmFtZV0gPyBuYW1lIDogJyc7XHJcbiAgICAgICAgYXR0cnMucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgZXNjYXBlZDogdmFsdWUucmVwbGFjZSgvKF58W15cXFxcXSlcIi9nLCAnJDFcXFxcXFxcIicpIC8vIFwiXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChoYW5kbGVyLnN0YXJ0KSB7XHJcbiAgICAgICAgaGFuZGxlci5zdGFydCh0YWdOYW1lLCBhdHRycywgdW5hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZUVuZFRhZyh0YWcsIHRhZ05hbWUpIHtcclxuICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXHJcbiAgICBpZiAoIXRhZ05hbWUpIHtcclxuICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICB9IC8vIEZpbmQgdGhlIGNsb3Nlc3Qgb3BlbmVkIHRhZyBvZiB0aGUgc2FtZSB0eXBlXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBwb3MgPSBzdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcclxuICAgICAgICAgIGlmIChzdGFja1twb3NdID09IHRhZ05hbWUpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKHBvcyA+PSAwKSB7XHJcbiAgICAgIC8vIENsb3NlIGFsbCB0aGUgb3BlbiBlbGVtZW50cywgdXAgdGhlIHN0YWNrXHJcbiAgICAgIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IHBvczsgaS0tKSB7XHJcbiAgICAgICAgaWYgKGhhbmRsZXIuZW5kKSB7XHJcbiAgICAgICAgICBoYW5kbGVyLmVuZChzdGFja1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xyXG5cclxuXHJcbiAgICAgIHN0YWNrLmxlbmd0aCA9IHBvcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VNYXAoc3RyKSB7XHJcbiAgdmFyIG9iaiA9IHt9O1xyXG4gIHZhciBpdGVtcyA9IHN0ci5zcGxpdCgnLCcpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYmpbaXRlbXNbaV1dID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURPQ1RZUEUoaHRtbCkge1xyXG4gIHJldHVybiBodG1sLnJlcGxhY2UoLzxcXD94bWwuKlxcPz5cXG4vLCAnJykucmVwbGFjZSgvPCFkb2N0eXBlLio+XFxuLywgJycpLnJlcGxhY2UoLzwhRE9DVFlQRS4qPlxcbi8sICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBdHRycyhhdHRycykge1xyXG4gIHJldHVybiBhdHRycy5yZWR1Y2UoZnVuY3Rpb24gKHByZSwgYXR0cikge1xyXG4gICAgdmFyIHZhbHVlID0gYXR0ci52YWx1ZTtcclxuICAgIHZhciBuYW1lID0gYXR0ci5uYW1lO1xyXG5cclxuICAgIGlmIChwcmVbbmFtZV0pIHtcclxuXHRcdFx0cHJlW25hbWVdID0gcHJlW25hbWVdICsgXCIgXCIgKyB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcblx0XHRcdHByZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmU7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xyXG4gIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xyXG4gIHZhciBzdGFja3MgPSBbXTtcclxuICB2YXIgcmVzdWx0cyA9IHtcclxuICAgIG5vZGU6ICdyb290JyxcclxuICAgIGNoaWxkcmVuOiBbXVxyXG4gIH07XHJcbiAgSFRNTFBhcnNlcihodG1sLCB7XHJcbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQodGFnLCBhdHRycywgdW5hcnkpIHtcclxuICAgICAgdmFyIG5vZGUgPSB7XHJcbiAgICAgICAgbmFtZTogdGFnXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgbm9kZS5hdHRycyA9IHBhcnNlQXR0cnMoYXR0cnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodW5hcnkpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gc3RhY2tzWzBdIHx8IHJlc3VsdHM7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YWNrcy51bnNoaWZ0KG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQodGFnKSB7XHJcbiAgICAgIHZhciBub2RlID0gc3RhY2tzLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChub2RlLm5hbWUgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xyXG5cclxuICAgICAgaWYgKHN0YWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHN0YWNrc1swXTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFyczogZnVuY3Rpb24gY2hhcnModGV4dCkge1xyXG4gICAgICB2YXIgbm9kZSA9IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHN0YWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXN1bHRzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHN0YWNrc1swXTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50KHRleHQpIHtcclxuICAgICAgdmFyIG5vZGUgPSB7XHJcbiAgICAgICAgbm9kZTogJ2NvbW1lbnQnLFxyXG4gICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgfTtcclxuICAgICAgdmFyIHBhcmVudCA9IHN0YWNrc1swXTtcclxuXHJcbiAgICAgIGlmICghcGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHRzLmNoaWxkcmVuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJzZUh0bWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///100\n");

/***/ }),

/***/ 101:
/*!***************************************************************************************************!*\
  !*** D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 102);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "height": "360upx",
    "position": "relative",
    "backgroundColor": "#cccccc",
    "flexDirection": "row",
    "overflow": "hidden"
  },
  "banner-img": {
    "flex": 1
  },
  "title-area": {
    "position": "absolute",
    "left": "30upx",
    "right": "30upx",
    "bottom": "30upx",
    "zIndex": 11
  },
  "title-text": {
    "fontSize": "32upx",
    "fontWeight": "400",
    "lineHeight": "42upx",
    "lines": 2,
    "color": "#ffffff",
    "overflow": "hidden"
  },
  "article-meta": {
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "article-meta-text": {
    "color": "#808080"
  },
  "article-text": {
    "fontSize": "26upx",
    "lineHeight": "50upx",
    "marginTop": 0,
    "marginRight": "20upx",
    "marginBottom": 0,
    "marginLeft": "20upx"
  },
  "article-author": {
    "fontSize": "30upx"
  },
  "article-time": {
    "fontSize": "30upx"
  },
  "article-content": {
    "fontSize": "30upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx",
    "marginBottom": "30upx",
    "overflow": "hidden"
  },
  "@VERSION": 2
}

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.0-31920210609001\",\"_inBundle\":false,\"_integrity\":\"sha512-C7xRbsS1pD075MeqOFHohS+5hTfiM6C3Kcl2dkzSUdrFXaQW7ajuXBxZQXpqxOgywe90kobWpnm2wxiO+rB7Sg==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-31920210609001.tgz\",\"_shasum\":\"749eafc9120797fb1e2461510145abe9d7f1a700\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/dcloud-plugins-new/release/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"1d8743e2c318b2a30d3bbd34f6657254a60d615f\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.0-31920210609001\"}");

/***/ }),

/***/ 22:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** D:/gitproject/new/kabu/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),

/***/ 36:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),

/***/ 4:
/*!**********************************************************!*\
  !*** D:/gitproject/new/kabu/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 5:
/*!**********************************************************!*\
  !*** D:/gitproject/new/kabu/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),

/***/ 6:
/*!**********************************************************************!*\
  !*** D:/gitproject/new/kabu/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 7:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/gitproject/new/kabu/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),

/***/ 94:
/*!*************************************************************************!*\
  !*** D:/gitproject/new/kabu/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/detail/detail.nvue?mpType=page */ 95);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/detail/detail'\n        _pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_detail_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLFFBQVEsNkVBQUc7QUFDWCxnQkFBZ0IsNkVBQUciLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwvZGV0YWlsLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZGV0YWlsL2RldGFpbCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ }),

/***/ 95:
/*!*******************************************************************!*\
  !*** D:/gitproject/new/kabu/pages/detail/detail.nvue?mpType=page ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.nvue?vue&type=template&id=64638088&mpType=page */ 96);\n/* harmony import */ var _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.nvue?vue&type=script&lang=js&mpType=page */ 98);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 101).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 101).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"d7149a3c\",\n  false,\n  _detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail/detail.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ29NO0FBQ3BNLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2MzgwODgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJkNzE0OWEzY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvZGV0YWlsLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ }),

/***/ 96:
/*!*************************************************************************************************!*\
  !*** D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=template&id=64638088&mpType=page ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=template&id=64638088&mpType=page */ 97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_template_id_64638088_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 97:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=template&id=64638088&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c(
          "view",
          { staticClass: ["banner"], attrs: { autoFocus: true } },
          [
            _c("u-image", {
              staticClass: ["banner-img"],
              attrs: { src: _vm.banner.image_url }
            }),
            _c("view", { staticClass: ["title-area"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["title-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.banner.title))]
              )
            ])
          ],
          1
        ),
        _c("view", { staticClass: ["article-meta"] }, [
          _c(
            "u-text",
            {
              staticClass: ["article-meta-text", "article-author"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v(_vm._s(_vm.banner.source))]
          ),
          _c(
            "u-text",
            {
              staticClass: ["article-meta-text", "article-text"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v("发表于")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["article-meta-text", "article-time"],
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [_vm._v(_vm._s(_vm.banner.datetime))]
          )
        ]),
        _c(
          "view",
          { staticClass: ["article-content"] },
          [
            _c("rich-text", {
              staticStyle: { fontSize: "14px" },
              attrs: { nodes: _vm.content }
            })
          ],
          1
        ),
        _c("view", { staticClass: ["comment-wrap"] })
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 98:
/*!*******************************************************************************************!*\
  !*** D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./detail.nvue?vue&type=script&lang=js&mpType=page */ 99);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9oQixDQUFnQixnakJBQUcsRUFBQyIsImZpbGUiOiI5OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98\n");

/***/ }),

/***/ 99:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/gitproject/new/kabu/pages/detail/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/html-parser */ 100));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar FAIL_CONTENT = '<p>获取信息失败1</p>';function parseImgs(nodes) {nodes.forEach(function (node) {if (node.name === 'img' && node.attrs && node.attrs['data-img-size-val']) {var sizes = node.attrs['data-img-size-val'].split(',');var width = uni.upx2px(720 * 0.9);var height = parseInt(width * (sizes[1] / sizes[0]));node.attrs.style = \"width:\".concat(width, \";height:\").concat(height, \";\");}if (Array.isArray(node.children)) {parseImgs(node.children);}});return nodes;\n}var _default =\n\n{\n  data: function data() {\n    return {\n      banner: {},\n      content: [] };\n\n  },\n  onShareAppMessage: function onShareAppMessage() {\n    return {\n      title: this.banner.title,\n      path: '/pages/detail/detail?query=' + JSON.stringify(this.banner) };\n\n  },\n  onLoad: function onLoad(event) {\n    // 目前在某些平台参数会被主动 decode，暂时这样处理。\n    try {\n      this.banner = JSON.parse(decodeURIComponent(event.query));\n    } catch (error) {\n      this.banner = JSON.parse(event.query);\n    }\n\n    uni.setNavigationBarTitle({\n      title: this.banner.title });\n\n\n    this.getDetail();\n  },\n  methods: {\n    getDetail: function getDetail() {var _this = this;\n      var baseUrl = uni.getStorageSync('baseUrl');\n      uni.request({\n        //Luke Zhou\n        url: baseUrl + '/rich-text/get?id=' + this.banner.newsid,\n        success: function success(result) {\n          var content = FAIL_CONTENT;\n          if (result.statusCode == 200) {\n            content = result.data.data.contents;\n          }\n          var nodes = (0, _htmlParser.default)(content);\n\n          parseImgs(nodes);\n\n          _this.content = nodes;\n        } });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsL2RldGFpbC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSwrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxvQ0FFQSwyQkFDQSwrQkFDQSxJQUNBLHVCQUNBLFVBREEsSUFFQSwrQkFIQSxFQUlBLENBQ0EsdURBQ0Esa0NBQ0EscURBQ0EsMEVBQ0EsQ0FDQSxtQ0FDQSx5QkFDQSxDQUNBLENBZEEsRUFlQTtBQUNBLEM7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGlCQUZBOztBQUlBLEdBTkE7QUFPQSxtQkFQQSwrQkFPQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSx1RUFGQTs7QUFJQSxHQVpBO0FBYUEsUUFiQSxrQkFhQSxLQWJBLEVBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBLENBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBREE7OztBQUlBO0FBQ0EsR0ExQkE7QUEyQkE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQWJBOztBQWVBLEtBbEJBLEVBM0JBLEUiLCJmaWxlIjoiOTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJhbm5lclwiIGF1dG8tZm9jdXM+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImJhbm5lci1pbWdcIiA6c3JjPVwiYmFubmVyLmltYWdlX3VybFwiPjwvaW1hZ2U+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGUtYXJlYVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUtdGV4dFwiPnt7YmFubmVyLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYXJ0aWNsZS1tZXRhXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1tZXRhLXRleHQgYXJ0aWNsZS1hdXRob3JcIj57e2Jhbm5lci5zb3VyY2V9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJhcnRpY2xlLW1ldGEtdGV4dCBhcnRpY2xlLXRleHRcIj7lj5Hooajkuo48L3RleHQ+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiYXJ0aWNsZS1tZXRhLXRleHQgYXJ0aWNsZS10aW1lXCI+e3tiYW5uZXIuZGF0ZXRpbWV9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYXJ0aWNsZS1jb250ZW50XCI+XHJcblx0XHRcdDxyaWNoLXRleHQgOm5vZGVzPVwiY29udGVudFwiIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O1wiPjwvcmljaC10ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LXdyYXBcIj48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaHRtbFBhcnNlciBmcm9tICdAL2NvbW1vbi9odG1sLXBhcnNlcidcclxuXHJcblx0Y29uc3QgRkFJTF9DT05URU5UID0gJzxwPuiOt+WPluS/oeaBr+Wksei0pTE8L3A+JztcclxuXHJcblx0ZnVuY3Rpb24gcGFyc2VJbWdzKG5vZGVzKSB7XHJcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0bm9kZS5uYW1lID09PSAnaW1nJyAmJlxyXG5cdFx0XHRcdG5vZGUuYXR0cnMgJiZcclxuXHRcdFx0XHRub2RlLmF0dHJzWydkYXRhLWltZy1zaXplLXZhbCddXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGNvbnN0IHNpemVzID0gbm9kZS5hdHRyc1snZGF0YS1pbWctc2l6ZS12YWwnXS5zcGxpdCgnLCcpXHJcblx0XHRcdFx0Y29uc3Qgd2lkdGggPSB1bmkudXB4MnB4KDcyMCAqIDAuOSlcclxuXHRcdFx0XHRjb25zdCBoZWlnaHQgPSBwYXJzZUludCh3aWR0aCAqIChzaXplc1sxXSAvIHNpemVzWzBdKSlcclxuXHRcdFx0XHRub2RlLmF0dHJzLnN0eWxlID0gYHdpZHRoOiR7d2lkdGh9O2hlaWdodDoke2hlaWdodH07YFxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XHJcblx0XHRcdFx0cGFyc2VJbWdzKG5vZGUuY2hpbGRyZW4pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gbm9kZXNcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YmFubmVyOiB7fSxcclxuXHRcdFx0XHRjb250ZW50OiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6IHRoaXMuYmFubmVyLnRpdGxlLFxyXG5cdFx0XHRcdHBhdGg6ICcvcGFnZXMvZGV0YWlsL2RldGFpbD9xdWVyeT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5iYW5uZXIpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoZXZlbnQpIHtcclxuXHRcdFx0Ly8g55uu5YmN5Zyo5p+Q5Lqb5bmz5Y+w5Y+C5pWw5Lya6KKr5Li75YqoIGRlY29kZe+8jOaaguaXtui/meagt+WkhOeQhuOAglxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMuYmFubmVyID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoZXZlbnQucXVlcnkpKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHR0aGlzLmJhbm5lciA9IEpTT04ucGFyc2UoZXZlbnQucXVlcnkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHR0aXRsZTogdGhpcy5iYW5uZXIudGl0bGVcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmdldERldGFpbCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGV0YWlsKCkge1xyXG5cdFx0XHRcdHZhciBiYXNlVXJsID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdiYXNlVXJsJyk7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0Ly9MdWtlIFpob3VcclxuXHRcdFx0XHRcdCB1cmw6IGJhc2VVcmwgKyAnL3JpY2gtdGV4dC9nZXQ/aWQ9JyArIHRoaXMuYmFubmVyLm5ld3NpZCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGNvbnRlbnQgPSBGQUlMX0NPTlRFTlRcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSByZXN1bHQuZGF0YS5kYXRhLmNvbnRlbnRzXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgbm9kZXMgPSBodG1sUGFyc2VyKGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdFx0XHRwYXJzZUltZ3Mobm9kZXMpXHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBub2Rlc1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcblx0cGFnZSB7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC5iYW5uZXIge1xyXG5cdFx0aGVpZ2h0OiAzNjB1cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQuYmFubmVyLWltZyB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlLWFyZWEge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMzB1cHg7XHJcblx0XHRyaWdodDogMzB1cHg7XHJcblx0XHRib3R0b206IDMwdXB4O1xyXG5cdFx0ei1pbmRleDogMTE7XHJcblx0fVxyXG5cclxuXHQudGl0bGUtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDMydXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MnVweDtcclxuXHRcdGxpbmVzOiAyO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LmFydGljbGUtbWV0YSB7XHJcblx0XHRwYWRkaW5nOiAyMHVweCAzMHVweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdH1cclxuXHJcblx0LmFydGljbGUtbWV0YS10ZXh0IHtcclxuXHRcdGNvbG9yOiBncmF5O1xyXG5cdH1cclxuXHJcblx0LmFydGljbGUtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI2dXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwdXB4O1xyXG5cdFx0bWFyZ2luOiAwIDIwdXB4O1xyXG5cdH1cclxuXHJcblx0LmFydGljbGUtYXV0aG9yIHtcclxuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQuYXJ0aWNsZS10aW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XHJcblx0fVxyXG5cclxuXHQuYXJ0aWNsZS1jb250ZW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XHJcblx0XHRwYWRkaW5nOiAwIDMwdXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzB1cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///99\n");

/***/ })

/******/ });