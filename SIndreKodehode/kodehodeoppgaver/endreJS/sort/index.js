const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes", "electronics"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma", "gym"],
    },
    {
      name: "Chris",
      male: true,
      age: 20,
      hobbies: ["cycling", "football", "pool", "tv"],
    },
    {
      name: "Claire",
      male: false,
      age: 27,
      hobbies: ["jogging", "travelling"],
    },
    {
      name: "Stephanie",
      male: false,
      age: 26,
      hobbies: ["writing", "piano", "books", "opera"],
    },
    {
      name: "Herman",
      male: true,
      age: 31,
      hobbies: ["gym", "weights"],
    },
    {
      name: "Trevor",
      male: true,
      age: 19,
      hobbies: ["parkour"],
    },
  ];
  
  // Complete the .sort() to sort the people object array by age, from highest to lowest age:
  
  let sortedPeople1 = people.sort((a, b)=> a.age - b.age);
  console.log(sortedPeople1);
  
  // the console log should read:
  // 0: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
  // 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
  // ...
  // ...
  // 8: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}
  // 9: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
  
  ////////////////////////////////////////////////////////////////
  
  // Complete the .sort() to sort the people object array by name length, from shortest to longest:
  
  let sortedPeople2 = people.sort((a, b)=> a.name.length - b.name.length);
  console.log(sortedPeople2);
  
  // the console log should read:
  // 0: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
  // 1: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
  // ...
  // ...
  // 8: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
  // 9: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
  
  ////////////////////////////////////////////////////////////////
  
  // Complete the .sort() to sort the people object array by amount of hobbies from fewest to most, and
  // make ties sorted by name, alphabetically from a-z (this can be accomplished with just 1 sort method)
  
  let sortedPeople3 = people.sort();
  console.log(sortedPeople3);
  
  
  // this should console log the following:
  
  // 0: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
  // 1: {name: 'Claire', male: false, age: 27, hobbies: Array(2)}
  // 2: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
  // 3: {name: 'Monica', male: false, age: 21, hobbies: Array(3)}
  // 4: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
  // 5: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
  // 6: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}
  // 7: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
  // 8: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
  // 9: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
  