const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "157.245.102.21"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "rrcenxpwqk"),
      user: env("DATABASE_USERNAME", "rrcenxpwqk"),
      password: env("DATABASE_PASSWORD", "6YyseexNnw"),
      ssl: false,
    },
    debug: false,
  },
});
