// Code your solutions in this file

let thankYouMessages = [];

function writeCards(name) {
for (let i = 0; i < name.length; i++ ){
   thankYouMessages.push( `Thank you, ${name[i]}, for the wonderful surprise gift!`);
}
return thankYouMessages
}



function countDown(number){
    let counter = number
    while (counter >= 0){
        console.log(counter);
        counter--
    }
        return 
}

countDown(10)

