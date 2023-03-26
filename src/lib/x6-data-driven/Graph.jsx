import { defineComponent, ref, shallowReactive, provide, onMounted, computed } from 'vue'
import { Graph as X6Graph } from '@antv/x6'

import styles from './graph.module.scss'
import { getCurrentInstance } from '@vue/runtime-core'

export const contextSymbol = String(Symbol('x6ContextSymbol'))

export const Graph = defineComponent({
  name: 'x6Graph',
  inheritAttrs: false,
  setup(props, { attrs, expose }) {
    const { ...other } = attrs
    const container = ref()
    const context = shallowReactive({ graph: null })
    provide(contextSymbol, context)
    expose(context)

    onMounted(() => {
      // options
      Object.keys(other).forEach((key) => other[key] === '' && (other[key] = true))

      console.log('1', container)

      const size = computed(() => ({
        width: container.value.clientWidth,
        height: container.value.clientHeight
      }))

      console.log('2', {
        container: container.value,
        autoResize: true,
        width: size.value.width,
        height: size.value.height,
        ...other
      })
      if (container.value)
        context.graph = new X6Graph({
          container: container.value,
          autoResize: true,
          width: size.value.width,
          height: size.value.height,
          ...other
        })
    })

    return () => {
      return (
        <div className={styles['x6-data-driven']}>
          <div ref={container}></div>
        </div>
      )
    }
  }
})
