<template>
  <div class="container">
    <div>child1</div>
    <div>插槽内容如下：</div>
    <slot>Slot中的默认值</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container{
}
</style>
