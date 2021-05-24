<template>
  <div class="container">
    <h1>路由测试页面</h1>
    <!-- 错误： 子路由并不是需要前面有父级别路由，而是要看路由里面path是怎么配置的，还有children属性 -->
    <!-- <el-button @click="$router.push('/router/user/123')"> -->
    <el-button @click="$router.push('/user/123')">
      User123
    </el-button>
    <el-button @click="goToProduct">
      Produce
    </el-button>
    <el-divider />
    <div class="view-box">
      <router-view />
    </div>
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
    goToProduct() {
      this.$router.push({ name: 'product', params: { userID: 321 }, query: { queryID: 666 }})
    }
  }
}
</script>

<style scoped lang="scss">
    .view-box{
        width: 80vw;
        height: 70vh;
        background-color: #fff;
        border: 1px solid black;
    }
</style>
