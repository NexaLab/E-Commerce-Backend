



class ProductDto {



    perfumes;
    cosmetics;



    constructor( perfumes , cosmetics ) {

        this.perfumes = perfumes;
        this.cosmetics = cosmetics;
    }






    get perfumes() {
        
        return this.perfumes;
    }





    set perfumes( data ) {

        this.perfumes = data;
    }




    get cosmetics() {
        
        return this.cosmetics;
    }





    set cosmetics( data ) {

        this.cosmetics = data;
    }






}



module.exports = ProductDto;