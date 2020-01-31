import http from 'http'
import makeServer from './src/index'

const app = makeServer()
const server = http.createServer(app)

var port = 5000

server.listen(port, () => {
    console.log(`**listennig ${port}**`)
});