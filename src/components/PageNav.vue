<template>
  <div class="pageNav">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/layout">页面布局</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">小组件</template>
        <el-menu-item index="2-1">
          <router-link to="/someicon">
            <el-link type="info">常用图标</el-link></router-link
          >
        </el-menu-item>
        <el-menu-item index="2-2"
          ><router-link to="/select">
            <el-link type="info">表单</el-link></router-link
          ></el-menu-item
        >
        <el-menu-item index="2-3"
          ><router-link to="/table">
            <el-link type="primary">表格</el-link></router-link
          ></el-menu-item
        >
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/vuex">其它选项</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "PageNav",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style></style>
