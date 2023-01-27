import WebPush from "web-push"
import { FastifyInstance } from "fastify"

// console.log("WebPush.generateVAPIDKeys(): ", WebPush.generateVAPIDKeys())

const publicKey = 'BFyqkCqNF87q-xGyGHEasjN_yJW_ZKaNnhod5_9WZi5XqpRJX2zg2S8BLzFEplvjVhb_aNSWQ59rjtFNi6cQVNA'
const privateKey ='s9Y6z_LM0KLJweAx5DAWosgcBf9EUkWViue4l-qN1Lg'

WebPush.setVapidDetails(
  'http://localhost:3333',
  publicKey,
  privateKey
)

export async function notificationsRoutes(app: FastifyInstance) {

  app.get('/push/public_key', () => {
    return { publicKey, }
  })

  app.post('/push/register',(request, reply) => {
    console.log(request.body)
    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    console.log(request.body)
    return reply.status(201).send()
  })

}
