export default {
  name: 'mytable',
  data() {
    return {
      name: 'a',
      tableData: [],
      printLoading: false,
      printObj: {
        id: 'printOri',
        popTitle: '打印测试',
        preview: false,
        // 样式自带 也可以使用外链地址
        extraCss: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback(vue) {
          console.log(vue, this)
          this.printLoading = true
          console.log('打开之前')
        },
        openCallback(vue) {
          this.printLoading = false
          console.log('执行了打印')
        },
        closeCallback(vue) {
          console.log('关闭了打印工具')
        }
      },
      tableHeader: [
        {
          key: '12x',
          name: '日期1',
          prop: 'name'
        },
        {
          key: '323dx',
          name: '姓名1',
          prop: 'date'
        },
        {
          key: 'dg3sx',
          name: '地址1',
          prop: 'address'
        }
      ],
      tableHeader2: [
        {
          name: '1号'
        },
        {
          name: '2号'
        },
        {
          name: '3号'
        }
      ]
    }
  },
  mounted() {
    // console.log(this);
  },
  computed: {
    newTable() {
      const arr = []
      this.tableData.map(i => {
        arr.push({
          id: i.id,
          name: i.name,
          value: i.address,
          date: i.date
        })
      })
      return arr
      //   [
      //     {
      //       id: "wa",
      //       name: "标题1",
      //       value: "asas"
      //     },
      //     {
      //       id: "waas",
      //       name: "标题2",
      //       value: "3344"
      //     },
      //     {
      //       id: "wasas",
      //       name: "标题2",
      //       value: "9809"
      //     }
      //   ];
    }
  },
  created() {
    // 通过require来
    this.tableData = require('@/date/new_table.json')
    // console.log(JSON.stringify(this.tableData));
  },
  methods: {
    formatter(row) {
      return row.address
    }
  }
}
