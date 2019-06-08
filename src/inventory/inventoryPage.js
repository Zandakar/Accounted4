'use strict';

//  NOTE: landingPage, inventoryPage and customerPage all share global scope
//        as they are imported into index.html

console.log('loading inventory page');

class InventoryPage {
    constructor() {
        console.log('inventoryPage constructor');
        onInit();
    }

}

function onInit(){

    $('#inventoryBackBtn').on('click', () => {
        $('#inventoryContainer').hide();
        $('#landingContainer').show();
    }) ;
}


module.exports = InventoryPage;