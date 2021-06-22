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
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    console.log(this.props, 'props')
    console.log(this.obj)
  },
  methods: {

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
