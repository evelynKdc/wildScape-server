const { Router } = require("express");
const { fieldValidator } = require("../middleware/validator");
const { validateJWT } = require("../middleware/jwt-validator");
const { getUserByToken } = require("../controller/userC");
const router = Router();

router.get(
    "/profile/",
    [
      validateJWT,
      fieldValidator,
    ],
    getUserByToken
  );
  
  module.exports = router;