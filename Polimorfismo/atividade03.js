/*
Enunciado:
Implemente uma classificação de classes para representar métodos de pagamento. Uma
classe base Pagamento deve conter um método processarPagamento, que é sobrescrito
pelas classes derivadas CartaoDeCredito, Boleto e Pix.
Cada classe derivada deve exibir uma mensagem específica no método
processarPagamento. Crie instâncias de cada classe, armazene-as em um array e itere
chame o método processarPagamentopara demonstrar polimorfismo.
*/

// Classe base
class Pagamento {
    processarPagamento() {
        throw new Error("Este método deve ser sobrescrito pelas subclasses");
    }
}

// Classes derivadas
class CartaoDeCredito extends Pagamento {
    processarPagamento() {
        console.log("Pagamento processado com Cartão de Crédito.");
    }
}

class Boleto extends Pagamento {
    processarPagamento() {
        console.log("Pagamento processado com Boleto.");
    }
}

class Pix extends Pagamento {
    processarPagamento() {
        console.log("Pagamento processado com Pix.");
    }
}

// Criando instâncias de cada classe
const metodosDePagamento = [
    new CartaoDeCredito(),
    new Boleto(),
    new Pix()
];

// Iterando pelo array e chamando o método processarPagamento
metodosDePagamento.forEach(metodo => metodo.processarPagamento());
