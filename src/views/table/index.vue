<template>
  <div>
    <el-row :gutter="6" type="flex" justify="space-around">
      <el-col :span="10">
        <h2 style="color: #44B0F5">普通的表格</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="date" label="日期" sortable width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" sortable width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址" :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="10">
        <h2>竖向的表格</h2>
        <el-table :data="newTable" style="width: 100%">
          <el-table-column label="标题">
            <template slot-scope="scope">
              <span v-if="scope.$index === 0">日期</span>
              <span v-if="scope.$index === 1">姓名</span>
              <span v-if="scope.$index === 2"> 地址</span>
            </template>
          </el-table-column>
          <el-table-column
            v-for="item in tableHeader"
            :key="item.id"
            :label="item.name"
            :prop="item.prop"
          >
            <template slot-scope="scope">
              {{ scope.row.value }}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="10">
      <el-col :span="10">
        <h2>优秀的竖向表格</h2>
        <el-table :data="tableHeader" style="width: 100%">
          <!-- 设置单独的第一列 -->
          <el-table-column label="竖向标题" prop="name" fixed></el-table-column>
          <el-table-column
            v-for="(item, index) in tableHeader2"
            :key="item.id"
            :label="item.name"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span v-if="scope.$index === 0">{{ newTable[index].date }}</span>
              <span v-if="scope.$index === 1">{{ newTable[index].name }}</span>
              <span v-if="scope.$index === 2">
                {{ newTable[index].value }}</span
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <h2>其它表格</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./index"></script>

<style></style>
