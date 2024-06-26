(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(4932)
            }])
        },
        4932: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return _
                }
            });
            var d = c(1799),
                e = c(5893),
                f = c(3024),
                g = c(9417),
                h = c(9603),
                i = c(9008),
                j = c.n(i),
                k = c(7294),
                l = c(4184),
                m = c.n(l),
                n = [{
                    img: "assets/svg/logos/btc.svg",
                    name: "btc"
                }, {
                    img: "assets/svg/logos/eth.svg",
                    name: "eth"
                }, {
                    img: "assets/svg/logos/bnb.svg",
                    name: "bnb"
                }, {
                    img: "assets/svg/logos/cosmos.svg",
                    name: "cosmos"
                }, {
                    img: "assets/svg/logos/rune.svg",
                    name: "rune"
                }, {
                    img: "assets/svg/logos/avax.svg",
                    name: "avax"
                }, {
                    img: "assets/svg/logos/doge.svg",
                    name: "doge"
                }, {
                    img: "assets/svg/logos/ltc.svg",
                    name: "ltc"
                }, {
                    img: "assets/svg/logos/bch.svg",
                    name: "bch"
                }, ],
                o = function(a) {
                    var b = a.activeChain;
                    return (0, e.jsx)("div", {
                        className: "flex gap-2 itemst-center justify-center",
                        children: n.map(function(a) {
                            var c;
                            return (0, e.jsx)("img", {
                                className: m()("transition-all w-7 h-7 md:w-10 md:h-10", b === (c = a.name) ? "opacity-100" : "opacity-40"),
                                src: a.img
                            }, a.name)
                        })
                    })
                },
                p = function() {
                    var a = (0, k.useState)("btc"),
                        b = a[0],
                        c = a[1],
                        d = function(a) {
                            setTimeout(function() {
                                return c(a)
                            }, 1e3)
                        };
                    return (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)(o, {
                            activeChain: b
                        }), (0, e.jsxs)("div", {
                            className: "first__subtitle correct__left_margin !text-lg md:!text-[28px] text-center",
                            "data-aos": "fade-up",
                            children: [(0, e.jsxs)("div", {
                                className: "flex justify-center items-center gap-1.5 flex-col md:flex-row text-center",
                                children: [(0, e.jsx)("span", {
                                    className: "ml-16 md:ml-0",
                                    children: "One click Swap & Earn on"
                                }), (0, e.jsxs)("span", {
                                    className: "relative",
                                    children: [(0, e.jsx)("span", {
                                        className: "mr-1.5 underline",
                                        children: "Native "
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim absolute",
                                        onAnimationIteration: function() {
                                            return d("btc")
                                        },
                                        onAnimationStart: function() {
                                            return d("btc")
                                        },
                                        children: "Bitcoin"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-2 absolute",
                                        onAnimationIteration: function() {
                                            return d("eth")
                                        },
                                        onAnimationStart: function() {
                                            return d("eth")
                                        },
                                        children: "Ethereum"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-4 absolute",
                                        onAnimationIteration: function() {
                                            return d("bnb")
                                        },
                                        onAnimationStart: function() {
                                            return d("bnb")
                                        },
                                        children: "BNB"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-6 absolute",
                                        onAnimationIteration: function() {
                                            return d("cosmos")
                                        },
                                        onAnimationStart: function() {
                                            return d("cosmos")
                                        },
                                        children: "ATOM"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-8 absolute",
                                        onAnimationIteration: function() {
                                            return d("rune")
                                        },
                                        onAnimationStart: function() {
                                            return d("rune")
                                        },
                                        children: "RUNE"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-10 absolute",
                                        onAnimationIteration: function() {
                                            return d("avax")
                                        },
                                        onAnimationStart: function() {
                                            return d("avax")
                                        },
                                        children: "AVAX"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-12 absolute",
                                        onAnimationIterationCapture: function() {
                                            return d("doge")
                                        },
                                        onAnimationStart: function() {
                                            return d("doge")
                                        },
                                        children: "Dogecoin"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-14 absolute",
                                        onAnimationIteration: function() {
                                            return d("ltc")
                                        },
                                        onAnimationStart: function() {
                                            return d("ltc")
                                        },
                                        children: "Litecoin"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim fade-anim-16 absolute",
                                        onAnimationIteration: function() {
                                            return d("bch")
                                        },
                                        onAnimationStart: function() {
                                            return d("bch")
                                        },
                                        children: "BCH"
                                    })]
                                })]
                            }), (0, e.jsx)("div", {
                                className: "flex items-center justify-center mt-1.5 md:mt-0",
                                children: (0, e.jsxs)("span", {
                                    className: "relative",
                                    children: [(0, e.jsx)("span", {
                                        className: "mr-1.5",
                                        children: "Own your "
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim-keys absolute",
                                        children: "Wallets"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim-keys fade-anim-4 absolute",
                                        children: "Keys"
                                    }), (0, e.jsx)("span", {
                                        className: "gradiently fade-anim-keys fade-anim-8 absolute",
                                        children: "Coins"
                                    })]
                                })
                            })]
                        })]
                    })
                };
            "p-1.5 cursor-pointer rounded-2xl ".concat("hover:bg-btn-light-tint-active dark:hover:bg-btn-dark-tint-active transition", " ").concat("hover:!text-light-typo-primary dark:hover:!text-dark-typo-primary transition");
            var q, r = [{
                    link: "https://www.ideocolab.com/",
                    name: "IDEO Colab",
                    logo: "assets/backers/logo_ideocolab.svg"
                }, {
                    link: "https://trueventures.com/",
                    name: "TrueVentures",
                    logo: "assets/backers/logo_trueventures.webp"
                }, {
                    link: "https://thorchain.com/",
                    name: "THORChain",
                    logo: "assets/img/thorchain.png"
                }, {
                    link: "https://0xventures.org/",
                    name: "0xVentures",
                    logo: "assets/backers/logo_0xv.png"
                }, {
                    link: "https://fomocraft.com/",
                    name: "Fomocraft",
                    logo: "assets/img/fomocraft.png"
                }, {
                    link: "https://www.sanctor.com/",
                    name: "Sanctor Capital",
                    logo: "assets/backers/logo_sanctorcapital.webp"
                }, {
                    link: "https://magnetcapital.com.au/",
                    name: "Magnet Capital",
                    logo: "assets/backers/logo_magnet.png"
                }, {
                    link: "https://proofgroup.xyz/",
                    name: "Proof Group",
                    logo: "assets/backers/logo_proofgroup.svg"
                }, {
                    link: "https://sentorinvestments.com.au/",
                    name: "Sentor Investments",
                    logo: "assets/backers/logo_sentor.webp"
                }, {
                    link: "https://www.mozaikcapital.com/",
                    name: "Mozaik Capital",
                    logo: "assets/backers/logo_mozaik.png"
                }, {
                    link: "https://sandbarinvestments.com.au/",
                    name: "Sandbar Investments",
                    logo: "assets/backers/logo_sandbar.webp"
                }, {
                    link: "https://qicapital.org/",
                    name: "Qi Capital",
                    logo: "assets/backers/logo_qi.webp"
                }, {
                    link: "https://www.aurumsy.com/",
                    name: "Aurumsy ",
                    logo: "assets/backers/logo_aurumsy.webp"
                }, {
                    link: "https://twitter.com/chroniclexnl?s=21&t=jCyxEAfXyo0nSvI-kWwPPQ",
                    name: "Chronicle",
                    logo: "assets/backers/logo_chronicle.webp"
                }, {
                    link: "https://compute.ventures/",
                    name: "Compute ventures",
                    logo: "assets/backers/logo_compute.svg"
                }, {
                    link: "https://www.blackdragon.io/",
                    name: "Blackdragon",
                    logo: "assets/img/blackdragon.png"
                }, {
                    link: "http://3commascapital.io/",
                    name: "3Commas Cap",
                    logo: "assets/backers/logo_3commas.webp"
                }, {
                    link: "https://www.apollocap.io/",
                    name: "Apollo Cap",
                    logo: "assets/backers/logo_apollocapital.webp"
                }, ],
                s = c(8787),
                t = c(9396),
                u = c(8855),
                v = function(a) {
                    var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png";
                    return "/assets/tokens/asset-".concat(a, ".").concat(b)
                },
                w = {
                    ALCX: v("alcx"),
                    AVAX: v("avax", "svg"),
                    BNB: v("bnb", "svg"),
                    DOGE: v("dogecoin"),
                    ATOM: v("atom", "svg"),
                    RUNE: v("rune", "svg"),
                    SOL: v("sol", "svg"),
                    USDC: v("usdc", "svg"),
                    TGT: v("tgt"),
                    THOR: v("thor"),
                    VTHOR: v("vthor"),
                    WETH: "https://assets.coingecko.com/coins/images/2518/large/weth.png",
                    ETH: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/ETH-1C9/logo.png",
                    BTC: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BTCB-1DE/logo.png",
                    LTC: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/LTC-F07/logo.png",
                    BCH: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BCH-1FD/logo.png"
                },
                x = function(a) {
                    var b, c, d, f = a.item,
                        g = a.isHighlighted,
                        h = (0, k.useState)(!1),
                        i = h[0],
                        j = h[1],
                        l = (d = f.asset, (Object.keys(w).includes(d.ticker) ? w[d.ticker] : Object.keys(w).includes(d.symbol) ? w[d.symbol] : "") || f.logoURI);
                    return (0, e.jsxs)("div", {
                        className: m()("px-2.5 py-2 cursor-pointer flex items-center gap-2 relative", {
                            "bg-dark-bg-secondary": g
                        }),
                        children: [f.logoURI && !i ? (0, e.jsx)("div", {
                            className: m()("rounded-full box-border overflow-hidden relative transition-all z-10 w-7 h-7"),
                            children: (0, e.jsx)("picture", {
                                children: (0, e.jsx)("img", {
                                    className: "absolute inset-0 transition-all rounded-full w-7 h-7",
                                    src: l,
                                    alt: f.asset.name,
                                    onError: function() {
                                        return j(!0)
                                    }
                                })
                            })
                        }) : (0, e.jsx)("div", {
                            className: "inset-0 transition-all rounded-full w-7 h-7 flex items-center justify-center bg-gray",
                            children: (0, e.jsx)("span", {
                                className: "text-[10px] font-thin",
                                children: null === (b = f.asset.ticker) || void 0 === b ? void 0 : b.substring(0, 5)
                            })
                        }), (0, e.jsxs)("span", {
                            className: "text-sm font-normal",
                            children: [(0, e.jsx)("span", {
                                className: "font-bold",
                                children: f.asset.ticker
                            }), " ", (0, e.jsx)("span", {
                                children: null === (c = f.cg) || void 0 === c ? void 0 : c.name
                            }), " ", (0, e.jsxs)("span", {
                                className: "text-xs text-dark-typo-gray",
                                children: ["(", f.asset.chain, ")"]
                            })]
                        })]
                    })
                },
                y = c(4327),
                z = c(6941),
                A = c(4221),
                B = c(5578),
                C = c.n(B),
                D = c(7568),
                E = c(9815),
                F = c(4051),
                G = c.n(F),
                H = ["Thorchain", "1inch", "CoinGecko", "Uniswap"],
                I = function() {
                    var a, b = (0, k.useState)(null),
                        c = b[0],
                        d = b[1],
                        e = (0, k.useCallback)((a = (0, D.Z)(G().mark(function a(b) {
                            var c;
                            return G().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        var d;
                                        return a.next = 2, fetch((d = b, "".concat("https://static.thorswap.net", "/token-list/").concat(d, ".json")));
                                    case 2:
                                        return c = a.sent, a.abrupt("return", c.json());
                                    case 4:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function(b) {
                            return a.apply(this, arguments)
                        }), []),
                        f = (0, k.useCallback)((0, D.Z)(G().mark(function a() {
                            var b, c, f;
                            return G().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (H.length) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return b = H.map(function() {
                                            var a = (0, D.Z)(G().mark(function a(b) {
                                                return G().wrap(function(a) {
                                                    for (;;) switch (a.prev = a.next) {
                                                        case 0:
                                                            return a.abrupt("return", e(b));
                                                        case 1:
                                                        case "end":
                                                            return a.stop()
                                                    }
                                                }, a)
                                            }));
                                            return function(b) {
                                                return a.apply(this, arguments)
                                            }
                                        }()), a.next = 5, Promise.allSettled(b);
                                    case 5:
                                        c = a.sent, f = [], c.forEach(function(a) {
                                            var b;
                                            "rejected" !== a.status && (null === (b = a.value) || void 0 === b ? void 0 : b.tokens) && (f = (0, E.Z)(f).concat((0, E.Z)(a.value.tokens)))
                                        }, []), d(f);
                                    case 9:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), [e]);
                    return (0, k.useEffect)(function() {
                        f()
                    }, [f]), {
                        tokens: c,
                        isLoading: !c
                    }
                },
                J = {
                    keys: [{
                        name: "asset.symbol",
                        weight: .99
                    }, {
                        name: "ticker",
                        weight: .99
                    }, {
                        name: "identifier",
                        weight: .01,
                        getFn: function(a) {
                            var b = a.identifier;
                            return b ? b.split(".")[1] || b : ""
                        }
                    }, {
                        name: "cg.name",
                        weight: .01
                    }, ],
                    minMatchCharLength: 1,
                    includeScore: !0,
                    shouldSort: !1,
                    threshold: .1
                },
                K = function() {
                    var a, b = I(),
                        c = b.tokens,
                        e = b.isLoading,
                        f = (0, k.useRef)(new A.Z([], J)),
                        g = (0, k.useState)(""),
                        h = g[0],
                        i = g[1],
                        j = (0, k.useMemo)(function() {
                            return c ? c.map(function(a) {
                                var b = a.chain,
                                    c = a.identifier,
                                    e = a.address,
                                    f = (0, y.Z)(a, ["chain", "identifier", "address"]);
                                try {
                                    var g = z.xR.fromAssetString("ETH" === b ? "".concat(c, "-").concat(e) : c);
                                    if (!g) return null;
                                    return (0, d.Z)({
                                        asset: g,
                                        balance: null,
                                        identifier: c
                                    }, f)
                                } catch (h) {
                                    return null
                                }
                            }).filter(Boolean) : []
                        }, [c]);
                    return (0, k.useEffect)(function() {
                        (null == j ? void 0 : j.length) && (f.current = new A.Z(j, J))
                    }, [j]), {
                        filteredTokens: (0, k.useMemo)(function() {
                            var a = (h.length > 0 && (null == j ? void 0 : j.length) ? f.current.search(h, {
                                limit: 50
                            }).map(function(a) {
                                return a.item
                            }) : []).concat().sort(function(a, b) {
                                var c, d;
                                return ((null == b ? void 0 : null === (c = b.cg) || void 0 === c ? void 0 : c.market_cap) || 0) - ((null == a ? void 0 : null === (d = a.cg) || void 0 === d ? void 0 : d.market_cap) || 0)
                            });
                            return C()(a, function(a) {
                                return a.asset.toString()
                            })
                        }, [h, j]),
                        query: h,
                        setQuery: i,
                        isLoading: e,
                        redirectToSwap: function(a) {
                            var b = "".concat("https://app.thorswap.finance/swap/").concat(z.xR.BTC().toURLEncoded(), "_").concat(a.toURLEncoded());
                            window.location.href = b
                        }
                    }
                },
                L = "Search 5,000+ tokens across 9 Chains... ",
                M = function(a) {
                    var b = a.className,
                        c = K(),
                        f = c.filteredTokens,
                        g = c.setQuery,
                        h = c.redirectToSwap,
                        i = (0, u.Kb)({
                            items: f,
                            itemToString: function(a) {
                                return a ? a.asset.ticker : ""
                            },
                            onInputValueChange: function(a) {
                                g(a.inputValue || "")
                            },
                            onSelectedItemChange: function(a) {
                                var b = a.selectedItem;
                                (null == b ? void 0 : b.asset) && h(null == b ? void 0 : b.asset), r()
                            }
                        }),
                        j = i.getMenuProps,
                        l = i.getInputProps,
                        n = i.getComboboxProps,
                        o = i.highlightedIndex,
                        p = i.getItemProps,
                        q = i.openMenu,
                        r = i.closeMenu,
                        s = i.isOpen,
                        v = (0, k.useState)(!1),
                        w = v[0],
                        y = v[1],
                        z = (0, k.useState)(L),
                        A = z[0],
                        B = z[1],
                        C = function() {
                            q(), y(!0)
                        },
                        D = function() {
                            return y(!1)
                        },
                        E = (0, k.useRef)(null);
                    return (0, k.useEffect)(function() {
                        if (w) {
                            B(""), clearInterval(E.current), E.current = null;
                            return
                        }
                        return E.current || (E.current = setInterval(function() {
                                return B(function(a) {
                                    return a.endsWith("|") ? L : "".concat(L, "|")
                                })
                            }, 600)),
                            function() {
                                clearInterval(E.current), E.current = null
                            }
                    }, [w]), (0, e.jsxs)("div", {
                        className: m()("form-subcribe relative flex-1 !bg-gray !bg-opacity-70 drop-shadow-btn", b),
                        children: [(0, e.jsx)("div", (0, t.Z)((0, d.Z)({
                            className: "flex flex-1"
                        }, n()), {
                            children: (0, e.jsx)("input", (0, d.Z)({
                                type: "search",
                                name: "search",
                                placeholder: A,
                                className: "form-subcribe__input placeholder-dark-typo-primary"
                            }, l({
                                onFocus: C,
                                onBlur: D
                            })))
                        })), (0, e.jsx)("div", {
                            className: "form-subcribe__submit",
                            children: (0, e.jsxs)("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, e.jsx)("path", {
                                    d: "M7.76915 14.5383C11.5076 14.5383 14.5383 11.5076 14.5383 7.76915C14.5383 4.03065 11.5076 1 7.76915 1C4.03065 1 1 4.03065 1 7.76915C1 11.5076 4.03065 14.5383 7.76915 14.5383Z",
                                    stroke: "#4DBAD6",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0, e.jsx)("path", {
                                    d: "M17.0009 17.0001L13.3086 13.3079",
                                    stroke: "#4DBAD6",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsx)("div", {
                                className: m()("gradient-border absolute top-full left-0 right-0 rounded-2xl mt-1", {
                                    hidden: !f.length || !s
                                }),
                                children: (0, e.jsx)("div", {
                                    className: m()("rounded-2xl bg-dark-bg-primary overflow-hidden", "border border-solid border-light-border-primary dark:border-dark-border-primary", "!border-transparent"),
                                    children: (0, e.jsx)("ul", (0, t.Z)((0, d.Z)({
                                        className: m()("list-none p-0 m-0", "overflow-y-auto overflow-x-hidden max-h-[250px]")
                                    }, j()), {
                                        children: s && f.map(function(a, b) {
                                            return (0, e.jsx)("li", (0, t.Z)((0, d.Z)({}, p({
                                                item: a,
                                                index: b
                                            })), {
                                                children: (0, e.jsx)(x, {
                                                    item: a,
                                                    isHighlighted: o === b
                                                })
                                            }), "".concat(a.asset.symbol).concat(a.asset.type))
                                        })
                                    }))
                                })
                            })
                        })]
                    })
                },
                N = function() {
                    var a = (0, k.useState)(!1),
                        b = a[0],
                        c = a[1],
                        d = (0, k.useState)(),
                        f = d[0],
                        g = d[1],
                        h = (0, k.useState)(!1),
                        i = h[0],
                        j = h[1],
                        l = function(a) {
                            var b = a.target.closest(".form-subcribe");
                            window.innerWidth < 993 && !b && c(!1)
                        },
                        n = function() {
                            g(setTimeout(function() {
                                return j(!0)
                            }, 300))
                        },
                        o = function() {
                            clearTimeout(f), g(setTimeout(function() {
                                return j(!1)
                            }, 200))
                        },
                        p = (0, s.Z)("(max-width:991px)");
                    return (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)("header", {
                            id: "header",
                            className: "header",
                            children: (0, e.jsxs)("div", {
                                className: "container container--big header__container",
                                children: [(0, e.jsxs)("a", {
                                    href: "#",
                                    className: "header__logo flex items-center justify-center relative",
                                    children: [(0, e.jsx)("div", {
                                        className: m()("rounded-full bg-cyan bg-opacity-30 left-[-10px] absolute w-16 h-16 transition-all blur-[15px] dark:blur-md -z-10")
                                    }), (0, e.jsx)("picture", {
                                        className: "h-12",
                                        children: (0, e.jsx)("img", {
                                            src: "assets/img/header_logo.png",
                                            loading: "lazy",
                                            alt: "",
                                            className: "h-12"
                                        })
                                    })]
                                }), (0, e.jsxs)("div", {
                                    id: "menu",
                                    className: m()("menu header__menu", {
                                        active: b
                                    }),
                                    onClick: l,
                                    children: [(0, e.jsx)(M, {
                                        className: "header__form"
                                    }), (0, e.jsx)("a", {
                                        href: "https://app.thorswap.finance/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "link",
                                        children: "App"
                                    }), (0, e.jsx)("a", {
                                        href: "#powerful",
                                        className: "link",
                                        children: "Products"
                                    }), (0, e.jsx)("a", {
                                        href: "#with-us",
                                        className: "link",
                                        children: "Build"
                                    }), (0, e.jsx)("a", {
                                        href: "https://thorswap.notion.site/thorswap/Career-Public-d79b0ea475fe4358ac5974d086425acc",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "link",
                                        children: "Careers"
                                    }), (0, e.jsxs)("div", {
                                        children: [(0, e.jsx)("a", {
                                            href: "#sec-about",
                                            className: "link link_about",
                                            onMouseEnter: function() {
                                                return n()
                                            },
                                            onMouseLeave: function() {
                                                return o()
                                            },
                                            children: "About"
                                        }), !p && i && (0, e.jsx)("div", {
                                            className: "container container--big header__container",
                                            style: {
                                                position: "absolute"
                                            },
                                            children: (0, e.jsxs)("ul", {
                                                id: "menu",
                                                className: m()("menu header__menu dropdown_menu", {
                                                    active: b
                                                }),
                                                onMouseEnter: function() {
                                                    clearTimeout(f), j(!0)
                                                },
                                                onMouseLeave: function() {
                                                    g(setTimeout(function() {
                                                        return j(!1)
                                                    }, 200))
                                                },
                                                children: [(0, e.jsx)("li", {
                                                    onMouseEnter: function() {
                                                        clearTimeout(f), j(!0)
                                                    },
                                                    children: (0, e.jsx)("a", {
                                                        href: "https://www.youtube.com/c/THORSwapCommunity",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "link",
                                                        children: "Youtube"
                                                    })
                                                }), (0, e.jsx)("li", {
                                                    children: (0, e.jsx)("a", {
                                                        href: "https://docs.thorswap.finance/thorswap/",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "link",
                                                        children: "Docs"
                                                    })
                                                }), (0, e.jsx)("li", {
                                                    children: (0, e.jsx)("a", {
                                                        href: "https://medium.com/@thorswap",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "link",
                                                        children: "Medium"
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, e.jsx)("a", {
                                        href: "https://app.thorswap.finance/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "btn-type-4 btn-enter",
                                        children: "Enter App"
                                    })]
                                })]
                            })
                        }), (0, e.jsxs)("button", {
                            className: m()("menu-trigger", {
                                active: b
                            }),
                            id: "menu-trigger",
                            onClick: function() {
                                return c(function(a) {
                                    return !a
                                })
                            },
                            children: [(0, e.jsx)("div", {
                                className: "menu-trigger__line menu-trigger__line-1"
                            }), (0, e.jsx)("div", {
                                className: "menu-trigger__line menu-trigger__line-2"
                            }), (0, e.jsx)("div", {
                                className: "menu-trigger__line menu-trigger__line-3"
                            })]
                        })]
                    })
                },
                O = function(a) {
                    var b = a.link,
                        c = a.logo;
                    return (0, e.jsx)("a", {
                        href: b,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex flex-1 items-center justify-center",
                        children: (0, e.jsx)("picture", {
                            children: (0, e.jsx)("img", {
                                src: c,
                                loading: "lazy",
                                alt: "",
                                className: "object-contain max-w-[100%]",
                                "data-aos": "fade-up",
                                height: 60
                            })
                        })
                    })
                },
                P = c(7484),
                Q = c.n(P),
                R = c(4905),
                S = function() {
                    var a = (0, k.useState)(""),
                        b = a[0],
                        c = a[1],
                        f = (0, k.useState)(""),
                        g = f[0],
                        h = f[1],
                        i = (0, k.useState)([]),
                        j = i[0],
                        l = i[1];
                    return ((0, k.useEffect)(function() {
                        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Thorswap").then(function(a) {
                            return a.json()
                        }).then(function(a) {
                            var e = a.items.slice(0, 3);
                            c(a.feed.image), h(a.feed.link), l(e.map(function(a) {
                                return (0, t.Z)((0, d.Z)({}, a), {
                                    avatar: b,
                                    profileLink: g
                                })
                            }))
                        }).catch(function() {})
                    }, []), j.length) ? (0, e.jsxs)("div", {
                        className: "mb-10",
                        children: [(0, e.jsx)("div", {
                            className: "text-title mb-6",
                            "data-aos": "fade-up",
                            children: "Latest News"
                        }), (0, e.jsx)("div", {
                            className: "list-news",
                            children: j.map(function(a) {
                                return (0, e.jsx)("div", {
                                    className: "card-news list-news__item",
                                    "data-aos": "fade-up",
                                    children: (0, e.jsxs)("div", {
                                        className: "card-news__media",
                                        children: [(0, e.jsx)("a", {
                                            href: a.link,
                                            className: "card-news__wrap-img",
                                            children: (0, e.jsx)("picture", {
                                                children: (0, e.jsx)("img", {
                                                    src: a.thumbnail,
                                                    loading: "lazy",
                                                    alt: "",
                                                    className: "card-news__img"
                                                })
                                            })
                                        }), (0, e.jsxs)("div", {
                                            className: "card-news__main",
                                            children: [(0, e.jsx)("a", {
                                                href: a.link,
                                                className: "card-news__title mb-2 md:!mb-5",
                                                children: a.title
                                            }), (0, e.jsx)("div", {
                                                className: "card-news__text !py-0",
                                                dangerouslySetInnerHTML: {
                                                    __html: a.description.substring(a.description.indexOf("<h4>"), a.description.indexOf("</h4>"))
                                                }
                                            }), (0, e.jsxs)("div", {
                                                className: "card-news__footer",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-news__date",
                                                    children: [a.author, " •", " ", Q()(a.pubDate).format("MMM DD, YYYY")]
                                                }), (0, e.jsxs)("div", {
                                                    className: "card-news__time-to-read",
                                                    children: [Math.ceil(R(a.description).minutes), " min to read"]
                                                })]
                                            })]
                                        })]
                                    })
                                }, a.guid)
                            })
                        }), (0, e.jsx)("a", {
                            href: g,
                            className: "btn-type-4 min-h-40",
                            "data-aos": "fade-up",
                            children: "View More"
                        })]
                    }) : null
                },
                T = c(828),
                U = (q = (0, D.Z)(G().mark(function a() {
                    var b, c, d, e;
                    return G().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return b = "https://sheets.googleapis.com/v4/spreadsheets/1-fZ8S-fkqvOorAp2-ftJ4rBHqkRhqgLceLGtCkhFkPo/values/:batchGet?alt=json&key=AIzaSyDeBo5Q_YVC0B5Hqrz8XS8o0n4IX6PW_ik&ranges=Press", a.prev = 1, a.next = 4, fetch(b).then(function(a) {
                                    return a.json()
                                });
                            case 4:
                                return e = (d = (c = a.sent).valueRanges)[0].values, a.abrupt("return", V(e));
                            case 10:
                                return a.prev = 10, a.t0 = a.catch(1), a.abrupt("return", []);
                            case 13:
                            case "end":
                                return a.stop()
                        }
                    }, a, null, [
                        [1, 10]
                    ])
                })), function() {
                    return q.apply(this, arguments)
                }),
                V = function(a) {
                    return a.slice(1).map(function(a) {
                        var b = (0, T.Z)(a, 8),
                            c = b[0],
                            d = b[1],
                            e = b[2],
                            f = b[3],
                            g = b[4],
                            h = b[5],
                            i = b[6],
                            j = b[7];
                        return {
                            publisherLogo: c,
                            publisher: d,
                            title: e,
                            publishedDate: f,
                            linkUrl: g,
                            linkText: h,
                            thumbnailImage: i,
                            description: j
                        }
                    })
                },
                W = function() {
                    var a = (0, k.useState)([]),
                        b = a[0],
                        c = a[1],
                        d = (0, k.useState)(!1),
                        f = d[0],
                        g = d[1],
                        h = f ? b : b.slice(0, 3);
                    return ((0, k.useEffect)(function() {
                        U().then(function(a) {
                            c(a)
                        })
                    }, []), b.length) ? (0, e.jsxs)("div", {
                        children: [(0, e.jsx)("div", {
                            className: "text-title mb-6",
                            "data-aos": "fade-up",
                            children: "Press"
                        }), (0, e.jsx)("div", {
                            className: "list-news",
                            children: h.map(function(a) {
                                return (0, e.jsx)("div", {
                                    className: "card-news list-news__item",
                                    "data-aos": "fade-up",
                                    children: (0, e.jsxs)("div", {
                                        className: "card-news__media",
                                        children: [(0, e.jsx)("a", {
                                            href: a.linkUrl || "#",
                                            className: "card-news__wrap-img",
                                            children: (0, e.jsx)("picture", {
                                                children: (0, e.jsx)("img", {
                                                    src: a.thumbnailImage,
                                                    loading: "lazy",
                                                    alt: "",
                                                    className: "card-news__img"
                                                })
                                            })
                                        }), (0, e.jsxs)("div", {
                                            className: "card-news__main",
                                            children: [(0, e.jsxs)("a", {
                                                href: a.linkUrl || "#",
                                                className: "card-news__title mb-2 md:!mb-5 !flex flex-row gap-3 items-center",
                                                children: [(0, e.jsx)("div", {
                                                    className: "media__wrap-img flex",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: a.publisherLogo,
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "media__img"
                                                        })
                                                    })
                                                }), (0, e.jsx)("span", {
                                                    children: a.title
                                                })]
                                            }), (0, e.jsx)("div", {
                                                className: "card-news__text !py-0",
                                                children: (0, e.jsx)("h4", {
                                                    children: a.description
                                                })
                                            }), (0, e.jsxs)("div", {
                                                className: "card-news__footer",
                                                children: [(0, e.jsx)("div", {
                                                    className: "card-news__date",
                                                    children: a.publishedDate
                                                }), (0, e.jsx)("a", {
                                                    href: (null == a ? void 0 : a.linkUrl) || "#",
                                                    target: "_blank",
                                                    className: "btn-type-4 min-h-40",
                                                    rel: "noreferrer",
                                                    children: (null == a ? void 0 : a.linkText) || "Learn more"
                                                })]
                                            })]
                                        })]
                                    })
                                }, a.publisher + a.title)
                            })
                        }), b.length > 3 && !f && (0, e.jsx)("div", {
                            onClick: function() {
                                return g(!0)
                            },
                            className: "btn-type-4 min-h-40",
                            "data-aos": "fade-up",
                            children: "View More"
                        })]
                    }) : null
                },
                X = c(3012),
                Y = function(a) {
                    var b = a.number,
                        c = void 0 === b ? 0 : b,
                        e = a.isCurrency,
                        f = void 0 !== e && e,
                        g = a.significantDigits,
                        h = a.isMobile,
                        i = a.notation,
                        j = a.numberFormat,
                        k = void 0 === j ? null : j,
                        l = a.currency,
                        m = void 0 === l ? "USD" : l,
                        n = a.showSmallNumber,
                        o = function() {
                            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                b = (0, d.Z)({}, {
                                    languageCodeOnly: !1
                                }, a),
                                c = void 0 === navigator.languages ? [navigator.language] : navigator.languages;
                            return c ? c.map(function(a) {
                                var c = a.trim();
                                return b.languageCodeOnly ? c.split(/-|_/)[0] : c
                            }) : ["en-US"]
                        },
                        p = function(a, b, c) {
                            var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "standard";
                            return new Intl.NumberFormat([k || o()[0]], (0, t.Z)((0, d.Z)({
                                style: a ? "currency" : "decimal"
                            }, a && {
                                currency: b
                            }), {
                                unitDisplay: "narrow",
                                notation: e,
                                minimumFractionDigits: c,
                                maximumFractionDigits: c
                            }))
                        };
                    return void 0 === c || 0 === c ? p(f, m, 0).format(c) : c < 1e-4 && c > 0 && !(void 0 !== n && n) ? "< " + p(f, m, 4).format(1e-4) : p(f, m, void 0 === g ? 2 : g, c > 1e3 && void 0 !== h && h ? "compact" : void 0 === i ? "standard" : i).format(c)
                },
                Z = function() {
                    var a = (0, k.useState)("0"),
                        b = a[0],
                        c = a[1],
                        d = (0, k.useState)("0"),
                        f = d[0],
                        g = d[1],
                        h = (0, k.useState)("$ 0"),
                        i = h[0],
                        j = h[1],
                        l = (0, k.useState)(0),
                        m = l[0],
                        n = l[1],
                        o = (0, k.useState)("$ 0"),
                        p = o[0],
                        q = o[1];
                    return (0, k.useEffect)(function() {
                        fetch("https://midgard.ninerealms.com/v2/pool/ETH.THOR-0XA5F2211B9B8170F694421F2046281775E8468044").then(function(a) {
                            return a.json()
                        }).then(function(a) {
                            j(Y({
                                number: parseFloat(a.assetPriceUSD),
                                isCurrency: !0,
                                notation: "compact"
                            }))
                        }).catch(function() {}), fetch("https://midgard-b.thorswap.net/v2/stats").then(function(a) {
                            return a.json()
                        }).then(function(a) {
                            c(Y({
                                number: parseInt(a.swapCount),
                                notation: "compact"
                            })), g(Y({
                                number: parseInt(a.uniqueSwapperCount),
                                notation: "compact"
                            }))
                        }).catch(function() {}), fetch("https://thornode.thorswap.net/thorchain/inbound_addresses").then(function(a) {
                            return a.json()
                        }).then(function(a) {
                            n(a.length + 1)
                        }).catch(function() {}), fetch("https://midgard.ninerealms.com/v2/history/tvl").then(function(a) {
                            return a.json()
                        }).then(function(a) {
                            q(Y({
                                number: new X.Z(parseInt(a.meta.totalValuePooled) / 1e8).mul(a.meta.runePriceUSD).toNumber(),
                                isCurrency: !0,
                                notation: "compact"
                            }))
                        }).catch(function() {})
                    }, []), (0, e.jsx)("div", {
                        className: "col-12",
                        children: (0, e.jsxs)("div", {
                            className: "properties",
                            children: [(0, e.jsxs)("div", {
                                className: "property property-1",
                                "data-aos": "fade-up",
                                children: [(0, e.jsx)("div", {
                                    className: "property__wrap-icon",
                                    children: (0, e.jsx)("svg", {
                                        className: "property__icon",
                                        width: "18",
                                        height: "17",
                                        viewBox: "0 0 18 17",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, e.jsx)("path", {
                                            d: "M18 10.2895V15C18 16.1046 17.1046 17 16 17H1.49123C0.667646 17 0 16.3324 0 15.5088L9 9.39474L13.05 13.4211L18 10.2895ZM18 3.97661L14 6.95906L9 0L4 3.97661H2C0.895432 3.97661 0 4.87204 0 5.97661V12.8942L9 6.26316L13.5 10.7368L17.596 7.69635C17.8502 7.50771 18 7.20989 18 6.8934V3.97661Z"
                                        })
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "property__main",
                                    children: [(0, e.jsx)("div", {
                                        className: "property__title",
                                        children: "$ THOR Price"
                                    }), (0, e.jsxs)("div", {
                                        className: "property__value",
                                        children: [i, " USD"]
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: "property property-2",
                                "data-aos": "fade-up",
                                children: [(0, e.jsx)("div", {
                                    className: "property__wrap-icon",
                                    children: (0, e.jsxs)("svg", {
                                        className: "property__icon",
                                        width: "21",
                                        height: "16",
                                        viewBox: "0 0 21 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, e.jsx)("path", {
                                            d: "M5.84 0.213333L0.09 7.88C0.0366667 7.95111 0.0366666 8.04889 0.0899999 8.12L5.84 15.7867C5.92 15.8933 6.08 15.8933 6.16 15.7867L11.91 8.12C11.9633 8.04889 11.9633 7.95111 11.91 7.88L6.16 0.213333C6.08 0.106667 5.92 0.106666 5.84 0.213333Z"
                                        }), (0, e.jsx)("path", {
                                            d: "M10.8971 0H8.38864C8.22596 0 8.13134 0.183874 8.22589 0.316247L12.9402 6.91625C12.9777 6.96881 13.0383 7 13.1029 7H15.6114C15.774 7 15.8687 6.81613 15.7741 6.68375L11.0598 0.0837524C11.0223 0.0311931 10.9617 0 10.8971 0Z"
                                        }), (0, e.jsx)("path", {
                                            d: "M15.6114 9H13.1029C13.0383 9 12.9777 9.03119 12.9402 9.08375L8.22589 15.6838C8.13134 15.8161 8.22596 16 8.38864 16H10.8971C10.9617 16 11.0223 15.9688 11.0598 15.9162L15.7741 9.31625C15.8687 9.18387 15.774 9 15.6114 9Z"
                                        }), (0, e.jsx)("path", {
                                            d: "M15.8892 0H13.3608C13.2038 0 13.108 0.17279 13.1912 0.305999L17.9338 7.894C17.9743 7.95885 17.9743 8.04115 17.9338 8.106L13.1912 15.694C13.108 15.8272 13.2038 16 13.3608 16H15.8892C15.9581 16 16.0222 15.9645 16.0588 15.906L20.9338 8.106C20.9743 8.04115 20.9743 7.95885 20.9338 7.894L16.0588 0.0940002C16.0222 0.0355239 15.9581 0 15.8892 0Z"
                                        })]
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "property__main",
                                    children: [(0, e.jsx)("div", {
                                        className: "property__title",
                                        children: "Supported"
                                    }), (0, e.jsxs)("div", {
                                        className: "property__value",
                                        children: [m, " Chains"]
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: "property property-3",
                                "data-aos": "fade-up",
                                children: [(0, e.jsx)("div", {
                                    className: "property__wrap-icon",
                                    children: (0, e.jsxs)("svg", {
                                        className: "property__icon",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, e.jsx)("path", {
                                            d: "M5.17367 12.0156H16.8125C16.9156 12.0156 17 11.9313 17 11.8281V1.00001C17 0.831265 16.7961 0.749233 16.6789 0.866421L12 7.00001L8.93594 3.79533C8.9007 3.76043 8.85311 3.74086 8.80352 3.74086C8.75392 3.74086 8.70633 3.76043 8.67109 3.79533L5.04008 8.43978C5.02287 8.45702 5.00925 8.47749 5 8.50001C4.99075 8.52254 4.98605 8.54668 4.98617 8.57103V11.8281C4.98617 11.9313 5.07055 12.0156 5.17367 12.0156Z"
                                        }), (0, e.jsx)("path", {
                                            d: "M18 16.5C18 15.6716 17.3284 15 16.5 15H3V1.5C3 0.671575 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5V17.8125C0 17.9156 0.084375 18 0.1875 18H16.5C17.3284 18 18 17.3284 18 16.5Z"
                                        })]
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "property__main",
                                    children: [(0, e.jsx)("div", {
                                        className: "property__title",
                                        children: "Total Liquidity"
                                    }), (0, e.jsx)("div", {
                                        className: "property__value",
                                        children: p
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: "property property-4",
                                "data-aos": "fade-up",
                                children: [(0, e.jsx)("div", {
                                    className: "property__wrap-icon",
                                    children: (0, e.jsx)("svg", {
                                        className: "property__icon",
                                        width: "14",
                                        height: "20",
                                        viewBox: "0 0 14 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, e.jsx)("path", {
                                            d: "M12.9358 6H8.50471L9.3616 1.165C9.38709 1.02165 9.37906 0.874793 9.33806 0.734659C9.29706 0.594526 9.22408 0.464483 9.12419 0.353588C9.02431 0.242693 8.89993 0.15361 8.75971 0.0925446C8.61949 0.0314788 8.46681 -0.000102432 8.31229 2.49587e-07H2.83505C2.58356 6.96976e-05 2.34023 0.0839999 2.14831 0.236878C1.95639 0.389756 1.8283 0.601682 1.78681 0.835L0.0145717 10.835C-0.0109091 10.9783 -0.00290119 11.125 0.0380379 11.2651C0.0789769 11.4052 0.151864 11.5352 0.25163 11.646C0.351396 11.7569 0.475645 11.846 0.615734 11.9071C0.755822 11.9683 0.908387 12 1.06282 12H5.31533V20L13.831 7.541C13.9343 7.38987 13.9925 7.21535 13.9993 7.03577C14.0062 6.85619 13.9614 6.6782 13.8698 6.52051C13.7782 6.36282 13.6431 6.23126 13.4788 6.13967C13.3144 6.04807 13.1269 5.99983 12.9358 6Z"
                                        })
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "property__main",
                                    children: [(0, e.jsx)("div", {
                                        className: "property__title",
                                        children: "Total Trades"
                                    }), (0, e.jsx)("div", {
                                        className: "property__value",
                                        children: b
                                    })]
                                })]
                            }), (0, e.jsxs)("div", {
                                className: "property property-5",
                                "data-aos": "fade-up",
                                children: [(0, e.jsx)("div", {
                                    className: "property__wrap-icon",
                                    children: (0, e.jsxs)("svg", {
                                        className: "property__icon",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, e.jsx)("path", {
                                            d: "M1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V7H13C10.7909 7 9.00003 8.79085 9.00002 11C9.00001 13.2091 10.7909 15 13 15H17V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3Z"
                                        }), (0, e.jsx)("path", {
                                            d: "M1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V7H13C10.7909 7 9.00003 8.79085 9.00002 11C9.00001 13.2091 10.7909 15 13 15H17V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3ZM1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H12.1111C12.5556 1 13 1.44444 13 2",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), (0, e.jsx)("circle", {
                                            cx: "13",
                                            cy: "11",
                                            r: "2"
                                        })]
                                    })
                                }), (0, e.jsxs)("div", {
                                    className: "property__main",
                                    children: [(0, e.jsx)("div", {
                                        className: "property__title",
                                        children: "Unique Users"
                                    }), (0, e.jsxs)("div", {
                                        className: "property__value",
                                        children: [f, " +"]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                $ = function(a) {
                    var b = a.children,
                        c = a.className;
                    return (0, e.jsx)("div", {
                        className: m()("sec-title text-[28px] md:text-[48px] lg:text-[64px]", c),
                        "data-aos": "fade-up",
                        children: b
                    })
                },
                _ = function() {
                    return K(), (0, e.jsxs)("div", {
                        children: [(0, e.jsx)(j(), {
                            children: (0, e.jsx)("title", {
                                children: "THORSwap"
                            })
                        }), (0, e.jsxs)("div", {
                            id: "app",
                            className: "page",
                            children: [(0, e.jsx)("div", {
                                className: "wrap-footer-shadow"
                            }), (0, e.jsx)(N, {}), (0, e.jsxs)("section", {
                                id: "first",
                                className: "first",
                                children: [(0, e.jsxs)("div", {
                                    className: "first__video w-full h-screen flex",
                                    children: [(0, e.jsx)("div", {
                                        className: "absolute w-full h-screen bg-gradient-to-b from-[#171D30] via-[#171D3050] to-transparent"
                                    }), (0, e.jsx)("video", {
                                        className: "object-cover w-full",
                                        poster: "assets/img/landing_page__3_frame.jpeg",
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        children: (0, e.jsx)("source", {
                                            src: "assets/videos/landing_page_3.mp4",
                                            type: "video/mp4"
                                        })
                                    })]
                                }), (0, e.jsx)("div", {
                                    className: "container container--big",
                                    children: (0, e.jsx)("div", {
                                        className: "row",
                                        children: (0, e.jsxs)("div", {
                                            className: "col-12 t-a-c first__col flex flex-1 flex-col pb-[45px] pt-[120px] lg:pt-[150px]",
                                            children: [(0, e.jsxs)("div", {
                                                className: "flex flex-1 flex-col gap-3 md:gap-6",
                                                children: [(0, e.jsx)("div", {
                                                    "data-aos": "fade-up",
                                                    children: (0, e.jsxs)($, {
                                                        children: ["The ", (0, e.jsx)("span", {
                                                            className: "gradiently",
                                                            children: "Decentralized "
                                                        }), " ", "Cross-chain Exchange"]
                                                    })
                                                }), (0, e.jsx)(p, {})]
                                            }), (0, e.jsxs)("div", {
                                                className: "flex flex-1 flex-col gap-8 w-full md:gap-16",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "flex flex-1 flex-col",
                                                    children: [(0, e.jsx)(M, {
                                                        className: "first__form max-h-[56px]"
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/swap",
                                                        className: "btn-type-2 max-w-[250px] self-center flex max-h-[56px] w-full bg-gradient-to-r from-purple to-cyan drop-shadow-btn",
                                                        "data-aos": "fade-up",
                                                        children: "Start Swapping"
                                                    })]
                                                }), (0, e.jsxs)("div", {
                                                    className: "flex flex-col justify-end",
                                                    children: [(0, e.jsxs)("div", {
                                                        className: "first__socials socials bg-gray px-3 py-2 rounded-2xl bg-opacity-90 self-center",
                                                        children: [(0, e.jsx)("a", {
                                                            href: "https://discord.gg/thorswap",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: f.omb
                                                            })
                                                        }), (0, e.jsx)("a", {
                                                            href: "https://twitter.com/thorswap?s=21&t=JFS-0qEudRhjcgcIamfRFw",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: f.mdU
                                                            })
                                                        }), (0, e.jsx)("a", {
                                                            href: "https://www.youtube.com/c/THORSwapCommunity",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: f.opf
                                                            })
                                                        }), (0, e.jsx)("a", {
                                                            href: "https://docs.thorswap.finance/thorswap/",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: g.cnt
                                                            })
                                                        }), (0, e.jsx)("a", {
                                                            href: "https://t.me/thorswap_ann",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: f.IKq
                                                            })
                                                        }), (0, e.jsx)("a", {
                                                            href: "https://thorchads.metaswagclub.com/",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "socials__link",
                                                            children: (0, e.jsx)(h.G, {
                                                                icon: g.Diu
                                                            })
                                                        })]
                                                    }), (0, e.jsx)("a", {
                                                        href: "#sec-multichain",
                                                        className: "link first__link-bottom",
                                                        id: "learn-more",
                                                        children: (0, e.jsxs)("div", {
                                                            children: [(0, e.jsx)("span", {
                                                                children: "Learn More"
                                                            }), "\xa0", (0, e.jsx)("svg", {
                                                                width: "14",
                                                                height: "9",
                                                                viewBox: "0 0 14 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: (0, e.jsx)("path", {
                                                                    d: "M1 1L7 7L13 1",
                                                                    stroke: "#4DBAD6",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), (0, e.jsx)("div", {
                                id: "sec-multichain",
                                className: "sec-multichain",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 t-a-c",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                children: (0, e.jsxs)($, {
                                                    children: [(0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "Cross•Chain"
                                                    }), " Made Easy"]
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsxs)("div", {
                                                className: "videos lightgallery-videos-container",
                                                children: [(0, e.jsxs)("a", {
                                                    className: "videos__video videos__video-1 lightgallery-video",
                                                    "data-src": "https://www.youtube.com/watch?v=Cfu_Ye1en30",
                                                    "data-aos": "fade-up",
                                                    children: [(0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/what-is-thorswap.jpeg",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "img",
                                                            src: "assets/img/what-is-thorswap.jpeg",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    }), (0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/play-2.png",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "icon",
                                                            src: "assets/img/play-2.png",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    })]
                                                }), (0, e.jsxs)("a", {
                                                    className: "videos__video videos__video-2 lightgallery-video",
                                                    "data-src": "https://youtu.be/BAJJSXdEXAA",
                                                    "data-aos": "fade-up",
                                                    children: [(0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/thorswap-aggregator.jpeg",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "img",
                                                            src: "assets/img/thorswap-aggregator.jpeg",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    }), (0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/play-3.png",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "icon",
                                                            src: "assets/img/play-3.png",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    })]
                                                }), (0, e.jsxs)("a", {
                                                    className: "videos__video videos__video-3 lightgallery-video",
                                                    "data-src": "https://www.youtube.com/watch?v=MxrEYDAmJt4",
                                                    "data-aos": "fade-up",
                                                    children: [(0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/thorswap-v2.jpeg",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "img",
                                                            src: "assets/img/thorswap-v2.jpeg",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    }), (0, e.jsxs)("picture", {
                                                        children: [(0, e.jsx)("source", {
                                                            srcSet: "assets/img/play-1.png",
                                                            type: "image/webp"
                                                        }), (0, e.jsx)("img", {
                                                            className: "icon",
                                                            src: "assets/img/play-1.png",
                                                            loading: "lazy",
                                                            alt: ""
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, e.jsx)(Z, {})]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "sec-aggregator",
                                className: "sec-aggregator",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-with-us",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-with-us__big-title",
                                                    children: [(0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "Swap"
                                                    }), (0, e.jsx)("br", {}), "Any Token,", (0, e.jsx)("br", {}), "Any Chain"]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-with-us__descr",
                                                    children: "THORSwap's DEX Aggregator connects liquidity across 9 blockchains and compares pricing from numerous Aggregators (1inch, Matcha) & DEXs (Uniswap, Sushiswap, Pangolin) to give you the best cross-chain swap in one click."
                                                }), (0, e.jsx)("a", {
                                                    href: "https://app.thorswap.finance/swap",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "btn-type-2 max-w-[260px] flex w-full !bg-gradient-to-r !from-cyan-500 !to-blue-500",
                                                    children: "Start Swapping"
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsx)("a", {
                                                href: "https://app.thorswap.finance/swap",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, e.jsx)("video", {
                                                    className: "w-full rounded-3xl overflow-hidden",
                                                    poster: "assets/img/swap.jpg",
                                                    autoPlay: !0,
                                                    muted: !0,
                                                    loop: !0,
                                                    playsInline: !0,
                                                    children: (0, e.jsx)("source", {
                                                        src: "assets/videos/landing_page_swap_v2.mp4",
                                                        type: "video/mp4"
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "with-us-first",
                                className: "with-us with-us-first",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row flex",
                                        children: [(0, e.jsxs)("div", {
                                            className: "flex flex-col-reverse md:flex-row",
                                            children: [(0, e.jsx)("div", {
                                                className: "col-12 col-lg-6",
                                                children: (0, e.jsxs)("div", {
                                                    className: "card-with-us",
                                                    "data-aos": "fade-up",
                                                    children: [(0, e.jsxs)("div", {
                                                        className: "card-with-us__title",
                                                        children: ["Full ", (0, e.jsx)("span", {
                                                            className: "gradiently",
                                                            children: "Self-custody"
                                                        })]
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-with-us__descr",
                                                        children: "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets"
                                                    })]
                                                })
                                            }), (0, e.jsx)("div", {
                                                className: "col-12 col-lg-6",
                                                children: (0, e.jsx)("div", {
                                                    className: "with-us__wrap-img flex justify-center -translate-y-8",
                                                    children: (0, e.jsx)("picture", {
                                                        className: "flex",
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/img/wallet.png",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "with-us__img w-[60%]",
                                                            "data-aos": "fade-up"
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsx)("div", {
                                                className: "with-us__wrap-img",
                                                children: (0, e.jsx)("picture", {
                                                    children: (0, e.jsx)("img", {
                                                        src: "assets/img/with-us-img-3.png",
                                                        loading: "lazy",
                                                        alt: "",
                                                        className: "with-us__img",
                                                        "data-aos": "fade-up"
                                                    })
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-with-us",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-with-us__title",
                                                    children: [(0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "Earn REAL Yields"
                                                    }), " on your Native Assets"]
                                                }), (0, e.jsxs)("div", {
                                                    className: "card-with-us__descr",
                                                    children: ["Provide Liquidity and Earn Yield on your Native Assets with", " ", (0, e.jsx)("span", {
                                                        className: "color-e2ebfb",
                                                        children: (0, e.jsx)("a", {
                                                            href: "https://docs.thorswap.finance/thorswap/thorswap-products/thorchain/impermanent-loss-protection",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: "Impermanent Loss Protection"
                                                        })
                                                    })]
                                                }), (0, e.jsxs)("a", {
                                                    href: "https://app.thorswap.finance/deposit",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "btn-type-2 card-with-us__btn",
                                                    children: [" ", "Deposit"]
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6 order-lg-4",
                                            children: (0, e.jsx)("div", {
                                                className: "with-us__wrap-img",
                                                children: (0, e.jsx)("picture", {
                                                    children: (0, e.jsx)("img", {
                                                        src: "assets/img/with-us-img-4.png",
                                                        loading: "lazy",
                                                        alt: "",
                                                        className: "with-us__img",
                                                        "data-aos": "fade-up"
                                                    })
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-with-us",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-with-us__title",
                                                    children: [(0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "$THOR"
                                                    }), " Value Accrual"]
                                                }), (0, e.jsxs)("div", {
                                                    className: "card-with-us__descr",
                                                    children: ["Stake $THOR token and earn", " ", (0, e.jsx)("span", {
                                                        className: "color-e2ebfb",
                                                        children: "75%"
                                                    }), " of protocol revenues, trading discounts and other community perks."]
                                                }), (0, e.jsxs)("div", {
                                                    className: "card-with-us__btns",
                                                    children: [(0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/swap/BTC.BTC_ETH.THOR-0XA5F2211B9B8170F694421F2046281775E8468044",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "btn-type-2 card-with-us__btn",
                                                        children: "Buy $THOR"
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/stake",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "btn-type-3 card-with-us__btn",
                                                        children: "Stake"
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "powerful",
                                className: "powerful",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 t-a-c",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                children: (0, e.jsxs)($, {
                                                    children: ["Giving ", (0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "You"
                                                    }), " DeFi Superpowers"]
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "Wallets +"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Robust multi-chain wallet support: Trade directly from your own wallet. Be your own bank."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/wallet",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1 ",
                                                            children: "Launch App"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-1.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "THORYield"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Stay on top of your portfolio through tracking your THORChain LPs, staking and wallet balances."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thoryield.com/dashboard",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Launch App"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-2.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "THORName"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Easily manage all of your personal wallet addresses with THORChain’s Cross-Chain Name Service."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/thorname",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Launch App"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-3.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "THORSafe"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Create and manage THORChain multi-sig wallets for enhanced self-custody and governance."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://app.thorswap.finance/thorsafe",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Launch App"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-4.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "with-us",
                                className: "with-us",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 t-a-c",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                children: (0, e.jsxs)($, {
                                                    children: ["Building ", (0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "Cross•Chain"
                                                    }), " ", "Together"]
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6 order-lg-2",
                                            children: (0, e.jsx)("div", {
                                                className: "with-us__wrap-img",
                                                children: (0, e.jsx)("picture", {
                                                    children: (0, e.jsx)("img", {
                                                        src: "assets/img/with-us-img-1.png",
                                                        loading: "lazy",
                                                        alt: "",
                                                        className: "with-us__img",
                                                        "data-aos": "fade-up"
                                                    })
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6 order-lg-1",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-with-us",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsx)("div", {
                                                    className: "card-with-us__title",
                                                    children: "Pathfinder API SDK"
                                                }), (0, e.jsx)("div", {
                                                    className: "card-with-us__descr",
                                                    children: "Our one-stop solution for devs to easily add cross-chain functionality to any product/dApp."
                                                }), (0, e.jsxs)("div", {
                                                    className: "card-with-us__btns",
                                                    children: [(0, e.jsx)("a", {
                                                        href: "https://docs.thorswap.net/",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "btn-type-2 card-with-us__btn",
                                                        children: "Learn More"
                                                    }), (0, e.jsx)("a", {
                                                        href: "mailto:contact@thorswap.finance",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "btn-type-3 card-with-us__btn",
                                                        children: "Get in touch"
                                                    })]
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6 order-lg-3",
                                            children: (0, e.jsx)("div", {
                                                className: "with-us__wrap-img",
                                                children: (0, e.jsx)("picture", {
                                                    children: (0, e.jsx)("img", {
                                                        src: "assets/img/with-us-img-2.png",
                                                        loading: "lazy",
                                                        alt: "",
                                                        className: "with-us__img",
                                                        "data-aos": "fade-up"
                                                    })
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6 order-lg-4",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-with-us",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsx)("div", {
                                                    className: "card-with-us__title",
                                                    children: "THORNode Tools"
                                                }), (0, e.jsx)("div", {
                                                    className: "card-with-us__descr",
                                                    children: "Dedicated interface suite for managing Bonding on THORChain."
                                                }), (0, e.jsx)("a", {
                                                    href: "https://app.thorswap.finance/node-manager",
                                                    className: "btn-type-3 card-with-us__btn",
                                                    role: "link",
                                                    "aria-disabled": !0,
                                                    children: "Learn More"
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "fast-growing",
                                className: "fast-growing",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 t-a-c",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                children: (0, e.jsxs)($, {
                                                    children: ["Join our community of", " ", (0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "THORChads"
                                                    })]
                                                })
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "Discord"
                                                    }), (0, e.jsxs)("div", {
                                                        className: "card-trigger__descr",
                                                        children: ["Join our Discord Community and engage with", " ", (0, e.jsx)("span", {
                                                            className: "color-e2ebfb",
                                                            children: "30,000+"
                                                        }), " members. Our Support Desk channel offers 24/7 technical support."]
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://discord.gg/thorswap",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Join Discord"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-5.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "YouTube"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Stay up-to-date with product release info, tutorials and more on our community YouTube channel."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://www.youtube.com/c/THORSwapCommunity",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Watch now"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-6.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "Documentation"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Official THORSwap Documentation, tutorials and developers docs."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://docs.thorswap.finance/thorswap/",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Visit Docs"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-7.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            children: (0, e.jsxs)("div", {
                                                className: "card-trigger",
                                                "data-aos": "fade-up",
                                                children: [(0, e.jsxs)("div", {
                                                    className: "card-trigger__wrap-text",
                                                    children: [(0, e.jsx)("div", {
                                                        className: "card-trigger__title",
                                                        children: "Feedback"
                                                    }), (0, e.jsx)("div", {
                                                        className: "card-trigger__descr",
                                                        children: "Submit bug reports and provide feedback to help us build the best Cross-Chain DEX."
                                                    }), (0, e.jsx)("a", {
                                                        href: "https://thorswap.canny.io/",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "card-trigger__btn",
                                                        children: (0, e.jsx)("button", {
                                                            className: "btn-type-1",
                                                            children: "Submit Feedback"
                                                        })
                                                    })]
                                                }), (0, e.jsx)("div", {
                                                    className: "card-trigger__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/trigger-img-8.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-trigger__img"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "sec-logos",
                                className: "sec-logos",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                className: "sec-logos__title",
                                                children: "We take Security Seriously."
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsxs)("div", {
                                                className: "sec-logos__list",
                                                children: [(0, e.jsx)("a", {
                                                    href: "https://github.com/HalbornSecurity/PublicReports/blob/master/Solidity%20Smart%20Contract%20Audits/THORSwap_Aggregators_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/img/logo-halborn.png",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "sec-logos__logo",
                                                            "data-aos": "fade-up"
                                                        })
                                                    })
                                                }), (0, e.jsx)("a", {
                                                    href: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-THORSwap-v1.0.pdf",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/img/peckshield.png",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "sec-logos__logo",
                                                            "data-aos": "fade-up"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsx)("div", {
                                                className: "sec-logos__spacer"
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsx)("div", {
                                                className: "sec-logos__title",
                                                "data-aos": "fade-up",
                                                children: "Proudly Backed by Industry Leaders"
                                            })
                                        }), (0, e.jsx)("div", {
                                            className: "col-12",
                                            children: (0, e.jsx)("div", {
                                                className: "grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16",
                                                children: r.map(function(a) {
                                                    return (0, e.jsx)(O, (0, d.Z)({}, a), a.name)
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "sec-about",
                                className: "sec-about",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-12 t-a-c",
                                            children: (0, e.jsx)("div", {
                                                "data-aos": "fade-up",
                                                children: (0, e.jsxs)($, {
                                                    className: "m-b-0",
                                                    children: ["Learn More", (0, e.jsx)("br", {}), "about ", (0, e.jsx)("span", {
                                                        className: "gradiently",
                                                        children: "THORSwap"
                                                    })]
                                                })
                                            })
                                        }), (0, e.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, e.jsx)(S, {}), (0, e.jsx)(W, {})]
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("div", {
                                id: "pre-footer",
                                className: "pre-footer",
                                children: (0, e.jsx)("div", {
                                    className: "container",
                                    children: (0, e.jsxs)("div", {
                                        className: "row",
                                        children: [(0, e.jsxs)("div", {
                                            className: "col-12 col-lg-6",
                                            "data-aos": "fade-up",
                                            children: [(0, e.jsx)("div", {
                                                className: "text-title",
                                                children: "Merch Store"
                                            }), (0, e.jsxs)("div", {
                                                className: "card-visit",
                                                children: [(0, e.jsx)("a", {
                                                    href: "https://thorchads.metaswagclub.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "btn-type-3 card-visit__btn",
                                                    children: "Shop"
                                                }), (0, e.jsx)("div", {
                                                    className: "card-visit__wrap-img",
                                                    children: (0, e.jsx)("picture", {
                                                        children: (0, e.jsx)("img", {
                                                            src: "assets/svg/watch.svg",
                                                            loading: "lazy",
                                                            alt: "",
                                                            className: "card-visit__img"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0, e.jsx)("div", {
                                            className: "col-12 col-lg-6",
                                            "data-aos": "fade-up",
                                            children: (0, e.jsx)("div", {
                                                className: "ml-embedded",
                                                "data-form": "V9MWEn"
                                            })
                                        })]
                                    })
                                })
                            }), (0, e.jsx)("footer", {
                                id: "footer",
                                className: "footer",
                                children: (0, e.jsxs)("div", {
                                    className: "container container--big footer__container",
                                    children: [(0, e.jsxs)("div", {
                                        className: "footer__col-1",
                                        children: [(0, e.jsxs)("a", {
                                            href: "#",
                                            className: "footer__logo relative",
                                            "data-aos": "fade-up",
                                            children: [(0, e.jsx)("div", {
                                                className: "rounded-full bg-cyan bg-opacity-30 left-[-10git apx] top-[-5px] absolute w-16 h-16 transition-all blur-[15px] dark:blur-md -z-[1]"
                                            }), (0, e.jsx)("picture", {
                                                className: "h-12",
                                                children: (0, e.jsx)("img", {
                                                    src: "assets/img/header_logo.png",
                                                    loading: "lazy",
                                                    alt: "",
                                                    className: "h-12"
                                                })
                                            })]
                                        }), (0, e.jsx)("div", {
                                            className: "footer__descr",
                                            "data-aos": "fade-up",
                                            children: "THORSwap is the leading decentralized exchange (DEX) powered by multi-chain THORChain. Perform cross-chain swaps in a permissionless, trustless, and non-custodial manner."
                                        }), (0, e.jsxs)("div", {
                                            className: "footer__socials socials",
                                            "data-aos": "fade-up",
                                            children: [(0, e.jsx)("a", {
                                                href: "https://discord.gg/thorswap",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fab fa-discord"
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "https://twitter.com/thorswap",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "https://www.youtube.com/c/THORSwapCommunity",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "#https://docs.thorswap.finance/thorswap/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fas fa-book-open"
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "https://t.me/thorswap_ann",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fab fa-telegram-plane"
                                                })
                                            }), (0, e.jsx)("a", {
                                                href: "https://thorchads.metaswagclub.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "socials__link",
                                                children: (0, e.jsx)("i", {
                                                    className: "fas fa-shopping-bag"
                                                })
                                            })]
                                        })]
                                    }), (0, e.jsxs)("div", {
                                        className: "footer__col-2",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-title m-b-32",
                                            "data-aos": "fade-up",
                                            children: "Products"
                                        }), (0, e.jsxs)("div", {
                                            className: "footer__links",
                                            children: [(0, e.jsx)("a", {
                                                href: "https://thoryield.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "THORYield"
                                            }), (0, e.jsx)("a", {
                                                href: "https://thorchads.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "THORChads"
                                            }), (0, e.jsx)("a", {
                                                href: "https://app.thorswap.finance/thorname",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "THORNames"
                                            }), (0, e.jsx)("a", {
                                                role: "link",
                                                "aria-disabled": !0,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "API & SDK - Coming Soon"
                                            }), (0, e.jsx)("a", {
                                                href: "https://thorchads.metaswagclub.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Merch"
                                            })]
                                        })]
                                    }), (0, e.jsxs)("div", {
                                        className: "footer__col-3",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-title m-b-32",
                                            "data-aos": "fade-up",
                                            children: "App"
                                        }), (0, e.jsxs)("div", {
                                            className: "footer__links",
                                            children: [(0, e.jsx)("a", {
                                                href: "https://app.thorswap.finance/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Mainnet"
                                            }), (0, e.jsx)("a", {
                                                href: "https://stagenet.thorswap.finance/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Stagenet"
                                            }), (0, e.jsx)("a", {
                                                href: "https://testnet.thorswap.finance/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Testnet"
                                            })]
                                        })]
                                    }), (0, e.jsxs)("div", {
                                        className: "footer__col-4",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-title m-b-32",
                                            "data-aos": "fade-up",
                                            children: "Community"
                                        }), (0, e.jsxs)("div", {
                                            className: "footer__links",
                                            children: [(0, e.jsx)("a", {
                                                href: "https://discord.gg/thorswap",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Discord"
                                            }), (0, e.jsx)("a", {
                                                href: "https://twitter.com/thorswap?s=21&t=JFS-0qEudRhjcgcIamfRFw",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Twitter"
                                            }), (0, e.jsx)("a", {
                                                href: "https://t.me/thorswap_ann",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Telegram"
                                            }), (0, e.jsx)("a", {
                                                href: "https://thorswap.canny.io/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Feedback"
                                            })]
                                        })]
                                    }), (0, e.jsxs)("div", {
                                        className: "footer__col-5",
                                        children: [(0, e.jsx)("div", {
                                            className: "col-title m-b-32",
                                            "data-aos": "fade-up",
                                            children: "Learn"
                                        }), (0, e.jsxs)("div", {
                                            className: "footer__links",
                                            children: [(0, e.jsx)("a", {
                                                href: "https://www.youtube.com/c/THORSwapCommunity",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "YouTube"
                                            }), (0, e.jsx)("a", {
                                                href: "https://medium.com/@thorswap",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Medium"
                                            }), (0, e.jsx)("a", {
                                                href: "https://docs.thorswap.finance/thorswap/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "link",
                                                "data-aos": "fade-up",
                                                children: "Documentation"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                }
        }
    },
    function(a) {
        a.O(0, [976, 948, 531, 774, 888, 179], function() {
            var b;
            return a(a.s = 8312)
        }), _N_E = a.O()
    }
])