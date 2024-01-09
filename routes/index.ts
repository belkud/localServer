import Router from 'express'
const router = Router()

// *** Test ***
router.get('/', (request, response) => {
  response.send({
    message: 'Node.js and Express REST API',
    message2: 'Привет Вова'
  })
})

export default router
