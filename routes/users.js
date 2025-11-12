const router = require("express").Router();
router.get("/users", () => console.log("GET users"));
router.get("/:userId", () => console.log("GET users by ID"));
router.Post("/users", () => console.log("POST users"));

// const ClothingItem = require("../models/clothingItem");

module.exports = router;
