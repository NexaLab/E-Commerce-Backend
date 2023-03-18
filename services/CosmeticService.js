const db = require("../DbConnection/DbConnection");







module.exports = {



    getAllCosmetics : ( req , res ) => {




        return new Promise((resolve, reject) => {




            db.query("select * from cosmetics" , ( error , result ) => {



                if (error) {

                    reject(error);
                    console.log(error);
                }



                else {

                    resolve(result);
                }


            })



        })

    }




}