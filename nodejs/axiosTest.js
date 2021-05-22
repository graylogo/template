const axios = require('axios')
const fs = require('fs')
const _ = require('lodash')

axios.get('http://127.0.0.1:8009/').then(res => {
  console.log(res)
  fs.writeFile('./res.txt', JSON.stringify(res.data), { flag: 'a' }, err => {
    console.log(err)
  })
})
