/*
Enunciado:
Crie uma classe base FormaGeometrica com um método calcularArea. As classes
derivadas Retangulo e Circulo devem implementar o cálculo da área com suas
fórmulas específicas.
*/

// Classe base
class FormaGeometrica {
    calcularArea() {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

// Classe derivada Retangulo
class Retangulo extends FormaGeometrica {
    constructor(largura, altura) {
        super(); // Chama o construtor da classe base
        this.largura = largura;
        this.altura = altura;
    }

    // Implementa o cálculo da área do retângulo
    calcularArea() {
        return this.largura * this.altura;
    }
}

// Classe derivada Circulo
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super(); // Chama o construtor da classe base
        this.raio = raio;
    }

    // Implementa o cálculo da área do círculo
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

// Exemplos de uso:
const retangulo = new Retangulo(5, 10);
const circulo = new Circulo(7);

console.log("Área do Retângulo:", retangulo.calcularArea()); // 50
console.log("Área do Círculo:", circulo.calcularArea()); // 153.94