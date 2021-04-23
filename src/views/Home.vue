<template>
  <div class="home">
    <el-tree
      ref="tree"
      show-checkbox
      class="tree"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      @check-change="getCheckedNodes"
    />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                },
                {
                  label: '三级 3-2-2'
                }
              ]
            },
            {
              label: '二级 3-3',
              children: [
                {
                  label: '三级 3-3-1',
                  disabled: true
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
        disabled: 'disableed'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate, 'aaaa')
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes(true), 'bbbb')
    }
  }
}
</script>
<style scoped>
.tree {
  width: 600px;
}
</style>
