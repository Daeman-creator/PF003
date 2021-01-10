(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function (e, t, n) {
        n("mldH"), e.exports = n("A3rM")
    },
    "02vm": function (e, t, n) {
        "use strict";

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e + "_" + Math.random().toString(36).substr(2, 9)
        }
        n.d(t, "a", (function () {
            return o
        }))
    },
    "5sN9": function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return v
        })), n.d(t, "b", (function () {
            return w
        })), n.d(t, "d", (function () {
            return E
        })), n.d(t, "c", (function () {
            return Ge
        })), n.d(t, "a", (function () {
            return Je.default
        }));
        var o = n("02vm");

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var s = function () {
            function e(t, n, o) {
                var i;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), i = t, ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? i instanceof HTMLElement : i && "object" === r(i) && null !== i && 1 === i.nodeType && "string" == typeof i.nodeName) ? this.el = void 0 !== t ? t : null : this.el = this.get(t, document), this.id = n, this.type = o, this.init(), this.addEvents()
            }
            var t, n, o;
            return t = e, (n = [{
                key: "init",
                value: function () {}
            }, {
                key: "destroy",
                value: function () {
                    this.removeEvents()
                }
            }, {
                key: "addEvents",
                value: function () {}
            }, {
                key: "removeEvents",
                value: function () {}
            }, {
                key: "get",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el;
                    return t.querySelector(e)
                }
            }, {
                key: "getAll",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el;
                    return Array.from(t.querySelectorAll(e))
                }
            }]) && i(t.prototype, n), o && i(t, o), e
        }();

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function u(e, t, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = h(e);
                if (t) {
                    var r = h(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return p(this, n)
            }
        }

        function p(e, t) {
            return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var v = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(i, e);
            var t, n, o, r = d(i);

            function i() {
                return c(this, i), r.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "init",
                value: function () {
                    u(h(i.prototype), "init", this).call(this)
                }
            }, {
                key: "addEvents",
                value: function () {
                    u(h(i.prototype), "addEvents", this).call(this)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    u(h(i.prototype), "removeEvents", this).call(this)
                }
            }]) && l(t.prototype, n), o && l(t, o), i
        }(s);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function g(e, t) {
            return (g = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function m(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = b(e);
                if (t) {
                    var r = b(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return x(this, n)
            }
        }

        function x(e, t) {
            return !t || "object" !== y(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var w = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }(n, e);
            var t = m(n);

            function n(e, o, r) {
                var i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (i = t.call(this, e, o)).view = void 0 !== r ? r : "", i
            }
            return n
        }(s);

        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var k, O = function () {
                function e() {
                    var t = this;
                    if (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), "undefined" == typeof window || void 0 === window.requestAnimationFrame) throw new Error("You are not using this package in browser environment");
                    this.queue = [], this.frameHandler = function () {
                        return t.frame()
                    }
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "start",
                    value: function () {
                        this.stopped = !1, this.lastNow = performance.now(), this.lastRAFId = window.requestAnimationFrame(this.frameHandler)
                    }
                }, {
                    key: "stop",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && window.cancelAnimationFrame(this.lastRAFId), this.stopped = !0
                    }
                }, {
                    key: "frame",
                    value: function () {
                        var e = this,
                            t = performance.now(),
                            n = t - this.lastNow;
                        if (this.lastNow = t, this.queue.length < 1) return !1;
                        this.queue.forEach((function (t) {
                            t.isHeavy ? e.frameId % 2 == 0 && t.handler(n, e.frameId) : t.handler(n, e.frameId)
                        })), this.frameId += 1, this.stopped || (this.lastRAFId = window.requestAnimationFrame(this.frameHandler))
                    }
                }, {
                    key: "add",
                    value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if ("function" != typeof e) throw new Error("Expected function as handler");
                        return void 0 === t && (t = "h_".concat(++this.uidCounter)), this.queue.push({
                            id: t,
                            handler: e,
                            isHeavy: n
                        }), 1 === this.queue.length && this.start(), t
                    }
                }, {
                    key: "moveToFirst",
                    value: function (e) {
                        if (void 0 === e) throw new Error("Expected id");
                        var t = this.queue.findIndex((function (t) {
                            return t.id === e
                        }));
                        t < 0 || this.queue.unshift(this.queue.splice(t, 1)[0])
                    }
                }, {
                    key: "remove",
                    value: function (e) {
                        if (void 0 === e) throw new Error("Expected id");
                        var t = this.queue.findIndex((function (t) {
                            return t.id === e
                        }));
                        t < 0 || (this.queue.splice(t, 1), this.queue.length <= 0 && this.stop())
                    }
                }]) && _(t.prototype, n), o && _(t, o), e
            }(),
            T = (document, document, "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && (document, DocumentTouch), navigator.msMaxTouchPoints && navigator.msMaxTouchPoints, window.navigator.msPointerEnabled, document, navigator.userAgent.indexOf("Firefox"), !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0),
            R = (/constructor/i.test(window.HTMLElement) || (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(), !!!document.documentMode && window.StyleMedia, (!(!window.chrome || !window.chrome.webstore && !window.chrome.runtime) || T) && window.CSS, (k = window.matchMedia("(pointer:coarse)")) && k.matches),
            P = window.location.search,
            I = new URLSearchParams(P),
            M = !0,
            S = !1;
        I.has("loader") && (M = "true" === I.get("loader")), I.has("articles") && (S = "open" === I.get("articles"));
        var E = {
                urlParams: I,
                perf: function () {
                    for (var e = (window.performance || Date).now(), t = 0; t < 2e4; t++) Math.pow(Math.sin(Math.random()), 2);
                    var n = (window.performance || Date).now() - e;
                    return n < 7 ? 3 : n < 14 ? 2 : n < 22 ? 1 : 0
                }(),
                loaded: !1,
                doc: document,
                body: document.body,
                win: window,
                html: document.documentElement,
                isMobile: R,
                loader: M,
                ticker: !1,
                promises: {},
                xhrActive: !1,
                env: "production",
                chunks: {},
                webgl: !0,
                webp: !1,
                controls: {
                    down: !1
                },
                currentMonth: null,
                state: {
                    articlesOverview: S,
                    menuIsOpen: !1,
                    navUpdate: !1
                },
                observer: {
                    threshold: 0
                },
                mouse: {
                    x: 0,
                    y: 0
                },
                view: {
                    previous: null,
                    previousScroll: 0,
                    current: null,
                    previousType: null
                },
                raf: new O,
                layout: {
                    w: window.innerWidth,
                    h: window.innerHeight
                },
                settings: n("W0fh")
            },
            A = n("oJ6j"),
            L = n("C6M3"),
            z = n("z/o8");

        function j(e) {
            return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function D(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function C(e, t, n) {
            return (C = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = G(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function N(e, t) {
            return (N = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function U(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = G(e);
                if (t) {
                    var r = G(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return F(this, n)
            }
        }

        function F(e, t) {
            return !t || "object" !== j(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function G(e) {
            return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var J = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && N(e, t)
                }(i, e);
                var t, n, o, r = U(i);

                function i() {
                    return D(this, i), r.apply(this, arguments)
                }
                return t = i, (n = [{
                    key: "init",
                    value: function () {
                        C(G(i.prototype), "init", this).call(this), this.loaderText = this.get(".loader-progress-text"), this.loaderBar = this.get(".loader-bar"), this.loaderProgressInner = this.get(".loader-progress-inner"), this.loaderLogoInner = this.get(".loader-logo-inner"), this.loaderBg = this.get(".loader-bg"), this.start = this.start.bind(this), this.end = this.end.bind(this), this.loaderBarLerped = 0, this.setProgress = this.setProgress.bind(this), this.render = this.render.bind(this), this.skip = this.skip.bind(this), this.setProgress(0), E.loader && E.raf.add(this.render, "loadRender")
                    }
                }, {
                    key: "render",
                    value: function () {
                        this.loaderBarLerped = Object(L.a)(this.loaderBarLerped, this.loaderBarAmount, .1), this.loaderBarLerped < .999 ? (this.loaderBar.style.transform = "scaleX(".concat(this.loaderBarLerped, ")"), this.loaderText.innerHTML = Math.floor(100 * this.loaderBarLerped)) : this.loaderText.innerHTML = 100
                    }
                }, {
                    key: "addEvents",
                    value: function () {
                        C(G(i.prototype), "addEvents", this).call(this), E.loader && A.a.on("LOAD_START", this.start), A.a.on("LOAD_SKIP", this.skip)
                    }
                }, {
                    key: "removeEvents",
                    value: function () {
                        C(G(i.prototype), "removeEvents", this).call(this), E.raf.remove("loadRender"), E.loader && A.a.off("LOAD_START", this.start)
                    }
                }, {
                    key: "skip",
                    value: function () {
                        E.loaded = !0, this.el.remove(), this.destroy()
                    }
                }, {
                    key: "setProgress",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.loaderBarAmount = e / 100
                    }
                }, {
                    key: "end",
                    value: function () {
                        var e = this;
                        if (E.loader) {
                            A.a.emit("LOAD_DONE"), E.loaded = !0, E.body.classList.add("is-loaded");
                            var t = this;
                            Ge.gl.start(), z.a.timeline({
                                onComplete: function () {
                                    t.el.remove(), t.destroy()
                                }
                            }).to(this.loaderBar, {
                                duration: .8,
                                ease: "expo.inOut",
                                scaleX: 0,
                                onStart: function () {
                                    return e.loaderBar.style.transformOrigin = "right"
                                }
                            }).to(this.loaderProgressInner, {
                                duration: .8,
                                ease: "expo.inOut",
                                yPercent: 101
                            }, .1).to(this.loaderLogoInner, {
                                duration: .8,
                                ease: "expo.inOut",
                                yPercent: 101
                            }, .3).to(this.loaderBg, {
                                duration: 1.2,
                                ease: "expo.inOut",
                                yPercent: -101,
                                onStart: function () {
                                    setTimeout((function () {
                                        A.a.emit("PAGE_IN")
                                    }), 100)
                                }
                            }, .4)
                        }
                    }
                }, {
                    key: "start",
                    value: function () {
                        var e = z.a.timeline({
                            onComplete: function () {
                                0 !== window.scrollY && window.scrollTo(0, 0)
                            }
                        });
                        this.loaderLogoInner.style.transform = "", this.loaderProgressInner.style.transform = "", e.fromTo(this.loaderLogoInner, {
                            yPercent: 101
                        }, {
                            duration: 1.4,
                            ease: "expo.out",
                            yPercent: 0
                        }).fromTo(this.loaderProgressInner, {
                            yPercent: 101
                        }, {
                            duration: 1.4,
                            ease: "expo.out",
                            yPercent: 0
                        }, .1)
                    }
                }]) && B(t.prototype, n), o && B(t, o), i
            }(w),
            H = n("o0o1"),
            Y = n.n(H),
            q = n("bxBD"),
            W = n("9OAr"),
            V = n.n(W);

        function X(e) {
            return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function K(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function Q(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Z(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function $(e, t, n) {
            return ($ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = oe(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function ee(e, t) {
            return (ee = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function te(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = oe(e);
                if (t) {
                    var r = oe(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return ne(this, n)
            }
        }

        function ne(e, t) {
            return !t || "object" !== X(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function oe(e) {
            return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var re = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ee(e, t)
            }(a, e);
            var t, n, o, r, i, s = te(a);

            function a() {
                return Q(this, a), s.apply(this, arguments)
            }
            return t = a, (n = [{
                key: "init",
                value: function () {
                    $(oe(a.prototype), "init", this).call(this), this.menuBackButtonClick = this.menuBackButtonClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.animateIn = this.animateIn.bind(this), this.animateOut = this.animateOut.bind(this), this.update = this.update.bind(this), this.menuList = this.get(".menu-list"), this.scroll = this.get(".menu-scroll"), this.menuCurrent = this.get(".is-current"), this.menuListItems = this.getAll(".menu-list-item"), this.menuListItemsLinks = this.getAll(".menu-list-item a"), this.menuBg = this.get(".menu-bg"), this.menuLogo = this.get(".menu-logo"), this.menuLogoInner = this.get(".menu-logo-inner"), this.menuListItemInner = this.getAll(".menu-list-item-inner"), this.menuBackButton = this.get(".menu-back-button"), this.isMouseOver = !1, this.menuIsOpen = E.state.menuIsOpen = !1, this.transformation = this.transformationLerp = 0, E.isMobile || this.autoScroll()
                }
            }, {
                key: "addEvents",
                value: function () {
                    var e = this;
                    $(oe(a.prototype), "addEvents", this).call(this), this.menuListItemsLinks.forEach((function (t) {
                        t.addEventListener("mouseover", (function (t) {
                            return e.onMouseOver(t)
                        })), t.addEventListener("mouseenter", (function (t) {
                            return e.onMouseEnter(t)
                        })), t.addEventListener("mouseleave", (function (t) {
                            return e.onMouseLeave(t)
                        })), t.addEventListener("mousemove", (function (t) {
                            return e.onMouseMove(t)
                        })), t.addEventListener("click", e.menuBackButtonClick)
                    })), this.menuLogo.addEventListener("click", this.menuBackButtonClick), this.menuBackButton.addEventListener("click", this.menuBackButtonClick)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    var e = this;
                    $(oe(a.prototype), "removeEvents", this).call(this), this.menuListItemsLinks.forEach((function (t) {
                        t.addEventListener("mouseover", e.onMouseOver), t.removeEventListener("mouseenter", e.onMouseEnter), t.removeEventListener("mouseleave", e.onMouseLeave), t.removeEventListener("mousemove", e.onMouseMove), t.removeEventListener("click", e.menuBackButtonClick)
                    })), this.menuBackButton.removeEventListener("click", this.menuBackButtonClick()), this.menuLogo.removeEventListener("click", this.menuBackButtonClick)
                }
            }, {
                key: "menuBackButtonClick",
                value: function () {
                    this.animateOut(), Ge.kaleidoscopeNav.start()
                }
            }, {
                key: "checkLinks",
                value: function (e) {
                    this.menuListItems.forEach((function (t) {
                        e.target.offsetParent.offsetParent === t ? t.classList.contains("is-active") || (t.classList.add("is-active"), t.classList.remove("not-active")) : t.classList.contains("not-active") || (t.classList.add("not-active"), t.classList.remove("is-active"))
                    }))
                }
            }, {
                key: "onMouseOver",
                value: function (e) {
                    this.onMouseEnter(e)
                }
            }, {
                key: "onMouseMove",
                value: function (e) {}
            }, {
                key: "onMouseEnter",
                value: function (e) {
                    this.isMouseOver || (this.isMouseOver = !0, this.checkLinks(e))
                }
            }, {
                key: "onMouseLeave",
                value: function (e) {
                    this.isMouseOver = !1, this.menuListItems.forEach((function (t) {
                        e.target.offsetParent.offsetParent === t ? t.classList.contains("is-active") && t.classList.remove("is-active") : t.classList.contains("not-active") && t.classList.remove("not-active")
                    }))
                }
            }, {
                key: "updateActiveState",
                value: function () {
                    var e = this;
                    null !== this.menuCurrent && this.menuCurrent.classList.remove("is-current"), this.menuListItems.forEach((function (t) {
                        Ge.kaleidoscopeNav.currentMonth === t.dataset.month && (t.classList.add("is-current"), e.menuCurrent = t)
                    }))
                }
            }, {
                key: "animateIn",
                value: (r = Y.a.mark((function e() {
                    var t, n = this;
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!this.menuIsOpen) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return this.menuIsOpen = E.state.menuIsOpen = !0, this.el.style = "", this.isMouseOver = !1, E.body.classList.add("fixed"), E.body.classList.add("overflow-hidden"), E.body.classList.add("pointer-events-none"), this.menuListItemsLinks.forEach((function (e) {
                                    e.style.pointerEvents = "none"
                                })), E.isMobile && null !== this.menuCurrent && (t = E.win.innerHeight / 2 - this.menuCurrent.offsetHeight / 2, this.menuCurrent.offsetTop + this.menuCurrent.offsetHeight / 2 > E.win.innerHeight / 2 ? this.scroll.scrollTop = this.menuCurrent.offsetTop - t : this.scroll.scrollTop = 0), Object(q.a)(this.el, {
                                    className: "menu",
                                    duration: 1500
                                }), E.isMobile || (Ge.gl.menuAdd(), z.a.ticker.add(this.update)), this.animateInTl = z.a.timeline(), this.animateInTl.fromTo(this.menuBg, {
                                    scaleX: 0
                                }, {
                                    scaleX: 1,
                                    duration: 1.2,
                                    ease: "expo.inOut",
                                    onComplete: function () {
                                        n.menuBg.style.transformOrigin = "left"
                                    }
                                }, 0), this.animateInTl.fromTo(this.menuListItemInner, {
                                    yPercent: 101
                                }, {
                                    yPercent: 0,
                                    stagger: .04,
                                    duration: 1.4,
                                    delay: .6,
                                    ease: "expo.out",
                                    onStart: function () {
                                        z.a.set(n.menuListItemInner, {
                                            opacity: 1
                                        }), n.el.classList.add("menu-open")
                                    }
                                }, 0), this.animateInTl.fromTo(this.menuLogoInner, {
                                    yPercent: 101
                                }, {
                                    yPercent: 0,
                                    duration: 1.4,
                                    delay: 1,
                                    ease: "expo.out"
                                }, 0), e.next = 18, V()(1e3);
                            case 18:
                                return Object(q.a)(this.menuBackButton, {
                                    className: "menu-back-button",
                                    duration: 1200
                                }), e.next = 21, V()(800);
                            case 21:
                                this.menuListItemsLinks.forEach((function (e) {
                                    e.style.pointerEvents = "auto"
                                }));
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })), i = function () {
                    var e = this,
                        t = arguments;
                    return new Promise((function (n, o) {
                        var i = r.apply(e, t);

                        function s(e) {
                            K(i, n, o, s, a, "next", e)
                        }

                        function a(e) {
                            K(i, n, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }, function () {
                    return i.apply(this, arguments)
                })
            }, {
                key: "animateOut",
                value: function () {
                    var e = this;
                    E.body.classList.remove("fixed"), E.body.classList.remove("overflow-hidden"), E.body.classList.remove("pointer-events-none"), this.el.classList.remove("menu-open"), E.isMobile || (Ge.gl.menuRemove(), z.a.ticker.remove(this.update)), this.mouseIsActive = !1, this.animateInTl.pause(), Object(q.b)(this.menuBackButton, {
                        className: "menu-back-button",
                        duration: 500
                    }), Object(q.b)(this.el, {
                        className: "menu",
                        duration: 1200
                    }), this.el.classList.add("menu-enter");
                    var t = z.a.timeline();
                    t.to(this.menuBg, {
                        scaleX: 0,
                        duration: .8,
                        ease: "expo.inOut",
                        delay: .3,
                        onComplete: function () {
                            e.menuBg.style.transformOrigin = "right", e.menuBackButton.classList.add("menu-back-button-enter"), e.el.style.opacity = "0", e.el.style.pointerEvents = "none", e.menuIsOpen = E.state.menuIsOpen = !1
                        }
                    }, 0), t.to(this.menuListItemInner, {
                        yPercent: 101,
                        duration: 1,
                        ease: "expo.inOut",
                        onComplete: function () {
                            z.a.set(e.menuListItemInner, {
                                opacity: 0
                            })
                        }
                    }, 0), t.to(this.menuLogoInner, {
                        yPercent: 101,
                        duration: .8,
                        ease: "expo.inOut"
                    }, 0)
                }
            }, {
                key: "update",
                value: function () {
                    this.transformation = Object(L.b)(-E.mouse.y, 0, E.win.innerHeight, 0, this.menuList.offsetHeight - E.win.innerHeight), this.transformationLerp = Object(L.a)(this.transformationLerp, this.transformation, .1), z.a.set(this.scroll, {
                        y: this.transformationLerp
                    })
                }
            }, {
                key: "autoScroll",
                value: function () {
                    this.scroll.style.position = "fixed", this.scroll.style.top = "0", this.scroll.style.left = "0", this.scroll.scrollTop = 0
                }
            }]) && Z(t.prototype, n), o && Z(t, o), a
        }(w);

        function ie(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var se = function () {
                function e() {
                    var t = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.onResize = this.onResize.bind(this), E.isMobile && E.html.classList.add("is-mobile"), E.win.addEventListener("resize", this.onResize), E.win.addEventListener("scroll", (function () {
                        clearTimeout(t.timeOut), t.scroll = !0, t.timeOut = setTimeout((function () {
                            t.scroll = !1
                        }), 100)
                    })), this.onResize(), E.win.addEventListener("mousemove", (function (e) {
                        t.onMouseMove(e)
                    }))
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "onResize",
                    value: function () {
                        E.layout.w = E.win.innerWidth, E.layout.h = E.win.innerHeight, E.layout.aspect = E.layout.w / E.layout.h, this.calculateLayout()
                    }
                }, {
                    key: "calculateLayout",
                    value: function () {
                        var e = .01 * window.innerHeight;
                        E.html.style.setProperty("--vh", "".concat(e, "px"))
                    }
                }, {
                    key: "onMouseMove",
                    value: function (e) {
                        E.mouse.x = e.clientX, E.mouse.y = e.clientY
                    }
                }]) && ie(t.prototype, n), o && ie(t, o), e
            }(),
            ae = n("eJiD"),
            ce = n.n(ae);

        function le(e) {
            return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ue(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function fe(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        ue(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        ue(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function de(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function pe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function he(e, t, n) {
            return (he = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = me(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function ve(e, t) {
            return (ve = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ye(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = me(e);
                if (t) {
                    var r = me(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return ge(this, n)
            }
        }

        function ge(e, t) {
            return !t || "object" !== le(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function me(e) {
            return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var xe = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ve(e, t)
            }(u, e);
            var t, n, o, r, i, s, a, c, l = ye(u);

            function u() {
                return de(this, u), l.apply(this, arguments)
            }
            return t = u, (n = [{
                key: "init",
                value: function () {
                    he(me(u.prototype), "init", this).call(this), this.enter = this.enter.bind(this), this.update = this.update.bind(this), this.render = this.render.bind(this), this.onTitleClick = this.onTitleClick.bind(this), this.navContent = this.get(".kaleidoscope-nav-controls"), this.prev = this.get(".kaleidoscope-nav-prev"), this.next = this.get(".kaleidoscope-nav-next"), this.title = this.get(".kaleidoscope-nav-title"), this.titleInner = this.get(".kaleidoscope-nav-title-inner"), this.progressBar = this.get(".kaleidoscope-nav-progress"), this.state = "paused", this.completed = !1, this.currentMonth = "", this.duration = 6e4
                }
            }, {
                key: "addEvents",
                value: (c = fe(Y.a.mark((function e() {
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return he(me(u.prototype), "addEvents", this).call(this), e.next = 3, V()(1e3);
                            case 3:
                                this.title.addEventListener("click", this.onTitleClick);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return c.apply(this, arguments)
                })
            }, {
                key: "removeEvents",
                value: function () {
                    he(me(u.prototype), "removeEvents", this).call(this), this.title.removeEventListener("click", this.onTitleClick)
                }
            }, {
                key: "onTitleClick",
                value: function () {
                    Ge.menu.animateIn(), this.stop()
                }
            }, {
                key: "updateContent",
                value: function () {
                    var e = E.view.current.el.querySelector(".kaleidoscope-nav-content"),
                        t = e.dataset,
                        n = t.navPrev,
                        o = t.navNext,
                        r = t.navTitle;
                    this.prev.href = n, this.next.href = o, this.titleInner.innerHTML = r, this.currentMonth = r, E.currentMonth = r, "January" === r ? (this.prev.style.pointerEvents = this.completed ? "" : "none", this.prev.style.opacity = this.completed ? "" : ".25") : (this.prev.style.pointerEvents = "", this.prev.style.opacity = ""), "December" === r && (this.completed = !0), e.remove(), z.a.to(this.titleInner, {
                        yPercent: 0,
                        duration: 1,
                        ease: "expo.out"
                    })
                }
            }, {
                key: "enter",
                value: (a = fe(Y.a.mark((function e() {
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.setActiveMonthKaleidoscope(), this.updateContent(), e.next = 4, ce()();
                            case 4:
                                return this.start(), e.next = 7, V()(500);
                            case 7:
                                Object(q.a)(this.el, {
                                    className: "kaleidoscope-nav",
                                    duration: 1200
                                });
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "overViewOut",
                value: (s = fe(Y.a.mark((function e() {
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.articlesOverview = E.body.querySelector(".year-articles"), z.a.to(E.html, {
                                    scrollTop: 0,
                                    duration: .1875,
                                    ease: "expo.out"
                                }), z.a.to(this.articlesOverview, {
                                    y: "100vh",
                                    duration: .75,
                                    ease: "expo.inOut"
                                }), Object(q.b)(this.articlesOverview, {
                                    className: "year-articles",
                                    duration: 750
                                }), e.next = 7, V()(750);
                            case 7:
                                E.body.classList.add("fixed"), this.articlesOverview.classList.add("absolute");
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return s.apply(this, arguments)
                })
            }, {
                key: "leave",
                value: function () {
                    Object(q.b)(this.el, {
                        className: "kaleidoscope-nav",
                        duration: 500
                    }), E.state.articlesOverview && this.overViewOut()
                }
            }, {
                key: "setActiveMonthKaleidoscope",
                value: function () {
                    var e = E.view.current.el.querySelector(".kaleidoscope-nav-content").dataset.navTitle;
                    Ge.gl.setActiveMonth(e)
                }
            }, {
                key: "update",
                value: (i = fe(Y.a.mark((function e() {
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return E.state.navUpdate = !0, this.reset(), e.next = 4, V()(500);
                            case 4:
                                return this.updateContent(), e.next = 7, V()(1e3);
                            case 7:
                                this.start(), E.state.navUpdate = !1;
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return i.apply(this, arguments)
                })
            }, {
                key: "changeYear",
                value: function () {
                    " " != this.next.href && Ge.router.redirect(this.next.href)
                }
            }, {
                key: "render",
                value: function () {
                    E.state.articlesOverview || "paused" !== this.state && (this.time += 1 / 60, this.currentTime = this.time % this.duration, this.normalizedTime = Object(L.b)(this.currentTime, 0, this.duration / 1e3, 0, 1), z.a.set(this.progressBar, {
                        transformOrigin: "left",
                        scaleX: this.normalizedTime,
                        translateY: "100%"
                    }), this.normalizedTime >= 1 && (this.reset(), this.changeYear()))
                }
            }, {
                key: "reset",
                value: function () {
                    var e = this;
                    this.stop(), this.time = 0;
                    var t = z.a.timeline({
                        ease: "expo.inOut"
                    });
                    z.a.to(this.titleInner, {
                        duration: .5,
                        ease: "expo.inOut",
                        yPercent: -105
                    }), t.to(this.progressBar, {
                        scaleX: 1,
                        duration: .25
                    }), t.to(this.progressBar, {
                        scaleX: 0,
                        duration: .25,
                        onStart: function () {
                            e.progressBar.style.transformOrigin = "right"
                        }
                    })
                }
            }, {
                key: "overViewIn",
                value: function () {
                    var e = this;
                    E.state.articlesOverview = !0, this.articlesOverview = E.view.current.el.querySelector(".year-articles"), z.a.fromTo(this.articlesOverview, {
                        y: "100vh"
                    }, {
                        y: 0,
                        duration: .75,
                        ease: "expo.out",
                        onComplete: function () {
                            E.body.classList.remove("fixed"), e.articlesOverview.classList.remove("absolute")
                        }
                    })
                }
            }, {
                key: "stop",
                value: function () {
                    this.state = "paused", Ge.gl.pause(), E.raf.remove("kaleidoscopeNavRender")
                }
            }, {
                key: "start",
                value: (r = fe(Y.a.mark((function e() {
                    return Y.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                this.time = 0, this.state = "running", this.progressBar.style.transformOrigin = "left", E.ticker && E.raf.add(this.render, "kaleidoscopeNavRender"), E.state.articlesOverview || Ge.gl.resume();
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return r.apply(this, arguments)
                })
            }]) && pe(t.prototype, n), o && pe(t, o), u
        }(w);

        function be(e) {
            return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function we(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ke(e, t, n) {
            return (ke = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Pe(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function Oe(e, t) {
            return (Oe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Te(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = Pe(e);
                if (t) {
                    var r = Pe(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Re(this, n)
            }
        }

        function Re(e, t) {
            return !t || "object" !== be(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Pe(e) {
            return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var Ie = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Oe(e, t)
            }(i, e);
            var t, n, o, r = Te(i);

            function i() {
                return we(this, i), r.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "init",
                value: function () {
                    ke(Pe(i.prototype), "init", this).call(this), this.grid = E.doc.createElement("div"), this.grid.style.cssText = "position:fixed;top:0;left:0;height:100%;width:100%;z-index:50;pointer-events:none", this.render(), this.toggle = this.toggle.bind(this), this.active = !1
                }
            }, {
                key: "addEvents",
                value: function () {
                    ke(Pe(i.prototype), "addEvents", this).call(this), E.win.addEventListener("keydown", this.toggle)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    ke(Pe(i.prototype), "removeEvents", this).call(this)
                }
            }, {
                key: "render",
                value: function () {
                    for (var e = [], t = 0; t < 12; t++) e.push('<div class="col-span-1"><div class="h-full bg-red opacity-25"></div></div>');
                    this.grid.innerHTML = '\n            <div class="wrap h-full">\n                <div class="grid grid-cols-4 sm:grid-cols-12 col-gap-24 h-full">\n                    <div class="col-span-1"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                    <div class="col-span-1 hidden sm:block"><div class="h-full bg-red opacity-25"></div></div>\n                </div>\n            </div>'
                }
            }, {
                key: "toggle",
                value: function (e) {
                    71 === e.keyCode && (this.active ? E.body.removeChild(this.grid) : E.body.appendChild(this.grid), this.active = !this.active)
                }
            }]) && _e(t.prototype, n), o && _e(t, o), i
        }(w);

        function Me(e) {
            return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Se(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ae(e, t, n) {
            return (Ae = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = De(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function Le(e, t) {
            return (Le = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ze(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = De(e);
                if (t) {
                    var r = De(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return je(this, n)
            }
        }

        function je(e, t) {
            return !t || "object" !== Me(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var Be, Ce = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Le(e, t)
            }(i, e);
            var t, n, o, r = ze(i);

            function i() {
                return Se(this, i), r.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "init",
                value: function () {
                    Ae(De(i.prototype), "init", this).call(this), this.designToggle = E.doc.querySelector(".js-design-toggle"), this.toggle = this.toggle.bind(this), this.active = !1, this.opacity = 0
                }
            }, {
                key: "addEvents",
                value: function () {
                    Ae(De(i.prototype), "addEvents", this).call(this), E.win.addEventListener("keydown", this.toggle)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    Ae(De(i.prototype), "removeEvents", this).call(this)
                }
            }, {
                key: "toggle",
                value: function (e) {
                    68 === e.keyCode && (this.active || (this.designToggle.style.display = "block"), this.opacity < 1 ? (this.opacity += .25, this.designToggle.style.opacity = this.opacity, this.active = !0) : (this.designToggle.style.display = "none", this.designToggle.style.opacity = 0, this.opacity = 0, this.active = !1))
                }
            }]) && Ee(t.prototype, n), o && Ee(t, o), i
        }(w);

        function Ne(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ue(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        if ("dev" === E.env) {
            var Fe = n("MZFn");
            Be = {
                grid: new Ie,
                stats: new Fe,
                designToggle: new Ce
            }
        }
        var Ge = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function (t) {
                        Ue(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                loader: new J(".loader", Object(o.a)("loader")),
                loadingManager: null,
                layout: new se,
                menu: new re(".menu", Object(o.a)("menu")),
                mobileMenu: null,
                kaleidoscopeNav: new xe(".kaleidoscope-nav", Object(o.a)("kaleidoscope-nav")),
                gl: null,
                router: n("dGVX").default
            }, E.env && Be),
            Je = n("mldH");
        window.Store = E, window.Modules = Ge, window.App = Je.default
    },
    "9OAr": function (e, t) {
        e.exports = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return new Promise((function (t) {
                setTimeout(t, e)
            }))
        }
    },
    A3rM: function (e, t) {},
    C6M3: function (e, t, n) {
        "use strict";

        function o(e, t, n) {
            return (1 - n) * e + n * t
        }

        function r(e, t, n, o, r) {
            return (e - t) * (r - o) / (n - t) + o
        }
        n.d(t, "a", (function () {
            return o
        })), n.d(t, "b", (function () {
            return r
        }))
    },
    CBm3: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function () {
            return R
        }));
        var o = n("o0o1"),
            r = n.n(o),
            i = n("w/up"),
            s = n("bxBD"),
            a = n("9Pv3"),
            c = n.n(a);

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    classWord: "word",
                    classWords: "words",
                    classLine: "line-inner",
                    classLetter: "letter",
                    splitLetters: !1
                },
                n = e.querySelectorAll("p"),
                o = [];

            function r(n) {
                var r = n.innerHTML.split("<br>");
                n.innerHTML = "", r.forEach((function (e) {
                    if ("" === e) return !1;
                    var n = document.createElement("div");
                    n.innerHTML = e, n.classList.add(t.classLine), t.splitLetters && c()(n), o.push(n)
                })), e.classList.add(t.classWords), o.forEach((function (t) {
                    e.appendChild(t)
                }))
            }
            n.length ? n.forEach((function (t) {
                r(t), e.removeChild(t)
            })) : r(e)
        }
        var u = n("9OAr"),
            f = n.n(u),
            d = n("eJiD"),
            p = n.n(d),
            h = function (e) {
                e.style.display = "", e.style.position = "";
                var t = document.createElement("div");
                t.classList.add("line"), e.parentNode.insertBefore(t, e), t.appendChild(e)
            },
            v = n("z/o8");

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function g(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function m(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        g(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        g(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function x(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function b(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function w(e, t, n) {
            return (w = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = T(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function _(e, t) {
            return (_ = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function k(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = T(e);
                if (t) {
                    var r = T(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return O(this, n)
            }
        }

        function O(e, t) {
            return !t || "object" !== y(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var R = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(d, e);
            var t, n, o, i, a, c, u = k(d);

            function d() {
                return x(this, d), u.apply(this, arguments)
            }
            return t = d, (n = [{
                key: "init",
                value: function () {
                    w(T(d.prototype), "init", this).call(this), Store.state.articlesOverview && (Store.state.articlesOverview = !1, v.a.set(Modules.gl.kaleidoscope.kaleidoRenderTargetGroup.position, {
                        y: 0
                    }))
                }
            }, {
                key: "addEvents",
                value: function () {
                    w(T(d.prototype), "addEvents", this).call(this)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    w(T(d.prototype), "removeEvents", this).call(this)
                }
            }, {
                key: "getElements",
                value: function () {
                    this.intro = this.get(".intro"), this.introShadow = this.get(".intro-shadow"), this.introButton = this.get(".intro-button"), this.introText = this.get(".intro-text"), this.introTitle = this.get(".intro-title"), this.introTextParagraph = this.get(".intro-text > p"), this.introTextLines = [], this.introTextLinesInner = [], this.splitParagraph(this.introTextParagraph), Modules.gl.setActiveMonth("Intro screen")
                }
            }, {
                key: "splitParagraph",
                value: (c = m(r.a.mark((function e(t) {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.introOriginalText = t.innerHTML, l(t), e.next = 4, p()();
                            case 4:
                                return this.introTextLines = this.introText.querySelectorAll(".line-inner"), this.introTextLines.forEach((function (e) {
                                    h(e)
                                })), e.next = 8, p()();
                            case 8:
                                this.introTextLines = this.introText.querySelectorAll(".line"), this.introTextLinesInner = this.introText.querySelectorAll(".line-inner"), this.introTextLinesInner.forEach((function (e) {
                                    e.style.transform = "translateY(101%)"
                                }));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "animateIn",
                value: (a = m(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return w(T(d.prototype), "animateIn", this).call(this), Modules.kaleidoscopeNav.leave(), this.getElements(), e.next = 5, f()(500);
                            case 5:
                                Object(s.a)(this.introButton, {
                                    className: "intro-button",
                                    duration: 1400
                                }), this.introTextLinesInner.forEach((function (e) {
                                    e.style.transform = ""
                                })), Object(s.a)(this.introText, {
                                    className: "intro-text",
                                    duration: 1800
                                }), Object(s.a)(this.introTitle, {
                                    className: "intro-title",
                                    duration: 1800
                                });
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "animateOut",
                value: (i = m(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                Object(s.b)(this.intro, {
                                    className: "intro",
                                    duration: 1800
                                }), v.a.to(this.introShadow, {
                                    opacity: 0,
                                    duration: .5,
                                    ease: "none"
                                });
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return i.apply(this, arguments)
                })
            }]) && b(t.prototype, n), o && b(t, o), d
        }(i.default)
    },
    GIvR: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n("5sN9"),
            r = n("z/o8");

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function l(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = f(e);
                if (t) {
                    var r = f(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return u(this, n)
            }
        }

        function u(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var d = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(f, e);
            var t, n, i, u = l(f);

            function f() {
                return s(this, f), u.apply(this, arguments)
            }
            return t = f, (n = [{
                key: "in",
                value: function (e) {
                    var t = e.from,
                        n = e.to,
                        i = e.trigger,
                        s = e.done;
                    n.style.pointerEvents = "none", Object.keys(o.d.chunks).forEach((function (e) {
                        o.d.chunks[e].destroy()
                    })), o.d.chunks = {}, o.d.view.previous = o.d.view.current.id, o.d.view.previousType = o.d.view.current.type, o.d.view.current.destroy(), o.a.build(n), "popstate" === i ? (t.remove(), o.d.view.current.animateIn(i), n.style.pointerEvents = "", s()) : (o.d.view.current.animateIn(i), setTimeout((function () {
                        t.remove()
                    }), 600), r.a.to(n, {
                        duration: 1,
                        opacity: 1,
                        ease: "linear",
                        onComplete: function () {
                            n.style.pointerEvents = "", s()
                        }
                    })), setTimeout((function () {
                        var e = o.d.doc.querySelectorAll("[data-router-view]");
                        e.length > 1 && e[0].remove()
                    }), 1200)
                }
            }, {
                key: "out",
                value: function (e) {
                    var t = e.from,
                        n = e.trigger,
                        r = e.done;
                    o.d.xhrActive && location.reload(), setTimeout((function () {
                        o.d.xhrActive = !1
                    }), 600), o.d.view.current.clearTimeOuts && o.d.view.current.clearTimeOuts(), o.d.xhrActive = !0, "popstate" === n || o.d.isMobile ? (o.a.clear(), r()) : setTimeout((function () {
                        o.a.clear(), r()
                    }), 100), t.style.pointerEvents = "none", o.d.view.current.animateOut()
                }
            }]) && a(t.prototype, n), i && a(t, i), f
        }(n("C7UG").a.Transition);
        t.default = d
    },
    MIcw: function (e, t, n) {
        var o = {
            "./default": "w/up",
            "./default.js": "w/up",
            "./home": "CBm3",
            "./home.js": "CBm3",
            "./transitions/default": "GIvR",
            "./transitions/default.js": "GIvR",
            "./year": "dS0r",
            "./year.js": "dS0r"
        };

        function r(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        r.keys = function () {
            return Object.keys(o)
        }, r.resolve = i, e.exports = r, r.id = "MIcw"
    },
    W0fh: function (e, t) {
        e.exports = {
            presets: [{
                general: {
                    angle: 0,
                    animation: 67,
                    background: {
                        b: 184.875,
                        g: 184.875,
                        r: 184.875
                    },
                    duration: 50,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_01_Everts_v1.png",
                    offset: -49,
                    position: {
                        end: {
                            x: 1.9100000000000001,
                            y: -2.35
                        },
                        start: {
                            x: -.74,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3,
                        start: 4
                    },
                    zIndex: 1.09
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_02_tiktok_v1.png",
                    offset: -24,
                    position: {
                        end: {
                            x: -2.21,
                            y: 2.21
                        },
                        start: {
                            x: 2.21,
                            y: -2.5
                        }
                    },
                    rotation: {
                        end: 3.7,
                        start: -6.5200000000000005
                    },
                    scale: {
                        end: 2,
                        start: 4.4
                    },
                    zIndex: -.33
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_03_euthanasie_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: -.44,
                            y: -1.9100000000000001
                        },
                        start: {
                            x: 2.65,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -9.78
                    },
                    scale: {
                        end: 1,
                        start: 4.4
                    },
                    zIndex: -3.04
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_04_bouchez_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: 1.47,
                            y: 2.06
                        },
                        start: {
                            x: -2.65,
                            y: -2.06
                        }
                    },
                    rotation: {
                        end: 10,
                        start: -.65
                    },
                    scale: {
                        end: 2,
                        start: 6.03
                    },
                    zIndex: -2.39
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_05_wuhan_v1.png",
                    offset: -10,
                    position: {
                        end: {
                            x: 4.5600000000000005,
                            y: -.74
                        },
                        start: {
                            x: -3.09,
                            y: -.29
                        }
                    },
                    rotation: {
                        end: 9.13,
                        start: -10
                    },
                    scale: {
                        end: 2,
                        start: 4.24
                    },
                    zIndex: -1.41
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_06_vrt_v2.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 1.18,
                            y: -2.65
                        },
                        start: {
                            x: -3.38,
                            y: .88
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 8.91
                    },
                    scale: {
                        end: 3.75,
                        start: 2.12
                    },
                    zIndex: -.65
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_01_Everts_v1.png",
                    offset: -25,
                    position: {
                        end: {
                            x: 7.21,
                            y: -2.5
                        },
                        start: {
                            x: -.15,
                            y: 1.32
                        }
                    },
                    rotation: {
                        end: -6.5200000000000005,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_02_tiktok_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: -8.53,
                            y: 2.79
                        },
                        start: {
                            x: 2.21,
                            y: -1.18
                        }
                    },
                    rotation: {
                        end: 6.5200000000000005,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 1.74
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_04_bouchez_v1.png",
                    offset: 5,
                    position: {
                        end: {
                            x: 3.5300000000000002,
                            y: 4.5600000000000005
                        },
                        start: {
                            x: .15,
                            y: -2.35
                        }
                    },
                    rotation: {
                        end: 6.96,
                        start: 0
                    },
                    scale: {
                        end: 4.08,
                        start: 2
                    },
                    zIndex: -.76
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_05_wuhan_v1.png",
                    offset: 15,
                    position: {
                        end: {
                            x: 0,
                            y: -.44
                        },
                        start: {
                            x: 4.12,
                            y: 3.8200000000000003
                        }
                    },
                    rotation: {
                        end: -6.3,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_07_cassiman_v1.png",
                    offset: 22,
                    position: {
                        end: {
                            x: 3.68,
                            y: -1.32
                        },
                        start: {
                            x: -1.18,
                            y: .88
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.45,
                        start: 2.45
                    },
                    zIndex: -.54
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_08_vandeveire_v1.png",
                    offset: 9,
                    position: {
                        end: {
                            x: 4.26,
                            y: -.15
                        },
                        start: {
                            x: 2.35,
                            y: 2.35
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.77,
                        start: 3.75
                    },
                    zIndex: -.87
                }],
                month: "January"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 213.462890625,
                        g: 213.462890625,
                        r: 213.462890625
                    },
                    duration: 59,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_01_kindermishandeling_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: 6.18,
                            y: -1.32
                        },
                        start: {
                            x: 1.9100000000000001,
                            y: 4.12
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -7.61
                    },
                    scale: {
                        end: 1.6300000000000001,
                        start: 4
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_02_bryant_v1.png",
                    offset: -33,
                    position: {
                        end: {
                            x: 4.8500000000000005,
                            y: 3.38
                        },
                        start: {
                            x: 0,
                            y: -1.9100000000000001
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 5,
                        start: 2
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_04_sambettens_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: .74,
                            y: 2.79
                        },
                        start: {
                            x: 3.97,
                            y: -1.47
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2,
                        start: 5
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_05_aalst_v1.png",
                    offset: 10,
                    position: {
                        end: {
                            x: 2.35,
                            y: 5.59
                        },
                        start: {
                            x: -.44,
                            y: -1.9100000000000001
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 5,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_01_kindermishandeling_v1.png",
                    offset: -5,
                    position: {
                        end: {
                            x: 3.24,
                            y: 3.5300000000000002
                        },
                        start: {
                            x: 1.32,
                            y: -2.21
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_02_bryant_v1.png",
                    offset: 5,
                    position: {
                        end: {
                            x: 4.71,
                            y: -2.21
                        },
                        start: {
                            x: 5.88,
                            y: -1.9100000000000001
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_03_Piketty_v1.png",
                    offset: 15,
                    position: {
                        end: {
                            x: 2.94,
                            y: 2.65
                        },
                        start: {
                            x: 3.24,
                            y: -1.47
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 5.87
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_04_sambettens_v1.png",
                    offset: 25,
                    position: {
                        end: {
                            x: 2.79,
                            y: 3.09
                        },
                        start: {
                            x: .88,
                            y: -1.47
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_05_aalst_v1.png",
                    offset: 35,
                    position: {
                        end: {
                            x: 4.12,
                            y: -1.9100000000000001
                        },
                        start: {
                            x: -1.03,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_06_depauw_v1.png",
                    offset: 45,
                    position: {
                        end: {
                            x: 2.35,
                            y: 2.5
                        },
                        start: {
                            x: 3.8200000000000003,
                            y: -2.65
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_07_joel_v1.png",
                    offset: 33,
                    position: {
                        end: {
                            x: -.74,
                            y: -.15
                        },
                        start: {
                            x: 3.5300000000000002,
                            y: -.74
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.42,
                        start: 2.12
                    },
                    zIndex: -.98
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "FEB_08_mouton_v1.png",
                    offset: -59,
                    position: {
                        end: {
                            x: 1.9100000000000001,
                            y: -1.18
                        },
                        start: {
                            x: -2.21,
                            y: -1.03
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.45,
                        start: 1.96
                    },
                    zIndex: -.87
                }],
                month: "February"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 44,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_01_dossin_v1.png",
                    offset: -25,
                    position: {
                        end: {
                            x: 6.76,
                            y: 2.06
                        },
                        start: {
                            x: -4.12,
                            y: -2.21
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.1,
                        start: 4
                    },
                    zIndex: -3.04
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_02_bergamo_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: 4.5600000000000005,
                            y: -2.06
                        },
                        start: {
                            x: -3.38,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 5,
                        start: 4
                    },
                    zIndex: -2.07
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_03_sergederuette_v1.png",
                    offset: -41,
                    position: {
                        end: {
                            x: 6.62,
                            y: -.74
                        },
                        start: {
                            x: -4.26,
                            y: .44
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 5,
                        start: 4
                    },
                    zIndex: -1.85
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_04_regering_v1.png",
                    offset: 5,
                    position: {
                        end: {
                            x: 3.68,
                            y: 4.71
                        },
                        start: {
                            x: -3.38,
                            y: -1.9100000000000001
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 5,
                        start: 4
                    },
                    zIndex: -1.3
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_05_VS_v1.png",
                    offset: 15,
                    position: {
                        end: {
                            x: 5.59,
                            y: -2.06
                        },
                        start: {
                            x: -3.5300000000000002,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 5,
                        start: 4
                    },
                    zIndex: -.98
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_06_Harari_v1.png",
                    offset: -46,
                    position: {
                        end: {
                            x: 7.94,
                            y: 3.09
                        },
                        start: {
                            x: -1.47,
                            y: -.88
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.12,
                        start: 3.91
                    },
                    zIndex: -4.89
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_01_dossin_v1.png",
                    offset: -50,
                    position: {
                        end: {
                            x: 6.32,
                            y: -1.76
                        },
                        start: {
                            x: 5,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: -2.5
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_02_bergamo_v1.png",
                    offset: -40,
                    position: {
                        end: {
                            x: 2.5,
                            y: 2.21
                        },
                        start: {
                            x: -.74,
                            y: -1.47
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: .33
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_03_sergederuette_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: 2.79,
                            y: -1.47
                        },
                        start: {
                            x: -.44,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 1.09
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_04_regering_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: .88,
                            y: 2.35
                        },
                        start: {
                            x: .74,
                            y: -1.32
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 1.74
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_05_VS_v1.png",
                    offset: -59,
                    position: {
                        end: {
                            x: 7.94,
                            y: 2.79
                        },
                        start: {
                            x: 1.9100000000000001,
                            y: -1.32
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: -3.8000000000000003
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_06_Harari_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 1.32,
                            y: -1.62
                        },
                        start: {
                            x: -.15,
                            y: 2.06
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: -.11
                }],
                month: "March"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_01_UZgent_v1.png",
                    offset: -100,
                    position: {
                        end: {
                            x: 3.5300000000000002,
                            y: -9.26
                        },
                        start: {
                            x: 3.09,
                            y: 1.47
                        }
                    },
                    rotation: {
                        end: 7.61,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 2
                    },
                    zIndex: -4.13
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_01_UZgent_v1.png",
                    offset: 20,
                    position: {
                        end: {
                            x: -.15,
                            y: 1.32
                        },
                        start: {
                            x: 1.18,
                            y: -1.76
                        }
                    },
                    rotation: {
                        end: -6.3,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: .22
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_02_coronareconstructie_v1.png",
                    offset: -40,
                    position: {
                        end: {
                            x: 4.71,
                            y: -.59
                        },
                        start: {
                            x: .59,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: 6.74,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_02_coronareconstructie_v1.png",
                    offset: 10,
                    position: {
                        end: {
                            x: 2.94,
                            y: 3.68
                        },
                        start: {
                            x: 4.5600000000000005,
                            y: 1.47
                        }
                    },
                    rotation: {
                        end: -4.3500000000000005,
                        start: 0
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_03_NY_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: -.44,
                            y: .15
                        },
                        start: {
                            x: 3.09,
                            y: 1.03
                        }
                    },
                    rotation: {
                        end: 4.13,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_03_NY_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: -1.03,
                            y: -.59
                        },
                        start: {
                            x: .59,
                            y: 2.21
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3,
                        start: 2
                    },
                    zIndex: -5
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_04_introvert_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: 4.12,
                            y: -.29
                        },
                        start: {
                            x: 1.32,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: 9.78,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: -3.2600000000000002
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_04_introvert_v1.png",
                    offset: 30,
                    position: {
                        end: {
                            x: 3.24,
                            y: 1.32
                        },
                        start: {
                            x: 5.74,
                            y: -.74
                        }
                    },
                    rotation: {
                        end: -8.040000000000001,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_05_adil_v1.png",
                    offset: -10,
                    position: {
                        end: {
                            x: 5,
                            y: 2.79
                        },
                        start: {
                            x: 5,
                            y: .29
                        }
                    },
                    rotation: {
                        end: 7.61,
                        start: 0
                    },
                    scale: {
                        end: 4.4,
                        start: 4.57
                    },
                    zIndex: -1.85
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_05_adil_v1.png",
                    offset: 40,
                    position: {
                        end: {
                            x: 1.76,
                            y: -1.32
                        },
                        start: {
                            x: 2.5,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: -7.61,
                        start: 0
                    },
                    scale: {
                        end: 3.75,
                        start: 2.61
                    },
                    zIndex: -2.2800000000000002
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_06_Ellish_v1.png",
                    offset: 33,
                    position: {
                        end: {
                            x: .29,
                            y: -1.47
                        },
                        start: {
                            x: .59,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 7.390000000000001,
                        start: 0
                    },
                    scale: {
                        end: 2,
                        start: 3
                    },
                    zIndex: -1.2
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_06_Ellish_v1.png",
                    offset: 46,
                    position: {
                        end: {
                            x: 2.06,
                            y: .44
                        },
                        start: {
                            x: 2.79,
                            y: -.74
                        }
                    },
                    rotation: {
                        end: -8.700000000000001,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 1.1400000000000001
                    },
                    zIndex: 3.2600000000000002
                }],
                month: "April"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_01_Lippens_v1.png",
                    offset: -41,
                    position: {
                        end: {
                            x: 1.32,
                            y: -1.9100000000000001
                        },
                        start: {
                            x: 1.62,
                            y: 1.9100000000000001
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 1.6300000000000001
                    },
                    zIndex: .33
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_02_VanGucht_v1.png",
                    offset: 35,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 5.44,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.1,
                        start: 3.91
                    },
                    zIndex: -2.83
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_02_VanGucht_v1.png",
                    offset: -37,
                    position: {
                        end: {
                            x: 6.18,
                            y: 4.71
                        },
                        start: {
                            x: 2.94,
                            y: .88
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.61,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_03_bejaarden_v1.png",
                    offset: 28,
                    position: {
                        end: {
                            x: 3.8200000000000003,
                            y: -.29
                        },
                        start: {
                            x: 3.68,
                            y: 1.18
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.91,
                        start: 7.66
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_03_bejaarden_v1.png",
                    offset: 37,
                    position: {
                        end: {
                            x: .59,
                            y: -.88
                        },
                        start: {
                            x: -2.65,
                            y: 5.59
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 4.4,
                        start: 4.57
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_04_alken_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: 3.5300000000000002,
                            y: -1.03
                        },
                        start: {
                            x: 4.71,
                            y: 1.47
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 1.47,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_05_afscheid_v1.png",
                    offset: 7,
                    position: {
                        end: {
                            x: 2.21,
                            y: 1.62
                        },
                        start: {
                            x: 2.65,
                            y: -1.76
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3.42,
                        start: 2.77
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_06_minneapolis_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 1.03,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.1,
                        start: 2.93
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_06_minneapolis_v1.png",
                    offset: -43,
                    position: {
                        end: {
                            x: 1.47,
                            y: -1.62
                        },
                        start: {
                            x: 1.18,
                            y: 2.5
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_07_joel_v1.png",
                    offset: 9,
                    position: {
                        end: {
                            x: 1.9100000000000001,
                            y: .59
                        },
                        start: {
                            x: 4.71,
                            y: 4.12
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 4.73,
                        start: 3.42
                    },
                    zIndex: -.22
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_08_coronaboetes_v1.png",
                    offset: 43,
                    position: {
                        end: {
                            x: -1.18,
                            y: -.88
                        },
                        start: {
                            x: 3.97,
                            y: -.74
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.93,
                        start: 2.2800000000000002
                    },
                    zIndex: -2.39
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_08_coronaboetes_v1.png",
                    offset: -24,
                    position: {
                        end: {
                            x: 3.09,
                            y: .88
                        },
                        start: {
                            x: .88,
                            y: -.59
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.59,
                        start: 2.93
                    },
                    zIndex: 0
                }],
                month: "May"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_01_racisme_v1.png",
                    offset: -39,
                    position: {
                        end: {
                            x: 3.09,
                            y: -1.62
                        },
                        start: {
                            x: 3.5300000000000002,
                            y: 2.5
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 10.76,
                        start: 5.05
                    },
                    zIndex: -.76
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_01_racisme_v1.png",
                    offset: 48,
                    position: {
                        end: {
                            x: -1.76,
                            y: 0
                        },
                        start: {
                            x: 4.8500000000000005,
                            y: -.15
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 1.96
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_02_interview_v1.png",
                    offset: -52,
                    position: {
                        end: {
                            x: 2.06,
                            y: -2.35
                        },
                        start: {
                            x: 2.5,
                            y: .88
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 10.6,
                        start: 2.77
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_02_interview_v1.png",
                    offset: 24,
                    position: {
                        end: {
                            x: 4.71,
                            y: .44
                        },
                        start: {
                            x: 4.41,
                            y: -1.18
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.61,
                        start: 1.47
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_03_walter_v1.png",
                    offset: -9,
                    position: {
                        end: {
                            x: -1.03,
                            y: -.59
                        },
                        start: {
                            x: 2.65,
                            y: .29
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 1.6300000000000001,
                        start: 2.93
                    },
                    zIndex: .11
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_04_mondmaskers_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: 2.65,
                            y: 0
                        },
                        start: {
                            x: 2.06,
                            y: 2.21
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.77,
                        start: 1.79
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_05_lucas_v1.png",
                    offset: -41,
                    position: {
                        end: {
                            x: -.44,
                            y: -.74
                        },
                        start: {
                            x: 4.41,
                            y: .59
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 2.2800000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_06_leger_v1.png",
                    offset: 28,
                    position: {
                        end: {
                            x: 1.47,
                            y: -1.62
                        },
                        start: {
                            x: 2.21,
                            y: 1.32
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.1,
                        start: 2.2800000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_07_koloniale_v1.png",
                    offset: -22,
                    position: {
                        end: {
                            x: -1.9100000000000001,
                            y: -.29
                        },
                        start: {
                            x: 4.5600000000000005,
                            y: .15
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 5,
                        start: 1.1400000000000001
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_08_roussau_v1.png",
                    offset: -52,
                    position: {
                        end: {
                            x: -1.76,
                            y: -.88
                        },
                        start: {
                            x: 1.9100000000000001,
                            y: .74
                        }
                    },
                    rotation: {
                        end: 10,
                        start: -.65
                    },
                    scale: {
                        end: 2.77,
                        start: 2.45
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_09_bracke_v1.png",
                    offset: -43,
                    position: {
                        end: {
                            x: 5.74,
                            y: 2.06
                        },
                        start: {
                            x: 5.88,
                            y: -2.94
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 6.03,
                        start: 1.96
                    },
                    zIndex: -4.57
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_10_schoenaerts_v1.png",
                    offset: 30,
                    position: {
                        end: {
                            x: 4.41,
                            y: -.74
                        },
                        start: {
                            x: 1.32,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.59,
                        start: 2.61
                    },
                    zIndex: -1.2
                }],
                month: "June"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_01_griet_v1.png",
                    offset: -67,
                    position: {
                        end: {
                            x: 2.94,
                            y: .59
                        },
                        start: {
                            x: 0,
                            y: .44
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 1.96
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_01_griet_v1.png",
                    offset: 24,
                    position: {
                        end: {
                            x: -.88,
                            y: 0
                        },
                        start: {
                            x: 7.21,
                            y: 1.18
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.77,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_02_filip_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: -1.03,
                            y: .59
                        },
                        start: {
                            x: 3.5300000000000002,
                            y: 1.32
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 3.1
                    },
                    zIndex: 1.74
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_03_paras_v1.png",
                    offset: 24,
                    position: {
                        end: {
                            x: 1.32,
                            y: -1.47
                        },
                        start: {
                            x: 3.38,
                            y: .29
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.42,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_03_paras_v1.png",
                    offset: 7,
                    position: {
                        end: {
                            x: -1.62,
                            y: .15
                        },
                        start: {
                            x: 5.59,
                            y: -.29
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 1.3,
                        start: 3.1
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_04_abortus_v1.png",
                    offset: 20,
                    position: {
                        end: {
                            x: 2.65,
                            y: -.44
                        },
                        start: {
                            x: -2.06,
                            y: .74
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.45,
                        start: 2.93
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_04_abortus_v1.png",
                    offset: 37,
                    position: {
                        end: {
                            x: -2.5,
                            y: -.88
                        },
                        start: {
                            x: 2.94,
                            y: .15
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.77,
                        start: 2.77
                    },
                    zIndex: .22
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_05_beke_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 3.68,
                            y: 1.18
                        },
                        start: {
                            x: 1.03,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 2.77
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_06_arno_v1.png",
                    offset: -26,
                    position: {
                        end: {
                            x: 3.97,
                            y: -2.21
                        },
                        start: {
                            x: 1.32,
                            y: .88
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 2.2800000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_06_arno_v1.png",
                    offset: -24,
                    position: {
                        end: {
                            x: 3.97,
                            y: -.29
                        },
                        start: {
                            x: -2.06,
                            y: .44
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 4.24,
                        start: 1.6300000000000001
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_07_erika_v1.png",
                    offset: 24,
                    position: {
                        end: {
                            x: 2.5,
                            y: -1.03
                        },
                        start: {
                            x: 2.35,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.45,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_07_erika_v1.png",
                    offset: -13,
                    position: {
                        end: {
                            x: 8.68,
                            y: 1.62
                        },
                        start: {
                            x: -.88,
                            y: .29
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3.91,
                        start: 5
                    },
                    zIndex: -1.6300000000000001
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JULI_08_coronaparty_v1.png",
                    offset: 100,
                    position: {
                        end: {
                            x: 5.15,
                            y: -1.62
                        },
                        start: {
                            x: 8.09,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 6.03,
                        start: 3.91
                    },
                    zIndex: -4.24
                }],
                month: "July"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_01_reuzegom_v1.png",
                    offset: -50,
                    position: {
                        end: {
                            x: -.74,
                            y: -.29
                        },
                        start: {
                            x: 5,
                            y: .29
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 1.6300000000000001,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_02_femicide_v1.png",
                    offset: 20,
                    position: {
                        end: {
                            x: 2.94,
                            y: -1.18
                        },
                        start: {
                            x: 1.62,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 3.42,
                        start: 2.93
                    },
                    zIndex: .22
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_03_beiroet_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 2.06,
                            y: -2.21
                        },
                        start: {
                            x: 1.62,
                            y: 3.8200000000000003
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.1,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_04_vandyck_v1.png",
                    offset: -28,
                    position: {
                        end: {
                            x: 2.79,
                            y: 3.09
                        },
                        start: {
                            x: 3.5300000000000002,
                            y: -.44
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 2.45
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_05_moeders_v1.png",
                    offset: 17,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 6.03,
                            y: 1.62
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.59,
                        start: 4.57
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_06_vanaert_v1.png",
                    offset: 28,
                    position: {
                        end: {
                            x: -.44,
                            y: 1.32
                        },
                        start: {
                            x: 3.68,
                            y: -.44
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 2.61,
                        start: 3.42
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_06_vanaert_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 6.03,
                            y: .44
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 8.8,
                        start: 2.61
                    },
                    zIndex: -1.52
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_07_witrusland_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 3.97,
                            y: -1.18
                        },
                        start: {
                            x: 2.06,
                            y: 1.18
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 6.8500000000000005,
                        start: 2.12
                    },
                    zIndex: -.98
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_08_euthanasie arts_v1.png",
                    offset: 24,
                    position: {
                        end: {
                            x: 3.8200000000000003,
                            y: -.59
                        },
                        start: {
                            x: 3.09,
                            y: .59
                        }
                    },
                    rotation: {
                        end: -10,
                        start: 0
                    },
                    scale: {
                        end: 4.57,
                        start: 3.42
                    },
                    zIndex: -.76
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_08_euthanasie arts_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: 3.38,
                            y: 1.47
                        },
                        start: {
                            x: 3.97,
                            y: -.88
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 2.77
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_09_sanda_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: 4.26,
                            y: .44
                        },
                        start: {
                            x: 3.38,
                            y: 2.5
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 1.96,
                        start: 4.24
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_10_chovanec_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: .15,
                            y: -.15
                        },
                        start: {
                            x: 4.26,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 2.77
                    },
                    zIndex: 0
                }],
                month: "August"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_01_chovanec_v1.png",
                    offset: -57,
                    position: {
                        end: {
                            x: -1.62,
                            y: -1.03
                        },
                        start: {
                            x: 2.79,
                            y: 3.09
                        }
                    },
                    rotation: {
                        end: 5.22,
                        start: -6.5200000000000005
                    },
                    scale: {
                        end: 2.77,
                        start: 2.12
                    },
                    zIndex: .76
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_02_degrauwe_v1.png",
                    offset: -39,
                    position: {
                        end: {
                            x: -.59,
                            y: -1.18
                        },
                        start: {
                            x: -.29,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.12,
                        start: 2.93
                    },
                    zIndex: .87
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_03_moria_v1.png",
                    offset: -89,
                    position: {
                        end: {
                            x: -.15,
                            y: 2.94
                        },
                        start: {
                            x: 3.97,
                            y: -.44
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 4.08,
                        start: 4.4
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_04_buruma_v1.png",
                    offset: -39,
                    position: {
                        end: {
                            x: 5.74,
                            y: .15
                        },
                        start: {
                            x: -1.03,
                            y: .44
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 4.4,
                        start: 3.75
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_05_hemmerechts_v1.png",
                    offset: -80,
                    position: {
                        end: {
                            x: 1.47,
                            y: -1.03
                        },
                        start: {
                            x: 1.32,
                            y: 2.35
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.59,
                        start: 1.96
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_06_essay_v1.png",
                    offset: -33,
                    position: {
                        end: {
                            x: 1.9100000000000001,
                            y: -1.32
                        },
                        start: {
                            x: 4.26,
                            y: 4.8500000000000005
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 4.4
                    },
                    zIndex: -.87
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_07_corbijn_v1.png",
                    offset: -72,
                    position: {
                        end: {
                            x: 3.5300000000000002,
                            y: -1.62
                        },
                        start: {
                            x: 1.76,
                            y: 1.9100000000000001
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 4.89,
                        start: 2.45
                    },
                    zIndex: -1.41
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_08_vangelderen_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: 2.35,
                            y: -.88
                        },
                        start: {
                            x: 1.03,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: -10,
                        start: -.22
                    },
                    scale: {
                        end: 4.89,
                        start: 2.61
                    },
                    zIndex: -1.2
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_09_duitse_v1.png",
                    offset: -59,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 3.68,
                            y: 4.41
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.1,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_10_fietsrapport_v1.png",
                    offset: 2,
                    position: {
                        end: {
                            x: 5.88,
                            y: .44
                        },
                        start: {
                            x: -1.76,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.42,
                        start: 3.2600000000000002
                    },
                    zIndex: -1.74
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_08_vangelderen_v1.png",
                    offset: -48,
                    position: {
                        end: {
                            x: 0,
                            y: 0
                        },
                        start: {
                            x: 1.18,
                            y: 4.26
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 5,
                        start: 5
                    },
                    zIndex: 0
                }],
                month: "September"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_01_frankvdb_v1.png",
                    offset: -100,
                    position: {
                        end: {
                            x: 3.24,
                            y: -4.12
                        },
                        start: {
                            x: 4.41,
                            y: 1.47
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 4.4,
                        start: 1.47
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_02_vivaldi_v1.png",
                    offset: -83,
                    position: {
                        end: {
                            x: -1.62,
                            y: -1.9100000000000001
                        },
                        start: {
                            x: 2.21,
                            y: 3.09
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.45,
                        start: 4.73
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_03_masked_v1.png",
                    offset: -91,
                    position: {
                        end: {
                            x: 5.88,
                            y: -1.62
                        },
                        start: {
                            x: -.29,
                            y: 2.65
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.93,
                        start: 2.45
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_04_trump_v1.png",
                    offset: -74,
                    position: {
                        end: {
                            x: 3.68,
                            y: .88
                        },
                        start: {
                            x: -.59,
                            y: -1.03
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.42,
                        start: 2.2800000000000002
                    },
                    zIndex: .33
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_05_vrt_v1.png",
                    offset: -57,
                    position: {
                        end: {
                            x: 5.74,
                            y: -2.21
                        },
                        start: {
                            x: -1.47,
                            y: 2.06
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 6.68,
                        start: 3.1
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_06_filip_v1.png",
                    offset: -80,
                    position: {
                        end: {
                            x: -1.03,
                            y: -.29
                        },
                        start: {
                            x: 4.71,
                            y: 4.26
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.12,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_07_belgie_v1.png",
                    offset: -46,
                    position: {
                        end: {
                            x: 7.5,
                            y: -1.47
                        },
                        start: {
                            x: 4.71,
                            y: 4.26
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 3.91
                    },
                    zIndex: -1.3
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_08_huishoudduel_v1.png",
                    offset: -30,
                    position: {
                        end: {
                            x: 5,
                            y: -.74
                        },
                        start: {
                            x: -3.09,
                            y: .74
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 4.4,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_09_drugsbrasserie_v1.png",
                    offset: -22,
                    position: {
                        end: {
                            x: 3.8200000000000003,
                            y: .44
                        },
                        start: {
                            x: -1.03,
                            y: .29
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 5,
                        start: 3.2600000000000002
                    },
                    zIndex: .76
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_10_oorlogsmisdadiger_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: 3.38,
                            y: -1.03
                        },
                        start: {
                            x: 1.9100000000000001,
                            y: 3.5300000000000002
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 4.08,
                        start: 3.2600000000000002
                    },
                    zIndex: 0
                }],
                month: "October"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_01_bangoura_v1.png",
                    offset: -26,
                    position: {
                        end: {
                            x: .44,
                            y: -1.76
                        },
                        start: {
                            x: -1.03,
                            y: 2.06
                        }
                    },
                    rotation: {
                        end: -10,
                        start: .22
                    },
                    scale: {
                        end: 6.36,
                        start: 3.59
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_02_uzgent_v1.png",
                    offset: -78,
                    position: {
                        end: {
                            x: 2.65,
                            y: -1.03
                        },
                        start: {
                            x: 6.76,
                            y: 1.32
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.12,
                        start: 3.2600000000000002
                    },
                    zIndex: -1.6300000000000001
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_03_biden_v1.png",
                    offset: -74,
                    position: {
                        end: {
                            x: 4.8500000000000005,
                            y: -1.32
                        },
                        start: {
                            x: .88,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 4.24,
                        start: 3.59
                    },
                    zIndex: .65
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_04_mawda_v1.png",
                    offset: -59,
                    position: {
                        end: {
                            x: 5,
                            y: -1.32
                        },
                        start: {
                            x: -1.32,
                            y: 1.03
                        }
                    },
                    rotation: {
                        end: 10,
                        start: -10
                    },
                    scale: {
                        end: 4.08,
                        start: 2.12
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_05_vaccin_v1.png",
                    offset: -50,
                    position: {
                        end: {
                            x: -2.21,
                            y: -1.03
                        },
                        start: {
                            x: 2.5,
                            y: 3.68
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 3.59
                    },
                    zIndex: -2.17
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_06_bom_v1.png",
                    offset: -37,
                    position: {
                        end: {
                            x: 2.79,
                            y: 3.97
                        },
                        start: {
                            x: -2.35,
                            y: -1.18
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 5.38,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_07_nineties_v1.png",
                    offset: -28,
                    position: {
                        end: {
                            x: 2.65,
                            y: 3.09
                        },
                        start: {
                            x: .74,
                            y: -1.47
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 4.08,
                        start: 3.59
                    },
                    zIndex: -1.2
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_08_maradona_v1.png",
                    offset: -20,
                    position: {
                        end: {
                            x: -1.03,
                            y: -.15
                        },
                        start: {
                            x: .88,
                            y: 3.8200000000000003
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.59,
                        start: 4.57
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_09_proust_v1.png",
                    offset: -13,
                    position: {
                        end: {
                            x: -.44,
                            y: -1.32
                        },
                        start: {
                            x: 4.41,
                            y: 4.41
                        }
                    },
                    rotation: {
                        end: 10,
                        start: -10
                    },
                    scale: {
                        end: 2.77,
                        start: 4.57
                    },
                    zIndex: -1.96
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_07_nineties_v1.png",
                    offset: -54,
                    position: {
                        end: {
                            x: 6.47,
                            y: .74
                        },
                        start: {
                            x: 1.32,
                            y: 0
                        }
                    },
                    rotation: {
                        end: -3.04,
                        start: 2.39
                    },
                    scale: {
                        end: 3.91,
                        start: 3.91
                    },
                    zIndex: -.54
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_10_terreur_v1.png",
                    offset: -22,
                    position: {
                        end: {
                            x: 5.44,
                            y: 3.68
                        },
                        start: {
                            x: 0,
                            y: 0
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -9.13
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 2.2800000000000002
                    },
                    zIndex: -2.72
                }],
                month: "November"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_01_gezondheidskloof_v1.png",
                    offset: -76,
                    position: {
                        end: {
                            x: 6.47,
                            y: -.74
                        },
                        start: {
                            x: 5.59,
                            y: 4.71
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 3.91,
                        start: 5.38
                    },
                    zIndex: -4.0200000000000005
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_02_vaccin_v1.png",
                    offset: -91,
                    position: {
                        end: {
                            x: 3.5300000000000002,
                            y: -.59
                        },
                        start: {
                            x: 6.76,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 5.87,
                        start: 4.08
                    },
                    zIndex: -5
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_03_hongaarse_v1.png",
                    offset: -80,
                    position: {
                        end: {
                            x: -1.62,
                            y: -.59
                        },
                        start: {
                            x: 3.38,
                            y: 2.35
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.59,
                        start: 2.93
                    },
                    zIndex: -4.0200000000000005
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_04_ottolengi_v1.png",
                    offset: -50,
                    position: {
                        end: {
                            x: -1.47,
                            y: -.59
                        },
                        start: {
                            x: 4.12,
                            y: 3.09
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.12,
                        start: 2.2800000000000002
                    },
                    zIndex: -3.7
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_05_vaccinland_v1.png",
                    offset: -59,
                    position: {
                        end: {
                            x: 4.41,
                            y: -1.76
                        },
                        start: {
                            x: 2.21,
                            y: 2.65
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.77,
                        start: 4.89
                    },
                    zIndex: -3.04
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_06_grunbergtrump_v1.png",
                    offset: 33,
                    position: {
                        end: {
                            x: 1.76,
                            y: -1.03
                        },
                        start: {
                            x: -.88,
                            y: .59
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 1.6300000000000001,
                        start: 3.1
                    },
                    zIndex: -2.2800000000000002
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_01_gezondheidskloof_v1.png",
                    offset: -39,
                    position: {
                        end: {
                            x: -2.35,
                            y: -.74
                        },
                        start: {
                            x: -1.9100000000000001,
                            y: -.15
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.12,
                        start: 1.79
                    },
                    zIndex: -1.85
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_02_vaccin_v1.png",
                    offset: 26,
                    position: {
                        end: {
                            x: .15,
                            y: -1.03
                        },
                        start: {
                            x: .74,
                            y: 1.76
                        }
                    },
                    rotation: {
                        end: -.22,
                        start: -10
                    },
                    scale: {
                        end: 3.59,
                        start: 2.93
                    },
                    zIndex: -4.89
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_03_hongaarse_v1.png",
                    offset: -24,
                    position: {
                        end: {
                            x: 2.35,
                            y: -2.21
                        },
                        start: {
                            x: 2.5,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 3.2600000000000002,
                        start: 2.61
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_04_ottolengi_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: 6.32,
                            y: -1.62
                        },
                        start: {
                            x: .15,
                            y: 2.21
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.61,
                        start: 2.45
                    },
                    zIndex: .33
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_05_vaccinland_v1.png",
                    offset: -11,
                    position: {
                        end: {
                            x: -2.06,
                            y: -.74
                        },
                        start: {
                            x: 1.47,
                            y: 2.65
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.61,
                        start: 3.2600000000000002
                    },
                    zIndex: 2.61
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "DEC_06_grunbergtrump_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: -1.18,
                            y: -.29
                        },
                        start: {
                            x: 2.06,
                            y: 2.79
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 1.96,
                        start: 2.12
                    },
                    zIndex: 5
                }],
                month: "December"
            }, {
                general: {
                    angle: 0,
                    background: {
                        b: 184.78443717956543,
                        g: 184.78443717956543,
                        r: 184.78443717956543
                    },
                    duration: 60,
                    mouse: {
                        x: 1.2,
                        y: 1.2
                    },
                    sides: 12
                },
                images: [{
                    loop: 100,
                    loopToggle: !0,
                    name: "MAA_06_Hararicopy_intro_v1.png",
                    offset: 48,
                    position: {
                        end: {
                            x: 4.41,
                            y: 0
                        },
                        start: {
                            x: 4.41,
                            y: 2.65
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.45,
                        start: 3.2600000000000002
                    },
                    zIndex: -3.91
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "AUG_03_beiroetcopy_intro_v1.png",
                    offset: -41,
                    position: {
                        end: {
                            x: 6.91,
                            y: -.44
                        },
                        start: {
                            x: -.74,
                            y: .15
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 6.2,
                        start: 2.12
                    },
                    zIndex: -2.61
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "APR_01_UZgentcopy_intro_v1.png",
                    offset: 0,
                    position: {
                        end: {
                            x: 4.26,
                            y: -1.76
                        },
                        start: {
                            x: -1.18,
                            y: 1.47
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 0
                    },
                    scale: {
                        end: 2.45,
                        start: 3.1
                    },
                    zIndex: -1.52
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JAN_04_bouchezcopy_intro_v1.png",
                    offset: -28,
                    position: {
                        end: {
                            x: -.59,
                            y: .15
                        },
                        start: {
                            x: 5.74,
                            y: 4.12
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 3.1,
                        start: 1.96
                    },
                    zIndex: 0
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "JUNI_01_racismecopy_intro_v1.png",
                    offset: 59,
                    position: {
                        end: {
                            x: 0,
                            y: -.74
                        },
                        start: {
                            x: .29,
                            y: 4.26
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 5.22,
                        start: 2.45
                    },
                    zIndex: .43
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "MEI_02_VanGuchtcopy_intro_v1.png",
                    offset: 52,
                    position: {
                        end: {
                            x: -.44,
                            y: .59
                        },
                        start: {
                            x: 5,
                            y: -1.03
                        }
                    },
                    rotation: {
                        end: 10,
                        start: 0
                    },
                    scale: {
                        end: 2.61,
                        start: .98
                    },
                    zIndex: -.54
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "NOV_05_vaccincopy_intro_v1.png",
                    offset: 20,
                    position: {
                        end: {
                            x: 2.5,
                            y: -.74
                        },
                        start: {
                            x: 2.65,
                            y: 1.18
                        }
                    },
                    rotation: {
                        end: -3.48,
                        start: -4.57
                    },
                    scale: {
                        end: .98,
                        start: 1.3
                    },
                    zIndex: 1.6300000000000001
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "OKT_04_trumpcopy_intro_v1.png",
                    offset: -35,
                    position: {
                        end: {
                            x: 5.44,
                            y: -1.18
                        },
                        start: {
                            x: -2.94,
                            y: 1.18
                        }
                    },
                    rotation: {
                        end: 0,
                        start: 10
                    },
                    scale: {
                        end: 2.2800000000000002,
                        start: 1.79
                    },
                    zIndex: 1.09
                }, {
                    loop: 100,
                    loopToggle: !0,
                    name: "SEP_08_vangelderencopy_intro_v1.png",
                    offset: -15,
                    position: {
                        end: {
                            x: 3.8200000000000003,
                            y: -1.47
                        },
                        start: {
                            x: .59,
                            y: 1.9100000000000001
                        }
                    },
                    rotation: {
                        end: 0,
                        start: -10
                    },
                    scale: {
                        end: 2.45,
                        start: 2.93
                    },
                    zIndex: -1.09
                }],
                month: "Intro screen"
            }]
        }
    },
    bxBD: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return f
        })), n.d(t, "b", (function () {
            return p
        }));
        var o = n("o0o1"),
            r = n.n(o),
            i = n("9OAr"),
            s = n.n(i),
            a = n("eJiD"),
            c = n.n(a);

        function l(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function u(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        l(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        l(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function f(e) {
            return d.apply(this, arguments)
        }

        function d() {
            return (d = u(r.a.mark((function e(t) {
                var n, o = arguments;
                return r.a.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = o.length > 1 && void 0 !== o[1] ? o[1] : {
                                className: "element",
                                duration: 1e3,
                                delay: 0
                            }, t.classList.remove("".concat(n.className, "-leave-to")), t.classList.add("".concat(n.className, "-enter-to")), e.next = 5, s()(n.duration);
                        case 5:
                            t.classList.remove("".concat(n.className, "-enter")), t.classList.remove("".concat(n.className, "-enter-to"));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function p(e) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = u(r.a.mark((function e(t) {
                var n, o = arguments;
                return r.a.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = o.length > 1 && void 0 !== o[1] ? o[1] : {
                                className: "element",
                                duration: 1e3,
                                remove: !0
                            }, t.classList.add("".concat(n.className, "-leave")), e.next = 4, s()(100);
                        case 4:
                            return t.classList.add("".concat(n.className, "-leave-to")), e.next = 7, s()(n.duration);
                        case 7:
                            return t.classList.remove("".concat(n.className, "-leave")), t.classList.add("".concat(n.className, "-enter")), e.next = 11, c()();
                        case 11:
                            t.classList.remove("".concat(n.className, "-leave-to")), n.remove && t.remove();
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    },
    dGVX: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n("GIvR"),
            r = new(n("C7UG").a.Core)({
                transitions: {
                    default: o.default
                }
            });
        t.default = r
    },
    dS0r: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function () {
            return D
        }));
        var o = n("o0o1"),
            r = n.n(o),
            i = n("w/up"),
            s = n("eJiD"),
            a = n.n(s),
            c = n("9OAr"),
            l = n.n(c),
            u = n("bxBD"),
            f = n("z/o8"),
            d = n("5sN9");

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function h(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function v(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        h(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        h(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function m(e, t, n) {
            return (m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function x(e, t) {
            return (x = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function b(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = _(e);
                if (t) {
                    var r = _(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return w(this, n)
            }
        }

        function w(e, t) {
            return !t || "object" !== p(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var k = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && x(e, t)
                }(c, e);
                var t, n, o, i, s, a = b(c);

                function c() {
                    return y(this, c), a.apply(this, arguments)
                }
                return t = c, (n = [{
                    key: "init",
                    value: function () {
                        m(_(c.prototype), "init", this).call(this), this.onClick = this.onClick.bind(this), this.moveUp = this.moveUp.bind(this), this.stickers = this.getAll(".kaleidoscope-footer-news-items")
                    }
                }, {
                    key: "addEvents",
                    value: function () {
                        m(_(c.prototype), "addEvents", this).call(this), this.start(), this.el.addEventListener("click", this.onClick)
                    }
                }, {
                    key: "removeEvents",
                    value: function () {
                        m(_(c.prototype), "removeEvents", this).call(this), this.stop()
                    }
                }, {
                    key: "moveUp",
                    value: function () {
                        var e = this;
                        d.d.state.articlesOverview || (d.d.state.articlesOverview = !0, f.a.to(d.c.gl.kaleidoscope, {
                            sceneRotation: d.c.gl.kaleidoscope.sceneRotation - d.c.gl.kaleidoscope.sceneRotation % (Math.PI / 6),
                            duration: 1.4,
                            ease: "expo.out"
                        }), this.articlesOverview = d.d.view.current.el.querySelector(".year-articles"), this.yearOverviewBackPlane = d.d.view.current.el.querySelector(".year-articles-back-plane"), this.yearOverviewBackPlaneBottom = d.d.view.current.el.querySelector(".year-articles-back-plane-bottom"), this.articlesOverview.style.opacity = 1, Object(u.a)(this.yearOverviewBackPlane, {
                            className: "year-articles-back-plane",
                            duration: 500
                        }), Object(u.a)(this.articlesOverview, {
                            className: "year-articles",
                            duration: 500
                        }), d.c.gl.moveUp(), f.a.fromTo(this.articlesOverview, {
                            y: "100vh"
                        }, {
                            y: 0,
                            duration: .75,
                            ease: "expo.out",
                            onComplete: function () {
                                d.d.body.classList.remove("fixed"), e.yearOverviewBackPlaneBottom.style.display = "block", d.c.gl.pause()
                            }
                        }))
                    }
                }, {
                    key: "onClick",
                    value: (s = v(r.a.mark((function e() {
                        return r.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.moveUp();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "stop",
                    value: function () {}
                }, {
                    key: "start",
                    value: (i = v(r.a.mark((function e() {
                        return r.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l()(300);
                                case 2:
                                    this.stickerInner = this.get(".kaleidoscope-footer-news-inner");
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return i.apply(this, arguments)
                    })
                }]) && g(t.prototype, n), o && g(t, o), c
            }(d.b),
            O = n("C6M3"),
            T = n("avP6");

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function P(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function I(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        P(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        P(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function M(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function E(e, t, n) {
            return (E = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = j(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function A(e, t) {
            return (A = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function L(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = j(e);
                if (t) {
                    var r = j(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return z(this, n)
            }
        }

        function z(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function j(e) {
            return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var D = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && A(e, t)
            }(v, e);
            var t, n, o, i, s, c, p, h = L(v);

            function v() {
                return M(this, v), h.apply(this, arguments)
            }
            return t = v, (n = [{
                key: "init",
                value: function () {
                    E(j(v.prototype), "init", this).call(this);
                    var e = this.el.querySelector(".kaleidoscope-nav-content").dataset.navTitle;
                    d.d.currentMonth = e, this.onYearOverviewBackButtonClick = this.onYearOverviewBackButtonClick.bind(this), this.onYearOverviewToggle = this.onYearOverviewToggle.bind(this), this.onSocialCLick = this.onSocialCLick.bind(this), this.yearOverviewBackButton = this.get(".year-articles-back-button"), this.yearArticlesHeaderLogo = this.get(".year-articles-header-logo"), this.yearOverviewBackPlane = this.get(".year-articles-back-plane"), this.yearOverviewBackPlaneBottom = this.get(".year-articles-back-plane-bottom"), this.socials = this.getAll(".social"), this.toggling = !1
                }
            }, {
                key: "addEvents",
                value: function () {
                    var e = this;
                    E(j(v.prototype), "addEvents", this).call(this), this.yearOverviewBackButton.addEventListener("click", this.onYearOverviewToggle), this.yearArticlesHeaderLogo.addEventListener("click", this.onYearOverviewToggle), this.yearOverviewBackPlane.addEventListener("click", this.onYearOverviewToggle), this.socials.length && this.socials.forEach((function (t) {
                        t.addEventListener("click", e.onSocialCLick)
                    }))
                }
            }, {
                key: "removeEvents",
                value: function () {
                    var e = this;
                    E(j(v.prototype), "removeEvents", this).call(this), this.yearOverviewBackButton.removeEventListener("click", this.onYearOverviewToggle), this.yearArticlesHeaderLogo.removeEventListener("click", this.onYearOverviewToggle), this.yearOverviewBackPlane.removeEventListener("click", this.onYearOverviewToggle), this.socials.length && this.socials.forEach((function (t) {
                        t.removeEventListener("click", e.onSocialCLick)
                    }))
                }
            }, {
                key: "getElements",
                value: function () {
                    this.kaleidoscopeFooter = this.get(".kaleidoscope-footer"), this.kaleidoscopeFooterInstance = new k(this.kaleidoscopeFooter, "kaleidoFooter")
                }
            }, {
                key: "onYearOverviewToggle",
                value: (p = I(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!this.toggling) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return this.toggling = !0, d.d.state.articlesOverview ? this.onYearOverviewBackButtonClick() : this.kaleidoscopeFooterInstance.moveUp(), e.next = 6, l()(750);
                            case 6:
                                this.toggling = !1;
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return p.apply(this, arguments)
                })
            }, {
                key: "onYearOverviewBackButtonClick",
                value: (c = I(r.a.mark((function e() {
                    var t, n = this;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (d.d.state.articlesOverview) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return d.d.isMobile || T.a.on(), d.d.state.articlesOverview = !1, this.articlesOverview = this.get(".year-articles"), this.yearOverviewBackPlaneBottom.style.display = "none", Object(u.b)(this.yearOverviewBackPlane, {
                                    className: "year-articles-back-plane",
                                    duration: 500
                                }), Object(u.b)(this.yearOverviewBackPlane, {
                                    className: "year-articles-back-plane",
                                    duration: 500
                                }), t = d.d.html.scrollTop, f.a.to(this.articlesOverview, {
                                    y: "100vh",
                                    duration: .75,
                                    ease: "expo.inOut",
                                    onUpdate: function () {
                                        d.d.html.scrollTop = Object(O.b)(this.progress(), 0, 1, t, 0)
                                    },
                                    onComplete: function () {
                                        d.d.html.scrollTop = 0, n.articlesOverview.style.opacity = 0
                                    }
                                }), d.c.gl.moveDown(), Object(u.b)(this.articlesOverview, {
                                    className: "year-articles",
                                    duration: 750
                                }), e.next = 15, l()(750);
                            case 15:
                                d.d.html.scrollTop = 0, d.d.body.classList.add("fixed"), d.d.isMobile || T.a.off(), d.c.gl.resume();
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return c.apply(this, arguments)
                })
            }, {
                key: "animateOut",
                value: (s = I(r.a.mark((function e() {
                    var t = this;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                f.a.to(this.kaleidoscopeFooter, {
                                    yPercent: 100,
                                    ease: "expo.in",
                                    duration: .5,
                                    onComplete: function () {
                                        t.kaleidoscopeFooterInstance.destroy()
                                    }
                                }), d.d.state.articlesOverview && (this.articlesOverview = this.el.querySelector(".year-articles-list"), this.articlesOverviewFooter = this.el.querySelector(".year-articles-footer"), f.a.to(d.d.html, {
                                    scrollTop: 0,
                                    duration: .5,
                                    ease: "expo.out"
                                }), f.a.to([this.articlesOverview, this.articlesOverviewFooter], {
                                    opacity: 0,
                                    duration: .5
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return s.apply(this, arguments)
                })
            }, {
                key: "animateIn",
                value: (i = I(r.a.mark((function e() {
                    var t;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return E(j(v.prototype), "animateIn", this).call(this), this.getElements(), e.next = 4, a()();
                            case 4:
                                return this.kaleidoscopeFooter.style.transform = "", d.d.state.articlesOverview && (this.articlesOverview = this.el.querySelector(".year-articles"), this.articlesOverviewList = this.el.querySelector(".year-articles-list"), this.articlesOverviewListItems = this.el.querySelectorAll(".year-articles-list-item"), this.articlesOverviewFooter = this.el.querySelector(".year-articles-footer"), this.articlesOverview.classList.remove("year-articles-enter"), this.articlesOverview.style.opacity = 1, (t = d.d.doc.querySelectorAll(".year-articles-back-plane")).length > 1 && t[0].remove(), this.yearOverviewBackPlane.classList.remove("year-articles-back-plane-enter"), this.yearOverviewBackPlaneBottom.style.display = "block", f.a.fromTo([this.articlesOverviewListItems, this.articlesOverviewFooter], {
                                    opacity: 0,
                                    y: "2rem"
                                }, {
                                    delay: .6,
                                    y: 0,
                                    opacity: 1,
                                    duration: .75,
                                    ease: "expo.out",
                                    stagger: .08
                                })), f.a.fromTo(this.kaleidoscopeFooter, {
                                    yPercent: 100
                                }, {
                                    yPercent: 0,
                                    ease: "expo.inOut",
                                    duration: 1.2
                                }), null !== d.d.view.previous && "year" === d.d.view.previousType ? (d.c.kaleidoscopeNav.update(), d.c.kaleidoscopeNav.setActiveMonthKaleidoscope()) : d.c.kaleidoscopeNav.enter(), e.next = 10, l()(1e3);
                            case 10:
                                d.c.menu.updateActiveState();
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return i.apply(this, arguments)
                })
            }, {
                key: "onSocialCLick",
                value: function (e) {
                    var t = 780,
                        n = 550,
                        o = Math.floor((window.innerWidth - t) / 2),
                        r = Math.floor((window.innerHeight - n) / 2),
                        i = window.open(e.target.getAttribute("href"), "social", "width=" + t + ",height=" + n + ",left=" + o + ",top=" + r + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
                    i && (i.focus(), e.preventDefault())
                }
            }]) && S(t.prototype, n), o && S(t, o), v
        }(i.default)
    },
    eJiD: function (e, t) {
        e.exports = function () {
            return new Promise((function (e) {
                setTimeout(e, 0)
            }))
        }
    },
    mldH: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n("o0o1"),
            r = n.n(o),
            i = (n("s+lh"), n("02vm"));
        var s = n("5sN9"),
            a = n("skH9"),
            c = n("9OAr");

        function l(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var f = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.views = {}, this.promises = {}, this.init()
            }
            var t, o, f, d, p;
            return t = e, (o = [{
                key: "init",
                value: (d = r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, new Promise((function (e) {
                                    "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
                                }));
                            case 2:
                                return this.build(), this.serviceWorker(), e.next = 7, c(2e3);
                            case 7:
                                Object(a.a)(["/january/", "/february/", "/march/", "/april/", "/may/", "/june/", "/july/", "/august/", "/september/", "/october/", "/november/", "/december/"]);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })), p = function () {
                    var e = this,
                        t = arguments;
                    return new Promise((function (n, o) {
                        var r = d.apply(e, t);

                        function i(e) {
                            l(r, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            l(r, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }, function () {
                    return p.apply(this, arguments)
                })
            }, {
                key: "build",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    null === e && (e = document.querySelector("[data-router-view]")), this.getView(e, e.dataset.routerView)
                }
            }, {
                key: "getView",
                value: function (e, t) {
                    var o = Object(i.a)(t),
                        r = n("MIcw")("./".concat(t));
                    s.d.view.current = new r.default(e, o, t)
                }
            }, {
                key: "clear",
                value: function () {
                    this.promises = {}
                }
            }, {
                key: "serviceWorker",
                value: function () {
                    "serviceWorker" in navigator && window.addEventListener("load", (function () {
                        navigator.serviceWorker.register("/sw.js").then((function (e) {
                            e.update()
                        })).catch((function (e) {}))
                    }))
                }
            }, {
                key: "helpers",
                value: function () {
                    s.d.raf.add(s.c.stats.begin, "statsBegin"), s.c.stats.showPanel(0), s.c.stats.domElement.style.cssText = "position:fixed;top:0px;left:0px;", s.d.body.appendChild(s.c.stats.dom), s.d.raf.add(s.c.stats.end, "statsEnd")
                }
            }]) && u(t.prototype, o), f && u(t, f), e
        }();
        t.default = new f
    },
    oJ6j: function (e, t, n) {
        "use strict";
        var o = n("wOJ8"),
            r = n.n(o);
        t.a = new r.a
    },
    "w/up": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function () {
            return me
        }));
        var o = n("o0o1"),
            r = n.n(o),
            i = n("5sN9"),
            s = n("Womt");

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var c = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.init()
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "init",
                    value: function () {
                        var e = this;
                        this.isLoaded = !1, this.progress = 0, s.b.onProgress = function (t, n, o) {
                            if (e.isLoaded) return !1;
                            setTimeout((function () {
                                e.progress = Math.floor(n / o * 100), i.c.loader.setProgress(e.progress), 100 === e.progress && (e.isLoaded = !0, setTimeout((function () {
                                    i.c.loader.end()
                                }), 1e3))
                            }), 10 * n)
                        }
                    }
                }]) && a(t.prototype, n), o && a(t, o), e
            }(),
            l = n("oJ6j"),
            u = n("z/o8"),
            f = n("Mtn/"),
            d = n("k+my"),
            p = n("Ng1w"),
            h = n("6Y8T"),
            v = n.n(h),
            y = {
                vertexShader: v()("#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"),
                fragmentShader: v()("precision highp float;\n#define GLSLIFY 1\nuniform float uTime;\nuniform sampler2D tDiffuse;\nuniform vec2 uResolution;\nvarying vec2 vUv;\n\nvec4 fxaa(sampler2D tex, vec2 uv, vec2 resolution) {\n    vec2 pixel = vec2(1) / resolution;\n    vec3 l = vec3(0.299, 0.587, 0.114);\n    float lNW = dot(texture2D(tex, uv + vec2(-1, -1) * pixel).rgb, l);\n    float lNE = dot(texture2D(tex, uv + vec2( 1, -1) * pixel).rgb, l);\n    float lSW = dot(texture2D(tex, uv + vec2(-1,  1) * pixel).rgb, l);\n    float lSE = dot(texture2D(tex, uv + vec2( 1,  1) * pixel).rgb, l);\n    float lM  = dot(texture2D(tex, uv).rgb, l);\n    float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));\n    float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));\n\n    vec2 dir = vec2(\n        -((lNW + lNE) - (lSW + lSE)),\n            ((lNW + lSW) - (lNE + lSE))\n    );\n\n    float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125);\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(8, 8), max(vec2(-8, -8), dir * rcpDirMin)) * pixel;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, uv + dir * (1.0 / 3.0 - 0.5)).rgb +\n        texture2D(tex, uv + dir * (2.0 / 3.0 - 0.5)).rgb);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, uv + dir * -0.5).rgb +\n        texture2D(tex, uv + dir * 0.5).rgb);\n    float lB = dot(rgbB, l);\n    return mix(\n        vec4(rgbB, 1),\n        vec4(rgbA, 1),\n        max(sign(lB - lMin), 0.0) * max(sign(lB - lMax), 0.0)\n    );\n}\n\nvoid main() {\n    vec4 raw = texture2D(tDiffuse, vUv);\n    vec4 aa = fxaa(tDiffuse, vUv, uResolution);\n    // Split screen in half to show side-by-side comparison\n    // gl_FragColor = mix(raw, aa, 1.0);\n    gl_FragColor = raw;\n\n    // Darken left side a tad for clarity\n    // gl_FragColor.rgb -= 0.25;\n}"),
                uniforms: {
                    tDiffuse: {
                        value: null
                    },
                    uResolution: {
                        value: new s.o(i.d.layout.w, i.d.layout.h)
                    }
                }
            };

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m(e, t) {
            return (m = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function x(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = w(e);
                if (t) {
                    var r = w(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return b(this, n)
            }
        }

        function b(e, t) {
            return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var _ = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t)
                }(n, e);
                var t = x(n);

                function n(e) {
                    var o;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (o = t.call(this, {
                        vertexShader: v()("#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"),
                        fragmentShader: v()("#define GLSLIFY 1\nuniform sampler2D tDiffuse;\nuniform sampler2D tBg;\nuniform sampler2D tBgLines;\nuniform sampler2D tFront;\nuniform sampler2D tFrontBg;\nuniform sampler2D tFrontShading;\n\nuniform vec2 uMeshSize;\nuniform vec2 uImageSize;\n\nuniform vec2 uResolution;\nvarying vec2 vUv;\n\nuniform float uAlpha;\n\nuniform float uTime;\nuniform float uScale;\nuniform float uScaleRot;\nuniform float uSides;\nuniform float uRotation;\nuniform float uRotationK;\nuniform highp vec2 uPosition;\nuniform vec2 uMouse;\n\nuniform float uDrosteRad1;\nuniform float uDrosteRad2;\n\n// ---- change here ----\nconst float USE_KALEIDOSCOPE = 1.;\nconst float NUM_SIDES = 5.0;\n\n// math const\nconst float PI = 3.14159265359;\nconst float DEG_TO_RAD = PI / 180.0;\n\nvec2 cCis(float r);\nvec2 cLog(vec2 c);\nvec2 cInv(vec2 c);\nfloat cArg(vec2 c);\nfloat cAbs(vec2 c);\n\nvec2 cMul(vec2 a, vec2 b);\nvec2 cDiv(vec2 a, vec2 b);\n\nvec2 cCis(float r) {\n    return vec2( cos(r), sin(r) );\n}\n\nvec2 cExp(vec2 c) {\n    return exp(c.x) * cCis(c.y);\n}\nvec2 cConj(vec2 c) {\n    return vec2(c.x, -c.y);\n}\n\nvec2 cInv(vec2 c) {\n    return cConj(c) / dot(c, c);\n}\n\nvec2 cLog(vec2 c) {\n    return vec2( log( cAbs(c) ), cArg(c) );\n}\n\nfloat cArg(vec2 c) {\n    return atan(c.y, c.x);\n}\n\nfloat cAbs(vec2 c) {\n    return length(c);\n}\n\nvec2 cMul(vec2 a, vec2 b) {\n    return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);\n}\n\nvec2 cDiv(vec2 a, vec2 b) {\n    return cMul(a, cInv(b));\n}\n\nvec2 Kaleidoscope( vec2 uv, float n) {\n    float angle = PI / n;\n\n    float r = length( uv );\n    float a = atan( uv.y, uv.x ) / angle;\n\n    a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;\n\n    return vec2( cos( a ), sin( a ) ) * r;\n}\n\nvec2 kaleidoscope(vec2 uv) {\n    vec2 radial = vec2(0.);\n    uv = mix( uv, Kaleidoscope( uv * mat2(cos(uRotationK), -sin(uRotationK), sin(uRotationK), cos(uRotationK)), uSides), USE_KALEIDOSCOPE );\n\n    return uv;\n}\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvec2 cover(vec2 sz, vec2 is, vec2 uv) {\n  float screenRatio = sz.x / sz.y;\n  float imageRatio = is.x / is.y;\n\n  vec2 newSize = screenRatio < imageRatio\n      ? vec2(is.x * sz.y / is.y, sz.y)\n      : vec2(sz.x, is.y * sz.x / is.x);\n\n  vec2 newOffset = (screenRatio < imageRatio\n      ? vec2((newSize.x - sz.x) / 2.0, 0.0)\n      : vec2(0.0, (newSize.y - sz.y) / 2.0)) / newSize;\n\n  return uv * sz / newSize + newOffset;\n}\n\nvoid main() {\n    vec2 uv = vUv - .5;\n\n    vec2 bgUv = cover(uMeshSize, uImageSize, vUv);\n    vec2 bgRotateUv = vUv;\n\n    uv.y *= uResolution.y / uResolution.x;\n    uv /= 1.1;\n\n    uv = rotate(uv, uRotation);\n    uv = kaleidoscope(uv);\n\n    vec2 colour_uv = uv * 1. + 0.;\n\n    colour_uv += .5;\n\n    bgUv -= 0.5;\n    bgRotateUv -= 0.5;\n    bgRotateUv.y *= uResolution.y / uResolution.x;\n    bgRotateUv = rotate(bgRotateUv, uRotation);\n    bgUv *= uScale;\n    bgRotateUv /= uScaleRot;\n    bgUv += 0.5;\n    bgRotateUv += 0.5;\n\n    vec4 colour = texture2D(tDiffuse, colour_uv);\n\n    vec4 bg = texture2D(tBg, bgUv);\n    vec4 bgLines = texture2D(tBgLines, bgRotateUv);\n\n    vec4 frontLines = texture2D(tFront, bgRotateUv);\n    vec4 frontBg = texture2D(tFrontBg, bgUv);\n    vec4 frontShading = texture2D(tFrontShading, bgRotateUv);\n\n    vec3 mixedBack = mix(bg.rgb, bgLines.rgb, bgLines.a);\n    vec3 mixedBackLines = mix(mixedBack.rgb, colour.rgb, colour.a);\n\n    vec3 mixedFront = mix(mixedBackLines.rgb, frontLines.rgb, frontLines.a);\n    vec3 mixedFront2 = mix(mixedFront.rgb, frontShading.rgb, frontShading.a);\n\n    vec3 mixedFrontBg = mix(mixedFront2.rgb, frontBg.rgb, frontBg.a);\n\n    gl_FragColor = vec4(mixedFrontBg, 1.);\n}")
                    })).uniforms = {
                        tDiffuse: {
                            value: e.texture
                        },
                        tBg: {
                            value: null
                        },
                        tBgLines: {
                            value: null
                        },
                        tFront: {
                            value: null
                        },
                        tFrontBg: {
                            value: null
                        },
                        tFrontShading: {
                            value: null
                        },
                        uAlpha: {
                            type: "f",
                            value: 0
                        },
                        uMeshSize: {
                            value: new s.o(0, 0)
                        },
                        uImageSize: {
                            value: new s.o(0, 0)
                        },
                        uResolution: {
                            value: new s.o(Store.layout.w, Store.layout.h)
                        },
                        uTime: {
                            type: "f",
                            value: 1
                        },
                        uScale: {
                            type: "f",
                            value: 1
                        },
                        uScaleRot: {
                            type: "f",
                            value: 1
                        },
                        uSides: {
                            type: "i",
                            value: 6
                        },
                        uRotation: {
                            type: "f",
                            value: 0
                        },
                        uRotationK: {
                            type: "f",
                            value: 0
                        },
                        uMouse: {
                            type: "v2",
                            value: new s.o(.5, .5)
                        },
                        uDrosteRad1: {
                            type: "f",
                            value: .5
                        },
                        uDrosteRad2: {
                            type: "f",
                            value: 1.5
                        }
                    }, o
                }
                return n
            }(s.l),
            k = n("9OAr"),
            O = n.n(k),
            T = n("eJiD"),
            R = n.n(T),
            P = n("C6M3");

        function I(e) {
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function S(e, t) {
            return (S = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function E(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = z(e);
                if (t) {
                    var r = z(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return A(this, n)
            }
        }

        function A(e, t) {
            return !t || "object" !== I(t) && "function" != typeof t ? L(e) : t
        }

        function L(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function z(e) {
            return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var j = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(a, e);
            var t, n, o, r = E(a);

            function a(e) {
                var t;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a);
                var n = new s.l({
                    uniforms: {
                        time: {
                            value: 0
                        },
                        uTexture: {
                            value: null
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\nuniform vec3 uPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n}",
                    fragmentShader: "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nuniform float uTime;\n\nvoid main() {\n    vec2 uv = vUv;\n\n    vec4 originalPass = texture2D( uTexture, uv );\n\n    gl_FragColor = originalPass;\n}",
                    transparent: !0
                });
                return (t = r.call(this, e, n)).meshType = "ImagePlane", t.fileName = "", t.ratio = 1, t.loopPercentage = 0, t.offsetPercentage = 0, t.easing = 0, t.setConfig = t.setConfig.bind(L(t)), t.setConfig(), t
            }
            return t = a, (n = [{
                key: "setConfig",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        position: {
                            start: new s.o,
                            end: new s.o
                        },
                        scale: 1,
                        rotation: {
                            start: .34,
                            end: 4
                        },
                        globalTime: 30,
                        loop: 10,
                        rotationSpeed: 0,
                        rotationAnimation: 0
                    };
                    this.settings = {
                        position: {
                            start: e.position.start,
                            end: e.position.end,
                            lerped: new s.o
                        },
                        scale: {
                            start: e.scale.start,
                            end: e.scale.end
                        },
                        mouse: {
                            position: 0,
                            rotation: 0
                        },
                        rotation: {
                            start: e.rotation.start,
                            end: e.rotation.end,
                            lerped: 0
                        },
                        rotationAnimation: 0,
                        loop: e.loop || 0,
                        loopToggle: e.loop || !0,
                        offset: e.offset || 0,
                        zIndex: e.zIndex || 0
                    }, this.setScale(this.settings.scale.start), this.rotation.z = this.settings.rotation.start, this.setDepthPosition(this.settings.zIndex)
                }
            }, {
                key: "setPosition",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.position.x = e, this.position.y = t, this.position.x = e, this.position.y = t
                }
            }, {
                key: "setDepthPosition",
                value: function (e) {
                    this.position.z = e
                }
            }, {
                key: "setStartPosition",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.settings.position.start.set(e, t)
                }
            }, {
                key: "setEndPosition",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.settings.position.end.set(e, t)
                }
            }, {
                key: "setScale",
                value: function (e) {
                    this.scale.set(e, e * this.ratio, e)
                }
            }, {
                key: "setLoopPercentage",
                value: function (e) {
                    this.loopPercentage = this.settings.loop / 100 * e
                }
            }, {
                key: "setOffsetDuration",
                value: function (e) {
                    this.offsetPercentage = this.settings.offset / 100 * e
                }
            }, {
                key: "updateMaterial",
                value: function (e) {
                    this.material.uniforms.uTexture.value = e, this.ratio = e.image.naturalHeight / e.image.naturalWidth, this.setScale(this.settings.scale.start)
                }
            }, {
                key: "animatePosition",
                value: function (e) {
                    var t = this.settings.position,
                        n = t.start,
                        o = t.end,
                        r = Object(P.b)(e, 0, 1, n.x, o.x),
                        i = Object(P.b)(e, 0, 1, n.y, o.y);
                    this.setPosition(r + 2 * this.mouse.speedLerp.x, i + 2 * this.mouse.speedLerp.y)
                }
            }, {
                key: "animateRotation",
                value: function (e) {
                    var t = this.settings.rotation,
                        n = t.start,
                        o = t.end,
                        r = Object(P.b)(e, 0, 2, n, o);
                    this.rotation.z = 1 * r + (this.mouse.speedLerp.x + this.mouse.speedLerp.y)
                }
            }, {
                key: "animateScale",
                value: function (e) {
                    var t = this.settings.scale,
                        n = t.start,
                        o = t.end,
                        r = Object(P.b)(e, 0, 1, n, o);
                    this.setScale(r)
                }
            }, {
                key: "reset",
                value: function () {
                    this.time = 0, this.loopProgress = this.globalTime % this.loopPercentage
                }
            }, {
                key: "updateLoop",
                value: function () {
                    var e = this.settings.loopToggle ? 2 : 1;
                    this.loopProgress > this.loopPercentage / e && (this.loopProgress = this.loopPercentage - this.loopProgress);
                    var t = Object(P.b)(this.loopProgress, 0, this.loopPercentage / e, 0, 1);
                    i.d.controls.down ? this.easing = t : this.easing = Object(P.a)(this.easing, t, .01), this.animatePosition(this.easing), this.animateRotation(this.easing), this.animateScale(this.easing)
                }
            }, {
                key: "update",
                value: function (e, t, n) {
                    this.mouse = n, this.setLoopPercentage(t), this.setOffsetDuration(t), this.offsetSign = Math.sign(this.offsetPercentage), this.loopPercentage + this.offsetPercentage > t && (this.offsetPercentage = -(t - this.offsetPercentage)), e > this.offsetPercentage && e <= this.loopPercentage + this.offsetPercentage ? (this.loopProgress = (e - this.offsetPercentage) % this.loopPercentage, this.updateLoop()) : e > t + this.offsetPercentage ? (this.loopProgress = e - (t + this.offsetPercentage), this.updateLoop()) : (this.animatePosition(0), this.animateRotation(0), this.animateScale(0))
                }
            }]) && M(t.prototype, n), o && M(t, o), a
        }(s.e);

        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function C(e, t) {
            return (C = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function N(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = F(e);
                if (t) {
                    var r = F(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return U(this, n)
            }
        }

        function U(e, t) {
            return !t || "object" !== D(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var G = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && C(e, t)
                }(a, e);
                var t, n, o, r = N(a);

                function a(e) {
                    var t;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (t = r.call(this)).preset = e, t.month = e.month, t.images = [];
                    return t.positionOffset = new s.p(-20, -20, -20), t.positionOffsetLerpX = t.positionOffsetLerpY = t.positionOffsetLerpZ = 0, t.mouse = {
                        speed: {
                            x: 1,
                            y: 1
                        },
                        speedLerp: {
                            x: 1,
                            y: 1
                        },
                        active: !0
                    }, e.images && e.images.forEach((function (n) {
                        var o = t.createImage(n, e);
                        t.images.push(o), t.add(o)
                    })), t
                }
                return t = a, (n = [{
                    key: "createImage",
                    value: function (e, t) {
                        var n = this.createImageSettings(e, t);
                        return i.d.webp && (e.name = e.name.replace(/.png/gi, ".webp")), i.c.gl.loader.load("/assets/media/".concat(e.name), (function (e) {
                            n.updateMaterial(e)
                        })), n
                    }
                }, {
                    key: "createImageSettings",
                    value: function (e, t) {
                        var n = i.c.gl.kaleidoscope.plane.clone(),
                            o = new j(n);
                        "" != e.name && (o.fileName = e.name);
                        var r = {
                            scale: {
                                start: 5,
                                end: 5
                            },
                            rotation: {
                                start: 0,
                                end: 0
                            },
                            position: {
                                start: new s.o,
                                end: new s.o
                            },
                            loop: e.loop || 10,
                            loopToggle: e.loopToggle || !0,
                            offset: e.offset || 0,
                            zIndex: e.zIndex || 0
                        };
                        return e.scale && (e.scale.start && (r.scale.start = e.scale.start), e.scale.end && (r.scale.end = e.scale.end)), e.rotation && (r.rotation.start = e.rotation.start, r.rotation.end = e.rotation.end), e.position && (r.position.start = new s.o(e.position.start.x, e.position.start.y), r.position.end = new s.o(e.position.end.x, e.position.end.y)), o.setConfig(r), o.setLoopPercentage(t.general.duration), o.setOffsetDuration(t.general.duration), o
                    }
                }, {
                    key: "setFrame",
                    value: function (e, t, n) {
                        this.mouse.speedLerp.x = n.normalMovementX * this.preset.general.mouse.x, this.mouse.speedLerp.y = n.normalMovementY * this.preset.general.mouse.y;
                        for (var o = 0; o < this.images.length; o++) this.images[o].update(e, t, this.mouse)
                    }
                }, {
                    key: "update",
                    value: function (e, t, n) {
                        this.positionOffsetLerpX = Object(P.a)(this.positionOffsetLerpX, this.positionOffset.x, .15), this.positionOffsetLerpY = Object(P.a)(this.positionOffsetLerpY, this.positionOffset.y, .15), this.positionOffsetLerpZ = Object(P.a)(this.positionOffsetLerpZ, this.positionOffset.z, .15), this.position.set(this.positionOffsetLerpX, this.positionOffsetLerpY, this.positionOffsetLerpZ), this.mouse.speed.x = n.normalMovementX * this.preset.general.mouse.x, this.mouse.speed.y = n.normalMovementY * this.preset.general.mouse.y, this.mouse.speedLerp.x = Object(P.a)(this.mouse.speedLerp.x, this.mouse.speed.x, .05), this.mouse.speedLerp.y = Object(P.a)(this.mouse.speedLerp.y, this.mouse.speed.y, .05);
                        for (var o = 0; o < this.images.length; o++) this.images[o].update(e, t, this.mouse)
                    }
                }]) && B(t.prototype, n), o && B(t, o), a
            }(s.f),
            J = function (e) {
                return new Promise((function (t, n) {
                    var o = new Image;
                    o.onload = function () {
                        o.width > 0 && o.height > 0 ? t(e) : n(e)
                    }, o.onerror = function () {
                        n(e)
                    }, o.src = "data:image/webp;base64," + {
                        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    } [e]
                }))
            };

        function H(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function Y(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        H(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        H(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var W = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t, this.onResize = this.onResize.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.update = this.update.bind(this), this.render = this.render.bind(this), i.d.resolution = new s.o, this.transitioning = !1, this.mouse = {
                    x: i.d.layout.w / 2,
                    y: i.d.layout.h / 2,
                    normalMovementX: .5,
                    normalMovementY: .5,
                    active: "year" === i.d.view.current.type
                }, this.center = new s.o, this.state = "playing", this.saving = !1, this.timeDebug = !1, this.paused = !1, this.time = 0, this.elapsedTime = 0, this.sceneRotation = 0, this.sceneRotationLerp = 0, this.plane = new s.i(1, 1, 1), this.rotating = !1, this.previouseMonth = this.activeMonth = null, this.clock = new s.a({
                    autoStart: !1
                }), this.getData = this.getData.bind(this), this.images = [], this.compositions = [], this.general = {}
            }
            var t, n, o, a, c, l, h;
            return t = e, (n = [{
                key: "getMonth",
                value: function (e) {
                    var t;
                    return this.compositions.forEach((function (n) {
                        n.el.month === e && (t = n)
                    })), t
                }
            }, {
                key: "getData",
                value: (h = Y(r.a.mark((function e(t) {
                    var n = this;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, J("lossy").then((function () {
                                    i.d.webp = !0
                                })).catch((function () {
                                    i.d.webp = !1, i.d.html.classList.add("no-webp")
                                }));
                            case 2:
                                return this.loadBackground(), this.presets = t.presets, t.presets.forEach((function (e) {
                                    n.loadPreset(e)
                                })), e.next = 7, O()(200);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return h.apply(this, arguments)
                })
            }, {
                key: "loadPreset",
                value: function (e) {
                    this.preset = e, this.createGeneralSettings(this.preset.general);
                    var t = new G(e);
                    if (t.setFrame(0, e.general.duration, {
                            normalMovementX: .5,
                            normalMovementY: .5
                        }), this.compositions.push({
                            active: !1,
                            el: t
                        }), !i.d.isMobile) {
                        var n = new G(e);
                        n.setFrame(20, e.general.duration, {
                            normalMovementX: 1,
                            normalMovementY: 1
                        }), i.c.gl.menu.compositions.push({
                            active: !1,
                            el: n
                        })
                    }
                }
            }, {
                key: "setActiveMonth",
                value: (l = Y(r.a.mark((function e(t) {
                    var n = this;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, R()();
                            case 2:
                                this.transitioning = !0, this.mouse.active = !1 === i.d.state.articlesOverview, this.rtScene.add(t.el), t.el.visible = !1, this.previouseMonth = this.activeMonth, this.compositions.forEach((function (e) {
                                    e.el.month === t.el.month && (n.activeMonth = e)
                                })), this.activeMonth.active = !0, "Intro screen" !== t.el.month ? this.rotating = !1 === i.d.state.articlesOverview : (this.rotating = !1, this.sceneRotation = 0), this.activeMonth === this.previouseMonth && (this.previouseMonth = null), null !== this.previouseMonth && (this.previouseMonth.active = !0, u.a.to(this.previouseMonth.el.positionOffset, {
                                    z: 20,
                                    x: 20,
                                    y: 20,
                                    duration: 1,
                                    ease: "expo.in",
                                    onComplete: function () {
                                        n.previouseMonth.el.active = !1, n.rtScene.remove(n.previouseMonth.el)
                                    }
                                })), u.a.fromTo(this.activeMonth.el.positionOffset, {
                                    z: -20,
                                    x: -20,
                                    y: -20
                                }, {
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    duration: 1.4,
                                    ease: "expo.out",
                                    delay: .2,
                                    onStart: function () {
                                        n.activeMonth.el.visible = !0
                                    },
                                    onComplete: function () {
                                        n.transitioning = !1
                                    }
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return l.apply(this, arguments)
                })
            }, {
                key: "init",
                value: (c = Y(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.updateSize(), this.createScene(), this.createCamera(), this.createRenderer(), this.createRenderTarget(), this.createPostProcessing(), this.addListeners(), this.onResize(), this.progress = 0, e.next = 11, O()(500);
                            case 11:
                                this.getData(i.d.settings);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return c.apply(this, arguments)
                })
            }, {
                key: "start",
                value: (a = Y(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                this.clock.start(), this.add();
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "destroy",
                value: function () {
                    this.renderer.dispose(), this.removeListeners()
                }
            }, {
                key: "add",
                value: function () {
                    u.a.ticker.add(this.update), u.a.ticker.add(this.render)
                }
            }, {
                key: "remove",
                value: function () {
                    u.a.ticker.remove(this.update), u.a.ticker.remove(this.render)
                }
            }, {
                key: "updateTime",
                value: function (e, t) {
                    this.mouse.normalMovementX = this.mouse.x / i.d.resolution.x + .5, this.mouse.normalMovementY = this.mouse.y / i.d.resolution.y + .5;
                    var n = this.preset.general.duration;
                    this.currentTime = (e + t) % n, this.rotating && (this.sceneRotation -= .0015), this.sceneRotationLerp = Object(P.a)(this.sceneRotationLerp, this.sceneRotation, .2), this.kaleidoRenderTargetMaterial.uniforms.uRotation.value = this.sceneRotationLerp;
                    for (var o = 0; o < this.compositions.length; o++) this.compositions[o].active && this.compositions[o].el.update(this.currentTime, n, this.mouse)
                }
            }, {
                key: "update",
                value: function () {
                    this.clock.running && (this.time = this.clock.getElapsedTime()), this.updateTime(this.time, this.elapsedTime)
                }
            }, {
                key: "createScene",
                value: function () {
                    this.rtScene = new s.k, this.scene = new s.k
                }
            }, {
                key: "createRenderTarget",
                value: function () {
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.kaleidoRenderTarget = new s.q(t, n), this.kaleidoRenderTargetGeometry = new s.i(2, 2), this.kaleidoRenderTargetMaterial = new _({
                        texture: this.kaleidoRenderTarget.texture
                    }), this.kaleidoRenderTargetMesh = new s.e(this.kaleidoRenderTargetGeometry, this.kaleidoRenderTargetMaterial), this.kaleidoRenderTargetGroup = new s.c, this.kaleidoRenderTargetGroup.add(this.kaleidoRenderTargetMesh), this.scene.add(this.kaleidoRenderTargetGroup)
                }
            }, {
                key: "loadBackground",
                value: function () {
                    var e = this,
                        t = i.d.webp ? "webp" : "png";
                    i.c.gl.loader.load("/assets/images/bg.".concat(i.d.webp ? t : "jpg"), (function (t) {
                        e.kaleidoRenderTargetMaterial.uniforms.tBg.value = t, e.kaleidoRenderTargetMaterial.uniforms.uImageSize.value = [t.image.naturalWidth, t.image.naturalHeight], e.kaleidoRenderTargetMaterial.uniforms.uMeshSize.value = [i.d.layout.w, i.d.layout.h], i.d.isMobile || (i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.tBg.value = t, i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.uMeshSize.value = [i.d.layout.w, i.d.layout.h], i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.uImageSize.value = [t.image.naturalWidth, t.image.naturalHeight])
                    })), i.c.gl.loader.load("/assets/images/back-lines.".concat(t), (function (t) {
                        e.kaleidoRenderTargetMaterial.uniforms.tBgLines.value = t, i.d.isMobile || (i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.tBgLines.value = t)
                    })), i.c.gl.loader.load("/assets/images/front-shading.".concat(t), (function (t) {
                        e.kaleidoRenderTargetMaterial.uniforms.tFrontShading.value = t, i.d.isMobile || (i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.tFrontShading.value = t)
                    })), i.c.gl.loader.load("/assets/images/front-lines.".concat(t), (function (t) {
                        e.kaleidoRenderTargetMaterial.uniforms.tFront.value = t, i.d.isMobile || (i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.tFront.value = t)
                    })), i.c.gl.loader.load("/assets/images/front-bg.".concat(t), (function (t) {
                        e.kaleidoRenderTargetMaterial.uniforms.tFrontBg.value = t, i.d.isMobile || (i.c.gl.menu.kaleidoRenderTargetMaterial.uniforms.tFrontBg.value = t)
                    }))
                }
            }, {
                key: "createCamera",
                value: function () {
                    this.camera = new s.g(-1, 1, 1, -1, 0, 1), this.rtCamera = new s.h(75, this.container.clientWidth / this.container.clientHeight, .1, 100), this.rtCamera.position.set(0, 1, 10)
                }
            }, {
                key: "createRenderer",
                value: function () {
                    this.renderer = new s.r({
                        alpha: !1,
                        antialias: !1
                    }), this.container.appendChild(this.renderer.domElement);
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.renderer.setSize(t, n), this.renderer.setPixelRatio(i.d.perf > 2 ? i.d.win.devicePixelRatio : 1)
                }
            }, {
                key: "createPostProcessing",
                value: function () {
                    this.composer = new f.a(this.renderer), this.fxaaPass = new p.a(y), this.composer.addPass(new d.a(this.scene, this.camera)), this.composer.addPass(this.fxaaPass)
                }
            }, {
                key: "createGeneralSettings",
                value: function (e) {
                    this.kaleidoRenderTargetMaterial.uniforms.uSides.value = e.sides / 2
                }
            }, {
                key: "addListeners",
                value: function () {
                    i.d.win.addEventListener("resize", this.onResize, {
                        passive: !0
                    }), "ontouchmove" in i.d.win ? (i.d.win.addEventListener("touchmove", this.onMouseMove, {
                        passive: !0
                    }), i.d.win.addEventListener("mousemove", this.onMouseMove)) : i.d.win.addEventListener("mousemove", this.onMouseMove)
                }
            }, {
                key: "removeListeners",
                value: function () {
                    i.d.win.removeEventListener("resize", this.onResize, {
                        passive: !0
                    }), "ontouchmove" in i.d.win ? (i.d.win.removeEventListener("touchmove", this.onMouseMove, {
                        passive: !0
                    }), i.d.win.removeEventListener("mousemove", this.onMouseMove)) : i.d.win.removeEventListener("mousemove", this.onMouseMove)
                }
            }, {
                key: "updateSize",
                value: function () {
                    i.d.resolution.set(i.d.win.innerWidth, i.d.win.innerHeight), this.center.set(i.d.resolution.x / 2, i.d.resolution.y / 2)
                }
            }, {
                key: "onMouseMove",
                value: function (e) {
                    if (this.mouse.active) {
                        var t = e.touches ? e.touches[0].clientX : e.clientX,
                            n = e.touches ? e.touches[0].clientY : e.clientY;
                        this.mouse.x = t - this.center.x, this.mouse.y = n - this.center.y
                    }
                }
            }, {
                key: "render",
                value: function () {
                    this.renderer.setRenderTarget(this.kaleidoRenderTarget), this.renderer.render(this.rtScene, this.rtCamera), this.renderer.setRenderTarget(null), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "onResize",
                value: function () {
                    this.updateSize();
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.kaleidoRenderTargetMaterial.uniforms.uMeshSize.value = [t, n], this.kaleidoRenderTarget.setSize(t * i.d.win.devicePixelRatio * 1.5, n * i.d.win.devicePixelRatio * 1.5), this.fxaaPass.uniforms.uResolution.value = i.d.resolution, this.kaleidoRenderTargetMaterial.uniforms.uResolution.value = i.d.resolution;
                    var o = t / n,
                        r = 2 - o + .35;
                    o > 1.3 ? (this.kaleidoRenderTargetMaterial.uniforms.uScale.value = 1, this.kaleidoRenderTargetMaterial.uniforms.uScaleRot.value = 1, this.kaleidoRenderTargetMesh.scale.set(1, 1, 1)) : (this.kaleidoRenderTargetMaterial.uniforms.uScale.value = r, this.kaleidoRenderTargetMaterial.uniforms.uScaleRot.value = 2, this.kaleidoRenderTargetMesh.scale.set(r, r, r)), this.renderer.setSize(t, n), this.rtCamera.aspect = 1, this.rtCamera.updateProjectionMatrix(), this.camera.aspect = t / n, this.camera.updateProjectionMatrix()
                }
            }]) && q(t.prototype, n), o && q(t, o), e
        }();

        function V(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function X(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        V(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        V(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var Q = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t.querySelector(".menu-gl"), this.links = t.querySelectorAll(".menu-list-item a"), this.container && (this.onResize = this.onResize.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.update = this.update.bind(this), this.render = this.render.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.transitioning = !1, this.rotating = !0, this.positionLerp = {
                    x: 0,
                    y: 0
                }, this.mouse = {
                    x: i.d.layout.w / 2,
                    y: i.d.layout.h / 2,
                    normalMovementX: 1,
                    normalMovementY: 1,
                    active: "year" === i.d.view.current.type
                }, this.center = new s.o, this.state = "playing", this.saving = !1, this.timeDebug = !1, this.paused = !1, this.time = 0, this.elapsedTime = 0, this.isMouseOver = !1, this.sceneRotation = 0, this.previouseMonth = this.activeMonth = null, this.clock = new s.a({
                    autoStart: !1
                }), this.images = [], this.compositions = [], this.general = {})
            }
            var t, n, o, a, c, l;
            return t = e, (n = [{
                key: "getMonth",
                value: function (e) {
                    var t;
                    return this.compositions.forEach((function (n) {
                        n.el.month === e && (t = n)
                    })), t
                }
            }, {
                key: "setActiveMonth",
                value: (l = X(r.a.mark((function e(t) {
                    var n = this;
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.transitioning = !0, this.rtScene.add(t.el), t.el.visible = !1, this.previouseMonth = this.activeMonth, this.compositions.forEach((function (e) {
                                    e.el.month === t.el.month && (n.activeMonth = e)
                                })), this.activeMonth.active = !0, this.activeMonth.el.visible = !1, this.activeMonth === this.previouseMonth && (this.previouseMonth = null), null !== this.previouseMonth && (this.compositions.forEach((function (e) {
                                    e.el.month !== n.activeMonth.el.month && e.el.month !== n.previouseMonth.el.month && (e.el.visible = !1, n.rtScene.remove(e.el))
                                })), this.previouseMonth.active = !0, u.a.to(this.previouseMonth.el.positionOffset, {
                                    z: 20,
                                    x: 20,
                                    y: 20,
                                    duration: 0,
                                    ease: "expo.in",
                                    onComplete: function () {
                                        n.previouseMonth.active = !1, n.rtScene.remove(n.previouseMonth.el)
                                    }
                                })), e.next = 12, R()();
                            case 12:
                                u.a.to(this.activeMonth.el.positionOffset, {
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    duration: 0,
                                    ease: "expo.out",
                                    onStart: function () {
                                        n.activeMonth.el.visible = !0
                                    },
                                    onComplete: function () {
                                        n.transitioning = !1
                                    }
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return l.apply(this, arguments)
                })
            }, {
                key: "init",
                value: (c = X(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                this.updateSize(), this.createScene(), this.createCamera(), this.createRenderer(), this.createRenderTarget(), this.createPostProcessing(), this.onResize(), this.progress = 0;
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return c.apply(this, arguments)
                })
            }, {
                key: "updateTime",
                value: function (e, t) {
                    this.currentTime = (e + t) % 60, this.rotating && (this.sceneRotation -= .0015), this.kaleidoRenderTargetMaterial.uniforms.uRotation.value = this.sceneRotation;
                    for (var n = 0; n < this.compositions.length; n++) this.compositions[n].active && this.compositions[n].el.update(this.currentTime, 60, this.mouse)
                }
            }, {
                key: "update",
                value: function () {
                    this.clock.running && (this.time = this.clock.getElapsedTime()), this.updateTime(this.time, this.elapsedTime), this.mouse.x = i.d.mouse.x / i.d.layout.w * 2 - 1, this.mouse.y = -i.d.mouse.y / i.d.layout.h * 2 + 1;
                    var e = Object(P.b)(this.mouse.x, -1, 1, -this.viewSize.width / 2, this.viewSize.width / 2),
                        t = Object(P.b)(this.mouse.y, -1, 1, -this.viewSize.height / 2, this.viewSize.height / 2);
                    this.positionLerp.x = Object(P.a)(this.positionLerp.x, e, .1), this.positionLerp.y = Object(P.a)(this.positionLerp.y, t, .1), this.kaleidoRenderTargetMesh.position.y = Object(P.b)(-this.mouse.y, -1, 1, -.25, .25), this.kaleidoRenderTargetGroup.position.x = this.positionLerp.x, this.kaleidoRenderTargetGroup.position.y = this.positionLerp.y
                }
            }, {
                key: "createScene",
                value: function () {
                    this.rtScene = new s.k, this.scene = new s.k
                }
            }, {
                key: "createRenderTarget",
                value: function () {
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.kaleidoRenderTarget = new s.q(t, n), this.kaleidoRenderTargetGeometry = new s.i(1, 1, 32, 32), this.kaleidoRenderTargetMaterial = new _({
                        texture: this.kaleidoRenderTarget.texture
                    }), this.kaleidoRenderTargetMesh = new s.e(this.kaleidoRenderTargetGeometry, this.kaleidoRenderTargetMaterial), this.kaleidoRenderTargetGroup = new s.c, this.kaleidoRenderTargetMesh.scale.set(1.923, 1, 1), this.kaleidoRenderTargetGroup.scale.set(.575, .575, .575), this.kaleidoRenderTargetGroup.rotation.z = -.2, this.kaleidoRenderTargetMesh.position.x = 1.2, this.kaleidoRenderTargetMesh.position.y = .2, this.kaleidoRenderTargetGroup.add(this.kaleidoRenderTargetMesh), this.scene.add(this.kaleidoRenderTargetGroup)
                }
            }, {
                key: "createCamera",
                value: function () {
                    this.camera = new s.h(40, i.d.layout.w / i.d.layout.h, .1, 100), this.camera.position.set(0, 0, 3), this.rtCamera = new s.h(75, this.container.clientWidth / this.container.clientHeight, .1, 100), this.rtCamera.position.set(0, 1, 10)
                }
            }, {
                key: "createRenderer",
                value: function () {
                    this.renderer = new s.r({
                        antialias: !0,
                        alpha: !0
                    }), this.container.appendChild(this.renderer.domElement);
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.renderer.setSize(t, n), this.renderer.setPixelRatio(i.d.perf > 2 ? i.d.win.devicePixelRatio : 1)
                }
            }, {
                key: "createPostProcessing",
                value: function () {
                    this.composer = new f.a(this.renderer), this.fxaaPass = new p.a(y), this.composer.addPass(new d.a(this.scene, this.camera)), this.composer.addPass(this.fxaaPass)
                }
            }, {
                key: "createGeneralSettings",
                value: function (e) {
                    this.kaleidoRenderTargetMaterial.uniforms.uSides.value = e.sides / 2, this.kaleidoRenderTargetMaterial.uniforms.uRotation.value = e.angle
                }
            }, {
                key: "add",
                value: function () {
                    var e = this;
                    this.clock.start(), u.a.ticker.add(this.update), u.a.ticker.add(this.render), u.a.set(this.container, {
                        duration: .5,
                        opacity: 0,
                        ease: "Power4.easeOut"
                    }), this.isMouseOver = !1, this.links.forEach((function (t) {
                        t.addEventListener("mouseenter", e.onMouseEnter), t.addEventListener("mousemove", e.onMouseMove), t.addEventListener("mouseleave", e.onMouseLeave), t.addEventListener("mouseover", e.onMouseOver)
                    })), i.d.win.addEventListener("resize", this.onResize, {
                        passive: !0
                    })
                }
            }, {
                key: "remove",
                value: function () {
                    var e = this;
                    u.a.to(this.container, {
                        duration: .5,
                        opacity: 0,
                        ease: "Power4.easeOut"
                    }), this.mouse.x = this.center.x, this.mouse.y = this.center.y, this.clock.stop(), u.a.ticker.remove(this.update), u.a.ticker.remove(this.render), this.links.forEach((function (t) {
                        t.removeEventListener("mouseenter", e.onMouseEnter), t.removeEventListener("mousemove", e.onMouseMove), t.removeEventListener("mouseleave", e.onMouseLeave), t.removeEventListener("mouseover", e.onMouseOver)
                    })), i.d.win.removeEventListener("resize", this.onResize, {
                        passive: !0
                    })
                }
            }, {
                key: "updateSize",
                value: function () {
                    this.center.set(i.d.resolution.x / 2, i.d.resolution.y / 2)
                }
            }, {
                key: "onMouseMove",
                value: function (e) {}
            }, {
                key: "render",
                value: function () {
                    this.renderer.setRenderTarget(this.kaleidoRenderTarget), this.renderer.render(this.rtScene, this.rtCamera), this.renderer.setRenderTarget(null), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "onResize",
                value: function () {
                    this.updateSize();
                    var e = i.d.resolution,
                        t = e.x,
                        n = e.y;
                    this.kaleidoRenderTargetMaterial.uniforms.uMeshSize.value = [t, n], this.kaleidoRenderTarget.setSize(1.923 * n, n), this.fxaaPass.uniforms.uResolution.value = i.d.resolution, this.kaleidoRenderTargetMaterial.uniforms.uResolution.value = new s.o(1.923 * n, n);
                    var o = t / n;
                    this.renderer.setSize(t, n), this.rtCamera.aspect = 1, this.rtCamera.updateProjectionMatrix(), this.camera.aspect = o, this.camera.updateProjectionMatrix()
                }
            }, {
                key: "onMouseEnter",
                value: (a = X(r.a.mark((function e(t) {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                this.mouseOutTimeOut && clearTimeout(this.mouseOutTimeOut), this.mouseOutTimeOut2 && clearTimeout(this.mouseOutTimeOut2), this.isMouseOver || (this.isMouseOver = !0, u.a.to(this.container, {
                                    duration: .5,
                                    opacity: 1,
                                    ease: "Power4.easeOut"
                                }), u.a.to(this.kaleidoRenderTargetGroup.rotation, {
                                    duration: .5,
                                    z: 0,
                                    ease: "Power4.easeOut"
                                }), this.setActiveMonth(this.getMonth(t.target.dataset.month)));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "onMouseOver",
                value: function (e) {
                    this.onMouseEnter(e)
                }
            }, {
                key: "onMouseLeave",
                value: function () {
                    var e = this;
                    this.isMouseOver = !1, this.mouseOutTimeOut = setTimeout((function () {
                        u.a.to(e.container, {
                            duration: .5,
                            opacity: 0,
                            ease: "Power4.easeOut"
                        })
                    }), 100), this.mouseOutTimeOut2 = setTimeout((function () {
                        e.kaleidoRenderTargetGroup.rotation.z = -.2
                    }), 500)
                }
            }, {
                key: "viewSize",
                get: function () {
                    var e = this.camera.position.z,
                        t = this.camera.fov * Math.PI / 180,
                        n = 2 * Math.tan(t / 2) * e;
                    return {
                        width: n * i.d.layout.aspect,
                        height: n,
                        vFov: t
                    }
                }
            }]) && K(t.prototype, n), o && K(t, o), e
        }();

        function Z(e) {
            return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function $(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function ee(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (o, r) {
                    var i = e.apply(t, n);

                    function s(e) {
                        $(i, o, r, s, a, "next", e)
                    }

                    function a(e) {
                        $(i, o, r, s, a, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function te(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function oe(e, t, n) {
            return (oe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ae(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function re(e, t) {
            return (re = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ie(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = ae(e);
                if (t) {
                    var r = ae(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return se(this, n)
            }
        }

        function se(e, t) {
            return !t || "object" !== Z(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ae(e) {
            return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var ce = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && re(e, t)
            }(d, e);
            var t, n, o, a, c, f = ie(d);

            function d() {
                return te(this, d), f.apply(this, arguments)
            }
            return t = d, (n = [{
                key: "init",
                value: (c = ee(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return oe(ae(d.prototype), "init", this).call(this), this.loader = new s.m, l.a.emit("GL_LOADED"), e.next = 5, O()(100);
                            case 5:
                                this.kaleidoscope = new W(this.el), this.kaleidoscope.init(), i.d.isMobile || (this.menu = new Q(Modules.menu.el), this.menu.init());
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return c.apply(this, arguments)
                })
            }, {
                key: "setActiveMonth",
                value: function (e) {
                    this.kaleidoscope.setActiveMonth(this.kaleidoscope.getMonth(e))
                }
            }, {
                key: "menuAdd",
                value: (a = ee(r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, O()(1500);
                            case 2:
                                this.menu.add(), this.kaleidoscope.remove();
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "menuRemove",
                value: function () {
                    this.menu.remove(), this.kaleidoscope.add()
                }
            }, {
                key: "start",
                value: function () {
                    this.kaleidoscope.start()
                }
            }, {
                key: "resume",
                value: function () {
                    this.kaleidoscope.clock.running || this.kaleidoscope.clock.start(), this.kaleidoscope.mouse.active = !0, this.kaleidoscope.rotating = !0
                }
            }, {
                key: "pause",
                value: function () {
                    this.kaleidoscope.clock.stop(), this.kaleidoscope.mouse.active = !1, this.kaleidoscope.rotating = !1
                }
            }, {
                key: "moveDown",
                value: function () {
                    u.a.to(this.kaleidoscope.kaleidoRenderTargetGroup.position, {
                        y: 0,
                        duration: .75,
                        ease: "expo.inOut"
                    })
                }
            }, {
                key: "moveUp",
                value: function () {
                    u.a.fromTo(this.kaleidoscope.kaleidoRenderTargetGroup.position, {
                        y: 0
                    }, {
                        y: 1,
                        duration: .75,
                        ease: "expo.out"
                    })
                }
            }, {
                key: "addEvents",
                value: function () {
                    oe(ae(d.prototype), "addEvents", this).call(this)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    oe(ae(d.prototype), "removeEvents", this).call(this)
                }
            }]) && ne(t.prototype, n), o && ne(t, o), d
        }(i.b);

        function le(e) {
            return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ue(e, t, n, o, r, i, s) {
            try {
                var a = e[i](s),
                    c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(o, r)
        }

        function fe(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function de(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function pe(e, t, n) {
            return (pe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ge(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function he(e, t) {
            return (he = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ve(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, o = ge(e);
                if (t) {
                    var r = ge(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return ye(this, n)
            }
        }

        function ye(e, t) {
            return !t || "object" !== le(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ge(e) {
            return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var me = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && he(e, t)
            }(f, e);
            var t, n, o, s, a, u = ve(f);

            function f() {
                return fe(this, f), u.apply(this, arguments)
            }
            return t = f, (n = [{
                key: "init",
                value: (s = r.a.mark((function e() {
                    return r.a.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (pe(ge(f.prototype), "init", this).call(this), this.pageWrap = this.get(".page-wrap"), this.animateIn = this.animateIn.bind(this), !i.d.loader) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 6, O()(100);
                            case 6:
                                return l.a.emit("LOAD_START"), e.next = 9, O()(1500);
                            case 9:
                                l.a.emit("GL_LOAD"), e.next = 21;
                                break;
                            case 12:
                                if (i.d.loaded) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 15, O()(100);
                            case 15:
                                return l.a.emit("GL_LOAD"), e.next = 18, O()(1e3);
                            case 18:
                                this.animateIn(), i.c.gl.start();
                            case 20:
                                l.a.emit("LOAD_SKIP");
                            case 21:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })), a = function () {
                    var e = this,
                        t = arguments;
                    return new Promise((function (n, o) {
                        var r = s.apply(e, t);

                        function i(e) {
                            ue(r, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            ue(r, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }, function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "addEvents",
                value: function () {
                    pe(ge(f.prototype), "addEvents", this).call(this), l.a.on("GL_LOAD", this.glLoad), l.a.on("PAGE_IN", this.animateIn)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    pe(ge(f.prototype), "removeEvents", this).call(this), l.a.off("GL_LOAD"), l.a.off("PAGE_IN")
                }
            }, {
                key: "glLoad",
                value: function () {
                    null === i.c.gl && (i.c.gl = new ce('[data-chunk="gl"]'), i.c.loaderManager = new c)
                }
            }, {
                key: "animateIn",
                value: function () {
                    this.pageWrap.style.opacity = ""
                }
            }, {
                key: "animateOut",
                value: function () {}
            }]) && de(t.prototype, n), o && de(t, o), f
        }(i.e)
    }
}, [[0, 0, 3]]]);
