// Code your solutions in this file
function writeCards(names) {
    let array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return array;
}

function countDown(number) {
        while (number > 0) {
          console.log(number);
          number -= 1;
        }
        console.log(number);
    
}