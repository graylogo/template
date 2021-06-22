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
        <el-button type="primary" @click="dialogFormVisible = true;isChange=false;">
          watch的用法
        </el-button>

        <el-dialog title="信息" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
          <el-form :model="formData">
            <el-form-item label="名字" :label-width="formLabelWidth">
              <el-input v-model="formData.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="email" :label-width="formLabelWidth">
              <el-input v-model="formData.email" autocomplete="off" />
            </el-form-item>
            <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="formData.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item> -->
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="confirm">
              取 消
            </el-button>
            <el-button type="primary" @click="confirm">
              确 定
            </el-button>
          </div>
        </el-dialog>
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
import _ from 'lodash'
export default {
  // NOTE Vue中为什么data必须是函数？
// 1. 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝，如果是对象的话，会导致所有的组件维护同一个data，一个组件状态改变会导致另外组件也改变。
// 2. js函数中，如果data是对象的话，指向的内存地址都是同一个
// 而返回函数就不一样了，会创建不同的对象
/*
1. 都是同一个地址
data:{
    a:'xxx',
}
2. 这样也是同一个地址
const obj = {a:'xxx'}
data(){
    retrun obj
}
3. 返回不同的地址，独立的data
data(){   // 对象中函数的简单写法
    return {
        a: 'xxx'
    }
}
*/

  data() {
    return {
      arr1: ['1', 2, { name: 1 }, null],
      list: ['类', '名', '绑', '定'],
      tabIndex: 0,
      value: 10,
      formLabelWidth: '100px',
      obj: {
        name: 'wang',
        age: 19,
        sex: 'male'
      },
      isChange: false,
      dialogFormVisible: false,
      formData: {
        name: 'xxx',
        email: 'xxx@email.com',
        obj: {
          key1: 'key1',
          key2: 'key2'
        }
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
  watch: {
    // 监听普通的属性   可以取到ewVal, oldVal
    tabIndex: function(newVal, oldVal) {
      console.log('监听到tabIndex改变了，变为' + newVal)
    },
    // 监听复杂数据  只能取到newVal
    // 监听复杂属性的子属性  用'formData.name'  引号括起来
    formData: {
      handler(newVal, oldVal) { // 监听不到旧的值了
        this.isChange = true
      },
      deep: true // 深度监听，可监听到对象、数组的变化
    }
    // 实现监听表单的思路：
    /*
    1. 获取到表单数据后立即深拷贝一份
    2. 监听到变化以后，打个标记
    3. 关闭之前，如果有标记，利用 _.isEqual来判断是否完全相等。相等则将标记置false
    4. 若有标记，则confirm提示
    */
  },
  beforeCreate() {
    console.log('beforeCreate调用了')
  },
  created() {
    console.log('created调用了')
  },
  mounted() {
    const obj = {
      name: 'xxx',
      email: 'xxx@email.com',
      obj: {
        key1: 'key1',
        key2: 'key2'
      }
    }
    // isEqual 能够深度比较是否相等
    const res = _.isEqual(this.formData, obj)
    console.log('mounted调用了', 'isEqual的使用' + res)
  },
  methods: {
    confirm() {
      if (this.isChange) {
        this.$confirm('数据改变了，确定要取消？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.dialogFormVisible = false
        }).catch(() => {
          // 点击取消的时候
        })
      } else {
        this.dialogFormVisible = false
      }
    },
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
