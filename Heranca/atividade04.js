/*
Enunciado:
Crie uma classe base ContaBancaria com um atributo protegido _saldo e um método
verSaldo. Crie uma classe derivada ContaCorrente que implementa métodos
depositar e sacar, com validação para impedir saques maiores que o saldo.
*/

class ContaBancaria {
    constructor(saldo) {
      this.saldo = saldo
    }
  }

  class contaCorrente extends ContaBancaria {
    constructor(saldo){
        super(saldo)
        this.valor = valor
    }

exibirInfo() {
    console.log(`saldo: ${this.saldo}`)
    }

depositar(valor) {
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para depósito inválido`);
        }
        this.saldo += valor;
        return this.saldo;
    }

sacar(valor){
        if (valor <= 0) {
            throw new Error(`Valor R$ ${valor} para saque inválido`);
        }
        if (this.saldo < valor) {
            throw new Error(`Saldo insuficiente para saque de R$ ${valor}`);
        }
        this.saldo -= valor;
        return this.saldo;
    }
    
}

const contaCorrente1 = new contaCorrente(50)

contaCorrente1.exibirInfo()