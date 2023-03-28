<template>
  <div class="x6-data-driven-funs">
    <Icon
      v-for="(item, index) in typesFormatter"
      :key="`type_${index}`"
      :icon="item.icon"
      :title="item.title"
      @click="handleBtn(item.type)"
    ></Icon>
  </div>
</template>

<script>
export default {
  name: 'Funs'
}
</script>

<script setup>
import { computed, inject, toRefs } from 'vue'
import Icon from '../icon/index.vue'
import { contextSymbol } from '../../index'

const graphInject = inject(contextSymbol)
const graph = computed(() => (graphInject && graphInject.graph) || null)

const props = defineProps({
  types: {
    type: Array,
    default: () => []
  }
})
const { types } = toRefs(props)

const funsMap = [
  {
    type: 'center',
    icon: 'dingwei',
    title: '中心定位'
  }
]
const typesFormatter = computed(() => {
  return funsMap && types.value.length
    ? funsMap.filter((item) => types.value.includes(item.type))
    : funsMap || []
})

function handleBtn(type) {
  switch (type) {
    case 'center':
      handleCenter()
      break
  }
}

function handleCenter() {
  if (!graph.value) return
  graph.value.centerContent()
}
</script>

<style lang="scss" scoped>
.x6-data-driven-funs {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 1;

  .icon {
    width: 30px;
    height: 30px;
    fill: rgba(0, 0, 0, 0.5);
  }
}
</style>
