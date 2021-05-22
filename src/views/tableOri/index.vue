<template>
  <div style="text-align: center;">
    <el-button v-print="printObj" v-loading="printLoading">
      打印
    </el-button>
    <el-divider />
    <div id="printOri" class="table-div">
      <table border="10">
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
      <div style="page-break-after:always" />
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" scoped>
    .table-div{
        display: inline-block;
        width: 400px;
        border: 1px dashed #ccc;
        height: 400px;
    }
</style>
