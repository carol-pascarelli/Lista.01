class Funcionario {
    // Construtor da classe com os atributos nome, idade e salário base
    constructor(nome, idade, salarioBase) {
      this.nome = nome;
      this.idade = idade;
      this.salarioBase = salarioBase;
    }
  
    // Método para calcular o salário total (será sobrescrito nas subclasses)
    calcularSalario() {
      return this.salarioBase; // Salário base para funcionários genéricos
    }
  }
  
  // Definindo a classe Professor que herda de Funcionário
  class Professor extends Funcionario {
    // Construtor da classe Professor, que chama o construtor de Funcionário e adiciona os atributos específicos
    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana) {
      super(nome, idade, salarioBase);
      this.disciplina = disciplina;
      this.horasAulaSemana = horasAulaSemana;
    }
  
    // Sobrescrevendo o método calcularSalario para professores
    calcularSalario() {
      // Cálculo do salário do professor: multiplicando horas de aula pelo valor da hora/aula
      const valorHoraAula = 20; // Valor fictício da hora/aula
      return this.salarioBase + (this.horasAulaSemana * valorHoraAula);
    }
  }
  
  // Criando dois objetos do tipo Professor com informações fictícias
  const professor1 = new Professor("Professor 1", 35, 3000, "Matemática", 20);
  const professor2 = new Professor("Professor 2", 40, 3500, "História", 15);
  
  // Chamando o método calcularSalario() para cada objeto e mostrando o salário calculado no console
  console.log(`${professor1.nome}: Salário total = ${professor1.calcularSalario()} reais`);
  console.log(`${professor2.nome}: Salário total = ${professor2.calcularSalario()} reais`);
