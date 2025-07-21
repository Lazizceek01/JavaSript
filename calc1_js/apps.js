let son1 = Number(prompt("Son1:"));
let amal = prompt("Amalni kirit ( +, -, *, /, = ):");
let son2 = Number(prompt("Son2:"));
let natija;

if (amal === "+") {
  natija = son1 + son2;
} else if (amal === "-") {
  natija = son1 - son2;
} else if (amal === "*") {
  natija = son1 * son2;
} else if (amal === "/") {
  natija = son1 / son2;
} else if (amal === "=") {
  if (son1 === son2) {
    natija = "✅ Ikkala son teng!";
  } else {
    natija = "❌ Sonlar teng emas!";
  }
} else {
  natija = "⚠️ Noto'g'ri amal kiritildi!";
}

console.log("Natija:", natija);