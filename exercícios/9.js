// cria classe somador de notas
class somadorDeNotas {
    // construtores da classe
    constructor() {
        // começa atributo total = 0
        this.total = 0;

    }
    // cria método adicionar notas
    adicionarNota(nota) {
        // variavel total que soma as notas
        this.total += nota;
    }
    // cria método ver total
    verTotal() {
        // devolve no console a soma
        console.log(`Soma das notas: ${this.total}`) 
    }
}

// variavel nova classe para somar as notas
let somador = new somadorDeNotas()

// variáveis das notas
somador.adicionarNota(4);
somador.adicionarNota(5);
somador.adicionarNota(6)

// printa total no terminal
somador.verTotal()