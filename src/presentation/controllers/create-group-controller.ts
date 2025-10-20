import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateGroupRequest {
  userId: string
  name: string
  description?: string
  duracaoDias: number
}

export class CreateGroupController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(request: HttpRequest): HttpResponse {
    return {
      status: 400,
      body: new Error("Missing param: userId"),
    }
  }
}
