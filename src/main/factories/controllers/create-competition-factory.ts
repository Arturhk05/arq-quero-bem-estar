import { CreateCompetitionController } from "@/presentation/controllers/create-competition-controller"

export const makeCreateCompetitionController = () => {
  const controller = new CreateCompetitionController()
  return controller
}
