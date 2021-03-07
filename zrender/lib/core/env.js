var Browser = (function () {
    function Browser() {
        this.firefox = false;
        this.ie = false;
        this.edge = false;
        this.newEdge = false;
        this.weChat = false;
    }
    return Browser;
}());
var Env = (function () {
    function Env() {
        this.browser = new Browser();
        this.node = false;
        this.wxa = false;
        this.worker = false;
        this.canvasSupported = false;
        this.svgSupported = false;
        this.touchEventsSupported = false;
        this.pointerEventsSupported = false;
        this.domSupported = false;
    }
    return Env;
}());
var env = new Env();
if (typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function') {
    env.wxa = true;
    env.canvasSupported = true;
    env.touchEventsSupported = true;
}
else if (typeof document === 'undefined' && typeof self !== 'undefined') {
    env.worker = true;
    env.canvasSupported = true;
}
else if (typeof navigator === 'undefined') {
    env.node = true;
    env.canvasSupported = true;
    env.svgSupported = true;
}
else {
    detect(navigator.userAgent, env);
}
function detect(ua, env) {
    var browser = env.browser;
    var firefox = ua.match(/Firefox\/([\d.]+)/);
    var ie = ua.match(/MSIE\s([\d.]+)/)
        || ua.match(/Trident\/.+?rv:(([\d.]+))/);
    var edge = ua.match(/Edge?\/([\d.]+)/);
    var weChat = (/micromessenger/i).test(ua);
    if (firefox) {
        browser.firefox = true;
        browser.version = firefox[1];
    }
    if (ie) {
        browser.ie = true;
        browser.version = ie[1];
    }
    if (edge) {
        browser.edge = true;
        browser.version = edge[1];
        browser.newEdge = +edge[1].split('.')[0] > 18;
    }
    if (weChat) {
        browser.weChat = true;
    }
    env.canvasSupported = !!document.createElement('canvas').getContext;
    env.svgSupported = typeof SVGRect !== 'undefined';
    env.touchEventsSupported = 'ontouchstart' in window && !browser.ie && !browser.edge;
    env.pointerEventsSupported = 'onpointerdown' in window
        && (browser.edge || (browser.ie && +browser.version >= 11));
    env.domSupported = typeof document !== 'undefined';
}
export default env;
