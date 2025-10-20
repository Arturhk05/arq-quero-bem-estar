import { MissingParamError } from "../errors/MissingParamError"
import { CreateGroupController } from "./create-group-controller"

describe("CreateGroupController", () => {
  it("should return 400 if userId is not provided", () => {
    const sut = new CreateGroupController()
    const httpRequest = {
      body: {
        name: "any_name",
        duracaoDias: 30,
      },
    }
    const response = sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new MissingParamError("userId"))
  })

  it("should return 400 if name is not provided", () => {
    const sut = new CreateGroupController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        duracaoDias: 30,
      },
    }
    const response = sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new MissingParamError("name"))
  })

  it("should return 400 if durationInDays is not provided", () => {
    const sut = new CreateGroupController()
    const httpRequest = {
      body: {
        userId: "any_user_id",
        name: "any_name",
      },
    }
    const response = sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new MissingParamError("durationInDays"))
  })
})
