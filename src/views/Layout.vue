<template>
  <div>
    <el-row>
      <el-col
        :span="24"
      >
        <div class="grid-content bg-purple-dark" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="12"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col
        :span="7"
        :offset="1"
      >
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="8"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" />
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col
        :span="6"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="6"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="4"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="4"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col
        :span="4"
      >
        <div class="grid-content bg-purple-light" />
      </el-col>
    </el-row>
    <el-divider />
    <el-color-picker v-model="color" disabled />
    <el-color-picker v-model="color" size="medium" />
    <el-color-picker v-model="color" size="small" />
    <el-color-picker v-model="color" size="mini" />
    <div :style="{ backgroundColor: color }" class="littel-box" />
    <el-divider />
    <el-button @click="clickBtn">
      弹框
    </el-button>
    <el-divider />
    <pre>{{ list }}</pre>
    <el-button @click="start">
      开始
    </el-button>
    <pre>{{ params }}</pre>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      color: 'red',
      params: [],
      list: [
        { id: 1,
          wafers: [
            { id: 22, name: 22 }
          ] },
        { id: 2,
          wafers: [
            { id: 33, name: 33 },
            { id: 44, name: 44 }
          ] },
        { id: 4,
          wafers: [
            { id: 66, name: 66 }
          ] }
      ],
      len: 2
    }
  },
  methods: {
    start() {
      const res = { id: 55, name: 55 }
      this.params = []
      let position = 0
      this.list.map((i, index) => {
        if (i.wafers.length < this.len && !position) {
          position = index * this.len + 1
        }
        this.params = [...this.params, ...i.wafers]
      })
      if (position) {
        this.params.splice(position, 0, res)
      } else {
        this.params.push(res)
      }
    },
    clickBtn() {
      const message = '1,2,3,'
      this.$prompt(
        `以下Wafer已进行外延判定，无法修改目检，请先撤销计算再进行修改确认`,
        '提示',
        {
          inputValue: message.substring(0, message.length - 1),
          confirmButtonText: '确定',
          showCancelButton: false,
          closeOnClickModal: false,
          type: 'warning',
          inputType: 'textarea'
        }
      ).then(() => {
        return
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.littel-box {
  width: 30px;
  height: 30px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
