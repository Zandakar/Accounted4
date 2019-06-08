'use strict';


const Store = require('../store.js');
const store = new Store({
    "configName": "customerStore",
    "defaults": {"name":"test"}
});

class CustomerStore {

    constructor(){

        onInit();
    }

    addCustomer(first, last, phNumber, email) {
        console.log('trying addcustomer');

        // let response = {
        //     "isValid": true,
        //     "errMsg": null
        // };

        let newCustomer = {
            "firstName": first,
            "lastName": last,
            "phNumber": phNumber,
            "email": email
        };


            store.set('customer', newCustomer);

            return true;
    }

    searchCustomer() {

    }

    deletecustomer() {

    }



}

function onInit(){

}

function validateNewCustomer(first, last, phNumber, addr){

    // let isValid = true;
    // let errMsg = null;
    //
    // if (!first) {
    //     isValid = false;
    // }
    //
    // if (!last) {
    //     isValid = false;
    // }
    //
    // if (!phNumber) {
    //     isValid = false;
    // }
    //
    // if (!addr) {
    //     isValid = false;
    // }

    return true;
}



module.exports = CustomerStore;