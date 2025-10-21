import "dotenv/config"
import "reflect-metadata"
import express from "express"
import env from "./config/env"
import { TypeOrmConnection } from "@/infra/database/typeorm/typeorm-connection"

const app = express()

TypeOrmConnection.getInstance()
  .initialize()
  .then(() => {
    app.listen(env.port, () => {
      console.log(`Server is running on http://localhost:${env.port}`)
    })
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error)
  })
