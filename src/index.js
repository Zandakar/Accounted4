'use strict';

// Instanciates all other classes and assigns jquery globally

let $ = require('jquery');  // re-assigns $ to jquery globally

let customerPage = require('./src/customerPage');
let inventoryPage = require('./src/inventoryPage');

// Instanciate other classes
new customerPage();
new inventoryPage();

// -------------------- event listeners for index --------------------

// Go to customer 'page'
$('#customerBtn').on('click', () => {
    console.log('customerBtn');
    $('#landingContainer').hide();
    $('#customerContainer').show();
}) ;

// Go to Inventory 'page'
$('#inventoryBtn').on('click', () => {
    console.log('inventoryBtn');
    $('#landingContainer').hide();
    $('#inventoryContainer').show();
}) ;