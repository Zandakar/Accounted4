console.log('loading customer page');

const customerStore = require('./src/customerStore');








// ------------------------------ onClick logic ------------------------------


// Go back to landing page
$('#customerBackBtn').on('click', () => {
    $('#customerContainer').hide();
    $('#landingContainer').show();
}) ;

$('#customerSearchBtn').on('click', () => {
    $('#customerActionAddContainer').hide();
    $('#customerActionSearchContainer').show();
}) ;

$('#customerAddbutton').on('click', () => {
    $('#customerActionSearchContainer').hide();
    $('#customerActionAddContainer').show();
}) ;

