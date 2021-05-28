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
      this.axios.get(`/api/blog/list?title=${this.title}&author=${this.author}`).then(({ data }) => {
        if (data.status === 0) {
          this.list = data.data
        }
      })
    },
    goToDetail(id) {
      this.axios.get(`/api/blog/detail?id=${id}`).then(({ data }) => {
        if (data.status === 0) {
          this.detail = data.data
        }
      })
    },
    add() {
      const params = {
        'title': 'new',
        'author': 'new',
        'content': 'new'
      }
      this.axios.post(`/api/blog/add`, params).then(({ data }) => {
        console.log(data)
      })
    }
  }
}
