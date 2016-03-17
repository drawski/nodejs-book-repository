var mongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/book_inventory_stock';
var collectionPromise = mongoClient.connect(url)
    .then(function(db) {
        console.log("Connected correctly to server");
        return db.collection('books_drawski');
    });

module.exports = {
    findAll: function() {
        return collectionPromise
            .then(function(collection) {
                return collection.find({}).toArray();
            });
    },
    stockUp: function (isbn, count) {
        return collectionPromise
            .then(function(collection) {
                return collection.updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
    },
    getBook: function(isbn) {
        return collectionPromise
            .then(function(collection) {
                console.log(isbn);
                return collection.find({isbn: isbn}).limit(1).next();
            });
    }
};
