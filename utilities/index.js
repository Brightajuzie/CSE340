/* **************************************
* Build the vehicle detail HTML
* ************************************ */
Util.buildVehicleDetailHtml = async function (data) {
  let display = '<div id="detail-display">'
  display += `<img src="${data.inv_image}" alt="${data.inv_make} ${data.inv_model} on CSE Motors">`
  display += '<div id="detail-info">'
  display += `<h2>${data.inv_make} ${data.inv_model} Details</h2>`
  display += `<p class="price">Price: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.inv_price)}</p>`
  display += `<p><strong>Description:</strong> ${data.inv_description}</p>`
  display += `<p><strong>Color:</strong> ${data.inv_color}</p>`
  display += `<p><strong>Mileage:</strong> ${data.inv_miles.toLocaleString()} miles</p>`
  display += '</div>'
  display += '</div>'
  return display
}