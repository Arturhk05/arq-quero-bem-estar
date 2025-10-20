import { MissingParamError } from "../errors/MissingParamError"
import { badRequest } from "../helper/http-helper"
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

    if (!userId) return badRequest(new MissingParamError("userId"))

    if (!name) return badRequest(new MissingParamError("name"))

    return {
      status: 200,
      body: {
        userId,
        name,
      },
    }
  }
}
