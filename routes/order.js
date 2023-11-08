const { Router } = require("express");
const { fieldValidator } = require("../middleware/validator");
const { check } = require("express-validator");
const { validateJWT } = require("../middleware/jwt-validator");
const { createOrder, getOrderByUserId } = require("../controller/orderC");
const router = Router();


router.get("/:id", getOrderByUserId);
router.post(
    "/",
    [
      check("user", "user is required").not().isEmpty(),
      check("activitie", "activitie is required").not().isEmpty(),
      check("total", "activitie is required").isNumeric(),
      check("people", "people is required").isNumeric(),
      fieldValidator,
    ],
    createOrder
  );

  module.exports=router