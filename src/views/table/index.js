export default {
  name: 'mytable',
  data() {
    return {
      name: 'a',
      tableDatas: [],
      selectedRow: [],
      pin: false,
      origin: -1,
      printLoading: false,
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
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
    window.addEventListener('keydown', code => { // 这个是获取键盘按住事件
      // console.log(code); // 这个是你按住键盘打印出键盘信息，在浏览器中自行查看
      if (code.keyCode === 16 && code.shiftKey) { // 判断是否按住shift键，是就把pin赋值为true
        this.pin = true
      }
    })
    window.addEventListener('keyup', code => { // 这个是获取键盘松开事件
      if (code.keyCode === 16) { // 判断是否松开shift键，是就把pin赋值为false
        this.pin = false
      }
    })
  },
  computed: {
    newTable() {
      const arr = []
      this.tableDatas.map((i) => {
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
    this.tableDatas = require('@/date/new_table.json')
    this.tableDatas.forEach((item, index) => { item.index = index })
    // console.log(JSON.stringify(this.tableDatas));
  },
  methods: {
    selectChange(data) {
      console.log(data)
      this.selectedRow = data
    },
    // 这里是select事件开始
    pinSelect(selection, row) {
      const data = this.$refs.waferTable.tableData
      const origin = this.origin // 起点数 从-1开始
      const endIdx = row.index // 终点数
      if (this.pin && selection.includes(data[origin])) { // 判断按住
        const sum = Math.abs(origin - endIdx) + 1// 这里记录终点
        const min = Math.min(origin, endIdx)// 这里记录起点
        let i = 0
        while (i < sum) {
          const index = min + i
          this.$refs.waferTable.toggleRowSelection([{ row: data[index], selected: true }]) // 通过ref打点调用toggleRowSelection方法，第二个必须为true
          i++
        }
      } else {
        this.origin = row.index // 没按住记录起点
      }
    },
    formatter(row) {
      return row.address
    }
  }
}
