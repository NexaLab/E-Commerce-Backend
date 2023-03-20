const db = require("../DbConnection/DbConnection");







module.exports = {



    getAllCosmeticsOfBrand: (req, res) => {



        const brand = req.params.brand


        return new Promise((resolve, reject) => {




            db.query("SELECT c.name, c.brand, group_concat(cr.price separator ', ') as prices ,GROUP_CONCAT(cr.size SEPARATOR ', ') AS sizes,c.image_url as image, c.description FROM profumi.cosmetic_prices cr INNER JOIN cosmetics c ON cr.cosmetic_id = c.id where c.brand = ? GROUP BY c.name, c.brand,c.image_url, c.description ", [ brand ], (error, result) => {



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






    getAllBrandsOfCosmetics: () => {




        return new Promise((resolve, reject) => {




            db.query("select c.brand as brandName from cosmetics c group by c.brand ", (error, result) => {



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