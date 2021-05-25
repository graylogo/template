<template>
  <div class="container">
    <h1>404!</h1>
    <el-button type="primary" @click="$router.push('/')">
      返回主页
    </el-button>
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
h1{
    font-size: 120px;
}
</style>
