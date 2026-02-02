/* ***************************
 * Build vehicle detail view
 * ************************** */
invCont.buildDetailView = async function (req, res, next) {
  const inv_id = req.params.inventoryId
  const data = await invModel.getInventoryById(inv_id)
  const vehicleHtml = await utilities.buildVehicleDetailHtml(data)
  const nav = await utilities.getNav()
  res.render("./inventory/detail", {
    title: `${data.inv_make} ${data.inv_model}`,
    nav,
    vehicleHtml,
  })
}
invCont.triggerError = async function (req, res, next) {
  throw new Error("Oh no! This is a deliberate 500 error for testing purposes.");
};