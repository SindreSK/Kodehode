//1. Finn en tekst på nettet (den kan enten være på norsk eller engelsk). Velg en wordcount og se til at teksten er innfor den


let text = "What is well known is that if colosseum as used for gladiator battles, but what is less known  is that they also used it for hunts and executions, And at the beginning they held something called Naumachia, wich was a staged naval battle,for whitch the colosseum as flooded. Naumachia was later moved to an own stadium that was always flooded."

function wordcount(text){
    return text.split(" ").length <= 62;

 }
console.log(wordcount(text))

//2. lag en loop som teller til 10


for (let i=1;i<11;i++){
}

//3.  finn ordene "if"/"hvis", "as"/"som", "and"/"og"  i teksten du valgte. Kutt ut disse ordene pluss 5 tegn på hver side av ordene i teksten. Husk at mellomrom er også et tegn. Det trengs bare første instance av ordene. Husk å lagre det du kutter ut i en egen variabel.

//først finner jeg index til hvert ord.

function andIndex(text){
return and = text.indexOf("and")
}

function ifIndex(text){
    return iftall = text.indexOf("if")
}
function asindex(text){
    return asindex = text.indexOf("as")
}

 console.log(ifIndex(text))
 console.log(andIndex(text))
 console.log(asindex(text))

 // deretter erstatter jeg indexen med 5 tegn på hver side.

let andOrd = text.slice(126,139)
console.log(andOrd)

let ifOrd = text.slice(22,34)
console.log(ifOrd)

let asOrd = text.slice(35, 47)
console.log(asOrd)

//4. sett sammen de nye settningene fra variablene dine

let concatOrd = andOrd.concat(ifOrd, asOrd)
console.log(concatOrd)

//5. bytt ut ordene ("if"/"hvis", "as"/"som", "and"/"og") med norkse/engelske ord i den nye teksten din.


let replaceAnd = concatOrd.replace("and", "og")
let replaceAs = concatOrd.replace("as", "som")
let replaceIf = concatOrd.replace("if", "hvis")

//6. lag et lite spill hvor spilleren har 3 liv. Hint: while loops
//har laget et spill her men fikk ikke helt til og wrappe den inn en while loop men håper jeg lærer dette på mandagens JS time.

let lives = 3;
let generateEl = document.getElementById("generate")
let resultEl = document.getElementById("lives")

generateEl.addEventListener("click", function(){
    resultEl.innerText = result()
});



function result(){

    let randomNumber = (Math.floor(Math.random()*2))
    
    if(randomNumber == 0){
    
        lives = lives - 1;

        return lives
        
    }
    
        else{
        lives = lives + 1

        return lives
        
        }
    }



//7. lag en array med 10 ord og en med 10 tall.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let wordArray = ["appelsin", "mandarin", "eple", "pære", "banan", "tyttebær", "jordbær", "fersken", "blåbær", "mango"]

//8. Sett alle tallene i arrayet med 10 tall til å bli det samme. Dette skal gjøres vha en built in method og en loop. Et tall skal endres fo hver iteration av loopen. Det første og det siste tallet i arrayet skal forbli uendret.

for (let i=1;i < numberArray.length -1; i++){
    numberArray.splice(i, 1, 10)
    console.log(numberArray)
}
 
 