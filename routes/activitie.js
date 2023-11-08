const { Router } = require("express");
const { fieldValidator } = require("../middleware/validator");
const { check } = require("express-validator");
const { validateJWT } = require("../middleware/jwt-validator");
const { createActivitie, getActivitie, getActivitieById, getActivitieByCategorie } = require("../controller/activitieC");
const router = Router();

router.get("/", getActivitie);
router.get("/:id", getActivitieById);
router.get("/categorie/:id", getActivitieByCategorie);
//name, date, meeting, description, maximun,price,duration,requirements,asset,guia,categorie
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("date", "date is required").not().isEmpty(),
    check("meeting", "date is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
    check("maximun", "maximun is required").isNumeric(), 
    check("price", "price is required").isNumeric(),
    check("duration", "duration is required").not().isEmpty(),
    check("requirements", "requirements is required").isArray(),
    check("asset", "asset is required").isArray(),
    check("guia", "guia is required").not().isEmpty(),//validar si existe en bd
    check("categorie", "categorie is required").not().isEmpty(),
    fieldValidator,
  ],
  createActivitie
);

module.exports = router;
