<template>
  <div class="container">
    {{ $route.params.id }}
    <br>
    通过prams传递的id  显示在地址栏
    {{ userID }}
    （刷新就没了）没有显示在地址栏
    <br>
    通过query传递  显示在地址栏
    {{ queryID }}
  </div>
</template>

<script>
export default {
  props: {
    userID: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {

    }
  },
  computed: {
    queryID() {
      return this.$route.query.queryID
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
