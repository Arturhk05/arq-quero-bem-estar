import { MissingParamError } from "../errors/missing-param-error"
import { CreateCompetitionController } from "./create-competition-controller"

describe("CreateCompetitionController", () => {
  it("should return 400 if userId is not provided", async () => {
    const sut = new CreateCompetitionController()
    const httpRequest = {
      body: {
        name: "any_name",
        durationInDays: 30,
      },
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError("userId"))
  })

  it("should return 400 if name is not provided", async () => {
    const sut = new CreateCompetitionController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        durationInDays: 30,
      },
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError("name"))
  })

  it("should return 400 if durationInDays is not provided", async () => {
    const sut = new CreateCompetitionController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        name: "any_name",
      },
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError("durationInDays"))
  })
})
