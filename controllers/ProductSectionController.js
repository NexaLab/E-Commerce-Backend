const PerfumeService = require("../services/PerfumeService");
const CosmeticService = require("../services/CosmeticService");
const GenericResponse = require("../dto/GenericResponse");
const ProductDto = require("../dto/ProductDto");
const CosmeticDto = require("../dto/CosmeticDto")
const PerfumeDto = require ("../dto/PerfumeDto")








module.exports = {

    getAllPerfumes : async (req, res) => {

        const perfumes = await PerfumeService.getAllPerfumes(req, res)
        

        return res.send (new GenericResponse("All Perfumes", new PerfumeDto(perfumes)) )

    },



    getAllProducts :  async ( req , res ) => {



        const perfumes =  await PerfumeService.getAllPerfumes( req , res );
        const cosmetics =  await CosmeticService.getAllCosmetics( req , res );
        
        const products = [ ...perfumes , ...cosmetics ]

        return res.send(new GenericResponse("List of all Products: " , new ProductDto( products )))


    },

    getAllCosmetics: async (req , res) => {


    const cosmetics = await CosmeticService.getAllCosmetics(req, res);

        return res.send( new GenericResponse('All Cosmetics' , new CosmeticDto(cosmetics) ))




    }

}