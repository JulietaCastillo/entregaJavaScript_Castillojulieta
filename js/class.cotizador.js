class Cotizador {
    constructor(cant, factorProvincia, factorUbicacion, costoEnvio) {
        this.cant = parseInt(cant)
        this.factorPr = parseFloat(factorProvincia)
        this.factorUb = parseFloat(factorUbicacion)
        this.costoEn = parseFloat(costoEnvio)
    }
    cotizar() {
        let resultado = (this.cant * this.factorPr * this.factorUb * this.costoEn).toFixed(2)
            return resultado
    }
}