
# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

**c) Imprime os números pares de 2 a 10.**

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

**A) let carro = new Carro("Toyota");**

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

**A) 18**

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

**A) ![Uma imagem](assets/ex04_1.PNG)**

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

**A) ![Uma imagem](assets/ex05_1.PNG)**

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

**A) "Olá, meu nome é João. Olá, meu nome é Maria."**

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

**RESPOSTA**
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

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

**RESPOSTA**
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

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

**RESPOSTA**

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

______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

**RESPOSTA**

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

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.