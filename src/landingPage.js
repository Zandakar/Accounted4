// Acts as the central navigation page and loads Jquery for the rest.
// NOTE: variables are shared among all scripts in the div

let $ = require('jquery');  // jQuery now loaded and assigned to $

console.log('loading landing');

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