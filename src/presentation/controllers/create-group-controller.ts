import { InvalidParamError } from "../errors/invalid-param-error"
import { MissingParamError } from "../errors/missing-param-error"
import { badRequest } from "../helper/http-helper"
import { Controller } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateCompetitionRequest {
  userId: string
  name: string
  description?: string
  durationInDays: number
}

export class CreateCompetitionController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { userId, name, durationInDays } =
      request.body as CreateCompetitionRequest

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
