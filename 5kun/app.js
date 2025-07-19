// Date: 19.07.2025.
// Topic: 5kun Boolean va taqoslash operatorlari 
// All world and tasks or lessons 

// JavaScriptda Boolean qiymalari - bu faqat ikki holat:
// true (rost) yoki false (yolgon)
// Ular asosan taqoslash va shart operatorlari bilan ishlatiladi

// Ammaliyot taqoslash 
// let a = 10;
// let b = 15;

// console.log("a > b:", a > b); // false 
// console.log("a < b:", a < b); // true 
// console.log("a == b:", a === b); // false 

// Qayta urunish 

// let c = 90;
// let d = 100;

// console.log("a > b:", a > b);
// console.log("a < b:", a < b);
// console.log("a === b:", a === b);


// Task: Yoshni tekshiruvchi kod yozing:

// let yosh = 18;

// if (yosh >= 18) {
//   console.log("Siz balogat yoshidasiz");
// } else {
//   console.log("Siz hali balogat yoshiga yetmagansiz !");
// }


// New task 
// Task: 2ta sonni taqoslash 
// let a = 99; 
// let b = 101;
// console.log("a > b:", a > b);
// console.log("a > b:", a > b);
// console.log("a ==  b:", a == b);
// console.log("a === b:", a === b);



// // Task 2 
// // Yoshni tekshiruvchi dastur ! 
// let yosh = 20;
// if (yosh >= 20) {
//   console.log("Siz balogat yoshidasiz !");
// } else {
//   console.log("Siz hali balogat yoshiga yetmagansiz !")
// }


// Task 3
// Paroni tekshiruchi dastur: 
// let parol = "1234"
// if (parol === "1234") {
//   console.log("Parol to'g'ri ✅");
// } else {
//   console.log("Parol noto'g'ri ❌");
// }

// Parol tekshirish dassturi ozim qilganim 
// let esikParol = "1997";
// if (esikParol = "1997") {
//   console.log("Parol to'g'ri ✅");
// } else {
//   console.log("Parol noto'g'ri ❌");
// }


// Qayta urunish 
// let parol = "7777";
// if (parol = "7777") {
//   console.log("Parol to'g'ri ✅");
// } else {
//     console.log("Parol noto'g'ri ❌");
// }



// Task 4:
// Mantiqiy opetar bilan shart 
// let yosh = 25;
// let rozi = true;

// if (yosh >= 18 && rozi) {
//   console.log("Siz ro'yxatdan o'tishingiz mumkin ✅");
// } else {
//   console.log("Ro'yxatdan o'tolmaysiz ❌");
// }


// Takrorlash 
// let yosh = 25;
// let rozi = true;
// if (yosh >= 18 && rozi) {
//     console.log("Siz ro'yxatdan o'tishingiz mumkin ✅");
// } else {
//     console.log("Ro'yxatdan o'tolmaysiz ❌");
// }



// Task 5 
// Not operatirini ishlating 
// let bor = false;

// if (!bor){
//   console.log("Hech narsa topilmadi ❌");
// } else {
//   console.log("Topildi ✅");
// }





// // Mini projcet 
// prompt("Yoshingizni kiriting: ");
// let yosh = "";
// if (yosh < 18) {
//   console.log("Yoshbola lekin orzulari katta !");
// }if (yosh >= 18) {
//   console.log("Katta odam katta imkoniyat !");
// }
// else {
//   console.log("Sizning kelajagongiz hali oldinda !")
// }



// Foydalanuvchidan ism va yoshini so‘raymiz
let ism = prompt("Ismingizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");

// Stringni numberga o‘girish
yosh = Number(yosh);

// Foydalanuvchi ismini katta harflarda chiqarish
console.log("Salom, " + ism.toUpperCase() + "!");

// Yoshga qarab tahlil
if (yosh < 18) {
  console.log("Yosh bola, lekin orzular katta!");
} else if (yosh >= 18) {
  console.log("Katta odam, katta imkoniyatlar!");
} else {
  console.log("Sizning kelajagingiz hali oldinda!");
}

// 1 dan 10 gacha random son chiqaramiz
let son = Math.floor(Math.random() * 10) + 1;
console.log("Bugungi raqamingiz:", son);

// Omadli kunni aniqlaymiz
if (son === 7) {
  console.log("Bugun OMADLI KUNINGIZ! 🎉");
} else {
  console.log("Bugun oddiy kun, lekin baribir yaxshi 😊");
}
