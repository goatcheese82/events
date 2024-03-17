import { body, validationResult } from "express-validator";

const validate = {};

validate.eventRules = () => {
   return [
      body("priority").isInteger()
         .withMessage("Priority accepts only integers")
   ]
}

validate.userRules = () => {
   return [
     // username must be an email
     body('email').isEmail(),
     // password must be at least 5 chars long
     body('password').isLength({ min: 5 }),
   ]
 }

validate.validate = (err, req, res, next) => {
   const errors = validationResult(req)
   if (errors.isEmpty()) {
     return next(err)
   }
   const extractedErrors = []
   errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
 
   return res.status(422).json({
     errors: extractedErrors,
   })
 }

export default validate;