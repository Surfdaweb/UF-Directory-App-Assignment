/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.find({ name: 'Library West' }, function (err, listings) {
        if (err) throw err;

        console.log(listings);
    })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findONeAndRemove({ code: 'CABL' }, function (err, listings) {
        if (err) throw err;

        console.log('CABL deleted');
    });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console.
    701 N Broadway, Sleepy Hollow, NY 10591, United States
    */
    Listing.findOneAndUpdate({address: '701 N Broadway, Sleepy Hollow, NY 10591, United States'}, {address: '432 Newell Dr, Gainesville, FL 32611, United States'}, function(err, listings) {
        if (err) throw err;

        console.log(listings);
    }
};
var retrieveAllListings = function() {
    Listing.find({}, function (err, listings) {
        if (err) throw err;

        console.log(listings);
    })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();