
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/news/index","pages/detail/detail","pages/video/video","pages/stockquot/Kline","pages/ucenter/ucenter","pages/recommend/recommend","pages/video/addVideo"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"投資情報","navigationBarBackgroundColor":"#2F85FC","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/news/index","iconPath":"static/center.png","selectedIconPath":"static/home-active.png","text":"ホーム"},{"pagePath":"pages/recommend/recommend","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"推薦"},{"pagePath":"pages/stockquot/Kline","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"株価"},{"pagePath":"pages/video/video","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"動画"},{"pagePath":"pages/ucenter/ucenter","iconPath":"static/center.png","selectedIconPath":"static/center-active.png","text":"ユーザ"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"kabu","compilerVersion":"3.1.2","entryPagePath":"pages/news/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/news/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/detail/detail","meta":{"isNVue":true},"window":{"titleNView":{"type":"transparent"}}},{"path":"/pages/video/video","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/pages/stockquot/Kline","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/ucenter/ucenter","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/recommend/recommend","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/video/addVideo","meta":{"isNVue":true},"window":{"navigationStyle":"custom","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
