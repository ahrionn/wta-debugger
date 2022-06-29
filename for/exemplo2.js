const valores1 = [20, 10, 30, 4, 5, 15, 21, 30, 25]
const valores2 = [76, 56, 39, 92, 100, 45, 88]

let total = 0;
for (let i = 0; i < valores1.length; i++) {
    const valor1 = valores1[i];
    for (let j = 0; j < valores2.length; j++) {
        const valor2 = valores2[j];
        total += valor1 + valor2;
    }
}