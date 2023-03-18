const PerfumeService = require('../services/PerfumeService')
const CosmeticService = require('../services/CosmeticService')
const GenericResponse = require('../dto/GenericResponse')
const PerfumeDto = require('../dto/PerfumeDto')
const CosmeticDto = require('../dto/CosmeticDto')


module.exports = {


    getAllPerfumes : async (req, res) => {

        const perfumes = await PerfumeService.getAllPerfumes(req, res)
        

        return res.send (new GenericResponse("All Perfumes", new PerfumeDto(perfumes)) )





    },

    getAllCosmetics: async (req , res) => {


        const cosmetics = await CosmeticService.getAllCosmetics(req, res);

        return res.send( new GenericResponse('All Cosmetics' , new CosmeticDto(cosmetics) ))




    }

}