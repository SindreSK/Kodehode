const pw1 = document.getElementById("pw5");
const pw2 = document.getElementById("pw6");
const pw3 = document.getElementById("pw7");
const pw4 = document.getElementById("pw8");

// let array = [pw1, pw2, pw3, pw4]

const generateEl = document.getElementById("generate");

function getRandomChar() {
  return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
}

function generatedPassword() {
  let generatedpw = "";
  for (
    let i = 0;
     i < 12;
      i++) {
    generatedpw += getRandomChar();
  }
  return generatedpw;
}

// for (let i =0; i<array.length; i++)

generateEl.addEventListener("click", function () {
  pw1.innerText = generatedPassword();
  pw2.innerText = generatedPassword();
  pw3.innerText = generatedPassword();
  pw4.innerText = generatedPassword();
});

pw1.addEventListener("click", copyPassword);
pw2.addEventListener("click", copyPassword);
pw3.addEventListener("click", copyPassword);
pw4.addEventListener("click", copyPassword);

function copyPassword() {
  let input = this.textContent;

  navigator.clipboard.writeText(input);

  alert("copied text: " + input);
}


// function getRandomChar() {
//   return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
// }

// function generatedPassword() {
//   let generatedPW = "";

//   for (let i = 0; i < 12; i++) {
//     generatedPW += getRandomChar();
//   }
//   return generatedPW;
// }
// console.log(generatedPassword());
