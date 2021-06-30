<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="24" type="flex" justify="space-between">
        <div class="father-content">
          父组件
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">
          <Child1>
            父组件通过Slot传递的内容
            <b>传递多个内容也是可以的</b>
          </Child1>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <Child2>
            <!-- 作用域插槽 -->
            <!-- 父组件替换子组件的标签，但是内容是由子组件提供的 -->
            <!-- 传递数据的插槽 从子上传递过来的值 -->
            <template v-slot:header="scope">
              <!-- 另外一种写法  #header="{user}"  直接解构出子组件的slot中的user-->
              {{ scope }}
              <h1>具名插槽</h1>
            </template>

            <!-- 默认的插槽 -->
            <p>对应slot的name属性</p>
            <p>默认对应default</p>
            <!-- # 等价与 v-slot: -->

            <!-- 具名插槽 -->
            <!-- 多种高写法 -->
            <!-- <template slot="footer"> -->
            <!-- <template v-slot:footer> -->
            <template #footer>
              <p>
                注意 v-slot 只能添加在 'template'标签上  语法糖#header
              </p>
            </template>
          </Child2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Child1 from './child/Child1.vue'
import Child2 from './child/Child2.vue'
export default {
  components: { Child2, Child1 },
  data() {
    return {
      user: {
        name: 'father'
      }
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .el-row {
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #7eee9f;
  }
  .bg-purple {
    background: #5fa0eb;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .father-content{
      background-color: rgb(196, 117, 117);
      height: 120px;
  }
  .grid-content {
      height: 90px;
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
