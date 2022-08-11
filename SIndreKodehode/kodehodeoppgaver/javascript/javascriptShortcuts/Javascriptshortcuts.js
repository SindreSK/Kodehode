// fizz buzz //

// for (let num = 1; num < 101; num++) {
//   if (num % 15 === 0) {
//     console.log("fizz buzz");
//   } else if (num % 3 === 0) {
//     console.log("fizz");
//   } else if (num % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(num);
//   }
// }



// for loops //

//for løkker er brukt for å kjøre en operasjon mer enn en gang, som man ser oppe i fizz buzz challangen så kjører løkken gjennom 1-101 for å finne alt alle "trues" som er hvis tallene 3,5,15 går i null på tallet

//arrays//
//arrays kan man bruke til lister og finne ting som er inni listen.
//EKSEMPEL:

// let books = ["life of Pi", "the shining", "moby dick", "dictionary", "hotel"];

//man kan hente et item inni en array slik:
// console.log(books[1]);

//arrays med for løkker:

// for (let i = 0; i < books.lenght; i++) {
//   console.log([i]);
//   if (books[i] === "the shining") console.log(true);
// }

//objects:

// const user = {
//   name: "ania",
//   lastName: "solbakken",
//   pets: "dog",
// };
// console.log(user.name);

//objects in arrays

// const user = [
//   {
//     username: "bob",
//     followers: 244,
//     is_followed: true,
//   },
//   {
//     username: "kåre",
//     followers: 340,
//     is_followed: false,
//   },
//   {
//     username: "sindre",
//     followers: 0,
//     is_followed: true,
//   },
// ];
// console.log(user[0].username);

//hvordan bruke dette i en for løkke:

// for (let i = 0; i < user.length; i++) {
//   if (user[i].is_followed === true) {
//     console.log("hi, " + user[i].username + " how are you");
//   }
// }

//functions:

// husk og alltid bruke Camelcase på funksjoner

// let name = "bob";

// function sendText() {
//   // kodeblokk
//   console.log("hei, " + name + " er du der?");
// }

// sendText();

// man kan også bruke funksjonen selv med og sette "name" i parantesen på funksjonen

// function sendText(name) {
//   console.log("hei, " + name + " er du der");
// }

// sendText("sindre");
// sendText("kåre");
// sendText("stian");
// sendText("thomas");

// function sendReminder(name, time) {
//   console.log("hei, " + name + " møte er klokken " + time);
// }

// sendReminder("thomas", 3);
// sendReminder("kristian", 10);
// sendReminder("ole", 2);

// While loop

// while loop kan bli brukt slik
// let i = 1;

// while (i < 101) {
//   console.log(i + " Beers on the wall");
//   i++;
// }
// if (i === 1) {
//   console.log(i + "beer on the wall");
// }

// reduce:
//

// const today = new Date();

// console.log(today);

// let hands = ["rock", "paper", "scissors"];

// function random() {
//   let randomValue = Math.floor(Math.random() * 3);
//   return hands[randomValue];
// }
// console.log(random());
