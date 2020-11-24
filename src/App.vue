<template>
  <div id="app">
    <PageNav />
    <el-divider></el-divider>
    <router-view />
  </div>
</template>

<script>
import PageNav from "./components/PageNav";
export default {
  name: "app",
  components: {
    PageNav
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
</style>
