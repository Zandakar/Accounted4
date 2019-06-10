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

        let newCustomer = {
            "firstName": first,
            "lastName": last,
            "phNumber": phNumber,
            "email": email
        };

            try {
                validateNewCustomer(newCustomer);
                store.set(newCustomer.phNumber, newCustomer);
                return true;
            } catch (err) {
                // Pass error up the chain
                throw err;
            }

    }

    searchCustomer() {

    }

    deletecustomer() {

    }



}

function onInit(){

}

function validateNewCustomer(newUserObj){

    console.log(newUserObj.first);

    if (!newUserObj.firstName) {
        throw  'No first name';
    }

    if (!newUserObj.lastName) {
        throw  'No last name';
    }

    if (!newUserObj.phNumber) {
        throw  'No Phone number';

        let phRegex = /[0-9]*/g;

        // todo:  use .match? need to do more research

        phRegex.exec(newUserObj.phNumber);


    }

    if (!newUserObj.email) {
        throw  'No email address';
    }
}



module.exports = CustomerStore;