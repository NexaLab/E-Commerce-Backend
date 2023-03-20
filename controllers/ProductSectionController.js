const PerfumeService = require("../services/PerfumeService");
const CosmeticService = require("../services/CosmeticService");
const GenericResponse = require("../dto/GenericResponse");
const ProductDto = require("../dto/ProductDto");
const CosmeticDto = require("../dto/CosmeticDto")
const PerfumeDto = require ("../dto/PerfumeDto");
const { getAllBrandsOfPerfume } = require("../services/PerfumeService");








module.exports = {

    getAllPerfumes : async (req, res) => {

        const perfumes = await PerfumeService.getAllPerfumes(req, res)
        

        return res.send (new GenericResponse("All Perfumes", new PerfumeDto(perfumes)) )

    },



    getAllProducts :  async ( req , res ) => {



        const perfumes =  await PerfumeService.getAllPerfumes( req , res );
        const cosmetics =  await CosmeticService.getAllCosmetics( req , res );
        
        const products = [ ...perfumes ]

        return res.send(new GenericResponse("List of all Products: " , new ProductDto( products )))


    },

    getAllCosmetics: async (req , res) => {


    const cosmetics = await CosmeticService.getAllCosmetics(req, res);

        return res.send( new GenericResponse('All Cosmetics' , new CosmeticDto(cosmetics) ))




    },






    getAllBrandsOfPerfume : async ( req , res ) => {


        const brands = await PerfumeService.getAllBrandsOfPerfume();

        return res.send( new GenericResponse('All Cosmetics' , brands ))


    },





    getAllBrandsOfCosmetics : async ( req , res ) => {


        const brands = await CosmeticService.getAllBrandsOfCosmetics( );

        return res.send( new GenericResponse('All Cosmetics' , brands ))


    },




    getPerfumesOfBrand : async ( req , res ) => {



        const perfumes = await PerfumeService.getPerfumesOfBrand( req , res);

        return res.send( new GenericResponse('All Cosmetics' , perfumes ))
        
    } ,




    getCosmeticsOfBrand : async ( req , res ) => {



        const cosmetics = await CosmeticService.getAllCosmeticsOfBrand( req , res )

        return res.send( new GenericResponse('All Cosmetics' , cosmetics ))
        
    }







}