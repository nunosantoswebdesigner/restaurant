! function r(t, s, n) {
    function l(i, e) {
        if (!s[i]) {
            if (!t[i]) {
                var o = "function" == typeof require && require;
                if (!e && o) return o(i, !0);
                if (d) return d(i, !0);
                throw new Error("Cannot find module '" + i + "'")
            }
            var a = s[i] = {
                exports: {}
            };
            t[i][0].call(a.exports, function (e) {
                var o = t[i][1][e];
                return l(o || e)
            }, a, a.exports, r, t, s, n)
        }
        return s[i].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < n.length; e++) l(n[e]);
    return l
}({
    1: [function (e, o, i) {
        o.exports = function e(o) {
            if (arguments.length < 1 || "object" != typeof o) return !1;
            if (arguments.length < 2) return o;
            for (var i = o, a = 1; a < arguments.length; a++) {
                var r = arguments[a];
                for (var t in r) {
                    var s = i[t],
                        n = r[t];
                    i[t] = "object" != typeof n || null === n ? n : e("object" != typeof s || null === s ? {} : s, n)
                }
            }
            return i
        }
    }, {}],
    2: [function (e, o, i) {
        var T = e("ua-parser-js"),
            z = e("./languages.json"),
            C = e("./extend"),
            j = {
                Chrome: 57,
                Edge: 39,
                Safari: 10,
                "Mobile Safari": 10,
                Opera: 50,
                Firefox: 50,
                Vivaldi: 1,
                IE: !1
            },
            E = {
                12: .1,
                13: 21,
                14: 31,
                15: 39,
                16: 41,
                17: 42,
                18: 44
            },
            D = "#f25648",
            B = "white";
        o.exports = function (x) {
            function e() {
                var s = new T(window.navigator.userAgent).getResult(),
                    o = document.getElementById("outdated");
                x = x || {};
                var e, i = window.navigator.language || window.navigator.userLanguage,
                    n = x.browserSupport ? function (e, o) {
                        for (var i in o) e[i] = o[i];
                        return e
                    }(j, x.browserSupport) : j,
                    a = x.requiredCssProperty || !1,
                    r = x.backgroundColor || D,
                    t = x.textColor || B,
                    l = x.fullscreen || !1,
                    d = x.language || i.slice(0, 2),
                    u = "web",
                    p = "Android" === s.os.name;

                function c(e) {
                    ! function (e) {
                        o.style.opacity = e / 100, o.style.filter = "alpha(opacity=" + e + ")"
                    }(e), 1 === e && (o.style.display = "table"), 100 === e && (P = !0)
                }

                function w() {
                    var e = s.browser.name,
                        o = !1;
                    return e in n ? n[e] || (o = !0) : x.isUnknownBrowserOK || (o = !0), o
                }

                function m(e) {
                    return function () {
                        c(e)
                    }
                }
                p && (u = "googlePlay"), x.requireChromeOnAndroid && (e = p && "Chrome" !== s.browser.name), "iOS" === s.os.name && (u = "appStore");
                var g, b, f, h, v, y, S, k, P = !0;
                if (function () {
                        var e = s.browser.name,
                            o = s.browser.major;
                        "Edge" === e && (o = E[o]);
                        var i = !1;
                        if (w()) i = !0;
                        else if (e in n) {
                            var a = n[e];
                            if ("object" == typeof a) {
                                var r = a.major,
                                    t = a.minor;
                                if (o < r) i = !0;
                                else if (o == r) {
                                    (function (e) {
                                        return e.replace(/[^\d.]/g, "").split(".")[1]
                                    })(s.browser.version) < t && (i = !0)
                                }
                            } else o < a && (i = !0)
                        }
                        return i
                    }() || ! function (e) {
                        if (!e) return !0;
                        var o = document.createElement("div"),
                            i = ["khtml", "ms", "o", "moz", "webkit"],
                            a = i.length;
                        if (e in o.style) return !0;
                        for (e = e.replace(/^[a-z]/, function (e) {
                                return e.toUpperCase()
                            }); a--;) {
                            if (i[a] + e in o.style) return !0
                        }
                        return !1
                    }(a) || e) {
                    if (P && "1" !== o.style.opacity) {
                        P = !1;
                        for (var A = 1; A <= 100; A++) setTimeout(m(A), 8 * A)
                    }
                    var O = document.getElementById("outdated");
                    l && O.classList.add("fullscreen"), O.innerHTML = (h = z[f = d] || z.en, v = x.messages && x.messages[f], y = C({}, h, v), S = {
                        web: "<p>" + y.update.web + '<a id="buttonUpdateBrowser" rel="nofollow" href="' + y.url + '">' + y.callToAction + "</a></p>",
                        googlePlay: "<p>" + y.update.googlePlay + '<a id="buttonUpdateBrowser" rel="nofollow" href="https://play.google.com/store/apps/details?id=com.android.chrome">' + y.callToAction + "</a></p>",
                        appStore: "<p>" + y.update[u] + "</p>"
                    } [u], k = y.outOfDate, w() && y.unsupported && (k = y.unsupported), '<div class="vertical-center"><h6>' + k + "</h6>" + S + '<p class="last"><a href="#" id="buttonCloseUpdateBrowser" title="' + y.close + '">&times;</a></p></div>'), g = document.getElementById("buttonCloseUpdateBrowser"), b = document.getElementById("buttonUpdateBrowser"), o.style.backgroundColor = r, o.style.color = t, o.children[0].children[0].style.color = t, o.children[0].children[1].style.color = t, b && (b.style.color = t, b.style.borderColor && (b.style.borderColor = t), b.onmouseover = function () {
                        this.style.color = r, this.style.backgroundColor = t
                    }, b.onmouseout = function () {
                        this.style.color = t, this.style.backgroundColor = r
                    }), g.style.color = t, g.onmousedown = function () {
                        return !(o.style.display = "none")
                    }
                }
            }
            var o = window.onload;
            "function" != typeof window.onload ? window.onload = e : window.onload = function () {
                o && o(), e()
            }
        }
    }, {
        "./extend": 1,
        "./languages.json": 3,
        "ua-parser-js": 4
    }],
    3: [function (e, o, i) {
        o.exports = {
            br: {
                outOfDate: "O seu navegador est&aacute; desatualizado!",
                update: {
                    web: "Atualize o seu navegador para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/br",
                callToAction: "Atualize o seu navegador agora",
                close: "Fechar"
            },
            ca: {
                outOfDate: "El vostre navegador no està actualitzat!",
                update: {
                    web: "Actualitzeu el vostre navegador per veure correctament aquest lloc web. ",
                    googlePlay: "Instal·leu Chrome des de Google Play",
                    appStore: "Actualitzeu iOS des de l'aplicació Configuració"
                },
                url: "http://outdatedbrowser.com/es",
                callToAction: "Actualitzar el meu navegador ara",
                close: "Tancar"
            },
            cn: {
                outOfDate: "您的浏览器已过时",
                update: {
                    web: "要正常浏览本网站请升级您的浏览器。",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/cn",
                callToAction: "现在升级",
                close: "关闭"
            },
            cz: {
                outOfDate: "Váš prohlížeč je zastaralý!",
                update: {
                    web: "Pro správné zobrazení těchto stránek aktualizujte svůj prohlížeč. ",
                    googlePlay: "Nainstalujte si Chrome z Google Play",
                    appStore: "Aktualizujte si systém iOS"
                },
                url: "http://outdatedbrowser.com/cz",
                callToAction: "Aktualizovat nyní svůj prohlížeč",
                close: "Zavřít"
            },
            da: {
                outOfDate: "Din browser er forældet!",
                update: {
                    web: "Opdatér din browser for at få vist denne hjemmeside korrekt. ",
                    googlePlay: "Installér venligst Chrome fra Google Play",
                    appStore: "Opdatér venligst iOS"
                },
                url: "http://outdatedbrowser.com/da",
                callToAction: "Opdatér din browser nu",
                close: "Luk"
            },
            de: {
                outOfDate: "Ihr Browser ist veraltet!",
                update: {
                    web: "Bitte aktualisieren Sie Ihren Browser, um diese Website korrekt darzustellen. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/de",
                callToAction: "Den Browser jetzt aktualisieren ",
                close: "Schließen"
            },
            ee: {
                outOfDate: "Sinu veebilehitseja on vananenud!",
                update: {
                    web: "Palun uuenda oma veebilehitsejat, et näha lehekülge korrektselt. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/ee",
                callToAction: "Uuenda oma veebilehitsejat kohe",
                close: "Sulge"
            },
            en: {
                outOfDate: "Your browser is out-of-date!",
                update: {
                    web: "Update your browser to view this website correctly. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "Update my browser now",
                close: "Close"
            },
            es: {
                outOfDate: "¡Tu navegador está anticuado!",
                update: {
                    web: "Actualiza tu navegador para ver esta página correctamente. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/es",
                callToAction: "Actualizar mi navegador ahora",
                close: "Cerrar"
            },
            fa: {
                rightToLeft: !0,
                outOfDate: "مرورگر شما منسوخ شده است!",
                update: {
                    web: "جهت مشاهده صحیح این وبسایت، مرورگرتان را بروز رسانی نمایید. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "همین حالا مرورگرم را بروز کن",
                close: "Close"
            },
            fi: {
                outOfDate: "Selaimesi on vanhentunut!",
                update: {
                    web: "Lataa ajantasainen selain n&auml;hd&auml;ksesi t&auml;m&auml;n sivun oikein. ",
                    googlePlay: "Asenna uusin Chrome Google Play -kaupasta",
                    appStore: "Päivitä iOS puhelimesi asetuksista"
                },
                url: "http://outdatedbrowser.com/fi",
                callToAction: "P&auml;ivit&auml; selaimeni nyt ",
                close: "Sulje"
            },
            fr: {
                outOfDate: "Votre navigateur n'est plus compatible !",
                update: {
                    web: "Mettez à jour votre navigateur pour afficher correctement ce site Web. ",
                    googlePlay: "Merci d'installer Chrome depuis le Google Play Store",
                    appStore: "Merci de mettre à jour iOS depuis l'application Réglages"
                },
                url: "http://outdatedbrowser.com/fr",
                callToAction: "Mettre à jour maintenant ",
                close: "Fermer"
            },
            hu: {
                outOfDate: "A böngészője elavult!",
                update: {
                    web: "Firssítse vagy cserélje le a böngészőjét. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/hu",
                callToAction: "A böngészőm frissítése ",
                close: "Close"
            },
            id: {
                outOfDate: "Browser yang Anda gunakan sudah ketinggalan zaman!",
                update: {
                    web: "Perbaharuilah browser Anda agar bisa menjelajahi website ini dengan nyaman. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "Perbaharui browser sekarang ",
                close: "Close"
            },
            it: {
                outOfDate: "Il tuo browser non &egrave; aggiornato!",
                update: {
                    web: "Aggiornalo per vedere questo sito correttamente. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/it",
                callToAction: "Aggiorna ora",
                close: "Chiudi"
            },
            lt: {
                outOfDate: "Jūsų naršyklės versija yra pasenusi!",
                update: {
                    web: "Atnaujinkite savo naršyklę, kad galėtumėte peržiūrėti šią svetainę tinkamai. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "Atnaujinti naršyklę ",
                close: "Close"
            },
            nl: {
                outOfDate: "Je gebruikt een oude browser!",
                update: {
                    web: "Update je browser om deze website correct te bekijken. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/nl",
                callToAction: "Update mijn browser nu ",
                close: "Sluiten"
            },
            pl: {
                outOfDate: "Twoja przeglądarka jest przestarzała!",
                update: {
                    web: "Zaktualizuj swoją przeglądarkę, aby poprawnie wyświetlić tę stronę. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/pl",
                callToAction: "Zaktualizuj przeglądarkę już teraz",
                close: "Close"
            },
            pt: {
                outOfDate: "O seu browser est&aacute; desatualizado!",
                update: {
                    web: "Atualize o seu browser para ter uma melhor experi&ecirc;ncia e visualiza&ccedil;&atilde;o deste site. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/pt",
                callToAction: "Atualize o seu browser agora",
                close: "Fechar"
            },
            ro: {
                outOfDate: "Browserul este învechit!",
                update: {
                    web: "Actualizați browserul pentru a vizualiza corect acest site. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "Actualizați browserul acum!",
                close: "Close"
            },
            ru: {
                outOfDate: "Ваш браузер устарел!",
                update: {
                    web: "Обновите ваш браузер для правильного отображения этого сайта. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/ru",
                callToAction: "Обновить мой браузер ",
                close: "Закрыть"
            },
            si: {
                outOfDate: "Vaš brskalnik je zastarel!",
                update: {
                    web: "Za pravilen prikaz spletne strani posodobite vaš brskalnik. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/si",
                callToAction: "Posodobi brskalnik ",
                close: "Zapri"
            },
            sv: {
                outOfDate: "Din webbläsare stödjs ej längre!",
                update: {
                    web: "Uppdatera din webbläsare för att webbplatsen ska visas korrekt. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/",
                callToAction: "Uppdatera min webbläsare nu",
                close: "Stäng"
            },
            ua: {
                outOfDate: "Ваш браузер застарів!",
                update: {
                    web: "Оновіть ваш браузер для правильного відображення цього сайта. ",
                    googlePlay: "Please install Chrome from Google Play",
                    appStore: "Please update iOS from the Settings App"
                },
                url: "http://outdatedbrowser.com/ua",
                callToAction: "Оновити мій браузер ",
                close: "Закрити"
            }
        }
    }, {}],
    4: [function (e, k, P) {
        ! function (r, p) {
            "use strict";
            var c = "function",
                e = "undefined",
                o = "model",
                i = "name",
                a = "type",
                t = "vendor",
                s = "version",
                n = "architecture",
                l = "console",
                d = "mobile",
                u = "tablet",
                w = "smarttv",
                m = "wearable",
                g = {
                    extend: function (e, o) {
                        var i = {};
                        for (var a in e) o[a] && o[a].length % 2 == 0 ? i[a] = o[a].concat(e[a]) : i[a] = e[a];
                        return i
                    },
                    has: function (e, o) {
                        return "string" == typeof e && -1 !== o.toLowerCase().indexOf(e.toLowerCase())
                    },
                    lowerize: function (e) {
                        return e.toLowerCase()
                    },
                    major: function (e) {
                        return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : p
                    },
                    trim: function (e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                b = {
                    rgx: function (e, o) {
                        for (var i, a, r, t, s, n, l = 0; l < o.length && !s;) {
                            var d = o[l],
                                u = o[l + 1];
                            for (i = a = 0; i < d.length && !s;)
                                if (s = d[i++].exec(e))
                                    for (r = 0; r < u.length; r++) n = s[++a], "object" == typeof (t = u[r]) && 0 < t.length ? 2 == t.length ? typeof t[1] == c ? this[t[0]] = t[1].call(this, n) : this[t[0]] = t[1] : 3 == t.length ? typeof t[1] != c || t[1].exec && t[1].test ? this[t[0]] = n ? n.replace(t[1], t[2]) : p : this[t[0]] = n ? t[1].call(this, n, t[2]) : p : 4 == t.length && (this[t[0]] = n ? t[3].call(this, n.replace(t[1], t[2])) : p) : this[t] = n || p;
                            l += 2
                        }
                    },
                    str: function (e, o) {
                        for (var i in o)
                            if ("object" == typeof o[i] && 0 < o[i].length) {
                                for (var a = 0; a < o[i].length; a++)
                                    if (g.has(o[i][a], e)) return "?" === i ? p : i
                            } else if (g.has(o[i], e)) return "?" === i ? p : i;
                        return e
                    }
                },
                f = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
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
                        }
                    }
                },
                h = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [i, s],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [i, "Opera Mini"], s
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [i, "Opera"], s
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                        [i, s],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [i, "IE"], s
                        ],
                        [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
                        [
                            [i, "Edge"], s
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [i, "Yandex"], s
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [i, "Puffin"], s
                        ],
                        [/(focus)\/([\w\.]+)/i],
                        [
                            [i, "Firefox Focus"], s
                        ],
                        [/(opt)\/([\w\.]+)/i],
                        [
                            [i, "Opera Touch"], s
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [i, "UCBrowser"], s
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [i, /_/g, " "], s
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [i, "WeChat"], s
                        ],
                        [/(brave)\/([\w\.]+)/i],
                        [
                            [i, "Brave"], s
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [i, s],
                        [/(QQ)\/([\d\.]+)/i],
                        [i, s],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [i, s],
                        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                        [i, s],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [i, s],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [i],
                        [/(LBBROWSER)/i],
                        [i],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [s, [i, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [s, [i, "Facebook"]],
                        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                        [i, s],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [s, [i, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [i, /(.+)/, "$1 WebView"], s
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [i, /(.+(?:g|us))(.+)/, "$1 $2"], s
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [s, [i, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [i, s],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [i, "Dolphin"], s
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [i, "Chrome"], s
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [i, "Opera Coast"], s
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [s, [i, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [s, [i, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [s, i],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [i, "GSA"], s
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [i, [s, b.str, f.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [i, s],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [i, "Netscape"], s
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [i, s]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [n, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [n, g.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [n, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [n, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [n, /ower/, "", g.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [n, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [n, g.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [o, t, [a, u]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [o, [t, "Apple"],
                            [a, u]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [o, "Apple TV"],
                            [t, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [t, o, [a, u]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [o, [t, "Amazon"],
                            [a, u]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [o, b.str, f.device.amazon.model],
                            [t, "Amazon"],
                            [a, d]
                        ],
                        [/android.+aft([bms])\sbuild/i],
                        [o, [t, "Amazon"],
                            [a, w]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [o, t, [a, d]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [o, [t, "Apple"],
                            [a, d]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [t, o, [a, d]],
                        [/\(bb10;\s(\w+)/i],
                        [o, [t, "BlackBerry"],
                            [a, d]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                        [o, [t, "Asus"],
                            [a, u]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [t, "Sony"],
                            [o, "Xperia Tablet"],
                            [a, u]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                        [o, [t, "Sony"],
                            [a, d]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [t, o, [a, l]],
                        [/android.+;\s(shield)\sbuild/i],
                        [o, [t, "Nvidia"],
                            [a, l]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [o, [t, "Sony"],
                            [a, l]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [t, b.str, f.device.sprint.vendor],
                            [o, b.str, f.device.sprint.model],
                            [a, d]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [t, o, [a, u]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [t, [o, /_/g, " "],
                            [a, d]
                        ],
                        [/(nexus\s9)/i],
                        [o, [t, "HTC"],
                            [a, u]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [o, [t, "Huawei"],
                            [a, d]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [t, o, [a, d]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [o, [t, "Microsoft"],
                            [a, l]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [o, /\./g, " "],
                            [t, "Microsoft"],
                            [a, d]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [o, [t, "Motorola"],
                            [a, d]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [o, [t, "Motorola"],
                            [a, u]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [t, g.trim],
                            [o, g.trim],
                            [a, w]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [o, /^/, "SmartTV"],
                            [t, "Samsung"],
                            [a, w]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [o, [t, "Sharp"],
                            [a, w]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [t, "Samsung"], o, [a, u]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [t, [a, w], o],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [t, "Samsung"], o, [a, d]
                        ],
                        [/sie-(\w*)/i],
                        [o, [t, "Siemens"],
                            [a, d]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [t, "Nokia"], o, [a, d]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [o, [t, "Acer"],
                            [a, u]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [o, [t, "LG"],
                            [a, u]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [t, "LG"], o, [a, u]
                        ],
                        [/(lg) netcast\.tv/i],
                        [t, o, [a, w]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [o, [t, "LG"],
                            [a, d]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [o, [t, "Lenovo"],
                            [a, u]
                        ],
                        [/linux;.+((jolla));/i],
                        [t, o, [a, d]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [t, o, [a, m]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [t, o, [a, d]],
                        [/crkey/i],
                        [
                            [o, "Chromecast"],
                            [t, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [o, [t, "Google"],
                            [a, m]
                        ],
                        [/android.+;\s(pixel c)[\s)]/i],
                        [o, [t, "Google"],
                            [a, u]
                        ],
                        [/android.+;\s(pixel( [23])?( xl)?)\s/i],
                        [o, [t, "Google"],
                            [a, d]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [o, /_/g, " "],
                            [t, "Xiaomi"],
                            [a, d]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [o, /_/g, " "],
                            [t, "Xiaomi"],
                            [a, u]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [o, [t, "Meizu"],
                            [a, u]
                        ],
                        [/(mz)-([\w-]{2,})/i],
                        [
                            [t, "Meizu"], o, [a, d]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                        [o, [t, "OnePlus"],
                            [a, d]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [o, [t, "RCA"],
                            [a, u]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [o, [t, "Dell"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [o, [t, "Verizon"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [t, "Barnes & Noble"], o, [a, u]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [o, [t, "NuVision"],
                            [a, u]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [o, [t, "ZTE"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [o, [t, "Swiss"],
                            [a, d]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [o, [t, "Swiss"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [o, [t, "Zeki"],
                            [a, u]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [t, "Dragon Touch"], o, [a, u]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [o, [t, "Insignia"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [o, [t, "NextBook"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [t, "Voice"], o, [a, d]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [t, "LvTel"], o, [a, d]
                        ],
                        [/android.+;\s(PH-1)\s/i],
                        [o, [t, "Essential"],
                            [a, d]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [o, [t, "Envizen"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [t, o, [a, u]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [o, [t, "MachSpeed"],
                            [a, u]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [t, o, [a, u]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [o, [t, "Rotor"],
                            [a, u]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [o, [t, "Amazon"],
                            [a, u]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [t, o, [a, u]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [a, g.lowerize], t, o
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [o, [t, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [s, [i, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [i, s],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [s, i]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [i, s],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [i, [s, b.str, f.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [i, "Windows"],
                            [s, b.str, f.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [i, "BlackBerry"], s
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                        [i, s],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [i, "Symbian"], s
                        ],
                        [/\((series40);/i],
                        [i],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [i, "Firefox OS"], s
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [i, s],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [i, "Chromium OS"], s
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [i, "Solaris"], s
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [i, s],
                        [/(haiku)\s(\w+)/i],
                        [i, s],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [s, /_/g, "."],
                            [i, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [i, "Mac OS"],
                            [s, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [i, s]
                    ]
                },
                v = function (e, o) {
                    if ("object" == typeof e && (o = e, e = p), !(this instanceof v)) return new v(e, o).getResult();
                    var i = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                        a = o ? g.extend(h, o) : h;
                    return this.getBrowser = function () {
                        var e = {
                            name: p,
                            version: p
                        };
                        return b.rgx.call(e, i, a.browser), e.major = g.major(e.version), e
                    }, this.getCPU = function () {
                        var e = {
                            architecture: p
                        };
                        return b.rgx.call(e, i, a.cpu), e
                    }, this.getDevice = function () {
                        var e = {
                            vendor: p,
                            model: p,
                            type: p
                        };
                        return b.rgx.call(e, i, a.device), e
                    }, this.getEngine = function () {
                        var e = {
                            name: p,
                            version: p
                        };
                        return b.rgx.call(e, i, a.engine), e
                    }, this.getOS = function () {
                        var e = {
                            name: p,
                            version: p
                        };
                        return b.rgx.call(e, i, a.os), e
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return i
                    }, this.setUA = function (e) {
                        return i = e, this
                    }, this
                };
            v.VERSION = "0.7.19", v.BROWSER = {
                NAME: i,
                MAJOR: "major",
                VERSION: s
            }, v.CPU = {
                ARCHITECTURE: n
            }, v.DEVICE = {
                MODEL: o,
                VENDOR: t,
                TYPE: a,
                CONSOLE: l,
                MOBILE: d,
                SMARTTV: w,
                TABLET: u,
                WEARABLE: m,
                EMBEDDED: "embedded"
            }, v.ENGINE = {
                NAME: i,
                VERSION: s
            }, v.OS = {
                NAME: i,
                VERSION: s
            }, typeof P != e ? (typeof k != e && k.exports && (P = k.exports = v), P.UAParser = v) : typeof define == c && define.amd ? define(function () {
                return v
            }) : r && (r.UAParser = v);
            var y = r && (r.jQuery || r.Zepto);
            if (typeof y != e && !y.ua) {
                var S = new v;
                y.ua = S.getResult(), y.ua.get = function () {
                    return S.getUA()
                }, y.ua.set = function (e) {
                    S.setUA(e);
                    var o = S.getResult();
                    for (var i in o) y.ua[i] = o[i]
                }
            }
        }("object" == typeof window ? window : this)
    }, {}],
    5: [function (e, o, i) {
        e("outdated-browser-rework")({
            browserSupport: {
                Chrome: 50,
                Edge: 14,
                Safari: 9,
                "Mobile Safari": 9,
                Firefox: 50,
                IE: 11
            }
        })
    }, {
        "outdated-browser-rework": 2
    }]
}, {}, [5]);