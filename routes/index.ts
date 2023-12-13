import Router from 'express'
const router = Router()

// *** Test ***
router.get('/', (request, response) => {
  response.send({
    message: 'Node.js and Express REST API'
  })
})

export default router
