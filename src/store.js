'use strict';

const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {
    constructor(opts) {

        console.log('called Store constructor');

        const userDataPath = (electron.app || electron.remote.app).getPath('userData');

        this.path = path.join(userDataPath, opts.configName + '.json');

        this.data = parseDataFile(this.path, opts.defaults);



        // WILL DELETE ALL YOUR DATA
        // delete this.data;
        // fs.writeFileSync(this.path, JSON.stringify(this.data));

    }

    get(key) {
        return this.data[key];
    }

    set(key, val) {

        try {
            this.data[key] = val;
            fs.writeFileSync(this.path, JSON.stringify(this.data));
            console.log(JSON.stringify(this.data));
        } catch(e) {
            throw 'Something went wrong trying to save the data'
        }
    }

    getAllData() {

        return this.data
    }


}

function parseDataFile(filePath, defaults) {

    // try-catch for initial creation of file as it won't exist
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch(error) {
        // if there was some kind of error, return the passed in defaults instead.
        return defaults;
    }
}


// expose the class
module.exports = Store;
