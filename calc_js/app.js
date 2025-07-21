let son1 = prompt("Son1: ");
let amal = prompt("Amal ( + , - , * , /):");
let son2 = prompt("Son2: ");

if (amal === "+") {
  natija = son1 + son2;
} else if (amal === "-") {
  natija = son1 - son2;
} else if (amal === "*") {
  natija = son1 * son2;
} else if (amal === "/") {
  natija = son1 / son2;
} else if (amal === "=") {
  natija = son1 = son2;
  console.log("Ikkala son teng !")
}else {
  console.log("Notogri amal kiritilgan !")
}

console.log("Natija:", natija);


