<template>
  <div class="container">
    child1
    <Grand />
    {{ msg }}
    {{ myMsg }}
  </div>
</template>

<script>
import Grand from './grand/Grand.vue'
export default {
  components: { Grand },
  // 1.  以数组的方式接收
  //   props: ['msg'],

  // 2.  以对象的方式接收
  //   props: {
  //     msg: String
  //   },

  // 3. 带验证的接收
  props: {
    msg: {
      type: String,
      default: 'msg',
      required: true
    },
    myMsg: String
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container{
    width: 40%;
    height: 300px;
    background-color: #348233;
    float: left;
    padding: 40px;
}
</style>
