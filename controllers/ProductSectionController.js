const PerfumeService = require("../services/PerfumeService");
const CosmeticService = require("../services/CosmeticService");
const GenericResponse = require("../dto/GenericResponse");
const ProductDto = require("../dto/ProductDto");






module.exports = {




    getAllProducts :  async ( req , res ) => {



        const perfumes =  await PerfumeService.getAllPerfumes( req , res );
        const cosmetics =  await CosmeticService.getAllCosmetics( req , res );
      

        return res.send(new GenericResponse("List of all Products: " , new ProductDto( perfumes , cosmetics )))


    }


}