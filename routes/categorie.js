const { Router } = require("express");
const { fieldValidator } = require("../middleware/validator");
const { check } = require("express-validator");
const { createCategorie, getCategories } = require("../controller/categorieC");
const { validateJWT } = require("../middleware/jwt-validator");
const { createActivitie } = require("../controller/activitieC");
const router = Router();

router.get("/", getCategories);
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("url", "url is required").not().isEmpty(),
    fieldValidator,
  ],
  createActivitie
);

module.exports = router;
