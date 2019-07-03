'use strict';

const electron = require('electron');
// const path = require('path');
const fs = require('fs');

//C:\Users\User\AppData\Roaming\Accounted4\appData\customerData

class Store {
    constructor(opts) {

        console.log('called Store constructor');

        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        this.path = userDataPath + '\\appData' + '\\'  + opts.dataDirName;

        console.log('path:');
        console.log(this.path);

        onLoad(this.path);
        this.set('test', '{"key":"value"}');




        // WILL DELETE ALL YOUR DATA
        // delete this.data;
        // fs.writeFileSync(this.path, JSON.stringify(this.data));

    }


    // Looks for json file in data dir, parses and returns. returns undefined if not found.
    get(key) {
        console.log('get');

        let data;

        try {
            data = fs.readFileSync(this.path + '\\' + key + '.json');
        } catch (e) {
            throw e;
        }

        return data;

    }

    set(key, val) {
        console.log('set');

        // Replace value in data store with new data
        try {
            fs.writeFileSync(this.path + '\\' + key + '.json', JSON.stringify(val));
        } catch(e) {
            console.error(e);
            throw 'Something went wrong trying to save the data';
        }
    }

    getAllData() {

        return this.data
    }


}

function onLoad(dirPath) {

    // Create base + store directories
    fs.mkdir(dirPath, {recursive: true} ,  err => {

        // Chuck below could be useful
        // if (err && err.code != 'EEXIST') {
        //
        // }

    });


}



// expose the class
module.exports = Store;
