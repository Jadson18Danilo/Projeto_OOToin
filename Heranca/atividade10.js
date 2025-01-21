/*
Enunciado:
Crie uma classe base Funcionario com um método calcularSalario. Crie classes
derivadas Estagiario e Gerente, onde cada uma implementa a lógica de cálculo do
salário de forma distinta
*/

// Classe base Funcionario
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    // Método calcularSalario, que será sobrescrito nas classes derivadas
    calcularSalario() {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

// Classe derivada Estagiario
class Estagiario extends Funcionario {
    constructor(nome, salarioBase, horasExtras) {
        super(nome, salarioBase); // Chama o construtor da classe base
        this.horasExtras = horasExtras;
    }

    // Implementação do cálculo de salário para Estagiário
    calcularSalario() {
        const salarioTotal = this.salarioBase + (this.horasExtras * 10); // Cada hora extra vale R$10
        console.log(`${this.nome} (Estagiário) - Salário: R$ ${salarioTotal.toFixed(2)}`);
        return salarioTotal;
    }
}

// Classe derivada Gerente
class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase); // Chama o construtor da classe base
        this.bonus = bonus;
    }

    // Implementação do cálculo de salário para Gerente
    calcularSalario() {
        const salarioTotal = this.salarioBase + this.bonus; // Salário base + bônus
        console.log(`${this.nome} (Gerente) - Salário: R$ ${salarioTotal.toFixed(2)}`);
        return salarioTotal;
    }
}

// Exemplos de uso:

// Criando um Estagiário
const estagiario = new Estagiario("João", 1500, 20); // 20 horas extras
estagiario.calcularSalario(); // Salário com horas extras

// Criando um Gerente
const gerente = new Gerente("Maria", 5000, 2000); // Bônus de R$2000
gerente.calcularSalario(); // Salário com bônus
