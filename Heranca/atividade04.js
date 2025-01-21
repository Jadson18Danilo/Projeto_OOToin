/*
Enunciado:
Crie uma classe base ContaBancaria com um atributo protegido _saldo e um método
verSaldo. Crie uma classe derivada ContaCorrente que implementa métodos
depositar e sacar, com validação para impedir saques maiores que o saldo.
*/

// Classe base ContaBancaria
class ContaBancaria {
    constructor(saldoInicial = 0) {
        this._saldo = saldoInicial; // Atributo protegido
    }

    // Método para verificar o saldo
    verSaldo() {
        console.log(`Saldo atual: R$ ${this._saldo.toFixed(2)}`);
    }
}

// Classe derivada ContaCorrente
class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial = 0) {
        super(saldoInicial); // Chama o construtor da classe base
    }

    // Método para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    // Método para sacar dinheiro
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
}

// Exemplos de uso:
const minhaConta = new ContaCorrente(500); // Criando uma conta com saldo inicial de R$ 500
minhaConta.verSaldo(); // Exibe o saldo inicial
minhaConta.depositar(200); // Deposita R$ 200
minhaConta.sacar(100); // Saca R$ 100
minhaConta.sacar(700); // Tenta sacar mais do que o saldo disponível
minhaConta.verSaldo(); // Exibe o saldo final