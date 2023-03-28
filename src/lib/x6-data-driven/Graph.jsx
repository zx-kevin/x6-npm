import { defineComponent, ref, shallowReactive, provide, onMounted, computed } from 'vue'
import { Graph as X6Graph } from '@antv/x6'

import styles from './graph.module.scss'

export const contextSymbol = String(Symbol('x6ContextSymbol'))

export const Graph = defineComponent({
  name: 'x6Graph',
  inheritAttrs: false,
  setup(props, { attrs, expose, slots }) {
    const { ...other } = attrs
    const container = ref()
    const context = shallowReactive({ graph: null })
    provide(contextSymbol, context)
    expose(context)

    onMounted(() => {
      // options
      Object.keys(other).forEach((key) => other[key] === '' && (other[key] = true))

      if (container.value)
        context.graph = new X6Graph({
          container: container.value,
          ...other
        })
    })

    return () => {
      return (
        <div className={styles['x6-data-driven']}>
          <div ref={container} style={{ height: '100%' }}>
            {slots.default && slots.default()}
          </div>
        </div>
      )
    }
  }
})
