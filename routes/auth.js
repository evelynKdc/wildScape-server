const {Router} = require("express");
const { registerAuth, loginAuth } = require("../controller/authC");
const { check } = require("express-validator");
const { fieldValidator } = require("../middleware/validator");
const { duplicatedEmailValidator } = require("../helpers/dbValidators");
const router = Router();

router.post("/register", [
    check("name", "El nombre es requerido").isLength({min: 2}),
    check("lastName", "El apellido es requerido").isLength({min: 2}),
    check("password", "La contraseña minimo debe contener 6 caracteres").isLength({min: 6}),
    check("email", "El email debe ser valido").isEmail(),
    check("email").custom(duplicatedEmailValidator),
    check("Dni", "El DNi es requerido").isLength({min: 8}),
    fieldValidator
] ,registerAuth);
router.post("/login", [
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    fieldValidator
] ,loginAuth);
module.exports = router;