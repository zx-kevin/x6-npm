import { defineComponent as h, openBlock as _, createElementBlock as f, createElementVNode as g, inject as y, computed as m, toRefs as C, Fragment as x, renderList as b, unref as w, createBlock as k } from "vue";
import { contextSymbol as E } from "./graph.js";
import { Graph as D } from "./graph.js";
import "@antv/x6";
window._iconfont_svg_string_3981950 = '<svg><symbol id="icon-dingwei" viewBox="0 0 1024 1024"><path d="M512 512m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z"  ></path><path d="M960 480h-33.632C910.752 276.16 747.84 113.248 544 97.632V64a32 32 0 1 0-64 0v33.632C276.16 113.248 113.248 276.16 97.632 480H64a32 32 0 0 0 0 64h33.632C113.248 747.84 276.16 910.752 480 926.368V960a32 32 0 1 0 64 0v-33.632C747.84 910.752 910.752 747.84 926.368 544H960a32 32 0 1 0 0-64zM544 862.368V800a32 32 0 1 0-64 0v62.368C311.424 847.104 176.896 712.576 161.632 544H224a32 32 0 1 0 0-64H161.632C176.896 311.424 311.424 176.896 480 161.632V224a32 32 0 0 0 64 0V161.632c168.576 15.296 303.104 149.792 318.368 318.368H800a32 32 0 1 0 0 64h62.368c-15.264 168.576-149.792 303.104-318.368 318.368z"  ></path></symbol></svg>', function(o) {
  var t = (t = document.getElementsByTagName("script"))[t.length - 1], l = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
  if (!t) {
    var c, i, s, r, d, u = function(n, e) {
      e.parentNode.insertBefore(n, e);
    };
    if (l && !o.__iconfont__svg__cssinject__) {
      o.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (n) {
        console && console.log(n);
      }
    }
    c = function() {
      var n, e = document.createElement("div");
      e.innerHTML = o._iconfont_svg_string_3981950, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (n = document.body).firstChild ? u(e, n.firstChild) : n.appendChild(e));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (i = function() {
      document.removeEventListener("DOMContentLoaded", i, !1), c();
    }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (s = c, r = o.document, d = !1, p(), r.onreadystatechange = function() {
      r.readyState == "complete" && (r.onreadystatechange = null, a());
    });
  }
  function a() {
    d || (d = !0, s());
  }
  function p() {
    try {
      r.documentElement.doScroll("left");
    } catch {
      return void setTimeout(p, 50);
    }
    a();
  }
}(window);
const v = (o, l) => {
  const t = o.__vccOpts || o;
  for (const [c, i] of l)
    t[c] = i;
  return t;
}, $ = h({
  props: {
    icon: {
      type: String,
      required: !0
    }
  }
}), B = {
  class: "icon",
  "aria-hidden": "true"
}, j = ["xlink:href"];
function L(o, l, t, c, i, s) {
  return _(), f("svg", B, [
    g("use", {
      "xlink:href": `#icon-${o.icon}`
    }, null, 8, j)
  ]);
}
const M = /* @__PURE__ */ v($, [["render", L]]);
const H = { class: "x6-data-driven-funs" }, V = {
  name: "Funs"
}, O = /* @__PURE__ */ Object.assign(V, {
  props: {
    types: {
      type: Array,
      default: () => []
    }
  },
  setup(o) {
    const l = o, t = y(E), c = m(() => t && t.graph || null), { types: i } = C(l), s = [
      {
        type: "center",
        icon: "dingwei",
        title: "中心定位"
      }
    ], r = m(() => s && i.value.length ? s.filter((a) => i.value.includes(a.type)) : s || []);
    function d(a) {
      switch (a) {
        case "center":
          u();
          break;
      }
    }
    function u() {
      c.value && c.value.centerContent();
    }
    return (a, p) => (_(), f("div", H, [
      (_(!0), f(x, null, b(w(r), (n, e) => (_(), k(M, {
        key: `type_${e}`,
        icon: n.icon,
        title: n.title,
        onClick: (S) => d(n.type)
      }, null, 8, ["icon", "title", "onClick"]))), 128))
    ]));
  }
}), N = /* @__PURE__ */ v(O, [["__scopeId", "data-v-f093fcf9"]]);
export {
  N as Funs,
  D as Graph,
  E as contextSymbol
};
