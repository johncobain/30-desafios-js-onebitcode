function media(...notas){
    let notaTotal = 0
    for(i=0; i<notas.length; i++){
        notaTotal += notas[i];
    }
    return notaTotal/notas.length;
}

console.log(media(10,9,6,8,9,1,5,7));
console.log(media(2,5,7,1,-2));
console.log(media(10,10,10,10,9));
console.log(media(25,75));
