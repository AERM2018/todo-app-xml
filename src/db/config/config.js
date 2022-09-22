module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
}
