const express = require('express');
const router = express.Router();

// The Home Route belongs HERE, not in server.js
router.get("/", (req, res) => {
    res.render("index", {
        title: "Home | CSE Motors"
    });
});

module.exports = router;
router.get("/trigger-error", utilities.handleErrors(invCont.triggerError));