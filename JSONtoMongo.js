'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

fs.readFile('listings.json', function (err, data) {
    if (err) {
        throw err;
    }

    //parses the json file
    var stuff = JSON.parse(data);

    //gets the array of mini objects in the big json object
    var listingData = stuff.entries;

    //goes through each listing individually
    listingData.forEach(function (listing) {

        //creates the actual listing (details handled by the schema)
        var newListing = new Listing(listing);

        //saves the listing
        newListing.save(function (err) {
            if (err) throw err;
            console.log('Listing made!');
        });
    });

});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */