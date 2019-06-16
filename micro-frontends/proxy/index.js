const http = require('http')
const axios = require('axios')


http.createServer((req, res) => {
  axios({
    url: 'http://localhost:8080' + req.url,
    method: req.method,
  })
    .then(
      response => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.write(response.data)
        res.end()
      }
    )
}).listen(5000)

http.createServer((req, res) => {
  axios({
    url: 'http://localhost:3000' + req.url,
    method: req.method,
  })
    .then(
      response => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.write(response.data)
        res.end()
      }
    )
}).listen(5001)

//httpProxy.createProxyServer({
//  target: 'http://localhost:8080',
//  changeOrigin: true,
//}).listen(5000)
//httpProxy.createProxyServer({
//  target: 'http://localhost:3000',
//  changeOrigin: true,
//}).listen(5001)
