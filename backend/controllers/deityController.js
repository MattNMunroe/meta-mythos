const express = require("express");
const db = require("../db/dbConfig");
const user = express.Router();
const axios = require("axios");

//controller is needed to have deity popup in backend/postman
