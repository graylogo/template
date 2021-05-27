import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: 100,
    msg: 'hahahhah',
    obj: {
      name: 'aaa'
    }
  },
  // 提供修改state的方法
  mutations: {
    add(state) {
      state.number++
    },
    sub(state) {
      state.number--
    },
    addNum(state, payload) {
      state.number = payload.num
    },
    // 注意上下两个的区别，一个使用了mapMutations函数，二上面的没用，是通过payload来传递数据
    addNum2(state, payload) {
      state.number = payload
    },
    changeObj(state) {
      // state.obj.age = 10
      // console.log(state.obj)  //直接给对象增加新的属性并不会引起页面时图的刷新 ： 可以使用下面两种方式：

      // 方式一  覆盖
      // state.obj = {...state.obj, age: 10}

      // 方式二  Vue的set  注意，在组件中使用的是 this。$set()
      // state.obj = Vue.set(state.obj,'age','10')   错误的写法
      // 直接set就可以
      Vue.set(state.obj, 'age', '10')
    }
  },
  // 类似计算属性  接收一个默认参数state
  getters: {
    // 第一种写法
    all(state) {
      return state.number + state.msg
    }
    // 第二种写法
    // all: state => state.number+ state.msg
  },
  actions: {}, // 异步的mutation
  modules: {} // 拆分模块，仅此而已
})

export default store
