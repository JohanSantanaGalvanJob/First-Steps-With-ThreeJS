module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("accounts", {
      fullName: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Test;
  }
  