/*! For license information please see app.js.LICENSE.txt */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 0)
}({
    "+qE3": function(e, t, n) {
        "use strict";
        var r, o = "object" == typeof Reflect ? Reflect : null, i = o && "function" == typeof o.apply ? o.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }
        ;
        r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var a = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function s() {
            s.init.call(this)
        }
        e.exports = s,
        e.exports.once = function(e, t) {
            return new Promise((function(n, r) {
                function o(n) {
                    e.removeListener(t, i),
                    r(n)
                }
                function i() {
                    "function" == typeof e.removeListener && e.removeListener("error", o),
                    n([].slice.call(arguments))
                }
                g(e, t, i, {
                    once: !0
                }),
                "error" !== t && function(e, t, n) {
                    "function" == typeof e.on && g(e, "error", t, n)
                }(e, o, {
                    once: !0
                })
            }
            ))
        }
        ,
        s.EventEmitter = s,
        s.prototype._events = void 0,
        s.prototype._eventsCount = 0,
        s.prototype._maxListeners = void 0;
        var l = 10;
        function c(e) {
            if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function u(e) {
            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
        }
        function d(e, t, n, r) {
            var o, i, a, s;
            if (c(n),
            void 0 === (i = e._events) ? (i = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
            i = e._events),
            a = i[t]),
            void 0 === a)
                a = i[t] = n,
                ++e._eventsCount;
            else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n),
            (o = u(e)) > 0 && a.length > o && !a.warned) {
                a.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning",
                l.emitter = e,
                l.type = t,
                l.count = a.length,
                s = l,
                console && console.warn && console.warn(s)
            }
            return e
        }
        function p() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function f(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            }
              , o = p.bind(r);
            return o.listener = n,
            r.wrapFn = o,
            o
        }
        function m(e, t, n) {
            var r = e._events;
            if (void 0 === r)
                return [];
            var o = r[t];
            return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                return t
            }(o) : v(o, o.length)
        }
        function h(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length
            }
            return 0
        }
        function v(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = e[r];
            return n
        }
        function g(e, t, n, r) {
            if ("function" == typeof e.on)
                r.once ? e.once(t, n) : e.on(t, n);
            else {
                if ("function" != typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function o(i) {
                    r.once && e.removeEventListener(t, o),
                    n(i)
                }
                ))
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return l
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || a(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                l = e
            }
        }),
        s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        s.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || a(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        s.prototype.getMaxListeners = function() {
            return u(this)
        }
        ,
        s.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var r = "error" === e
              , o = this._events;
            if (void 0 !== o)
                r = r && void 0 === o.error;
            else if (!r)
                return !1;
            if (r) {
                var a;
                if (t.length > 0 && (a = t[0]),
                a instanceof Error)
                    throw a;
                var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw s.context = a,
                s
            }
            var l = o[e];
            if (void 0 === l)
                return !1;
            if ("function" == typeof l)
                i(l, this, t);
            else {
                var c = l.length
                  , u = v(l, c);
                for (n = 0; n < c; ++n)
                    i(u[n], this, t)
            }
            return !0
        }
        ,
        s.prototype.addListener = function(e, t) {
            return d(this, e, t, !1)
        }
        ,
        s.prototype.on = s.prototype.addListener,
        s.prototype.prependListener = function(e, t) {
            return d(this, e, t, !0)
        }
        ,
        s.prototype.once = function(e, t) {
            return c(t),
            this.on(e, f(this, e, t)),
            this
        }
        ,
        s.prototype.prependOnceListener = function(e, t) {
            return c(t),
            this.prependListener(e, f(this, e, t)),
            this
        }
        ,
        s.prototype.removeListener = function(e, t) {
            var n, r, o, i, a;
            if (c(t),
            void 0 === (r = this._events))
                return this;
            if (void 0 === (n = r[e]))
                return this;
            if (n === t || n.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (o = -1,
                i = n.length - 1; i >= 0; i--)
                    if (n[i] === t || n[i].listener === t) {
                        a = n[i].listener,
                        o = i;
                        break
                    }
                if (o < 0)
                    return this;
                0 === o ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(n, o),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }
        ,
        s.prototype.off = s.prototype.removeListener,
        s.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (void 0 === (n = this._events))
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                this;
            if (0 === arguments.length) {
                var o, i = Object.keys(n);
                for (r = 0; r < i.length; ++r)
                    "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        s.prototype.listeners = function(e) {
            return m(this, e, !0)
        }
        ,
        s.prototype.rawListeners = function(e) {
            return m(this, e, !1)
        }
        ,
        s.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
        }
        ,
        s.prototype.listenerCount = h,
        s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? r(this._events) : []
        }
    },
    "/klw": function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function i(e, t) {
            return (i = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function a(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        function s(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return l(e)
        }
        function l(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function u(e, t) {
            return {
                addListener: e.addListener.bind(e, t),
                on: e.on.bind(e, t),
                once: e.once.bind(e, t),
                removeListener: e.removeListener.bind(e, t),
                off: e.off.bind(e, t),
                emit: e.emit.bind(e, t)
            }
        }
        var d = new (function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && i(e, t)
            }(c, e);
            var t, n, r, s = a(c);
            function c() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                (e = s.call(this)).activatePush = u(l(e), "activatePush"),
                e.sendOutputStats = u(l(e), "sendOutputStats"),
                e.clickAds = u(l(e), "clickAds"),
                e.televzrLanding = u(l(e), "televzrLanding"),
                e.widgetApk = u(l(e), "widgetApk"),
                e
            }
            return t = c,
            n && o(t.prototype, n),
            r && o(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }(n("+qE3")));
        t.a = d
    },
    0: function(e, t, n) {
        n("bUC5"),
        e.exports = n("A7MA")
    },
    "2HEe": function(e, t, n) {
        var r, o, i;
        o = [t, e],
        void 0 === (i = "function" == typeof (r = function(e, t) {
            "use strict";
            var n = 5e3
              , r = "callback";
            function o() {
                return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
            }
            function i(e) {
                try {
                    delete window[e]
                } catch (t) {
                    window[e] = void 0
                }
            }
            function a(e) {
                var t = document.getElementById(e);
                t && document.getElementsByTagName("head")[0].removeChild(t)
            }
            t.exports = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , s = e
                  , l = t.timeout || n
                  , c = t.jsonpCallback || r
                  , u = void 0;
                return new Promise((function(n, r) {
                    var d = t.jsonpCallbackFunction || o()
                      , p = c + "_" + d;
                    window[d] = function(e) {
                        n({
                            ok: !0,
                            json: function() {
                                return Promise.resolve(e)
                            }
                        }),
                        u && clearTimeout(u),
                        a(p),
                        i(d)
                    }
                    ,
                    s += -1 === s.indexOf("?") ? "?" : "&";
                    var f = document.createElement("script");
                    f.setAttribute("src", "" + s + c + "=" + d),
                    t.charset && f.setAttribute("charset", t.charset),
                    t.nonce && f.setAttribute("nonce", t.nonce),
                    t.referrerPolicy && f.setAttribute("referrerPolicy", t.referrerPolicy),
                    f.id = p,
                    document.getElementsByTagName("head")[0].appendChild(f),
                    u = setTimeout((function() {
                        r(new Error("JSONP request to " + e + " timed out")),
                        i(d),
                        a(p),
                        window[d] = function() {
                            i(d)
                        }
                    }
                    ), l),
                    f.onerror = function() {
                        r(new Error("JSONP request to " + e + " failed")),
                        i(d),
                        a(p),
                        u && clearTimeout(u)
                    }
                }
                ))
            }
        }
        ) ? r.apply(t, o) : r) || (e.exports = i)
    },
    "2OD/": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        }
        ));
        t.a = {
            linkInsert: function(e) {
                var t = r(e);
                ga("send", "event", {
                    eventCategory: "main-page",
                    eventAction: "link-insert",
                    eventLabel: t
                })
            },
            linkSubmit: function(e) {
                var t = r(e);
                ga("send", "event", {
                    eventCategory: "main-page",
                    eventAction: "link-submit",
                    eventLabel: t
                })
            },
            keywordSubmit: function(e) {
                ga("send", "event", {
                    eventCategory: "main-page",
                    eventAction: "keyword-submit",
                    eventLabel: !0
                })
            },
            keywordInsert: function(e) {
                ga("send", "event", {
                    eventCategory: "main-page",
                    eventAction: "keyword-insert",
                    eventLabel: !0
                })
            },
            searchDownload: function(e) {
                ga("send", "event", {
                    eventCategory: "vidacha",
                    eventAction: "search-download",
                    eventLabel: !0
                })
            },
            downloadClick: function(e, t) {
                var n = r(e);
                ga("send", "event", {
                    eventCategory: "vidacha",
                    eventAction: "download-click",
                    eventLabel: n,
                    dimension1: t
                })
            },
            showResults: function(e) {
                var t = r(e);
                ga("send", "event", {
                    eventCategory: "vidacha",
                    eventAction: "show",
                    eventLabel: t
                })
            },
            showError: function(e) {
                if (e)
                    if (e.timeout)
                        ga("send", "event", {
                            eventCategory: "vidacha",
                            eventAction: "not_found",
                            eventLabel: "timeout_exeeded"
                        });
                    else if (null !== e.supported_resource) {
                        if (!1 === e.success || [100, 101, 102, 103].indexOf(e.code) > -1)
                            ga("send", "event", {
                                eventCategory: "vidacha",
                                eventAction: "not_found",
                                eventLabel: "link_not_found"
                            });
                        else if (e.blacklist) {
                            var t = e.srv || ""
                              , n = e.hosting || "?";
                            e.hosting_id && 101 == e.hosting_id && (n = 101),
                            ga("send", "event", {
                                eventCategory: "failure",
                                eventAction: n,
                                eventLabel: "blacklist",
                                dimension1: t
                            })
                        }
                    } else
                        ga("send", "event", {
                            eventCategory: "vidacha",
                            eventAction: "not_found",
                            eventLabel: "not_supported"
                        });
                else
                    ga("send", "event", {
                        eventCategory: "vidacha",
                        eventAction: "not_found",
                        eventLabel: "fatal"
                    })
            }
        };
        function r(e) {
            var t, n = document.createElement("a");
            return n.href = e,
            t = n.hostname,
            t = /^(.+\.)?(instagram)$/i.test(t) || String(t).indexOf("instagram") >= 0 ? "in" : /^(.+\.)?(youtube\.com|youtu\.be)$/i.test(t) || 101 === t ? 101 : /^(.+\.)?(facebook\.com|fb\.com)$/i.test(t) || String(t).indexOf("facebook") >= 0 || String(t).indexOf("fb") >= 0 ? "fa" : /^(.+\.)?(vkontakte\.com|vk\.com)$/i.test(t) || String(t).indexOf("vkontakte") >= 0 || String(t).indexOf("vk") >= 0 ? "vk" : /^(.+\.)?(twitter\.com|t\.co)$/i.test(t) || String(t).indexOf("twitter") >= 0 || String(t).indexOf("t.co") >= 0 ? "tw" : /^(.+\.)?(dailymotion\.com|dai\.ly)$/i.test(t) || String(t).indexOf("dai") >= 0 ? "da" : /^(.+\.)?(vimeo\.com)$/i.test(t) || String(t).indexOf("vimeo") >= 0 ? "vi" : /^(.+\.)?(soundcloud\.com)$/i.test(t) || String(t).indexOf("soundcloud") >= 0 ? "so" : /^(.+\.)?(ok\.ru|odnoklassniki\.ru)$/i.test(t) ? "ok" : /^(.+\.)?(tiktok\.com)$/i.test(t) || String(t).indexOf("tiktok") >= 0 ? "ti" : /^(.+\.)?(hotstar\.com)$/i.test(t) || String(t).indexOf("hotstar") >= 0 ? "ho" : /^(.+\.)?(google\.com|yandex\.ru|ya\.ru|bing\.com)$/i.test(t) || String(t).indexOf("google") >= 0 || String(t).indexOf("yandex") >= 0 || String(t).indexOf("ya") >= 0 || String(t).indexOf("bing") >= 0 ? "se" : /^(.+\.)?(bit\.ly)$/i.test(t) || String(t).indexOf("bit") >= 0 ? "ls" : /^(.+\.)?(xvideos\.com|xnxx\.com|pornhub\.com|youporn\.com|xhamster\.com|spankbang\.com|xvideos[0-9]+\.com|txxx\.com|anybunny\.tv|redtube\.com|xnxx\.tv|pornhubpremium\.com|iporntv\.net)$/i.test(t) || String(t).indexOf("xvideos") >= 0 || String(t).indexOf("xnxx") >= 0 || String(t).indexOf("pornhub") >= 0 || String(t).indexOf("youporn") >= 0 || String(t).indexOf("xhamster") >= 0 || String(t).indexOf("spankbang") >= 0 || String(t).indexOf("txxx") >= 0 || String(t).indexOf("anybunny") >= 0 || String(t).indexOf("redtube") >= 0 || String(t).indexOf("xnxx") >= 0 || String(t).indexOf("iporntv") >= 0 ? "xxx" : "other"
        }
    },
    "2SVd": function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    },
    "2jMJ": function(e, t, n) {
        (e.exports = n("I1BE")(!1)).push([e.i, ".bnr{margin:0 auto;width:908px;text-align:center}.bnr-title{color:#333;display:none;font-size:13px;line-height:15px;margin:0 auto;text-align:right;opacity:.8}@media (max-width:1100px){.bnr-content{word-break:break-word;-moz-hyphens:auto;-webkit-hyphens:auto;-ms-hyphens:auto;height:auto}}.bnr.loaded .ox7-title{display:block}.bnr:has(ox7-content>#mobonLogo){margin:0 auto 40px}@media only screen and (max-width:979px){.bnr{width:100%;overflow:hidden;overflow-x:auto}}", ""])
    },
    "4FFG": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return s
        }
        ));
        n("C35p"),
        n("VQ4g");
        function r(e) {
            return {
                minute: 6e4,
                hour: 36e5,
                day: 864e5
            }[e]
        }
        function o(e, t) {
            var n = t;
            try {
                n = JSON.parse(e)
            } catch (e) {}
            return n
        }
        function i(e, t) {
            if (!e || !window.localStorage || !window.JSON)
                return !0;
            var n = localStorage.getItem(t);
            if (!n)
                return !0;
            if (!(n = o(n, !1)) || !Array.isArray(n))
                return !0;
            if (n.length < e.cap)
                return !0;
            for (var i = r([e.intervalType]) * e.intervalAmount, a = Date.now() - i, s = 0; s < e.cap; s++)
                if (n[s] < a)
                    return !0;
            return !1
        }
        function a(e, t) {
            if (e && window.localStorage && window.JSON) {
                var n = localStorage.getItem(t);
                n && (n = o(n, !1));
                var i = Date.now();
                if (n && Array.isArray(n)) {
                    var a = i - r([e.intervalType]) * e.intervalAmount;
                    n = n.filter((function(e) {
                        return e > a
                    }
                    ))
                } else
                    n = [];
                n.unshift(i),
                n.length > e.cap && (n = n.slice(0, e.cap)),
                localStorage.setItem(t, JSON.stringify(n))
            }
        }
        var s = function(e) {
            if (window.gtag)
                window.gtag("config", e);
            else {
                var t = document.createElement("script");
                t.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=".concat(e)),
                document.head.appendChild(t);
                var n = document.createElement("script");
                n.innerHTML = "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat(e, "');"),
                document.head.appendChild(n)
            }
        }
    },
    "4JlD": function(e, t, n) {
        "use strict";
        var r = function(e) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
            }
        };
        e.exports = function(e, t, n, s) {
            return t = t || "&",
            n = n || "=",
            null === e && (e = void 0),
            "object" == typeof e ? i(a(e), (function(a) {
                var s = encodeURIComponent(r(a)) + n;
                return o(e[a]) ? i(e[a], (function(e) {
                    return s + encodeURIComponent(r(e))
                }
                )).join(t) : s + encodeURIComponent(r(e[a]))
            }
            )).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
        }
        ;
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        function i(e, t) {
            if (e.map)
                return e.map(t);
            for (var n = [], r = 0; r < e.length; r++)
                n.push(t(e[r], r));
            return n
        }
        var a = Object.keys || function(e) {
            var t = [];
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    },
    "58j7": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("/klw")
          , o = n("4FFG");
        window.clickAds = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                var e = this;
                return r.a.clickAds.on((function() {
                    Object(o.b)(e.frequencyParams, "clickAds") && (Object(o.c)(e.frequencyParams, "clickAds"),
                    window.open(e.url))
                }
                )),
                !0
            }
        }
    },
    "5oMp": function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    },
    "8oxB": function(e, t) {
        var n, r, o = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function s(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var l, c = [], u = !1, d = -1;
        function p() {
            u && l && (u = !1,
            l.length ? c = l.concat(c) : d = -1,
            c.length && f())
        }
        function f() {
            if (!u) {
                var e = s(p);
                u = !0;
                for (var t = c.length; t; ) {
                    for (l = c,
                    c = []; ++d < t; )
                        l && l[d].run();
                    d = -1,
                    t = c.length
                }
                l = null,
                u = !1,
                function(e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function m(e, t) {
            this.fun = e,
            this.array = t
        }
        function h() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new m(e,t)),
            1 !== c.length || u || s(f)
        }
        ,
        m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = h,
        o.addListener = h,
        o.once = h,
        o.off = h,
        o.removeListener = h,
        o.removeAllListeners = h,
        o.emit = h,
        o.prependListener = h,
        o.prependOnceListener = h,
        o.listeners = function(e) {
            return []
        }
        ,
        o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        o.umask = function() {
            return 0
        }
    },
    "9rSQ": function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t, n) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }),
            this.handlers.length - 1
        }
        ,
        o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        o.prototype.forEach = function(e) {
            r.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }
            ))
        }
        ,
        e.exports = o
    },
    "9tPo": function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t)
                throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e)
                return e;
            var n = t.protocol + "//" + t.host
              , r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, (function(e, t) {
                    return t
                }
                )).replace(/^'(.*)'$/, (function(e, t) {
                    return t
                }
                ));
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")")
            }
            ))
        }
    },
    A7MA: function(e, t) {},
    BcD8: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            televzrLanding: {
                active: !0,
                mobile: !1,
                lang: ["de", "en", "es", "fr", "nl", "it", "ko", "ja", "pt", "ru"],
                country: ["tier1", "tier2", "ru"],
                excludedCountry: ["us"],
                dir: "landingTzMainPageAllRes",
                object: "televzrLanding",
                os: ["Windows", "Mac OS"],
                parameters: {
                    expName: "televzrLanding",
                    expSample: 50
                },
                allowedAds: ["clickunder"],
                _init: ()=>n("GyVF")
            }
        }
    },
    C35p: function(e, t, n) {
        "use strict";
        var r = n("p46w")
          , o = {
            set: function(e, t, n, o) {
                return r.set(e, t, {
                    expires: n,
                    domain: o
                })
            },
            get: function(e) {
                var t = r.get(e);
                return void 0 === t && (t = null),
                t
            },
            del: function(e, t) {
                return r.remove(e, {
                    domain: t
                })
            }
        };
        t.a = o
    },
    CgaS: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = n("MLWZ")
          , i = n("9rSQ")
          , a = n("UnBK")
          , s = n("SntB")
          , l = n("hIuj")
          , c = l.validators;
        function u(e) {
            this.defaults = e,
            this.interceptors = {
                request: new i,
                response: new i
            }
        }
        u.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
            (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = e.transitional;
            void 0 !== t && l.assertOptions(t, {
                silentJSONParsing: c.transitional(c.boolean),
                forcedJSONParsing: c.transitional(c.boolean),
                clarifyTimeoutError: c.transitional(c.boolean)
            }, !1);
            var n = []
              , r = !0;
            this.interceptors.request.forEach((function(t) {
                "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous,
                n.unshift(t.fulfilled, t.rejected))
            }
            ));
            var o, i = [];
            if (this.interceptors.response.forEach((function(e) {
                i.push(e.fulfilled, e.rejected)
            }
            )),
            !r) {
                var u = [a, void 0];
                for (Array.prototype.unshift.apply(u, n),
                u = u.concat(i),
                o = Promise.resolve(e); u.length; )
                    o = o.then(u.shift(), u.shift());
                return o
            }
            for (var d = e; n.length; ) {
                var p = n.shift()
                  , f = n.shift();
                try {
                    d = p(d)
                } catch (e) {
                    f(e);
                    break
                }
            }
            try {
                o = a(d)
            } catch (e) {
                return Promise.reject(e)
            }
            for (; i.length; )
                o = o.then(i.shift(), i.shift());
            return o
        }
        ,
        u.prototype.getUri = function(e) {
            return e = s(this.defaults, e),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        r.forEach(["delete", "get", "head", "options"], (function(e) {
            u.prototype[e] = function(t, n) {
                return this.request(s(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        r.forEach(["post", "put", "patch"], (function(e) {
            u.prototype[e] = function(t, n, r) {
                return this.request(s(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }
        )),
        e.exports = u
    },
    DfZB: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    },
    GyVF: function(e, t, n) {
        "use strict";
        n.r(t);
        n("h3A/");
        var r = n("VIOF");
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var i = function(e, t) {
            var n = r[envProps.lang] ? r[envProps.lang] : r.en;
            return function(e, t) {
                if (!t || "object" !== o(t))
                    return e;
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e = e.replace(new RegExp("{".concat(n, "}"),"g"), t[n]));
                return e
            }(n[e] ? n[e] : r.en[e], t)
        }
          , a = function() {
            var e = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return [e() + e(), e(), e(), e(), e() + e() + e()].join("-")
        }
          , s = ["&custom1=".concat(a()), "custom2=".concat(envProps.stats.uid), "custom3=ss_main", "custom4="].join("&")
          , l = ["&cid=".concat(a()), "uid=".concat(envProps.stats.uid), "refId=ss_main", "custom4="].join("&")
          , c = n("/klw")
          , u = '<section  id="landingTz-main-screen-top" class="landingTz-main-screen landingTz-main-screen-top">\n<div class="landingTz-wrapper">\n        <div class="landingTz-first-screen-content-js">\n            <p class="landingTz-video-ready">'.concat(i("videoReady"), '</p>\n            <div class="landingTz-video-block">\n                <div class="landingTz-video-under"></div>\n                <div class="landingTz-video-cont">\n                    <div class="landingTz-video-inner">\n                      <img class="landingTz-video-img" src="" alt/>\n                    </div>\n                </div>\n            </div>\n            <h2 class="landingTz-title">').concat(i("downloadHiRes"), '</h2>\n            <div class="landingTz-btn-block">\n                <a class="btn landingTz-btn landingTz-btn-download-hd" target="_blank" href="">\n                    <span class="landingTz-btn-inner">').concat(i("downloadHDMP3"), '</span>\n                </a>\n            </div>\n            <p class="landingTz-dwn-browser-block">\n                ').concat(i("justDownloadBrowser"), '\n                <br>\n                <a class="landingTz-btn-close" href="#">').concat(i("withLowQuality"), '</a>\n            </p>\n        </div>\n    </div>\n</section>\n<section id=\'landingTz-main-screen-middle\' class=\'landingTz-main-screen landingTz-main-screen-middle\'>\n    <div class="landingTz-wrapper">\n        <div class="landingTz-choose-period-top">\n            <div class="landingTz-title-logo-block">\n              <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-logo-color.svg" alt="').concat(i("logoTelevzr"), '">\n            </div>\n            <h3 class="landingTz-title-small">').concat(i("choosePeriod"), '</h3>\n            <div class="landingTz-choose-period">\n                <div class="landingTz-choose-period-elem">\n                    <input data-price="').concat(i("price1"), '" data-period="1" data-period-text="').concat(i("month1"), '" data-star=" *" data-recurring-payments="').concat(i("recurringPayments1"), '"\n                           class="landingTz-choose-period-input visuallyhidden" type="radio" name="landingTz-period" value="period-month-one" id="period-month-one" checked>\n                    <label class="landingTz-choose-period-label" for="period-month-one">\n                        <h4 class="landingTz-choose-period-title">').concat(i("Month1"), '</h4>\n                        <p class="landingTz-choose-period-text">').concat(i("needAdvanced"), '</p>\n                    </label>\n                </div>\n                <div class="landingTz-choose-period-elem">\n                    <input data-price="').concat(i("price6"), '" data-period="6" data-period-text="').concat(i("month6"), '" data-star=" *" data-recurring-payments="').concat(i("recurringPayments6"), '"\n                           class="landingTz-choose-period-input visuallyhidden" type="radio" name="landingTz-period" value="period-month-six" id="period-month-six" >\n                    <label class="landingTz-choose-period-label" for="period-month-six">\n                        <h4 class="landingTz-choose-period-title">').concat(i("Month6"), '</h4>\n                        <p class="landingTz-choose-period-text">').concat(i("bestBuy"), '</p>\n                    </label>\n                </div>\n                <div class="landingTz-choose-period-elem">\n                    <input data-price="').concat(i("priceLifetime"), '" data-period="lifetime" data-period-text="').concat(i("oneTimeFee"), '" data-star="" data-recurring-payments="').concat(i("recurringPayments12"), '"\n                           class="landingTz-choose-period-input visuallyhidden" type="radio" name="landingTz-period" value="period-lifetime" id="period-lifetime" >\n                    <label class="landingTz-choose-period-label" for="period-lifetime">\n                        <h4 class="landingTz-choose-period-title">').concat(i("OneTimeFee"), '</h4>\n                        <p class="landingTz-choose-period-text">').concat(i("GoodDeal"), '</p>\n                    </label>\n                </div>\n            </div>\n            <div class="landingTz-one-time-fee-modal">\n                <div class="landingTz-one-time-fee-inner">\n                    <h3>').concat(i("DetailsTitle"), "</h3>\n                    <p>").concat(i("DetailsText1"), "<br>\n                      ").concat(i("DetailsText2"), "</p>\n                    ").concat(i("DetailsTextLink"), '\n                </div>\n                <button class="landingTz-one-time-fee-modal-close"></button>\n            </div>\n        </div>\n        <div class="landingTz-btn-block">\n            <a class="btn landingTz-btn landingTz-btn-inner-big landingTz-btn-choose-period" href="#" target="_blank">\n                    <span class="landingTz-btn-inner landingTz-btn-price">').concat(i("get6month"), '</span>\n            </a>\n            <div class="landingTz-cards-block">\n                ').concat("ru" === envProps.lang ? '<img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-visa.svg" alt="'.concat(i("cardVisa"), '">\n                    <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-mastercard.svg" alt="').concat(i("cardMastercard"), '">\n                    <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-mir.svg" alt="').concat(i("cardMir"), '">') : '<img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-visa.svg" alt="'.concat(i("cardVisa"), '">\n                    <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-mastercard.svg" alt="').concat(i("cardMastercard"), '">\n                    <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-paypal.svg" alt="').concat(i("cardPayPal"), '">\n                    <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-card-american-express.svg" alt="').concat(i("cardAmericanExpress"), '">'), '\n            </div>\n            <div class="landingTz-checkbox-container">\n                <label class="landingTz-checkbox">\n                    <input id="landingTz-agree-checkbox" class="visuallyhidden" type="checkbox" checked>\n                    <span class="landingTz-checkbox-icon"></span>\n                    <span class="landingTz-checkbox-text" data-href="https://televzr.com/terms.html">\n                        ').concat(i("agreeWithTelevzrTermsOfService"), '\n                    </span>\n                </label>\n            </div>\n            <small class="landingTz-recurring-payments">').concat(i("thePriceDoesNotIncludeVAT"), '</small>\n        </div>\n    </div>\n</section>\n\n<section id="landingTz-main-screen-bottom" class="landingTz-main-screen landingTz-main-screen-bottom">\n    <div class="landingTz-wrapper">\n        <img class="landingTz-title-logo" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-logo-color.svg" alt="').concat(i("logoTelevzr"), '">\n        <h3 class="landingTz-title-small">').concat(i("moreThanDownloading"), '</h3>\n\n        <div class="landingTz-pluses-block">\n            <div class="landingTz-pluses-elem">\n                <img class="landingTz-pluses-img headphones" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses1.png" srcset="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses1@2x.png 2x" width="149" height="145" alt="').concat(i("plusesBlockIcon1"), '">\n                <h4 class="landingTz-pluses-title">').concat(i("plusesBlockTitle1"), '</h4>\n                <p class="landingTz-pluses-text">').concat(i("plusesBlockText1"), '</p>\n            </div>\n            <div class="landingTz-pluses-elem">\n                <img class="landingTz-pluses-img film" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses2.png" srcset="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses2@2x.png 2x" width="244" height="167" alt="').concat(i("plusesBlockIcon2"), '">\n                <h4 class="landingTz-pluses-title">').concat(i("plusesBlockTitle2"), '</h4>\n                <p class="landingTz-pluses-text">').concat(i("plusesBlockText2"), '</p>\n            </div>\n            <div class="landingTz-pluses-elem">\n                <img class="landingTz-pluses-img rocket" src="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses3.png" srcset="/assets/experiment/landingTzMainPageAllRes/img/landingTz-pluses3@2x.png 2x" width="175" height="106" alt="').concat(i("plusesBlockIcon3"), '">\n                <h4 class="landingTz-pluses-title">').concat(i("plusesBlockTitle3"), '</h4>\n                <p class="landingTz-pluses-text">').concat(i("plusesBlockText3"), '</p>\n            </div>\n        </div>\n\n        <div class="landingTz-btn-block">\n            <a class="btn landingTz-btn landingTz-btn-inner-big landingTz-btn-get-full-access" href="#">\n                <span class="landingTz-btn-inner"><b>').concat(i("looksGood"), '</b></span>\n            </a>\n        </div>\n\n    </div>\n</section>\n\n<section id="landingTz-main-screen-footer" class="landingTz-main-screen landingTz-main-screen-footer"></section>\n')
          , d = n("2OD/");
        function p(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return f(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var m = !1
          , h = null
          , v = null
          , g = function(e) {
            var t, n = p(document.querySelector("main").children);
            try {
                for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value;
                    "main" === r.id || r.closest(".landingTz-main") || (r.style.display = e ? "none" : "block")
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        }
          , b = function(e) {
            var t = document.querySelector("main")
              , n = document.querySelector(".landingTz-main");
            e && !n ? (t.classList.add("landingTz-body", "landingTz-body-one-time-fee"),
            y()) : e && n ? (t.classList.add("landingTz-body", "landingTz-body-one-time-fee"),
            document.querySelector(".landingTz-video-img").src = "",
            n.style.display = "block",
            O(),
            P("vidacha_tzoffer")) : e || (t.classList.remove("landingTz-body", "landingTz-body-one-time-fee"),
            n.style.display = "none")
        }
          , y = function() {
            var e = document.querySelector("#main")
              , t = document.createElement("div");
            t.className = "landingTz-main",
            t.innerHTML = u,
            e.after(t),
            x(),
            T(),
            _(),
            z(),
            S(),
            A(),
            O(),
            P("vidacha_tzoffer")
        }
          , w = function(e, t, n) {
            e.style.opacity = 1,
            e.style.transition = "opacity ".concat(t, "ms"),
            e.style.opacity = 0,
            setTimeout((function() {
                if (e.style.display = "none",
                n)
                    return n()
            }
            ), t)
        }
          , x = function() {
            var e = document.querySelector(".landingTz-one-time-fee-modal");
            document.querySelector("body").addEventListener("click", (function(t) {
                e.classList.contains("open") && !t.target.closest(".landingTz-one-time-fee-modal, .more-details-popup-open") && w(e, 300, (function() {
                    e.classList.remove("open")
                }
                ))
            }
            )),
            document.querySelector(".more-details-popup-open").addEventListener("click", (function() {
                !function(e, t, n, r) {
                    if (e.style.opacity = 0,
                    e.style.display = n || "block",
                    e.style.transition = "opacity ".concat(t, "ms"),
                    setTimeout((function() {
                        e.style.opacity = 1
                    }
                    ), 10),
                    r)
                        r()
                }(e, 300, "block", (function() {
                    e.classList.add("open")
                }
                ))
            }
            )),
            document.querySelector(".landingTz-one-time-fee-modal-close").addEventListener("click", (function() {
                w(e, 300, (function() {
                    e.classList.remove("open")
                }
                ))
            }
            ))
        }
          , T = function() {
            document.querySelector("#landingTz-agree-checkbox").addEventListener("click", (function() {
                document.querySelector(".landingTz-btn-choose-period").classList.toggle("disabled")
            }
            ))
        }
          , _ = function() {
            var e, t, n, r = (e = "Mac OS" === envProps.os.name ? "mac" : "win",
            t = {
                win: {
                    1: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=1".concat(l),
                    6: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=2".concat(l),
                    lifetime: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=3".concat(l)
                },
                mac: {
                    1: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=4".concat(l),
                    6: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=5".concat(l),
                    lifetime: "https://checkout.televzr.com/billing/robokassa-tz/checkout?planId=6".concat(l)
                }
            },
            n = {
                win: {
                    1: "https://checkout.bluesnap.com/buynow/checkout?sku3900960=1&storeid=548375".concat(s),
                    6: "https://checkout.bluesnap.com/buynow/checkout?sku3900962=1&storeid=548375".concat(s),
                    lifetime: "https://checkout.bluesnap.com/buynow/checkout?sku3900956=1&storeid=548375".concat(s)
                },
                mac: {
                    1: "https://checkout.bluesnap.com/buynow/checkout?sku3900946=1&storeid=548375".concat(s),
                    6: "https://checkout.bluesnap.com/buynow/checkout?sku3900924=1&storeid=548375".concat(s),
                    lifetime: "https://checkout.bluesnap.com/buynow/checkout?sku3900922=1&storeid=548375".concat(s)
                }
            },
            "ru" === envProps.country ? t[e] : n[e]), o = document.querySelectorAll(".landingTz-choose-period-input"), i = document.querySelector(".landingTz-btn-choose-period");
            o.forEach((function(e) {
                e.dataset.href = r[e.dataset.period],
                e.checked && k(e),
                e.addEventListener("click", (function() {
                    k(e)
                }
                ))
            }
            )),
            i.addEventListener("click", (function() {
                P("click-buy", null, i.dataset.period)
            }
            ))
        };
        var k = function(e) {
            var t, n = document.querySelector(".landingTz-btn-price"), r = document.querySelector(".landingTz-btn-choose-period");
            r.href = e.dataset.href,
            r.dataset.period = e.dataset.period,
            "number" != typeof +(t = e.dataset.period) || isNaN(t) ? n.innerHTML = i("buyNowForPrice").replace("${price}", e.dataset.price) : n.innerHTML = i("subscribeNowForPrice").replace("${price}", e.dataset.price)
        }
          , z = function() {
            var e = document.querySelector(".landingTz-btn-download-hd")
              , t = document.querySelector(".landingTz-main-screen-middle")
              , n = document.querySelector(".landingTz-btn-get-full-access");
            function r() {
                t.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            }
            e.addEventListener("click", (function(e) {
                e.preventDefault(),
                r(),
                P("show_tzoffer", null, "click")
            }
            )),
            n.addEventListener("click", (function(e) {
                e.preventDefault(),
                r()
            }
            ))
        }
          , S = function() {
            document.querySelector(".landingTz-btn-close").addEventListener("click", (function(e) {
                e.preventDefault(),
                P("download_low", null, "click"),
                b(!1),
                g(!1),
                C(!1),
                document.querySelector("#main").scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            }
            ))
        }
          , C = function(e) {
            var t = document.querySelector(".search-block-default-height");
            e || (m = !0);
            var n, r = p(t.children);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    o.closest(".container-search") || (e && !m ? o.style.display = "none" : e || (o.style.display = "block"))
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            E()
        }
          , A = function() {
            document.querySelector("body").addEventListener("mouseleave", (function(e) {
                var t = document.querySelector(".landingTz-main");
                e.clientY <= 0 && "none" !== t.style.display && (P("download_low", null, "mouse_out"),
                b(!1),
                g(!1),
                C(!1),
                document.querySelector("#main").scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                }))
            }
            ))
        }
          , E = function() {
            var e, t, n = document.querySelector(".landingTz-main");
            ("none" === n.style.display && null !== (e = h) && void 0 !== e && e.thumb || "none" === n.style.display && null !== (t = h) && void 0 !== t && t.url) && P("vidacha_show", v)
        }
          , O = function() {
            var e = document.querySelector(".landingTz-main-screen-middle").querySelector(".landingTz-wrapper");
            window.addEventListener("scroll", (function t() {
                var n = document.querySelector(".landingTz-main");
                window.pageYOffset + e.getBoundingClientRect().top + e.clientHeight - getComputedStyle(e).paddingBottom.match(/[0-9]+/)[0] < window.pageYOffset + document.documentElement.clientHeight && "none" !== n.style.display && (P("show_tzoffer", null, "scroll"),
                window.removeEventListener("scroll", t))
            }
            ))
        }
          , P = function(e, t, n) {
            var r = Object(d.b)(t);
            switch (e) {
            case "link_submit":
                ga("".concat("televzrLanding", ".send"), "event", "subscription_tz", e, r);
                break;
            case "vidacha_tzoffer":
                ga("".concat("televzrLanding", ".send"), "event", "subscription_tz", e);
                break;
            case "show_tzoffer":
            case "download_low":
            case "click-buy":
                ga("".concat("televzrLanding", ".send"), "event", "subscription_tz", e, n);
                break;
            case "download_click":
            case "vidacha_show":
                ga("".concat("televzrLanding", ".send"), "event", "subscription_tz", e, r)
            }
        };
        window.televzrLanding = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                return ga("create", "UA-156919089-55", "auto", "televzrLanding"),
                ga("".concat("televzrLanding", ".send"), "event", "subscription_tz", "open"),
                c.a.televzrLanding.on((function(e, t, n) {
                    "content" === e ? function(e, t) {
                        h = e,
                        v = t,
                        C(!0);
                        var n = document.querySelector(".landingTz-video-img");
                        if (e.thumb)
                            n.src = e.thumb;
                        else if (!e.thumb) {
                            var r = "/assets/experiment/landingTzMainPageAllRes";
                            t.match(/soundcloud.com/) ? r += "/img/thumb-soundcloud.png" : t.match(/dailymotion.com/) ? r += "/img/thumb-dailymotion.png" : t.match(/vimeo.com/) ? r += "/img/thumb-vimeo.png" : t.match(/facebook.com/) ? r += "/img/thumb-facebook.png" : t.match(/twitter.com/) ? r += "/img/thumb-twitter.png" : t.match(/instagram.com/) ? r += "/img/thumb-instagram.png" : t.match(/youtube/) ? r += "/img/thumb-youtube.png" : r += "/img/empty-bg.svg",
                            n.src = r
                        }
                    }(t, n) : "click-download" === e ? P("download_click", n) : (g(!0),
                    b(!0),
                    m = !1,
                    P("link_submit", n),
                    h = null,
                    v = null)
                }
                )),
                !0
            }
        }
    },
    HIb1: function(e, t) {
        var n = document.querySelectorAll(".card-header");
        if (n)
            for (var r = function(e) {
                var t = n[e];
                t.addEventListener("click", (function(e) {
                    var n = t.querySelector("button");
                    n.classList.toggle("collapsed");
                    var r = n.dataset.target;
                    document.querySelector(r).classList.toggle("show")
                }
                ))
            }, o = 0; o < n.length; o++)
                r(o);
        if (window.location.href.includes("/ar")) {
            var i = document.getElementsByClassName("accordion_toggle");
            if (console.log("faqBy: ", i),
            i) {
                for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    console.log("faqBy: ", s),
                    s.checked = !1,
                    s.classList.add("arbText")
                }
                document.querySelector("#faq").addEventListener("click", (function(e) {
                    console.log("5454", e.target)
                }
                ))
            }
        }
    },
    HSsa: function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    },
    I1BE: function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = function(e, t) {
                        var n = e[1] || ""
                          , r = e[3];
                        if (!r)
                            return n;
                        if (t && "function" == typeof btoa) {
                            var o = (a = r,
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                              , i = r.sources.map((function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            }
                            ));
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var a;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }
                )).join("")
            }
            ,
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    t.push(a))
                }
            }
            ,
            t
        }
    },
    INkZ: function(e, t, n) {
        "use strict";
        (function(t, n) {
            var r = Object.freeze({});
            function o(e) {
                return null == e
            }
            function i(e) {
                return null != e
            }
            function a(e) {
                return !0 === e
            }
            function s(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
            }
            function l(e) {
                return null !== e && "object" == typeof e
            }
            var c = Object.prototype.toString;
            function u(e) {
                return "[object Object]" === c.call(e)
            }
            function d(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e)
            }
            function p(e) {
                return i(e) && "function" == typeof e.then && "function" == typeof e.catch
            }
            function f(e) {
                return null == e ? "" : Array.isArray(e) || u(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e)
            }
            function m(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t
            }
            function h(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++)
                    n[r[o]] = !0;
                return t ? function(e) {
                    return n[e.toLowerCase()]
                }
                : function(e) {
                    return n[e]
                }
            }
            var v = h("slot,component", !0)
              , g = h("key,ref,slot,slot-scope,is");
            function b(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1)
                        return e.splice(n, 1)
                }
            }
            var y = Object.prototype.hasOwnProperty;
            function w(e, t) {
                return y.call(e, t)
            }
            function x(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n))
                }
            }
            var T = /-(\w)/g
              , _ = x((function(e) {
                return e.replace(T, (function(e, t) {
                    return t ? t.toUpperCase() : ""
                }
                ))
            }
            ))
              , k = x((function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            ))
              , z = /\B([A-Z])/g
              , S = x((function(e) {
                return e.replace(z, "-$1").toLowerCase()
            }
            ))
              , C = Function.prototype.bind ? function(e, t) {
                return e.bind(t)
            }
            : function(e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
                }
                return n._length = e.length,
                n
            }
            ;
            function A(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--; )
                    r[n] = e[n + t];
                return r
            }
            function E(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            }
            function O(e) {
                for (var t = {}, n = 0; n < e.length; n++)
                    e[n] && E(t, e[n]);
                return t
            }
            function P(e, t, n) {}
            var $ = function(e, t, n) {
                return !1
            }
              , L = function(e) {
                return e
            };
            function M(e, t) {
                if (e === t)
                    return !0;
                var n = l(e)
                  , r = l(t);
                if (!n || !r)
                    return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e)
                      , i = Array.isArray(t);
                    if (o && i)
                        return e.length === t.length && e.every((function(e, n) {
                            return M(e, t[n])
                        }
                        ));
                    if (e instanceof Date && t instanceof Date)
                        return e.getTime() === t.getTime();
                    if (o || i)
                        return !1;
                    var a = Object.keys(e)
                      , s = Object.keys(t);
                    return a.length === s.length && a.every((function(n) {
                        return M(e[n], t[n])
                    }
                    ))
                } catch (e) {
                    return !1
                }
            }
            function D(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (M(e[n], t))
                        return n;
                return -1
            }
            function j(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    e.apply(this, arguments))
                }
            }
            var I = "data-server-rendered"
              , B = ["component", "directive", "filter"]
              , N = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"]
              , R = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: $,
                isReservedAttr: $,
                isUnknownElement: $,
                getTagNamespace: P,
                parsePlatformTagName: L,
                mustUseProp: $,
                async: !0,
                _lifecycleHooks: N
            }
              , F = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
            function q(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                })
            }
            var U, H = new RegExp("[^" + F.source + ".$_\\d]"), V = "__proto__"in {}, G = "undefined" != typeof window, J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, W = J && WXEnvironment.platform.toLowerCase(), K = G && window.navigator.userAgent.toLowerCase(), Q = K && /msie|trident/.test(K), Z = K && K.indexOf("msie 9.0") > 0, X = K && K.indexOf("edge/") > 0, Y = (K && K.indexOf("android"),
            K && /iphone|ipad|ipod|ios/.test(K) || "ios" === W), ee = (K && /chrome\/\d+/.test(K),
            K && /phantomjs/.test(K),
            K && K.match(/firefox\/(\d+)/)), te = {}.watch, ne = !1;
            if (G)
                try {
                    var re = {};
                    Object.defineProperty(re, "passive", {
                        get: function() {
                            ne = !0
                        }
                    }),
                    window.addEventListener("test-passive", null, re)
                } catch (r) {}
            var oe = function() {
                return void 0 === U && (U = !G && !J && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV),
                U
            }
              , ie = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function ae(e) {
                return "function" == typeof e && /native code/.test(e.toString())
            }
            var se, le = "undefined" != typeof Symbol && ae(Symbol) && "undefined" != typeof Reflect && ae(Reflect.ownKeys);
            se = "undefined" != typeof Set && ae(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null)
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e]
                }
                ,
                e.prototype.add = function(e) {
                    this.set[e] = !0
                }
                ,
                e.prototype.clear = function() {
                    this.set = Object.create(null)
                }
                ,
                e
            }();
            var ce = P
              , ue = 0
              , de = function() {
                this.id = ue++,
                this.subs = []
            };
            de.prototype.addSub = function(e) {
                this.subs.push(e)
            }
            ,
            de.prototype.removeSub = function(e) {
                b(this.subs, e)
            }
            ,
            de.prototype.depend = function() {
                de.target && de.target.addDep(this)
            }
            ,
            de.prototype.notify = function() {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
                    e[t].update()
            }
            ,
            de.target = null;
            var pe = [];
            function fe(e) {
                pe.push(e),
                de.target = e
            }
            function me() {
                pe.pop(),
                de.target = pe[pe.length - 1]
            }
            var he = function(e, t, n, r, o, i, a, s) {
                this.tag = e,
                this.data = t,
                this.children = n,
                this.text = r,
                this.elm = o,
                this.ns = void 0,
                this.context = i,
                this.fnContext = void 0,
                this.fnOptions = void 0,
                this.fnScopeId = void 0,
                this.key = t && t.key,
                this.componentOptions = a,
                this.componentInstance = void 0,
                this.parent = void 0,
                this.raw = !1,
                this.isStatic = !1,
                this.isRootInsert = !0,
                this.isComment = !1,
                this.isCloned = !1,
                this.isOnce = !1,
                this.asyncFactory = s,
                this.asyncMeta = void 0,
                this.isAsyncPlaceholder = !1
            }
              , ve = {
                child: {
                    configurable: !0
                }
            };
            ve.child.get = function() {
                return this.componentInstance
            }
            ,
            Object.defineProperties(he.prototype, ve);
            var ge = function(e) {
                void 0 === e && (e = "");
                var t = new he;
                return t.text = e,
                t.isComment = !0,
                t
            };
            function be(e) {
                return new he(void 0,void 0,void 0,String(e))
            }
            function ye(e) {
                var t = new he(e.tag,e.data,e.children && e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
                return t.ns = e.ns,
                t.isStatic = e.isStatic,
                t.key = e.key,
                t.isComment = e.isComment,
                t.fnContext = e.fnContext,
                t.fnOptions = e.fnOptions,
                t.fnScopeId = e.fnScopeId,
                t.asyncMeta = e.asyncMeta,
                t.isCloned = !0,
                t
            }
            var we = Array.prototype
              , xe = Object.create(we);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
                var t = we[e];
                q(xe, e, (function() {
                    for (var n = [], r = arguments.length; r--; )
                        n[r] = arguments[r];
                    var o, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                    case "push":
                    case "unshift":
                        o = n;
                        break;
                    case "splice":
                        o = n.slice(2)
                    }
                    return o && a.observeArray(o),
                    a.dep.notify(),
                    i
                }
                ))
            }
            ));
            var Te = Object.getOwnPropertyNames(xe)
              , _e = !0;
            function ke(e) {
                _e = e
            }
            var ze = function(e) {
                var t;
                this.value = e,
                this.dep = new de,
                this.vmCount = 0,
                q(e, "__ob__", this),
                Array.isArray(e) ? (V ? (t = xe,
                e.__proto__ = t) : function(e, t, n) {
                    for (var r = 0, o = n.length; r < o; r++) {
                        var i = n[r];
                        q(e, i, t[i])
                    }
                }(e, xe, Te),
                this.observeArray(e)) : this.walk(e)
            };
            function Se(e, t) {
                var n;
                if (l(e) && !(e instanceof he))
                    return w(e, "__ob__") && e.__ob__ instanceof ze ? n = e.__ob__ : _e && !oe() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new ze(e)),
                    t && n && n.vmCount++,
                    n
            }
            function Ce(e, t, n, r, o) {
                var i = new de
                  , a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get
                      , l = a && a.set;
                    s && !l || 2 !== arguments.length || (n = e[t]);
                    var c = !o && Se(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = s ? s.call(e) : n;
                            return de.target && (i.depend(),
                            c && (c.dep.depend(),
                            Array.isArray(t) && function e(t) {
                                for (var n = void 0, r = 0, o = t.length; r < o; r++)
                                    (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(),
                                    Array.isArray(n) && e(n)
                            }(t))),
                            t
                        },
                        set: function(t) {
                            var r = s ? s.call(e) : n;
                            t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t,
                            c = !o && Se(t),
                            i.notify())
                        }
                    })
                }
            }
            function Ae(e, t, n) {
                if (Array.isArray(e) && d(t))
                    return e.length = Math.max(e.length, t),
                    e.splice(t, 1, n),
                    n;
                if (t in e && !(t in Object.prototype))
                    return e[t] = n,
                    n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (Ce(r.value, t, n),
                r.dep.notify(),
                n) : (e[t] = n,
                n)
            }
            function Ee(e, t) {
                if (Array.isArray(e) && d(t))
                    e.splice(t, 1);
                else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || w(e, t) && (delete e[t],
                    n && n.dep.notify())
                }
            }
            ze.prototype.walk = function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++)
                    Ce(e, t[n])
            }
            ,
            ze.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; t < n; t++)
                    Se(e[t])
            }
            ;
            var Oe = R.optionMergeStrategies;
            function Pe(e, t) {
                if (!t)
                    return e;
                for (var n, r, o, i = le ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++)
                    "__ob__" !== (n = i[a]) && (r = e[n],
                    o = t[n],
                    w(e, n) ? r !== o && u(r) && u(o) && Pe(r, o) : Ae(e, n, o));
                return e
            }
            function $e(e, t, n) {
                return n ? function() {
                    var r = "function" == typeof t ? t.call(n, n) : t
                      , o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? Pe(r, o) : o
                }
                : t ? e ? function() {
                    return Pe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
                }
                : t : e
            }
            function Le(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
                return n ? function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        -1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t
                }(n) : n
            }
            function Me(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? E(o, t) : o
            }
            Oe.data = function(e, t, n) {
                return n ? $e(e, t, n) : t && "function" != typeof t ? e : $e(e, t)
            }
            ,
            N.forEach((function(e) {
                Oe[e] = Le
            }
            )),
            B.forEach((function(e) {
                Oe[e + "s"] = Me
            }
            )),
            Oe.watch = function(e, t, n, r) {
                if (e === te && (e = void 0),
                t === te && (t = void 0),
                !t)
                    return Object.create(e || null);
                if (!e)
                    return t;
                var o = {};
                for (var i in E(o, e),
                t) {
                    var a = o[i]
                      , s = t[i];
                    a && !Array.isArray(a) && (a = [a]),
                    o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
                }
                return o
            }
            ,
            Oe.props = Oe.methods = Oe.inject = Oe.computed = function(e, t, n, r) {
                if (!e)
                    return t;
                var o = Object.create(null);
                return E(o, e),
                t && E(o, t),
                o
            }
            ,
            Oe.provide = $e;
            var De = function(e, t) {
                return void 0 === t ? e : t
            };
            function je(e, t, n) {
                if ("function" == typeof t && (t = t.options),
                function(e, t) {
                    var n = e.props;
                    if (n) {
                        var r, o, i = {};
                        if (Array.isArray(n))
                            for (r = n.length; r--; )
                                "string" == typeof (o = n[r]) && (i[_(o)] = {
                                    type: null
                                });
                        else if (u(n))
                            for (var a in n)
                                o = n[a],
                                i[_(a)] = u(o) ? o : {
                                    type: o
                                };
                        e.props = i
                    }
                }(t),
                function(e, t) {
                    var n = e.inject;
                    if (n) {
                        var r = e.inject = {};
                        if (Array.isArray(n))
                            for (var o = 0; o < n.length; o++)
                                r[n[o]] = {
                                    from: n[o]
                                };
                        else if (u(n))
                            for (var i in n) {
                                var a = n[i];
                                r[i] = u(a) ? E({
                                    from: i
                                }, a) : {
                                    from: a
                                }
                            }
                    }
                }(t),
                function(e) {
                    var t = e.directives;
                    if (t)
                        for (var n in t) {
                            var r = t[n];
                            "function" == typeof r && (t[n] = {
                                bind: r,
                                update: r
                            })
                        }
                }(t),
                !t._base && (t.extends && (e = je(e, t.extends, n)),
                t.mixins))
                    for (var r = 0, o = t.mixins.length; r < o; r++)
                        e = je(e, t.mixins[r], n);
                var i, a = {};
                for (i in e)
                    s(i);
                for (i in t)
                    w(e, i) || s(i);
                function s(r) {
                    var o = Oe[r] || De;
                    a[r] = o(e[r], t[r], n, r)
                }
                return a
            }
            function Ie(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (w(o, n))
                        return o[n];
                    var i = _(n);
                    if (w(o, i))
                        return o[i];
                    var a = k(i);
                    return w(o, a) ? o[a] : o[n] || o[i] || o[a]
                }
            }
            function Be(e, t, n, r) {
                var o = t[e]
                  , i = !w(n, e)
                  , a = n[e]
                  , s = qe(Boolean, o.type);
                if (s > -1)
                    if (i && !w(o, "default"))
                        a = !1;
                    else if ("" === a || a === S(e)) {
                        var l = qe(String, o.type);
                        (l < 0 || s < l) && (a = !0)
                    }
                if (void 0 === a) {
                    a = function(e, t, n) {
                        if (w(t, "default")) {
                            var r = t.default;
                            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Re(t.type) ? r.call(e) : r
                        }
                    }(r, o, e);
                    var c = _e;
                    ke(!0),
                    Se(a),
                    ke(c)
                }
                return a
            }
            var Ne = /^\s*function (\w+)/;
            function Re(e) {
                var t = e && e.toString().match(Ne);
                return t ? t[1] : ""
            }
            function Fe(e, t) {
                return Re(e) === Re(t)
            }
            function qe(e, t) {
                if (!Array.isArray(t))
                    return Fe(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++)
                    if (Fe(t[n], e))
                        return n;
                return -1
            }
            function Ue(e, t, n) {
                fe();
                try {
                    if (t)
                        for (var r = t; r = r.$parent; ) {
                            var o = r.$options.errorCaptured;
                            if (o)
                                for (var i = 0; i < o.length; i++)
                                    try {
                                        if (!1 === o[i].call(r, e, t, n))
                                            return
                                    } catch (e) {
                                        Ve(e, r, "errorCaptured hook")
                                    }
                        }
                    Ve(e, t, n)
                } finally {
                    me()
                }
            }
            function He(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && p(i) && !i._handled && (i.catch((function(e) {
                        return Ue(e, r, o + " (Promise/async)")
                    }
                    )),
                    i._handled = !0)
                } catch (e) {
                    Ue(e, r, o)
                }
                return i
            }
            function Ve(e, t, n) {
                if (R.errorHandler)
                    try {
                        return R.errorHandler.call(null, e, t, n)
                    } catch (t) {
                        t !== e && Ge(t, null, "config.errorHandler")
                    }
                Ge(e, t, n)
            }
            function Ge(e, t, n) {
                if (!G && !J || "undefined" == typeof console)
                    throw e;
                console.error(e)
            }
            var Je, We = !1, Ke = [], Qe = !1;
            function Ze() {
                Qe = !1;
                var e = Ke.slice(0);
                Ke.length = 0;
                for (var t = 0; t < e.length; t++)
                    e[t]()
            }
            if ("undefined" != typeof Promise && ae(Promise)) {
                var Xe = Promise.resolve();
                Je = function() {
                    Xe.then(Ze),
                    Y && setTimeout(P)
                }
                ,
                We = !0
            } else if (Q || "undefined" == typeof MutationObserver || !ae(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
                Je = void 0 !== n && ae(n) ? function() {
                    n(Ze)
                }
                : function() {
                    setTimeout(Ze, 0)
                }
                ;
            else {
                var Ye = 1
                  , et = new MutationObserver(Ze)
                  , tt = document.createTextNode(String(Ye));
                et.observe(tt, {
                    characterData: !0
                }),
                Je = function() {
                    Ye = (Ye + 1) % 2,
                    tt.data = String(Ye)
                }
                ,
                We = !0
            }
            function nt(e, t) {
                var n;
                if (Ke.push((function() {
                    if (e)
                        try {
                            e.call(t)
                        } catch (e) {
                            Ue(e, t, "nextTick")
                        }
                    else
                        n && n(t)
                }
                )),
                Qe || (Qe = !0,
                Je()),
                !e && "undefined" != typeof Promise)
                    return new Promise((function(e) {
                        n = e
                    }
                    ))
            }
            var rt = new se;
            function ot(e) {
                !function e(t, n) {
                    var r, o, i = Array.isArray(t);
                    if (!(!i && !l(t) || Object.isFrozen(t) || t instanceof he)) {
                        if (t.__ob__) {
                            var a = t.__ob__.dep.id;
                            if (n.has(a))
                                return;
                            n.add(a)
                        }
                        if (i)
                            for (r = t.length; r--; )
                                e(t[r], n);
                        else
                            for (r = (o = Object.keys(t)).length; r--; )
                                e(t[o[r]], n)
                    }
                }(e, rt),
                rt.clear()
            }
            var it = x((function(e) {
                var t = "&" === e.charAt(0)
                  , n = "~" === (e = t ? e.slice(1) : e).charAt(0)
                  , r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return {
                    name: e = r ? e.slice(1) : e,
                    once: n,
                    capture: r,
                    passive: t
                }
            }
            ));
            function at(e, t) {
                function n() {
                    var e = arguments
                      , r = n.fns;
                    if (!Array.isArray(r))
                        return He(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++)
                        He(o[i], null, e, t, "v-on handler")
                }
                return n.fns = e,
                n
            }
            function st(e, t, n, r, i, s) {
                var l, c, u, d;
                for (l in e)
                    c = e[l],
                    u = t[l],
                    d = it(l),
                    o(c) || (o(u) ? (o(c.fns) && (c = e[l] = at(c, s)),
                    a(d.once) && (c = e[l] = i(d.name, c, d.capture)),
                    n(d.name, c, d.capture, d.passive, d.params)) : c !== u && (u.fns = c,
                    e[l] = u));
                for (l in t)
                    o(e[l]) && r((d = it(l)).name, t[l], d.capture)
            }
            function lt(e, t, n) {
                var r;
                e instanceof he && (e = e.data.hook || (e.data.hook = {}));
                var s = e[t];
                function l() {
                    n.apply(this, arguments),
                    b(r.fns, l)
                }
                o(s) ? r = at([l]) : i(s.fns) && a(s.merged) ? (r = s).fns.push(l) : r = at([s, l]),
                r.merged = !0,
                e[t] = r
            }
            function ct(e, t, n, r, o) {
                if (i(t)) {
                    if (w(t, n))
                        return e[n] = t[n],
                        o || delete t[n],
                        !0;
                    if (w(t, r))
                        return e[n] = t[r],
                        o || delete t[r],
                        !0
                }
                return !1
            }
            function ut(e) {
                return s(e) ? [be(e)] : Array.isArray(e) ? function e(t, n) {
                    var r, l, c, u, d = [];
                    for (r = 0; r < t.length; r++)
                        o(l = t[r]) || "boolean" == typeof l || (u = d[c = d.length - 1],
                        Array.isArray(l) ? l.length > 0 && (dt((l = e(l, (n || "") + "_" + r))[0]) && dt(u) && (d[c] = be(u.text + l[0].text),
                        l.shift()),
                        d.push.apply(d, l)) : s(l) ? dt(u) ? d[c] = be(u.text + l) : "" !== l && d.push(be(l)) : dt(l) && dt(u) ? d[c] = be(u.text + l.text) : (a(t._isVList) && i(l.tag) && o(l.key) && i(n) && (l.key = "__vlist" + n + "_" + r + "__"),
                        d.push(l)));
                    return d
                }(e) : void 0
            }
            function dt(e) {
                return i(e) && i(e.text) && !1 === e.isComment
            }
            function pt(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = le ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = e[i].from, s = t; s; ) {
                                if (s._provided && w(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break
                                }
                                s = s.$parent
                            }
                            if (!s && "default"in e[i]) {
                                var l = e[i].default;
                                n[i] = "function" == typeof l ? l.call(t) : l
                            }
                        }
                    }
                    return n
                }
            }
            function ft(e, t) {
                if (!e || !e.length)
                    return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r]
                      , a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
                    i.context !== t && i.fnContext !== t || !a || null == a.slot)
                        (n.default || (n.default = [])).push(i);
                    else {
                        var s = a.slot
                          , l = n[s] || (n[s] = []);
                        "template" === i.tag ? l.push.apply(l, i.children || []) : l.push(i)
                    }
                }
                for (var c in n)
                    n[c].every(mt) && delete n[c];
                return n
            }
            function mt(e) {
                return e.isComment && !e.asyncFactory || " " === e.text
            }
            function ht(e) {
                return e.isComment && e.asyncFactory
            }
            function vt(e, t, n) {
                var o, i = Object.keys(t).length > 0, a = e ? !!e.$stable : !i, s = e && e.$key;
                if (e) {
                    if (e._normalized)
                        return e._normalized;
                    if (a && n && n !== r && s === n.$key && !i && !n.$hasNormal)
                        return n;
                    for (var l in o = {},
                    e)
                        e[l] && "$" !== l[0] && (o[l] = gt(t, l, e[l]))
                } else
                    o = {};
                for (var c in t)
                    c in o || (o[c] = bt(t, c));
                return e && Object.isExtensible(e) && (e._normalized = o),
                q(o, "$stable", a),
                q(o, "$key", s),
                q(o, "$hasNormal", i),
                o
            }
            function gt(e, t, n) {
                var r = function() {
                    var e = arguments.length ? n.apply(null, arguments) : n({})
                      , t = (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : ut(e)) && e[0];
                    return e && (!t || 1 === e.length && t.isComment && !ht(t)) ? void 0 : e
                };
                return n.proxy && Object.defineProperty(e, t, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }),
                r
            }
            function bt(e, t) {
                return function() {
                    return e[t]
                }
            }
            function yt(e, t) {
                var n, r, o, a, s;
                if (Array.isArray(e) || "string" == typeof e)
                    for (n = new Array(e.length),
                    r = 0,
                    o = e.length; r < o; r++)
                        n[r] = t(e[r], r);
                else if ("number" == typeof e)
                    for (n = new Array(e),
                    r = 0; r < e; r++)
                        n[r] = t(r + 1, r);
                else if (l(e))
                    if (le && e[Symbol.iterator]) {
                        n = [];
                        for (var c = e[Symbol.iterator](), u = c.next(); !u.done; )
                            n.push(t(u.value, n.length)),
                            u = c.next()
                    } else
                        for (a = Object.keys(e),
                        n = new Array(a.length),
                        r = 0,
                        o = a.length; r < o; r++)
                            s = a[r],
                            n[r] = t(e[s], s, r);
                return i(n) || (n = []),
                n._isVList = !0,
                n
            }
            function wt(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {},
                r && (n = E(E({}, r), n)),
                o = i(n) || ("function" == typeof t ? t() : t)) : o = this.$slots[e] || ("function" == typeof t ? t() : t);
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o
            }
            function xt(e) {
                return Ie(this.$options, "filters", e) || L
            }
            function Tt(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
            }
            function _t(e, t, n, r, o) {
                var i = R.keyCodes[t] || n;
                return o && r && !R.keyCodes[t] ? Tt(o, r) : i ? Tt(i, e) : r ? S(r) !== t : void 0 === e
            }
            function kt(e, t, n, r, o) {
                if (n && l(n)) {
                    var i;
                    Array.isArray(n) && (n = O(n));
                    var a = function(a) {
                        if ("class" === a || "style" === a || g(a))
                            i = e;
                        else {
                            var s = e.attrs && e.attrs.type;
                            i = r || R.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        var l = _(a)
                          , c = S(a);
                        l in i || c in i || (i[a] = n[a],
                        o && ((e.on || (e.on = {}))["update:" + a] = function(e) {
                            n[a] = e
                        }
                        ))
                    };
                    for (var s in n)
                        a(s)
                }
                return e
            }
            function zt(e, t) {
                var n = this._staticTrees || (this._staticTrees = [])
                  , r = n[e];
                return r && !t || Ct(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1),
                r
            }
            function St(e, t, n) {
                return Ct(e, "__once__" + t + (n ? "_" + n : ""), !0),
                e
            }
            function Ct(e, t, n) {
                if (Array.isArray(e))
                    for (var r = 0; r < e.length; r++)
                        e[r] && "string" != typeof e[r] && At(e[r], t + "_" + r, n);
                else
                    At(e, t, n)
            }
            function At(e, t, n) {
                e.isStatic = !0,
                e.key = t,
                e.isOnce = n
            }
            function Et(e, t) {
                if (t && u(t)) {
                    var n = e.on = e.on ? E({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r]
                          , i = t[r];
                        n[r] = o ? [].concat(o, i) : i
                    }
                }
                return e
            }
            function Ot(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? Ot(i, t, n) : i && (i.proxy && (i.fn.proxy = !0),
                    t[i.key] = i.fn)
                }
                return r && (t.$key = r),
                t
            }
            function Pt(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" == typeof r && r && (e[t[n]] = t[n + 1])
                }
                return e
            }
            function $t(e, t) {
                return "string" == typeof e ? t + e : e
            }
            function Lt(e) {
                e._o = St,
                e._n = m,
                e._s = f,
                e._l = yt,
                e._t = wt,
                e._q = M,
                e._i = D,
                e._m = zt,
                e._f = xt,
                e._k = _t,
                e._b = kt,
                e._v = be,
                e._e = ge,
                e._u = Ot,
                e._g = Et,
                e._d = Pt,
                e._p = $t
            }
            function Mt(e, t, n, o, i) {
                var s, l = this, c = i.options;
                w(o, "_uid") ? (s = Object.create(o))._original = o : (s = o,
                o = o._original);
                var u = a(c._compiled)
                  , d = !u;
                this.data = e,
                this.props = t,
                this.children = n,
                this.parent = o,
                this.listeners = e.on || r,
                this.injections = pt(c.inject, o),
                this.slots = function() {
                    return l.$slots || vt(e.scopedSlots, l.$slots = ft(n, o)),
                    l.$slots
                }
                ,
                Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return vt(e.scopedSlots, this.slots())
                    }
                }),
                u && (this.$options = c,
                this.$slots = this.slots(),
                this.$scopedSlots = vt(e.scopedSlots, this.$slots)),
                c._scopeId ? this._c = function(e, t, n, r) {
                    var i = Ft(s, e, t, n, r, d);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId,
                    i.fnContext = o),
                    i
                }
                : this._c = function(e, t, n, r) {
                    return Ft(s, e, t, n, r, d)
                }
            }
            function Dt(e, t, n, r, o) {
                var i = ye(e);
                return i.fnContext = n,
                i.fnOptions = r,
                t.slot && ((i.data || (i.data = {})).slot = t.slot),
                i
            }
            function jt(e, t) {
                for (var n in t)
                    e[_(n)] = t[n]
            }
            Lt(Mt.prototype);
            var It = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        It.prepatch(n, n)
                    } else
                        (e.componentInstance = function(e, t) {
                            var n = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: t
                            }
                              , r = e.data.inlineTemplate;
                            return i(r) && (n.render = r.render,
                            n.staticRenderFns = r.staticRenderFns),
                            new e.componentOptions.Ctor(n)
                        }(e, Qt)).$mount(t ? e.elm : void 0, t)
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    !function(e, t, n, o, i) {
                        var a = o.data.scopedSlots
                          , s = e.$scopedSlots
                          , l = !!(a && !a.$stable || s !== r && !s.$stable || a && e.$scopedSlots.$key !== a.$key || !a && e.$scopedSlots.$key)
                          , c = !!(i || e.$options._renderChildren || l);
                        if (e.$options._parentVnode = o,
                        e.$vnode = o,
                        e._vnode && (e._vnode.parent = o),
                        e.$options._renderChildren = i,
                        e.$attrs = o.data.attrs || r,
                        e.$listeners = n || r,
                        t && e.$options.props) {
                            ke(!1);
                            for (var u = e._props, d = e.$options._propKeys || [], p = 0; p < d.length; p++) {
                                var f = d[p]
                                  , m = e.$options.props;
                                u[f] = Be(f, m, t, e)
                            }
                            ke(!0),
                            e.$options.propsData = t
                        }
                        n = n || r;
                        var h = e.$options._parentListeners;
                        e.$options._parentListeners = n,
                        Kt(e, n, h),
                        c && (e.$slots = ft(i, o.context),
                        e.$forceUpdate())
                    }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
                },
                insert: function(e) {
                    var t, n = e.context, r = e.componentInstance;
                    r._isMounted || (r._isMounted = !0,
                    en(r, "mounted")),
                    e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1,
                    nn.push(t)) : Yt(r, !0))
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                        if (!(n && (t._directInactive = !0,
                        Xt(t)) || t._inactive)) {
                            t._inactive = !0;
                            for (var r = 0; r < t.$children.length; r++)
                                e(t.$children[r]);
                            en(t, "deactivated")
                        }
                    }(t, !0) : t.$destroy())
                }
            }
              , Bt = Object.keys(It);
            function Nt(e, t, n, s, c) {
                if (!o(e)) {
                    var u = n.$options._base;
                    if (l(e) && (e = u.extend(e)),
                    "function" == typeof e) {
                        var d;
                        if (o(e.cid) && void 0 === (e = function(e, t) {
                            if (a(e.error) && i(e.errorComp))
                                return e.errorComp;
                            if (i(e.resolved))
                                return e.resolved;
                            var n = Ut;
                            if (n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n),
                            a(e.loading) && i(e.loadingComp))
                                return e.loadingComp;
                            if (n && !i(e.owners)) {
                                var r = e.owners = [n]
                                  , s = !0
                                  , c = null
                                  , u = null;
                                n.$on("hook:destroyed", (function() {
                                    return b(r, n)
                                }
                                ));
                                var d = function(e) {
                                    for (var t = 0, n = r.length; t < n; t++)
                                        r[t].$forceUpdate();
                                    e && (r.length = 0,
                                    null !== c && (clearTimeout(c),
                                    c = null),
                                    null !== u && (clearTimeout(u),
                                    u = null))
                                }
                                  , f = j((function(n) {
                                    e.resolved = Ht(n, t),
                                    s ? r.length = 0 : d(!0)
                                }
                                ))
                                  , m = j((function(t) {
                                    i(e.errorComp) && (e.error = !0,
                                    d(!0))
                                }
                                ))
                                  , h = e(f, m);
                                return l(h) && (p(h) ? o(e.resolved) && h.then(f, m) : p(h.component) && (h.component.then(f, m),
                                i(h.error) && (e.errorComp = Ht(h.error, t)),
                                i(h.loading) && (e.loadingComp = Ht(h.loading, t),
                                0 === h.delay ? e.loading = !0 : c = setTimeout((function() {
                                    c = null,
                                    o(e.resolved) && o(e.error) && (e.loading = !0,
                                    d(!1))
                                }
                                ), h.delay || 200)),
                                i(h.timeout) && (u = setTimeout((function() {
                                    u = null,
                                    o(e.resolved) && m(null)
                                }
                                ), h.timeout)))),
                                s = !1,
                                e.loading ? e.loadingComp : e.resolved
                            }
                        }(d = e, u)))
                            return function(e, t, n, r, o) {
                                var i = ge();
                                return i.asyncFactory = e,
                                i.asyncMeta = {
                                    data: t,
                                    context: n,
                                    children: r,
                                    tag: o
                                },
                                i
                            }(d, t, n, s, c);
                        t = t || {},
                        Tn(e),
                        i(t.model) && function(e, t) {
                            var n = e.model && e.model.prop || "value"
                              , r = e.model && e.model.event || "input";
                            (t.attrs || (t.attrs = {}))[n] = t.model.value;
                            var o = t.on || (t.on = {})
                              , a = o[r]
                              , s = t.model.callback;
                            i(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[r] = [s].concat(a)) : o[r] = s
                        }(e.options, t);
                        var f = function(e, t, n) {
                            var r = t.options.props;
                            if (!o(r)) {
                                var a = {}
                                  , s = e.attrs
                                  , l = e.props;
                                if (i(s) || i(l))
                                    for (var c in r) {
                                        var u = S(c);
                                        ct(a, l, c, u, !0) || ct(a, s, c, u, !1)
                                    }
                                return a
                            }
                        }(t, e);
                        if (a(e.options.functional))
                            return function(e, t, n, o, a) {
                                var s = e.options
                                  , l = {}
                                  , c = s.props;
                                if (i(c))
                                    for (var u in c)
                                        l[u] = Be(u, c, t || r);
                                else
                                    i(n.attrs) && jt(l, n.attrs),
                                    i(n.props) && jt(l, n.props);
                                var d = new Mt(n,l,a,o,e)
                                  , p = s.render.call(null, d._c, d);
                                if (p instanceof he)
                                    return Dt(p, n, d.parent, s);
                                if (Array.isArray(p)) {
                                    for (var f = ut(p) || [], m = new Array(f.length), h = 0; h < f.length; h++)
                                        m[h] = Dt(f[h], n, d.parent, s);
                                    return m
                                }
                            }(e, f, t, n, s);
                        var m = t.on;
                        if (t.on = t.nativeOn,
                        a(e.options.abstract)) {
                            var h = t.slot;
                            t = {},
                            h && (t.slot = h)
                        }
                        !function(e) {
                            for (var t = e.hook || (e.hook = {}), n = 0; n < Bt.length; n++) {
                                var r = Bt[n]
                                  , o = t[r]
                                  , i = It[r];
                                o === i || o && o._merged || (t[r] = o ? Rt(i, o) : i)
                            }
                        }(t);
                        var v = e.options.name || c;
                        return new he("vue-component-" + e.cid + (v ? "-" + v : ""),t,void 0,void 0,void 0,n,{
                            Ctor: e,
                            propsData: f,
                            listeners: m,
                            tag: c,
                            children: s
                        },d)
                    }
                }
            }
            function Rt(e, t) {
                var n = function(n, r) {
                    e(n, r),
                    t(n, r)
                };
                return n._merged = !0,
                n
            }
            function Ft(e, t, n, r, c, u) {
                return (Array.isArray(n) || s(n)) && (c = r,
                r = n,
                n = void 0),
                a(u) && (c = 2),
                function(e, t, n, r, s) {
                    if (i(n) && i(n.__ob__))
                        return ge();
                    if (i(n) && i(n.is) && (t = n.is),
                    !t)
                        return ge();
                    var c, u, d;
                    (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                        default: r[0]
                    },
                    r.length = 0),
                    2 === s ? r = ut(r) : 1 === s && (r = function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (Array.isArray(e[t]))
                                return Array.prototype.concat.apply([], e);
                        return e
                    }(r)),
                    "string" == typeof t) ? (u = e.$vnode && e.$vnode.ns || R.getTagNamespace(t),
                    c = R.isReservedTag(t) ? new he(R.parsePlatformTagName(t),n,r,void 0,void 0,e) : n && n.pre || !i(d = Ie(e.$options, "components", t)) ? new he(t,n,r,void 0,void 0,e) : Nt(d, n, e, r, t)) : c = Nt(t, n, e, r);
                    return Array.isArray(c) ? c : i(c) ? (i(u) && function e(t, n, r) {
                        if (t.ns = n,
                        "foreignObject" === t.tag && (n = void 0,
                        r = !0),
                        i(t.children))
                            for (var s = 0, l = t.children.length; s < l; s++) {
                                var c = t.children[s];
                                i(c.tag) && (o(c.ns) || a(r) && "svg" !== c.tag) && e(c, n, r)
                            }
                    }(c, u),
                    i(n) && function(e) {
                        l(e.style) && ot(e.style),
                        l(e.class) && ot(e.class)
                    }(n),
                    c) : ge()
                }(e, t, n, r, c)
            }
            var qt, Ut = null;
            function Ht(e, t) {
                return (e.__esModule || le && "Module" === e[Symbol.toStringTag]) && (e = e.default),
                l(e) ? t.extend(e) : e
            }
            function Vt(e) {
                if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (i(n) && (i(n.componentOptions) || ht(n)))
                            return n
                    }
            }
            function Gt(e, t) {
                qt.$on(e, t)
            }
            function Jt(e, t) {
                qt.$off(e, t)
            }
            function Wt(e, t) {
                var n = qt;
                return function r() {
                    null !== t.apply(null, arguments) && n.$off(e, r)
                }
            }
            function Kt(e, t, n) {
                qt = e,
                st(t, n || {}, Gt, Jt, Wt, e),
                qt = void 0
            }
            var Qt = null;
            function Zt(e) {
                var t = Qt;
                return Qt = e,
                function() {
                    Qt = t
                }
            }
            function Xt(e) {
                for (; e && (e = e.$parent); )
                    if (e._inactive)
                        return !0;
                return !1
            }
            function Yt(e, t) {
                if (t) {
                    if (e._directInactive = !1,
                    Xt(e))
                        return
                } else if (e._directInactive)
                    return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++)
                        Yt(e.$children[n]);
                    en(e, "activated")
                }
            }
            function en(e, t) {
                fe();
                var n = e.$options[t]
                  , r = t + " hook";
                if (n)
                    for (var o = 0, i = n.length; o < i; o++)
                        He(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t),
                me()
            }
            var tn = []
              , nn = []
              , rn = {}
              , on = !1
              , an = !1
              , sn = 0
              , ln = 0
              , cn = Date.now;
            if (G && !Q) {
                var un = window.performance;
                un && "function" == typeof un.now && cn() > document.createEvent("Event").timeStamp && (cn = function() {
                    return un.now()
                }
                )
            }
            function dn() {
                var e, t;
                for (ln = cn(),
                an = !0,
                tn.sort((function(e, t) {
                    return e.id - t.id
                }
                )),
                sn = 0; sn < tn.length; sn++)
                    (e = tn[sn]).before && e.before(),
                    t = e.id,
                    rn[t] = null,
                    e.run();
                var n = nn.slice()
                  , r = tn.slice();
                sn = tn.length = nn.length = 0,
                rn = {},
                on = an = !1,
                function(e) {
                    for (var t = 0; t < e.length; t++)
                        e[t]._inactive = !0,
                        Yt(e[t], !0)
                }(n),
                function(e) {
                    for (var t = e.length; t--; ) {
                        var n = e[t]
                          , r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && en(r, "updated")
                    }
                }(r),
                ie && R.devtools && ie.emit("flush")
            }
            var pn = 0
              , fn = function(e, t, n, r, o) {
                this.vm = e,
                o && (e._watcher = this),
                e._watchers.push(this),
                r ? (this.deep = !!r.deep,
                this.user = !!r.user,
                this.lazy = !!r.lazy,
                this.sync = !!r.sync,
                this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
                this.cb = n,
                this.id = ++pn,
                this.active = !0,
                this.dirty = this.lazy,
                this.deps = [],
                this.newDeps = [],
                this.depIds = new se,
                this.newDepIds = new se,
                this.expression = "",
                "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                    if (!H.test(e)) {
                        var t = e.split(".");
                        return function(e) {
                            for (var n = 0; n < t.length; n++) {
                                if (!e)
                                    return;
                                e = e[t[n]]
                            }
                            return e
                        }
                    }
                }(t),
                this.getter || (this.getter = P)),
                this.value = this.lazy ? void 0 : this.get()
            };
            fn.prototype.get = function() {
                var e;
                fe(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t)
                } catch (e) {
                    if (!this.user)
                        throw e;
                    Ue(e, t, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && ot(e),
                    me(),
                    this.cleanupDeps()
                }
                return e
            }
            ,
            fn.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t),
                this.newDeps.push(e),
                this.depIds.has(t) || e.addSub(this))
            }
            ,
            fn.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds,
                this.newDepIds = n,
                this.newDepIds.clear(),
                n = this.deps,
                this.deps = this.newDeps,
                this.newDeps = n,
                this.newDeps.length = 0
            }
            ,
            fn.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var t = e.id;
                    if (null == rn[t]) {
                        if (rn[t] = !0,
                        an) {
                            for (var n = tn.length - 1; n > sn && tn[n].id > e.id; )
                                n--;
                            tn.splice(n + 1, 0, e)
                        } else
                            tn.push(e);
                        on || (on = !0,
                        nt(dn))
                    }
                }(this)
            }
            ,
            fn.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || l(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e,
                        this.user) {
                            var n = 'callback for watcher "' + this.expression + '"';
                            He(this.cb, this.vm, [e, t], this.vm, n)
                        } else
                            this.cb.call(this.vm, e, t)
                    }
                }
            }
            ,
            fn.prototype.evaluate = function() {
                this.value = this.get(),
                this.dirty = !1
            }
            ,
            fn.prototype.depend = function() {
                for (var e = this.deps.length; e--; )
                    this.deps[e].depend()
            }
            ,
            fn.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || b(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; )
                        this.deps[e].removeSub(this);
                    this.active = !1
                }
            }
            ;
            var mn = {
                enumerable: !0,
                configurable: !0,
                get: P,
                set: P
            };
            function hn(e, t, n) {
                mn.get = function() {
                    return this[t][n]
                }
                ,
                mn.set = function(e) {
                    this[t][n] = e
                }
                ,
                Object.defineProperty(e, n, mn)
            }
            var vn = {
                lazy: !0
            };
            function gn(e, t, n) {
                var r = !oe();
                "function" == typeof n ? (mn.get = r ? bn(t) : yn(n),
                mn.set = P) : (mn.get = n.get ? r && !1 !== n.cache ? bn(t) : yn(n.get) : P,
                mn.set = n.set || P),
                Object.defineProperty(e, t, mn)
            }
            function bn(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t)
                        return t.dirty && t.evaluate(),
                        de.target && t.depend(),
                        t.value
                }
            }
            function yn(e) {
                return function() {
                    return e.call(this, this)
                }
            }
            function wn(e, t, n, r) {
                return u(n) && (r = n,
                n = n.handler),
                "string" == typeof n && (n = e[n]),
                e.$watch(t, n, r)
            }
            var xn = 0;
            function Tn(e) {
                var t = e.options;
                if (e.super) {
                    var n = Tn(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = function(e) {
                            var t, n = e.options, r = e.sealedOptions;
                            for (var o in n)
                                n[o] !== r[o] && (t || (t = {}),
                                t[o] = n[o]);
                            return t
                        }(e);
                        r && E(e.extendOptions, r),
                        (t = e.options = je(n, e.extendOptions)).name && (t.components[t.name] = e)
                    }
                }
                return t
            }
            function _n(e) {
                this._init(e)
            }
            function kn(e) {
                return e && (e.Ctor.options.name || e.tag)
            }
            function zn(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e,
                "[object RegExp]" === c.call(n) && e.test(t));
                var n
            }
            function Sn(e, t) {
                var n = e.cache
                  , r = e.keys
                  , o = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = a.name;
                        s && !t(s) && Cn(n, i, r, o)
                    }
                }
            }
            function Cn(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(),
                e[t] = null,
                b(n, t)
            }
            !function(e) {
                e.prototype._init = function(e) {
                    var t = this;
                    t._uid = xn++,
                    t._isVue = !0,
                    e && e._isComponent ? function(e, t) {
                        var n = e.$options = Object.create(e.constructor.options)
                          , r = t._parentVnode;
                        n.parent = t.parent,
                        n._parentVnode = r;
                        var o = r.componentOptions;
                        n.propsData = o.propsData,
                        n._parentListeners = o.listeners,
                        n._renderChildren = o.children,
                        n._componentTag = o.tag,
                        t.render && (n.render = t.render,
                        n.staticRenderFns = t.staticRenderFns)
                    }(t, e) : t.$options = je(Tn(t.constructor), e || {}, t),
                    t._renderProxy = t,
                    t._self = t,
                    function(e) {
                        var t = e.$options
                          , n = t.parent;
                        if (n && !t.abstract) {
                            for (; n.$options.abstract && n.$parent; )
                                n = n.$parent;
                            n.$children.push(e)
                        }
                        e.$parent = n,
                        e.$root = n ? n.$root : e,
                        e.$children = [],
                        e.$refs = {},
                        e._watcher = null,
                        e._inactive = null,
                        e._directInactive = !1,
                        e._isMounted = !1,
                        e._isDestroyed = !1,
                        e._isBeingDestroyed = !1
                    }(t),
                    function(e) {
                        e._events = Object.create(null),
                        e._hasHookEvent = !1;
                        var t = e.$options._parentListeners;
                        t && Kt(e, t)
                    }(t),
                    function(e) {
                        e._vnode = null,
                        e._staticTrees = null;
                        var t = e.$options
                          , n = e.$vnode = t._parentVnode
                          , o = n && n.context;
                        e.$slots = ft(t._renderChildren, o),
                        e.$scopedSlots = r,
                        e._c = function(t, n, r, o) {
                            return Ft(e, t, n, r, o, !1)
                        }
                        ,
                        e.$createElement = function(t, n, r, o) {
                            return Ft(e, t, n, r, o, !0)
                        }
                        ;
                        var i = n && n.data;
                        Ce(e, "$attrs", i && i.attrs || r, null, !0),
                        Ce(e, "$listeners", t._parentListeners || r, null, !0)
                    }(t),
                    en(t, "beforeCreate"),
                    function(e) {
                        var t = pt(e.$options.inject, e);
                        t && (ke(!1),
                        Object.keys(t).forEach((function(n) {
                            Ce(e, n, t[n])
                        }
                        )),
                        ke(!0))
                    }(t),
                    function(e) {
                        e._watchers = [];
                        var t = e.$options;
                        t.props && function(e, t) {
                            var n = e.$options.propsData || {}
                              , r = e._props = {}
                              , o = e.$options._propKeys = [];
                            e.$parent && ke(!1);
                            var i = function(i) {
                                o.push(i);
                                var a = Be(i, t, n, e);
                                Ce(r, i, a),
                                i in e || hn(e, "_props", i)
                            };
                            for (var a in t)
                                i(a);
                            ke(!0)
                        }(e, t.props),
                        t.methods && function(e, t) {
                            for (var n in e.$options.props,
                            t)
                                e[n] = "function" != typeof t[n] ? P : C(t[n], e)
                        }(e, t.methods),
                        t.data ? function(e) {
                            var t = e.$options.data;
                            u(t = e._data = "function" == typeof t ? function(e, t) {
                                fe();
                                try {
                                    return e.call(t, t)
                                } catch (e) {
                                    return Ue(e, t, "data()"),
                                    {}
                                } finally {
                                    me()
                                }
                            }(t, e) : t || {}) || (t = {});
                            for (var n, r = Object.keys(t), o = e.$options.props, i = (e.$options.methods,
                            r.length); i--; ) {
                                var a = r[i];
                                o && w(o, a) || (void 0,
                                36 !== (n = (a + "").charCodeAt(0)) && 95 !== n && hn(e, "_data", a))
                            }
                            Se(t, !0)
                        }(e) : Se(e._data = {}, !0),
                        t.computed && function(e, t) {
                            var n = e._computedWatchers = Object.create(null)
                              , r = oe();
                            for (var o in t) {
                                var i = t[o]
                                  , a = "function" == typeof i ? i : i.get;
                                r || (n[o] = new fn(e,a || P,P,vn)),
                                o in e || gn(e, o, i)
                            }
                        }(e, t.computed),
                        t.watch && t.watch !== te && function(e, t) {
                            for (var n in t) {
                                var r = t[n];
                                if (Array.isArray(r))
                                    for (var o = 0; o < r.length; o++)
                                        wn(e, n, r[o]);
                                else
                                    wn(e, n, r)
                            }
                        }(e, t.watch)
                    }(t),
                    function(e) {
                        var t = e.$options.provide;
                        t && (e._provided = "function" == typeof t ? t.call(e) : t)
                    }(t),
                    en(t, "created"),
                    t.$options.el && t.$mount(t.$options.el)
                }
            }(_n),
            function(e) {
                Object.defineProperty(e.prototype, "$data", {
                    get: function() {
                        return this._data
                    }
                }),
                Object.defineProperty(e.prototype, "$props", {
                    get: function() {
                        return this._props
                    }
                }),
                e.prototype.$set = Ae,
                e.prototype.$delete = Ee,
                e.prototype.$watch = function(e, t, n) {
                    if (u(t))
                        return wn(this, e, t, n);
                    (n = n || {}).user = !0;
                    var r = new fn(this,e,t,n);
                    if (n.immediate) {
                        var o = 'callback for immediate watcher "' + r.expression + '"';
                        fe(),
                        He(t, this, [r.value], this, o),
                        me()
                    }
                    return function() {
                        r.teardown()
                    }
                }
            }(_n),
            function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var r = this;
                    if (Array.isArray(e))
                        for (var o = 0, i = e.length; o < i; o++)
                            r.$on(e[o], n);
                    else
                        (r._events[e] || (r._events[e] = [])).push(n),
                        t.test(e) && (r._hasHookEvent = !0);
                    return r
                }
                ,
                e.prototype.$once = function(e, t) {
                    var n = this;
                    function r() {
                        n.$off(e, r),
                        t.apply(n, arguments)
                    }
                    return r.fn = t,
                    n.$on(e, r),
                    n
                }
                ,
                e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length)
                        return n._events = Object.create(null),
                        n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++)
                            n.$off(e[r], t);
                        return n
                    }
                    var i, a = n._events[e];
                    if (!a)
                        return n;
                    if (!t)
                        return n._events[e] = null,
                        n;
                    for (var s = a.length; s--; )
                        if ((i = a[s]) === t || i.fn === t) {
                            a.splice(s, 1);
                            break
                        }
                    return n
                }
                ,
                e.prototype.$emit = function(e) {
                    var t = this._events[e];
                    if (t) {
                        t = t.length > 1 ? A(t) : t;
                        for (var n = A(arguments, 1), r = 'event handler for "' + e + '"', o = 0, i = t.length; o < i; o++)
                            He(t[o], this, n, this, r)
                    }
                    return this
                }
            }(_n),
            function(e) {
                e.prototype._update = function(e, t) {
                    var n = this
                      , r = n.$el
                      , o = n._vnode
                      , i = Zt(n);
                    n._vnode = e,
                    n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1),
                    i(),
                    r && (r.__vue__ = null),
                    n.$el && (n.$el.__vue__ = n),
                    n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }
                ,
                e.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update()
                }
                ,
                e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        en(e, "beforeDestroy"),
                        e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || b(t.$children, e),
                        e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--; )
                            e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--,
                        e._isDestroyed = !0,
                        e.__patch__(e._vnode, null),
                        en(e, "destroyed"),
                        e.$off(),
                        e.$el && (e.$el.__vue__ = null),
                        e.$vnode && (e.$vnode.parent = null)
                    }
                }
            }(_n),
            function(e) {
                Lt(e.prototype),
                e.prototype.$nextTick = function(e) {
                    return nt(e, this)
                }
                ,
                e.prototype._render = function() {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = vt(o.data.scopedSlots, t.$slots, t.$scopedSlots)),
                    t.$vnode = o;
                    try {
                        Ut = t,
                        e = r.call(t._renderProxy, t.$createElement)
                    } catch (n) {
                        Ue(n, t, "render"),
                        e = t._vnode
                    } finally {
                        Ut = null
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]),
                    e instanceof he || (e = ge()),
                    e.parent = o,
                    e
                }
            }(_n);
            var An = [String, RegExp, Array]
              , En = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: An,
                        exclude: An,
                        max: [String, Number]
                    },
                    methods: {
                        cacheVNode: function() {
                            var e = this.cache
                              , t = this.keys
                              , n = this.vnodeToCache
                              , r = this.keyToCache;
                            if (n) {
                                var o = n.tag
                                  , i = n.componentInstance
                                  , a = n.componentOptions;
                                e[r] = {
                                    name: kn(a),
                                    tag: o,
                                    componentInstance: i
                                },
                                t.push(r),
                                this.max && t.length > parseInt(this.max) && Cn(e, t[0], t, this._vnode),
                                this.vnodeToCache = null
                            }
                        }
                    },
                    created: function() {
                        this.cache = Object.create(null),
                        this.keys = []
                    },
                    destroyed: function() {
                        for (var e in this.cache)
                            Cn(this.cache, e, this.keys)
                    },
                    mounted: function() {
                        var e = this;
                        this.cacheVNode(),
                        this.$watch("include", (function(t) {
                            Sn(e, (function(e) {
                                return zn(t, e)
                            }
                            ))
                        }
                        )),
                        this.$watch("exclude", (function(t) {
                            Sn(e, (function(e) {
                                return !zn(t, e)
                            }
                            ))
                        }
                        ))
                    },
                    updated: function() {
                        this.cacheVNode()
                    },
                    render: function() {
                        var e = this.$slots.default
                          , t = Vt(e)
                          , n = t && t.componentOptions;
                        if (n) {
                            var r = kn(n)
                              , o = this.include
                              , i = this.exclude;
                            if (o && (!r || !zn(o, r)) || i && r && zn(i, r))
                                return t;
                            var a = this.cache
                              , s = this.keys
                              , l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            a[l] ? (t.componentInstance = a[l].componentInstance,
                            b(s, l),
                            s.push(l)) : (this.vnodeToCache = t,
                            this.keyToCache = l),
                            t.data.keepAlive = !0
                        }
                        return t || e && e[0]
                    }
                }
            };
            !function(e) {
                var t = {
                    get: function() {
                        return R
                    }
                };
                Object.defineProperty(e, "config", t),
                e.util = {
                    warn: ce,
                    extend: E,
                    mergeOptions: je,
                    defineReactive: Ce
                },
                e.set = Ae,
                e.delete = Ee,
                e.nextTick = nt,
                e.observable = function(e) {
                    return Se(e),
                    e
                }
                ,
                e.options = Object.create(null),
                B.forEach((function(t) {
                    e.options[t + "s"] = Object.create(null)
                }
                )),
                e.options._base = e,
                E(e.options.components, En),
                function(e) {
                    e.use = function(e) {
                        var t = this._installedPlugins || (this._installedPlugins = []);
                        if (t.indexOf(e) > -1)
                            return this;
                        var n = A(arguments, 1);
                        return n.unshift(this),
                        "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n),
                        t.push(e),
                        this
                    }
                }(e),
                function(e) {
                    e.mixin = function(e) {
                        return this.options = je(this.options, e),
                        this
                    }
                }(e),
                function(e) {
                    e.cid = 0;
                    var t = 1;
                    e.extend = function(e) {
                        e = e || {};
                        var n = this
                          , r = n.cid
                          , o = e._Ctor || (e._Ctor = {});
                        if (o[r])
                            return o[r];
                        var i = e.name || n.options.name
                          , a = function(e) {
                            this._init(e)
                        };
                        return (a.prototype = Object.create(n.prototype)).constructor = a,
                        a.cid = t++,
                        a.options = je(n.options, e),
                        a.super = n,
                        a.options.props && function(e) {
                            var t = e.options.props;
                            for (var n in t)
                                hn(e.prototype, "_props", n)
                        }(a),
                        a.options.computed && function(e) {
                            var t = e.options.computed;
                            for (var n in t)
                                gn(e.prototype, n, t[n])
                        }(a),
                        a.extend = n.extend,
                        a.mixin = n.mixin,
                        a.use = n.use,
                        B.forEach((function(e) {
                            a[e] = n[e]
                        }
                        )),
                        i && (a.options.components[i] = a),
                        a.superOptions = n.options,
                        a.extendOptions = e,
                        a.sealedOptions = E({}, a.options),
                        o[r] = a,
                        a
                    }
                }(e),
                function(e) {
                    B.forEach((function(t) {
                        e[t] = function(e, n) {
                            return n ? ("component" === t && u(n) && (n.name = n.name || e,
                            n = this.options._base.extend(n)),
                            "directive" === t && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }),
                            this.options[t + "s"][e] = n,
                            n) : this.options[t + "s"][e]
                        }
                    }
                    ))
                }(e)
            }(_n),
            Object.defineProperty(_n.prototype, "$isServer", {
                get: oe
            }),
            Object.defineProperty(_n.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }),
            Object.defineProperty(_n, "FunctionalRenderContext", {
                value: Mt
            }),
            _n.version = "2.6.14";
            var On = h("style,class")
              , Pn = h("input,textarea,option,select,progress")
              , $n = function(e, t, n) {
                return "value" === n && Pn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
            }
              , Ln = h("contenteditable,draggable,spellcheck")
              , Mn = h("events,caret,typing,plaintext-only")
              , Dn = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible")
              , jn = "http://www.w3.org/1999/xlink"
              , In = function(e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            }
              , Bn = function(e) {
                return In(e) ? e.slice(6, e.length) : ""
            }
              , Nn = function(e) {
                return null == e || !1 === e
            };
            function Rn(e, t) {
                return {
                    staticClass: Fn(e.staticClass, t.staticClass),
                    class: i(e.class) ? [e.class, t.class] : t.class
                }
            }
            function Fn(e, t) {
                return e ? t ? e + " " + t : e : t || ""
            }
            function qn(e) {
                return Array.isArray(e) ? function(e) {
                    for (var t, n = "", r = 0, o = e.length; r < o; r++)
                        i(t = qn(e[r])) && "" !== t && (n && (n += " "),
                        n += t);
                    return n
                }(e) : l(e) ? function(e) {
                    var t = "";
                    for (var n in e)
                        e[n] && (t && (t += " "),
                        t += n);
                    return t
                }(e) : "string" == typeof e ? e : ""
            }
            var Un = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            }
              , Hn = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot")
              , Vn = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0)
              , Gn = function(e) {
                return Hn(e) || Vn(e)
            };
            function Jn(e) {
                return Vn(e) ? "svg" : "math" === e ? "math" : void 0
            }
            var Wn = Object.create(null)
              , Kn = h("text,number,password,search,email,tel,url");
            function Qn(e) {
                return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e
            }
            var Zn = Object.freeze({
                createElement: function(e, t) {
                    var n = document.createElement(e);
                    return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
                    n
                },
                createElementNS: function(e, t) {
                    return document.createElementNS(Un[e], t)
                },
                createTextNode: function(e) {
                    return document.createTextNode(e)
                },
                createComment: function(e) {
                    return document.createComment(e)
                },
                insertBefore: function(e, t, n) {
                    e.insertBefore(t, n)
                },
                removeChild: function(e, t) {
                    e.removeChild(t)
                },
                appendChild: function(e, t) {
                    e.appendChild(t)
                },
                parentNode: function(e) {
                    return e.parentNode
                },
                nextSibling: function(e) {
                    return e.nextSibling
                },
                tagName: function(e) {
                    return e.tagName
                },
                setTextContent: function(e, t) {
                    e.textContent = t
                },
                setStyleScope: function(e, t) {
                    e.setAttribute(t, "")
                }
            })
              , Xn = {
                create: function(e, t) {
                    Yn(t)
                },
                update: function(e, t) {
                    e.data.ref !== t.data.ref && (Yn(e, !0),
                    Yn(t))
                },
                destroy: function(e) {
                    Yn(e, !0)
                }
            };
            function Yn(e, t) {
                var n = e.data.ref;
                if (i(n)) {
                    var r = e.context
                      , o = e.componentInstance || e.elm
                      , a = r.$refs;
                    t ? Array.isArray(a[n]) ? b(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o
                }
            }
            var er = new he("",{},[])
              , tr = ["create", "activate", "update", "remove", "destroy"];
            function nr(e, t) {
                return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && function(e, t) {
                    if ("input" !== e.tag)
                        return !0;
                    var n, r = i(n = e.data) && i(n = n.attrs) && n.type, o = i(n = t.data) && i(n = n.attrs) && n.type;
                    return r === o || Kn(r) && Kn(o)
                }(e, t) || a(e.isAsyncPlaceholder) && o(t.asyncFactory.error))
            }
            function rr(e, t, n) {
                var r, o, a = {};
                for (r = t; r <= n; ++r)
                    i(o = e[r].key) && (a[o] = r);
                return a
            }
            var or = {
                create: ir,
                update: ir,
                destroy: function(e) {
                    ir(e, er)
                }
            };
            function ir(e, t) {
                (e.data.directives || t.data.directives) && function(e, t) {
                    var n, r, o, i = e === er, a = t === er, s = sr(e.data.directives, e.context), l = sr(t.data.directives, t.context), c = [], u = [];
                    for (n in l)
                        r = s[n],
                        o = l[n],
                        r ? (o.oldValue = r.value,
                        o.oldArg = r.arg,
                        cr(o, "update", t, e),
                        o.def && o.def.componentUpdated && u.push(o)) : (cr(o, "bind", t, e),
                        o.def && o.def.inserted && c.push(o));
                    if (c.length) {
                        var d = function() {
                            for (var n = 0; n < c.length; n++)
                                cr(c[n], "inserted", t, e)
                        };
                        i ? lt(t, "insert", d) : d()
                    }
                    if (u.length && lt(t, "postpatch", (function() {
                        for (var n = 0; n < u.length; n++)
                            cr(u[n], "componentUpdated", t, e)
                    }
                    )),
                    !i)
                        for (n in s)
                            l[n] || cr(s[n], "unbind", e, e, a)
                }(e, t)
            }
            var ar = Object.create(null);
            function sr(e, t) {
                var n, r, o = Object.create(null);
                if (!e)
                    return o;
                for (n = 0; n < e.length; n++)
                    (r = e[n]).modifiers || (r.modifiers = ar),
                    o[lr(r)] = r,
                    r.def = Ie(t.$options, "directives", r.name);
                return o
            }
            function lr(e) {
                return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
            }
            function cr(e, t, n, r, o) {
                var i = e.def && e.def[t];
                if (i)
                    try {
                        i(n.elm, e, n, r, o)
                    } catch (r) {
                        Ue(r, n.context, "directive " + e.name + " " + t + " hook")
                    }
            }
            var ur = [Xn, or];
            function dr(e, t) {
                var n = t.componentOptions;
                if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
                    var r, a, s = t.elm, l = e.data.attrs || {}, c = t.data.attrs || {};
                    for (r in i(c.__ob__) && (c = t.data.attrs = E({}, c)),
                    c)
                        a = c[r],
                        l[r] !== a && pr(s, r, a, t.data.pre);
                    for (r in (Q || X) && c.value !== l.value && pr(s, "value", c.value),
                    l)
                        o(c[r]) && (In(r) ? s.removeAttributeNS(jn, Bn(r)) : Ln(r) || s.removeAttribute(r))
                }
            }
            function pr(e, t, n, r) {
                r || e.tagName.indexOf("-") > -1 ? fr(e, t, n) : Dn(t) ? Nn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t,
                e.setAttribute(t, n)) : Ln(t) ? e.setAttribute(t, function(e, t) {
                    return Nn(t) || "false" === t ? "false" : "contenteditable" === e && Mn(t) ? t : "true"
                }(t, n)) : In(t) ? Nn(n) ? e.removeAttributeNS(jn, Bn(t)) : e.setAttributeNS(jn, t, n) : fr(e, t, n)
            }
            function fr(e, t, n) {
                if (Nn(n))
                    e.removeAttribute(t);
                else {
                    if (Q && !Z && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                        var r = function(t) {
                            t.stopImmediatePropagation(),
                            e.removeEventListener("input", r)
                        };
                        e.addEventListener("input", r),
                        e.__ieph = !0
                    }
                    e.setAttribute(t, n)
                }
            }
            var mr = {
                create: dr,
                update: dr
            };
            function hr(e, t) {
                var n = t.elm
                  , r = t.data
                  , a = e.data;
                if (!(o(r.staticClass) && o(r.class) && (o(a) || o(a.staticClass) && o(a.class)))) {
                    var s = function(e) {
                        for (var t = e.data, n = e, r = e; i(r.componentInstance); )
                            (r = r.componentInstance._vnode) && r.data && (t = Rn(r.data, t));
                        for (; i(n = n.parent); )
                            n && n.data && (t = Rn(t, n.data));
                        return function(e, t) {
                            return i(e) || i(t) ? Fn(e, qn(t)) : ""
                        }(t.staticClass, t.class)
                    }(t)
                      , l = n._transitionClasses;
                    i(l) && (s = Fn(s, qn(l))),
                    s !== n._prevClass && (n.setAttribute("class", s),
                    n._prevClass = s)
                }
            }
            var vr, gr, br, yr, wr, xr, Tr = {
                create: hr,
                update: hr
            }, _r = /[\w).+\-_$\]]/;
            function kr(e) {
                var t, n, r, o, i, a = !1, s = !1, l = !1, c = !1, u = 0, d = 0, p = 0, f = 0;
                for (r = 0; r < e.length; r++)
                    if (n = t,
                    t = e.charCodeAt(r),
                    a)
                        39 === t && 92 !== n && (a = !1);
                    else if (s)
                        34 === t && 92 !== n && (s = !1);
                    else if (l)
                        96 === t && 92 !== n && (l = !1);
                    else if (c)
                        47 === t && 92 !== n && (c = !1);
                    else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || d || p) {
                        switch (t) {
                        case 34:
                            s = !0;
                            break;
                        case 39:
                            a = !0;
                            break;
                        case 96:
                            l = !0;
                            break;
                        case 40:
                            p++;
                            break;
                        case 41:
                            p--;
                            break;
                        case 91:
                            d++;
                            break;
                        case 93:
                            d--;
                            break;
                        case 123:
                            u++;
                            break;
                        case 125:
                            u--
                        }
                        if (47 === t) {
                            for (var m = r - 1, h = void 0; m >= 0 && " " === (h = e.charAt(m)); m--)
                                ;
                            h && _r.test(h) || (c = !0)
                        }
                    } else
                        void 0 === o ? (f = r + 1,
                        o = e.slice(0, r).trim()) : v();
                function v() {
                    (i || (i = [])).push(e.slice(f, r).trim()),
                    f = r + 1
                }
                if (void 0 === o ? o = e.slice(0, r).trim() : 0 !== f && v(),
                i)
                    for (r = 0; r < i.length; r++)
                        o = zr(o, i[r]);
                return o
            }
            function zr(e, t) {
                var n = t.indexOf("(");
                if (n < 0)
                    return '_f("' + t + '")(' + e + ")";
                var r = t.slice(0, n)
                  , o = t.slice(n + 1);
                return '_f("' + r + '")(' + e + (")" !== o ? "," + o : o)
            }
            function Sr(e, t) {
                console.error("[Vue compiler]: " + e)
            }
            function Cr(e, t) {
                return e ? e.map((function(e) {
                    return e[t]
                }
                )).filter((function(e) {
                    return e
                }
                )) : []
            }
            function Ar(e, t, n, r, o) {
                (e.props || (e.props = [])).push(Ir({
                    name: t,
                    value: n,
                    dynamic: o
                }, r)),
                e.plain = !1
            }
            function Er(e, t, n, r, o) {
                (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Ir({
                    name: t,
                    value: n,
                    dynamic: o
                }, r)),
                e.plain = !1
            }
            function Or(e, t, n, r) {
                e.attrsMap[t] = n,
                e.attrsList.push(Ir({
                    name: t,
                    value: n
                }, r))
            }
            function Pr(e, t, n, r, o, i, a, s) {
                (e.directives || (e.directives = [])).push(Ir({
                    name: t,
                    rawName: n,
                    value: r,
                    arg: o,
                    isDynamicArg: i,
                    modifiers: a
                }, s)),
                e.plain = !1
            }
            function $r(e, t, n) {
                return n ? "_p(" + t + ',"' + e + '")' : e + t
            }
            function Lr(e, t, n, o, i, a, s, l) {
                var c;
                (o = o || r).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu",
                delete o.right) : o.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")),
                o.capture && (delete o.capture,
                t = $r("!", t, l)),
                o.once && (delete o.once,
                t = $r("~", t, l)),
                o.passive && (delete o.passive,
                t = $r("&", t, l)),
                o.native ? (delete o.native,
                c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
                var u = Ir({
                    value: n.trim(),
                    dynamic: l
                }, s);
                o !== r && (u.modifiers = o);
                var d = c[t];
                Array.isArray(d) ? i ? d.unshift(u) : d.push(u) : c[t] = d ? i ? [u, d] : [d, u] : u,
                e.plain = !1
            }
            function Mr(e, t, n) {
                var r = Dr(e, ":" + t) || Dr(e, "v-bind:" + t);
                if (null != r)
                    return kr(r);
                if (!1 !== n) {
                    var o = Dr(e, t);
                    if (null != o)
                        return JSON.stringify(o)
                }
            }
            function Dr(e, t, n) {
                var r;
                if (null != (r = e.attrsMap[t]))
                    for (var o = e.attrsList, i = 0, a = o.length; i < a; i++)
                        if (o[i].name === t) {
                            o.splice(i, 1);
                            break
                        }
                return n && delete e.attrsMap[t],
                r
            }
            function jr(e, t) {
                for (var n = e.attrsList, r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    if (t.test(i.name))
                        return n.splice(r, 1),
                        i
                }
            }
            function Ir(e, t) {
                return t && (null != t.start && (e.start = t.start),
                null != t.end && (e.end = t.end)),
                e
            }
            function Br(e, t, n) {
                var r = n || {}
                  , o = r.number
                  , i = "$$v";
                r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
                o && (i = "_n(" + i + ")");
                var a = Nr(t, i);
                e.model = {
                    value: "(" + t + ")",
                    expression: JSON.stringify(t),
                    callback: "function ($$v) {" + a + "}"
                }
            }
            function Nr(e, t) {
                var n = function(e) {
                    if (e = e.trim(),
                    vr = e.length,
                    e.indexOf("[") < 0 || e.lastIndexOf("]") < vr - 1)
                        return (yr = e.lastIndexOf(".")) > -1 ? {
                            exp: e.slice(0, yr),
                            key: '"' + e.slice(yr + 1) + '"'
                        } : {
                            exp: e,
                            key: null
                        };
                    for (gr = e,
                    yr = wr = xr = 0; !Fr(); )
                        qr(br = Rr()) ? Hr(br) : 91 === br && Ur(br);
                    return {
                        exp: e.slice(0, wr),
                        key: e.slice(wr + 1, xr)
                    }
                }(e);
                return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
            }
            function Rr() {
                return gr.charCodeAt(++yr)
            }
            function Fr() {
                return yr >= vr
            }
            function qr(e) {
                return 34 === e || 39 === e
            }
            function Ur(e) {
                var t = 1;
                for (wr = yr; !Fr(); )
                    if (qr(e = Rr()))
                        Hr(e);
                    else if (91 === e && t++,
                    93 === e && t--,
                    0 === t) {
                        xr = yr;
                        break
                    }
            }
            function Hr(e) {
                for (var t = e; !Fr() && (e = Rr()) !== t; )
                    ;
            }
            var Vr, Gr = "__r";
            function Jr(e, t, n) {
                var r = Vr;
                return function o() {
                    null !== t.apply(null, arguments) && Qr(e, o, n, r)
                }
            }
            var Wr = We && !(ee && Number(ee[1]) <= 53);
            function Kr(e, t, n, r) {
                if (Wr) {
                    var o = ln
                      , i = t;
                    t = i._wrapper = function(e) {
                        if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document)
                            return i.apply(this, arguments)
                    }
                }
                Vr.addEventListener(e, t, ne ? {
                    capture: n,
                    passive: r
                } : n)
            }
            function Qr(e, t, n, r) {
                (r || Vr).removeEventListener(e, t._wrapper || t, n)
            }
            function Zr(e, t) {
                if (!o(e.data.on) || !o(t.data.on)) {
                    var n = t.data.on || {}
                      , r = e.data.on || {};
                    Vr = t.elm,
                    function(e) {
                        if (i(e.__r)) {
                            var t = Q ? "change" : "input";
                            e[t] = [].concat(e.__r, e[t] || []),
                            delete e.__r
                        }
                        i(e.__c) && (e.change = [].concat(e.__c, e.change || []),
                        delete e.__c)
                    }(n),
                    st(n, r, Kr, Qr, Jr, t.context),
                    Vr = void 0
                }
            }
            var Xr, Yr = {
                create: Zr,
                update: Zr
            };
            function eo(e, t) {
                if (!o(e.data.domProps) || !o(t.data.domProps)) {
                    var n, r, a = t.elm, s = e.data.domProps || {}, l = t.data.domProps || {};
                    for (n in i(l.__ob__) && (l = t.data.domProps = E({}, l)),
                    s)
                        n in l || (a[n] = "");
                    for (n in l) {
                        if (r = l[n],
                        "textContent" === n || "innerHTML" === n) {
                            if (t.children && (t.children.length = 0),
                            r === s[n])
                                continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                        }
                        if ("value" === n && "PROGRESS" !== a.tagName) {
                            a._value = r;
                            var c = o(r) ? "" : String(r);
                            to(a, c) && (a.value = c)
                        } else if ("innerHTML" === n && Vn(a.tagName) && o(a.innerHTML)) {
                            (Xr = Xr || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                            for (var u = Xr.firstChild; a.firstChild; )
                                a.removeChild(a.firstChild);
                            for (; u.firstChild; )
                                a.appendChild(u.firstChild)
                        } else if (r !== s[n])
                            try {
                                a[n] = r
                            } catch (e) {}
                    }
                }
            }
            function to(e, t) {
                return !e.composing && ("OPTION" === e.tagName || function(e, t) {
                    var n = !0;
                    try {
                        n = document.activeElement !== e
                    } catch (e) {}
                    return n && e.value !== t
                }(e, t) || function(e, t) {
                    var n = e.value
                      , r = e._vModifiers;
                    if (i(r)) {
                        if (r.number)
                            return m(n) !== m(t);
                        if (r.trim)
                            return n.trim() !== t.trim()
                    }
                    return n !== t
                }(e, t))
            }
            var no = {
                create: eo,
                update: eo
            }
              , ro = x((function(e) {
                var t = {}
                  , n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim())
                    }
                }
                )),
                t
            }
            ));
            function oo(e) {
                var t = io(e.style);
                return e.staticStyle ? E(e.staticStyle, t) : t
            }
            function io(e) {
                return Array.isArray(e) ? O(e) : "string" == typeof e ? ro(e) : e
            }
            var ao, so = /^--/, lo = /\s*!important$/, co = function(e, t, n) {
                if (so.test(t))
                    e.style.setProperty(t, n);
                else if (lo.test(n))
                    e.style.setProperty(S(t), n.replace(lo, ""), "important");
                else {
                    var r = po(t);
                    if (Array.isArray(n))
                        for (var o = 0, i = n.length; o < i; o++)
                            e.style[r] = n[o];
                    else
                        e.style[r] = n
                }
            }, uo = ["Webkit", "Moz", "ms"], po = x((function(e) {
                if (ao = ao || document.createElement("div").style,
                "filter" !== (e = _(e)) && e in ao)
                    return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < uo.length; n++) {
                    var r = uo[n] + t;
                    if (r in ao)
                        return r
                }
            }
            ));
            function fo(e, t) {
                var n = t.data
                  , r = e.data;
                if (!(o(n.staticStyle) && o(n.style) && o(r.staticStyle) && o(r.style))) {
                    var a, s, l = t.elm, c = r.staticStyle, u = r.normalizedStyle || r.style || {}, d = c || u, p = io(t.data.style) || {};
                    t.data.normalizedStyle = i(p.__ob__) ? E({}, p) : p;
                    var f = function(e, t) {
                        for (var n, r = {}, o = e; o.componentInstance; )
                            (o = o.componentInstance._vnode) && o.data && (n = oo(o.data)) && E(r, n);
                        (n = oo(e.data)) && E(r, n);
                        for (var i = e; i = i.parent; )
                            i.data && (n = oo(i.data)) && E(r, n);
                        return r
                    }(t);
                    for (s in d)
                        o(f[s]) && co(l, s, "");
                    for (s in f)
                        (a = f[s]) !== d[s] && co(l, s, null == a ? "" : a)
                }
            }
            var mo = {
                create: fo,
                update: fo
            }
              , ho = /\s+/;
            function vo(e, t) {
                if (t && (t = t.trim()))
                    if (e.classList)
                        t.indexOf(" ") > -1 ? t.split(ho).forEach((function(t) {
                            return e.classList.add(t)
                        }
                        )) : e.classList.add(t);
                    else {
                        var n = " " + (e.getAttribute("class") || "") + " ";
                        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                    }
            }
            function go(e, t) {
                if (t && (t = t.trim()))
                    if (e.classList)
                        t.indexOf(" ") > -1 ? t.split(ho).forEach((function(t) {
                            return e.classList.remove(t)
                        }
                        )) : e.classList.remove(t),
                        e.classList.length || e.removeAttribute("class");
                    else {
                        for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0; )
                            n = n.replace(r, " ");
                        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
                    }
            }
            function bo(e) {
                if (e) {
                    if ("object" == typeof e) {
                        var t = {};
                        return !1 !== e.css && E(t, yo(e.name || "v")),
                        E(t, e),
                        t
                    }
                    return "string" == typeof e ? yo(e) : void 0
                }
            }
            var yo = x((function(e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }
            ))
              , wo = G && !Z
              , xo = "transition"
              , To = "animation"
              , _o = "transition"
              , ko = "transitionend"
              , zo = "animation"
              , So = "animationend";
            wo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (_o = "WebkitTransition",
            ko = "webkitTransitionEnd"),
            void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (zo = "WebkitAnimation",
            So = "webkitAnimationEnd"));
            var Co = G ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
                return e()
            }
            ;
            function Ao(e) {
                Co((function() {
                    Co(e)
                }
                ))
            }
            function Eo(e, t) {
                var n = e._transitionClasses || (e._transitionClasses = []);
                n.indexOf(t) < 0 && (n.push(t),
                vo(e, t))
            }
            function Oo(e, t) {
                e._transitionClasses && b(e._transitionClasses, t),
                go(e, t)
            }
            function Po(e, t, n) {
                var r = Lo(e, t)
                  , o = r.type
                  , i = r.timeout
                  , a = r.propCount;
                if (!o)
                    return n();
                var s = o === xo ? ko : So
                  , l = 0
                  , c = function() {
                    e.removeEventListener(s, u),
                    n()
                }
                  , u = function(t) {
                    t.target === e && ++l >= a && c()
                };
                setTimeout((function() {
                    l < a && c()
                }
                ), i + 1),
                e.addEventListener(s, u)
            }
            var $o = /\b(transform|all)(,|$)/;
            function Lo(e, t) {
                var n, r = window.getComputedStyle(e), o = (r[_o + "Delay"] || "").split(", "), i = (r[_o + "Duration"] || "").split(", "), a = Mo(o, i), s = (r[zo + "Delay"] || "").split(", "), l = (r[zo + "Duration"] || "").split(", "), c = Mo(s, l), u = 0, d = 0;
                return t === xo ? a > 0 && (n = xo,
                u = a,
                d = i.length) : t === To ? c > 0 && (n = To,
                u = c,
                d = l.length) : d = (n = (u = Math.max(a, c)) > 0 ? a > c ? xo : To : null) ? n === xo ? i.length : l.length : 0,
                {
                    type: n,
                    timeout: u,
                    propCount: d,
                    hasTransform: n === xo && $o.test(r[_o + "Property"])
                }
            }
            function Mo(e, t) {
                for (; e.length < t.length; )
                    e = e.concat(e);
                return Math.max.apply(null, t.map((function(t, n) {
                    return Do(t) + Do(e[n])
                }
                )))
            }
            function Do(e) {
                return 1e3 * Number(e.slice(0, -1).replace(",", "."))
            }
            function jo(e, t) {
                var n = e.elm;
                i(n._leaveCb) && (n._leaveCb.cancelled = !0,
                n._leaveCb());
                var r = bo(e.data.transition);
                if (!o(r) && !i(n._enterCb) && 1 === n.nodeType) {
                    for (var a = r.css, s = r.type, c = r.enterClass, u = r.enterToClass, d = r.enterActiveClass, p = r.appearClass, f = r.appearToClass, h = r.appearActiveClass, v = r.beforeEnter, g = r.enter, b = r.afterEnter, y = r.enterCancelled, w = r.beforeAppear, x = r.appear, T = r.afterAppear, _ = r.appearCancelled, k = r.duration, z = Qt, S = Qt.$vnode; S && S.parent; )
                        z = S.context,
                        S = S.parent;
                    var C = !z._isMounted || !e.isRootInsert;
                    if (!C || x || "" === x) {
                        var A = C && p ? p : c
                          , E = C && h ? h : d
                          , O = C && f ? f : u
                          , P = C && w || v
                          , $ = C && "function" == typeof x ? x : g
                          , L = C && T || b
                          , M = C && _ || y
                          , D = m(l(k) ? k.enter : k)
                          , I = !1 !== a && !Z
                          , B = No($)
                          , N = n._enterCb = j((function() {
                            I && (Oo(n, O),
                            Oo(n, E)),
                            N.cancelled ? (I && Oo(n, A),
                            M && M(n)) : L && L(n),
                            n._enterCb = null
                        }
                        ));
                        e.data.show || lt(e, "insert", (function() {
                            var t = n.parentNode
                              , r = t && t._pending && t._pending[e.key];
                            r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(),
                            $ && $(n, N)
                        }
                        )),
                        P && P(n),
                        I && (Eo(n, A),
                        Eo(n, E),
                        Ao((function() {
                            Oo(n, A),
                            N.cancelled || (Eo(n, O),
                            B || (Bo(D) ? setTimeout(N, D) : Po(n, s, N)))
                        }
                        ))),
                        e.data.show && (t && t(),
                        $ && $(n, N)),
                        I || B || N()
                    }
                }
            }
            function Io(e, t) {
                var n = e.elm;
                i(n._enterCb) && (n._enterCb.cancelled = !0,
                n._enterCb());
                var r = bo(e.data.transition);
                if (o(r) || 1 !== n.nodeType)
                    return t();
                if (!i(n._leaveCb)) {
                    var a = r.css
                      , s = r.type
                      , c = r.leaveClass
                      , u = r.leaveToClass
                      , d = r.leaveActiveClass
                      , p = r.beforeLeave
                      , f = r.leave
                      , h = r.afterLeave
                      , v = r.leaveCancelled
                      , g = r.delayLeave
                      , b = r.duration
                      , y = !1 !== a && !Z
                      , w = No(f)
                      , x = m(l(b) ? b.leave : b)
                      , T = n._leaveCb = j((function() {
                        n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null),
                        y && (Oo(n, u),
                        Oo(n, d)),
                        T.cancelled ? (y && Oo(n, c),
                        v && v(n)) : (t(),
                        h && h(n)),
                        n._leaveCb = null
                    }
                    ));
                    g ? g(_) : _()
                }
                function _() {
                    T.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e),
                    p && p(n),
                    y && (Eo(n, c),
                    Eo(n, d),
                    Ao((function() {
                        Oo(n, c),
                        T.cancelled || (Eo(n, u),
                        w || (Bo(x) ? setTimeout(T, x) : Po(n, s, T)))
                    }
                    ))),
                    f && f(n, T),
                    y || w || T())
                }
            }
            function Bo(e) {
                return "number" == typeof e && !isNaN(e)
            }
            function No(e) {
                if (o(e))
                    return !1;
                var t = e.fns;
                return i(t) ? No(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
            }
            function Ro(e, t) {
                !0 !== t.data.show && jo(t)
            }
            var Fo = function(e) {
                var t, n, r = {}, l = e.modules, c = e.nodeOps;
                for (t = 0; t < tr.length; ++t)
                    for (r[tr[t]] = [],
                    n = 0; n < l.length; ++n)
                        i(l[n][tr[t]]) && r[tr[t]].push(l[n][tr[t]]);
                function u(e) {
                    var t = c.parentNode(e);
                    i(t) && c.removeChild(t, e)
                }
                function d(e, t, n, o, s, l, u) {
                    if (i(e.elm) && i(l) && (e = l[u] = ye(e)),
                    e.isRootInsert = !s,
                    !function(e, t, n, o) {
                        var s = e.data;
                        if (i(s)) {
                            var l = i(e.componentInstance) && s.keepAlive;
                            if (i(s = s.hook) && i(s = s.init) && s(e, !1),
                            i(e.componentInstance))
                                return p(e, t),
                                f(n, e.elm, o),
                                a(l) && function(e, t, n, o) {
                                    for (var a, s = e; s.componentInstance; )
                                        if (i(a = (s = s.componentInstance._vnode).data) && i(a = a.transition)) {
                                            for (a = 0; a < r.activate.length; ++a)
                                                r.activate[a](er, s);
                                            t.push(s);
                                            break
                                        }
                                    f(n, e.elm, o)
                                }(e, t, n, o),
                                !0
                        }
                    }(e, t, n, o)) {
                        var d = e.data
                          , h = e.children
                          , v = e.tag;
                        i(v) ? (e.elm = e.ns ? c.createElementNS(e.ns, v) : c.createElement(v, e),
                        b(e),
                        m(e, h, t),
                        i(d) && g(e, t),
                        f(n, e.elm, o)) : a(e.isComment) ? (e.elm = c.createComment(e.text),
                        f(n, e.elm, o)) : (e.elm = c.createTextNode(e.text),
                        f(n, e.elm, o))
                    }
                }
                function p(e, t) {
                    i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert),
                    e.data.pendingInsert = null),
                    e.elm = e.componentInstance.$el,
                    v(e) ? (g(e, t),
                    b(e)) : (Yn(e),
                    t.push(e))
                }
                function f(e, t, n) {
                    i(e) && (i(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t))
                }
                function m(e, t, n) {
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; ++r)
                            d(t[r], n, e.elm, null, !0, t, r);
                    else
                        s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)))
                }
                function v(e) {
                    for (; e.componentInstance; )
                        e = e.componentInstance._vnode;
                    return i(e.tag)
                }
                function g(e, n) {
                    for (var o = 0; o < r.create.length; ++o)
                        r.create[o](er, e);
                    i(t = e.data.hook) && (i(t.create) && t.create(er, e),
                    i(t.insert) && n.push(e))
                }
                function b(e) {
                    var t;
                    if (i(t = e.fnScopeId))
                        c.setStyleScope(e.elm, t);
                    else
                        for (var n = e; n; )
                            i(t = n.context) && i(t = t.$options._scopeId) && c.setStyleScope(e.elm, t),
                            n = n.parent;
                    i(t = Qt) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && c.setStyleScope(e.elm, t)
                }
                function y(e, t, n, r, o, i) {
                    for (; r <= o; ++r)
                        d(n[r], i, e, t, !1, n, r)
                }
                function w(e) {
                    var t, n, o = e.data;
                    if (i(o))
                        for (i(t = o.hook) && i(t = t.destroy) && t(e),
                        t = 0; t < r.destroy.length; ++t)
                            r.destroy[t](e);
                    if (i(t = e.children))
                        for (n = 0; n < e.children.length; ++n)
                            w(e.children[n])
                }
                function x(e, t, n) {
                    for (; t <= n; ++t) {
                        var r = e[t];
                        i(r) && (i(r.tag) ? (T(r),
                        w(r)) : u(r.elm))
                    }
                }
                function T(e, t) {
                    if (i(t) || i(e.data)) {
                        var n, o = r.remove.length + 1;
                        for (i(t) ? t.listeners += o : t = function(e, t) {
                            function n() {
                                0 == --n.listeners && u(e)
                            }
                            return n.listeners = t,
                            n
                        }(e.elm, o),
                        i(n = e.componentInstance) && i(n = n._vnode) && i(n.data) && T(n, t),
                        n = 0; n < r.remove.length; ++n)
                            r.remove[n](e, t);
                        i(n = e.data.hook) && i(n = n.remove) ? n(e, t) : t()
                    } else
                        u(e.elm)
                }
                function _(e, t, n, r) {
                    for (var o = n; o < r; o++) {
                        var a = t[o];
                        if (i(a) && nr(e, a))
                            return o
                    }
                }
                function k(e, t, n, s, l, u) {
                    if (e !== t) {
                        i(t.elm) && i(s) && (t = s[l] = ye(t));
                        var p = t.elm = e.elm;
                        if (a(e.isAsyncPlaceholder))
                            i(t.asyncFactory.resolved) ? C(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                        else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce)))
                            t.componentInstance = e.componentInstance;
                        else {
                            var f, m = t.data;
                            i(m) && i(f = m.hook) && i(f = f.prepatch) && f(e, t);
                            var h = e.children
                              , g = t.children;
                            if (i(m) && v(t)) {
                                for (f = 0; f < r.update.length; ++f)
                                    r.update[f](e, t);
                                i(f = m.hook) && i(f = f.update) && f(e, t)
                            }
                            o(t.text) ? i(h) && i(g) ? h !== g && function(e, t, n, r, a) {
                                for (var s, l, u, p = 0, f = 0, m = t.length - 1, h = t[0], v = t[m], g = n.length - 1, b = n[0], w = n[g], T = !a; p <= m && f <= g; )
                                    o(h) ? h = t[++p] : o(v) ? v = t[--m] : nr(h, b) ? (k(h, b, r, n, f),
                                    h = t[++p],
                                    b = n[++f]) : nr(v, w) ? (k(v, w, r, n, g),
                                    v = t[--m],
                                    w = n[--g]) : nr(h, w) ? (k(h, w, r, n, g),
                                    T && c.insertBefore(e, h.elm, c.nextSibling(v.elm)),
                                    h = t[++p],
                                    w = n[--g]) : nr(v, b) ? (k(v, b, r, n, f),
                                    T && c.insertBefore(e, v.elm, h.elm),
                                    v = t[--m],
                                    b = n[++f]) : (o(s) && (s = rr(t, p, m)),
                                    o(l = i(b.key) ? s[b.key] : _(b, t, p, m)) ? d(b, r, e, h.elm, !1, n, f) : nr(u = t[l], b) ? (k(u, b, r, n, f),
                                    t[l] = void 0,
                                    T && c.insertBefore(e, u.elm, h.elm)) : d(b, r, e, h.elm, !1, n, f),
                                    b = n[++f]);
                                p > m ? y(e, o(n[g + 1]) ? null : n[g + 1].elm, n, f, g, r) : f > g && x(t, p, m)
                            }(p, h, g, n, u) : i(g) ? (i(e.text) && c.setTextContent(p, ""),
                            y(p, null, g, 0, g.length - 1, n)) : i(h) ? x(h, 0, h.length - 1) : i(e.text) && c.setTextContent(p, "") : e.text !== t.text && c.setTextContent(p, t.text),
                            i(m) && i(f = m.hook) && i(f = f.postpatch) && f(e, t)
                        }
                    }
                }
                function z(e, t, n) {
                    if (a(n) && i(e.parent))
                        e.parent.data.pendingInsert = t;
                    else
                        for (var r = 0; r < t.length; ++r)
                            t[r].data.hook.insert(t[r])
                }
                var S = h("attrs,class,staticClass,staticStyle,key");
                function C(e, t, n, r) {
                    var o, s = t.tag, l = t.data, c = t.children;
                    if (r = r || l && l.pre,
                    t.elm = e,
                    a(t.isComment) && i(t.asyncFactory))
                        return t.isAsyncPlaceholder = !0,
                        !0;
                    if (i(l) && (i(o = l.hook) && i(o = o.init) && o(t, !0),
                    i(o = t.componentInstance)))
                        return p(t, n),
                        !0;
                    if (i(s)) {
                        if (i(c))
                            if (e.hasChildNodes())
                                if (i(o = l) && i(o = o.domProps) && i(o = o.innerHTML)) {
                                    if (o !== e.innerHTML)
                                        return !1
                                } else {
                                    for (var u = !0, d = e.firstChild, f = 0; f < c.length; f++) {
                                        if (!d || !C(d, c[f], n, r)) {
                                            u = !1;
                                            break
                                        }
                                        d = d.nextSibling
                                    }
                                    if (!u || d)
                                        return !1
                                }
                            else
                                m(t, c, n);
                        if (i(l)) {
                            var h = !1;
                            for (var v in l)
                                if (!S(v)) {
                                    h = !0,
                                    g(t, n);
                                    break
                                }
                            !h && l.class && ot(l.class)
                        }
                    } else
                        e.data !== t.text && (e.data = t.text);
                    return !0
                }
                return function(e, t, n, s) {
                    if (!o(t)) {
                        var l, u = !1, p = [];
                        if (o(e))
                            u = !0,
                            d(t, p);
                        else {
                            var f = i(e.nodeType);
                            if (!f && nr(e, t))
                                k(e, t, p, null, null, s);
                            else {
                                if (f) {
                                    if (1 === e.nodeType && e.hasAttribute(I) && (e.removeAttribute(I),
                                    n = !0),
                                    a(n) && C(e, t, p))
                                        return z(t, p, !0),
                                        e;
                                    l = e,
                                    e = new he(c.tagName(l).toLowerCase(),{},[],void 0,l)
                                }
                                var m = e.elm
                                  , h = c.parentNode(m);
                                if (d(t, p, m._leaveCb ? null : h, c.nextSibling(m)),
                                i(t.parent))
                                    for (var g = t.parent, b = v(t); g; ) {
                                        for (var y = 0; y < r.destroy.length; ++y)
                                            r.destroy[y](g);
                                        if (g.elm = t.elm,
                                        b) {
                                            for (var T = 0; T < r.create.length; ++T)
                                                r.create[T](er, g);
                                            var _ = g.data.hook.insert;
                                            if (_.merged)
                                                for (var S = 1; S < _.fns.length; S++)
                                                    _.fns[S]()
                                        } else
                                            Yn(g);
                                        g = g.parent
                                    }
                                i(h) ? x([e], 0, 0) : i(e.tag) && w(e)
                            }
                        }
                        return z(t, p, u),
                        t.elm
                    }
                    i(e) && w(e)
                }
            }({
                nodeOps: Zn,
                modules: [mr, Tr, Yr, no, mo, G ? {
                    create: Ro,
                    activate: Ro,
                    remove: function(e, t) {
                        !0 !== e.data.show ? Io(e, t) : t()
                    }
                } : {}].concat(ur)
            });
            Z && document.addEventListener("selectionchange", (function() {
                var e = document.activeElement;
                e && e.vmodel && Ko(e, "input")
            }
            ));
            var qo = {
                inserted: function(e, t, n, r) {
                    "select" === n.tag ? (r.elm && !r.elm._vOptions ? lt(n, "postpatch", (function() {
                        qo.componentUpdated(e, t, n)
                    }
                    )) : Uo(e, t, n.context),
                    e._vOptions = [].map.call(e.options, Go)) : ("textarea" === n.tag || Kn(e.type)) && (e._vModifiers = t.modifiers,
                    t.modifiers.lazy || (e.addEventListener("compositionstart", Jo),
                    e.addEventListener("compositionend", Wo),
                    e.addEventListener("change", Wo),
                    Z && (e.vmodel = !0)))
                },
                componentUpdated: function(e, t, n) {
                    if ("select" === n.tag) {
                        Uo(e, t, n.context);
                        var r = e._vOptions
                          , o = e._vOptions = [].map.call(e.options, Go);
                        o.some((function(e, t) {
                            return !M(e, r[t])
                        }
                        )) && (e.multiple ? t.value.some((function(e) {
                            return Vo(e, o)
                        }
                        )) : t.value !== t.oldValue && Vo(t.value, o)) && Ko(e, "change")
                    }
                }
            };
            function Uo(e, t, n) {
                Ho(e, t, n),
                (Q || X) && setTimeout((function() {
                    Ho(e, t, n)
                }
                ), 0)
            }
            function Ho(e, t, n) {
                var r = t.value
                  , o = e.multiple;
                if (!o || Array.isArray(r)) {
                    for (var i, a, s = 0, l = e.options.length; s < l; s++)
                        if (a = e.options[s],
                        o)
                            i = D(r, Go(a)) > -1,
                            a.selected !== i && (a.selected = i);
                        else if (M(Go(a), r))
                            return void (e.selectedIndex !== s && (e.selectedIndex = s));
                    o || (e.selectedIndex = -1)
                }
            }
            function Vo(e, t) {
                return t.every((function(t) {
                    return !M(t, e)
                }
                ))
            }
            function Go(e) {
                return "_value"in e ? e._value : e.value
            }
            function Jo(e) {
                e.target.composing = !0
            }
            function Wo(e) {
                e.target.composing && (e.target.composing = !1,
                Ko(e.target, "input"))
            }
            function Ko(e, t) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0),
                e.dispatchEvent(n)
            }
            function Qo(e) {
                return !e.componentInstance || e.data && e.data.transition ? e : Qo(e.componentInstance._vnode)
            }
            var Zo = {
                model: qo,
                show: {
                    bind: function(e, t, n) {
                        var r = t.value
                          , o = (n = Qo(n)).data && n.data.transition
                          , i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                        r && o ? (n.data.show = !0,
                        jo(n, (function() {
                            e.style.display = i
                        }
                        ))) : e.style.display = r ? i : "none"
                    },
                    update: function(e, t, n) {
                        var r = t.value;
                        !r != !t.oldValue && ((n = Qo(n)).data && n.data.transition ? (n.data.show = !0,
                        r ? jo(n, (function() {
                            e.style.display = e.__vOriginalDisplay
                        }
                        )) : Io(n, (function() {
                            e.style.display = "none"
                        }
                        ))) : e.style.display = r ? e.__vOriginalDisplay : "none")
                    },
                    unbind: function(e, t, n, r, o) {
                        o || (e.style.display = e.__vOriginalDisplay)
                    }
                }
            }
              , Xo = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };
            function Yo(e) {
                var t = e && e.componentOptions;
                return t && t.Ctor.options.abstract ? Yo(Vt(t.children)) : e
            }
            function ei(e) {
                var t = {}
                  , n = e.$options;
                for (var r in n.propsData)
                    t[r] = e[r];
                var o = n._parentListeners;
                for (var i in o)
                    t[_(i)] = o[i];
                return t
            }
            function ti(e, t) {
                if (/\d-keep-alive$/.test(t.tag))
                    return e("keep-alive", {
                        props: t.componentOptions.propsData
                    })
            }
            var ni = function(e) {
                return e.tag || ht(e)
            }
              , ri = function(e) {
                return "show" === e.name
            }
              , oi = {
                name: "transition",
                props: Xo,
                abstract: !0,
                render: function(e) {
                    var t = this
                      , n = this.$slots.default;
                    if (n && (n = n.filter(ni)).length) {
                        var r = this.mode
                          , o = n[0];
                        if (function(e) {
                            for (; e = e.parent; )
                                if (e.data.transition)
                                    return !0
                        }(this.$vnode))
                            return o;
                        var i = Yo(o);
                        if (!i)
                            return o;
                        if (this._leaving)
                            return ti(e, o);
                        var a = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : s(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                        var l = (i.data || (i.data = {})).transition = ei(this)
                          , c = this._vnode
                          , u = Yo(c);
                        if (i.data.directives && i.data.directives.some(ri) && (i.data.show = !0),
                        u && u.data && !function(e, t) {
                            return t.key === e.key && t.tag === e.tag
                        }(i, u) && !ht(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                            var d = u.data.transition = E({}, l);
                            if ("out-in" === r)
                                return this._leaving = !0,
                                lt(d, "afterLeave", (function() {
                                    t._leaving = !1,
                                    t.$forceUpdate()
                                }
                                )),
                                ti(e, o);
                            if ("in-out" === r) {
                                if (ht(i))
                                    return c;
                                var p, f = function() {
                                    p()
                                };
                                lt(l, "afterEnter", f),
                                lt(l, "enterCancelled", f),
                                lt(d, "delayLeave", (function(e) {
                                    p = e
                                }
                                ))
                            }
                        }
                        return o
                    }
                }
            }
              , ii = E({
                tag: String,
                moveClass: String
            }, Xo);
            function ai(e) {
                e.elm._moveCb && e.elm._moveCb(),
                e.elm._enterCb && e.elm._enterCb()
            }
            function si(e) {
                e.data.newPos = e.elm.getBoundingClientRect()
            }
            function li(e) {
                var t = e.data.pos
                  , n = e.data.newPos
                  , r = t.left - n.left
                  , o = t.top - n.top;
                if (r || o) {
                    e.data.moved = !0;
                    var i = e.elm.style;
                    i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)",
                    i.transitionDuration = "0s"
                }
            }
            delete ii.mode;
            var ci = {
                Transition: oi,
                TransitionGroup: {
                    props: ii,
                    beforeMount: function() {
                        var e = this
                          , t = this._update;
                        this._update = function(n, r) {
                            var o = Zt(e);
                            e.__patch__(e._vnode, e.kept, !1, !0),
                            e._vnode = e.kept,
                            o(),
                            t.call(e, n, r)
                        }
                    },
                    render: function(e) {
                        for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = ei(this), s = 0; s < o.length; s++) {
                            var l = o[s];
                            l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (i.push(l),
                            n[l.key] = l,
                            (l.data || (l.data = {})).transition = a)
                        }
                        if (r) {
                            for (var c = [], u = [], d = 0; d < r.length; d++) {
                                var p = r[d];
                                p.data.transition = a,
                                p.data.pos = p.elm.getBoundingClientRect(),
                                n[p.key] ? c.push(p) : u.push(p)
                            }
                            this.kept = e(t, null, c),
                            this.removed = u
                        }
                        return e(t, null, i)
                    },
                    updated: function() {
                        var e = this.prevChildren
                          , t = this.moveClass || (this.name || "v") + "-move";
                        e.length && this.hasMove(e[0].elm, t) && (e.forEach(ai),
                        e.forEach(si),
                        e.forEach(li),
                        this._reflow = document.body.offsetHeight,
                        e.forEach((function(e) {
                            if (e.data.moved) {
                                var n = e.elm
                                  , r = n.style;
                                Eo(n, t),
                                r.transform = r.WebkitTransform = r.transitionDuration = "",
                                n.addEventListener(ko, n._moveCb = function e(r) {
                                    r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(ko, e),
                                    n._moveCb = null,
                                    Oo(n, t))
                                }
                                )
                            }
                        }
                        )))
                    },
                    methods: {
                        hasMove: function(e, t) {
                            if (!wo)
                                return !1;
                            if (this._hasMove)
                                return this._hasMove;
                            var n = e.cloneNode();
                            e._transitionClasses && e._transitionClasses.forEach((function(e) {
                                go(n, e)
                            }
                            )),
                            vo(n, t),
                            n.style.display = "none",
                            this.$el.appendChild(n);
                            var r = Lo(n);
                            return this.$el.removeChild(n),
                            this._hasMove = r.hasTransform
                        }
                    }
                }
            };
            _n.config.mustUseProp = $n,
            _n.config.isReservedTag = Gn,
            _n.config.isReservedAttr = On,
            _n.config.getTagNamespace = Jn,
            _n.config.isUnknownElement = function(e) {
                if (!G)
                    return !0;
                if (Gn(e))
                    return !1;
                if (e = e.toLowerCase(),
                null != Wn[e])
                    return Wn[e];
                var t = document.createElement(e);
                return e.indexOf("-") > -1 ? Wn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Wn[e] = /HTMLUnknownElement/.test(t.toString())
            }
            ,
            E(_n.options.directives, Zo),
            E(_n.options.components, ci),
            _n.prototype.__patch__ = G ? Fo : P,
            _n.prototype.$mount = function(e, t) {
                return function(e, t, n) {
                    var r;
                    return e.$el = t,
                    e.$options.render || (e.$options.render = ge),
                    en(e, "beforeMount"),
                    r = function() {
                        e._update(e._render(), n)
                    }
                    ,
                    new fn(e,r,P,{
                        before: function() {
                            e._isMounted && !e._isDestroyed && en(e, "beforeUpdate")
                        }
                    },!0),
                    n = !1,
                    null == e.$vnode && (e._isMounted = !0,
                    en(e, "mounted")),
                    e
                }(this, e = e && G ? Qn(e) : void 0, t)
            }
            ,
            G && setTimeout((function() {
                R.devtools && ie && ie.emit("init", _n)
            }
            ), 0);
            var ui, di = /\{\{((?:.|\r?\n)+?)\}\}/g, pi = /[-.*+?^${}()|[\]\/\\]/g, fi = x((function(e) {
                var t = e[0].replace(pi, "\\$&")
                  , n = e[1].replace(pi, "\\$&");
                return new RegExp(t + "((?:.|\\n)+?)" + n,"g")
            }
            )), mi = {
                staticKeys: ["staticClass"],
                transformNode: function(e, t) {
                    t.warn;
                    var n = Dr(e, "class");
                    n && (e.staticClass = JSON.stringify(n));
                    var r = Mr(e, "class", !1);
                    r && (e.classBinding = r)
                },
                genData: function(e) {
                    var t = "";
                    return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
                    e.classBinding && (t += "class:" + e.classBinding + ","),
                    t
                }
            }, hi = {
                staticKeys: ["staticStyle"],
                transformNode: function(e, t) {
                    t.warn;
                    var n = Dr(e, "style");
                    n && (e.staticStyle = JSON.stringify(ro(n)));
                    var r = Mr(e, "style", !1);
                    r && (e.styleBinding = r)
                },
                genData: function(e) {
                    var t = "";
                    return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","),
                    e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
                    t
                }
            }, vi = h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), gi = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), bi = h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), yi = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, wi = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, xi = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + F.source + "]*", Ti = "((?:" + xi + "\\:)?" + xi + ")", _i = new RegExp("^<" + Ti), ki = /^\s*(\/?)>/, zi = new RegExp("^<\\/" + Ti + "[^>]*>"), Si = /^<!DOCTYPE [^>]+>/i, Ci = /^<!\--/, Ai = /^<!\[/, Ei = h("script,style,textarea", !0), Oi = {}, Pi = {
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&amp;": "&",
                "&#10;": "\n",
                "&#9;": "\t",
                "&#39;": "'"
            }, $i = /&(?:lt|gt|quot|amp|#39);/g, Li = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, Mi = h("pre,textarea", !0), Di = function(e, t) {
                return e && Mi(e) && "\n" === t[0]
            };
            function ji(e, t) {
                var n = t ? Li : $i;
                return e.replace(n, (function(e) {
                    return Pi[e]
                }
                ))
            }
            var Ii, Bi, Ni, Ri, Fi, qi, Ui, Hi, Vi = /^@|^v-on:/, Gi = /^v-|^@|^:|^#/, Ji = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Wi = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Ki = /^\(|\)$/g, Qi = /^\[.*\]$/, Zi = /:(.*)$/, Xi = /^:|^\.|^v-bind:/, Yi = /\.[^.\]]+(?=[^\]]*$)/g, ea = /^v-slot(:|$)|^#/, ta = /[\r\n]/, na = /[ \f\t\r\n]+/g, ra = x((function(e) {
                return (ui = ui || document.createElement("div")).innerHTML = e,
                ui.textContent
            }
            )), oa = "_empty_";
            function ia(e, t, n) {
                return {
                    type: 1,
                    tag: e,
                    attrsList: t,
                    attrsMap: da(t),
                    rawAttrsMap: {},
                    parent: n,
                    children: []
                }
            }
            function aa(e, t) {
                var n, r;
                (r = Mr(n = e, "key")) && (n.key = r),
                e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
                function(e) {
                    var t = Mr(e, "ref");
                    t && (e.ref = t,
                    e.refInFor = function(e) {
                        for (var t = e; t; ) {
                            if (void 0 !== t.for)
                                return !0;
                            t = t.parent
                        }
                        return !1
                    }(e))
                }(e),
                function(e) {
                    var t;
                    "template" === e.tag ? (t = Dr(e, "scope"),
                    e.slotScope = t || Dr(e, "slot-scope")) : (t = Dr(e, "slot-scope")) && (e.slotScope = t);
                    var n = Mr(e, "slot");
                    if (n && (e.slotTarget = '""' === n ? '"default"' : n,
                    e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]),
                    "template" === e.tag || e.slotScope || Er(e, "slot", n, function(e, t) {
                        return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
                    }(e, "slot"))),
                    "template" === e.tag) {
                        var r = jr(e, ea);
                        if (r) {
                            var o = ca(r)
                              , i = o.name
                              , a = o.dynamic;
                            e.slotTarget = i,
                            e.slotTargetDynamic = a,
                            e.slotScope = r.value || oa
                        }
                    } else {
                        var s = jr(e, ea);
                        if (s) {
                            var l = e.scopedSlots || (e.scopedSlots = {})
                              , c = ca(s)
                              , u = c.name
                              , d = c.dynamic
                              , p = l[u] = ia("template", [], e);
                            p.slotTarget = u,
                            p.slotTargetDynamic = d,
                            p.children = e.children.filter((function(e) {
                                if (!e.slotScope)
                                    return e.parent = p,
                                    !0
                            }
                            )),
                            p.slotScope = s.value || oa,
                            e.children = [],
                            e.plain = !1
                        }
                    }
                }(e),
                function(e) {
                    "slot" === e.tag && (e.slotName = Mr(e, "name"))
                }(e),
                function(e) {
                    var t;
                    (t = Mr(e, "is")) && (e.component = t),
                    null != Dr(e, "inline-template") && (e.inlineTemplate = !0)
                }(e);
                for (var o = 0; o < Ni.length; o++)
                    e = Ni[o](e, t) || e;
                return function(e) {
                    var t, n, r, o, i, a, s, l, c = e.attrsList;
                    for (t = 0,
                    n = c.length; t < n; t++)
                        if (r = o = c[t].name,
                        i = c[t].value,
                        Gi.test(r))
                            if (e.hasBindings = !0,
                            (a = ua(r.replace(Gi, ""))) && (r = r.replace(Yi, "")),
                            Xi.test(r))
                                r = r.replace(Xi, ""),
                                i = kr(i),
                                (l = Qi.test(r)) && (r = r.slice(1, -1)),
                                a && (a.prop && !l && "innerHtml" === (r = _(r)) && (r = "innerHTML"),
                                a.camel && !l && (r = _(r)),
                                a.sync && (s = Nr(i, "$event"),
                                l ? Lr(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (Lr(e, "update:" + _(r), s, null, !1, 0, c[t]),
                                S(r) !== _(r) && Lr(e, "update:" + S(r), s, null, !1, 0, c[t])))),
                                a && a.prop || !e.component && Ui(e.tag, e.attrsMap.type, r) ? Ar(e, r, i, c[t], l) : Er(e, r, i, c[t], l);
                            else if (Vi.test(r))
                                r = r.replace(Vi, ""),
                                (l = Qi.test(r)) && (r = r.slice(1, -1)),
                                Lr(e, r, i, a, !1, 0, c[t], l);
                            else {
                                var u = (r = r.replace(Gi, "")).match(Zi)
                                  , d = u && u[1];
                                l = !1,
                                d && (r = r.slice(0, -(d.length + 1)),
                                Qi.test(d) && (d = d.slice(1, -1),
                                l = !0)),
                                Pr(e, r, o, i, d, l, a, c[t])
                            }
                        else
                            Er(e, r, JSON.stringify(i), c[t]),
                            !e.component && "muted" === r && Ui(e.tag, e.attrsMap.type, r) && Ar(e, r, "true", c[t])
                }(e),
                e
            }
            function sa(e) {
                var t;
                if (t = Dr(e, "v-for")) {
                    var n = function(e) {
                        var t = e.match(Ji);
                        if (t) {
                            var n = {};
                            n.for = t[2].trim();
                            var r = t[1].trim().replace(Ki, "")
                              , o = r.match(Wi);
                            return o ? (n.alias = r.replace(Wi, "").trim(),
                            n.iterator1 = o[1].trim(),
                            o[2] && (n.iterator2 = o[2].trim())) : n.alias = r,
                            n
                        }
                    }(t);
                    n && E(e, n)
                }
            }
            function la(e, t) {
                e.ifConditions || (e.ifConditions = []),
                e.ifConditions.push(t)
            }
            function ca(e) {
                var t = e.name.replace(ea, "");
                return t || "#" !== e.name[0] && (t = "default"),
                Qi.test(t) ? {
                    name: t.slice(1, -1),
                    dynamic: !0
                } : {
                    name: '"' + t + '"',
                    dynamic: !1
                }
            }
            function ua(e) {
                var t = e.match(Yi);
                if (t) {
                    var n = {};
                    return t.forEach((function(e) {
                        n[e.slice(1)] = !0
                    }
                    )),
                    n
                }
            }
            function da(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++)
                    t[e[n].name] = e[n].value;
                return t
            }
            var pa = /^xmlns:NS\d+/
              , fa = /^NS\d+:/;
            function ma(e) {
                return ia(e.tag, e.attrsList.slice(), e.parent)
            }
            var ha, va, ga = [mi, hi, {
                preTransformNode: function(e, t) {
                    if ("input" === e.tag) {
                        var n, r = e.attrsMap;
                        if (!r["v-model"])
                            return;
                        if ((r[":type"] || r["v-bind:type"]) && (n = Mr(e, "type")),
                        r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"),
                        n) {
                            var o = Dr(e, "v-if", !0)
                              , i = o ? "&&(" + o + ")" : ""
                              , a = null != Dr(e, "v-else", !0)
                              , s = Dr(e, "v-else-if", !0)
                              , l = ma(e);
                            sa(l),
                            Or(l, "type", "checkbox"),
                            aa(l, t),
                            l.processed = !0,
                            l.if = "(" + n + ")==='checkbox'" + i,
                            la(l, {
                                exp: l.if,
                                block: l
                            });
                            var c = ma(e);
                            Dr(c, "v-for", !0),
                            Or(c, "type", "radio"),
                            aa(c, t),
                            la(l, {
                                exp: "(" + n + ")==='radio'" + i,
                                block: c
                            });
                            var u = ma(e);
                            return Dr(u, "v-for", !0),
                            Or(u, ":type", n),
                            aa(u, t),
                            la(l, {
                                exp: o,
                                block: u
                            }),
                            a ? l.else = !0 : s && (l.elseif = s),
                            l
                        }
                    }
                }
            }], ba = {
                expectHTML: !0,
                modules: ga,
                directives: {
                    model: function(e, t, n) {
                        var r = t.value
                          , o = t.modifiers
                          , i = e.tag
                          , a = e.attrsMap.type;
                        if (e.component)
                            return Br(e, r, o),
                            !1;
                        if ("select" === i)
                            !function(e, t, n) {
                                var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                                Lr(e, "change", r = r + " " + Nr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
                            }(e, r, o);
                        else if ("input" === i && "checkbox" === a)
                            !function(e, t, n) {
                                var r = n && n.number
                                  , o = Mr(e, "value") || "null"
                                  , i = Mr(e, "true-value") || "true"
                                  , a = Mr(e, "false-value") || "false";
                                Ar(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")),
                                Lr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Nr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Nr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Nr(t, "$$c") + "}", null, !0)
                            }(e, r, o);
                        else if ("input" === i && "radio" === a)
                            !function(e, t, n) {
                                var r = n && n.number
                                  , o = Mr(e, "value") || "null";
                                Ar(e, "checked", "_q(" + t + "," + (o = r ? "_n(" + o + ")" : o) + ")"),
                                Lr(e, "change", Nr(t, o), null, !0)
                            }(e, r, o);
                        else if ("input" === i || "textarea" === i)
                            !function(e, t, n) {
                                var r = e.attrsMap.type
                                  , o = n || {}
                                  , i = o.lazy
                                  , a = o.number
                                  , s = o.trim
                                  , l = !i && "range" !== r
                                  , c = i ? "change" : "range" === r ? Gr : "input"
                                  , u = "$event.target.value";
                                s && (u = "$event.target.value.trim()"),
                                a && (u = "_n(" + u + ")");
                                var d = Nr(t, u);
                                l && (d = "if($event.target.composing)return;" + d),
                                Ar(e, "value", "(" + t + ")"),
                                Lr(e, c, d, null, !0),
                                (s || a) && Lr(e, "blur", "$forceUpdate()")
                            }(e, r, o);
                        else if (!R.isReservedTag(i))
                            return Br(e, r, o),
                            !1;
                        return !0
                    },
                    text: function(e, t) {
                        t.value && Ar(e, "textContent", "_s(" + t.value + ")", t)
                    },
                    html: function(e, t) {
                        t.value && Ar(e, "innerHTML", "_s(" + t.value + ")", t)
                    }
                },
                isPreTag: function(e) {
                    return "pre" === e
                },
                isUnaryTag: vi,
                mustUseProp: $n,
                canBeLeftOpenTag: gi,
                isReservedTag: Gn,
                getTagNamespace: Jn,
                staticKeys: function(e) {
                    return e.reduce((function(e, t) {
                        return e.concat(t.staticKeys || [])
                    }
                    ), []).join(",")
                }(ga)
            }, ya = x((function(e) {
                return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
            }
            ));
            var wa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/
              , xa = /\([^)]*?\);*$/
              , Ta = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
              , _a = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                up: 38,
                left: 37,
                right: 39,
                down: 40,
                delete: [8, 46]
            }
              , ka = {
                esc: ["Esc", "Escape"],
                tab: "Tab",
                enter: "Enter",
                space: [" ", "Spacebar"],
                up: ["Up", "ArrowUp"],
                left: ["Left", "ArrowLeft"],
                right: ["Right", "ArrowRight"],
                down: ["Down", "ArrowDown"],
                delete: ["Backspace", "Delete", "Del"]
            }
              , za = function(e) {
                return "if(" + e + ")return null;"
            }
              , Sa = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: za("$event.target !== $event.currentTarget"),
                ctrl: za("!$event.ctrlKey"),
                shift: za("!$event.shiftKey"),
                alt: za("!$event.altKey"),
                meta: za("!$event.metaKey"),
                left: za("'button' in $event && $event.button !== 0"),
                middle: za("'button' in $event && $event.button !== 1"),
                right: za("'button' in $event && $event.button !== 2")
            };
            function Ca(e, t) {
                var n = t ? "nativeOn:" : "on:"
                  , r = ""
                  , o = "";
                for (var i in e) {
                    var a = Aa(e[i]);
                    e[i] && e[i].dynamic ? o += i + "," + a + "," : r += '"' + i + '":' + a + ","
                }
                return r = "{" + r.slice(0, -1) + "}",
                o ? n + "_d(" + r + ",[" + o.slice(0, -1) + "])" : n + r
            }
            function Aa(e) {
                if (!e)
                    return "function(){}";
                if (Array.isArray(e))
                    return "[" + e.map((function(e) {
                        return Aa(e)
                    }
                    )).join(",") + "]";
                var t = Ta.test(e.value)
                  , n = wa.test(e.value)
                  , r = Ta.test(e.value.replace(xa, ""));
                if (e.modifiers) {
                    var o = ""
                      , i = ""
                      , a = [];
                    for (var s in e.modifiers)
                        if (Sa[s])
                            i += Sa[s],
                            _a[s] && a.push(s);
                        else if ("exact" === s) {
                            var l = e.modifiers;
                            i += za(["ctrl", "shift", "alt", "meta"].filter((function(e) {
                                return !l[e]
                            }
                            )).map((function(e) {
                                return "$event." + e + "Key"
                            }
                            )).join("||"))
                        } else
                            a.push(s);
                    return a.length && (o += function(e) {
                        return "if(!$event.type.indexOf('key')&&" + e.map(Ea).join("&&") + ")return null;"
                    }(a)),
                    i && (o += i),
                    "function($event){" + o + (t ? "return " + e.value + ".apply(null, arguments)" : n ? "return (" + e.value + ").apply(null, arguments)" : r ? "return " + e.value : e.value) + "}"
                }
                return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
            }
            function Ea(e) {
                var t = parseInt(e, 10);
                if (t)
                    return "$event.keyCode!==" + t;
                var n = _a[e]
                  , r = ka[e];
                return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
            }
            var Oa = {
                on: function(e, t) {
                    e.wrapListeners = function(e) {
                        return "_g(" + e + "," + t.value + ")"
                    }
                },
                bind: function(e, t) {
                    e.wrapData = function(n) {
                        return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
                    }
                },
                cloak: P
            }
              , Pa = function(e) {
                this.options = e,
                this.warn = e.warn || Sr,
                this.transforms = Cr(e.modules, "transformCode"),
                this.dataGenFns = Cr(e.modules, "genData"),
                this.directives = E(E({}, Oa), e.directives);
                var t = e.isReservedTag || $;
                this.maybeComponent = function(e) {
                    return !!e.component || !t(e.tag)
                }
                ,
                this.onceId = 0,
                this.staticRenderFns = [],
                this.pre = !1
            };
            function $a(e, t) {
                var n = new Pa(t);
                return {
                    render: "with(this){return " + (e ? "script" === e.tag ? "null" : La(e, n) : '_c("div")') + "}",
                    staticRenderFns: n.staticRenderFns
                }
            }
            function La(e, t) {
                if (e.parent && (e.pre = e.pre || e.parent.pre),
                e.staticRoot && !e.staticProcessed)
                    return Ma(e, t);
                if (e.once && !e.onceProcessed)
                    return Da(e, t);
                if (e.for && !e.forProcessed)
                    return Ia(e, t);
                if (e.if && !e.ifProcessed)
                    return ja(e, t);
                if ("template" !== e.tag || e.slotTarget || t.pre) {
                    if ("slot" === e.tag)
                        return function(e, t) {
                            var n = e.slotName || '"default"'
                              , r = Fa(e, t)
                              , o = "_t(" + n + (r ? ",function(){return " + r + "}" : "")
                              , i = e.attrs || e.dynamicAttrs ? Ha((e.attrs || []).concat(e.dynamicAttrs || []).map((function(e) {
                                return {
                                    name: _(e.name),
                                    value: e.value,
                                    dynamic: e.dynamic
                                }
                            }
                            ))) : null
                              , a = e.attrsMap["v-bind"];
                            return !i && !a || r || (o += ",null"),
                            i && (o += "," + i),
                            a && (o += (i ? "" : ",null") + "," + a),
                            o + ")"
                        }(e, t);
                    var n;
                    if (e.component)
                        n = function(e, t, n) {
                            var r = t.inlineTemplate ? null : Fa(t, n, !0);
                            return "_c(" + e + "," + Ba(t, n) + (r ? "," + r : "") + ")"
                        }(e.component, e, t);
                    else {
                        var r;
                        (!e.plain || e.pre && t.maybeComponent(e)) && (r = Ba(e, t));
                        var o = e.inlineTemplate ? null : Fa(e, t, !0);
                        n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (o ? "," + o : "") + ")"
                    }
                    for (var i = 0; i < t.transforms.length; i++)
                        n = t.transforms[i](e, n);
                    return n
                }
                return Fa(e, t) || "void 0"
            }
            function Ma(e, t) {
                e.staticProcessed = !0;
                var n = t.pre;
                return e.pre && (t.pre = e.pre),
                t.staticRenderFns.push("with(this){return " + La(e, t) + "}"),
                t.pre = n,
                "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
            }
            function Da(e, t) {
                if (e.onceProcessed = !0,
                e.if && !e.ifProcessed)
                    return ja(e, t);
                if (e.staticInFor) {
                    for (var n = "", r = e.parent; r; ) {
                        if (r.for) {
                            n = r.key;
                            break
                        }
                        r = r.parent
                    }
                    return n ? "_o(" + La(e, t) + "," + t.onceId++ + "," + n + ")" : La(e, t)
                }
                return Ma(e, t)
            }
            function ja(e, t, n, r) {
                return e.ifProcessed = !0,
                function e(t, n, r, o) {
                    if (!t.length)
                        return o || "_e()";
                    var i = t.shift();
                    return i.exp ? "(" + i.exp + ")?" + a(i.block) + ":" + e(t, n, r, o) : "" + a(i.block);
                    function a(e) {
                        return r ? r(e, n) : e.once ? Da(e, n) : La(e, n)
                    }
                }(e.ifConditions.slice(), t, n, r)
            }
            function Ia(e, t, n, r) {
                var o = e.for
                  , i = e.alias
                  , a = e.iterator1 ? "," + e.iterator1 : ""
                  , s = e.iterator2 ? "," + e.iterator2 : "";
                return e.forProcessed = !0,
                (r || "_l") + "((" + o + "),function(" + i + a + s + "){return " + (n || La)(e, t) + "})"
            }
            function Ba(e, t) {
                var n = "{"
                  , r = function(e, t) {
                    var n = e.directives;
                    if (n) {
                        var r, o, i, a, s = "directives:[", l = !1;
                        for (r = 0,
                        o = n.length; r < o; r++) {
                            i = n[r],
                            a = !0;
                            var c = t.directives[i.name];
                            c && (a = !!c(e, i, t.warn)),
                            a && (l = !0,
                            s += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"') : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                        }
                        return l ? s.slice(0, -1) + "]" : void 0
                    }
                }(e, t);
                r && (n += r + ","),
                e.key && (n += "key:" + e.key + ","),
                e.ref && (n += "ref:" + e.ref + ","),
                e.refInFor && (n += "refInFor:true,"),
                e.pre && (n += "pre:true,"),
                e.component && (n += 'tag:"' + e.tag + '",');
                for (var o = 0; o < t.dataGenFns.length; o++)
                    n += t.dataGenFns[o](e);
                if (e.attrs && (n += "attrs:" + Ha(e.attrs) + ","),
                e.props && (n += "domProps:" + Ha(e.props) + ","),
                e.events && (n += Ca(e.events, !1) + ","),
                e.nativeEvents && (n += Ca(e.nativeEvents, !0) + ","),
                e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","),
                e.scopedSlots && (n += function(e, t, n) {
                    var r = e.for || Object.keys(t).some((function(e) {
                        var n = t[e];
                        return n.slotTargetDynamic || n.if || n.for || Na(n)
                    }
                    ))
                      , o = !!e.if;
                    if (!r)
                        for (var i = e.parent; i; ) {
                            if (i.slotScope && i.slotScope !== oa || i.for) {
                                r = !0;
                                break
                            }
                            i.if && (o = !0),
                            i = i.parent
                        }
                    var a = Object.keys(t).map((function(e) {
                        return Ra(t[e], n)
                    }
                    )).join(",");
                    return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && o ? ",null,false," + function(e) {
                        for (var t = 5381, n = e.length; n; )
                            t = 33 * t ^ e.charCodeAt(--n);
                        return t >>> 0
                    }(a) : "") + ")"
                }(e, e.scopedSlots, t) + ","),
                e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"),
                e.inlineTemplate) {
                    var i = function(e, t) {
                        var n = e.children[0];
                        if (n && 1 === n.type) {
                            var r = $a(n, t.options);
                            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function(e) {
                                return "function(){" + e + "}"
                            }
                            )).join(",") + "]}"
                        }
                    }(e, t);
                    i && (n += i + ",")
                }
                return n = n.replace(/,$/, "") + "}",
                e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ha(e.dynamicAttrs) + ")"),
                e.wrapData && (n = e.wrapData(n)),
                e.wrapListeners && (n = e.wrapListeners(n)),
                n
            }
            function Na(e) {
                return 1 === e.type && ("slot" === e.tag || e.children.some(Na))
            }
            function Ra(e, t) {
                var n = e.attrsMap["slot-scope"];
                if (e.if && !e.ifProcessed && !n)
                    return ja(e, t, Ra, "null");
                if (e.for && !e.forProcessed)
                    return Ia(e, t, Ra);
                var r = e.slotScope === oa ? "" : String(e.slotScope)
                  , o = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if + ")?" + (Fa(e, t) || "undefined") + ":undefined" : Fa(e, t) || "undefined" : La(e, t)) + "}"
                  , i = r ? "" : ",proxy:true";
                return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + i + "}"
            }
            function Fa(e, t, n, r, o) {
                var i = e.children;
                if (i.length) {
                    var a = i[0];
                    if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
                        var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
                        return "" + (r || La)(a, t) + s
                    }
                    var l = n ? function(e, t) {
                        for (var n = 0, r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (1 === o.type) {
                                if (qa(o) || o.ifConditions && o.ifConditions.some((function(e) {
                                    return qa(e.block)
                                }
                                ))) {
                                    n = 2;
                                    break
                                }
                                (t(o) || o.ifConditions && o.ifConditions.some((function(e) {
                                    return t(e.block)
                                }
                                ))) && (n = 1)
                            }
                        }
                        return n
                    }(i, t.maybeComponent) : 0
                      , c = o || Ua;
                    return "[" + i.map((function(e) {
                        return c(e, t)
                    }
                    )).join(",") + "]" + (l ? "," + l : "")
                }
            }
            function qa(e) {
                return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
            }
            function Ua(e, t) {
                return 1 === e.type ? La(e, t) : 3 === e.type && e.isComment ? (r = e,
                "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Va(JSON.stringify(n.text))) + ")";
                var n, r
            }
            function Ha(e) {
                for (var t = "", n = "", r = 0; r < e.length; r++) {
                    var o = e[r]
                      , i = Va(o.value);
                    o.dynamic ? n += o.name + "," + i + "," : t += '"' + o.name + '":' + i + ","
                }
                return t = "{" + t.slice(0, -1) + "}",
                n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
            }
            function Va(e) {
                return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            function Ga(e, t) {
                try {
                    return new Function(e)
                } catch (n) {
                    return t.push({
                        err: n,
                        code: e
                    }),
                    P
                }
            }
            function Ja(e) {
                var t = Object.create(null);
                return function(n, r, o) {
                    (r = E({}, r)).warn,
                    delete r.warn;
                    var i = r.delimiters ? String(r.delimiters) + n : n;
                    if (t[i])
                        return t[i];
                    var a = e(n, r)
                      , s = {}
                      , l = [];
                    return s.render = Ga(a.render, l),
                    s.staticRenderFns = a.staticRenderFns.map((function(e) {
                        return Ga(e, l)
                    }
                    )),
                    t[i] = s
                }
            }
            new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
            var Wa, Ka, Qa = (Wa = function(e, t) {
                var n = function(e, t) {
                    Ii = t.warn || Sr,
                    qi = t.isPreTag || $,
                    Ui = t.mustUseProp || $,
                    Hi = t.getTagNamespace || $,
                    t.isReservedTag,
                    Ni = Cr(t.modules, "transformNode"),
                    Ri = Cr(t.modules, "preTransformNode"),
                    Fi = Cr(t.modules, "postTransformNode"),
                    Bi = t.delimiters;
                    var n, r, o = [], i = !1 !== t.preserveWhitespace, a = t.whitespace, s = !1, l = !1;
                    function c(e) {
                        if (u(e),
                        s || e.processed || (e = aa(e, t)),
                        o.length || e === n || n.if && (e.elseif || e.else) && la(n, {
                            exp: e.elseif,
                            block: e
                        }),
                        r && !e.forbidden)
                            if (e.elseif || e.else)
                                a = e,
                                (c = function(e) {
                                    for (var t = e.length; t--; ) {
                                        if (1 === e[t].type)
                                            return e[t];
                                        e.pop()
                                    }
                                }(r.children)) && c.if && la(c, {
                                    exp: a.elseif,
                                    block: a
                                });
                            else {
                                if (e.slotScope) {
                                    var i = e.slotTarget || '"default"';
                                    (r.scopedSlots || (r.scopedSlots = {}))[i] = e
                                }
                                r.children.push(e),
                                e.parent = r
                            }
                        var a, c;
                        e.children = e.children.filter((function(e) {
                            return !e.slotScope
                        }
                        )),
                        u(e),
                        e.pre && (s = !1),
                        qi(e.tag) && (l = !1);
                        for (var d = 0; d < Fi.length; d++)
                            Fi[d](e, t)
                    }
                    function u(e) {
                        if (!l)
                            for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text; )
                                e.children.pop()
                    }
                    return function(e, t) {
                        for (var n, r, o = [], i = t.expectHTML, a = t.isUnaryTag || $, s = t.canBeLeftOpenTag || $, l = 0; e; ) {
                            if (n = e,
                            r && Ei(r)) {
                                var c = 0
                                  , u = r.toLowerCase()
                                  , d = Oi[u] || (Oi[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)","i"))
                                  , p = e.replace(d, (function(e, n, r) {
                                    return c = r.length,
                                    Ei(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                                    Di(u, n) && (n = n.slice(1)),
                                    t.chars && t.chars(n),
                                    ""
                                }
                                ));
                                l += e.length - p.length,
                                e = p,
                                S(u, l - c, l)
                            } else {
                                var f = e.indexOf("<");
                                if (0 === f) {
                                    if (Ci.test(e)) {
                                        var m = e.indexOf("--\x3e");
                                        if (m >= 0) {
                                            t.shouldKeepComment && t.comment(e.substring(4, m), l, l + m + 3),
                                            _(m + 3);
                                            continue
                                        }
                                    }
                                    if (Ai.test(e)) {
                                        var h = e.indexOf("]>");
                                        if (h >= 0) {
                                            _(h + 2);
                                            continue
                                        }
                                    }
                                    var v = e.match(Si);
                                    if (v) {
                                        _(v[0].length);
                                        continue
                                    }
                                    var g = e.match(zi);
                                    if (g) {
                                        var b = l;
                                        _(g[0].length),
                                        S(g[1], b, l);
                                        continue
                                    }
                                    var y = k();
                                    if (y) {
                                        z(y),
                                        Di(y.tagName, e) && _(1);
                                        continue
                                    }
                                }
                                var w = void 0
                                  , x = void 0
                                  , T = void 0;
                                if (f >= 0) {
                                    for (x = e.slice(f); !(zi.test(x) || _i.test(x) || Ci.test(x) || Ai.test(x) || (T = x.indexOf("<", 1)) < 0); )
                                        f += T,
                                        x = e.slice(f);
                                    w = e.substring(0, f)
                                }
                                f < 0 && (w = e),
                                w && _(w.length),
                                t.chars && w && t.chars(w, l - w.length, l)
                            }
                            if (e === n) {
                                t.chars && t.chars(e);
                                break
                            }
                        }
                        function _(t) {
                            l += t,
                            e = e.substring(t)
                        }
                        function k() {
                            var t = e.match(_i);
                            if (t) {
                                var n, r, o = {
                                    tagName: t[1],
                                    attrs: [],
                                    start: l
                                };
                                for (_(t[0].length); !(n = e.match(ki)) && (r = e.match(wi) || e.match(yi)); )
                                    r.start = l,
                                    _(r[0].length),
                                    r.end = l,
                                    o.attrs.push(r);
                                if (n)
                                    return o.unarySlash = n[1],
                                    _(n[0].length),
                                    o.end = l,
                                    o
                            }
                        }
                        function z(e) {
                            var n = e.tagName
                              , l = e.unarySlash;
                            i && ("p" === r && bi(n) && S(r),
                            s(n) && r === n && S(n));
                            for (var c = a(n) || !!l, u = e.attrs.length, d = new Array(u), p = 0; p < u; p++) {
                                var f = e.attrs[p]
                                  , m = f[3] || f[4] || f[5] || ""
                                  , h = "a" === n && "href" === f[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                                d[p] = {
                                    name: f[1],
                                    value: ji(m, h)
                                }
                            }
                            c || (o.push({
                                tag: n,
                                lowerCasedTag: n.toLowerCase(),
                                attrs: d,
                                start: e.start,
                                end: e.end
                            }),
                            r = n),
                            t.start && t.start(n, d, c, e.start, e.end)
                        }
                        function S(e, n, i) {
                            var a, s;
                            if (null == n && (n = l),
                            null == i && (i = l),
                            e)
                                for (s = e.toLowerCase(),
                                a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--)
                                    ;
                            else
                                a = 0;
                            if (a >= 0) {
                                for (var c = o.length - 1; c >= a; c--)
                                    t.end && t.end(o[c].tag, n, i);
                                o.length = a,
                                r = a && o[a - 1].tag
                            } else
                                "br" === s ? t.start && t.start(e, [], !0, n, i) : "p" === s && (t.start && t.start(e, [], !1, n, i),
                                t.end && t.end(e, n, i))
                        }
                        S()
                    }(e, {
                        warn: Ii,
                        expectHTML: t.expectHTML,
                        isUnaryTag: t.isUnaryTag,
                        canBeLeftOpenTag: t.canBeLeftOpenTag,
                        shouldDecodeNewlines: t.shouldDecodeNewlines,
                        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                        shouldKeepComment: t.comments,
                        outputSourceRange: t.outputSourceRange,
                        start: function(e, i, a, u, d) {
                            var p = r && r.ns || Hi(e);
                            Q && "svg" === p && (i = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    pa.test(r.name) || (r.name = r.name.replace(fa, ""),
                                    t.push(r))
                                }
                                return t
                            }(i));
                            var f, m = ia(e, i, r);
                            p && (m.ns = p),
                            "style" !== (f = m).tag && ("script" !== f.tag || f.attrsMap.type && "text/javascript" !== f.attrsMap.type) || oe() || (m.forbidden = !0);
                            for (var h = 0; h < Ri.length; h++)
                                m = Ri[h](m, t) || m;
                            s || (function(e) {
                                null != Dr(e, "v-pre") && (e.pre = !0)
                            }(m),
                            m.pre && (s = !0)),
                            qi(m.tag) && (l = !0),
                            s ? function(e) {
                                var t = e.attrsList
                                  , n = t.length;
                                if (n)
                                    for (var r = e.attrs = new Array(n), o = 0; o < n; o++)
                                        r[o] = {
                                            name: t[o].name,
                                            value: JSON.stringify(t[o].value)
                                        },
                                        null != t[o].start && (r[o].start = t[o].start,
                                        r[o].end = t[o].end);
                                else
                                    e.pre || (e.plain = !0)
                            }(m) : m.processed || (sa(m),
                            function(e) {
                                var t = Dr(e, "v-if");
                                if (t)
                                    e.if = t,
                                    la(e, {
                                        exp: t,
                                        block: e
                                    });
                                else {
                                    null != Dr(e, "v-else") && (e.else = !0);
                                    var n = Dr(e, "v-else-if");
                                    n && (e.elseif = n)
                                }
                            }(m),
                            function(e) {
                                null != Dr(e, "v-once") && (e.once = !0)
                            }(m)),
                            n || (n = m),
                            a ? c(m) : (r = m,
                            o.push(m))
                        },
                        end: function(e, t, n) {
                            var i = o[o.length - 1];
                            o.length -= 1,
                            r = o[o.length - 1],
                            c(i)
                        },
                        chars: function(e, t, n) {
                            if (r && (!Q || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                                var o, c, u, d = r.children;
                                (e = l || e.trim() ? "script" === (o = r).tag || "style" === o.tag ? e : ra(e) : d.length ? a ? "condense" === a && ta.test(e) ? "" : " " : i ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(na, " ")),
                                !s && " " !== e && (c = function(e, t) {
                                    var n = t ? fi(t) : di;
                                    if (n.test(e)) {
                                        for (var r, o, i, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e); ) {
                                            (o = r.index) > l && (s.push(i = e.slice(l, o)),
                                            a.push(JSON.stringify(i)));
                                            var c = kr(r[1].trim());
                                            a.push("_s(" + c + ")"),
                                            s.push({
                                                "@binding": c
                                            }),
                                            l = o + r[0].length
                                        }
                                        return l < e.length && (s.push(i = e.slice(l)),
                                        a.push(JSON.stringify(i))),
                                        {
                                            expression: a.join("+"),
                                            tokens: s
                                        }
                                    }
                                }(e, Bi)) ? u = {
                                    type: 2,
                                    expression: c.expression,
                                    tokens: c.tokens,
                                    text: e
                                } : " " === e && d.length && " " === d[d.length - 1].text || (u = {
                                    type: 3,
                                    text: e
                                }),
                                u && d.push(u))
                            }
                        },
                        comment: function(e, t, n) {
                            if (r) {
                                var o = {
                                    type: 3,
                                    text: e,
                                    isComment: !0
                                };
                                r.children.push(o)
                            }
                        }
                    }),
                    n
                }(e.trim(), t);
                !1 !== t.optimize && function(e, t) {
                    e && (ha = ya(t.staticKeys || ""),
                    va = t.isReservedTag || $,
                    function e(t) {
                        if (t.static = function(e) {
                            return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || v(e.tag) || !va(e.tag) || function(e) {
                                for (; e.parent; ) {
                                    if ("template" !== (e = e.parent).tag)
                                        return !1;
                                    if (e.for)
                                        return !0
                                }
                                return !1
                            }(e) || !Object.keys(e).every(ha))))
                        }(t),
                        1 === t.type) {
                            if (!va(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"])
                                return;
                            for (var n = 0, r = t.children.length; n < r; n++) {
                                var o = t.children[n];
                                e(o),
                                o.static || (t.static = !1)
                            }
                            if (t.ifConditions)
                                for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                                    var s = t.ifConditions[i].block;
                                    e(s),
                                    s.static || (t.static = !1)
                                }
                        }
                    }(e),
                    function e(t, n) {
                        if (1 === t.type) {
                            if ((t.static || t.once) && (t.staticInFor = n),
                            t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type))
                                return void (t.staticRoot = !0);
                            if (t.staticRoot = !1,
                            t.children)
                                for (var r = 0, o = t.children.length; r < o; r++)
                                    e(t.children[r], n || !!t.for);
                            if (t.ifConditions)
                                for (var i = 1, a = t.ifConditions.length; i < a; i++)
                                    e(t.ifConditions[i].block, n)
                        }
                    }(e, !1))
                }(n, t);
                var r = $a(n, t);
                return {
                    ast: n,
                    render: r.render,
                    staticRenderFns: r.staticRenderFns
                }
            }
            ,
            function(e) {
                function t(t, n) {
                    var r = Object.create(e)
                      , o = []
                      , i = [];
                    if (n)
                        for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)),
                        n.directives && (r.directives = E(Object.create(e.directives || null), n.directives)),
                        n)
                            "modules" !== a && "directives" !== a && (r[a] = n[a]);
                    r.warn = function(e, t, n) {
                        (n ? i : o).push(e)
                    }
                    ;
                    var s = Wa(t.trim(), r);
                    return s.errors = o,
                    s.tips = i,
                    s
                }
                return {
                    compile: t,
                    compileToFunctions: Ja(t)
                }
            }
            )(ba), Za = (Qa.compile,
            Qa.compileToFunctions);
            function Xa(e) {
                return (Ka = Ka || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>',
                Ka.innerHTML.indexOf("&#10;") > 0
            }
            var Ya = !!G && Xa(!1)
              , es = !!G && Xa(!0)
              , ts = x((function(e) {
                var t = Qn(e);
                return t && t.innerHTML
            }
            ))
              , ns = _n.prototype.$mount;
            _n.prototype.$mount = function(e, t) {
                if ((e = e && Qn(e)) === document.body || e === document.documentElement)
                    return this;
                var n = this.$options;
                if (!n.render) {
                    var r = n.template;
                    if (r)
                        if ("string" == typeof r)
                            "#" === r.charAt(0) && (r = ts(r));
                        else {
                            if (!r.nodeType)
                                return this;
                            r = r.innerHTML
                        }
                    else
                        e && (r = function(e) {
                            if (e.outerHTML)
                                return e.outerHTML;
                            var t = document.createElement("div");
                            return t.appendChild(e.cloneNode(!0)),
                            t.innerHTML
                        }(e));
                    if (r) {
                        var o = Za(r, {
                            outputSourceRange: !1,
                            shouldDecodeNewlines: Ya,
                            shouldDecodeNewlinesForHref: es,
                            delimiters: n.delimiters,
                            comments: n.comments
                        }, this)
                          , i = o.render
                          , a = o.staticRenderFns;
                        n.render = i,
                        n.staticRenderFns = a
                    }
                }
                return ns.call(this, e, t)
            }
            ,
            _n.compile = Za,
            e.exports = _n
        }
        ).call(this, n("yLpj"), n("URgk").setImmediate)
    },
    JEQr: function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n("xTJ+")
              , o = n("yK9s")
              , i = n("OH9c")
              , a = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function s(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var l, c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (l = n("tQ2B")),
                l),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"),
                    o(t, "Content-Type"),
                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (s(t, "application/json"),
                    function(e, t, n) {
                        if (r.isString(e))
                            try {
                                return (t || JSON.parse)(e),
                                r.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name)
                                    throw e
                            }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    var t = this.transitional || c.transitional
                      , n = t && t.silentJSONParsing
                      , o = t && t.forcedJSONParsing
                      , a = !n && "json" === this.responseType;
                    if (a || o && r.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (a) {
                                if ("SyntaxError" === e.name)
                                    throw i(e, this, "E_JSON_PARSE");
                                throw e
                            }
                        }
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            }
            )),
            r.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = r.merge(a)
            }
            )),
            e.exports = c
        }
        ).call(this, n("8oxB"))
    },
    K4CH: function(e, t, n) {
        var r;
        !function(o, i) {
            "use strict";
            var a = "model"
              , s = "name"
              , l = "type"
              , c = "vendor"
              , u = "version"
              , d = "mobile"
              , p = "tablet"
              , f = "smarttv"
              , m = function(e) {
                for (var t = {}, n = 0; n < e.length; n++)
                    t[e[n].toUpperCase()] = e[n];
                return t
            }
              , h = function(e, t) {
                return "string" == typeof e && -1 !== v(t).indexOf(v(e))
            }
              , v = function(e) {
                return e.toLowerCase()
            }
              , g = function(e, t) {
                if ("string" == typeof e)
                    return e = e.replace(/^\s\s*/, ""),
                    void 0 === t ? e : e.substring(0, 350)
            }
              , b = function(e, t) {
                for (var n, r, o, i, a, s, l = 0; l < t.length && !a; ) {
                    var c = t[l]
                      , u = t[l + 1];
                    for (n = r = 0; n < c.length && !a; )
                        if (a = c[n++].exec(e))
                            for (o = 0; o < u.length; o++)
                                s = a[++r],
                                "object" == typeof (i = u[o]) && i.length > 0 ? 2 === i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, s) : this[i[0]] = i[1] : 3 === i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = s ? s.replace(i[1], i[2]) : void 0 : this[i[0]] = s ? i[1].call(this, s, i[2]) : void 0 : 4 === i.length && (this[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : void 0) : this[i] = s || void 0;
                    l += 2
                }
            }
              , y = function(e, t) {
                for (var n in t)
                    if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var r = 0; r < t[n].length; r++)
                            if (h(t[n][r], e))
                                return "?" === n ? void 0 : n
                    } else if (h(t[n], e))
                        return "?" === n ? void 0 : n;
                return e
            }
              , w = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , x = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [s, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [s, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [s, u], [/opios[\/ ]+([\w\.]+)/i], [u, [s, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [u, [s, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [s, u], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [u, [s, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [u, [s, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [u, [s, "WeChat"]], [/konqueror\/([\w\.]+)/i], [u, [s, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u, [s, "IE"]], [/yabrowser\/([\w\.]+)/i], [u, [s, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[s, /(.+)/, "$1 Secure Browser"], u], [/\bfocus\/([\w\.]+)/i], [u, [s, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [u, [s, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u, [s, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [s, "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [s, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [s, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [u, [s, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[s, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[s, /(.+)/, "$1 Browser"], u], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], u], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [s, u], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [s], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[s, "Facebook"], u], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [s, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [s, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [u, [s, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[s, "Chrome WebView"], u], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [u, [s, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [s, u], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [u, [s, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [u, s], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [s, [u, y, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [s, u], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[s, "Netscape"], u], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [s, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [s, u], [/(cobalt)\/([\w\.]+)/i], [s, [u, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", v]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", v]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", v]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [a, [c, "Samsung"], [l, p]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [a, [c, "Samsung"], [l, d]], [/\((ip(?:hone|od)[\w ]*);/i], [a, [c, "Apple"], [l, d]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [a, [c, "Apple"], [l, p]], [/(macintosh);/i], [a, [c, "Apple"]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [a, [c, "Huawei"], [l, p]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [a, [c, "Huawei"], [l, d]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[a, /_/g, " "], [c, "Xiaomi"], [l, d]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[a, /_/g, " "], [c, "Xiaomi"], [l, p]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [a, [c, "OPPO"], [l, d]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [a, [c, "Vivo"], [l, d]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [a, [c, "Realme"], [l, d]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [a, [c, "Motorola"], [l, d]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [a, [c, "Motorola"], [l, p]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [a, [c, "LG"], [l, p]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [a, [c, "LG"], [l, d]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [a, [c, "Lenovo"], [l, p]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[a, /_/g, " "], [c, "Nokia"], [l, d]], [/(pixel c)\b/i], [a, [c, "Google"], [l, p]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [a, [c, "Google"], [l, d]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [c, "Sony"], [l, d]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[a, "Xperia Tablet"], [c, "Sony"], [l, p]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [a, [c, "OnePlus"], [l, d]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [a, [c, "Amazon"], [l, p]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[a, /(.+)/g, "Fire Phone $1"], [c, "Amazon"], [l, d]], [/(playbook);[-\w\),; ]+(rim)/i], [a, c, [l, p]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [a, [c, "BlackBerry"], [l, d]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [a, [c, "ASUS"], [l, p]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [a, [c, "ASUS"], [l, d]], [/(nexus 9)/i], [a, [c, "HTC"], [l, p]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i], [c, [a, /_/g, " "], [l, d]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [a, [c, "Acer"], [l, p]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [a, [c, "Meizu"], [l, d]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [a, [c, "Sharp"], [l, d]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [c, a, [l, d]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [c, a, [l, p]], [/(surface duo)/i], [a, [c, "Microsoft"], [l, p]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [a, [c, "Fairphone"], [l, d]], [/(u304aa)/i], [a, [c, "AT&T"], [l, d]], [/\bsie-(\w*)/i], [a, [c, "Siemens"], [l, d]], [/\b(rct\w+) b/i], [a, [c, "RCA"], [l, p]], [/\b(venue[\d ]{2,7}) b/i], [a, [c, "Dell"], [l, p]], [/\b(q(?:mv|ta)\w+) b/i], [a, [c, "Verizon"], [l, p]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [a, [c, "Barnes & Noble"], [l, p]], [/\b(tm\d{3}\w+) b/i], [a, [c, "NuVision"], [l, p]], [/\b(k88) b/i], [a, [c, "ZTE"], [l, p]], [/\b(nx\d{3}j) b/i], [a, [c, "ZTE"], [l, d]], [/\b(gen\d{3}) b.+49h/i], [a, [c, "Swiss"], [l, d]], [/\b(zur\d{3}) b/i], [a, [c, "Swiss"], [l, p]], [/\b((zeki)?tb.*\b) b/i], [a, [c, "Zeki"], [l, p]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[c, "Dragon Touch"], a, [l, p]], [/\b(ns-?\w{0,9}) b/i], [a, [c, "Insignia"], [l, p]], [/\b((nxa|next)-?\w{0,9}) b/i], [a, [c, "NextBook"], [l, p]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[c, "Voice"], a, [l, d]], [/\b(lvtel\-)?(v1[12]) b/i], [[c, "LvTel"], a, [l, d]], [/\b(ph-1) /i], [a, [c, "Essential"], [l, d]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [a, [c, "Envizen"], [l, p]], [/\b(trio[-\w\. ]+) b/i], [a, [c, "MachSpeed"], [l, p]], [/\btu_(1491) b/i], [a, [c, "Rotor"], [l, p]], [/(shield[\w ]+) b/i], [a, [c, "Nvidia"], [l, p]], [/(sprint) (\w+)/i], [c, a, [l, d]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [c, "Microsoft"], [l, d]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [a, [c, "Zebra"], [l, p]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [a, [c, "Zebra"], [l, d]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [c, a, [l, "console"]], [/droid.+; (shield) bui/i], [a, [c, "Nvidia"], [l, "console"]], [/(playstation [345portablevi]+)/i], [a, [c, "Sony"], [l, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [a, [c, "Microsoft"], [l, "console"]], [/smart-tv.+(samsung)/i], [c, [l, f]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [c, "Samsung"], [l, f]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[c, "LG"], [l, f]], [/(apple) ?tv/i], [c, [a, "Apple TV"], [l, f]], [/crkey/i], [[a, "Chromecast"], [c, "Google"], [l, f]], [/droid.+aft(\w)( bui|\))/i], [a, [c, "Amazon"], [l, f]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [a, [c, "Sharp"], [l, f]], [/(bravia[\w ]+)( bui|\))/i], [a, [c, "Sony"], [l, f]], [/(mitv-\w{5}) bui/i], [a, [c, "Xiaomi"], [l, f]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[c, g], [a, g], [l, f]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[l, f]], [/((pebble))app/i], [c, a, [l, "wearable"]], [/droid.+; (glass) \d/i], [a, [c, "Google"], [l, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [a, [c, "Zebra"], [l, "wearable"]], [/(quest( 2)?)/i], [a, [c, "Facebook"], [l, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [c, [l, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [a, [l, d]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [a, [l, p]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[l, p]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[l, d]], [/(android[-\w\. ]{0,9});.+buil/i], [a, [c, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [s, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [s, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [s, u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, s]],
                os: [[/microsoft (windows) (vista|xp)/i], [s, u], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [s, [u, y, w]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[s, "Windows"], [u, y, w]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [s, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[s, "Mac OS"], [u, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [u, s], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [s, u], [/\(bb(10);/i], [u, [s, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [u, [s, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [u, [s, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [s, "webOS"]], [/crkey\/([\d\.]+)/i], [u, [s, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[s, "Chromium OS"], u], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [s, u], [/(sunos) ?([\w\.\d]*)/i], [[s, "Solaris"], u], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [s, u]]
            }
              , T = function(e, t) {
                if ("object" == typeof e && (t = e,
                e = void 0),
                !(this instanceof T))
                    return new T(e,t).getResult();
                var n = e || (void 0 !== o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : "")
                  , r = t ? function(e, t) {
                    var n = {};
                    for (var r in e)
                        t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                    return n
                }(x, t) : x;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[s] = void 0,
                    t[u] = void 0,
                    b.call(t, n, r.browser),
                    t.major = "string" == typeof (e = t.version) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0,
                    t
                }
                ,
                this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return b.call(e, n, r.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return b.call(e, n, r.device),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return b.call(e, n, r.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return b.call(e, n, r.os),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(e) {
                    return n = "string" == typeof e && e.length > 350 ? g(e, 350) : e,
                    this
                }
                ,
                this.setUA(n),
                this
            };
            T.VERSION = "0.7.33",
            T.BROWSER = m([s, u, "major"]),
            T.CPU = m(["architecture"]),
            T.DEVICE = m([a, c, l, "console", d, f, p, "wearable", "embedded"]),
            T.ENGINE = T.OS = m([s, u]),
            void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = T),
            t.UAParser = T) : n("PDX0") ? void 0 === (r = function() {
                return T
            }
            .call(t, n, t, e)) || (e.exports = r) : void 0 !== o && (o.UAParser = T);
            var _ = void 0 !== o && (o.jQuery || o.Zepto);
            if (_ && !_.ua) {
                var k = new T;
                _.ua = k.getResult(),
                _.ua.get = function() {
                    return k.getUA()
                }
                ,
                _.ua.set = function(e) {
                    k.setUA(e);
                    var t = k.getResult();
                    for (var n in t)
                        _.ua[n] = t[n]
                }
            }
        }("object" == typeof window ? window : this)
    },
    LYNF: function(e, t, n) {
        "use strict";
        var r = n("OH9c");
        e.exports = function(e, t, n, o, i) {
            var a = new Error(e);
            return r(a, t, n, o, i)
        }
    },
    Lmem: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    },
    MLWZ: function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        function o(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var i;
            if (n)
                i = n(t);
            else if (r.isURLSearchParams(t))
                i = t.toString();
            else {
                var a = [];
                r.forEach(t, (function(e, t) {
                    null != e && (r.isArray(e) ? t += "[]" : e = [e],
                    r.forEach(e, (function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                        a.push(o(t) + "=" + o(e))
                    }
                    )))
                }
                )),
                i = a.join("&")
            }
            if (i) {
                var s = e.indexOf("#");
                -1 !== s && (e = e.slice(0, s)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    },
    Mo24: function(e) {
        e.exports = JSON.parse('{"ar":{"download_faster_and_more_conveniently":"قم بالتنزيل بشكل أسرع وأكثر راحة من خلال تطبيق الهاتف المحمول الخاص بنا!","close":"يغلق","install_app":"تثبيت التطبيق"},"de":{"download_faster_and_more_conveniently":"Schneller und bequemer herunterladen mit unserer mobilen App!","close":"schließen","install_app":"App installieren"},"en":{"download_faster_and_more_conveniently":"Download faster and more conveniently with our mobile app!","close":"close","install_app":"Install app"},"es":{"download_faster_and_more_conveniently":"¡Descargue más rápido y más convenientemente con nuestra aplicación móvil!","close":"cerca","install_app":"Instalar aplicación"},"fr":{"download_faster_and_more_conveniently":"Téléchargez plus rapidement et plus facilement avec notre application mobile !","close":"clore","install_app":"Installer l\'application"},"hi":{"download_faster_and_more_conveniently":"हमारे मोबाइल ऐप के साथ तेजी से और अधिक आसानी से डाउनलोड करें!","close":"बंद करना","install_app":"एप्लिकेशन इंस्टॉल करो"},"id":{"download_faster_and_more_conveniently":"Unduh lebih cepat dan lebih nyaman dengan aplikasi seluler kami!","close":"menutup","install_app":"Instal aplikasi"},"it":{"download_faster_and_more_conveniently":"Scarica più velocemente e più comodamente con la nostra app mobile!","close":"vicino","install_app":"Installa l\'applicazione"},"ja":{"download_faster_and_more_conveniently":"当社のモバイルアプリでより速く、より便利にダウンロードしてください!","close":"近い","install_app":"アプリをインストールする"},"ko":{"download_faster_and_more_conveniently":"모바일 앱으로 더 빠르고 편리하게 다운로드하세요!","close":"닫다","install_app":"앱 설치"},"pt":{"download_faster_and_more_conveniently":"Baixe mais rápido e de forma mais conveniente com nosso aplicativo móvel!","close":"fechar","install_app":"Instalar aplicativo"},"ru":{"download_faster_and_more_conveniently":"Скачивайте быстрее и удобнее с нашим мобильным приложением!","close":"закрыть","install_app":"Установить приложение"},"th":{"download_faster_and_more_conveniently":"ดาวน์โหลดได้เร็วและสะดวกยิ่งขึ้นด้วยแอพมือถือของเรา!","close":"ปิด","install_app":"ติดตั้งแอพ"},"tr":{"download_faster_and_more_conveniently":"Mobil uygulamamız ile daha hızlı ve daha kolay indirin!","close":"kapalı","install_app":"Uygulamayı yükle"},"vi":{"download_faster_and_more_conveniently":"Tải xuống nhanh hơn và thuận tiện hơn với ứng dụng di động của chúng tôi!","close":"đóng","install_app":"Cài đặt ứng dụng"}}')
    },
    Myda: function(e, t) {
        var n = document.getElementById("language-toggler")
          , r = document.getElementById("language-dropdown");
        if (r && n) {
            var o = function e() {
                r.classList.remove("show"),
                document.body.removeEventListener("click", e)
            };
            n.addEventListener("click", (function(e) {
                e.stopPropagation(),
                "rtl" === document.documentElement.getAttribute("dir") && r.classList.replace("dropdown-menu-right", "dropdown-menu-left"),
                r.classList.toggle("show"),
                document.body.addEventListener("click", o)
            }
            )),
            r.addEventListener("click", (function(e) {
                e.stopPropagation()
            }
            ))
        }
    },
    NQK6: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("/klw")
          , o = function(e) {
            if (!e)
                return "";
            var t = String(e).match(regularExpressions.host);
            return t ? t[1] : ""
        };
        window.outputStats = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                setTimeout((function() {
                    ga("create", "UA-156919089-56", "auto", "outputStats"),
                    r.a.sendOutputStats.on((function(e) {
                        var t = function(e) {
                            var t = e.category
                              , n = e.action
                              , r = e.label
                              , o = e.parameters;
                            ga("".concat("outputStats", ".send"), "event", t || "", n || "", r || "", o)
                        };
                        if (e) {
                            var n, r = 101 === e.hosting_id ? 101 : e.hosting || "?";
                            e.timeout ? t({
                                category: "failure",
                                action: r,
                                label: "timeout",
                                parameters: {
                                    dimension1: e.srv || ""
                                }
                            }) : null !== e.supported_resource ? e.blacklist ? t({
                                category: "failure",
                                action: r,
                                label: "blacklist",
                                parameters: {
                                    dimension1: e.srv || ""
                                }
                            }) : !1 !== e.success ? t({
                                category: "success",
                                action: r,
                                label: "true",
                                parameters: {
                                    dimension1: e.srv || ""
                                }
                            }) : t({
                                category: "failure",
                                action: r,
                                label: (n = o(e.source_url),
                                /^(.+\.)?(youtube\.com|youtu\.be)$/i.test(n) ? r : e.source_url),
                                parameters: {
                                    dimension1: e.srv || ""
                                }
                            }) : t({
                                category: "unsupported",
                                action: e.resource || e.source_url,
                                label: "true",
                                parameters: {
                                    dimension1: e.srv || ""
                                }
                            })
                        }
                    }
                    ))
                }
                ), 1e3)
            }
        }
    },
    OH9c: function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }
            ,
            e
        }
    },
    OTTw: function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r),
                r = n.href),
                n.setAttribute("href", r),
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
        }() : function() {
            return !0
        }
    },
    PDX0: function(e, t) {
        (function(t) {
            e.exports = t
        }
        ).call(this, {})
    },
    "Rn+g": function(e, t, n) {
        "use strict";
        var r = n("LYNF");
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    },
    SntB: function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        e.exports = function(e, t) {
            t = t || {};
            var n = {};
            function o(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
            }
            function i(n) {
                return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
            }
            function a(e) {
                if (!r.isUndefined(t[e]))
                    return o(void 0, t[e])
            }
            function s(n) {
                return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
            }
            function l(n) {
                return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
            }
            var c = {
                url: a,
                method: a,
                data: a,
                baseURL: s,
                transformRequest: s,
                transformResponse: s,
                paramsSerializer: s,
                timeout: s,
                timeoutMessage: s,
                withCredentials: s,
                adapter: s,
                responseType: s,
                xsrfCookieName: s,
                xsrfHeaderName: s,
                onUploadProgress: s,
                onDownloadProgress: s,
                decompress: s,
                maxContentLength: s,
                maxBodyLength: s,
                transport: s,
                httpAgent: s,
                httpsAgent: s,
                cancelToken: s,
                socketPath: s,
                responseEncoding: s,
                validateStatus: l
            };
            return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                var t = c[e] || i
                  , o = t(e);
                r.isUndefined(o) && t !== l || (n[e] = o)
            }
            )),
            n
        }
    },
    TXwZ: function(e) {
        e.exports = JSON.parse('{"tier1":["au","ca","gb","nz","us"],"tier2":["at","be","ch","cz","de","dk","es","fr","ie","it","nl","pt"],"cis":["az","am","by","kg","kz","md","ru","tj","ua","uz"]}')
    },
    URgk: function(e, t, n) {
        (function(e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window
              , o = Function.prototype.apply;
            function i(e, t) {
                this._id = e,
                this._clearFn = t
            }
            t.setTimeout = function() {
                return new i(o.call(setTimeout, r, arguments),clearTimeout)
            }
            ,
            t.setInterval = function() {
                return new i(o.call(setInterval, r, arguments),clearInterval)
            }
            ,
            t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }
            ,
            i.prototype.unref = i.prototype.ref = function() {}
            ,
            i.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }
            ,
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = t
            }
            ,
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = -1
            }
            ,
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                    e._onTimeout && e._onTimeout()
                }
                ), t))
            }
            ,
            n("YBdB"),
            t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }
        ).call(this, n("yLpj"))
    },
    UnBK: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = n("xAGQ")
          , i = n("Lmem")
          , a = n("JEQr")
          , s = n("endd");
        function l(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new s("canceled")
        }
        e.exports = function(e) {
            return l(e),
            e.headers = e.headers || {},
            e.data = o.call(e, e.data, e.headers, e.transformRequest),
            e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
            r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            }
            )),
            (e.adapter || a.adapter)(e).then((function(t) {
                return l(e),
                t.data = o.call(e, t.data, t.headers, e.transformResponse),
                t
            }
            ), (function(t) {
                return i(t) || (l(e),
                t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            }
            ))
        }
    },
    VIOF: function(e) {
        e.exports = JSON.parse('{"en":{"videoReady":"Your video is ready","downloadHiRes":"Download hi-res video or audio only?","downloadHDMP3":"Download HD or MP3","justDownloadBrowser":"Just let me download in my browser","withLowQuality":"with low quality","logoTelevzr":"Televzr logo","choosePeriod":"Choose a period to get full access to MP3 audio & HD video","Month1":"1 Month","needAdvanced":"If you need advanced downloading for a short time","Month6":"6 Months","bestBuy":"Best value: pay 33% less than for 1 month","Month12":"12 Months","OneTimeFee":"One-time fee","GoodDeal":"<span>Good deal! Check it out!</span><br> <button class=\'more-details-popup-open\'>more details</button>","DetailsTitle":"Details","DetailsText1":"Get MP3 and HD files for a one-time fee of $39.99.","DetailsText2":"This plan allows you to use the full functionality of Televzr during unlimited period of time*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*The Terms of Service are applied.</a>","get6month":"<b>Get <span class=\\"landingTz-btn-period-val\\">6 months</span></b> for &#36;<span class=\\"landingTz-btn-price-val\\">19.99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"<b>Subscribe now</b> for ${price} *","buyNowForPrice":"<b>Buy now</b> for ${price} *","recurringPayments1":"Recurring payment, billed monthly","recurringPayments6":"Recurring payment, billed semi-annually","recurringPayments12":"","thePriceDoesNotIncludeVAT":"The price does not include VAT","cardVisa":"Visa","cardMastercard":"Mastercard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Because it’s more than just downloading","plusesBlockIcon1":"headphones","plusesBlockTitle1":"Supports all formats, including MP3","plusesBlockText1":"Full HD, 4K, video as MP3, and even music","plusesBlockIcon2":"film","plusesBlockTitle2":"Simple tool for your personal collection","plusesBlockText2":"Downloader, organizer, and player","plusesBlockIcon3":"rocket","plusesBlockTitle3":"Great performance on bad connections","plusesBlockText3":"2X faster than a browser and resumes downloads","looksGood":"Looks good, get full access!","logoYoutube":"Youtube logo","logoTwitter":"Twitter logo","logoVimeo":"Vimeo logo","logoDailymotion":"Dailymotion logo","logoSoundcloud":"Soundcloud logo","logoFacebook":"Facebook logo","logoInstagram":"Instagram logo","agreeWithTelevzrTermsOfService":"I agree with  Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Terms of Service</a> ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/"},"ru":{"videoReady":"Ваше видео готово","downloadHiRes":"Скачать только видео или аудио в высоком разрешении?","downloadHDMP3":"Скачать HD или MP3","justDownloadBrowser":"Просто дайте мне скачать в моем браузере","withLowQuality":"с низким качеством","logoTelevzr":"Лого Телевзр","choosePeriod":"Выберите период, чтобы получить полный доступ к MP3-аудио и HD-видео","Month1":"1 месяц","needAdvanced":"Если вам нужна расширенная загрузка на короткое время","Month6":"6 месяцев","bestBuy":"Лучшая цена: платите на 33% меньше, чем за 1 месяц","Month12":"12 месяцев","OneTimeFee":"Единовременная плата","oneTimePurchase":"Единоразовая покупка","GoodDeal":"<span>Хорошая сделка! Проверьте!</span><br> <button class=\'more-details-popup-open\'>подробнее</button>","DetailsTitle":"Подробности","DetailsText1":"Получите файлы MP3 и HD за единовременную плату в размере 39,99 долларов США.","DetailsText2":"Этот тариф позволяет использовать полный функционал Televzr в течение неограниченного периода времени*.","DetailsTextLink":"<a href=\\"https://televzr.com/offer-ru\\" target=\\"_blank\\">*Применяются Условия предоставления услуг.</a>","get6month":"<b>Получите <span class=\\"landingTz-btn-period-val\\">6 месяцев</span></b> на &#36;<span class=\\"landingTz-btn- price-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"<b>Подпишитесь сейчас</b> за ${price} *","buyNowForPrice":"<b>Купить сейчас</b> за ${price} *","recurringPayments1":"Рекуррентный платеж, выставляется ежемесячно","recurringPayments6":"Рекуррентный платеж, выставляется раз в полгода","recurringPayments12":"","thePriceDoesNotIncludeVAT":"Цена не включает НДС","cardVisa":"Виза","cardMastercard":"Мастеркард","cardMir":"Мир","moreThanDownloading":"Потому что это больше, чем просто скачивание","plusesBlockIcon1":"наушники","plusesBlockTitle1":"Поддерживает все форматы, включая MP3","plusesBlockText1":"Full HD, 4K, видео в формате MP3 и даже музыка","plusesBlockIcon2":"фильм","plusesBlockTitle2":"Простой инструмент для вашей личной коллекции","plusesBlockText2":"Загрузчик, органайзер и проигрыватель","plusesBlockIcon3":"ракета","plusesBlockTitle3":"Отличная производительность при плохом соединении","plusesBlockText3":"В 2 раза быстрее, чем в браузере, и возобновляет загрузку","looksGood":"Выглядит хорошо, получи полный доступ!","logoYoutube":"Лого YouTube","logoTwitter":"Логотип Твиттера","logoVimeo":"Лого Vimeo","logoDailymotion":"Логотип Dailymotion","logoSoundcloud":"Логотип Soundcloud","logoFacebook":"Логотип Facebook","logoInstagram":"Логотип Instagram","chooseQualityJPGMP3":"Нажмите скачать","chooseQualityGetALLink":"Получить ссылку и скачать","downloadJPG":"Скачать JPG","downloadMP3":"Скачать MP3","getALLink":"Получить ссылку","downloadBtnAfter":"СЕЙЧАС","agreeWithTelevzrTermsOfService":"Я даю согласие на регулярные списания, на обработку персональных данных и принимаю условия <a href=\\"https://televzr.com/offer-ru\\" target=\\"_blank\\">публичной оферты</a>","price1":"499р","price6":"1999р","priceLifetime":"3999р","websiteTelevzr":"https://televzr.com/"},"de":{"videoReady":"Ihr Video ist fertig","downloadHiRes":"Hochauflösendes Video oder nur Audio herunterladen?","downloadHDMP3":"HD oder MP3 herunterladen","justDownloadBrowser":"Im Browser herunterladen","withLowQuality":"mit geringer Qualität","logoTelevzr":"Televzr-Logo","choosePeriod":"Zeitraum auswählen, um vollständigen Zugriff auf MP3-Audio & HD-Video zu bekommen","Month1":"1 Monat","needAdvanced":"Wenn Sie für kurze Zeit erweiterte Downloads benötigen","Month6":"6 Monate","bestBuy":"Bestpreis: 33 % weniger bezahlen als bei 1 Monat","Month12":"12 Monate","OneTimeFee":"Einmalige Gebühr","GoodDeal":"<span>Gutes Angebot! Jetzt anschauen!</span><br> <button class=\'more-details-popup-open\'>Weitere Einzelheiten</button>","DetailsTitle":"Einzelheiten","DetailsText1":"Holen Sie sich MP3- und HD-Dateien für eine einmalige Gebühr von 39,99 USD.","DetailsText2":"Mit diesem Abonnement können Sie die volle Funktionalität von Televzr in einem unbegrenzten Zeitraum nutzen*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*Es gelten die Nutzungsbedingungen.</a>","get6month":"<b>Holen Sie sich <span class=\\"landingTz-btn-period-val\\">6 Monate</span></b> für <span class=\\"landingTz-btn-price-val\\">19,99</span> &#36;<span class=\\"landingTz-btn-price-star\\"> *</span>","recurringPayments1":"Wiederkehrende Zahlung, monatliche Abrechnung","recurringPayments6":"Wiederkehrende Zahlung, halbjährliche Abrechnung","recurringPayments12":"","cardVisa":"Visa","cardMastercard":"Mastercard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Weil es mehr als nur Herunterladen ist","plusesBlockIcon1":"Kopfhörer","plusesBlockTitle1":"Unterstützt alle Formate, einschl. MP3","plusesBlockText1":"Full HD, 4K, Video als MP3 und sogar Musik","plusesBlockIcon2":"Film","plusesBlockTitle2":"Einfaches Tool für Ihre persönliche Sammlung","plusesBlockText2":"Downloader, Organizer und Player","plusesBlockIcon3":"Rakete","plusesBlockTitle3":"Tolle Leistungen bei schlechten Verbindungen","plusesBlockText3":"Doppelt so schnell wie ein Browser, setzt Downloads fort","looksGood":"Sieht gut aus, holen Sie sich Vollzugriff!","logoYoutube":"YouTube-Logo","logoTwitter":"Twitter-Logo","logoVimeo":"Vimeo-Logo","logoDailymotion":"Dailymotion-Logo","logoSoundcloud":"Soundcloud-Logo","logoFacebook":"Facebook-Logo","logoInstagram":"Instagram-Logo","chooseQualityJPGMP3":"Herunterladen klicken","chooseQualityGetALink":"Link holen und herunterladen","downloadJPG":"JPG herunterladen","downloadMP3":"MP3 herunterladen","getALink":"Link holen","downloadBtnAfter":" JETZT","agreeWithTelevzrTermsOfService":"I agree with  Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Terms of Service</a> ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/de/"},"es":{"videoReady":"Su video está listo","downloadHiRes":"¿Solo descargar audio o video HD?","downloadHDMP3":"Descargar HD o MP3","justDownloadBrowser":"Solo quiero descargar en mi navegador","withLowQuality":"con baja calidad","logoTelevzr":"Logo de Televzr","choosePeriod":"Elija un período para acceder a audio MP3 y video HD","Month1":"1 Mes","needAdvanced":"Si necesita descargas avanzadas por poco tiempo","Month6":"6 Meses","bestBuy":"Mejor valor: pague 33% menos que por 1 mes","Month12":"12 Meses","OneTimeFee":"Tarifa por única vez","GoodDeal":"<span>¡Oferta especial! ¡Échale un vistazo!</span><br> <button class=\'more-details-popup-open\'>Más detalles</button>","DetailsTitle":"Detalles","DetailsText1":"Obtenga archivos MP3 y HD pagando $ 39,99 por única vez.","DetailsText2":"Este plan le permite usar la funcionalidad completa de Televzr durante un período de tiempo ilimitado*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*Aplican los Términos de servicio.</a>","get6month":"<b>Obtenga <span class=\\"landingTz-btn-period-val\\">6 meses</span></b> por &#36;<span class=\\"landingTz-btn-price-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","recurringPayments1":"Pago recurrente, facturado mensualmente","recurringPayments6":"Pago recurrente, facturado semestralmente","recurringPayments12":"","cardVisa":"Visa","cardMastercard":"Mastercard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Porque es mucho más que solo descargar","plusesBlockIcon1":"auriculares","plusesBlockTitle1":"Admite cualquier formato, incluso MP3","plusesBlockText1":"Full HD, 4K, video como MP3 y hasta música","plusesBlockIcon2":"película","plusesBlockTitle2":"Herramienta fácil para su colección personal","plusesBlockText2":"Descargador, organizador y reproductor","plusesBlockIcon3":"cohete","plusesBlockTitle3":"Excelente desempeño con malas conexiones","plusesBlockText3":"2X más rápido que un navegador y reanuda descargas","looksGood":"¡Se ve bien, obtener acceso total!","logoYoutube":"Logo de Youtube","logoTwitter":"Logo de Twitter","logoVimeo":"Logo de Vimeo","logoDailymotion":"Logo de Dailymotion","logoSoundcloud":"Logo de Soundcloud","logoFacebook":"Logo de Facebook","logoInstagram":"Logo de Instagram","chooseQualityJPGMP3":"Haga clic en descargar","chooseQualityGetALink":"Obtenga un enlace y descárguelo","downloadJPG":"Descargar JPG","downloadMP3":"Descargar MP3","getALink":"Obtenga un enlace","downloadBtnAfter":" AHORA","agreeWithTelevzrTermsOfService":"I agree with  Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Terms of Service</a> ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/es/"},"fr":{"videoReady":"Votre vidéo est prête","downloadHiRes":"Télécharger uniquement vidéo ou audio HD ?","downloadHDMP3":"Télécharger HD ou MP3","justDownloadBrowser":"Simplement télécharger dans mon navigateur","withLowQuality":"avec faible qualité","logoTelevzr":"Logo Televzr","choosePeriod":"Choisissez une période pour l\'accès complet à l\'audio MP3 et la vidéo HD","Month1":"1 Mois","needAdvanced":"Téléchargement avancé pour une courte période","Month6":"6 Mois","bestBuy":"Meilleur offre : payez 33% de moins que pour 1 mois","Month12":"12 Mois","OneTimeFee":"Paiement unique","GoodDeal":"<span>Super offre ! À ne pas manquer !</span><br> <button class=\'more-details-popup-open\'>Plus de détails</button>","DetailsTitle":"Détails","DetailsText1":"Obtenez des fichiers MP3 et HD pour un paiement unique de 39,99 $.","DetailsText2":"Cet abonnement vous permet d\'utiliser toutes les fonctionnalités de Televzr pendant une durée illimitée *.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">* Les conditions d\'utilisation sont d\'application.</a>","get6month":"<b>Obtenez <span class=\\"landingTz-btn-period-val\\">6 mois</span></b> pour &#36; <span class=\\"landingTz-btn-price-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","recurringPayments1":"Paiement récurrent, facturé mensuellement","recurringPayments6":"Paiement récurrent, facturé semestriellement","recurringPayments12":"","cardVisa":"Visa","cardMastercard":"MasterCard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Parce que c\'est plus qu\'un simple téléchargement","plusesBlockIcon1":"écouteurs","plusesBlockTitle1":"Prend en charge tous les formats, y compris MP3","plusesBlockText1":"Full HD, 4K, vidéo au format MP3 et même de la musique","plusesBlockIcon2":"film","plusesBlockTitle2":"Outil simple pour votre collection personnelle","plusesBlockText2":"Téléchargeur, organiseur et lecteur","plusesBlockIcon3":"fusée","plusesBlockTitle3":"Haute performance sur les mauvaises connexions","plusesBlockText3":"2 fois plus rapide qu\'un navigateur et reprend les téléchargements","looksGood":"Ça me semble bien, je veux l\'accès complet !","logoYoutube":"Logo Youtube","logoTwitter":"Logo Twitter","logoVimeo":"Logo Vimeo","logoDailymotion":"Logo Dailymotion","logoSoundcloud":"Logo Soundcloud","logoFacebook":"Logo Facebook","logoInstagram":"Logo Instagram","chooseQualityJPGMP3":"Cliquez sur télécharger","chooseQualityGetALink":"Obtenez un lien et téléchargez","downloadJPG":"Télécharger JPG","downloadMP3":"Télécharger MP3","getALink":"Obtenez un lien","downloadBtnAfter":" MAINTENANT","agreeWithTelevzrTermsOfService":"I agree with  Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Terms of Service</a> ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/fr/"},"pt":{"videoReady":"Votre video est prête","downloadHiRes":"Télécharger uniquement video ou audio HD ?","downloadHDMP3":"Carregar HD ou MP3","justDownloadBrowser":"Simplemente o carregador em meu navegador","withLowQuality":"avec faible qualité","logoTelevzr":"Logo Televzr","choosePeriod":"Escolha um período para o acesso completo ao áudio MP3 e ao vídeo HD","Month1":"1 Mois","needAdvanced":"Téléchargement avancé pour une courte periode","Month6":"6 meses","bestBuy":"Meilleur offre : payez 33% of moins que pour 1 mois","Month12":"12 Mois","OneTimeFee":"Pagamento único","GoodDeal":"<span>Super off ! À ne pas manquer !</span><br> <button class=\'more-details-popup-open\'>Mais de detalhes</button>","DetailsTitle":"Detalhes","DetailsText1":"Obtenha arquivos MP3 e HD para um pagamento único de 39,99 $.","DetailsText2":"Cet abonnement vous permet d\'utiliser toutes les fonctionnalités de Televzr pendant une durée illimitée *.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">* Les conditions d\'utilisation sont d\'application.</a>","get6month":"<b>Obtenha <span class=\\"landingTz-btn-period-val\\">6 meses</span></b> para &#36; <span class=\\"landingTz-btn- price-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","recurringPayments1":"Paiment récurrent, facturé mensuellement","recurringPayments6":"Pagamento recorrente, facturado semestral","recurringPayments12":"","cardVisa":"Visa","cardMastercard":"MasterCard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Parce que c\'est plus qu\'un simple téléchargement","plusesBlockIcon1":"écouteurs","plusesBlockTitle1":"Prende todos os formatos e inclui MP3","plusesBlockText1":"Full HD, 4K, vídeo no formato MP3 e meme da música","plusesBlockIcon2":"filme","plusesBlockTitle2":"Outil simple pour votre collection personalle","plusesBlockText2":"Télécarregador, organizador e conferencista","plusesBlockIcon3":"fused","plusesBlockTitle3":"Haute performance sur les mauvaises connexions","plusesBlockText3":"2 fois plus rapide qu\'un navigation et reprend les téléchargements","looksGood":"Ça me semble bien, je veux l\'accès complet !","logoYoutube":"Logo Youtube","logoTwitter":"Logo Twitter","logoVimeo":"Logo Vimeo","logoDailymotion":"Logo Dailymotion","logoSoundcloud":"Logo Soundcloud","logoFacebook":"Logo Facebook","logoInstagram":"Logo Instagram","chooseQualityJPGMP3":"Clique para carregar","chooseQualityGetALink":"Obtenez un lien et téléchargez","downloadJPG":"Carregar JPG","downloadMP3":"Carregar MP3","getALink":"Obtenha uma garantia","downloadBtnAfter":" MANUTENÇÃO","agreeWithTelevzrTermsOfService":"Concordo com os <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Termos de Serviço</a> da Televzr","price1":"$4,99","price6":"$19,99","priceLifetime":"$ 39,99","websiteTelevzr":"https://televzr.com/fr/"},"nl":{"videoReady":"Je video is klaar","downloadHiRes":"Alleen hi-res video of audio downloaden?","downloadHDMP3":"HD of MP3 downloaden","justDownloadBrowser":"Laat me gewoon downloaden in mijn browser","withLowQuality":"met lage kwaliteit","logoTelevzr":"Televzr-logo","choosePeriod":"Kies een periode om volledige toegang te krijgen tot MP3-audio en HD-video","Month1":"1 Maand","needAdvanced":"Als u voor korte tijd geavanceerd wilt downloaden","Month6":"6 Maanden","bestBuy":"Beste waarde: betaal 33% minder dan voor 1 maand","Month12":"12 Maanden","OneTimeFee":"Eenmalige vergoeding","GoodDeal":"<span>Goede deal! Bekijk het!</span><br> <button class=\'more-details-popup-open\'>meer details</button>","DetailsTitel":"Details","DetailsText1":"Ontvang MP3- en HD-bestanden voor een eenmalig bedrag van $39,99.","DetailsText2":"Met dit abonnement kunt u onbeperkt gebruik maken van de volledige functionaliteit van Televzr*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*De Servicevoorwaarden zijn van toepassing.</a>","get6month":"<b>Ontvang <span class=\\"landingTz-btn-period-val\\">6 maanden</span></b> voor &#36;<span class=\\"landingTz-btn- price-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"<b>Abonneer u nu</b> voor ${price} *","buyNowForPrice":"<b>Koop nu</b> voor ${price} *","recurringPayments1":"Terugkerende betaling, maandelijks gefactureerd","recurringPayments6":"Terugkerende betaling, halfjaarlijks gefactureerd","recurringPayments12":"","thePriceDoesNotIncludeVAT":"De prijs is exclusief btw","cardVisa":"Visa","cardMastercard":"Mastercard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Omdat het meer is dan alleen downloaden","plusesBlockIcon1":"koptelefoon","plusesBlockTitle1":"Ondersteunt alle formaten, inclusief MP3","plusesBlockText1":"Full HD, 4K, video als MP3 en zelfs muziek","plusesBlockIcon2":"film","plusesBlockTitle2":"Eenvoudig hulpmiddel voor uw persoonlijke verzameling","plusesBlockText2":"Downloader, organisator en speler","plusesBlockIcon3":"raket","plusesBlockTitle3":"Geweldige prestaties bij slechte verbindingen","plusesBlockText3":"2x sneller dan een browser en hervat downloads","looksGood":"Ziet er goed uit, krijg volledige toegang!","logoYoutube":"Youtube-logo","logoTwitter":"Twitter-logo","logoVimeo":"Vimeo-logo","logoDailymotion":"Dailymotion-logo","logoSoundcloud":"Soundcloud-logo","logoFacebook":"Facebook-logo","logoInstagram":"Instagram-logo","agreeWithTelevzrTermsOfService":"Ik ga akkoord met Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Servicevoorwaarden</a> ","price1":"$4,99","price6":"$19,99","priceLifetime":"$39,99","websiteTelevzr":"https://televzr.com/"},"it":{"videoReady":"Il tuo video è pronto","downloadHiRes":"Scarica solo video o audio ad alta risoluzione?","downloadHDMP3":"Scarica HD o MP3","justDownloadBrowser":"Fammi scaricare nel mio browser","withLowQuality":"con bassa qualità","logoTelevzr":"Logo Televzr","choosePeriod":"Scegli un periodo per avere pieno accesso all\'audio MP3 e al video HD","Month1":"1 mese","needAdvanced":"Se hai bisogno di un download avanzato per un breve periodo","Month6":"6 Mesi","bestBuy":"Miglior rapporto qualità-prezzo: paghi il 33% in meno rispetto a 1 mese","Month12":"12 Mesi","OneTimeFee":"Tariffa una tantum","GoodDeal":"<span>Buon affare! Dai un\'occhiata!</span><br> <button class=\'more-details-popup-open\'>maggiori dettagli</button>","DetailsTitle":"Dettagli","DetailsText1":"Ottieni file MP3 e HD a un costo una tantum di $ 39,99.","DetailsText2":"Questo piano ti consente di utilizzare tutte le funzionalità di Televzr per un periodo di tempo illimitato*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*I Termini di servizio vengono applicati.</a>","get6month":"<b>Ottieni <span class=\\"landingTz-btn-period-val\\">6 mesi</span></b> per &#36;<span class=\\"landingTz-btn- prezzo-val\\">19,99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"<b>Abbonati ora</b> per ${price} *","buyNowForPrice":"<b>Compra ora</b> per ${price} *","recurringPayments1":"Pagamento ricorrente, fatturato mensilmente","recurringPayments6":"Pagamento ricorrente, con fatturazione semestrale","RecurringPayments12":"","thePriceDoesNotIncludeVAT":"Il prezzo non include l\'IVA","cardVisa":"Visa","cardMastercard":"Mastercard","cardPayPal":"PayPal","cardAmericanExpress":"American Express","moreThanDownloading":"Perché è più di un semplice download","plusesBlockIcon1":"cuffie","plusesBlockTitle1":"Supporta tutti i formati, incluso MP3","plusesBlockText1":"Full HD, 4K, video come MP3 e persino musica","plusesBlockIcon2":"film","plusesBlockTitle2":"Strumento semplice per la tua collezione personale","plusesBlockText2":"Downloader, organizzatore e lettore","plusesBlockIcon3":"razzo","plusesBlockTitle3":"Grandi prestazioni su cattive connessioni","plusesBlockText3":"2 volte più veloce di un browser e riprende i download","looksGood":"Sembra buono, ottieni l\'accesso completo!","logoYoutube":"Logo Youtube","logoTwitter":"Logo Twitter","logoVimeo":"Logo Vimeo","logoDailymotion":"Logo Dailymotion","logoSoundcloud":"Logo Soundcloud","logoFacebook":"Logo Facebook","logoInstagram":"Logo Instagram","agreeWithTelevzrTermsOfService":"Sono d\'accordo con Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">Termini di servizio</a>","price1":"$4,99","price6":"$ 19,99","priceLifetime":"$ 39,99","websiteTelevzr":"https://televzr.com/"},"ko":{"videoReady":"비디오가 준비되었습니다","downloadHiRes":"고해상도 비디오 또는 오디오만 다운로드하시겠습니까?","downloadHDMP3":"HD 또는 MP3 다운로드","justDownloadBrowser":"내 브라우저에서 다운로드하도록 허용","withLowQuality":"낮은 품질","logoTelevzr":"Televzr 로고","choosePeriod":"MP3 오디오 및 HD 비디오에 대한 전체 액세스 권한을 얻으려면 기간 선택","Month1":"1개월","needAdvanced":"단시간에 고급 다운로드가 필요한 경우","Month6":"6개월","bestBuy":"최상의 가치: 1개월 동안보다 33% 저렴하게 지불","Month12":"12개월","OneTimeFee":"일회성 요금","GoodDeal":"<span>좋은 거래입니다! 확인해 보세요!</span><br> <button class=\'more-details-popup-open\'>자세한 내용</button>","DetailTitle":"세부 정보","DetailsText1":"39.99달러의 일회성 요금으로 MP3 및 HD 파일을 받으세요.","DetailsText2":"이 계획을 사용하면 Televzr의 전체 기능을 기간 제한 없이 사용할 수 있습니다*.","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*서비스 약관이 적용됩니다.</a>","get6month":"<b>&#36;<span class=\\"landingTz-btn- 동안 <span class=\\"landingTz-btn-period-val\\">6개월</span></b> 받기 price-val\\">19.99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"${price} *에 대한 <b>지금 구독</b>","buyNowForPrice":"${price} *에 대한 <b>지금 구매</b>","recurringPayments1":"반복 결제, 매월 청구됨","recurringPayments6":"반기마다 청구되는 반복 지불","recurringPayments12":"","thePriceDoesNotIncludeVAT":"가격에 VAT가 포함되어 있지 않습니다.","cardVisa":"비자","cardMastercard":"마스터카드","cardPayPal":"PayPal","cardAmericanExpress":"아메리칸 익스프레스","moreThanDownloading":"단순한 다운로드 이상이기 때문에","plusesBlockIcon1":"헤드폰","plusesBlockTitle1":"MP3를 포함한 모든 형식 지원","plusesBlockText1":"Full HD, 4K, MP3로 비디오, 음악까지","plusesBlockIcon2":"영화","plusesBlockTitle2":"개인 컬렉션을 위한 간단한 도구","plusesBlockText2":"다운로더, 주최자 및 플레이어","plusesBlockIcon3":"로켓","plusesBlockTitle3":"잘못된 연결에서 뛰어난 성능","plusesBlockText3":"브라우저보다 2배 빠르고 다운로드 재개","looksGood":"좋아 보입니다. 전체 액세스 권한을 얻으세요!","logoYoutube":"YouTube 로고","logoTwitter":"트위터 로고","logoVimeo":"Vimeo 로고","logoDailymotion":"Dailymotion 로고","logoSoundcloud":"사운드클라우드 로고","logoFacebook":"페이스북 로고","logoInstagram":"인스타그램 로고","agreeWithTelevzrTermsOfService":"Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">서비스 약관</a>에 동의합니다. ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/"},"ja":{"videoReady":"ビデオの準備ができました","downloadHiRes":"高解像度ビデオまたはオーディオのみをダウンロードしますか?","downloadHDMP3":"HD または MP3 をダウンロード","justDownloadBrowser":"ブラウザでダウンロードさせてください","withLowQuality":"低品質","logoTelevzr":"Televzr ロゴ","choosePeriod":"期間を選択すると、MP3 オーディオと HD ビデオに完全にアクセスできます","Month1":"1ヶ月","needAdvanced":"短時間の高度なダウンロードが必要な場合","Month6":"6 か月","bestBuy":"ベストバリュー: 1 か月分よりも 33% 安い","Month12":"12ヶ月","OneTimeFee":"1回限りの料金","GoodDeal":"<span>お買い得です!チェックしてください!</span><br><button class=\'more-details-popup-open\'>詳細</button>","DetailsTitle":"詳細","DetailsText1":"1 回限りの料金 $39.99 で MP3 および HD ファイルを入手できます。","DetailsText2":"このプランでは、無期限で Televzr のすべての機能を使用できます*。","DetailsTextLink":"<a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">*利用規約が適用されます</a>","get6month":"&#36;<span class=\\"landingTz-btn-の<b><span class=\\"landingTz-btn-period-val\\">6か月</span></b>を取得price-val\\">19.99</span><span class=\\"landingTz-btn-price-star\\"> *</span>","subscribeNowForPrice":"<b>今すぐ購読</b> ${price} *","buyNowForPrice":"<b>今すぐ購入</b> ${price} *","recurringPayments1":"定期支払い、毎月請求","recurringPayments6":"定期支払い、半年ごとに請求","recurringPayments12":"","thePriceDoesNotIncludeVAT":"価格には VAT は含まれていません","cardVisa":"ビザ","cardMastercard":"マスターカード","cardPayPal":"PayPal","cardAmericanExpress":"アメリカン・エキスプレス","moreThanDownloading":"単にダウンロードするだけではないため","plusesBlockIcon1":"ヘッドフォン","plusesBlockTitle1":"MP3 を含むすべての形式をサポート","plusesBlockText1":"フル HD、4K、MP3 のビデオ、さらには音楽","plusesBlockIcon2":"フィルム","plusesBlockTitle2":"あなたの個人的なコレクションのためのシンプルなツール","plusesBlockText2":"ダウンローダー、オーガナイザー、およびプレーヤー","plusesBlockIcon3":"ロケット","plusesBlockTitle3":"接続不良時の優れたパフォーマンス","plusesBlockText3":"ブラウザより 2 倍速く、ダウンロードを再開します","looksGood":"良さそうです。フルアクセスを取得してください!","logoYoutube":"Youtube ロゴ","logoTwitter":"Twitterのロゴ","logoVimeo":"Vimeo ロゴ","logoDailymotion":"Dailymotion ロゴ","logoSoundcloud":"Soundcloud ロゴ","logoFacebook":"Facebookのロゴ","logoInstagram":"Instagram ロゴ","agreeWithTelevzrTermsOfService":"Televzr <a href=\\"https://televzr.com/terms.html\\" target=\\"_blank\\">利用規約</a>に同意します ","price1":"$4.99","price6":"$19.99","priceLifetime":"$39.99","websiteTelevzr":"https://televzr.com/"}}')
    },
    VQ4g: function(e, t, n) {
        "use strict";
        var r = n("o0o1")
          , o = n.n(r)
          , i = n("C35p");
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function s(e) {
            return "string" == typeof e
        }
        var l = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.arr = []
            }
            var t, n, r;
            return t = e,
            (n = [{
                key: "has",
                value: function(e) {
                    if ("Array" !== e.constructor.name)
                        return !1;
                    for (var t = 0; t < e.length; t++) {
                        if (!1 === s(e[t]))
                            return !1;
                        if (-1 !== this.arr.indexOf(e[t]))
                            return !0
                    }
                    return !1
                }
            }, {
                key: "add",
                value: function(e) {
                    return !1 !== s(e) && (!1 === this.has([e]) && this.arr.push(e),
                    !0)
                }
            }, {
                key: "remove",
                value: function(e) {
                    if (!1 === s(e))
                        return !1;
                    var t = this.arr.indexOf(e);
                    return -1 !== t && (this.arr.splice(t, 1),
                    !0)
                }
            }]) && a(t.prototype, n),
            r && a(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function c(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o)
        }
        function u(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        c(i, r, o, a, s, "next", e)
                    }
                    function s(e) {
                        c(i, r, o, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var d = n("s4NR")
          , p = n("K4CH")
          , f = {
            lang: document.documentElement.lang,
            isRtlLanguage: !1,
            cookieDomain: "",
            country: "",
            query: d.parse(location.search.substr(1)),
            hash: d.parse(location.hash.substr(1)),
            channel: [],
            countryTier: n("TXwZ"),
            gaTrackers: {}
        };
        window.envProps = f;
        var m = document.querySelector('script[data-type="env-props"]');
        if (m) {
            m.parentNode.removeChild(m);
            try {
                var h = JSON.parse(m.textContent);
                Object.assign(f, h)
            } catch (e) {}
        }
        var v = f.uaParser = new p;
        function g() {
            return (g = u(o.a.mark((function e() {
                var t, n;
                return o.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = localStorage.getItem("lastCheckUpdate"),
                            !(f.country && t && y(t) <= 3)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            w();
                        case 5:
                            (n = e.sent) && (f.country = n.toLowerCase(),
                            localStorage.setItem("country", f.country),
                            localStorage.setItem("lastCheckUpdate", Date.now())),
                            b(f.country || "");
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function b(e) {
            var t = new CustomEvent("getGeo",{
                detail: {
                    countryCode: e
                }
            });
            document.dispatchEvent(t)
        }
        function y(e) {
            return Math.floor((Date.now() - e) / 864e5)
        }
        function w() {
            return x.apply(this, arguments)
        }
        function x() {
            return (x = u(o.a.mark((function e() {
                var t, n;
                return o.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            axios.get("/get_country_code");
                        case 3:
                            return t = e.sent,
                            n = t.data,
                            e.abrupt("return", n);
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(0),
                            console.error("fetchCountryCode error: ", e.t0);
                        case 11:
                            return e.abrupt("return", "");
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            )))).apply(this, arguments)
        }
        f.ua = v.getUA(),
        f.browser = v.getBrowser(),
        f.device = v.getDevice(),
        f.os = v.getOS(),
        f.country = f.country || i.a.get("country"),
        f.country || (f.country = localStorage.getItem("country")),
        function() {
            g.apply(this, arguments)
        }(),
        f.countryTierName = function() {
            if (!f.country || !f.countryTier)
                return "";
            for (var e in f.countryTier)
                if (f.countryTier.hasOwnProperty(e) && f.countryTier[e].indexOf(f.country) > -1)
                    return e;
            return ""
        }(),
        f.extraExperiments = new l(0),
        function() {
            !f.device.type && f.os.name && ["Android", "Bada", "BlackBerry", "Firefox OS", "iOS", "MeeGo", "Sailfish", "Series40", "Symbian", "Tizen", "WebOS", "Windows Phone"].indexOf(f.os.name) > -1 && (f.device.type = "mobile");
            f.device.type && ("tablet" === f.device.type ? (f.mobile = !0,
            document.documentElement.classList.add("tablet")) : "mobile" === f.device.type || "wearable" === f.device.type ? (f.mobile = !0,
            document.documentElement.classList.add("mobile")) : f.mobile = !1);
            if (f.mobile) {
                f.browser.inApp = !1,
                f.browser.name && -1 === ["Android Browser", "Chrome", "Chrome Mobile", "Chrome Mobile iOS", "Edge Mobile", "IE Mobile", "Fennec", "Firefox", "Firefox Mobile", "Opera", "Opera Mobile", "Opera Mini", "Safari", "Mobile Safari", "UCBrowser", "UC Browser", "Yandex", "Yandex Browser"].indexOf(f.browser.name) && (f.browser.inApp = !0)
            }
        }(),
        f.stats = {
            uid: "",
            basicMetricsTracking: {}
        },
        f.stats.uid = i.a.get("uid"),
        f.stats.uid || (f.stats.uid = function() {
            var e, t = "0123456789abcdef".split(""), n = [];
            for (e = 0; e < 16; e++)
                n[e] = t[0 | 16 * Math.random()];
            return n.join("")
        }(),
        i.a.set("uid", f.stats.uid, 3650, f.cookieDomain));
        t.a = f
    },
    WBlj: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("VQ4g")
          , o = n("C35p");
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        var a = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                t ? (this.options = t,
                this.expValue = this._getCookieValue(),
                "" === this.expValue && (this.expValue = this._getRandom(),
                this._setCookie())) : console && console.error("no Experiment options")
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "getValue",
                value: function() {
                    return this.expValue
                }
            }, {
                key: "_setCookie",
                value: function() {
                    var e = this.options.name;
                    !e && window.debug && window.console && window.console.error("Experiment can`t set cookie, because options not is set the name"),
                    o.a.set(e, this.expValue.toString(), 30, r.a.cookieDomain)
                }
            }, {
                key: "_getCookieValue",
                value: function() {
                    var e = o.a.get(this.options.name);
                    return "" === e ? e : (e = parseInt(e),
                    isNaN(e) ? "" : e)
                }
            }, {
                key: "_getRandom",
                value: function() {
                    return Math.floor(100 * Math.random()) + 1
                }
            }]) && i(t.prototype, n),
            a && i(t, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var l = {
            extraDefaultChannel: ["main"],
            exclude: {},
            excludeExtra: {},
            excludeDir: {},
            complete: !1,
            allowedExperiments: null,
            gaStats: {
                id: "",
                sampleRate: 5,
                tracker: "expStats",
                eventCategory: "experiment"
            },
            init: function() {
                this.config = n("BcD8").default,
                this.configExtra = n("dw3g").default,
                this.gaStats.id && (r.a.gaTrackers[this.gaStats.tracker] = {
                    id: this.gaStats.id,
                    sendPageview: !1,
                    parameters: {
                        sampleRate: this.gaStats.sampleRate
                    }
                },
                ga(this.gaStats.tracker + ".set", {
                    dimension1: r.a.country || "",
                    dimension2: r.a.lang,
                    dimension3: r.a.os.name || "",
                    dimension4: r.a.browser.name || "",
                    dimension5: r.a.mobile ? "true" : "false",
                    dimension6: r.a.channel.join(",")
                }),
                this.sendStats("init")),
                this.run(),
                this.runExtraIndependent()
            },
            run: function() {
                if (this.config) {
                    var e = this.chooseExp();
                    if (e)
                        return r.a.debug && (console.log("---------"),
                        console.log("Active global experiment: ", e),
                        console.log("---------")),
                        void this.runExp(e);
                    this.complete = !0,
                    this.runExtra()
                }
            },
            runExtraIndependent: function() {
                if (this.configExtra)
                    for (var e in this.configExtra)
                        if (!this.excludeExtra[e] && this.isExpAllowed(e)) {
                            var t = this.configExtra[e];
                            t._name = e,
                            t.channel = t.channel || this.extraDefaultChannel,
                            t.independent && (this.excludeExtra[e] = !0,
                            this.checkExp(t, !0) && this.runExtraExp(t))
                        }
            },
            runExtra: function(e) {
                if (this.configExtra && this.complete && !this.extraStarted)
                    for (var t in this.extraStarted = !0,
                    this.configExtra)
                        if (!this.excludeExtra[t] && this.isExpAllowed(t)) {
                            var n = this.configExtra[t];
                            n._name = t,
                            n.channel = n.channel || this.extraDefaultChannel,
                            n.independent || (this.excludeExtra[t] = !0,
                            this.checkExp(n, !0) && this.runExtraExp(n))
                        }
            },
            isExpAllowed: function(e) {
                return !(this.allowedExperiments && !this.allowedExperiments[e])
            },
            chooseExp: function() {
                if (!this.config)
                    return "";
                for (var e in this.config)
                    if (!this.exclude[e] && this.isExpAllowed(e)) {
                        if (this.checkExp(this.config[e]))
                            return e;
                        this.exclude[e] = !0
                    }
                return ""
            },
            checkChannel: function(e) {
                if (!(e && e.length && r.a.channel && r.a.channel.length))
                    return !0;
                for (var t = 0, n = e.length; t < n; t++)
                    for (var o = 0, i = r.a.channel.length; o < i; o++)
                        if (e[t] === r.a.channel[o])
                            return !0;
                return !1
            },
            checkExp: function(e, t) {
                if (!e || !e.active)
                    return !1;
                if (e.lang && -1 === e.lang.indexOf(r.a.lang))
                    return !1;
                if (e.excludedLang && e.excludedLang.indexOf(r.a.lang) > -1)
                    return !1;
                if (e.os && -1 === e.os.indexOf(r.a.os.name))
                    return !1;
                if (e.browser && -1 === e.browser.indexOf(r.a.browser.name))
                    return !1;
                if (e.excludedBrowser && e.excludedBrowser.indexOf(r.a.browser.name) > -1)
                    return !1;
                if (e.country) {
                    if (!r.a.country)
                        return !1;
                    if (-1 === e.country.indexOf(r.a.country) && (!r.a.countryTierName || -1 === e.country.indexOf(r.a.countryTierName)))
                        return !1
                }
                if (e.excludedCountry && r.a.country) {
                    if (e.excludedCountry.indexOf(r.a.country) > -1)
                        return !1;
                    if (r.a.countryTierName && e.excludedCountry.indexOf(r.a.countryTierName) > -1)
                        return !1
                }
                return !(e.channel && !this.checkChannel(e.channel)) && (t ? this.checkExtraExp(e) : !e.parameters || !e.parameters.expSample || !1 !== this.checkExpSample(e))
            },
            checkExtraExpAdsType: function(e) {
                return !e || !Array.isArray(e) || (r.a.ads && r.a.ads.allowed ? r.a.ads.allowed.indexOf("all") > -1 || this.intersect(r.a.ads.allowed, e).length === e.length : !r.a.experiment)
            },
            checkExtraExp: function(e) {
                if (e.mobile && !r.a.mobile || !1 === e.mobile && r.a.mobile)
                    return !1;
                if ((e.changeContent || e.changeOutput) && r.a.experiment)
                    return !1;
                if (e.ads && (e.ads.type && !this.checkExtraExpAdsType(e.ads.type)))
                    return !1;
                if (e.excludeExperiments && r.a.extraExperiments.has(e.excludeExperiments))
                    return !1;
                if (e.dir) {
                    if (this.excludeDir[e.dir])
                        return !1
                } else if (e.bundle && !this.checkBundleDir(e.bundle))
                    return !1;
                return !(!e.skipCheckingExpSample && !1 === this.checkExpSample(e)) && (r.a.extraExperiments.add(e._name),
                !0)
            },
            checkExpSample: function(e) {
                if (!e || !e.parameters)
                    return !0;
                var t = new a({
                    name: e.parameters.expName
                }).getValue();
                return !(e.parameters.expSample && t > e.parameters.expSample) && (e.parameters.expValue = t,
                !0)
            },
            checkBundleDir: function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && e[t].dir && this.excludeDir[e[t].dir])
                        return !1;
                return !0
            },
            stopExp: function(e) {
                r.a.experiment = "";
                var t = this.config[e];
                t.object && window[t.object] && delete window[t.object],
                this.exclude[e] = !0
            },
            runExp: function(e) {
                var t = this;
                r.a.experiment = e;
                var n = this.config[e];
                try {
                    if (n._init(),
                    n.object && window[n.object]) {
                        var o = window[n.object];
                        if (n.parameters && t.setParameters(o, n.parameters),
                        o.isAvailable && !o.isAvailable())
                            return t.stopExp(e),
                            void t.run();
                        if (o.init && !o.init())
                            return t.stopExp(e),
                            void t.run();
                        if (t.sendStats(e, "start"),
                        "reference" === e)
                            return r.a.user = r.a.user || {},
                            r.a.user.reference = !0,
                            r.a.experiment = "",
                            t.exclude[e] = !0,
                            t.allowedExperiments = {},
                            n.allowedIntegrations.forEach((function(e) {
                                t.allowedExperiments[e] = !0
                            }
                            )),
                            void t.run();
                        n.allowedAds && (r.a.ads = r.a.ads || {},
                        r.a.ads.allowed ? r.a.ads.allowed = t.mergeDedupe(r.a.ads.allowed, n.allowedAds) : r.a.ads.allowed = n.allowedAds),
                        t.complete = !0,
                        t.runExtra()
                    }
                } catch (n) {
                    t.stopExp(e),
                    t.sendStats(e, "fail"),
                    t.run()
                }
            },
            stopExtraExp: function(e) {
                if (e.object && window[e.object]) {
                    var t = window[e.object];
                    t.stop && "function" == typeof t.stop ? t.stop() : delete window[e.object]
                }
            },
            runExtraExp: function(e) {
                if (e) {
                    if (e.bundle)
                        return this.runExtraExpBundle(e);
                    var t = this;
                    if (this.excludeDir[e._name] = !0,
                    r.a.debug && (console.log("---------"),
                    console.log("Active extra experiment: ", e._name),
                    console.log("---------")),
                    "documentReady" !== e.runAt)
                        this.loadAndExecExtraExp(e.dir, e);
                    else {
                        var n = function n() {
                            document.removeEventListener("DOMContentLoaded", n),
                            window.removeEventListener("load", n),
                            t.loadAndExecExtraExp(e.dir, e)
                        };
                        -1 !== ["interactive", "complete"].indexOf(document.readyState) ? n() : (document.addEventListener("DOMContentLoaded", n),
                        window.addEventListener("load", n))
                    }
                }
            },
            runExtraExpBundle: function(e) {
                var t = e._name;
                for (var n in e.bundle)
                    if (e.bundle.hasOwnProperty(n)) {
                        var r = e.bundle[n];
                        e._name = "".concat(t, "-").concat(n),
                        r.parameters.expValue || (r.parameters.expValue = e.parameters.expValue),
                        this.runExtraExp(r)
                    }
            },
            loadAndExecExtraExp: function(e, t) {
                var n = this;
                function r(e, t) {
                    t.init() ? n.sendStats(e._name, "start") : n.stopExtraExp(e)
                }
                try {
                    if (t._init(),
                    !t.object || !window[t.object])
                        return;
                    var o = window[t.object];
                    t.parameters && n.setParameters(o, t.parameters),
                    o.isAvailable && !o.isAvailable() || !o.init ? n.stopExtraExp(t) : t.startDelay ? window.setTimeout((function() {
                        r(t, o)
                    }
                    ), t.startDelay) : r(t, o)
                } catch (e) {
                    console.error('Failed to load "'.concat(t.dir, '" experiment, cause: %O %O'), arguments, e),
                    n.stopExtraExp(t),
                    n.sendStats(t._name, "fail")
                }
            },
            mergeDedupe: function(e, t) {
                return e.concat(t.filter((function(t) {
                    return e.indexOf(t) < 0
                }
                )))
            },
            intersect: function(e, t) {
                for (var n = {}, r = [], o = 0; o < t.length; o++)
                    n[t[o]] = !0;
                for (var i = 0; i < e.length; i++)
                    n[e[i]] && r.push(e[i]);
                return r
            },
            setParameters: function(e, t) {
                if (e && "object" == s(e) && t && "object" == s(t))
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
            },
            sendStats: function(e, t) {
                t = t || "",
                this.gaStats.id && ga(this.gaStats.tracker + ".send", "event", this.gaStats.eventCategory, e, t)
            }
        };
        if (void 0 !== r.a.country && null !== r.a.country)
            l.init();
        else {
            document.addEventListener("getGeo", (function e() {
                document.removeEventListener("getGeo", e),
                l.init()
            }
            ), !1)
        }
    },
    "WQ/E": function(e, t, n) {
        (e.exports = n("I1BE")(!1)).push([e.i, ".conver-error-action-text[data-v-8a32724a]{color:#ff5916}", ""])
    },
    XM5P: function(e, t) {
        e.exports = {
            version: "0.22.0"
        }
    },
    XZr7: function(e, t, n) {
        var r = n("WQ/E");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n("aET+")(r, o);
        r.locals && (e.exports = r.locals)
    },
    XuX8: function(e, t, n) {
        e.exports = n("INkZ")
    },
    XwJu: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "object" == typeof e && !0 === e.isAxiosError
        }
    },
    YBdB: function(e, t, n) {
        (function(e, t) {
            !function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, o, i, a, s, l = 1, c = {}, u = !1, d = e.document, p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    p = p && p.setTimeout ? p : e,
                    "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick((function() {
                            m(e)
                        }
                        ))
                    }
                    : !function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = n,
                            t
                        }
                    }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                        m(e.data)
                    }
                    ,
                    r = function(e) {
                        i.port2.postMessage(e)
                    }
                    ) : d && "onreadystatechange"in d.createElement("script") ? (o = d.documentElement,
                    r = function(e) {
                        var t = d.createElement("script");
                        t.onreadystatechange = function() {
                            m(e),
                            t.onreadystatechange = null,
                            o.removeChild(t),
                            t = null
                        }
                        ,
                        o.appendChild(t)
                    }
                    ) : r = function(e) {
                        setTimeout(m, 0, e)
                    }
                    : (a = "setImmediate$" + Math.random() + "$",
                    s = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && m(+t.data.slice(a.length))
                    }
                    ,
                    e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s),
                    r = function(t) {
                        e.postMessage(a + t, "*")
                    }
                    ),
                    p.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var o = {
                            callback: e,
                            args: t
                        };
                        return c[l] = o,
                        r(l),
                        l++
                    }
                    ,
                    p.clearImmediate = f
                }
                function f(e) {
                    delete c[e]
                }
                function m(e) {
                    if (u)
                        setTimeout(m, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            u = !0;
                            try {
                                !function(e) {
                                    var t = e.callback
                                      , n = e.args;
                                    switch (n.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(n[0]);
                                        break;
                                    case 2:
                                        t(n[0], n[1]);
                                        break;
                                    case 3:
                                        t(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        t.apply(void 0, n)
                                    }
                                }(t)
                            } finally {
                                f(e),
                                u = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(this, n("yLpj"), n("8oxB"))
    },
    "aET+": function(e, t, n) {
        var r, o, i = {}, a = (r = function() {
            return window && document && document.all && !window.atob
        }
        ,
        function() {
            return void 0 === o && (o = r.apply(this, arguments)),
            o
        }
        ), s = function(e, t) {
            return t ? t.querySelector(e) : document.querySelector(e)
        }, l = function(e) {
            var t = {};
            return function(e, n) {
                if ("function" == typeof e)
                    return e();
                if (void 0 === t[e]) {
                    var r = s.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                        try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                    t[e] = r
                }
                return t[e]
            }
        }(), c = null, u = 0, d = [], p = n("9tPo");
        function f(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                  , o = i[r.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++)
                        o.parts[a](r.parts[a]);
                    for (; a < r.parts.length; a++)
                        o.parts.push(y(r.parts[a], t))
                } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++)
                        s.push(y(r.parts[a], t));
                    i[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function m(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o]
                  , a = t.base ? i[0] + t.base : i[0]
                  , s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return n
        }
        function h(e, t) {
            var n = l(e.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = d[d.length - 1];
            if ("top" === e.insertAt)
                r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                d.push(t);
            else if ("bottom" === e.insertAt)
                n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = l(e.insertAt.before, n);
                n.insertBefore(t, o)
            }
        }
        function v(e) {
            if (null === e.parentNode)
                return !1;
            e.parentNode.removeChild(e);
            var t = d.indexOf(e);
            t >= 0 && d.splice(t, 1)
        }
        function g(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
            void 0 === e.attrs.nonce) {
                var r = function() {
                    0;
                    return n.nc
                }();
                r && (e.attrs.nonce = r)
            }
            return b(t, e.attrs),
            h(e, t),
            t
        }
        function b(e, t) {
            Object.keys(t).forEach((function(n) {
                e.setAttribute(n, t[n])
            }
            ))
        }
        function y(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css)))
                    return function() {}
                    ;
                e.css = i
            }
            if (t.singleton) {
                var a = u++;
                n = c || (c = g(t)),
                r = T.bind(null, n, a, !1),
                o = T.bind(null, n, a, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                    e.attrs.rel = "stylesheet",
                    b(t, e.attrs),
                    h(e, t),
                    t
                }(t),
                r = k.bind(null, n, t),
                o = function() {
                    v(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = g(t),
                r = _.bind(null, n),
                o = function() {
                    v(n)
                }
                );
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    r(e = t)
                } else
                    o()
            }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
            t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
            var n = m(e, t);
            return f(n, t),
            function(e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--,
                    r.push(s)
                }
                e && f(m(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var l = 0; l < s.parts.length; l++)
                            s.parts[l]();
                        delete i[s.id]
                    }
                }
            }
        }
        ;
        var w, x = (w = [],
        function(e, t) {
            return w[e] = t,
            w.filter(Boolean).join("\n")
        }
        );
        function T(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = x(t, o);
            else {
                var i = document.createTextNode(o)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
        function _(e, t) {
            var n = t.css
              , r = t.media;
            if (r && e.setAttribute("media", r),
            e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function k(e, t, n) {
            var r = n.css
              , o = n.sourceMap
              , i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = p(r)),
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r],{
                type: "text/css"
            })
              , s = e.href;
            e.href = URL.createObjectURL(a),
            s && URL.revokeObjectURL(s)
        }
    },
    "b8/c": function(e, t, n) {
        var r = n("gjZu");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n("aET+")(r, o);
        r.locals && (e.exports = r.locals)
    },
    bUC5: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("vDqi")
          , o = n.n(r)
          , i = {
            name: "ErrorBlock",
            props: {
                label: String
            }
        };
        n("uJcE");
        function a(e, t, n, r, o, i, a, s) {
            var l, c = "function" == typeof e ? e.options : e;
            if (t && (c.render = t,
            c.staticRenderFns = n,
            c._compiled = !0),
            r && (c.functional = !0),
            i && (c._scopeId = "data-v-" + i),
            a ? (l = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                o && o.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(a)
            }
            ,
            c._ssrRegister = l) : o && (l = s ? function() {
                o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
            }
            : o),
            l)
                if (c.functional) {
                    c._injectStyles = l;
                    var u = c.render;
                    c.render = function(e, t) {
                        return l.call(t),
                        u(e, t)
                    }
                } else {
                    var d = c.beforeCreate;
                    c.beforeCreate = d ? [].concat(d, l) : [l]
                }
            return {
                exports: e,
                options: c
            }
        }
        var s = a(i, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "pl-lg-5"
            }, [t("div", {
                staticClass: "row col-lg-4 col-md-6 col-12 mt-5 alert alert-primary shadow-lg",
                attrs: {
                    id: "convert-error",
                    role: "alert"
                }
            }, [t("div", {
                staticClass: "container"
            }, [t("div", {
                staticClass: "text-center"
            }, [this._m(0), this._v(" "), t("div", {
                staticClass: "conver-error-text"
            }, [this._v(this._s(this.label ? this.label : "The download link was not found"))])])])])])
        }
        ), [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", [t("span", {
                staticClass: "conver-error-title"
            }, [this._v("Sorry")]), t("i", {
                staticClass: "far fa-frown"
            })])
        }
        ], !1, null, "8a32724a", null).exports;
        var l = a({
            components: {
                ErrorBlock: s
            },
            name: "MainResults",
            props: {
                activBtn: String,
                searchUrlInsPosts: String,
                searchUrlInsStories: String
            },
            data: function() {
                return {
                    videos: null,
                    meta: null,
                    link: null,
                    thumb: null,
                    audios: [],
                    error: null,
                    showMore: !1,
                    listDefaultLength: 3,
                    manyElements: null,
                    linkStories: null,
                    linkPosts: null,
                    rootOnSearchResults: !1,
                    label: ""
                }
            },
            mounted: function() {
                var e = this;
                this.$root.$on("clear-results", (function() {
                    e.videos = null,
                    e.meta = null,
                    e.thumb = null,
                    e.audios = [],
                    e.error = null,
                    e.showMore = !1,
                    e.link = null,
                    e.rootOnSearchResults = !1,
                    e.manyElements = null
                }
                )),
                this.$root.$on("link-submit", (function(t) {
                    document.getElementById("main-form").scrollIntoView(),
                    e.link = t,
                    e.request(t)
                }
                )),
                this.activBtn && (document.getElementById("main-form").scrollIntoView(),
                "posts" === this.activBtn && this.searchUrlInsPosts && (this.$root.$emit("link-submit-posts", this.searchUrlInsPosts),
                this.linkPosts = this.searchUrlInsPosts,
                this.manyElements = null,
                this.rootOnSearchResults = !0,
                this.linkPosts && this.linkStories !== this.linkPosts && this.request(this.linkPosts)),
                "stories" === this.activBtn && this.searchUrlInsStories && (this.$root.$emit("link-submit-stories", this.searchUrlInsStories),
                this.linkStories = this.searchUrlInsStories,
                this.manyElements = null,
                this.rootOnSearchResults = !0,
                this.linkStories && this.linkStories !== this.linkPosts && this.request(this.linkStories)))
            },
            methods: {
                handleError: function(e) {
                    this.$root.$emit("show-error", e, this.link),
                    this.error = !0
                },
                request: function(e) {
                    var t = this;
                    document.getElementById("img").style.display = null;
                    o.a.post("/api/convert", {
                        url: e.replace("?source=search", "")
                    }, {
                        timeout: 45e3
                    }).then((function(e) {
                        var n, r, o;
                        return (null === (n = e.data) || void 0 === n ? void 0 : n.length) > 1 && e.data[1].url ? (t.$root.$emit("show-results", e.data[0], t.link, "mp4"),
                        t.manyElements = e.data) : !e.data.length && t.activBtn ? (t.label = "It seems that there are no stories for the last 24 hours",
                        t.handleError(t.label, t.link)) : e.data && e.data.blacklist ? t.handleError(e.data, t.link) : (console.log("пропустил ошибку"),
                        t.$root.$emit("show-results", e.data, t.link, "mp4"),
                        t.videos = (r = e.data.url.filter((function(e) {
                            return 1 != e.audio
                        }
                        )),
                        o = new Set,
                        r.filter((function(e) {
                            var t = e.quality + e.ext + e.no_audio
                              , n = o.has(t);
                            return o.add(t),
                            !n
                        }
                        ))),
                        t.videos.sort((function(e, t) {
                            return !e.no_audio && t.no_audio ? -1 : e.no_audio && !t.no_audio || parseInt(e.quality) < parseInt(t.quality) ? 1 : -1
                        }
                        )),
                        t.audios = e.data.url.filter((function(e) {
                            return !0 === e.audio
                        }
                        )),
                        t.meta = e.data.meta,
                        t.thumb = e.data.thumb,
                        void console.log("нет ответа "))
                    }
                    )).catch((function(e) {
                        var n = "ECONNABORTED" == e.code ? {
                            timeout: !0
                        } : e.response && e.response.data;
                        t.handleError(n, t.link)
                    }
                    )).finally((function() {
                        document.getElementById("img").style.display = "none",
                        t.$root.$emit("result-end")
                    }
                    ))
                },
                download: function(e, t) {
                    this.$root.$emit("download-click", this.link, "mp4"),
                    setTimeout((function() {
                        document.location = e
                    }
                    ), 500)
                },
                convert: function() {
                    return this.$root.$emit("convert-link", this.link)
                }
            },
            computed: {
                videosList: function() {
                    return this.showMore ? this.videos : this.videos.slice(0, this.listDefaultLength)
                }
            }
        }, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [null != e.videos ? n("div", [n("div", {
                staticClass: "row col-lg-8 col-md-10 col-12 mx-auto mt-5 alert alert-primary shadow-lg",
                attrs: {
                    id: "convert-result",
                    role: "alert"
                }
            }, [e._m(0), e._v(" "), n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "row"
            }, [n("div", {
                staticClass: "col-12 col-md-4 col-lg-4 order-12 order-lg-1 mt-3 mx-auto result-col-thumb"
            }, [n("img", {
                staticClass: "card-img-top img-fluid rounded",
                attrs: {
                    src: e.thumb,
                    alt: e.meta.title
                }
            }), e._v(" "), n("h6", [e._v(e._s(e.meta.title))]), e._v(" "), n("p", [e._v("Duration: " + e._s(e.meta.duration))])]), e._v(" "), n("div", {
                staticClass: "col-12 col-lg-8 order-2"
            }, [e._m(1), e._v(" "), n("div", {
                staticClass: "row m-0"
            }, [n("div", {
                staticClass: "d-lg-block p-0 col-12"
            }, [n("div", {
                staticClass: "tab-content",
                attrs: {
                    id: "myTabContent"
                }
            }, [n("div", {
                staticClass: "tab-pane active show",
                attrs: {
                    id: "nav-mp4"
                }
            }, [n("table", {
                staticClass: "table table-dark table-striped table-sm mb-0",
                attrs: {
                    cellspacing: "0"
                }
            }, e._l(e.videosList, (function(t) {
                return n("tr", {
                    key: t.url
                }, [n("td", {
                    attrs: {
                        scope: "row"
                    }
                }, [n("span", [n("strong", [e._v(e._s(t.quality))]), e._v("." + e._s(t.ext))]), e._v(" "), t.no_audio ? n("span", {
                    staticClass: "no-audio-icon"
                }, [n("i", {
                    staticClass: "fas fa-volume-mute"
                })]) : e._e()]), e._v(" "), n("td", {
                    staticClass: "align-middle"
                }, [n("a", {
                    staticClass: "btn",
                    attrs: {
                        id: "download-" + t.ext + "-" + t.quality + "-" + (t.no_audio ? "no-audio" : "audio")
                    },
                    on: {
                        click: function(n) {
                            return e.download(t.url, e.meta.title + t.ext)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-download"
                }), e._v(" Download\n                                                    ")])])])
            }
            )), 0), e._v(" "), e.videos.length > e.listDefaultLength ? n("div", {
                staticClass: "show-more-button",
                on: {
                    click: function(t) {
                        e.showMore = !e.showMore
                    }
                }
            }, [n("span", [e._v(e._s(e.showMore ? "Show less" : "Show more"))])]) : e._e()])])])])])])])]), e._v(" "), e._m(2)]) : e._e(), e._v(" "), null === e.videos && null !== e.manyElements ? n("div", [n("div", {
                staticClass: "container text-white h-100 find-block mt-5 find-section "
            }, [n("div", {
                staticClass: "find-block col-lg-8 "
            }, e._l(e.manyElements, (function(t) {
                return n("div", {
                    key: t.url[0].url,
                    staticClass: "video "
                }, [n("div", {
                    staticClass: "video-desc "
                }, [n("img", {
                    staticClass: "image",
                    attrs: {
                        src: t.thumb,
                        alt: t.meta.title
                    }
                }), e._v(" "), n("h6", {
                    staticClass: "card-duration-limit",
                    attrs: {
                        type: "text"
                    }
                }, [e._v(e._s(t.meta.title) + "\n                        ")]), e._v(" "), t.meta.duration ? n("p", {
                    staticClass: "card-duration-limit"
                }, [e._v("Duration: " + e._s(t.meta.duration))]) : e._e(), e._v(" "), t.title ? n("span", {
                    staticClass: "title"
                }, [e._v(e._s(t.title))]) : e._e(), e._v(" "), n("button", {
                    staticClass: "btn btn-success btn-find-download",
                    attrs: {
                        id: "download-" + t.ext + "-" + t.quality + "-" + (t.no_audio ? "no-audio" : "audio")
                    },
                    on: {
                        click: [function(n) {
                            return n.preventDefault(),
                            e.sendToForm(t.url[0].url)
                        }
                        , function(n) {
                            return e.download(t.url[0].url, t.meta.title + t.ext)
                        }
                        ]
                    }
                }, [e._v("Download")])])])
            }
            )), 0)]), e._v(" "), e._m(3)]) : e._e(), e._v(" "), e.error ? n("div", [n("ErrorBlock", {
                attrs: {
                    label: e.label
                }
            })], 1) : e._e()])
        }
        ), [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "container"
            }, [t("p", {
                staticClass: "convert-title"
            }, [this._v("Download video as:")])])
        }
        , function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "col-12 p-0 m-0"
            }, [t("div", {
                staticClass: "tabs-header row"
            }, [t("a", {
                staticClass: "video-title col-12 m-0 active-tab"
            }, [t("span", [t("i", {
                staticClass: "fab fa-youtube"
            }), this._v(" Video ")])])])])
        }
        , function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "norton"
            }, [t("p", [this._v("Scanned by")]), this._v(" "), t("img", {
                attrs: {
                    loading: "lazy",
                    src: "/img/norton.svg",
                    alt: ""
                }
            }), this._v(" "), t("p", [this._v("Norton"), t("sup", [this._v("TM")]), this._v(" Safe Web")])])
        }
        , function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "norton"
            }, [t("p", [this._v("Scanned by")]), this._v(" "), t("img", {
                attrs: {
                    loading: "lazy",
                    src: "/img/norton.svg",
                    alt: ""
                }
            }), this._v(" "), t("p", [this._v("Norton"), t("sup", [this._v("TM")]), this._v(" Safe Web")])])
        }
        ], !1, null, null, null).exports
          , c = n("o0o1")
          , u = n.n(c);
        function d(e) {
            return !!new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$","i").test(e)
        }
        var p = n("K4CH")
          , f = n.n(p)
          , m = n("2HEe")
          , h = n.n(m);
        function v(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o)
        }
        var g = a({
            props: ["inputPlaceholder", "startButton"],
            data: function() {
                return {
                    input: null,
                    hls: !1,
                    processing: !1,
                    autocompleteList: [],
                    autocompleteSelected: -1,
                    initialInput: null,
                    isInstagram: !1
                }
            },
            mounted: function() {
                var e, t, n, r, o = this;
                if (this.isInstagram = (null === (e = window) || void 0 === e || null === (t = e.location.pathname) || void 0 === t ? void 0 : t.includes("instagram")) || (null === (n = window) || void 0 === n || null === (r = n.location) || void 0 === r ? void 0 : r.href.includes("instagram")),
                localStorage.getItem("search") && (this.input = localStorage.getItem("search"),
                localStorage.removeItem("search"),
                setTimeout((function() {
                    o.change(),
                    o.submit()
                }
                ), 100)),
                this.$root.$on("link-cast", (function(e) {
                    o.input = e,
                    o.submit()
                }
                )),
                this.$root.$on("result-end", (function() {
                    o.processing = !1
                }
                )),
                document.addEventListener("keydown", (function(e) {
                    "ArrowDown" == e.code && o.autocompleteSelected < o.autocompleteList.length - 1 ? (e.preventDefault(),
                    -1 === o.autocompleteSelected && (o.initialInput = o.input),
                    o.autocompleteSelected++,
                    o.input = o.autocompleteList[o.autocompleteSelected]) : "ArrowUp" == e.code && o.autocompleteSelected >= 0 && (e.preventDefault(),
                    0 === o.autocompleteSelected ? (o.input = o.initialInput,
                    o.autocompleteSelected--) : (o.autocompleteSelected--,
                    o.input = o.autocompleteList[o.autocompleteSelected]))
                }
                )),
                "mobile" === (new f.a).getDevice().type && window.innerHeight > 400) {
                    var i = document.getElementById("id_url");
                    i.blur(),
                    i.addEventListener("focus", (function() {
                        var e = document.querySelector("html > iframe");
                        e && (e.style.display = "none")
                    }
                    )),
                    i.addEventListener("click", (function() {
                        var e = document.querySelector("html > iframe");
                        e && (e.style.display = "none")
                    }
                    )),
                    i.addEventListener("blur", (function() {
                        var e = document.querySelector("html > iframe");
                        e && (e.style.display = "block")
                    }
                    ))
                }
                document.location.pathname
            },
            methods: {
                enterClick: function(e) {
                    13 === e.keyCode && (e.preventDefault(),
                    this.resetAutocomplete(),
                    this.submit())
                },
                submit: function() {
                    if (!this.hls && "string" == typeof this.input && "" !== this.input.trim())
                        if (this.$root.$emit("clear-results"),
                        d(this.input)) {
                            if (this.processing)
                                return;
                            this.processing = !0,
                            this.$root.$emit("search-request", null),
                            this.checkForStories(this.input) ? this.$root.$emit("straight-submit", this.input) : this.isInstagram && !this.checkForPosts(this.input) ? this.$root.$emit("search-request", this.input) : this.$root.$emit("link-submit", this.input)
                        } else
                            this.$root.$emit("search-request", this.input)
                },
                change: function() {
                    d(this.input) ? this.$root.$emit("link-insert", this.input) : this.$root.$emit("keyword-insert", this.input)
                },
                onInput: function(e) {
                    !d(this.input) && this.input.length > 2 ? this.getAutocompleteList() : this.input.length <= 2 && this.resetAutocomplete(),
                    "insertFromPaste" !== e.inputType && "insertFromDrop" !== e.inputType && "insertFromYank" !== e.inputType || d(this.input) && this.submit()
                },
                onAutocompleteClick: function(e) {
                    this.input = e,
                    this.resetAutocomplete(),
                    this.submit()
                },
                getAutocompleteList: function() {
                    var e, t = this;
                    return (e = u.a.mark((function e() {
                        var n, r, o;
                        return u.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        q: t.input,
                                        hl: "",
                                        ds: "yt",
                                        client: "youtube",
                                        _: Date.now()
                                    },
                                    r = Object.keys(n).map((function(e) {
                                        return "".concat(e, "=").concat(n[e].toString())
                                    }
                                    )).join("&"),
                                    e.next = 5,
                                    h()("".concat("https://suggestqueries.google.com/complete/search", "?").concat(r)).then((function(e) {
                                        return e.json()
                                    }
                                    ));
                                case 5:
                                    o = e.sent,
                                    t.autocompleteList = o[1].map((function(e) {
                                        return e[0]
                                    }
                                    ));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);
                            function a(e) {
                                v(i, r, o, a, s, "next", e)
                            }
                            function s(e) {
                                v(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    )()
                },
                onAutcompleteMouseover: function(e) {
                    null === this.initialInput && (this.initialInput = this.input),
                    this.autocompleteSelected = e,
                    this.input = this.autocompleteList[this.autocompleteSelected]
                },
                resetAutocomplete: function() {
                    this.autocompleteList = [],
                    this.initialInput = null,
                    this.autocompleteSelected = -1
                },
                checkForStories: function(e) {
                    var t = e.match(/(?:instagram\.com|instagr\.am)\/stories\/([A-Za-z0-9-_\.]+)\/([A-Za-z0-9-_\.]+)/im)
                      , n = e.match(/(?:instagram\.com|instagr\.am)\/stories\/highlights\/([A-Za-z0-9-_\.]+)/im);
                    if (t || n)
                        return !0
                },
                checkForPosts: function(e) {
                    if (e.match(/^(https:\/\/|http:\/\/)?(www\.)?(instagram\.(com|org)|instagr\.am)(\/(p|tv))/gim))
                        return !0
                }
            }
        }, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("form", {
                staticClass: "card card-sm",
                attrs: {
                    id: "main-form",
                    action: "",
                    method: "post"
                }
            }, [n("div", {
                staticClass: "card-body row no-gutters align-items-center search_form"
            }, [n("div", {
                staticClass: "col"
            }, [e._t("default"), e._v(" "), n("div", {
                staticClass: "form-group",
                attrs: {
                    id: "div_id_url"
                }
            }, [n("div", {}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.input,
                    expression: "input"
                }],
                staticClass: "textinput textInput form-control",
                attrs: {
                    type: "text",
                    name: "url",
                    placeholder: e.inputPlaceholder,
                    autofocus: "true",
                    required: "",
                    id: "id_url"
                },
                domProps: {
                    value: e.input
                },
                on: {
                    keydown: e.enterClick,
                    change: e.change,
                    input: [function(t) {
                        t.target.composing || (e.input = t.target.value)
                    }
                    , e.onInput]
                }
            })])])], 2), e._v(" "), n("div", {
                staticClass: "col-auto"
            }, [n("button", {
                staticClass: "btn btn-lg btn-danger",
                attrs: {
                    type: "submit",
                    id: "search"
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.submit.apply(null, arguments)
                    }
                }
            }, [n("span", {
                staticClass: "d-none d-md-inline"
            }, [e._v(e._s(e.startButton))]), e._v(" "), n("i", {
                staticClass: "fas fa-arrow-right"
            })])]), e._v(" "), e.autocompleteList.length > 0 && !0 !== e.isInstagram ? n("div", {
                staticClass: "autocomplete-block",
                on: {
                    mouseleave: function(t) {
                        e.input = e.initialInput
                    }
                }
            }, [n("ul", {
                staticClass: "autocomplete-list"
            }, e._l(e.autocompleteList, (function(t, r) {
                return n("li", {
                    key: t,
                    class: {
                        "selected-autocomplete": r === e.autocompleteSelected
                    },
                    on: {
                        click: function(n) {
                            return e.onAutocompleteClick(t)
                        },
                        mouseover: function(t) {
                            return e.onAutcompleteMouseover(r)
                        }
                    }
                }, [e._v("\n                    " + e._s(t) + "\n                ")])
            }
            )), 0)]) : e._e()])])
        }
        ), [], !1, null, null, null).exports
          , b = function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var o = n[r]; " " == o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 == o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return null
        }
          , y = a({
            components: {
                ErrorBlock: s,
                MainResults: l
            },
            props: ["canonical"],
            data: function() {
                return {
                    videos: null,
                    error: null,
                    activBtn: null,
                    isInstagram: null,
                    searchUrlInsPosts: null,
                    searchUrlInsStories: null,
                    input: null,
                    urlAddress: -1
                }
            },
            mounted: function() {
                var e = this;
                this.$root.$on("clear-results", (function() {
                    e.videos = null,
                    e.error = null
                }
                )),
                this.$root.$on("search-request", (function(t) {
                    null === t ? (e.searchUrlInsPosts = null,
                    e.searchUrlInsStories = null,
                    e.input = null) : e.searchRequest(t)
                }
                ))
            },
            methods: {
                handleError: function(e) {
                    this.$root.$emit("show-error", e, this.link),
                    this.error = !0
                },
                searchRequest: function(e) {
                    var t, n, r, i, a = this;
                    if (this.isInstagram = (null === (t = window) || void 0 === t || null === (n = t.location.pathname) || void 0 === n ? void 0 : n.includes("instagram")) || (null === (r = window) || void 0 === r || null === (i = r.location) || void 0 === i ? void 0 : i.href.includes("instagram")),
                    this.urlAddress = e.search(/^http|^https:\/\/|^www\.|^instagram\.com|instagr\.am/gi),
                    this.isInstagram && !e.search(/^[a-z@]/gi))
                        "@" === e[0] ? this.input = e.substring(1) : this.urlAddress >= 0 ? ("/" === (e = e.trim().match(/[\d\w-_.]+\/?$/gim)[0])[e.length - 1] && (e = e.substring(0, e.length - 1)),
                        this.input = e) : this.input = e,
                        this.activePage();
                    else {
                        document.getElementById("main-form").scrollIntoView();
                        var s = {
                            query: e
                        };
                        document.getElementById("img").style.display = null,
                        o.a.post("/search/", s, {
                            headers: {
                                "X-CSRFToken": b("csrftoken"),
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        }).then((function(e) {
                            a.videos = e.data.links,
                            document.getElementById("img").style.display = "none"
                        }
                        )).catch((function(e) {
                            console.log(e)
                        }
                        ))
                    }
                },
                sendToForm: function(e) {
                    this.$root.$emit("search-download", e),
                    localStorage.setItem("search", e),
                    window.open(this.canonical)
                },
                download: function(e) {
                    this.$root.$emit("download-click", this.link, "mp4"),
                    setTimeout((function() {
                        document.location = e
                    }
                    ), 500)
                },
                activePage: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "posts";
                    this.activBtn !== e && (this.activBtn = e),
                    this.input && (this.searchUrlInsPosts = "https://www.instagram.com/".concat(this.input, "/"),
                    this.searchUrlInsStories = "https://www.instagram.com/stories/".concat(this.input, "/"))
                }
            }
        }, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [e.videos ? n("div", {
                staticClass: "container text-white h-100 find-block mt-5 find-section"
            }, [n("div", {
                staticClass: "find-block col-lg-8"
            }, e._l(e.videos, (function(t) {
                return n("div", {
                    key: t.url,
                    staticClass: "video"
                }, [n("div", {
                    staticClass: "video-desc"
                }, [n("img", {
                    staticClass: "image",
                    attrs: {
                        rel: "preload",
                        src: t.img,
                        alt: t.title
                    }
                }), e._v(" "), n("span", {
                    staticClass: "title"
                }, [e._v(e._s(t.title))]), e._v(" "), n("button", {
                    staticClass: "btn btn-success btn-find-download",
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            e.sendToForm(t.url)
                        }
                    }
                }, [e._v("Download")])])])
            }
            )), 0), e._v(" "), e._m(0)]) : e._e(), e._v(" "), null != e.searchUrlInsPosts && e.isInstagram ? n("div", [n("div", {
                staticClass: "switch-container"
            }, [n("div", [n("button", {
                class: ["stories" === e.activBtn ? "switch-active-btn" : "switch-disabled-btn", "switch-disabled-btn"],
                on: {
                    click: function(t) {
                        return e.activePage("stories")
                    }
                }
            }, [e._v(" Stories ")])]), e._v(" "), n("div", [n("button", {
                class: ["posts" === e.activBtn ? "switch-active-btn" : "switch-disabled-btn", "switch-disabled-btn"],
                on: {
                    click: function(t) {
                        return e.activePage("posts")
                    }
                }
            }, [e._v(" Posts ")])])]), e._v(" "), "posts" == e.activBtn && null !== e.searchUrlInsPosts ? n("main-results", {
                key: "posts",
                attrs: {
                    activBtn: e.activBtn,
                    searchUrlInsPosts: e.searchUrlInsPosts
                }
            }) : e._e(), e._v(" "), "stories" == e.activBtn && null !== e.searchUrlInsStories ? n("main-results", {
                key: "stories",
                attrs: {
                    activBtn: e.activBtn,
                    searchUrlInsStories: e.searchUrlInsStories
                }
            }) : e._e(), e._v(" "), e.error ? n("div", [n("ErrorBlock")], 1) : e._e()], 1) : e._e()])
        }
        ), [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "norton"
            }, [t("p", [this._v("Scanned by")]), this._v(" "), t("img", {
                attrs: {
                    loading: "lazy",
                    src: "/img/norton.svg",
                    alt: ""
                }
            }), this._v(" "), t("p", [this._v("Norton"), t("sup", [this._v("TM")]), this._v(" Safe Web")])])
        }
        ], !1, null, null, null).exports
          , w = a({
            components: {
                ErrorBlock: s
            },
            data: function() {
                return {
                    link: null,
                    error: null,
                    straightLink: null,
                    img: null,
                    url: null,
                    mediaDownloaderHost: "media.ssyoutube.com",
                    isVideo: !1,
                    manyElements: null
                }
            },
            mounted: function() {
                var e = this;
                this.$root.$on("clear-results", (function() {
                    e.straightLink = null,
                    e.img = null,
                    e.error = null,
                    e.url = null,
                    e.manyElements = null
                }
                )),
                this.$root.$on("straight-submit", (function(t) {
                    e.requestStraightLink(t),
                    e.link = t
                }
                ))
            },
            methods: {
                handleError: function(e) {
                    this.$root.$emit("show-error", e, this.link),
                    this.error = !0
                },
                requestStraightLink: function(e) {
                    var t = this;
                    document.getElementById("img").style.display = null;
                    o.a.get("/api/ig/story?url=".concat(encodeURIComponent(e)), {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        timeout: 45e3
                    }).then((function(e) {
                        return e.data.result.length > 1 ? (t.$root.$emit("show-results", e.data.result, t.link, "mp4"),
                        t.manyElements = t.lotHighlights(e.data.result)) : e.data.result && e.data.blacklist ? t.handleError(e.data, t.link) : (t.$root.$emit("show-results", e.data.result, t.link, "mp4"),
                        t.straightLink = e.data.result[0],
                        t.img = t.getPreviewUrl(e.data.result[0].image_versions2.candidates[0].url, e.data.result[0].image_versions2.candidates[0].url_signature),
                        t.url = e.data.result[0].video_versions ? t.getDownloadableUrl(e.data.result[0].video_versions[0].url, e.data.result[0].video_versions[0].url_signature) : t.getDownloadableUrl(e.data.result[0].image_versions2.candidates[0].url, e.data.result[0].image_versions2.candidates[0].url_signature),
                        void (t.isVideo = !!e.data.result[0].video_versions))
                    }
                    )).catch((function(e) {
                        var n = "ECONNABORTED" == e.code ? {
                            timeout: !0
                        } : e.response && e.response.data;
                        t.handleError(n, t.link)
                    }
                    )).finally((function() {
                        document.getElementById("img").style.display = "none",
                        t.$root.$emit("result-end")
                    }
                    ))
                },
                download: function(e) {
                    this.$root.$emit("download-click", this.link, "mp4"),
                    setTimeout((function() {
                        document.location = e
                    }
                    ), 500)
                },
                getFilename: function(e) {
                    var t = e.match(/([\w\-]+\.(?:jpg|mp4))$/i);
                    return t ? t[1] : ""
                },
                getPreviewUrl: function(e, t) {
                    if (-1 !== e.indexOf("?__sig=") || -1 !== e.indexOf("&__sig="))
                        return e;
                    var n = t || {}
                      , r = n.expires
                      , o = n.signature;
                    return o ? "https://".concat(this.mediaDownloaderHost, "/get?uri=").concat(encodeURIComponent(e), "&__sig=").concat(encodeURIComponent(o), "&__expires=").concat(r) : e
                },
                getDownloadableUrl: function(e, t) {
                    try {
                        var n = new URL(e);
                        if (n.searchParams.get("__sig"))
                            return e;
                        if (n.searchParams.append("dl", "1"),
                        n.searchParams.get("efg")) {
                            var r = this.getFilename(n.pathname);
                            if (r) {
                                var o = t || {}
                                  , i = o.expires
                                  , a = o.signature;
                                if (a)
                                    return "https://".concat(this.mediaDownloaderHost, "/get?uri=").concat(encodeURIComponent(e), "&filename=").concat(encodeURIComponent(r), "&__sig=").concat(encodeURIComponent(a), "&__expires=").concat(i, "&referer=https%3A%2F%2Fwww.instagram.com%2F")
                            }
                        }
                        return n.toString()
                    } catch (t) {
                        return -1 !== e.indexOf("?__sig=") || -1 !== e.indexOf("&__sig=") ? e : -1 === e.indexOf("?") ? "".concat(e, "?dl=1") : "".concat(e, "&dl=1")
                    }
                },
                lotHighlights: function(e) {
                    var t = this;
                    return e.map((function(e) {
                        var n = e.image_versions2.candidates[0];
                        return e.img = t.getPreviewUrl(n.url, n.url_signature),
                        e.url = e.video_versions ? t.getDownloadableUrl(e.video_versions[0].url, e.video_versions[0].url_signature) : t.getDownloadableUrl(n.url, n.url_signature),
                        e.isVideo = !!e.video_versions,
                        e
                    }
                    ))
                },
                sendToForm: function(e) {
                    this.$root.$emit("search-download", e),
                    localStorage.setItem("search", e),
                    window.open(this.canonical)
                }
            }
        }, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [null != e.straightLink ? n("div", [n("div", {
                staticClass: "row col-lg-8 col-md-10 col-12 mx-auto mt-5 alert alert-primary shadow-lg",
                attrs: {
                    id: "convert-result",
                    role: "alert"
                }
            }, [n("div", {
                staticClass: "container"
            }, [n("p", {
                staticClass: "convert-title"
            }, [e._v("Download " + e._s(e.isVideo ? "video" : "image") + " as:")])]), e._v(" "), n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "row"
            }, [n("div", {
                staticClass: "col-12 col-md-4 col-lg-4 order-12 order-lg-1 mt-3 mx-auto result-col-thumb"
            }, [n("img", {
                staticClass: "card-img-top img-fluid rounded",
                attrs: {
                    src: e.img,
                    alt: ""
                }
            })]), e._v(" "), n("div", {
                staticClass: "col-12 col-lg-8 order-2"
            }, [n("div", {
                staticClass: "col-12 p-0 m-0"
            }, [n("div", {
                staticClass: "tabs-header row"
            }, [n("a", {
                staticClass: "video-title col-12 m-0 active-tab"
            }, [n("span", [n("i", {
                staticClass: "fab fa-youtube"
            }), e._v(" " + e._s(e.isVideo ? "Video" : "Image") + " ")])])])]), e._v(" "), n("div", {
                staticClass: "row m-0"
            }, [n("div", {
                staticClass: "d-lg-block p-0 col-12"
            }, [n("div", {
                staticClass: "tab-content",
                attrs: {
                    id: "myTabContent"
                }
            }, [n("div", {
                staticClass: "tab-pane active show",
                attrs: {
                    id: "nav-mp4"
                }
            }, [n("table", {
                staticClass: "table table-dark table-striped table-sm mb-0",
                attrs: {
                    cellspacing: "0"
                }
            }, [n("tr", [n("td", {
                attrs: {
                    scope: "row"
                }
            }, [n("span", [n("strong", [e._v(e._s(e.isVideo ? ".mp4" : ".jpg"))])])]), e._v(" "), n("td", {
                staticClass: "align-middle"
            }, [n("a", {
                staticClass: "btn",
                attrs: {
                    href: e.url
                },
                on: {
                    click: function(t) {
                        return e.download()
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-download"
            }), e._v("\n                                                        Download\n                                                    ")])])])])])])])])])])])]), e._v(" "), e._m(0)]) : e._e(), e._v(" "), null === e.straightLink && null !== e.manyElements ? n("div", [n("div", {
                staticClass: "container text-white h-100 find-block mt-5 find-section "
            }, [n("div", {
                staticClass: "find-block col-lg-8 "
            }, e._l(e.manyElements, (function(t) {
                return n("div", {
                    key: t.pk,
                    staticClass: "video "
                }, [n("div", {
                    staticClass: "video-desc "
                }, [n("img", {
                    staticClass: "image",
                    attrs: {
                        src: t.img
                    }
                }), e._v(" "), n("button", {
                    staticClass: "btn btn-success btn-find-download btn-t24",
                    attrs: {
                        href: t.url
                    },
                    on: {
                        click: [function(n) {
                            return n.preventDefault(),
                            e.sendToForm(t.url)
                        }
                        , function(n) {
                            return e.download(t.url)
                        }
                        ]
                    }
                }, [e._v(" Download")])])])
            }
            )), 0)]), e._v(" "), e._m(1)]) : e._e(), e._v(" "), e.error ? n("div", [n("ErrorBlock")], 1) : e._e()])
        }
        ), [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "norton"
            }, [t("p", [this._v("Scanned by")]), this._v(" "), t("img", {
                attrs: {
                    loading: "lazy",
                    src: "/img/norton.svg",
                    alt: ""
                }
            }), this._v(" "), t("p", [this._v("Norton"), t("sup", [this._v("TM")]), this._v(" Safe Web")])])
        }
        , function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "norton"
            }, [t("p", [this._v("Scanned by")]), this._v(" "), t("img", {
                attrs: {
                    loading: "lazy",
                    src: "/img/norton.svg",
                    alt: ""
                }
            }), this._v(" "), t("p", [this._v("Norton"), t("sup", [this._v("TM")]), this._v(" Safe Web")])])
        }
        ], !1, null, null, null).exports
          , x = n("2OD/")
          , T = n("/klw")
          , _ = n("XuX8")
          , k = n.n(_);
        window.axios = n("vDqi"),
        window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest",
        n("WBlj"),
        n("Myda"),
        n("HIb1");
        new k.a({
            el: "#main",
            components: {
                SearchResults: y,
                StraightResult: w,
                MainResults: l,
                SearchForm: g
            },
            created: function() {
                T.a.activatePush.emit()
            },
            mounted: function() {
                this.$on("link-insert", (function(e) {
                    x.a.linkInsert(e)
                }
                )),
                this.$on("link-submit", (function(e) {
                    T.a.televzrLanding.emit(null, null, e),
                    x.a.linkSubmit(e)
                }
                )),
                this.$on("link-submit-posts", (function(e) {
                    T.a.televzrLanding.emit(null, null, e),
                    x.a.linkSubmit(e)
                }
                )),
                this.$on("link-submit-stories", (function(e) {
                    T.a.televzrLanding.emit("user", null, e),
                    x.a.linkSubmit(e)
                }
                )),
                this.$on("straight-submit", (function(e) {
                    T.a.televzrLanding.emit("user", null, e),
                    x.a.linkSubmit(e)
                }
                )),
                this.$on("link-cast", (function(e) {
                    x.a.linkInsert(e)
                }
                )),
                this.$on("search-request", (function(e) {
                    null !== e && (T.a.televzrLanding.emit("vidacha", e, null),
                    x.a.keywordSubmit(e))
                }
                )),
                this.$on("keyword-insert", (function(e) {
                    x.a.keywordInsert(e)
                }
                )),
                this.$on("search-download", (function(e) {
                    x.a.searchDownload(e)
                }
                )),
                this.$on("download-click", (function(e, t) {
                    T.a.televzrLanding.emit("click-download", null, e),
                    x.a.downloadClick(e, t),
                    T.a.clickAds.emit()
                }
                )),
                this.$on("show-results", (function(e, t) {
                    x.a.showResults(t),
                    T.a.sendOutputStats.emit(e, t),
                    T.a.televzrLanding.emit("content", e, t)
                }
                )),
                this.$on("show-error", (function(e, t) {
                    x.a.showError(e),
                    T.a.sendOutputStats.emit(e),
                    T.a.televzrLanding.emit("content", e, t)
                }
                ))
            }
        })
    },
    dw3g: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            push: {
                active: !0,
                dir: "push",
                object: "push",
                parameters: {
                    expName: "push",
                    expSample: 100
                },
                _init: ()=>n("r0hi")
            },
            outputStats: {
                active: !0,
                dir: "output-stats",
                object: "outputStats",
                parameters: {
                    expName: "outputStats",
                    expSample: 100
                },
                _init: ()=>n("NQK6")
            },
            clickads: {
                active: !0,
                dir: "propclick",
                excludedCountry: ["ru", "kz"],
                object: "clickAds",
                parameters: {
                    expName: "clickAds",
                    expSample: 100,
                    url: "https://ak.hauchiwu.com/4/5742330",
                    frequencyParams: {
                        cap: 6,
                        intervalAmount: 1,
                        intervalType: "day"
                    }
                },
                ads: {
                    type: ["clickunder"]
                },
                _init: ()=>n("58j7")
            },
            clickadsOtherCountries: {
                active: !0,
                dir: "propclick",
                country: ["ru", "kz"],
                object: "clickAds",
                parameters: {
                    expName: "clickAds",
                    expSample: 100,
                    url: "https://clickwhitecode.com/bens/vinos.js?24925&mode=redir",
                    frequencyParams: {
                        cap: 6,
                        intervalAmount: 1,
                        intervalType: "day"
                    }
                },
                ads: {
                    type: ["clickunder"]
                },
                _init: ()=>n("58j7")
            },
            widgetApk: {
                active: !0,
                dir: "widgetApk",
                mobile: !0,
                object: "widgetApk",
                os: ["Android"],
                startDelay: 3e3,
                parameters: {
                    expName: "widgetApk",
                    expSample: 100,
                    templateParams: {
                        appLink: "https://ssyoutube.page.link/apk"
                    },
                    frequencyParams: {
                        cap: 1,
                        intervalAmount: 1,
                        intervalType: "hour"
                    },
                    frequencyStorageKey: "ss-widget-apk-timestamp",
                    gaResourceId: "G-43HDSP24YH"
                },
                _init: ()=>n("p7i5")
            },
            koreanBnr: {
                active: !0,
                dir: "koreanBnr",
                mobile: !1,
                object: "koreanBnr",
                lang: ["ko", "id", "vi"],
                parameters: {
                    expName: "koreanBnr",
                    expSample: 100,
                    templateParams: {
                        json: {
                            type: "banner",
                            responsive: "N",
                            platform: "W",
                            scriptCode: "835769",
                            frameCode: "60",
                            width: "728",
                            height: "90",
                            settings: {
                                cntad: "1",
                                cntsr: "1"
                            }
                        }
                    },
                    gaResourceId: "G-FNM4C40J5D"
                },
                _init: ()=>n("tCk3")
            },
            koreanBnrMobile: {
                active: !0,
                dir: "koreanBnr",
                mobile: !0,
                object: "koreanBnr",
                lang: ["ko", "id", "vi"],
                parameters: {
                    expName: "koreanBnr",
                    expSample: 100,
                    templateParams: {
                        json: {
                            type: "banner",
                            responsive: "N",
                            platform: "M",
                            scriptCode: "835771",
                            frameCode: "42",
                            width: "300",
                            height: "250",
                            settings: {
                                cntsr: "4"
                            }
                        }
                    },
                    gaResourceId: "G-FNM4C40J5D"
                },
                _init: ()=>n("tCk3")
            }
        }
    },
    endd: function(e, t, n) {
        "use strict";
        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        r.prototype.__CANCEL__ = !0,
        e.exports = r
    },
    eqyj: function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    },
    g7np: function(e, t, n) {
        "use strict";
        var r = n("2SVd")
          , o = n("5oMp");
        e.exports = function(e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    },
    gjZu: function(e, t, n) {
        (e.exports = n("I1BE")(!1)).push([e.i, ".stop-scroll{overflow:hidden}.widget{z-index:1000}.widget,.widget__overlay{position:fixed;top:0;bottom:0;left:0;right:0}.widget__overlay{background-color:rgba(0,0,0,.4)}.widget__container{position:absolute;bottom:0;width:100%;padding:20px 20px 35px;background-color:#fff;border-radius:24px 24px 0 0}.widget__title{margin:0 0 20px;font-size:14px;font-weight:400;color:#cbcbcb}.widget__button,.widget__title{line-height:1.2;text-align:center}.widget__button{display:block;padding:15px;width:100%;font-size:16px;font-weight:700;text-transform:uppercase;color:#fff!important;background-color:#dc3545;border:none;border-radius:8px}.widget__button--close{position:absolute;top:20px;right:20px;width:auto;padding:0;background:none}.widget__text{margin:0 0 20px;font-size:18px;line-height:1.2;font-weight:700;color:#1b1b1b;text-align:center;letter-spacing:.01rem}", ""])
    },
    "h3A/": function(e, t, n) {
        var r = n("l8nv");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n("aET+")(r, o);
        r.locals && (e.exports = r.locals)
    },
    hIuj: function(e, t, n) {
        "use strict";
        var r = n("XM5P").version
          , o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
            o[e] = function(n) {
                return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        ));
        var i = {};
        o.transitional = function(e, t, n) {
            function o(e, t) {
                return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
            }
            return function(n, r, a) {
                if (!1 === e)
                    throw new Error(o(r, " has been removed" + (t ? " in " + t : "")));
                return t && !i[r] && (i[r] = !0,
                console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(n, r, a)
            }
        }
        ,
        e.exports = {
            assertOptions: function(e, t, n) {
                if ("object" != typeof e)
                    throw new TypeError("options must be an object");
                for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
                    var i = r[o]
                      , a = t[i];
                    if (a) {
                        var s = e[i]
                          , l = void 0 === s || a(s, i, e);
                        if (!0 !== l)
                            throw new TypeError("option " + i + " must be " + l)
                    } else if (!0 !== n)
                        throw Error("Unknown option " + i)
                }
            },
            validators: o
        }
    },
    "jfS+": function(e, t, n) {
        "use strict";
        var r = n("endd");
        function o(e) {
            if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }
            ));
            var n = this;
            this.promise.then((function(e) {
                if (n._listeners) {
                    var t, r = n._listeners.length;
                    for (t = 0; t < r; t++)
                        n._listeners[t](e);
                    n._listeners = null
                }
            }
            )),
            this.promise.then = function(e) {
                var t, r = new Promise((function(e) {
                    n.subscribe(e),
                    t = e
                }
                )).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t)
                }
                ,
                r
            }
            ,
            e((function(e) {
                n.reason || (n.reason = new r(e),
                t(n.reason))
            }
            ))
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        o.prototype.subscribe = function(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        ,
        o.prototype.unsubscribe = function(e) {
            if (this._listeners) {
                var t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
        }
        ,
        o.source = function() {
            var e;
            return {
                token: new o((function(t) {
                    e = t
                }
                )),
                cancel: e
            }
        }
        ,
        e.exports = o
    },
    kd2E: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, n, i) {
            t = t || "&",
            n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length)
                return a;
            var s = /\+/g;
            e = e.split(t);
            var l = 1e3;
            i && "number" == typeof i.maxKeys && (l = i.maxKeys);
            var c = e.length;
            l > 0 && c > l && (c = l);
            for (var u = 0; u < c; ++u) {
                var d, p, f, m, h = e[u].replace(s, "%20"), v = h.indexOf(n);
                v >= 0 ? (d = h.substr(0, v),
                p = h.substr(v + 1)) : (d = h,
                p = ""),
                f = decodeURIComponent(d),
                m = decodeURIComponent(p),
                r(a, f) ? o(a[f]) ? a[f].push(m) : a[f] = [a[f], m] : a[f] = m
            }
            return a
        }
        ;
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    },
    l8nv: function(e, t, n) {
        (e.exports = n("I1BE")(!1)).push([e.i, ".landingTz-body{background-color:#f4f3f3}.landingTz-body:not(.landingTz-redesign) .landingTz-result-show-all-block{bottom:37px}.landingTz-body:not(.landingTz-redesign) .landingTz-main-screen-top{margin-top:0}.landingTz-body:not(.landingTz-redesign) .landingTz-wrapper{padding-top:127px;padding-bottom:127px}.landingTz-body:not(.landingTz-redesign) .landingTz-main-screen-middle .landingTz-wrapper{padding-top:0}.landingTz-body:not(.landingTz-redesign) .landingTz-main-screen-bottom .landingTz-wrapper{padding-bottom:63px}.landingTz-body .visuallyhidden{position:absolute;overflow:hidden;margin:-1px;border:0;padding:0;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.landingTz-body .landingTz-main{text-align:center}.landingTz-body .landingTz-main-screen{display:flex;align-items:center;justify-content:center}.landingTz-body .landingTz-main-screen-top{z-index:2}.landingTz-body .landingTz-wrapper{box-sizing:border-box;margin:0 auto;padding:24px 12px;width:100%;max-width:912px}.landingTz-body .landingTz-main-screen-top{position:relative;background:url(/assets/experiment/landingTzMainPageAllRes/img/landingTz-top.png) no-repeat 50% 0}.landingTz-body .landingTz-video-ready{margin:0 0 19px;font-family:Montserrat,sans-serif;font-size:16px;line-height:20px;letter-spacing:-.03em;color:#66d1ff}.landingTz-body .landingTz-video-block{position:relative;box-sizing:border-box;margin:0 auto 40px;border:1px solid #fff;border-radius:4px;width:100%;max-width:328px;background:#fff}.landingTz-body .landingTz-video-under{position:absolute;left:18px;right:18px;top:30px;bottom:-9px;background-color:#ccc;background-position:50% 50%;background-repeat:no-repeat;background-size:cover;opacity:.7;filter:blur(16px)}.landingTz-body .landingTz-video-cont{position:relative;border-radius:4px;width:100%;max-width:326px;background:#fff}.landingTz-body .landingTz-video-inner{position:relative;border-radius:4px;padding-top:55.2147239%;width:100%;height:auto}.landingTz-body .landingTz-video-inner img{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:4px;width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover}.landingTz-body .landingTz-title{margin:0 auto 26px;max-width:500px;font-family:Montserrat,sans-serif;font-weight:800;font-style:normal;font-size:40px;line-height:110%;letter-spacing:-.03em;color:#66d1ff}.landingTz-body .landingTz-btn{position:relative;margin-bottom:20px;outline:none;border:none;border-radius:100px;padding:0;height:auto}.landingTz-body .landingTz-btn:before{content:\"\";position:absolute;left:11px;right:11px;top:24px;bottom:-1px;border-radius:100.399px;background:#6dd3ff;filter:blur(12px)}.landingTz-body .landingTz-btn.landingTz-btn-inner-big .landingTz-btn-inner{min-width:264px}.landingTz-body .landingTz-btn:hover .landingTz-btn-inner{background:linear-gradient(90deg,#66d1ff,#35c3ff)}.landingTz-body .landingTz-btn-inner{position:relative;display:block;box-sizing:border-box;border-radius:100px;padding:18px;min-width:232px;font-family:Roboto,sans-serif;font-weight:700;font-style:normal;font-size:16px;line-height:128.91%;text-shadow:0 .836661px 1.67332px rgba(73,95,119,.1);color:#fff;background:linear-gradient(270deg,#66d1ff,#35c3ff)}.landingTz-body .landingTz-title-logo{margin:0 14px 14px}.landingTz-body .landingTz-title-small{margin:0 auto 38px;max-width:510px;font-family:Montserrat,sans-serif;font-weight:800;font-style:normal;font-size:30px;line-height:120%;letter-spacing:-.03em;color:#66d1ff}.landingTz-body .landingTz-choose-period{display:flex;margin:0 auto 20px;width:100%;max-width:636px}.landingTz-body .landingTz-choose-period-elem{position:relative;box-sizing:border-box;padding:0 12px 24px;width:33.333%}.landingTz-body .landingTz-choose-period-elem:first-child .landingTz-choose-period-label{max-width:156px}.landingTz-body .landingTz-choose-period-elem:last-child .landingTz-choose-period-label{max-width:144px}.landingTz-body .landingTz-choose-period-elem:before{content:\"\";position:absolute;left:0;right:0;top:18px;height:1px;background:#66d1ff}.landingTz-body .landingTz-choose-period-elem:first-child:before{left:auto;width:50%}.landingTz-body .landingTz-choose-period-elem:last-child:before{right:auto;width:50%}.landingTz-body .landingTz-choose-period-label{position:relative;display:block;margin:0 auto;padding-top:46px;max-width:128px}.landingTz-body .landingTz-choose-period-label:before{content:\"\";position:absolute;left:0;right:0;top:0;box-sizing:border-box;margin:0 auto;border:1px solid #66d1ff;border-radius:50%;width:34px;height:34px;background:#fff}.landingTz-body .landingTz-choose-period-label:after{content:\"\";position:absolute;left:0;right:0;top:6px;margin:0 auto;border-radius:50%;width:22px;height:22px;background:linear-gradient(180deg,#66d1ff,#35c3ff 108.93%);opacity:0;transition:opacity .2s ease-out}.landingTz-body .landingTz-choose-period-input:checked+.landingTz-choose-period-label:after{opacity:1}.landingTz-body .landingTz-choose-period-title{margin:0 0 10px;font-family:Montserrat,sans-serif;font-weight:700;font-style:normal;font-size:25px;line-height:109.71%;letter-spacing:-.03em;text-align:center;color:#66d1ff}.landingTz-body .landingTz-choose-period-text{margin:0;font-weight:300;font-size:12px;line-height:140%;color:#3c546f;opacity:.5}.landingTz-body .landingTz-main-screen-middle .landingTz-btn{margin-bottom:8px}.landingTz-body .landingTz-cards-block{display:flex;flex-wrap:wrap;justify-content:center;margin:13px auto 4px}.landingTz-body .landingTz-cards-block img{margin:6px;width:40px}.landingTz-body .landingTz-checkbox{max-width:500px;position:relative;font-size:0;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.landingTz-body .landingTz-checkbox-icon{position:relative;display:inline-block;vertical-align:middle;margin-right:11px;width:14px;height:14px;float:revert}.landingTz-body .landingTz-checkbox-icon:after,.landingTz-body .landingTz-checkbox-icon:before{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background:50% 50% no-repeat;background-size:contain}.landingTz-body .landingTz-checkbox-icon:before{background-image:url(/assets/experiment/landingTzMainPageAllRes/img/checkbox.svg)}.landingTz-body .landingTz-checkbox-icon:after{background-image:url(/assets/experiment/landingTzMainPageAllRes/img/checkmark.svg);opacity:0}.landingTz-body .landingTz-checkbox input:checked~.landingTz-checkbox-icon:before{opacity:0}.landingTz-body .landingTz-checkbox input:checked~.landingTz-checkbox-icon:after{opacity:1}.landingTz-body .landingTz-checkbox-text{vertical-align:middle;font-family:Roboto,sans-serif;font-size:12px;line-height:1.5;color:#3c546f;white-space:normal;text-align:left}.landingTz-body .landingTz-checkbox-text a,.landingTz-body .landingTz-checkbox-text span{text-decoration:underline;color:#3c546f}.landingTz-body .landingTz-checkbox-text a:hover,.landingTz-body .landingTz-checkbox-text span:hover{color:#f90}.landingTz-body .landingTz-recurring-payments{position:relative;padding-left:14px;font-size:12px;line-height:13px;color:#3c546f;opacity:.3}.landingTz-body .landingTz-recurring-payments:before{content:\"\";position:absolute;left:0;top:3px;width:9px;height:9px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.394 4.357l-2.952.532 2.069 2.05-1.868 1.29-1.446-2.467L2.771 8.23.904 6.958 2.932 4.87 0 4.357l.703-2.012 2.69 1.196-.36-2.866h2.329L5 3.54l2.671-1.215.723 2.031z' fill='%233C546F'/%3E%3C/svg%3E\")}.landingTz-body .landingTz-recurring-payments.not-star:before{display:none}.landingTz-body .landingTz-main-screen-bottom{position:relative;background:url(/assets/experiment/landingTzMainPageAllRes/img/landingTz-bottom.png) no-repeat 50% 50%}.landingTz-body .landingTz-main-screen-bottom .landingTz-title-small{margin:-12px auto 0;max-width:346px;line-height:110%}.landingTz-body .landingTz-pluses-block{display:flex;flex-wrap:wrap;justify-content:center;margin:0 -30px 22px}.landingTz-body .landingTz-pluses-elem{position:relative;box-shadow:0 6.44541px 22.5589px rgba(43,43,72,.05);box-sizing:border-box;margin:70px 18px 18px;border-radius:6.44541px;padding:90px 20px 40px;width:100%;max-width:280px;background:#fff}.landingTz-body .landingTz-pluses-img{position:absolute;left:0;right:0;top:-40px;margin:auto}.landingTz-body .landingTz-pluses-img.headphones{left:16px;top:-68px}.landingTz-body .landingTz-pluses-img.film{left:auto;right:-25px;top:-82px}.landingTz-body .landingTz-pluses-img.rocket{left:10px;top:-42px}.landingTz-body .landingTz-pluses-title{margin:0 0 16px;font-family:Montserrat,sans-serif;font-weight:700;font-style:normal;font-size:22px;line-height:107%;letter-spacing:-.03em;text-align:center;color:#66d1ff}.landingTz-body .landingTz-pluses-text{margin:0 auto;max-width:184px;font-family:Montserrat,sans-serif;font-size:14px;line-height:120%;text-align:center;color:#3c546f;opacity:.6}.landingTz-body .landingTz-dwn-browser-block{margin:2px 0 0;font-family:Montserrat,sans-serif;font-weight:400;font-style:normal;font-size:11px;line-height:132%;text-align:center;color:#495f77;opacity:.5}.landingTz-body .landingTz-dwn-browser-block a{font-weight:700;color:#495f77}.landingTz-body .landingTz-dwn-browser-block a:hover{text-decoration:none}.landingTz-body .landingTz-main-screen-footer{padding:0;min-height:auto}.landingTz-body .landingTz-one-time-fee-modal{display:none}.landingTz-body.landingTz-body-one-time-fee .landingTz-choose-period-elem:last-child .landingTz-choose-period-label{max-width:184px}.landingTz-body.landingTz-body-one-time-fee .landingTz-choose-period-elem:last-child .landingTz-choose-period-label .landingTz-choose-period-text{opacity:1}.landingTz-body.landingTz-body-one-time-fee .landingTz-choose-period-elem:last-child .landingTz-choose-period-label .landingTz-choose-period-text span{opacity:.5}.landingTz-body.landingTz-body-one-time-fee .more-details-popup-open{box-shadow:none;outline:none;border:none;padding:1px 0;font-family:Roboto,sans-serif;font-weight:300;color:#35c3ff;background-color:transparent;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.904 1.038c0-.137.043-.252.129-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.87 0c0-.137.044-.252.13-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.872 0c0-.137.043-.252.129-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.87 0c0-.137.044-.252.13-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.369.129.512.512 0 01-.37-.13.472.472 0 01-.128-.339zm2.872 0c0-.137.043-.252.129-.346a.477.477 0 01.37-.146.48.48 0 01.504.492.46.46 0 01-.136.34.512.512 0 01-.369.129.512.512 0 01-.37-.13.472.472 0 01-.128-.339zm2.871 0c0-.137.043-.252.129-.346a.477.477 0 01.37-.146.48.48 0 01.504.492.46.46 0 01-.136.34.512.512 0 01-.369.129.512.512 0 01-.369-.13.472.472 0 01-.129-.339zm2.871 0a.49.49 0 01.13-.346.477.477 0 01.368-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.369.129.512.512 0 01-.369-.13.472.472 0 01-.129-.339zm2.871 0a.49.49 0 01.13-.346.477.477 0 01.368-.146.48.48 0 01.504.492.46.46 0 01-.134.34.512.512 0 01-.37.129.512.512 0 01-.369-.13.472.472 0 01-.129-.339zm2.871 0a.49.49 0 01.13-.346.477.477 0 01.368-.146.48.48 0 01.504.492.46.46 0 01-.134.34.512.512 0 01-.37.129.512.512 0 01-.369-.13.472.472 0 01-.129-.339zm2.872 0c0-.137.043-.252.128-.346a.477.477 0 01.37-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.369-.13.472.472 0 01-.128-.339zm2.87 0a.49.49 0 01.13-.346.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.872 0c0-.137.043-.252.129-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.87 0c0-.137.044-.252.13-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339zm2.872 0c0-.137.043-.252.129-.346a.477.477 0 01.369-.146.48.48 0 01.504.492.46.46 0 01-.135.34.512.512 0 01-.37.129.512.512 0 01-.368-.13.472.472 0 01-.13-.339z' fill='%2366D1FF'/%3E%3C/svg%3E\");background-position:50% 100%;background-repeat:no-repeat}.landingTz-body.landingTz-body-one-time-fee .more-details-popup-open:hover{background:transparent}.landingTz-body.landingTz-body-one-time-fee .landingTz-choose-period-top{position:relative}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-modal{position:absolute;left:0;right:0;top:5px;bottom:22px;z-index:2;margin:auto;border-radius:8px;max-width:648px;text-align:center}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-modal:before{content:\"\";position:absolute;left:10%;right:10%;top:20.4%;bottom:-1.95%;z-index:3;border-radius:4px;background:#2b2b48;opacity:.3;filter:blur(30px)}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-inner{position:absolute;left:0;right:0;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;border-radius:8px;padding:18px;min-height:100%;background:#fff}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-inner h3{margin:12px 0 24px;font-family:Montserrat,sans-serif;font-weight:700;font-style:normal;font-size:36px;color:#2b2b48}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-inner p{margin:0 10px 28px 0;max-width:510px;font-family:Montserrat,sans-serif;font-weight:500;font-style:normal;font-size:18px;line-height:150%;letter-spacing:-.03em;color:#3c546f}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-inner a{margin-right:10px;letter-spacing:-.01em;text-decoration:underline;color:#3c546f}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-inner a:hover{text-decoration:none;color:#f90}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-modal-close{position:absolute;right:8px;top:8px;z-index:5;box-shadow:none;outline:none;border:none;padding:0;width:16px;height:16px;background-color:transparent;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.666 4.273l-.94-.94L8 7.06 4.273 3.333l-.94.94L7.06 8l-3.727 3.727.94.94L8 8.94l3.726 3.727.94-.94L8.94 8l3.726-3.727z' fill='%233C546F'/%3E%3C/svg%3E\");background-position:50% 50%;background-repeat:no-repeat;opacity:.5;transition:opacity .2s ease-out}.landingTz-body.landingTz-body-one-time-fee .landingTz-one-time-fee-modal-close:hover{opacity:1}.landingTz-body .disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.landingTz-body:not(.landingTz-paddle) .paddle-only{display:none}@media (max-width:979px){.landingTz-body .landingTz-pluses-block{margin:0 -12px 22px}.landingTz-body .landingTz-pluses-elem{margin:70px 12px 18px}}@media (max-width:767px){.landingTz-body .landingTz-pluses-img.film{right:-12px}}@media (max-width:720px){.landingTz-body .landingTz-result-hint-body{margin-left:12px;padding:18px 16px 15px;width:280px;font-size:20px}}@media (max-width:479px){.landingTz-body .landingTz-main-screen-top{margin-top:-146px}.landingTz-body .landingTz-main-screen-top .landingTz-wrapper{padding-top:152px}.landingTz-body .landingTz-choose-period{flex-wrap:wrap;justify-content:center}.landingTz-body .landingTz-choose-period-elem{width:50%}.landingTz-body .landingTz-title{font-size:28px}.landingTz-body .landingTz-title-small{font-size:24px}.landingTz-body .landingTz-choose-period-title{font-size:20px}.landingTz-body .landingTz-choose-period-elem:first-child:before{left:auto;width:50%}.landingTz-body .landingTz-choose-period-elem:nth-child(2):before{right:auto;width:50%}.landingTz-body .landingTz-choose-period-elem:last-child:before{display:none}.landingTz-body .landingTz-btn-inner{font-size:13px}}@media (max-width:460px){.landingTz-body .landingTz-title-logo{margin:0 8px 14px}}", ""])
    },
    ls82: function(e, t, n) {
        var r = function(e) {
            "use strict";
            var t = Object.prototype
              , n = t.hasOwnProperty
              , r = "function" == typeof Symbol ? Symbol : {}
              , o = r.iterator || "@@iterator"
              , i = r.asyncIterator || "@@asyncIterator"
              , a = r.toStringTag || "@@toStringTag";
            function s(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function(e, t, n) {
                    return e[t] = n
                }
            }
            function l(e, t, n, r) {
                var o = t && t.prototype instanceof d ? t : d
                  , i = Object.create(o.prototype)
                  , a = new _(r || []);
                return i._invoke = function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o)
                                throw i;
                            return z()
                        }
                        for (n.method = o,
                        n.arg = i; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var s = w(a, n);
                                if (s) {
                                    if (s === u)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = c(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                l.arg === u)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = "completed",
                            n.method = "throw",
                            n.arg = l.arg)
                        }
                    }
                }(e, n, a),
                i
            }
            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var u = {};
            function d() {}
            function p() {}
            function f() {}
            var m = {};
            s(m, o, (function() {
                return this
            }
            ));
            var h = Object.getPrototypeOf
              , v = h && h(h(k([])));
            v && v !== t && n.call(v, o) && (m = v);
            var g = f.prototype = d.prototype = Object.create(m);
            function b(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function y(e, t) {
                var r;
                this._invoke = function(o, i) {
                    function a() {
                        return new t((function(r, a) {
                            !function r(o, i, a, s) {
                                var l = c(e[o], e, i);
                                if ("throw" !== l.type) {
                                    var u = l.arg
                                      , d = u.value;
                                    return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                        r("next", e, a, s)
                                    }
                                    ), (function(e) {
                                        r("throw", e, a, s)
                                    }
                                    )) : t.resolve(d).then((function(e) {
                                        u.value = e,
                                        a(u)
                                    }
                                    ), (function(e) {
                                        return r("throw", e, a, s)
                                    }
                                    ))
                                }
                                s(l.arg)
                            }(o, i, r, a)
                        }
                        ))
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }
            function w(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        w(e, t),
                        "throw" === t.method))
                            return u;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    u;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                u) : o : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                u)
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function T(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function _(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(x, this),
                this.reset(!0)
            }
            function k(e) {
                if (e) {
                    var t = e[o];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var r = -1
                          , i = function t() {
                            for (; ++r < e.length; )
                                if (n.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return i.next = i
                    }
                }
                return {
                    next: z
                }
            }
            function z() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = f,
            s(g, "constructor", f),
            s(f, "constructor", p),
            p.displayName = s(f, a, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
                s(e, a, "GeneratorFunction")),
                e.prototype = Object.create(g),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            b(y.prototype),
            s(y.prototype, i, (function() {
                return this
            }
            )),
            e.AsyncIterator = y,
            e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new y(l(t, n, r, o),i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            b(g),
            s(g, a, "Generator"),
            s(g, o, (function() {
                return this
            }
            )),
            s(g, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = k,
            _.prototype = {
                constructor: _,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(T),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        r && (t.method = "next",
                        t.arg = void 0),
                        !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc")
                              , l = n.call(i, "finallyLoc");
                            if (s && l) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    u) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    u
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            T(n),
                            u
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                T(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: k(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    u
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = r
        } catch (e) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    },
    o0o1: function(e, t, n) {
        e.exports = n("ls82")
    },
    p46w: function(e, t, n) {
        var r, o;
        !function(i) {
            if (void 0 === (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o),
            !0,
            e.exports = i(),
            !!0) {
                var a = window.Cookies
                  , s = window.Cookies = i();
                s.noConflict = function() {
                    return window.Cookies = a,
                    s
                }
            }
        }((function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        t[r] = n[r]
                }
                return t
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function n(r) {
                function o() {}
                function i(t, n, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (i = e({
                            path: "/"
                        }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            var a = JSON.stringify(n);
                            /^[\{\[]/.test(a) && (n = a)
                        } catch (e) {}
                        n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var s = "";
                        for (var l in i)
                            i[l] && (s += "; " + l,
                            !0 !== i[l] && (s += "=" + i[l].split(";")[0]));
                        return document.cookie = t + "=" + n + s
                    }
                }
                function a(e, n) {
                    if ("undefined" != typeof document) {
                        for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                            var s = i[a].split("=")
                              , l = s.slice(1).join("=");
                            n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                            try {
                                var c = t(s[0]);
                                if (l = (r.read || r)(l, c) || t(l),
                                n)
                                    try {
                                        l = JSON.parse(l)
                                    } catch (e) {}
                                if (o[c] = l,
                                e === c)
                                    break
                            } catch (e) {}
                        }
                        return e ? o[e] : o
                    }
                }
                return o.set = i,
                o.get = function(e) {
                    return a(e, !1)
                }
                ,
                o.getJSON = function(e) {
                    return a(e, !0)
                }
                ,
                o.remove = function(t, n) {
                    i(t, "", e(n, {
                        expires: -1
                    }))
                }
                ,
                o.defaults = {},
                o.withConverter = n,
                o
            }((function() {}
            ))
        }
        ))
    },
    p7i5: function(e, t, n) {
        "use strict";
        n.r(t);
        n("b8/c");
        var r = n("Mo24")
          , o = function(e) {
            var t = r[envProps.lang] ? r[envProps.lang] : r.en;
            return t[e] ? t[e] : r.en[e]
        }
          , i = n("4FFG");
        window.widgetApk = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                var e = this;
                if (Object(i.a)(this.gaResourceId),
                Object(i.b)(this.frequencyParams, this.frequencyStorageKey)) {
                    Object(i.c)(this.frequencyParams, this.frequencyStorageKey);
                    var t = this.templateParams.appLink
                      , n = document.createElement("div");
                    n.className = "widget",
                    n.innerHTML = function(e) {
                        return '\n        <div class="widget__overlay">\n            <div class="widget__container">\n                <h2 class="widget__title">Downloader</h2>\n                <button class="widget__button widget__button--close" type="button">\n                    <img class="widget__icon" src="/assets/experiment/widgetApk/img/close.svg" alt="'.concat(o("close"), '">\n                </button>\n                <p class="widget__text">').concat(o("download_faster_and_more_conveniently"), '</p>\n                <a class="widget__button widget__button--link" href=').concat(e, ">").concat(o("install_app"), "</a>\n            </div>\n        </div>\n    ")
                    }(t),
                    document.body.append(n),
                    document.body.classList.add("stop-scroll"),
                    gtag("event", "show_widget", {
                        experiment: "widgetApk",
                        send_to: this.gaResourceId
                    });
                    var r = n.querySelector(".widget__button--close")
                      , a = n.querySelector(".widget__button--link");
                    r.addEventListener("click", (function() {
                        n.remove(),
                        document.body.classList.remove("stop-scroll"),
                        gtag("event", "close_widget", {
                            experiment: "widgetApk",
                            send_to: e.gaResourceId
                        })
                    }
                    )),
                    n.addEventListener("click", (function(t) {
                        "widget__overlay" === t.target.className && (n.remove(),
                        document.body.classList.remove("stop-scroll"),
                        gtag("event", "close_widget", {
                            experiment: "widgetApk",
                            send_to: e.gaResourceId
                        }))
                    }
                    )),
                    a.addEventListener("click", (function() {
                        gtag("event", "click_download_app", {
                            experiment: "widgetApk",
                            send_to: e.gaResourceId
                        })
                    }
                    ))
                }
                return !0
            }
        }
    },
    r0hi: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("/klw");
        window.push = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                r.a.activatePush.on((function() {
                    if (window.innerHeight > 400) {
                        var e = document.createElement("script");
                        e.setAttribute("id", "push"),
                        e.setAttribute("type", "text/javascript"),
                        e.setAttribute("data-cfasync", !1),
                        e.setAttribute("src", "/propeller-tag.js"),
                        document.body.appendChild(e);
                        var t = document.createElement("script");
                        t.setAttribute("type", "text/javascript"),
                        t.setAttribute("data-cfasync", !1),
                        t.setAttribute("src", "/propeller-tag-2.js"),
                        document.body.appendChild(t)
                    }
                }
                ))
            }
        }
    },
    s4NR: function(e, t, n) {
        "use strict";
        t.decode = t.parse = n("kd2E"),
        t.encode = t.stringify = n("4JlD")
    },
    tCk3: function(e, t, n) {
        "use strict";
        n.r(t);
        n("wZR1");
        window.koreanBnr = {
            isAvailable: function() {
                return !0
            },
            init: function() {
                return ga("create", this.gaResourceId, "auto", "koreanBnr"),
                ga("".concat("koreanBnr", ".send"), "event", "banner", "show"),
                function(e) {
                    document.getElementsByClassName("search-block-default-height")[0].insertAdjacentHTML("afterEnd", function(e) {
                        return '\n<div id="bnr" class="bnr">\n    <div class="bnr-title"></div>\n    <div class="bnr-content">\n        <script src=\'//img.mobon.net/js/common/HawkEyesMaker.js\' ><\/script>\n        <script >\n            new HawkEyes('.concat(e, ");\n        <\/script>\n    </div>\n</div>\n")
                    }(e))
                }(JSON.stringify(this.templateParams.json)),
                document.querySelector("#bnr").addEventListener("click", (function() {
                    ga("".concat("koreanBnr", ".send"), "event", "banner", "click_Banners")
                }
                )),
                !0
            }
        }
    },
    tQ2B: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = n("Rn+g")
          , i = n("eqyj")
          , a = n("MLWZ")
          , s = n("g7np")
          , l = n("w0Vi")
          , c = n("OTTw")
          , u = n("LYNF")
          , d = n("JEQr")
          , p = n("endd");
        e.exports = function(e) {
            return new Promise((function(t, n) {
                var f, m = e.data, h = e.headers, v = e.responseType;
                function g() {
                    e.cancelToken && e.cancelToken.unsubscribe(f),
                    e.signal && e.signal.removeEventListener("abort", f)
                }
                r.isFormData(m) && delete h["Content-Type"];
                var b = new XMLHttpRequest;
                if (e.auth) {
                    var y = e.auth.username || ""
                      , w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    h.Authorization = "Basic " + btoa(y + ":" + w)
                }
                var x = s(e.baseURL, e.url);
                function T() {
                    if (b) {
                        var r = "getAllResponseHeaders"in b ? l(b.getAllResponseHeaders()) : null
                          , i = {
                            data: v && "text" !== v && "json" !== v ? b.response : b.responseText,
                            status: b.status,
                            statusText: b.statusText,
                            headers: r,
                            config: e,
                            request: b
                        };
                        o((function(e) {
                            t(e),
                            g()
                        }
                        ), (function(e) {
                            n(e),
                            g()
                        }
                        ), i),
                        b = null
                    }
                }
                if (b.open(e.method.toUpperCase(), a(x, e.params, e.paramsSerializer), !0),
                b.timeout = e.timeout,
                "onloadend"in b ? b.onloadend = T : b.onreadystatechange = function() {
                    b && 4 === b.readyState && (0 !== b.status || b.responseURL && 0 === b.responseURL.indexOf("file:")) && setTimeout(T)
                }
                ,
                b.onabort = function() {
                    b && (n(u("Request aborted", e, "ECONNABORTED", b)),
                    b = null)
                }
                ,
                b.onerror = function() {
                    n(u("Network Error", e, null, b)),
                    b = null
                }
                ,
                b.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded"
                      , r = e.transitional || d.transitional;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(u(t, e, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", b)),
                    b = null
                }
                ,
                r.isStandardBrowserEnv()) {
                    var _ = (e.withCredentials || c(x)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    _ && (h[e.xsrfHeaderName] = _)
                }
                "setRequestHeader"in b && r.forEach(h, (function(e, t) {
                    void 0 === m && "content-type" === t.toLowerCase() ? delete h[t] : b.setRequestHeader(t, e)
                }
                )),
                r.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials),
                v && "json" !== v && (b.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress && b.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress && b.upload && b.upload.addEventListener("progress", e.onUploadProgress),
                (e.cancelToken || e.signal) && (f = function(e) {
                    b && (n(!e || e && e.type ? new p("canceled") : e),
                    b.abort(),
                    b = null)
                }
                ,
                e.cancelToken && e.cancelToken.subscribe(f),
                e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))),
                m || (m = null),
                b.send(m)
            }
            ))
        }
    },
    uJcE: function(e, t, n) {
        "use strict";
        n("XZr7")
    },
    vDqi: function(e, t, n) {
        e.exports = n("zuR4")
    },
    w0Vi: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), (function(e) {
                if (i = e.indexOf(":"),
                t = r.trim(e.substr(0, i)).toLowerCase(),
                n = r.trim(e.substr(i + 1)),
                t) {
                    if (a[t] && o.indexOf(t) >= 0)
                        return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                }
            }
            )),
            a) : a
        }
    },
    wZR1: function(e, t, n) {
        var r = n("2jMJ");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n("aET+")(r, o);
        r.locals && (e.exports = r.locals)
    },
    xAGQ: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = n("JEQr");
        e.exports = function(e, t, n) {
            var i = this || o;
            return r.forEach(n, (function(n) {
                e = n.call(i, e, t)
            }
            )),
            e
        }
    },
    "xTJ+": function(e, t, n) {
        "use strict";
        var r = n("HSsa")
          , o = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === o.call(e)
        }
        function a(e) {
            return void 0 === e
        }
        function s(e) {
            return null !== e && "object" == typeof e
        }
        function l(e) {
            if ("[object Object]" !== o.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function c(e) {
            return "[object Function]" === o.call(e)
        }
        function u(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]),
                i(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: s,
            isPlainObject: l,
            isUndefined: a,
            isDate: function(e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function(e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return s(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: u,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    l(t[r]) && l(n) ? t[r] = e(t[r], n) : l(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++)
                    u(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return u(t, (function(t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                }
                )),
                e
            },
            trim: function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            stripBOM: function(e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e
            }
        }
    },
    yK9s: function(e, t, n) {
        "use strict";
        var r = n("xTJ+");
        e.exports = function(e, t) {
            r.forEach(e, (function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[r])
            }
            ))
        }
    },
    yLpj: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    zuR4: function(e, t, n) {
        "use strict";
        var r = n("xTJ+")
          , o = n("HSsa")
          , i = n("CgaS")
          , a = n("SntB");
        var s = function e(t) {
            var n = new i(t)
              , s = o(i.prototype.request, n);
            return r.extend(s, i.prototype, n),
            r.extend(s, n),
            s.create = function(n) {
                return e(a(t, n))
            }
            ,
            s
        }(n("JEQr"));
        s.Axios = i,
        s.Cancel = n("endd"),
        s.CancelToken = n("jfS+"),
        s.isCancel = n("Lmem"),
        s.VERSION = n("XM5P").version,
        s.all = function(e) {
            return Promise.all(e)
        }
        ,
        s.spread = n("DfZB"),
        s.isAxiosError = n("XwJu"),
        e.exports = s,
        e.exports.default = s
    }
});
//# sourceMappingURL=app.js.map
