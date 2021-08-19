const jsonHelper = require('./jsonHelper');
const bicicletasDeJSON = jsonHelper.leerArchivo('bicicletas');

const carrera = {
    bicicletas: bicicletasDeJSON,
    bicicletasPorTanda: 4,
    ciclistasHabilitados: function () {
        return this.bicicletas.filter(ciclista => !ciclista.dopaje);
    },
    listarBicicletas: function (array = this.bicicletas) {
        array.forEach(bicicleta => {
            console.log(`
            Ciclista ${bicicleta.ciclista}, marca: ${bicicleta.marca}, rodado: ${bicicleta.rodado}, peso ${bicicleta.peso}Kg, largo ${bicicleta.largo}cm, estado: ${bicicleta.dopaje ? "Inhabilitado" : "Habilitado"}`);
        });
    },
    buscarPorId: function (numberID) {
        return this.bicicletas.find(bicicleta => bicicleta.id === numberID);
    },
    buscarPorRodado: function (numberRodado) {
        return this.ciclistasHabilitados().filter(bicicleta => bicicleta.rodado === numberRodado);
    },
    ordernarPorRodado: function () {
        return this.bicicletas.sort((biciA, biciB) => biciB.rodado - biciA.rodado);
    },
    generarTanda: function (numberRodado, numberPeso) {
        return this.buscarPorRodado(numberRodado).filter(bicicleta => bicicleta.peso <= numberPeso).slice(0, this.bicicletasPorTanda);
    },
    calcularPodio: function (arrayCiclistas) {
        arrayCiclistas.sort((ciclistaA, ciclistaB) => ciclistaB.puntaje - ciclistaA.puntaje).slice(0, 3);
        console.log(`
        El ganador es: ${arrayCiclistas[0].ciclista}, con un puntaje de ${arrayCiclistas[0].puntaje}.
        El segundo puesto es para ${arrayCiclistas[1].ciclista}, con un puntaje de ${arrayCiclistas[1].puntaje}.
        El tercer puesto es para ${arrayCiclistas[2].ciclista}, con un puntaje de ${arrayCiclistas[2].puntaje}.`)
    }
}

// 2.D
//carrera.listarBicicletas()
// 2.E
// console.log(carrera.buscarPorId(9))
// 2.F
// console.table(carrera.buscarPorRodado(24));
// 2.G
// console.table(carrera.ordernarPorRodado());
// 2.H
// console.table(carrera.generarTanda(24, 10));
// 2.I
carrera.calcularPodio(carrera.generarTanda(24, 100))
