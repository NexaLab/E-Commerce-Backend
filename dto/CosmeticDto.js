
class CosmeticDto {



    cosmetics;

    constructor(data) {
        this.cosmetics = data
    }



    get cosmetics() {
        return this.cosmetics
    }

    set cosmetics(data) {
        this.cosmetics = data
    }


}

module.exports = CosmeticDto