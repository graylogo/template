<template>
  <div>
    <el-row>
      <el-col :sapn="12">
        <el-table
          ref="singleTable"
          :data="tableData"
          stripe
          border
          height="250"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" label="编号" width="50" fixed />
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
            fixed
            align="center"
          />
          <el-table-column prop="address" label="地址" width="200" />
          <el-table-column>
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
              >
                查看
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="setCurrent"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table
          ref="doubleTable"
          :data="tableData"
          stripe
          border
          height="250"
          @current-change="handleCurrentChange"
        >
          <el-table-column type="selection" width="55" fixed align="center" />
          <el-table-column type="index" label="编号" width="50" fixed="" />
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
            fixed
            align="center"
          />
          <el-table-column prop="address" label="地址" width="200" />
          <el-table-column prop="address" label="地址" width="200" />
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
              >
                查看
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="setCurrent"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tabel',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getData()
  },
  mounted() {},
  // watch: {
  //   tableData: function() {
  //     this.$nextTick(function() {
  //       this.$refs.singleTable.setCurrentRow(this.tableData[0]);
  //     });
  //   }
  // },
  methods: {
    setCurrent(val) {
      console.log(val, '1111')
      this.$refs.singleTable.setCurrentRow(this.tableData[0])
    },
    handleCurrentChange(val, old) {
      console.log(val, '点击事件')
      console.log(old, 'old')
    },
    handleClick(row) {
      console.log(row)
    },
    getData() {
      this.axios.get('http://localhost:3000/tableData').then(res => {
        // this.tableData = res.data;
        this.tableData = [...res.data]
      })
    }
  }
}
</script>

<style></style>
