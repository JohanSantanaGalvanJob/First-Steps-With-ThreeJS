module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "elrincon2223",
    DB: "testing",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }