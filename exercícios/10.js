// cria a classe funcionário
class Funcionario {
    //contrutor da classe
    constructor(nome, idade, salarioBase){
    // variáveis
    this.nome = nome;
    this.idade = idade;
    this.salarioBase = salarioBase;
    }
    // método para calcular o salário
    calcularSalario() {
        // retorna o valor do salário sem adicionais
        return this.salarioBase;
    }
}

// cria a classe professor que extende funcionário
class Professor extends Funcionario {
    construtor
    constructor(nome, idade, salarioBase, disciplina, horaSemanal) {
        // o que vai herdar da classe funcionários
        super(nome, idade, salarioBase);
        // novas variáveis não herdadas
        this.disciplina = disciplina;
        this.horaSemanal = horaSemanal
    }
    // método calcular salário com adicionais
    calcularSalario() {
        // contante valor hora/aula
        let valorAula = 10;
        // retorno do salário total
        return this.salarioBase + (this.horaSemanal * valorAula);
     
    }
}
// variáveis dos professores
let professor1 = new Professor("Cristiana", 40, 2000, 'história', 40)
let professor2 = new Professor("José", 43, 1500, 'geografia', 40)

// resposta que irá aparecer no terminal com o nome do professor e seu salário total
console.log(`O professor(a) ${professor1.nome} recebe R$ ${professor1.calcularSalario()}`);
console.log(`O professor(a) ${professor2.nome} recebe R$ ${professor2.calcularSalario()}`)