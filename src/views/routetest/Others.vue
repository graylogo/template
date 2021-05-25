<template>
  <div class="container">
    通过在路由配置中添加函数的prop来传参{{ queryID }}
    <br>
    注意，要实现子路由，即路由前面自动加上他的父级路由，那么前面不能加斜杠 /
  </div>
</template>

<script>
export default {
  props: {
    queryID: {
      type: [Number, String],
      default: 0
    }
  },
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

</style>
