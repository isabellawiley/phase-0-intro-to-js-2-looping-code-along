// Code your solutions in this file

function writeCards(names, event){
    const cards = [];
    for(let count = 0; count < names.length; count++){
        cards.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(integer){
    let num = integer;
    while(num >= 0){
        console.log(num);
        num--;
    }
}