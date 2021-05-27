const axios = require('axios')
const fs = require('fs')
const _ = require('lodash')

// axios.get('http://127.0.0.1:8009/?name=1').then(res => {
//   console.log(res.data)
//   fs.writeFile('./res.txt', JSON.stringify(res.data), { flag: 'a' }, err => {
//     if (err) {
//       console.log(err)
//     }
//   })
// })
axios.post('http://127.0.0.1:8009/', { name: 1 }).then(res => {
  console.log(res.data)
  fs.writeFile('./res.txt', JSON.stringify(res.data), { flag: 'a' }, err => {
    if (err) {
      console.log(err)
    }
  })
})
