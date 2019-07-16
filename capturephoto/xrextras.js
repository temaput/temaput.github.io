! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(r, i, function(n) {
                return e[n]
            }.bind(null, i));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 3)
}([function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map(function(n) {
                var t = function(e, n) {
                    var t = e[1] || "",
                        r = e[3];
                    if (!r) return t;
                    if (n && "function" == typeof btoa) {
                        var i = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                            o = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [t].concat(o).concat([i]).join("\n")
                    }
                    var s;
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media " + n[2] + "{" + t + "}" : t
            }).join("")
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var s = e[i];
                null != s[0] && r[s[0]] || (t && !s[2] ? s[2] = t : t && (s[2] = "(" + s[2] + ") and (" + t + ")"), n.push(s))
            }
        }, n
    }
}, function(e, n, t) {
    var r, i, o = {},
        s = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }),
        a = function(e) {
            var n = {};
            return function(e, t) {
                if ("function" == typeof e) return e();
                if (void 0 === n[e]) {
                    var r = function(e, n) {
                        return n ? n.querySelector(e) : document.querySelector(e)
                    }.call(this, e, t);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    n[e] = r
                }
                return n[e]
            }
        }(),
        l = null,
        d = 0,
        c = [],
        m = t(8);

    function u(e, n) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t],
                i = o[r.id];
            if (i) {
                i.refs++;
                for (var s = 0; s < i.parts.length; s++) i.parts[s](r.parts[s]);
                for (; s < r.parts.length; s++) i.parts.push(w(r.parts[s], n))
            } else {
                var a = [];
                for (s = 0; s < r.parts.length; s++) a.push(w(r.parts[s], n));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function p(e, n) {
        for (var t = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                s = n.base ? o[0] + n.base : o[0],
                a = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[s] ? r[s].parts.push(a) : t.push(r[s] = {
                id: s,
                parts: [a]
            })
        }
        return t
    }

    function h(e, n) {
        var t = a(e.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? t.insertBefore(n, r.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), c.push(n);
        else if ("bottom" === e.insertAt) t.appendChild(n);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = a(e.insertAt.before, t);
            t.insertBefore(n, i)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var n = c.indexOf(e);
        n >= 0 && c.splice(n, 1)
    }

    function g(e) {
        var n = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var r = function() {
                0;
                return t.nc
            }();
            r && (e.attrs.nonce = r)
        }
        return v(n, e.attrs), h(e, n), n
    }

    function v(e, n) {
        Object.keys(n).forEach(function(t) {
            e.setAttribute(t, n[t])
        })
    }

    function w(e, n) {
        var t, r, i, o;
        if (n.transform && e.css) {
            if (!(o = "function" == typeof n.transform ? n.transform(e.css) : n.transform.default(e.css))) return function() {};
            e.css = o
        }
        if (n.singleton) {
            var s = d++;
            t = l || (l = g(n)), r = y.bind(null, t, s, !1), i = y.bind(null, t, s, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function(e) {
            var n = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(n, e.attrs), h(e, n), n
        }(n), r = function(e, n, t) {
            var r = t.css,
                i = t.sourceMap,
                o = void 0 === n.convertToAbsoluteUrls && i;
            (n.convertToAbsoluteUrls || o) && (r = m(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var s = new Blob([r], {
                    type: "text/css"
                }),
                a = e.href;
            e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
        }.bind(null, t, n), i = function() {
            f(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = g(n), r = function(e, n) {
            var t = n.css,
                r = n.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = t;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(t))
            }
        }.bind(null, t), i = function() {
            f(t)
        });
        return r(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    r(e = n)
                } else i()
            }
    }
    e.exports = function(e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = s()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var t = p(e, n);
        return u(t, n),
            function(e) {
                for (var r = [], i = 0; i < t.length; i++) {
                    var s = t[i];
                    (a = o[s.id]).refs--, r.push(a)
                }
                e && u(p(e, n), n);
                for (i = 0; i < r.length; i++) {
                    var a;
                    if (0 === (a = r[i]).refs) {
                        for (var l = 0; l < a.parts.length; l++) a.parts[l]();
                        delete o[a.id]
                    }
                }
            }
    };
    var b, x = (b = [], function(e, n) {
        return b[e] = n, b.filter(Boolean).join("\n")
    });

    function y(e, n, t, r) {
        var i = t ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(n, i);
        else {
            var o = document.createTextNode(i),
                s = e.childNodes;
            s[n] && e.removeChild(s[n]), s.length ? e.insertBefore(o, s[n]) : e.appendChild(o)
        }
    }
}, function(e, n, t) {
    var r = t(7);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, n, t) {
    const r = t(4),
        i = () => {
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent("xrandextrasloaded"))
            }, 1)
        };
    window.XR && "function" == typeof window.XR && (window.nativeXR = window.XR, window.XR = void 0), window.XRExtras = r.XRExtras, setTimeout(() => {
        window.dispatchEvent(new CustomEvent("xrextrasloaded"))
    }, 1), window.XR ? i() : window.addEventListener("xrloaded", i)
}, function(e, n, t) {
    const {
        AFrameFactory: r
    } = t(5), {
        AlmostThereFactory: i
    } = t(6), {
        DebugWebViewsFactory: o
    } = t(12), {
        FullWindowCanvasFactory: s
    } = t(13), {
        LoadingFactory: a
    } = t(14), {
        RuntimeErrorFactory: l
    } = t(18);
    e.exports = {
        XRExtras: {
            AFrame: r(),
            AlmostThere: i(),
            DebugWebViews: o(),
            FullWindowCanvas: s(),
            Loading: a(),
            RuntimeError: l()
        }
    }
}, function(e, n) {
    let t = null;
    const r = () => {
        XR.addCameraPipelineModule(XRExtras.Loading.pipelineModule())
    };
    const i = () => {
            const e = document.getElementsByTagName("a-scene")[0];
            if (!e) return;
            const n = e.attributes;
            Object.keys(n).forEach(e => {
                const t = n.item(e).name;
                if ("xrextras-almost-there" == t) {
                    const t = new RegExp("url:([^;]*)").exec(n.item(e).value);
                    t && window.XRExtras.AlmostThere.configure({
                        url: t[1]
                    }), window.XR ? window.XRExtras.AlmostThere.checkCompatibility() : window.addEventListener("xrloaded", window.XRExtras.AlmostThere.checkCompatibility)
                }
                "xrextras-loading" == t && window.XRExtras.Loading.showLoading({
                    onxrloaded: r
                })
            })
        },
        o = window.onload;
    window.onload = (() => {
        o && o(), window.XRExtras ? i() : window.addEventListener("xrextrasloaded", i)
    }), e.exports = {
        AFrameFactory: () => (t || (t = function() {
            let e = !1;
            const n = () => {
                !e && window.AFRAME && (e = !0, AFRAME.registerComponent("xrextras-almost-there", {
                    schema: {
                        url: {
                            default: ""
                        }
                    },
                    init: function() {
                        const e = () => {
                            this.data.url && XRExtras.AlmostThere.configure({
                                url: this.data.url
                            }), XR.addCameraPipelineModule(XRExtras.AlmostThere.pipelineModule())
                        };
                        window.XRExtras && window.XR ? e() : window.addEventListener("xrandextrasloaded", e)
                    }
                }), AFRAME.registerComponent("xrextras-loading", {
                    init: function() {
                        let e = !1;
                        this.el.addEventListener("loaded", () => {
                            e = !0
                        });
                        const n = () => e,
                            t = () => {
                                XRExtras.Loading.setAppLoadedProvider(n), XRExtras.Loading.showLoading({
                                    onxrloaded: r
                                })
                            };
                        window.XRExtras ? t() : window.addEventListener("xrextrasloaded", t)
                    }
                }), AFRAME.registerComponent("xrextras-runtime-error", {
                    init: function() {
                        const e = () => {
                            XR.addCameraPipelineModule(XRExtras.RuntimeError.pipelineModule())
                        };
                        window.XRExtras && window.XR ? e() : window.addEventListener("xrandextrasloaded", e)
                    }
                }), AFRAME.registerComponent("xrextras-tap-recenter", {
                    init: function() {
                        const e = this.el.sceneEl;
                        e.addEventListener("click", () => {
                            e.emit("recenter", {})
                        })
                    }
                }), AFRAME.registerComponent("xrextras-generate-image-targets", {
                    schema: {
                        primitive: {
                            type: "string"
                        }
                    },
                    init: function() {
                        const e = {},
                            n = n => {
                                const t = e[n.detail.name];
                                t && t.emit(n.type, n.detail, !1)
                            };
                        this.el.sceneEl.addEventListener("xrimageloading", ({
                            detail: n
                        }) => {
                            n.imageTargets.forEach(({
                                name: n,
                                metadata: t,
                                properties: r
                            }) => {
                                const i = document.createElement(this.data.primitive);
                                i.setAttribute("id", `xrextras-imagetargets-${n}`), i.setAttribute("name", n), i.setAttribute("rotated", r.isRotated ? "true" : "false"), i.setAttribute("metadata", "string" == typeof t ? t : JSON.stringify(t)), document.querySelector("a-scene").appendChild(i), e[n] = i
                            })
                        }), this.el.sceneEl.addEventListener("xrimagefound", n), this.el.sceneEl.addEventListener("xrimageupdated", n), this.el.sceneEl.addEventListener("xrimagelost", n)
                    }
                }), AFRAME.registerComponent("xrextras-named-image-target", {
                    schema: {
                        name: {
                            type: "string"
                        }
                    },
                    init: function() {
                        const e = this.el.object3D,
                            n = this.data.name;
                        e.visible = !1;
                        const t = ({
                            detail: t
                        }) => {
                            n == t.name && (e.position.copy(t.position), e.quaternion.copy(t.rotation), e.scale.set(t.scale, t.scale, t.scale), e.visible = !0)
                        };
                        this.el.sceneEl.addEventListener("xrimagefound", t), this.el.sceneEl.addEventListener("xrimageupdated", t), this.el.sceneEl.addEventListener("xrimagelost", ({
                            detail: t
                        }) => {
                            n == t.name && (e.visible = !1)
                        })
                    }
                }), AFRAME.registerComponent("xrextras-gesture-detector", {
                    schema: {
                        element: {
                            default: ""
                        }
                    },
                    init: function() {
                        this.targetElement = this.data.element && document.querySelector(this.data.element), this.targetElement || (this.targetElement = this.el), this.internalState = {
                            previousState: null
                        }, this.emitGestureEvent = this.emitGestureEvent.bind(this), this.targetElement.addEventListener("touchstart", this.emitGestureEvent), this.targetElement.addEventListener("touchend", this.emitGestureEvent), this.targetElement.addEventListener("touchmove", this.emitGestureEvent)
                    },
                    remove: function() {
                        this.targetElement.removeEventListener("touchstart", this.emitGestureEvent), this.targetElement.removeEventListener("touchend", this.emitGestureEvent), this.targetElement.removeEventListener("touchmove", this.emitGestureEvent)
                    },
                    emitGestureEvent(e) {
                        const n = this.getTouchState(e),
                            t = this.internalState.previousState,
                            r = t && n && n.touchCount == t.touchCount,
                            i = t && !r,
                            o = n && !r;
                        if (i) {
                            const e = this.getEventPrefix(t.touchCount) + "fingerend";
                            this.el.emit(e, t), this.internalState.previousState = null
                        }
                        if (o) {
                            n.startTime = performance.now(), n.startPosition = n.position, n.startSpread = n.spread;
                            const e = this.getEventPrefix(n.touchCount) + "fingerstart";
                            this.el.emit(e, n), this.internalState.previousState = n
                        }
                        if (r) {
                            const e = {
                                positionChange: {
                                    x: n.position.x - t.position.x,
                                    y: n.position.y - t.position.y
                                }
                            };
                            n.spread && (e.spreadChange = n.spread - t.spread), Object.assign(t, n), Object.assign(e, t);
                            const r = this.getEventPrefix(n.touchCount) + "fingermove";
                            this.el.emit(r, e)
                        }
                    },
                    getTouchState: function(e) {
                        if (0 == e.touches.length) return null;
                        const n = [];
                        for (let t = 0; t < e.touches.length; t++) n.push(e.touches[t]);
                        const t = {
                                touchCount: n.length
                            },
                            r = n.reduce((e, n) => e + n.clientX, 0) / n.length,
                            i = n.reduce((e, n) => e + n.clientY, 0) / n.length;
                        t.positionRaw = {
                            x: r,
                            y: i
                        };
                        const o = 2 / (window.innerWidth + window.innerHeight);
                        if (t.position = {
                                x: r * o,
                                y: i * o
                            }, n.length >= 2) {
                            const e = n.reduce((e, n) => e + Math.sqrt(Math.pow(r - n.clientX, 2) + Math.pow(i - n.clientY, 2)), 0) / n.length;
                            t.spread = e * o
                        }
                        return t
                    },
                    getEventPrefix: e => ["one", "two", "three", "many"][Math.min(e, 4) - 1]
                }), AFRAME.registerComponent("xrextras-one-finger-rotate", {
                    init: function() {
                        this.handleEvent = this.handleEvent.bind(this), this.el.sceneEl.addEventListener("onefingermove", this.handleEvent), this.el.setAttribute("class", "cantap")
                    },
                    remove: function() {
                        this.el.sceneEl.removeEventListener("onefingermove", this.handleEvent)
                    },
                    handleEvent: function(e) {
                        this.el.object3D.rotation.y += 6 * e.detail.positionChange.x
                    }
                }), AFRAME.registerComponent("xrextras-play-video", {
                    schema: {
                        video: {
                            type: "string"
                        },
                        thumb: {
                            type: "string"
                        },
                        canstop: {
                            type: "bool"
                        }
                    },
                    init: function() {
                        const e = document.querySelector(this.data.video),
                            n = this.data.thumb && document.querySelector(this.data.thumb),
                            t = this.el;
                        t.setAttribute("material", "src", n || e), t.setAttribute("class", "cantap");
                        let r = !1;
                        t.addEventListener("click", () => {
                            r ? this.data.canstop && (t.setAttribute("material", "src", n || e), e.pause(), r = !1) : (t.setAttribute("material", "src", e), e.play(), r = !0)
                        })
                    }
                }), AFRAME.registerComponent("xrextras-log-to-screen", {
                    init: function() {
                        XRExtras.DebugWebViews.enableLogToScreen()
                    }
                }))
            };
            return n(), {
                registerXrExtrasComponents: n
            }
        }()), t)
    }
}, function(e, n, t) {
    t(2), t(9);
    const r = t(11);
    let i = null;
    e.exports = {
        AlmostThereFactory: () => (i || (i = function() {
            let e, n = !1;
            const t = e => {
                    document.getElementById(e).classList.remove("hidden")
                },
                i = () => !(n || !XR.XrDevice.isDeviceBrowserCompatible() && ((() => {
                    const n = document.createElement("template");
                    n.innerHTML = r.trim();
                    const i = n.content.firstChild;
                    document.getElementsByTagName("body")[0].appendChild(i);
                    const o = e || window.location.href,
                        s = i.querySelectorAll(".desktop-home-link");
                    for (let e = 0; e < s.length; e++) s[e].textContent = o;
                    const a = XR.XrDevice.incompatibleReasons(),
                        l = XR.XrDevice.incompatibleReasonDetails(),
                        d = XR.XrDevice.deviceEstimate();
                    for (let e of a) switch (e) {
                        case XR.XrDevice.IncompatibilityReasons.UNSUPPORTED_BROWSER:
                            if ("iOS" == d.os) {
                                if ("Safari" == l.inAppBrowserType) return t("error_msg_open_in_safari"), void t("apple_open_safari_hint");
                                if ("Ellipsis" == l.inAppBrowserType) return t("error_msg_open_in_safari"), void t("apple_tap_to_open_safari_hint")
                            }
                            case XR.XrDevice.IncompatibilityReasons.MISSING_WEB_ASSEMBLY:
                                if ("iOS" == d.os) return void t("error_msg_web_assembly_ios");
                                if ("Android" == d.os) return void t("error_msg_web_assembly_android")
                    }
                    if ("iOS" == d.os) return void t("error_msg_apple_almost_there");
                    if ("Android" == d.os) return void t("error_msg_android_almost_there");
                    t("error_msg_device");
                    const c = document.createElement("script");
                    c.type = "text/javascript", c.src = "https://cdn.8thwall.com/web/share/qrcode8.js", c.onload = (() => {
                        document.getElementById("qrcode").innerHTML = qrcode8.generateQRHtml(o)
                    }), document.getElementById("almostthereContainer").appendChild(c)
                })(), n = !0, XR.pause(), XR.stop(), 1));
            return {
                pipelineModule: () => ({
                    name: "almostthere",
                    onCameraStatusChange: () => {
                        if (!i()) throw Error("Device or browser incompatible with XR.")
                    },
                    onException: () => {
                        i()
                    }
                }),
                checkCompatibility: i,
                configure: ({
                    url: n
                }) => {
                    void 0 !== n && (e = n)
                }
            }
        }()), i)
    }
}, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "@font-face {\n  font-family: 'Raleway-Regular';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Raleway-Bold';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-bold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-bold.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Varela-Round';\n  src: url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n", ""])
}, function(e, n) {
    e.exports = function(e) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var t = n.protocol + "//" + n.host,
            r = t + n.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, n) {
            var i, o = n.trim().replace(/^"(.*)"$/, function(e, n) {
                return n
            }).replace(/^'(.*)'$/, function(e, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? t + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(e, n, t) {
    var r = t(10);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#almostthereContainer {\n  z-index: 820;\n  background-color: #FFFFFF;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.apple-safari-hint {\n  position: fixed;\n  bottom: 3%;\n  right: 8%;\n  height: 72px;\n}\n\n.desktop-home-link {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color:rgba(173, 80, 255, 0.2);\n  -webkit-user-select: all;  /* Chrome 49+ */\n  -moz-user-select: all;     /* Firefox 43+ */\n  -ms-user-select: all;      /* No support yet */\n  user-select: all;\n  pointer-events: auto;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-margin-top-20 {\n  margin-top: 20vh;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 90%;\n}\n\n.error-text-header {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 18pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-detail {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 14pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-hint {\n  font-family: 'Raleway-Regular', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n", ""])
}, function(e, n) {
    e.exports = '<div id="almostthereContainer" class="absolute-fill">\n  \x3c!--Not on mobile --\x3e\n  <div id="error_msg_device" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-20">\n        <div id="qrcode"></div>\n        <br/>\n        <div class="error-text-header">\n          <span style="font-size:24pt;line-height:20pt;">\n            Hey! Looks like you\'re on a desktop.\n          </span>\n        </div>\n        <div class="error-text-hint">\n          <span style="font-size:15pt;line-height:50pt;letter-spacing:-.21;color:#323232">\n            For the augmented reality experience, scan this code\n          </span>\n        </div>\n        <div class="error-text-hint">\n          <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21;color:#323232">\n            or visit <span class="desktop-home-link"></span>\n            on a smartphone or tablet.\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, reachable from button press --\x3e\n  <div id="error_msg_open_in_safari" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your iPhone, please open in Safari.\n        </div>\n        <br/>\n        <img id="apple_open_safari_hint"\n          src="//cdn.8thwall.com/web/img/almostthere/v1/open-in-safari.png"\n          class="apple-safari-hint hidden"/>\n        <img id="apple_tap_to_open_safari_hint"\n          src="//cdn.8thwall.com/web/img/almostthere/v1/tap-to-open-in-safari.png"\n          class="apple-safari-hint hidden"/>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, requires copy/paste of link --\x3e\n  <div id="error_msg_apple_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your iPhone, please open in Safari.\n        </div>\n        <br/>\n        <p><span class="desktop-home-link"></span></p>\n        <div id="apple_copy_hint" class="error-text-hint">\n          Open your Safari browser and paste.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Missing Web Assembly, or iOS 11.2 (which has a WebAssembly regression)--\x3e\n  <div id="error_msg_web_assembly_ios" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your iPhone, please update to a newer version of iOS.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="error_msg_web_assembly_android" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          Browser doesn\'t support WebAssembly. Please update your browser.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Android unsupported browser --\x3e\n  <div id="error_msg_android_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="100px" src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your Android device, please open in Google Chrome or your\n          native browser.\n        </div>\n        <br/>\n        <p><span class="desktop-home-link"></span></p>\n        <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}, function(e, n) {
    let t = null;
    e.exports = {
        DebugWebViewsFactory: () => (t || (t = function() {
            let e = "";
            const n = window.console.log;
            return {
                enableLogToScreen: () => {
                    const t = t => {
                        n(t), e = e + "* " + t + "<br>";
                        let r = document.getElementById("logdiv");
                        if (!r) {
                            const e = document.getElementsByTagName("body")[0];
                            if (!e) return;
                            r = document.createElement("div"), e.appendChild(r), r.style.zIndex = 850, r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.backgroundColor = "#FFFFFF", r.id = "logdiv"
                        }
                        r.innerHTML = "<pre>" + e + "</pre>"
                    };
                    window.console.log = t, window.console.error = (e => {
                        t(`<font color=red>${e}</font>`)
                    }), window.console.warn = (e => {
                        t(`<font color=orange>${e}</font>`)
                    })
                }
            }
        }()), t)
    }
}, function(e, n) {
    let t = null;
    e.exports = {
        FullWindowCanvasFactory: () => (null == t && (t = function() {
            let e = null;
            const n = ({
                    orientation: t
                }) => {
                    const r = window.innerWidth,
                        i = window.innerHeight;
                    (0 == t || 180 == t) && r > i || (90 == t || -90 == t) && i > r ? window.requestAnimationFrame(() => n({
                        orientation: t
                    })) : (e.width = r, e.height = i)
                },
                t = ({
                    canvas: t,
                    orientation: r
                }) => {
                    e = t;
                    const i = document.getElementsByTagName("body")[0];
                    i.style.margin = "0px", i.style.width = "100%", i.style.height = "100%", i.appendChild(e), n({
                        orientation: r
                    })
                },
                r = ({
                    orientation: e
                }) => {
                    n({
                        orientation: e
                    })
                };
            return {
                pipelineModule: () => ({
                    name: "fullwindowcanvas",
                    onStart: t,
                    onDeviceOrientationChange: r
                })
            }
        }()), t)
    }
}, function(e, n, t) {
    t(2), t(15);
    const r = t(17);
    let i = null;
    e.exports = {
        LoadingFactory: () => (i || (i = function() {
            let e, n, t, i, o, s, a, l = null,
                d = () => !0,
                c = 0,
                m = !1,
                u = !1;
            const p = navigator.userAgent;
            let h = !1;
            const f = () => {
                h = !0, window.removeEventListener("devicemotion", f)
            };
            window.addEventListener("devicemotion", f);
            const g = e => {
                (e.data.deviceOrientation8w || e.data.deviceMotion8w) && (h = !0, window.removeEventListener("message", g))
            };
            window.addEventListener("message", g);
            const v = (n = !0) => {
                    e.classList.add("hidden"), n && l.parentNode && l.parentNode.removeChild(l)
                },
                w = (t = !0) => {
                    n.classList.add("fade-out"), setTimeout(() => {
                        e.classList.add("fade-out"), e.style.pointerEvents = "none", setTimeout(() => v(t), 400)
                    }, 400)
                },
                b = () => {
                    t.classList.add("fade-out")
                },
                x = () => {
                    if (window.removeEventListener("devicemotion", f), window.removeEventListener("message", g), "iOS" === XR.XrDevice.deviceEstimate().os) {
                        if (XR.XrPermissions) {
                            const e = XR.XrPermissions.permissions(),
                                n = XR.requiredPermissions();
                            if (!n.has(e.DEVICE_MOTION) && !n.has(e.DEVICE_ORIENTATION)) return
                        }
                        XR.XrDevice.deviceEstimate().osVersion.startsWith("12") ? a.classList.remove("hidden") : motionPermissionsErrorApple_.classList.remove("hidden"), w(!1), XR.pause(), XR.stop()
                    }
                },
                y = () => {
                    if (d() && !m) return u && (document.cookie = "previouslyGotCameraPermission=true;max-age=31536000"), void w();
                    requestAnimationFrame(() => {
                        y()
                    })
                },
                E = p.includes("Linux");
            u = E && !document.cookie.includes("previouslyGotCameraPermission=true");
            const R = E && !u,
                A = d => {
                    if (l) return;
                    const c = document.createElement("template");
                    c.innerHTML = r.trim();
                    const u = c.content.firstChild;
                    document.getElementsByTagName("body")[0].appendChild(u), (r => {
                        e = (l = r).querySelector("#loadBackground"), n = l.querySelector("#loadImageContainer"), t = document.getElementById("requestingCameraPermissions"), i = document.getElementById("cameraPermissionsErrorAndroid"), o = document.getElementById("cameraPermissionsErrorApple"), s = document.getElementById("cameraPermissionsErrorSamsung"), a = document.getElementById("deviceMotionErrorApple"), userPromptError_ = document.getElementById("userPromptError"), motionPermissionsErrorApple_ = document.getElementById("motionPermissionsErrorApple")
                    })(u), m = !0, d && d.onxrloaded && (window.XR ? d.onxrloaded() : window.addEventListener("xrloaded", d.onxrloaded))
                };
            return {
                pipelineModule: () => ({
                    name: "loading",
                    onStart: () => {
                        !0 !== h && x()
                    },
                    onUpdate: () => {
                        m && (c < 5 ? ++c : (m = !1, y()))
                    },
                    onBeforeRun: () => {
                        A()
                    },
                    onCameraStatusChange: ({
                        status: e
                    }) => {
                        XR.XrDevice.isDeviceBrowserCompatible() && ("requesting" == e ? (A(), R || t.classList.remove("hidden")) : "hasStream" == e ? R || b() : "hasVideo" == e || "failed" == e && (() => {
                            if (t.classList.add("hidden"), p.includes("Linux")) {
                                let e;
                                const n = l.querySelectorAll(".domain-view");
                                for (let e = 0; e < n.length; e++) n[e].textContent = window.location.hostname;
                                e = navigator.userAgent.includes("SamsungBrowser") ? l.querySelectorAll(".samsung-instruction") : l.querySelectorAll(".chrome-instruction"), i.classList.remove("hidden");
                                for (let n = 0; n < e.length; n++) e[n].classList.remove("hidden")
                            } else o.classList.remove("hidden");
                            w(!1), XR.pause(), XR.stop()
                        })())
                    },
                    onException: e => {
                        if (l) {
                            if (e instanceof Object && "permission" === e.type) {
                                if ("prompt" === e.permission) return w(!1), void userPromptError_.classList.remove("hidden");
                                if (e.permission === XR8.XrPermissions.permissions().DEVICE_MOTION || e.permission === XR8.XrPermissions.permissions().DEVICE_ORIENTATION) return void x()
                            }
                            b(), v()
                        }
                    }
                }),
                showLoading: A,
                setAppLoadedProvider: e => {
                    d = e
                }
            }
        }()), i)
    }
}, function(e, n, t) {
    var r = t(16);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "#loadingContainer * {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#loadingContainer {\n  z-index: 800;\n  font-family: 'Varela-Round', sans-serif;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n#loadBackground {\n  z-index: 10;\n  background-color: white;\n  pointer-events: auto;\n}\n\n#requestingCameraPermissions {\n  z-index: 11;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: white;\n  font-size: 3.7vh;\n  background-color: #000000;\n  padding: 3vh 0;\n}\n\n#requestingCameraIcon {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n  height: 7vh;\n}\n\n#loadImage {\n  position: absolute;\n  margin-top: -2.5em;\n  margin-left: -2.5em;\n  top: 50%;\n  left: 50%;\n  height: 5em;\n  width: 5em;\n  transform: translate(-50%, -50%);\n}\n\n#cameraPermissionsErrorApple {\n  padding: 20vh 5vw;\n  font-size: 6.5vmin;\n  text-align: center;\n  background-color: white;\n}\n\n#cameraPermissionsErrorAppleArrow {\n  position: absolute;\n  right: 5vmin;\n  top: 15vmin;\n  width: 20vmin;\n  transform: rotate(130deg);\n}\n\n#cameraPermissionsErrorAppleReloadCamera {\n  display: block;\n  margin: 0 auto;\n  margin-top: 10vh;\n  max-width: 30vw;\n}\n\n#cameraPermissionsErrorAndroid {\n  padding: 2vh 0;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: white;\n}\n\n#deviceMotionErrorApple {\n  padding: 3vh 2vh;\n  color: #2D2E43;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: white;\n}\n\n.permission-error {\n  padding: 3vh 5vh;\n  font-size: 3.5vh;\n  background-color: white;\n}\n\n.permission-error > h1 {\n  font-size: 1.3em;\n}\n\n.main-button {\n  border: none;\n  outline: none;\n  background-color: #7611B7;\n  color: white;\n  font-size: 2.5vh;\n  display: block;\n  margin-top: 2em;\n  padding: 0.5em 1em;\n  border-radius: 0.5em;\n}\n\n#cameraPermissionsCameraIcon{\n  overflow: hidden;\n  flex: 0 0 auto;\n  margin-bottom: 2vh;\n}\n\n#cameraPermissionsCameraIcon img {\n  display: block;\n  margin: 0 auto;\n  height: 5vh;\n}\n\n.loading-error-header {\n  font-size: 3.5vh;\n  flex: 0 0 auto;\n}\n\n.loading-error-footer {\n  font-size: 3vh;\n  line-height: 5.5vh;\n  flex: 0 0 auto;\n  text-align: center;\n  width: 80vmin\n}\n\n.loading-error-footer img {\n  display: block;\n  height: 5vh;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n}\n\n.loading-error-instructions {\n  font-family: 'Raleway-Regular', sans-serif;\n  color: #2D2E43;\n  font-size: 2.5vh;\n  list-style: none;\n  margin-left: 1em;\n  counter-reset: line;\n  flex: 0 0 auto;\n}\n\n.loading-error-instructions > li {\n  position: relative;\n  margin-bottom: 5vh;\n}\n\n.loading-error-instructions > li > img {\n  max-height: 3vh;\n  vertical-align: middle;\n  margin: 0 .5vh;\n}\n\n.loading-error-instructions > li:before {\n  font-family: 'Varela-Round', sans-serif;\n  position: absolute;\n  width: 6vh;\n  height: 6vh;\n  border-radius: 3vh;\n  color: #fff;\n  background-color: rgba(218, 209, 228, 128);\n  text-align:center;\n  left: -8vh;\n  top: -1vh;\n  font-size: 2.5vh;\n  line-height: 6.5vh;\n  counter-increment: line;\n  content: counter(line);\n}\n\n.highlight {\n  color: #7611B7;\n  font-family: 'Raleway-Bold', sans-serif;\n  font-weight: bold;\n}\n\n.camera-instruction-block {\n  display: inline-block;\n  background-color: #EBEBEB;\n  padding: 1vh;\n}\n\n.camera-instruction-button {\n  display: inline-block;\n  background-color: #EBEBEB;\n  padding: 1vh;\n  background-color: #359AFF;\n  color: white;\n  font-size: 2vh;\n  box-shadow: 0 .125vh .25vh rgba(0, 0, 0, 0.5);\n}\n\n.rotate-center {animation: rotate-center 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;}\n@keyframes rotate-center {\n  0% {transform: rotate(0);}\n  100% {transform: rotate(360deg);}\n}\n\n.fade-out { animation: fade-out 0.3s linear forwards; }\n@keyframes fade-out {\n  0% {opacity: 1;}\n  100% {opacity: 0;}\n}\n\n", ""])
}, function(e, n) {
    e.exports = '<div id="loadingContainer" class="absolute-fill">\n  \x3c!--Loading screen--\x3e\n  <div id="loadBackground" class="absolute-fill">\n    <div id="loadImageContainer" class="absolute-fill">\n      <img src="//rt360.pwrg.ru/temp/logo_511b.png" id="loadImage" class="rotate-center" />\n    </div>\n  </div>\n\n  \x3c!--Camera Permissions--\x3e\n  <div id="requestingCameraPermissions" class="hidden" />\n    <img id="requestingCameraIcon" src="camera.png" />\n    Tap "Allow" so PWRG can<br>augment your reality.\n  </div>\n\n  \x3c!--Permission error, iOS--\x3e\n  <div id="cameraPermissionsErrorApple" class="absolute-fill hidden" />\n    Refresh the page to enable<br>your camera for AR\n    <img id="cameraPermissionsErrorAppleArrow" src="//cdn.8thwall.com/web/img/loading/v1/arrow.png" />\n    <img id="cameraPermissionsErrorAppleReloadCamera" src="//cdn.8thwall.com/web/img/loading/v1/reload-camera.png" />\n  </div>\n\n  \x3c!--Permission error, Android--\x3e\n  <div id="cameraPermissionsErrorAndroid" class="absolute-fill hidden">\n    <div id="cameraPermissionsCameraIcon">\n      <img src="camera.png" />\n    </div>\n    <div class="loading-error-header">Let\'s enable your camera</div>\n    <ol class="loading-error-instructions">\n      <li>Tap the <img src="//cdn.8thwall.com/web/img/loading/v1/ellipsis.png"> in the top right</li>\n      <li>Tap <span class="highlight">Settings</li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Site settings</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Camera</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Blocked</span>\n        <br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="camera-instruction-button">CLEAR & RESET</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Advanced</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Manage website data</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        Press and hold<br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight" style="color: #1500ba">DELETE</span>\n      </li>\n    </ol>\n    <div class="loading-error-footer">\n      <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png" />\n      Then, reload the page to experience some AR magic!\n    </div>\n  </div>\n\n    \x3c!--iOS devicemotion sensor is disabled --\x3e\n  <div id="deviceMotionErrorApple" class="absolute-fill hidden">\n    <div class="loading-error-header">Let\'s enable your motion sensors</div>\n    <ol class="loading-error-instructions">\n      <li>Open <img src="https://cdn.8thwall.com/web/img/loading/v1/settings-icon-ios.png" style="max-height: 4vh"><b>Settings</b></li>\n      <li>Select <img src="https://cdn.8thwall.com/web/img/loading/v1/safari-icon.png" style="max-height: 4vh"><b>Safari</b></li>\n      <li>Enable <span class="highlight">Motion&nbsp;&amp;&nbsp;Orientation Access</span></li>\n      <li>Reload the page <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png"></li>\n    </ol>\n    \x3c!-- Empty footer to take up space --\x3e\n    <div class="loading-error-footer"></div>\n  </div>\n\n  <div id="userPromptError" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You need to accept permissions to continue.</p>\n    <button id="reloadButton" class="main-button" onClick="window.location.reload()">Refresh</button>\n  </div>\n\n  <div id="motionPermissionsErrorApple" class="permission-error absolute-fill hidden">\n    <h1>Permissions were denied.</h1>\n    <p>You\'ve prevented the page from accessing your motion sensors.</p>\n    <p>Please close out of Safari to reenable your motion sensors.</p>\n  </div>\n</div>\n'
}, function(e, n, t) {
    t(2), t(19);
    const r = t(21);
    let i = null;
    const o = () => {
        let e = !1;
        return {
            pipelineModule: () => ({
                name: "error",
                onStart: () => {
                    e = !0
                },
                onException: n => {
                    if (!e) return;
                    if (document.getElementById("error_msg_unknown")) return;
                    console.log("[RuntimeError] XR caught an error; stopping:"), console.log(n);
                    const t = document.createElement("template");
                    t.innerHTML = r.trim(), document.getElementsByTagName("body")[0].appendChild(t.content.firstChild), document.getElementById("error_msg_unknown").classList.remove("hidden"), XR.pause(), XR.stop()
                }
            })
        }
    };
    e.exports = {
        RuntimeErrorFactory: () => (i || (i = o()), i)
    }
}, function(e, n, t) {
    var r = t(20);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, n, t) {
    (e.exports = t(0)(!1)).push([e.i, "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#runtimeErrorContainer {\n  z-index: 800;\n  background-color: #FFFFFF;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 90%;\n}\n\n.error-text-header {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 18pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-hint {\n  font-family: 'Raleway-Regular', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n\n.floater {\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\n}\n", ""])
}, function(e, n) {
    e.exports = '<div id="runtimeErrorContainer" class="absolute-fill">\n  <div id="error_msg_unknown" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n        <div class="error-text-header">Oops, something went wrong!</div>\n        <div class="error-text-hint">\n          <p id="error_unknown_detail" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}]);