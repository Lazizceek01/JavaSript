const readline = require('readline');

// Interfeys yaratamiz
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Savollar ketma-ket beriladi:
rl.question("1-sonni kiriting: ", function (son1) {
  rl.question("Amalni tanlang (+, -, *, /, =): ", function (amal) {
    rl.question("2-sonni kiriting: ", function (son2) {
      let natija;

      // Sonlarni number (raqam) formatiga o‘tkazamiz
      let a = parseFloat(son1);
      let b = parseFloat(son2);

      // Amalni tekshiramiz
      if (amal === "+") {
        natija = a + b;
      } else if (amal === "-") {
        natija = a - b;
      } else if (amal === "*") {
        natija = a * b;
      } else if (amal === "/") {
        if (b !== 0) {
          natija = a / b;
        } else {
          natija = "❌ 0 ga bo‘lish mumkin emas!";
        }
      } else if (amal === "=") {
        if (a === b) {
          natija = "✅ Sonlar teng!";
        } else {
          natija = "❌ Sonlar teng emas!";
        }
      } else {
        natija = "⚠️ Noto‘g‘ri amal kiritildi!";
      }

      console.log("Natija:", natija);
      rl.close();
    });
  });
});
