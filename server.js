/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const dotenv = require("dotenv").config()
const app = express()
const staticRoute = require("./routes/static") // Renamed from 'static' to avoid conflict with express.static

/* ***********************
 * View Engine & Layouts
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "layouts/layout") 
 

/* ***********************
 * Static Assets
 *************************/
app.use(express.static('public')) // CRITICAL: This serves your CSS and Images


/* ***********************
 * Routes
 *************************/
app.use("/", staticRoute)

/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 3000 // Added fallback port
const host = process.env.HOST || 'localhost'

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`)
})
/* ***********************
* Express Error Handler
* *************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message: err.message,
    nav
  })
})