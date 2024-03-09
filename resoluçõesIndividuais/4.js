class Carro {
    constructor() {
        this.velocidadeAtual = 0;
    }

    acelerar(velocidade) {
        this.velocidadeAtual += velocidade;
    }
}

let meuCarro = new Carro();

meuCarro.acelerar(60);

meuCarro.acelerar(50);


console.log(meuCarro.velocidadeAtual);