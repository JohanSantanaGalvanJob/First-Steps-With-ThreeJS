module.exports = app => {
    const information = require("../controllers/testing.controller");
  
    var router = require("express").Router();
  
    // Create a new Bicycle
    // DECOMMENT:
    router.post("/", information.create);
  
    // Retrieve all information
    router.get("/", information.findAll);
  
    // Retrieve a single Bicycle with id
    router.get("/:id", information.findOne);
  
    // Update a Bicycle with id
    router.put("/:id",information.update);
  
    // Delete a Bicycle with id
    router.delete("/:id", information.delete);
  
    app.use("/account/information", router);
  }
