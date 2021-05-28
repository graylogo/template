<template>
  <div class="pageNav">
    <!-- <div class="line"></div> -->
    <el-menu
      :default-active="activeIndex"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="#666"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="/layout">
        页面布局
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          小组件
        </template>
        <el-menu-item index="/someicon">
          常用图标
        </el-menu-item>
        <el-menu-item index="/select">
          表单
        </el-menu-item>
        <el-menu-item
          index="/table"
        >
          表格
        </el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">
            选项4
          </template>
          <el-menu-item index="2-4-1">
            选项1
          </el-menu-item>
          <el-menu-item index="2-4-2">
            选项2
          </el-menu-item>
          <el-menu-item index="2-4-3">
            选项3
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        消息中心
      </el-menu-item>
      <el-menu-item index="/completeTable">
        表格
      </el-menu-item>
      <el-menu-item index="/">
        <router-link to="/">
          其它选项
        </router-link>
      </el-menu-item>
      <el-menu-item index="/tableori">
        原生表格
      </el-menu-item>
      <el-menu-item index="/vuex">
        Vuex
      </el-menu-item>
      <el-menu-item index="/route">
        路由
      </el-menu-item>
      <el-menu-item index="/blog">
        博客
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style></style>
