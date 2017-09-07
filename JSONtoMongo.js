'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listings = require('./listings');

/* Connect to your database */
mongoose.connect(config.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

Listing.insertMany(listings, function (err, docs) {

    var newListing;
    if (!(listings.coordinates == null) && !(listings.address == null)) {
        newListing = new Listing({
            code: listings.code,
            name: listings.name,
            coordinates: {
                latitude: listings.coordinates.latitude,
                longitude: listings.coordinates.longitude
            },
            address: lisings.address
        });
    }
    else if (listings.coordinates) {
        newListing = new Listing({
            code: listings.code,
            name: listings.name,
            coordinates: {
                latitude: listings.coordinates.latitude,
                longitude: listings.coordinates.longitude
            }
        });
    }
    else if (listings.address) {
        newListing = new Listing({
            code: listings.code,
            name: listings.name,
            address: listings.address
        });
    }
    else {
        newListing = new Listing({
            code: listings.code,
            name: listings.name,
        });
    }

    newListing.save(function (err) {
        if (err) throw err;
    });
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */