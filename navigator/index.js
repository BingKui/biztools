const ua = navigator.userAgent;
const NavigatorTools = {
    // 判断是否是Window平台
    isWin: () => {
        return navigator.platform.indexOf('Win') !== -1;
    },
    // 判断是否是Mac平台
    isMac: () => {
        return navigator.platform.indexOf('Mac') !== -1;
    },
    // 判断是否是Lunix平台
    isLunix: () => {
        return /Linux/i.test(navigator.userAgent);
    },
    // 判读是否是Unix平台
    isUnix: () => {
        return navigator.platform === 'X11';
    },
    // 判断平台（PC和移动）
    isMobile: () => {
        const agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
        return agents.find(item => ua.indexOf(item) > -1).length > 0;
    },
    // 安卓判断
    isAndroid: () => {
        return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    },
    // 苹果设备判断
    isiPhone: () => {
        return ua.indexOf('iPhone') > -1;
    },
    isiPad: () => {
        return ua.indexOf('iPad') > -1;
    },
    isiPod: () => {
        return ua.indexOf('iPod') > -1;
    },
    // 判断用户使用的浏览器
    // ie浏览器
    isIE: () => {
        return /ie/i.test(ua.toLowerCase());
    },
    // Edge浏览器
    isEdge: () => {
        return /edge/i.test(ua.toLowerCase());
    },
    // firefox浏览器
    isFirefox: () => {
        return /firefox/i.test(ua.toLowerCase());
    },
    // 谷歌chrome浏览器
    isChrome: () => {
        return /chrome/i.test(ua.toLowerCase());
    },
    // opera浏览器
    isOpera: () => {
        return /opera/i.test(ua.toLowerCase());
    },
    // safari浏览器
    isSafari: () => {
        return /safari/i.test(ua.toLowerCase());
    },
    // 微信浏览器
    isWechatBrowers: () => {
        return /micromessenger/i.test(ua.toLowerCase());
    },
    // UC浏览器
    isUC: () => {
        return /ucweb/i.test(ua.toLowerCase());
    },
};

export default NavigatorTools;