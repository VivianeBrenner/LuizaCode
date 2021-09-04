require('dotenv').config();

module.exports = {
  name: "default",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: "omni_channel",
  entities:["./src/entities/**.ts"],
  migrations: ["./src/database/migrations/**.ts"],
  cli: {
    migrationsDir:"./src/database/migrations"
  }
}