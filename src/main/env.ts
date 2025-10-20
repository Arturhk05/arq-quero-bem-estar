export default {
  node_env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  mongoUrl:
    process.env.MONGO_URL || "mongodb://localhost:27017/quero-bem-estar",
}
