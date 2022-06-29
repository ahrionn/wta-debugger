var frutas = ["Maçã", "Banana", "Abacaxi", "Morango", "Melancia"];
var pesosKG = [1, 0.5, 1.23, 2, 0.75];
var precosPorKG = [2, 1, 3, 2.5, 1];

let total = 0;
let escolhidas = [];
for (let index = 0; index < frutas.length; index++) {
    const fruta = frutas[index];
    const custo = pesosKG[index] * precosPorKG[index];
    if (custo < 4) {
        total += custo;
        escolhidas.push(fruta);
    }
}