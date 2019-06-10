'use strict';

//  NOTE: landingPage, inventoryPage and customerPage all share global scope
//        as they are imported into index.html

console.log('loading inventory page');

initEventListeners();


function initEventListeners(){

    $('#inventoryBackBtn').on('click', () => {
        $('#inventoryContainer').hide();
        $('#landingContainer').show();
    }) ;
}

