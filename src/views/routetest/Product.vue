<template>
  <div class="container">
    {{ $route.params.id }}
    <br>
    通过prams传递的id  显示在地址栏
    {{ userID }}
    （刷新就没了）没有显示在地址栏
    <br>
    通过query传递  显示在地址栏
    {{ queryID }}
    <div>{{ base }}</div>
    <el-button type="text" @click="onChange">
      改变
    </el-button>
    <el-row>
      <el-col :span="12">
        <el-table
          :data="list"
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80"
          />
          <el-table-column
            prop="no"
            label="编号"
            width="180"
          />
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table
          :data="newArr"
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="序号"
            width="80"
          />
          <el-table-column
            prop="no"
            label="编号"
            width="180"
          />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    userID: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      base: '318-23-3',
      list: [
        {
          id: 1,
          no: '308-23-1'
        },
        {
          id: 2,
          no: '308-23-1'
        },
        {
          id: 3,
          no: '308-23-1'
        },
        {
          id: 4,
          no: '308-23-2'
        },
        {
          id: 5,
          no: '308-23-2'
        },
        {
          id: 6,
          no: '308-23-3'
        },
        {
          id: 7,
          no: '308-23-4'
        },
        {
          id: 8,
          no: '308-23-4'
        }

      ],
      newArr: []
    }
  },
  computed: {
    queryID() {
      return this.$route.query.queryID
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    onChange() {
      const { list, base } = this
      const reg = /\d+/g
      console.log(base.match(reg), 'aaa')
      const tempArr = base.split('-')
      let old = ''
      const newArr = []
      for (let i = 0; i < list.length; i++) {
        // const arr = list[i].split('-')
        if (list[i].no !== old) {
          newArr.push({ ...list[i], no: tempArr[0] + '-' + tempArr[1] + '-' + (parseInt(tempArr[2]) + 1) })
          tempArr[2] = parseInt(tempArr[2]) + 1
        } else {
          newArr.push({ ...list[i], no: newArr[i - 1].no })
        }
        old = list[i].no
      }
      this.newArr = newArr
    }
  }
}
</script>

<style scoped lang="scss">

</style>
