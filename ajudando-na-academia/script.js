// function average(...numbers){
//     let sum = 0
//     for(i=0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum/numbers.length;
// }

// // resolução rápida
// function average(...numbers){
//     let sum = 0;

//     numbers.forEach(number =>{
//         sum += number;
//     });

//     return avg = sum/numbers.length
// }

// //refatorando
// function average(...numbers){
//     const sum = numbers.reduce((accum, num) => accum + num, 0);
//     return avg = sum/numbers.length;
// }

//reduzindo
function average(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)/numbers.length;
}

console.log(average(10,9,6,8,9,1,5,7));
console.log(average(2,5,7,1,-2));
console.log(average(10,10,10,10,9));
console.log(average(25,75));
