// cria classe animal
class Animal {
    // contrutor da classe
    constructor(nome, idade) {
        // variáveis
        this.nome = nome;
        this.idade = idade;
    }

    // método para descrever o animal
    descrever() {
        // retorno
        return(`O nome deste animal é ${this.nome} e ele tem ${this.idade} anos`);
    }
}

// variável cachorro
let cachorro = new Animal('Teddy', 12);
// printa descrição no terminal
console.log(cachorro.descrever())

// variável gato
let gato = new Animal('Bolinha', 3);
// printa descrição no terminal
console.log(gato.descrever())