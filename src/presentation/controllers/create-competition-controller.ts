import { MissingParamError } from "../errors/missing-param-error"
import { badRequest } from "../helper/http-helper"
import { IController } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateCompetitionRequest {
  userId: string
  name: string
  description?: string
  durationInDays: number
}

export class CreateCompetitionController implements IController {
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

    return {
      statusCode: 200,
      body: {
        userId,
        name,
      },
    }
  }
}
