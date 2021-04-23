<template>
  <div class="someIcon">
    <el-row type="flex" justify="end" align="middle">
      <el-col :span="2" class="print-icon">
        <i class="el-icon-phone" />
        <span>print</span>
      </el-col>
      <el-col :span="22" class="danger-icon">
        <el-button type="danger" icon="el-icon-info">
          危险
        </el-button>
      </el-col>
    </el-row>
    <div class="line" />
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col>
        <el-button size="medium" circle>
          默
        </el-button>
      </el-col>
      <el-col>
        <el-button type="primary" round plain>
          primary
        </el-button>
      </el-col>
      <el-col>
        <el-button type="success">
          success
        </el-button>
      </el-col>
      <el-col>
        <el-button type="info" :loading="isLoading">
          info
        </el-button>
      </el-col>
      <el-col>
        <el-button type="danger">
          danger
        </el-button>
      </el-col>
      <el-col>
        <el-button type="text">
          text
        </el-button>
      </el-col>
      <el-col>
        <el-button
          type="warning"
          disabled
          icon="el-icon-search"
        >
          warning
        </el-button>
      </el-col>
      <el-col>
        <el-button type="primary" icon="el-icon-edit" circle />
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-col>
        <el-button-group>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            @click="changeLoading(true)"
          >
            上一页
          </el-button>
          <el-button
            type="primary"
            @click="changeLoading(false)"
          >
            下一页<i class="el-icon-arrow-right" />
          </el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-divider />
    <router-link to="/">
      <el-link
        type="success"
        icon="el-icon-edit"
        style="margin-right:30px"
      >
        主页
      </el-link>
    </router-link>
    <!-- <div style="width: 20px, display:inlineblock"></div> -->
    <router-link
      to="/"
    >
      <el-link type="info" :underline="false">
        无下划线
      </el-link>
    </router-link>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'CommonIcon',
  data: () => {
    return {
      isLoading: false
    }
  },
  methods: {
    changeLoading(isLoad) {
      this.isLoading = isLoad
    }
  }
}
</script>

<style lang="scss" scoped>
.print-icon {
  background-color: #ccc;
}
.danger-icon {
  background-color: teal;
  border-radius: 4px;
}
</style>
