import { MissingParamError } from "../errors/missing-param-error"
import { badRequest } from "../helper/http-helper"
import { IController } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"

export interface CreateCompetitionRequest {
  name: string
  description?: string
  durationInDays: number
}

export class CreateCompetitionController implements IController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const temporaryOwnerId = 1

    const { name, durationInDays } = request.body as CreateCompetitionRequest

    if (!name) {
      console.log("Missing param: name")
      return badRequest(new MissingParamError("name"))
    }
    if (!durationInDays) {
      console.log("Missing param: durationInDays")
      return badRequest(new MissingParamError("durationInDays"))
    }

    return {
      statusCode: 200,
      body: {
        ownerId: temporaryOwnerId,
        name,
        durationInDays,
      },
    }
  }
}
