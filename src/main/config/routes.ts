import { Express, Router } from "express"
import setupHelloRoute from "../routes/hello"

export default (app: Express): void => {
  const router = Router()
  app.use("/api", router)

  setupHelloRoute(router)
}
