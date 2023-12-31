!function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}),
    "function" == typeof define && define.amd && define("hljs", [], function() {
        return window.hljs
    }))
}(function(e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index
    }
    function a(e) {
        return /no-?highlight|plain|text/.test(e)
    }
    function i(e) {
        var n, t, r, i = e.className + " ";
        if (i += e.parentNode ? e.parentNode.className : "",
        t = /\blang(?:uage)?-([\w-]+)\b/.exec(i))
            return E(t[1]) ? t[1] : "no-highlight";
        for (i = i.split(/\s+/),
        n = 0,
        r = i.length; r > n; n++)
            if (E(i[n]) || a(i[n]))
                return i[n]
    }
    function o(e, n) {
        var t, r = {};
        for (t in e)
            r[t] = e[t];
        if (n)
            for (t in n)
                r[t] = n[t];
        return r
    }
    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling)
                3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
                    event: "start",
                    offset: a,
                    node: i
                }),
                a = r(i, a),
                t(i).match(/br|hr|img|input/) || n.push({
                    event: "stop",
                    offset: a,
                    node: i
                }));
            return a
        }(e, 0),
        n
    }
    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
        }
        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }
            f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }
        function u(e) {
            f += "</" + t(e) + ">"
        }
        function c(e) {
            ("start" == e.event ? o : u)(e.node)
        }
        for (var s = 0, f = "", l = []; e.length || r.length; ) {
            var g = i();
            if (f += n(a.substr(s, g[0].offset - s)),
            s = g[0].offset,
            g == e) {
                l.reverse().forEach(u);
                do
                    c(g.splice(0, 1)[0]),
                    g = i();
                while (g == e && g.length && g[0].offset == s);
                l.reverse().forEach(o)
            } else
                "start" == g[0].event ? l.push(g[0].node) : l.pop(),
                c(g.splice(0, 1)[0])
        }
        return f + n(a.substr(s))
    }
    function s(e) {
        function n(e) {
            return e && e.source || e
        }
        function t(t, r) {
            return new RegExp(n(t),"m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }
        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0,
                a.k = a.k || a.bK,
                a.k) {
                    var u = {}
                      , c = function(n, t) {
                        e.cI && (t = t.toLowerCase()),
                        t.split(" ").forEach(function(e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                        c(e, a.k[e])
                    }),
                    a.k = u
                }
                a.lR = t(a.l || /\b\w+\b/, !0),
                i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"),
                a.b || (a.b = /\B|\b/),
                a.bR = t(a.b),
                a.e || a.eW || (a.e = /\B|\b/),
                a.e && (a.eR = t(a.e)),
                a.tE = n(a.e) || "",
                a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)),
                a.i && (a.iR = t(a.i)),
                void 0 === a.r && (a.r = 1),
                a.c || (a.c = []);
                var s = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(n) {
                        s.push(o(e, n))
                    }) : s.push("self" == e ? a : e)
                }),
                a.c = s,
                a.c.forEach(function(e) {
                    r(e, a)
                }),
                a.starts && r(a.starts, i);
                var f = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = f.length ? t(f.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }
    function f(e, t, a, i) {
        function o(e, n) {
            for (var t = 0; t < n.c.length; t++)
                if (r(n.c[t].bR, e))
                    return n.c[t]
        }
        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent; )
                    e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }
        function c(e, n) {
            return !a && r(n.iR, e)
        }
        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }
        function h(e, n, t, r) {
            var a = r ? "" : w.classPrefix
              , i = '<span class="' + a
              , o = t ? "" : "</span>";
            return i += e + '">',
            i + n + o
        }
        function p() {
            if (!L.k)
                return n(B);
            var e = ""
              , t = 0;
            L.lR.lastIndex = 0;
            for (var r = L.lR.exec(B); r; ) {
                e += n(B.substr(t, r.index - t));
                var a = g(L, r);
                a ? (y += a[1],
                e += h(a[0], n(r[0]))) : e += n(r[0]),
                t = L.lR.lastIndex,
                r = L.lR.exec(B)
            }
            return e + n(B.substr(t))
        }
        function d() {
            if (L.sL && !x[L.sL])
                return n(B);
            var e = L.sL ? f(L.sL, B, !0, M[L.sL]) : l(B);
            return L.r > 0 && (y += e.r),
            "continuous" == L.subLanguageMode && (M[L.sL] = e.top),
            h(e.language, e.value, !1, !0)
        }
        function b() {
            return void 0 !== L.sL ? d() : p()
        }
        function v(e, t) {
            var r = e.cN ? h(e.cN, "", !0) : "";
            e.rB ? (k += r,
            B = "") : e.eB ? (k += n(t) + r,
            B = "") : (k += r,
            B = t),
            L = Object.create(e, {
                parent: {
                    value: L
                }
            })
        }
        function m(e, t) {
            if (B += e,
            void 0 === t)
                return k += b(),
                0;
            var r = o(t, L);
            if (r)
                return k += b(),
                v(r, t),
                r.rB ? 0 : t.length;
            var a = u(L, t);
            if (a) {
                var i = L;
                i.rE || i.eE || (B += t),
                k += b();
                do
                    L.cN && (k += "</span>"),
                    y += L.r,
                    L = L.parent;
                while (L != a.parent);
                return i.eE && (k += n(t)),
                B = "",
                a.starts && v(a.starts, ""),
                i.rE ? 0 : t.length
            }
            if (c(t, L))
                throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"');
            return B += t,
            t.length || 1
        }
        var N = E(e);
        if (!N)
            throw new Error('Unknown language: "' + e + '"');
        s(N);
        var R, L = i || N, M = {}, k = "";
        for (R = L; R != N; R = R.parent)
            R.cN && (k = h(R.cN, "", !0) + k);
        var B = ""
          , y = 0;
        try {
            for (var C, j, I = 0; ; ) {
                if (L.t.lastIndex = I,
                C = L.t.exec(t),
                !C)
                    break;
                j = m(t.substr(I, C.index - I), C[0]),
                I = C.index + j
            }
            for (m(t.substr(I)),
            R = L; R.parent; R = R.parent)
                R.cN && (k += "</span>");
            return {
                r: y,
                value: k,
                language: e,
                top: L
            }
        } catch (O) {
            if (-1 != O.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: n(t)
                };
            throw O
        }
    }
    function l(e, t) {
        t = t || w.languages || Object.keys(x);
        var r = {
            r: 0,
            value: n(e)
        }
          , a = r;
        return t.forEach(function(n) {
            if (E(n)) {
                var t = f(n, e, !1);
                t.language = n,
                t.r > a.r && (a = t),
                t.r > r.r && (a = r,
                r = t)
            }
        }),
        a.language && (r.second_best = a),
        r
    }
    function g(e) {
        return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
            return n.replace(/\t/g, w.tabReplace)
        })),
        w.useBR && (e = e.replace(/\n/g, "<br>")),
        e
    }
    function h(e, n, t) {
        var r = n ? R[n] : t
          , a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"),
        -1 === e.indexOf(r) && a.push(r),
        a.join(" ").trim()
    }
    function p(e) {
        var n = i(e);
        if (!a(n)) {
            var t;
            w.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent
              , o = n ? f(n, r, !0) : l(r)
              , s = u(t);
            if (s.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = o.value,
                o.value = c(s, u(p), r)
            }
            o.value = g(o.value),
            e.innerHTML = o.value,
            e.className = h(e.className, n, o.language),
            e.result = {
                language: o.language,
                re: o.r
            },
            o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.r
            })
        }
    }
    function d(e) {
        w = o(w, e)
    }
    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, p)
        }
    }
    function v() {
        addEventListener("DOMContentLoaded", b, !1),
        addEventListener("load", b, !1)
    }
    function m(n, t) {
        var r = x[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            R[e] = n
        })
    }
    function N() {
        return Object.keys(x)
    }
    function E(e) {
        return x[e] || x[R[e]]
    }
    var w = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    }
      , x = {}
      , R = {};
    return e.highlight = f,
    e.highlightAuto = l,
    e.fixMarkup = g,
    e.highlightBlock = p,
    e.configure = d,
    e.initHighlighting = b,
    e.initHighlightingOnLoad = v,
    e.registerLanguage = m,
    e.listLanguages = N,
    e.getLanguage = E,
    e.inherit = o,
    e.IR = "[a-zA-Z]\\w*",
    e.UIR = "[a-zA-Z_]\\w*",
    e.NR = "\\b\\d+(\\.\\d+)?",
    e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    e.BNR = "\\b(0b[01]+)",
    e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    },
    e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    },
    e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    },
    e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        }, r || {});
        return a.c.push(e.PWM),
        a.c.push({
            cN: "doctag",
            bK: "TODO FIXME NOTE BUG XXX",
            r: 0
        }),
        a
    }
    ,
    e.CLCM = e.C("//", "$"),
    e.CBCM = e.C("/\\*", "\\*/"),
    e.HCM = e.C("#", "$"),
    e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    },
    e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    },
    e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    },
    e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    },
    e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    },
    e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    },
    e
});
hljs.registerLanguage("julia", function(r) {
    var e = {
        keyword: "in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export finally for function global if immutable import importall let local macro module quote return try type typealias using while",
        literal: "true false ANY ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e eu eulergamma golden im nothing pi γ π φ",
        built_in: "ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip"
    }
      , t = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*"
      , o = {
        l: t,
        k: e
    }
      , n = {
        cN: "type-annotation",
        b: /::/
    }
      , a = {
        cN: "subtype",
        b: /<:/
    }
      , i = {
        cN: "number",
        b: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
        r: 0
    }
      , l = {
        cN: "char",
        b: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    }
      , c = {
        cN: "subst",
        b: /\$\(/,
        e: /\)/,
        k: e
    }
      , u = {
        cN: "variable",
        b: "\\$" + t
    }
      , d = {
        cN: "string",
        c: [r.BE, c, u],
        v: [{
            b: /\w*"/,
            e: /"\w*/
        }, {
            b: /\w*"""/,
            e: /"""\w*/
        }]
    }
      , g = {
        cN: "string",
        c: [r.BE, c, u],
        b: "`",
        e: "`"
    }
      , s = {
        cN: "macrocall",
        b: "@" + t
    }
      , S = {
        cN: "comment",
        v: [{
            b: "#=",
            e: "=#",
            r: 10
        }, {
            b: "#",
            e: "$"
        }]
    };
    return o.c = [i, l, n, a, d, g, s, S, r.HCM],
    c.c = o.c,
    o
});
hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            }, {
                b: "\\b(0[oO][0-7]+)"
            }, {
                b: e.CNR
            }],
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + e.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [e.ASM, e.QSM]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }]
    }
});
hljs.registerLanguage("http", function(t) {
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        }]
    }
});
hljs.registerLanguage("css", function(e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*"
      , a = {
        cN: "function",
        b: c + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    }
      , r = {
        cN: "rule",
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                cN: "value",
                eW: !0,
                eE: !0,
                c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "hexcolor",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "important",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, r, {
            cN: "id",
            b: /\#[A-Za-z0-9_-]+/
        }, {
            cN: "class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "attr_selector",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [a, e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "tag",
            b: c,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, r]
        }]
    }
});
hljs.registerLanguage("cs", function(e) {
    var r = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield"
      , t = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: r,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "xmlDocTag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "<!--|-->"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, e.ASM, e.QSM, e.CNM, {
            bK: "class interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [{
                cN: "title",
                b: "[a-zA-Z](\\.?\\w)*",
                r: 0
            }, e.CLCM, e.CBCM]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: r,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: r,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
});
hljs.registerLanguage("cpp", function(t) {
    var e = {
        cN: "keyword",
        b: "[a-z\\d_]*_t"
    }
      , r = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: r,
        i: "</",
        c: [e, t.CLCM, t.CBCM, {
            cN: "string",
            v: [t.inherit(t.QSM, {
                b: '((u8?|U)|L)?"'
            }), {
                b: '(u8?|U)?R"',
                e: '"',
                c: [t.BE]
            }, {
                b: "'\\\\?.",
                e: "'",
                i: "."
            }]
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, t.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [{
                b: /\\\n/,
                r: 0
            }, {
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            }, t.CLCM]
        }, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: r,
            c: ["self", e]
        }, {
            b: t.IR + "::",
            k: r
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + t.IR + "\\s+)+" + t.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: r,
            c: [{
                b: t.IR + "\\s*\\(",
                rB: !0,
                c: [t.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: r,
                r: 0,
                c: [t.CBCM]
            }, t.CLCM, t.CBCM]
        }]
    }
});
hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|	)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            }]
        }]
    }
});
hljs.registerLanguage("python", function(e) {
    var r = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    }
      , b = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [r],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [r],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, e.ASM, e.QSM]
    }
      , l = {
        cN: "number",
        r: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: e.CNR + "[lLjJ]?"
        }]
    }
      , c = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", r, l, b]
    };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [r, l, b, e.HCM, {
            v: [{
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, c]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("makefile", function(e) {
    var a = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
    };
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [a]
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [e.QSM, a]
        }]
    }
});
hljs.registerLanguage("java", function(e) {
    var a = e.UIR + "(<" + e.UIR + ">)?"
      , t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private"
      , c = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?"
      , r = {
        cN: "number",
        b: c,
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: t,
        i: /<\//,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, r, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("matlab", function(e) {
    var a = [e.CNM, {
        cN: "string",
        b: "'",
        e: "'",
        c: [e.BE, {
            b: "''"
        }]
    }]
      , s = {
        r: 0,
        c: [{
            cN: "operator",
            b: /'['\.]*/
        }]
    };
    return {
        k: {
            keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
            built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
        },
        i: '(//|"|#|/\\*|\\s+/\\w+)',
        c: [{
            cN: "function",
            bK: "function",
            e: "$",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)"
            }, {
                cN: "params",
                b: "\\[",
                e: "\\]"
            }]
        }, {
            b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
            rB: !0,
            r: 0,
            c: [{
                b: /[a-zA-Z_][a-zA-Z_0-9]*/,
                r: 0
            }, s.c[0]]
        }, {
            cN: "matrix",
            b: "\\[",
            e: "\\]",
            c: a,
            r: 0,
            starts: s
        }, {
            cN: "cell",
            b: "\\{",
            e: /}/,
            c: a,
            r: 0,
            starts: s
        }, {
            b: /\)/,
            r: 0,
            starts: s
        }, e.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.C("\\%", "$")].concat(a)
    }
});
hljs.registerLanguage("xml", function(t) {
    var e = "[A-Za-z0-9\\._:-]+"
      , s = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    }
      , c = {
        eW: !0,
        i: /</,
        r: 0,
        c: [s, {
            cN: "attribute",
            b: e,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                c: [s],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, t.C("<!--", "-->", {
            r: 10
        }), {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [c],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [c],
            starts: {
                e: "</script>",
                rE: !0,
                sL: ""
            }
        }, s, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, c]
        }]
    }
});
hljs.registerLanguage("bash", function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)}/
        }]
    }
      , s = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        }]
    }
      , a = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, e.NM, s, a, t]
    }
});
hljs.registerLanguage("cmake", function(e) {
    return {
        aliases: ["cmake.in"],
        cI: !0,
        k: {
            keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or",
            operator: "equal less greater strless strgreater strequal matches"
        },
        c: [{
            cN: "envvar",
            b: "\\${",
            e: "}"
        }, e.HCM, e.QSM, e.NM]
    }
});
hljs.registerLanguage("json", function(e) {
    var t = {
        literal: "true false null"
    }
      , i = [e.QSM, e.CNM]
      , l = {
        cN: "value",
        e: ",",
        eW: !0,
        eE: !0,
        c: i,
        k: t
    }
      , c = {
        b: "{",
        e: "}",
        c: [{
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: !0,
            eE: !0,
            c: [e.BE],
            i: "\\n",
            starts: l
        }],
        i: "\\S"
    }
      , n = {
        b: "\\[",
        e: "\\]",
        c: [e.inherit(l, {
            cN: null
        })],
        i: "\\S"
    };
    return i.splice(i.length, 0, c, n),
    {
        c: i,
        k: t,
        i: "\\S"
    }
});
