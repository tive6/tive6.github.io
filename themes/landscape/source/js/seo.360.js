(function(e) {
    function t(e) {
        var t = location.href,
            n = t.split("").reverse(),
            r = e.split(""),
            i = [];
        for (var s = 0,
                 o = 16; s < o; s++) i.push(r[s] + (n[s] || ""));
        return i.join("")
    }

    var n = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.so\.com)/gi,
        r = e.location.href;
    if (r && !n.test(r) && window.navigator.appName) {
        var i = "//s.360.cn/so/zz.gif",
            // s = document.getElementById("sozz"),
            o = 'ab77b6ea7f3fbf79',
            u = t(o),
            a = new Image;
        r && (i += "?url=" + encodeURIComponent(r)),
        o && (i += "&sid=" + o),
        u && (i += "&token=" + u),
        o && (a.src = i)
    }
})(window);
