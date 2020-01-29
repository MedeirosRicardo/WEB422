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
            <td><%- moment.utc(sales.saleDate).local().format("LLLL") %></td>
            
        </tr>
    <% }); %>`
);

// Modal template
const saleModalBodyTemplate = _.template(
    `<h4>Customer</h4>
    <strong>email:</strong> <%- obj.customer.email %><br>
    <strong>age:</strong> <%- obj.customer.age %><br>
    <strong>satisfaction:</strong> <%- obj.customer.satisfaction %> / 5
    <br><br>
    <h4>Items: $<%- obj.total.toFixed(2) %></h4>
    <table class="table">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <% _.forEach(obj.items, function(sales) { %>
                <tr data-id=<%- sales._id %>>
                    <td><%- sales.name %></td>
                    <td><%- sales.quantity %></td>
                    <td>$<%- sales.price %></td>
                </tr>
            <% }); %>
        </tbody>
    </table>`
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

// Clicked row
$("#sale-table tbody").on("click","tr",function(e) {
    let clickedRow = $(this).attr("data-id");
    let clickedSale = saleData.find( ({ _id}) => _id == clickedRow);
    
    // Add property total to clicked object
    clickedSale.total = 0;

    // For loop to sum the total of the sale, price * quantity
    for (let i = 0; i < clickedSale.items.length; i++) {
        clickedSale.total += clickedSale.items[i].price * clickedSale.items[i].quantity;
    }
    
    $("#sale-modal h4").html(`Sale: ${clickedSale._id}`);
    $("#modal-body").html(saleModalBodyTemplate(clickedSale));

    $('#sale-modal').modal( {
        backdrop: 'static',
        keyboard: false
    });
});

// Previous page button
$("#previous-page").on("click", function(e) {
    if (page > 1) {
        page--;
    }
    loadSaleData();
});

// Next page button
$("#next-page").on("click", function(e) {
    page++;
    loadSaleData();
});

// Document is ready
$(function() {
    
    // Load data into page
    loadSaleData();
});