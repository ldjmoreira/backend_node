const bodyParser = require('body-parser')//tratar posts e gets
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}

