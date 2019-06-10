'use strict';


const CustomerStore = require('./customerStore');
const customerStore = new CustomerStore();

initEventListeners();

// ------------------------------ Private scope ------------------------------


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
        console.log('customerAddActionBtn');
        addCustomer();


    }) ;

}

function addCustomer() {
    console.log('addCustomer');

    try {
        customerStore.addCustomer(
            $('#customerAddFirstTxt').val(),
            $('#customerAddLastTxt').val(),
            $('#customerAddPhTxt').val(),
            $('#customerAddEmailTxt').val(),
        );

        displaySuccessfulAddTxt();
    } catch (err) {
        displayErrorMessage(err);
    }


function displaySuccessfulAddTxt(){
    const infoText = $('#customerAddInfoText');

    infoText.text("Success!");
    infoText.show();
}

function displayErrorMessage(err){
    const infoText = $('#customerAddInfoText');

    infoText.text("Error! " + err);
    infoText.show();
}


    // TODO: If error msg logic

}

