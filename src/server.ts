import express from "express"
import env from "@/main/env"

const app = express()

app.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port}`)
})
