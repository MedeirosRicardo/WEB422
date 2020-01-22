const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let saleSchema = new Schema({
    saleDate: Date,
    items: [{name: String, tags: [String], price: Number, quantity: Number}],
    storeLocation:String,
    customer: {gender: String, age: Number, email: String, satisfaction: Number},
    couponUsed: Boolean,
    purchaseMethod: String
});

module.exports = saleSchema;