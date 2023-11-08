const {Router} = require("express");
const router = Router();
const { check } = require("express-validator");
const { createGuia, getGuias } = require("../controller/guiaC");
const { validateJWT } = require("../middleware/jwt-validator");
const { fieldValidator } = require("../middleware/validator");

router.get("/", [validateJWT, fieldValidator], getGuias);
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("lastName", "lastName is required").not().isEmpty(),
    check("url", "url is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    fieldValidator,
  ],
  createGuia
);

module.exports = router;
