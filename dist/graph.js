import { defineComponent as r, ref as n, createVNode as e, createTextVNode as o } from "vue";
const a = /* @__PURE__ */ r({
  name: "x6Graph",
  inheritAttrs: !1,
  setup() {
    const t = n();
    return () => e("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "relative"
      }
    }, [o("its x6 component"), e("div", {
      ref: t
    }, null)]);
  }
});
export {
  a as Graph
};
