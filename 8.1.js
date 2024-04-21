class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        return(`O nome deste animal é ${this.nome} e ele tem ${this.idade} anos.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade); // Adicionado ponto e vírgula
        this.cor = cor; // Corrigido a declaração da variável cor
    }
    descrever() {
        return(`O nome deste animal é ${this.nome} e ele tem ${this.idade} anos e sua cor é ${this.cor}.`);
    }
    miar() {
        return('Miau');
    }
}

let cachorro = new Animal('Teddy', 12); // Criando um animal (cachorro)
let gato = new Gato('Bolinha', 2, 'branco'); // Criando um gato

console.log(cachorro.descrever()); // Saída: O nome deste animal é Teddy e ele tem 12 anos.
console.log(gato.descrever()); // Saída: O nome deste animal é Bolinha e ele tem 2 anos.
console.log(gato.miar()); // Saída: Miau
