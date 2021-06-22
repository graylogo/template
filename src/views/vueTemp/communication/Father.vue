<template>
  <div class="container">
    <div class="father">
      Father
      <!-- 驼峰变量  传props的时候需要转为 - 连字符形式 -->
      <child1 :msg="msg" :my-msg="myMsg" />
      <child2 :obj="obj" :arr="arr" :num="num" :input-val="inputVal" @sub="sub" @add="add" @inputChange="inputChange" />
      <el-input :value="inputVal" @input="inputChange" />
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
      arr: [1, 2, 3],
      num: 0,
      inputVal: '父组件和子组件公用一个input'
    }
  },
  created() {

  },
  methods: {
    add(val) {
      // 接收$emit发送的参数
      this.num += val
    },
    sub() {
      this.num--
    },
    inputChange(val) {
      console.log(val)
      this.inputVal = val
    }
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
