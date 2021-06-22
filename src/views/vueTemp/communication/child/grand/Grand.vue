<template>
  <div class="container1">
    Grand
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
  mounted() {
    // $parent 可以拿到  父组件-VueComponent
    // 不常用
    console.log(this.$parent, '孙子的$parent')

    // 访问根组件
    console.log(this.$root, '$root访问根组件')
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container1{
    width: 40%;
    height: 100px;
    background-color: #d86b67;
    border: 1px solid red;
    padding: 0
}
</style>
