// cria classe animal
class Animal {
    // construtor da classe
    constructor(nome, idade) {
        //  variáveis
        this.nome = nome;
        this.idade = idade;
    }

    // método descrever cachorro
    descreverCachorro() {
        // retorna descrição
        return(`O nome deste animal é ${this.nome} e ele tem ${this.idade} anos.`);
    }
}

// classe gato extende cachorro
class Gato extends Animal {
    //contrutor da classe
    constructor(nome, idade, cor) {
        // o que é herdade
        super(nome, idade);
        // novas variáveis
        this.cor = cor;
        }
        // método para descrever o gato
    descreverGato() {
        // retorna a descrição
        return(`O nome deste animal é ${this.nome}, ele tem ${this.idade} anos e sua cor é ${this.cor}.`);
    }    

    // método som do gato
    miar() {
        return('Miau')
    }
}
// variável cachorro
let cachorro = new Animal('Teddy', 12);
// variável gato
let gato = new Gato('Bolinha', 2, 'siamês');

// descrições e sons que vão ser printados no terminal
console.log(cachorro.descreverCachorro());
console.log(gato.descreverGato()); 
console.log(gato.miar()); 