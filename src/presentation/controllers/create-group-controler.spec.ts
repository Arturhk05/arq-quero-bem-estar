import { InvalidParamError } from "../errors/invalid-param-error"
import { MissingParamError } from "../errors/missing-param-error"
import { CreateCompetitionController } from "./create-group-controller"

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
    expect(response.status).toBe(400)
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
    expect(response.status).toBe(400)
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
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new MissingParamError("durationInDays"))
  })

  it("should return 400 if durationInDays is greater than 30", async () => {
    const sut = new CreateCompetitionController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        name: "any_name",
        durationInDays: 31,
      },
    }
    const response = await sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new InvalidParamError("durationInDays"))
  })

  it("should return 400 if durationInDays is less than 7", async () => {
    const sut = new CreateCompetitionController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        name: "any_name",
        durationInDays: 5,
      },
    }
    const response = await sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new InvalidParamError("durationInDays"))
  })
})
