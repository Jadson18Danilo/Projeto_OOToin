/*
Enunciado:
Crie uma classe base chamada Funcionario com os atributos nome e salario. Depois,
crie uma classe derivada Gerente que adiciona o atributo departamento e um método
para exibir todas as informações do gerente.
*/

// Classe base chamada Animal
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome // Define o nome do Funcionario
      this.salario = salario // // Define o nome do Funcionario
    }
  }
   
  // Classe derivada Gerente
  class Gerente extends Funcionario {
    constructor(nome, salario, departamento){
        super(nome, salario) // Chama o construtor da classe base Funcionario
        this.departamento = departamento // Adiciona o atributo departamento
    }

// Método para exibir todas as informações do gerente
exibirInfo() {
    console.log(`Nome: ${this.nome}`)
    console.log(`Salário: R$${this.salario.toFixed(2)}`)
    console.log(`Departamento: ${this.departamento}`)
    }
}

// Instanciando um objeto Gerente
const gerente1 = new Gerente("Calos Silva", 8000, "TI")

// Exibindo as informações do gerente
gerente1.exibirInfo()





   
   