const mongoose = require("mongoose");
const saleSchema = require("./saleSchema.js");

module.exports = function(connectionString){

    let Sale;

    return {

        initialize: function(){
            return new Promise((resolve,reject)=>{
               let db1 = mongoose.createConnection(connectionString,{ useNewUrlParser: true,useUnifiedTopology: true });
               
                db1.on('error', ()=>{
                    reject();
                });
                db1.once('open', ()=>{
                    Sale = db1.model("sales", saleSchema);
                    resolve();
                });
            });
        },

        addNewSale: function(data){
            return new Promise((resolve,reject)=>{

                let newSale = new Sale(data);

                newSale.save((err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(`new sale: ${newSale._id} successfully added`);
                    }
                });
            });
        },

        getAllSales: function(page, perPage){
            return new Promise((resolve,reject)=>{
                if(+page && +perPage){
                        page = (+page) - 1;
                        Sale.find().sort({saleDate: -1}).skip(page * +perPage).limit(+perPage).exec().then(sales=>{
                            resolve(sales)
                        }).catch(err=>{
                            reject(err);
                        });
                }else{
                    reject('page and perPage query parameters must be present');
                }
            });
            
        },

        getSaleById: function(id){
            return new Promise((resolve,reject)=>{
                Sale.findOne({_id: id}).exec().then(sale=>{
                    resolve(sale)
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        updateSaleById: function(data, id){
            return new Promise((resolve,reject)=>{
                Sale.updateOne({_id: id}, {
                    $set: data
                }).exec().then(()=>{
                    resolve(`sale ${id} successfully updated`)
                }).catch(err=>{
                    reject(err);
                });



            });
        },

        deleteSaleById: function(id){
            return new Promise((resolve,reject)=>{
                Sale.deleteOne({_id: id}).exec().then(()=>{
                    resolve(`sale ${id} successfully deleted`)
                }).catch(err=>{
                    reject(err);
                });
            });
        }

    }

}