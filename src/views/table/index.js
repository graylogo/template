export default {
  name: 'mytable',
  data() {
    return {
      name: 'a',
      tableData: [],
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
