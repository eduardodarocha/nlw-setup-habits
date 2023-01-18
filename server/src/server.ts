// Back-end API Restful
import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.register(cors);

/**
 * Method http: GET, POST, PUT, PATCH , DELETE
 */


app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server is running!");
  });
