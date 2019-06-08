'use strict';




const CustomerStore = require('./customerStore');

class CustomerPage  {
    constructor() {
        this.customerStore = new CustomerStore();

        onInit();
    }


}


// ------------------------------ Private scope ------------------------------

function onInit(){
    initEventListeners();
}

function initEventListeners(){
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



}

module.exports = CustomerPage;