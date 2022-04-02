const server = require('./server')

const path = require('path')

const port = process.env.PORT || 3000

const envPath = path.join(__dirname, '.env')
require('dotenv').config({ path: envPath })

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})
