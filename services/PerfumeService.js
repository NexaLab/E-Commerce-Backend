const db = require("../DbConnection/DbConnection");








module.exports = {



    getAllPerfumes : ( req , res ) => {




        return new Promise((resolve, reject) => {




            db.query("SELECT p.name, p.brand, group_concat(pr.price separator ', ') as prices ,GROUP_CONCAT(pr.size SEPARATOR ', ') AS sizes,p.image_url as image, p.description FROM profumi.perfume_prices pr INNER JOIN perfumes p ON pr.perfume_id = p.id GROUP BY p.name, p.brand,p.image_url, p.description " , ( error , result ) => {



                if (error) {

                    reject(error);
                    console.log(error);
                }



                else {

                    resolve(result);
                }


            })



        })

    },



    getAllBrandsOfPerfume : async ( req , res) => {



        return new Promise((resolve, reject) => {




            db.query("select p.brand as brandName from perfumes p group by p.brand " , ( error , result ) => {



                if (error) {

                    reject(error);
                    console.log(error);
                }



                else {

                    resolve(result);
                }


            })



        })





    },



    getPerfumesOfBrand : ( req , res ) => {





        const brand = req.params.brand





        return new Promise((resolve, reject) => {




            db.query("SELECT p.name, p.brand, group_concat(pr.price separator ', ') as prices ,GROUP_CONCAT(pr.size SEPARATOR ', ') AS sizes,p.image_url as image, p.description FROM profumi.perfume_prices pr INNER JOIN perfumes p ON pr.perfume_id = p.id where p.brand = ? GROUP BY p.name, p.brand,p.image_url, p.description ",[ brand ] , ( error , result ) => {



                if (error) {

                    reject(error);
                    console.log(error);
                }



                else {

                    resolve(result);
                }


            })



        })





    },


    



}