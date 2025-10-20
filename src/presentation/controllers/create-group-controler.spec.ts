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
  })
})
