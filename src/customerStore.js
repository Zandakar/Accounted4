'use strict';


const Store = require('./store');

class CustomerStore {

    constructor(){

        this.store = new Store({
            "configName": "customerStore",
            "defaults": '{"name":"test"}'
        });

        onInit();
    }

    addCustomer() {
        console.log('trying addcustomer');
        this.store.test();
    }

    searchCustomer() {

    }

    deletecustomer() {

    }



}

function onInit(){

}



module.exports = CustomerStore;