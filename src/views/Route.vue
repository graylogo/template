<template>
  <div class="container">
    <h1>路由测试页面</h1>
    <!-- 错误： 子路由并不是需要前面有父级别路由，而是要看路由里面path是怎么配置的，还有children属性 -->
    <!-- <el-button @click="$router.push('/router/user/123')"> -->
    <el-button @click="$router.push('/route/user/123')">
      User123
    </el-button>
    <el-button @click="goToProduct">
      Produce
    </el-button>
    <el-button type="warning" @click="$router.push({path: '/route/others',query: {queryID: 1}})">
      others
    </el-button>
    <el-divider />
    <div class="view-box">
      <!-- 使用vue的transition来设置路由的切换动画 -->
      <transition name="my-fade">
        <router-view />
      </transition>
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
.my-fade-enter{
    opacity: 0;
}
.my-fade-enter-active{
transition: all 3s ease;
}
.my-fade-enter-to{
    opacity: 1;
}
    .container{
        position: relative;
    }
    .view-box{
        padding: 15px;
        width: 800px;
        height: 600px;
        background-color: #fff;
        border: 1px solid black;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
