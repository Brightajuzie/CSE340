// Route to build vehicle detail view
router.get("/detail/:inventoryId", utilities.handleErrors(invCont.buildDetailView));