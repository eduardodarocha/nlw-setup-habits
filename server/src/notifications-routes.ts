import WebPush from "web-push"
import { FastifyInstance } from "fastify"
import { z } from "zod"

// console.log("WebPush.generateVAPIDKeys(): ", WebPush.generateVAPIDKeys())

const publicKey = 'BMHgv503hlGKJ4y2rZ62S__M_k75Y9l3YtTqrnZdts_ivoURLJKI12N48NGr97Q_kfz8cG_L_FAt2FTHGcl_aYk'
const privateKey ='Z1LUU4aTUC-s_5Dz3Fj8bYjQK78Isk8tpL5zk0Tns-8'

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
    // console.log(request.body)
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        // expirationTime: z.string().optional(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
      })

    })
  })
  const { subscription } = sendPushBody.parse(request.body)

  setTimeout(() => {
    WebPush.sendNotification(subscription, 'Hello do  Backend')
  }, 5000)

  return reply.status(201).send()
  })
}
