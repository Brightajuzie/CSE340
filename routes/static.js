const utilities = require("../utilities/")
const express = require('express');
const router = express.Router();

const invCont = require("../controllers/invController") // Ensure this path matches your controller's name

// The Home Route belongs HERE, not in server.js
router.get("/", (req, res) => {
    res.render("index", {
        title: "Home | CSE Motors"
    });
});

module.exports = router;
router.get("/trigger-error", utilities.handleErrors(invCont.triggerError));