# js-node-express-boilerplate

Basic boiler plate for Node Js application (Javascript).

**Everything's secondary when security was breached**. This boiler plate was written with security in mind. If you find any issues with security or performance or even any feature update, please raise an **issue or PR** with fix or feaure.

### Dependencies
Package | Functionality
--------|----------------------------------------
Express | Framework that powers our application.
Bcrypt | Hash function to store digested password.
Cors | To tell browsers that which origins and methods are allowed to consume our API.
JsonWebToken | To provide authorization to access our API.
Yup | Validate user input.
Mongoose | ORM for mongo db.
Dotenv | To read environment variables from .env files.

### Application Structure

```
└── src
    ├── config --------------------- Use this directory to process all configurations
    │   ├── cors.js ---------------- contains CORS config
    │   ├── database.js ------------ contains DB config
    │   └── environment.js --------- Default values for environment variables are set here
    ├── constants ------------------ Global constants
    │   ├── HTTP.js ---------------- All used HTTP success and error codes
    │   ├── MODELS.js -------------- constants that needs for models
    │   └── VALIDATOR.js ----------- constants need for validations
    ├── controller ----------------- controller files
    │   └── UserController.js
    ├── Error ---------------------- Everything regarding errors
    │   ├── CustomError.js --------- while throwing error use CustomError. (This is very basic error. Feel free to add your own complex logics.)
    │   ├── ERRORS.js -------------- Errors that may need to thrown from muliple locations. (constant errors)
    │   └── handler.js ------------- Global Error Handler. All thrown errors can be handled here.
    ├── index.js ------------------- As you know, this is our entry point.
    ├── middleware ----------------- All middlewares goes here (Except validation)
    │   └── AuthMiddleware.js
    ├── model ---------------------- All models (In our case mongoose schema) will goes here.
    │   └── UserModel.js
    ├── router --------------------- All routes are handled here
    │   ├── index.js
    │   └── userRouter.js
    ├── utils ---------------------- Utilities/helper functions
    │   ├── Hasher.js -------------- Password hash and veriry functions.
    │   ├── httpResponse.js -------- Response structure (Edit as per your needs)
    │   └── Jwt.js ----------------- An abstraction to generate JWT.
    └── validator ------------------ Validation middleware
        └── UserValidator.js
```
Add **.env** file in project's root directory. (refer **.env.example** in same directory)

### CodeBase
* As you can see the basic signup, signin and logout functionality is already there in our boiler plate. You can update it acording to your needs. (look before you delete them)
* You may see the code looks slightly different. I've used some session like structure. (To make sure the user cannot login from multiple devices and to invalidate token after logout.
* If you want to allow multiple session and also want to show something to user like (All loged in devices and show Logout from specific device like google... [click here to know more](https://cyber-srikanth.blogspot.com/2020/07/Maintaining-STATE-with-JWT.html).
* In `Jwt.js` you may noticed that, The secret is unique for all useres. `{hash_of_password} + {SECRET}` together forms new_secret. This make sures the token will be invalidated once the user changes the password. (This is good to have)


P.S - Testing, Documenting were not implimented yet. You may need them for development.
 **Rate Limiter have not been implimented. I strongly recomend you to add Rate Limiter before deploy in production.** 
 
