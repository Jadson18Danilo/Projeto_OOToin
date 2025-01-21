/*
Enunciado:
Crie uma hierarquia de classes para diferentes tipos de contas bancárias. 
A classe baseContaBancaria deve ter o método calcularJuros. Crie classes 
derivadas como ContaPoupanca e ContaCorrente, sobrescrevendo esse método. 
No final, itere por uma lista de contas, chamando o método de forma polimórfica.
*/

// Classe base
class ContaBancaria {
    calcularJuros() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class ContaPoupanca extends ContaBancaria {
    calcularJuros() {
        console.log("Calculando juros para a conta poupança: 0,5% ao mês.");
    }
}

class ContaCorrente extends ContaBancaria {
    calcularJuros() {
        console.log("Calculando juros para a conta corrente: 0,1% ao mês com tarifas adicionais.");
    }
}

// Criando instâncias de cada classe
const contas = [
    new ContaPoupanca(),
    new ContaCorrente()
];

// Iterando pelo array e chamando o método calcularJuros
contas.forEach(conta => conta.calcularJuros());
