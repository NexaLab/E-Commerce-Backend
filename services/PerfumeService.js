const db = require("../DbConnection/DbConnection");







module.exports = {



    getAllPerfumes : ( req , res ) => {




        return new Promise((resolve, reject) => {




            db.query("select * from perfumes" , ( error , result ) => {



                if (error) {

                    reject(error);
                }



                else {

                    resolve(result);
                }


            })



        })

    }


}