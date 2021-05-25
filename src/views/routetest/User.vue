<template>
  <div class="container">
    User页面接收到的参数, {{ $route.params.id }}
    通过 $route.params.id 获取
    <br>
    在计算属性中获取
    {{ userId }}
    <el-button type="text" @click="$router.push(`/route/user/${userId}/edit`)">
      修改用户
    </el-button>
    <router-link :to="`/route/user/${userId}/edit`">
      修改用户
    </router-link>
    <div class="view-child">
      子路由--命名视图
      <!-- 第一个对应的就是defaul -->
      <router-view />
      左右两边是命名视图的两个组件
      <router-view name="left" style="float: left;" />
      <router-view name="right" style="float: right" />
    </div>
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
    .view-child{
        display: table;
        margin: 0 auto;
        width: 500px;
        height: 200px;
        border: 1px dashed pink;
    }
</style>
