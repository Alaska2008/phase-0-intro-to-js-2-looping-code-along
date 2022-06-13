// Code your solutions in this file
const array = ["Guadalupe", "Ollie", "Aki"];
const strg = "surprise";

function writeCards(array, strg="surpise"){
    let newArray =[];
    for(let i=0; i<array.length;i++) {
        newArray.push("Thank you, "+array[i]+", for the wonderful "+strg+" gift!");  
    }
    return newArray;
}
function countDown(number){
    for(let i=number;i>=0;i--){
        console.log(i);
    }
}
