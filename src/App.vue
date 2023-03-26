<template>
  <graph grid snapline keyboard clipboard ref="gRef"></graph>
</template>

<script setup>
import { Graph } from '@/lib/x6-data-driven'
import { ref, onMounted } from 'vue'

const gRef = ref()

onMounted(() => {
  const { graph } = gRef.value
  graph.addNode({
    width: 100,
    height: 50,
    label: 'hello'
  })

  graph.centerContent()
})
</script>

<style lang="scss" scoped></style>
