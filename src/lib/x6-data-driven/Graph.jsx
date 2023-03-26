import { defineComponent, ref } from 'vue'

export const Graph = defineComponent({
  name: 'x6Graph',
  // inheritAttrs: false,
  setup() {
    const container = ref()

    return () => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          its x6 component
          <div ref={container}></div>
        </div>
      )
    }
  }
})
