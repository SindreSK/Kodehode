// oppgaver i high-order funksjoner
// for referanse se: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

// 1. console.log alle elementer fra en array
const numbers = [5,3,2,4,1,8,7,9,6];



// for-loop løsning:
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element);
// }
// istedet for for-loop bruk en innebygd javascript array-metode for å løse samme oppgave. 
numbers.forEach(element => console.log(element));


// 2. lag en funksjon som returnerer en ny array der hvert element er doblet i verdi


let dobbel = numbers.map(n => n*2)
console.log(dobbel)


/// for-loop løsning:
// function numsDoubled(nums) {
//   // lag en ny array
//   const numsDoubled = [];
//   // loop gjennom nums array
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     // lett til det doble av verdien av element i numsDoubled-array
//     numsDoubled.push(element*2);
//   }
//   // returner evenNums-array
//   return numsDoubled;
// }
// console.log(numsDoubled(numbers));


// 3. lag en funksjon som returnerer en ny array som inneholder bare partall (fra numbers array)


let partall = numbers.filter(n => n % 2 ===0)
console.log(partall)


// for-loop løsning:
// function getEvenNums(nums) {
  // lag en ny array
  // const evenNums = [];
  // loop gjennom nums array
  // for (let index = 0; index < nums.length; index++) {
  //   const element = nums[index];
    // sjekk om tallet er ett partall, hvis ja legg det til evenNums-array
  //   if (element % 2 === 0) evenNums.push(element);
  // }
  // returner evenNums-array
  // return evenNums;

// console.log(getEvenNums(numbers));

// istedet for for-loopen over bruk en innebygd javascript array-metode. 