import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.listen(PORT, () => {
  console.info('server start')
})