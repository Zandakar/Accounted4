'use strict';


const CustomerStore = require('./customerStore');
const customerStore = new CustomerStore();

class CustomerPage  {
    constructor() {

        onInit();
    }


}


// ------------------------------ Private scope ------------------------------

function onInit(){
    initEventListeners();
}

function initEventListeners(){
    // Back to index
    $('#customerBackBtn').on('click', () => {
        $('#customerContainer').hide();
        $('#landingContainer').show();
    }) ;

    // Open search module
    $('#customerSearchBtn').on('click', () => {
        $('#customerAddContainer').hide();
        $('#customerSearchContainer').show();
    }) ;

    // Open add customer module
    $('#customerAddbutton').on('click', () => {
        $('#customerSearchContainer').hide();
        $('#customerAddContainer').show();
    }) ;

    $('#customerAddActionBtn').on('click', () => {
        console.log();

    }) ;

}

module.exports = CustomerPage;