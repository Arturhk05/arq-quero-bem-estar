import env from "@/main/env"

export class DatabaseConfig {
  private static instance: DatabaseConfig

  private constructor(
    private readonly mongoUri: string,
    private readonly postgresConfig?: {
      host: string
      port: number
      database: string
      user: string
      password: string
    },
  ) {}

  public static getInstance(): DatabaseConfig {
    if (!DatabaseConfig.instance) {
      DatabaseConfig.instance = new DatabaseConfig(
        env.mongoUrl,
        process.env.POSTGRES_HOST
          ? {
              host: process.env.POSTGRES_HOST,
              port: parseInt(process.env.POSTGRES_PORT || "5432"),
              database: process.env.POSTGRES_DB || "quero-bem-estar",
              user: process.env.POSTGRES_USER || "postgres",
              password: process.env.POSTGRES_PASSWORD || "",
            }
          : undefined,
      )
    }
    return DatabaseConfig.instance
  }

  public getMongoUri(): string {
    return this.mongoUri
  }

  public getPostgresConfig() {
    return this.postgresConfig
  }
}
