<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
        <el-timeline>
          <el-timeline-item v-for="item of list" :key="item.id" :timestamp="item.update_date" placement="top">
            <el-card>
              <h3>标题: {{ item.title }}</h3>
              <h4>作者: {{ item.author }}</h4>
              <p>{{ item.content }}</p>
              <el-button style="float: right" type="primary" @click="goToDetail(item.id)">
                详情
              </el-button>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="8">
        <div> {{ detail }}</div>
      </el-col>
      <el-col :span="8">
        <el-button @click="add">
          add
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script src='./index.js'>
</script>

<style scoped lang="scss">
.container{
    width: 100vw;
    overflow-y: auto;
    padding: 10px;
    height: 85vh;
    background-color: #fff;
    text-align: left;
    .el-timeline{
    }
}
</style>
