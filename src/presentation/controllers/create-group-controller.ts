import { InvalidParamError } from "../errors/InvalidParamError"
import { MissingParamError } from "../errors/MissingParamError"
import { badRequest } from "../helper/http-helper"
import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateGroupRequest {
  userId: string
  name: string
  description?: string
  durationInDays: number
}

export class CreateGroupController implements Controller {
  handle(request: HttpRequest): HttpResponse {
    const { userId, name, durationInDays } = request.body as CreateGroupRequest

    if (!userId) {
      return badRequest(new MissingParamError("userId"))
    }
    if (!name) {
      return badRequest(new MissingParamError("name"))
    }
    if (!durationInDays) {
      return badRequest(new MissingParamError("durationInDays"))
    }

    if (durationInDays < 7 || durationInDays > 30) {
      return badRequest(new InvalidParamError("durationInDays"))
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
