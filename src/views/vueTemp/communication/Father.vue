<template>
  <div class="container">
    <div class="father">
      Father
      <!-- 驼峰变量  传props的时候需要转为 - 连字符形式 -->
      <child1 :msg="msg" :my-msg="myMsg" />
      <child2 :obj="obj" :arr="arr" />
    </div>
  </div>
</template>

<script>
import Child1 from './child/Child1.vue'
import Child2 from './child/Child2.vue'
export default {
  components: { Child1, Child2 },
  data() {
    return {
      msg: '来自父组件的消息',
      myMsg: '驼峰标识需要用-转换',
      obj: {
        name: 'name',
        age: 18
      },
      arr: [1, 2, 3]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.father{
    width: 100%;
    height: 500px;
    background-color: #ccc;
    padding: 20px;
    display: inline-block;
}
</style>
