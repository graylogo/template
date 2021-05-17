<template>
  <div class="home">
    <el-button type="primary" @click="()=>{$router.push('/tree')}">
      tree
    </el-button>
    <el-button type="primary" @click="()=>{$router.push('/drag')}">
      拖拽组件
    </el-button>
    <el-divider />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  }
}
</script>
<style scoped>
</style>
