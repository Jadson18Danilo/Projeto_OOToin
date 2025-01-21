/*
Enunciado:
Crie uma classe base Conversor com um método estático celsiusParaFahrenheit.
Crie uma classe derivada ConversorAvancado que adiciona o método estático
fahrenheitParaCelsius.
*/

// Classe base Conversor
class Conversor {
    // Método estático para converter Celsius para Fahrenheit
    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

// Classe derivada ConversorAvancado
class ConversorAvancado extends Conversor {
    // Método estático para converter Fahrenheit para Celsius
    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}

// Exemplos de uso:

// Convertendo Celsius para Fahrenheit usando a classe base
const celsius = 30;
const fahrenheit = Conversor.celsiusParaFahrenheit(celsius);
console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`);

// Convertendo Fahrenheit para Celsius usando a classe derivada
const fahrenheitValor = 86;
const celsiusConvertido = ConversorAvancado.fahrenheitParaCelsius(fahrenheitValor);
console.log(`${fahrenheitValor}°F é igual a ${celsiusConvertido.toFixed(2)}°C.`);