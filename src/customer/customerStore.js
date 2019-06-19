'use strict';


const Store = require('../store.js');
const store = new Store({
    "configName": "customerStore",
    "defaults": {}
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
                //TODO: Format stuff (take spaces out of ph numbers etc), caps in first / last name
                store.set(newCustomer.phNumber, newCustomer);
                return true;
            } catch (err) {
                // Pass error up the chain
                throw err;
            }

    }

    // Returns full customer object or error
    getCustomer(phNumber) {
        // Ph number used as key in data
        const Customer = store.get(phNumber);
    }



    deletecustomer() {

    }



}

function onInit(){

}

// returns bool for whether customer exists
function doesCustomerExist(phNumber) {
    // Ph number used as key in data
    console.log('doesCustomerExist:' + !!(store.get(phNumber)));
    return !!(store.get(phNumber));
}

function validateNewCustomer(newUserObj){

    console.log(newUserObj.first);

    if(doesCustomerExist(newUserObj.phNumber)){
        throw 'Customer with this phone number already exists!';
    }

    // First name validation
    if (!newUserObj.firstName) {
        throw  'No first name.';
    }

    // Last name validation
    if (!newUserObj.lastName) {
        throw  'No last name.';
    }

    // Phone number validation
    let phRegex = /^[0-9]*\s*[0-9]*\s*[0-9]*\s*[0-9]*[0-9]$/g;
    if (!newUserObj.phNumber) {
        throw  'No Phone number.';

    } else if (!newUserObj.phNumber.match(phRegex)) {
        throw  'Phone number must only contain numbers and whitespaces, and end with a number.';
    }

    // Email validation
    let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g;
    if (!newUserObj.email) {
        throw  'No email address';
    } else if (!newUserObj.email.match(emailRegex)) {
        throw  'Email address must be valid.';
    }

}



module.exports = CustomerStore;