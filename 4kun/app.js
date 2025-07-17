// Date: 17.07.2025
// Topic: 5 kun Sonlar va Matem amallar 
// All world and tasks or lessons 


// 1) Sonlar (number) -> 
// Jsda sonlar bu: 10.-3.1000
// onlik sonlar : 3.14. 2.15 . 0.-1

// let yosh = 20;
// let narx = 99.99;
// console.log(yosh + narx);


// 2) Math object ozi nima ? 
// Math -> bu JavaScriptda matematik hisob kitoblar qilish uchun tayyor turuvchu obyekt. Ichida kop foydali funksiya bor.


// Qiqa chuncha olish uchun Misoll 
// Funcsiya uchun misollar 

// console.log(Math.round(2.5));   // 3
// console.log(Math.floor(2.9));   // 2
// console.log(Math.ceil(2.1));    // 3
// console.log(Math.random());     // Har safar 0 dan 1 gacha tasodifiy son
// console.log(Math.min(5, 8, 2)); // 2
// console.log(Math.max(5, 8, 2)); // 8




// console.log(Math.round(2.5));   // 3
// console.log(Math.floor(2.9));   // 2
// console.log(Math.ceil(2.1));    // 3
// console.log(Math.random());     // Har safar 0 dan 1 gacha tasodifiy son
// console.log(Math.min(5, 8, 2)); // 2
// console.log(Math.max(5, 8, 2)); // 8



// console.log(Math.floor(2.5));
// console.log(Math.round(3.0));
// console.log(Math.ceil(2.1));
// console.log(Math.random());
// console.log(Math.min(5, 8, 6));
// console.log(Math.max(10, 20, 30));



/// Chunarliroq Misoll 
// Task 1 
// 1 dan 100 gacha bolgan random soni chiqarish 
// let randomSon = Math.floor(Math.random() * 100) + 1;
// console.log("Tasodifiy son:", randomSon);


// Task 2 
// Math.round -> Sonni eng yaqin butun songa yaxlitlaydi
// console.log(Math.round(4.3));
// console.log(Math.round(4.7));



// Task 3 
// Math.floor Sonni pastga (butunga) yaxlitlaydi.
// console.log(Math.floor(4.9));
// console.log(Math.floor(7.1));



// Task 4 
// Math.min() va Math.max()
// Eng kichik yoki rng katta topadi 
// console.log(Math.min(1, 2, 3, 5));
// console.log(Math.max(3, 9, 8, 7));


// INFO 
// Math.random 
// 0 dan 1 gacha tasodifiy son beradi 
// console.log(Math.random());

// Agar 1 dan 10 gacha butun son chiqarmoqchi bolsang:
// let son = Math.floor(Math.random() * 10) + 1;
// console.log(son);

// Task 6 Math. pow (x,y)
// Vazifasi sonnig darajasini hisoblaydi 
// console.log(Math.pow(2, 3));
// console.log(Math.pow(5, 2));


// Task 7 sqrt()
// Kvadrat ildizini hisoblaydi 
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(16));


// Task 8 Math.abs()
// Absolyut qiymati (yaniy manfiy sonni musbatga ogiradi)
// console.log(Math.abs(-5));
// console.log(Math.abs(7));


// Task 9 Math.trunc()
// Sonning butun qismini olib kasr qismini olib tashlaydi: 
// console.log(Math.trunc(5.9));
// console.log(Math.trunc(-3.7));
// Faqat butun qismini saqlaydi - yaxlitlamaydi



// Random soni aniqlash 
// 1 dan 100 gacha butun random son 
// let randomson = Math.floor(Math.random() * 100) + 1;
// console.log("Random son:", randomson);




// New Task 

// 🧩 Mini Vazifa 1 : 1 dan 50 gacha tasodifiy butun son chiqaruvchi kod yozing.

// let son = Math.floor(Math.random() * 100) + 1;
// console.log("Random son:", son);


// 🧩 Mini Vazifa 2:

// Har safar ishlaganda “Bugungi omadli raqamingiz: X” deb chiqaradigan dastur yozing, bu yerda X — 1 dan 100 gacha tasodifiy raqam bo‘lsin.

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("“Bugungi omadli soningiz:", randomNumber);



// 🧩 Mini Vazifa 3(Ixtiyoriy):
// 1 dan 10 gacha random son yarating.Agar u son 7 bo‘lsa:

let son = Math.floor(Math.random() * 10) + 1;
console.log("Chiqqan son:", son);

if (son === 7) {
  console.log("Omadli son chiqdi!");
} else {
  console.log("Bu safar 7 emas 😅");
}


let raqam = Math.floor(Math.random() * 10) + 1;
console.log("Chiqan son:", raqam);
if (raqam === 7) {
  console.log("Omadli son chiqdi !");
} else {
  console.log("Bu safar 7 emas 😅");
}
