/*
Enunciado:
Crie uma classe base Instrumento com o método tocar. Crie duas classes derivadas
Violao e Piano, que devem implementar o método tocar exibindo sons específicos.
*/

// Classe base Instrumento
class Instrumento {
    // Método tocar, que será sobrescrito nas classes derivadas
    tocar() {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

// Classe derivada Violao
class Violao extends Instrumento {
    // Implementação do método tocar para o Violão
    tocar() {
        console.log("Tocando violão: Strum strum strum...");
    }
}

// Classe derivada Piano
class Piano extends Instrumento {
    // Implementação do método tocar para o Piano
    tocar() {
        console.log("Tocando piano: Plink plonk plink...");
    }
}

// Exemplos de uso:

const violao = new Violao();
violao.tocar(); // Exibe o som do violão

const piano = new Piano();
piano.tocar(); // Exibe o som do piano
