/*********************************************************************************
*  WEB422 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ricardo Medeiros Student ID: 135745180 Date: January 27, 2020
*  Heroku Link: 
*
********************************************************************************/

let saleData = [];

// Page number
let page = 1;

// Items per page
const perPage = 10;

// Table template
const saleTableTemplate = _.template(
    `<% _.forEach(saleData, function(sales) { %>
        <tr data-id=<%- sales._id %>>
            <td><%- sales.customer.email %></td>
            <td><%- sales.storeLocation %></td>
            <td><%- sales.items.length %></td>
            
        </tr>
    <% }); %>`
);

// Modal template
const saleModelBodyTemplate = _.template(
    `<h4>Customer</h4>
    <strong>email:</strong><%- this.email %><br>
    <strong>age:</strong><%- this.age %><br>
    <strong>satisfaction:</strong><% this.satisfaction %> / 5
    <br><br>
    `
);

// Function to populate saleData array
function loadSaleData() {
    fetch(`https://arnin-web422-ass1.herokuapp.com/api/sales?page=${page}&perPage=${perPage}`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            saleData = myJson;
            let rows = saleTableTemplate(saleData);
            $("#sale-table tbody").html(rows);
            $("#current-page").html(page);
        })
}

// Document is ready
$(function() {

    // Load data into page
    loadSaleData();
});