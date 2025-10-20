import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateGroupRequest {
  userId: string
  name: string
  description?: string
  duracaoDias: number
}

export class CreateGroupController implements Controller {
  handle(request: HttpRequest): HttpResponse {
    const { userId, name } = request.body as CreateGroupRequest

    if (!userId) {
      return {
        status: 400,
        body: new Error("Missing param: userId"),
      }
    }

    if (!name) {
      return {
        status: 400,
        body: new Error("Missing param: name"),
      }
    }

    return {
      status: 200,
      body: {
        userId,
        name,
      },
    }
  }
}
