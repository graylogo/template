<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
        <h2>Vue中的数组</h2>
        <b>push、pop、shift、unShift、splice、sort、resort操作数组会渲染</b>
        <div>
          <span>原数组：</span><span style="color: green">{{ arr1 }}</span>
          <el-button type="success" @click="restore">
            还原数组
          </el-button>
        </div>
        <div>
          <el-button type="danger" @click="changeArrByLow">
            通过修改下标修改数组
          </el-button><span>{{ arr1 }}</span>
          <span style="color: red">并不会渲染</span>通过修改下标的方式并不能引发渲染
        </div>
        <div>
          <el-button type="primary" @click="changeArrBySet">
            通过Vue.set修改
          </el-button><span>{{ arr1 }}</span>
        </div>
        <div>
          <el-button type="primary" @click="changeArrByToSet">
            通过this.$set修改
          </el-button><span>{{ arr1 }}</span>
        </div>
        <div>
          <el-button type="primary" @click="changeArrBySplice">
            通过splice修改
          </el-button><span>{{ arr1 }}</span>
          <span style="color: orange"> this.arr1.splice(0, 1, 'new4')</span>
        </div>
        <div>
          <el-button type="danger" @click="changeArrLenByLow">
            修改下标改变数组长度
          </el-button><span>{{ arr1 }}</span>
          <span style="color: red">并不会渲染</span>通过修改下标的方式并不能引发渲染
        </div>
        <div>
          <el-button type="warning" @click="changeArrLenByDelete">
            $delete改变数组长度
          </el-button><span>{{ arr1 }}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <el-alert type="success" title="Vue基础" :closable="false" center />
        <!-- 类绑定   对象 -->
        <span v-for="(i,index) in list" :key="index" class="nav-tab" :class="{active: tabIndex===index}" @click="clickNav(index)">
          {{ i }}
        </span>
        <span>对象绑定和数组绑定都可以使用</span>
        <!-- 类绑定   数组 -->
        <!-- <span v-for="(i,index) in list" :key="index" class="nav-tab" :class="[active?tabIndex===index:'','other-style']" @click="clickNav(index)">
          {{ i }}
        </span> -->
        <div>
          <span>计算属性的get和set</span>
          原始值： {{ value }}
          计算属性后的值: {{ currentValue }}
          <button @click="changeVal">
            改变值
          </button>
        </div>
        <div>生命周期见控制台打印</div>
        <div>遍历对象 可以拿到key、value和index</div>
        <pre>{{ obj }}</pre>
        遍历以后：
        <div v-for="(val,key,index) in obj" :key="key">
          {{ val+ '---' + key + '---' + index }}
        </div>
      </el-col>
      <el-col :span="8">
        1
      </el-col>
    </el-row>
    <el-row />
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      arr1: ['1', 2, { name: 1 }, null],
      list: ['类', '名', '绑', '定'],
      tabIndex: 0,
      value: 10,
      obj: {
        name: 'wang',
        age: 19,
        sex: 'male'
      }
    }
  },
  computed: {
    //   最简单的写法
    // currentValue: () => 'ccc'

    // 普通函数的写法
    // currentValue: function() {
    //   return 'ccc'
    // }
    //  完整的写法
    currentValue: {
      get: function() {
        // get用于返回数据   读
        return this.value - 1
      },
      set: function(val) {
        // set用来修改data中数据   写
        // 会接收到一个参数  即传入的值100
        console.log(val, 'set被调用了') // 100
        this.value = val + val
      }
    }
  },
  beforeCreate() {
    console.log('beforeCreate调用了')
  },
  created() {
    console.log('created调用了')
  },
  mounted() {
    console.log('mounted调用了')
  },
  methods: {
    changeVal() {
      // 修改计算属性的值
      this.currentValue = 100
    },
    clickNav(index) {
      this.tabIndex = index
    },
    restore() {
      this.arr1 = ['1', 2, { name: 1 }, null]
    },
    changeArrByLow() {
      this.arr1[0] = 'new1'
    },
    changeArrBySet() {
      Vue.set(this.arr1, 0, 'new2')
    },
    changeArrByToSet() {
      this.$set(this.arr1, 0, 'new3')
    },
    changeArrBySplice() {
      this.arr1.splice(0, 1, 'new4')
    },
    changeArrLenByLow() {
      this.arr1.length--
    },
    changeArrLenByDelete() {
      this.$delete(this.arr1, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.container{
    text-align: left;
}
.nav-tab{
    cursor: pointer;
    margin: 0 20px;
    background-color: #ccc;
}
.active{
    color: red;
}
.el-col{
    border: 1px solid pink;
    padding: 10px;
    div{
        margin: 5px;
    }
}
</style>
