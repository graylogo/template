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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.line {
  height: 1px;
  width: 100%;
  display: block;
  margin: 24px 0;
  background-color: #ccc;
}
</style>
