import { CreateGroupController } from "./create-group-controller"

describe("CreateGroupController", () => {
  it("should return 400 Not Implemented if userId is not provided", () => {
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
})
