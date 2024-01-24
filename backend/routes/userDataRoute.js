const express = require("express");
const router = express.Router();
const userData = require("../models/userDataModel");

//CREATE
router.post("/", async (req, res) => {
  console.log(req.body);
  const { fname, email, age } = req.body;
  try {
    const userAdded = await userData.create({
      name: fname,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
//GET
router.get("/", async (req, res) => {
    try {
      const allUsers = await userData.find();
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //FIND BY MAIL
  router.get("/find/email/:email",async (req, res) => {
    const mail = req.params.email;
    try {
      const allUsers = await userData.find({email:mail});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //FIND BY NAME
  router.get("/find/name/:fname",async (req, res) => {
    const fname = req.params.fname;
    try {
      const allUsers = await userData.find({name:fname});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //FIND BY PARTIAL NAME
  router.get("/find/pname/:fname",async (req, res) => {
    const fname = req.params.fname;
    try {
      const allUsers = await userData.find({ name: { $regex: fname, $options: "i" } });
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //FIND BY AGE
  router.get("/find/age/:age",async (req, res) => {
    const age = req.params.age;
    try {
      const allUsers = await userData.find({age:age});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //FIND BY > AGE
  router.get("/find/gage/:age",async (req, res) => {
    const age = req.params.age;
    try {
      const allUsers = await userData.find({age:{$gt:age}});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //FIND BY < AGE
  router.get("/find/lage/:age",async (req, res) => {
    const age = req.params.age;
    try {
      const allUsers = await userData.find({age:{$lt:age}});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  );
  //GET SINGLE USER
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleUser = await userData.findById({ _id: id });
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  //DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await userData.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  //UPDATE
router.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const newDataobject = {
      name:req.body.fname,
      email:req.body.email,
      age:req.body.age
    };
    console.log("get body", req.body);
    console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await userData.findByIdAndUpdate(id, newDataobject, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) { 
      res.status(400).json({ error: error.message });
    }
  });



module.exports = router;