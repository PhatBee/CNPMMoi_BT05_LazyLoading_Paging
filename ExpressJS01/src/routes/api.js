const express = require('express');
const auth = require('../middleware/auth');
const delay = require('../middleware/delay');
const { createUser, handleLogin, getUser, getAccount } = require('../controllers/userController');

const apiRoutes = express.Router();

apiRoutes.all(/.*/, auth);

apiRoutes.get("/", (req, res) => {
    return res.status(200).json("Hello World Api")
})

apiRoutes.post("/register", createUser);
apiRoutes.post("/login", handleLogin);
apiRoutes.get("/user", getUser);
apiRoutes.get("/account", delay, getAccount);

module.exports = apiRoutes;