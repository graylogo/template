export default {
  data() {
    return {
      list: [],
      detail: null,
      title: '',
      author: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // TODO  设置拦截器，统一处理返回数据  500 404 200
    fetchData() {
      this.axios.get(`/api/blog/list?title=${this.title}&author=${this.author}`).then((res) => {
        if (res.status === 0) {
          this.list = res.data
        }
      })
    },
    goToDetail(id) {
      this.axios.get(`/api/blog/detail?id=${id}`).then((res) => {
        if (res.status === 0) {
          this.detail = res.data
        }
      })
    },
    add() {
      const params = {
        'title': 'new',
        'author': 'new',
        'content': 'new'
      }
      this.axios.post(`/api/blog/add`, params).then((res) => {
        console.log(res)
      })
    }
  }
}
