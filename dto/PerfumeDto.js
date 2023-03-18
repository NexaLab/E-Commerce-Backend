

class PerfumeDto {
    perfumes;

    constructor(data) {
        this.perfumes = data
    }

    get perfumes() {
        return this.perfumes
    }

    set perfumes(data) {
        this.perfumes = data
    }
}

module.exports = PerfumeDto