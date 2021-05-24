<template>
  <div class="container">
    User页面接收到的参数, {{ $route.params.id }}
    通过 $route.params.id 获取
    <br>
    在计算属性中获取
    {{ userId }}
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    userId() {
      return this.$route.params.id
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
