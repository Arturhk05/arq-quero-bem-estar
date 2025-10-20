import Person from "."

it("should do something", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("My name is John Doe")
})
