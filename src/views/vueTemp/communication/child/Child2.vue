<template>
  <div class="container">
    child2
    <div>对象</div>
    <pre>
        {{ obj }}
   </pre>
    <div>数组</div>
    <div>
      {{ arr }}
    </div>
    <el-row>
      <el-button @click="sub">
        -1
      </el-button>
      <el-button>{{ num }}</el-button>
      <el-button @click="$emit('add',2)">
        +2
      </el-button>
    </el-row>
    <!-- 拆分v-model -->
    <!-- <el-input v-model="inputVal" /> -->
    <div>拆分v-model</div>
    <el-input :value="inputVal" @input="inputIt" />
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default() {
        return {}
      }
    },
    arr: {
      type: Array,
      default() {
        return []
      }
    },
    num: {
      type: Number,
      default: 1
    },
    inputVal: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    // console.log(this.props, 'props')
    // console.log(this.obj)
  },
  methods: {
    sub() {
      this.$emit('sub')
    },
    inputIt(val) {
      this.$emit('inputChange', val)
    }
  }
}
</script>

<style scoped lang="scss">
.container{
    width: 40%;
    height: 300px;
    background-color: #8de77b;
    float: right;
}
</style>
