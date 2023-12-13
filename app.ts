import express from 'express'
import router from '@/routes'
import pkg from 'body-parser'
import cors from 'cors'
const { json, urlencoded } = pkg
const port = 3002
const app = express()

// Use Node.js body parsing middleware
app.use(json({ limit: '50mb' }))
app.use(urlencoded({
  extended: true
}))

app.use(cors())

app.use(express.static('public'))
app.use(router)
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

process.on("SIGINT", () => {
  // console.log('Отключение от bd прошло успешно')
  process.exit();
});