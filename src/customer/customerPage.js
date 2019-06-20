'use strict';


const CustomerStore = require('./customerStore');
const customerStore = new CustomerStore();

initEventListeners();

// ------------------------------ Private scope ------------------------------


function initEventListeners() {
    // Back to index
    $('#customerBackBtn').on('click', () => {
        $('#customerContainer').hide();
        $('#landingContainer').show();
    });

    // Open search module
    $('#customerSearchBtn').on('click', () => {
        $('#customerAddContainer').hide();
        $('#customerSearchContainer').show();
    });

    // Open add customer module
    $('#customerAddbutton').on('click', () => {
        $('#customerSearchContainer').hide();
        $('#customerAddContainer').show();
    });

    $('#customerAddActionBtn').on('click', () => {
        console.log('customerAddActionBtn');
        addCustomer();


    });

    $('#customerSearchActionBtn').on('click', () => {

        console.log('search action button');

        let searchResult =  customerStore.findCustomers($('#customerSearchDropdown').val(), $('#customerSearchInput').val());
        console.log(searchResult);
        if (searchResult.length > 0) {
            $('#customerSearchResult').text(searchResult[0].firstName   + " " + searchResult[0].lastName);
        } else {
            $('#customerSearchResult').text("no customers found");
        }


    });
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

            displaySuccessfulAddTxt($('#customerAddFirstTxt').val(), $('#customerAddLastTxt').val());
            $('#customerAddFirstTxt').val('');
            $('#customerAddLastTxt').val('');
            $('#customerAddPhTxt').val('');
            $('#customerAddEmailTxt').val('');

        } catch (err) {
            displayErrorMessage(err);
        }
    }

    function displaySuccessfulAddTxt(firstname, lastname) {
        const infoText = $('#customerAddInfoText');

        infoText.text("Success! " + firstname + " " + lastname + " was added!");
        infoText.css("color", "green");
        infoText.show();
    }

    function displayErrorMessage(err) {
        const infoText = $('#customerAddInfoText');

        infoText.text("Error! " + err);
        infoText.css("color", "red");

        infoText.show();
    }





