// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }


function sum(...num) {
    return num.reduce ((acc, current) => acc + current);
}

console.log(sum(1, 2, 3, 4, 5));