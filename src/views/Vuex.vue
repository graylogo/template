<template>
  <div>
    <el-button type="primary" @click="$store.commit('sub')">
      -
    </el-button>
    <el-button type="text" style="width: 40px">
      {{ number }}
    </el-button>
    <el-button type="primary" @click="$store.commit('add')">
      +
    </el-button>
    <el-button
      type="primary"
      @click="$store.commit('addNum', { num: 10 })"
    >
      payload
    </el-button>
    <el-button type="primary" @click="addNum2(99999)">
      mapMutation
    </el-button>
    <el-input v-model="name" />
    <el-divider />
    <span>{{ msg }}</span><br>
    <span>{{ all }}</span><br>
    <span>{{ obj }}</span>
    <el-button
      type="danger"
      @click="$store.commit('changeObj')"
    >
      修改obj
    </el-button>
    <el-divider />
    <span>{{ time }}</span>
    <el-button type="info" @click="clear">
      clear
    </el-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Vuex',
  data() {
    return {
      name: 'aaa',
      time: 0,
      intel: ''
    }
  },
  computed: {
    // number(){
    //   return this.$store.state.number
    // },
    // ...mapState({                // 返回的是一个对象，可以展开
    //   number: state => {
    //     return state.number
    //   }
    // })

    ...mapState(['number', 'msg', 'obj']),
    ...mapGetters(['all'])
  },
  watch: {
    name() {
      console.log(this.name)
    }
  },
  mounted() {
    this.intel = setInterval(this.changeTime, 100)
  },
  beforeDestroy() {
    clearInterval(this.intel)
  },
  methods: {
    ...mapMutations({
      sub: 'sub',
      addNum2: 'addNum2'
    }),

    changeTime() {
      this.time++
    },
    clear() {
      // this.time = new Date().getTime();
      console.log(this.intel)
      clearInterval(this.intel)
    }
  }
}
</script>

<style scoped></style>
