import { defineComponent as s, ref as d, shallowReactive as l, provide as p, onMounted as h, createVNode as o } from "vue";
import { Graph as f } from "@antv/x6";
const m = {
  "x6-data-driven": "_x6-data-driven_c6tag_1"
}, u = String(Symbol("x6ContextSymbol")), y = /* @__PURE__ */ s({
  name: "x6Graph",
  inheritAttrs: !1,
  setup(v, {
    attrs: i,
    expose: c,
    slots: a
  }) {
    const {
      ...e
    } = i, t = d(), r = l({
      graph: null
    });
    return p(u, r), c(r), h(() => {
      Object.keys(e).forEach((n) => e[n] === "" && (e[n] = !0)), t.value && (r.graph = new f({
        container: t.value,
        ...e
      }));
    }), () => o("div", {
      className: m["x6-data-driven"]
    }, [o("div", {
      ref: t,
      style: {
        height: "100%"
      }
    }, [a.default && a.default()])]);
  }
});
export {
  y as Graph,
  u as contextSymbol
};
