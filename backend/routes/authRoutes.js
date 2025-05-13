const express = require('express')
const User = require('../models/User.js')
const CreateNewProfessor = require('../controllers/CreateNewProf.js')
const Login = require('../controllers/Login.js')

const router = express.Router();

router.post("/register", CreateNewProfessor)
router.post("/login",Login )

module.exports = router;