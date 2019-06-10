'use strict';

// Instanciates all other classes and assigns jquery globally

let $ = require('jquery');  // re-assigns $ to jquery globally

let customerPage = require('./src/customer/customerPage');
let inventoryPage = require('./src/inventory/inventoryPage');


// -------------------- event listeners for index --------------------

// Go to customer 'page'
$('#customerBtn').on('click', () => {
    $('#landingContainer').hide();
    $('#customerContainer').show();
}) ;

// Go to Inventory 'page'
$('#inventoryBtn').on('click', () => {
    $('#landingContainer').hide();
    $('#inventoryContainer').show();
}) ;