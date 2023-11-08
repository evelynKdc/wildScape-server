const { Router } = require("express");
const { fieldValidator } = require("../middleware/validator");
const { validateJWT } = require("../middleware/jwt-validator");
const { getUserByToken, userPut, userDelete } = require("../controller/userC");
const { check } = require("express-validator");
const router = Router();

router.get(
    "/profile/",
    [
      validateJWT,
      fieldValidator,
    ],
    getUserByToken
  );
  router.put(
    "/:id",
    [
      check("id", "is not a mongo id valid").isMongoId(),
      fieldValidator,
    ],
    userPut
  );
  
  router.delete(
      "/:id",
      [
        check("id", "is not a mongo id valid").isMongoId(),
        fieldValidator,
      ],
      userDelete
    );
  module.exports = router;