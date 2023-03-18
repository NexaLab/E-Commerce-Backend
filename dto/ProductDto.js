



class ProductDto {



    products



    constructor( products  ) {

        this.products = products;
    }




    get products() {

        return this.products;
    }




    set products( data ) {

        this.products = data;
    }






}



module.exports = ProductDto;