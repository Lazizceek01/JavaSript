// Date: 16.07.2025
// Topic: 3kun DateType 
// All world and Task or remembers 

// 1) Number - Bu sonlar uchun (butun,manfiy,onlik,barchasi uchun).
// typeof yosh -> "number"
// Eslab qolish shart: "Telefon raqami, Yosh, Narx - bu son, yani -> number"

// Exampel for -> number.
// let yosh = 20;
// let pi = 3.14;


// 2) String -> matn uchun. 
// Eslatma -> Matn doimo "ichida boladi";
// typeof ism -> "string"
// Eslab qolish shart -> Sms xabarlar,ism,manzil -> Bu matn yaniy -> "string" 

// Exampel for -> string.
// let ism = "Laziz";
// let habar = "Salom Laziz";


// 3) Boolean -> rost yoki yolgon.
// Faqat 2 xil qiymatni oladi: true yoki False 
// typeof -> student ->"Boolean"
// Eslab qolish shart -> Ha yoki yoq, Tugadimi Rozimisiz ! -> Boolean

// Exampel 
// let student = true;
// let tugadi = false;


// 4) Undefined - hali hech nima belgilanmagan 
// Ozgaruvchi elon qilingan, lekin qiymat berilmagan 
// typeof rang -> "Undefined"
// Eslab qol -> Xotira bor,lekin bosh -> Undefined

// Exampel
// let rang;
// console.log(rang); // Undefined

// 5) nill -> ataylab bosh qilinadigon qiymat.
// Dasturchi ataylab "bu yerda hech narsa yoq deb beradi"
// typeof null -> "object" (bu jsdagi eski xato lekin ishlayveradi)
// Eslab qol "Xona bor, lekin biz ochirdik" - null; 

// let natija = null;


// 6) symbol - noyob belgilar 
// Asosan maxfiy IDlar yoki noyob belgilar uchun ishlatiladi 
// typeof  id -> "symbol"
// Eslab qolish shart -> Har kimda noyob pasport raqamlari bor -> symbol

// let id = Symbol("id");
// console.log(id);



// 7) Bigint - juda katta sonlar uchun
// odiy number 2^53 gacha boradi,bigint esa unda ham kattaroq sonlar kottara oladi 
// typeof kattason -> "bigint"
// Eslab qolish shart -> "Milliard dollarlik hisob kitoblar" - bigint 

// 
// let kattaSon = 123456789012345678901234567890n;


// Exampel 2 
// let ism = "Laziz";
// console.log(typeof ism); // string

// let yosh = 20;
// console.log(typeof yosh); // number 

// let mavjud = true;
// console.log(typeof mavjud); // Boolean




// Task

// task 🧩 1: Har bir data type uchun o‘zgaruvchi yarat
// let ism = "Laziz";
// let yosh = 20;
// let student = true;
// let color;
// console.log(color)
// let summa = null;
// let number = Symbol(number)
// console.log(number)
// let katason = 12222222222158455555555n;



// task 🧩 2: turAniqla() funksiyasi yozing
// function turAniqla(value) {
//   return typeof value;
// }

// console.log(turAniqla("salom"));
// console.log(turAniqla(123));
// console.log(turAniqla(true));


// 🧩 3 - vazifa: Noto‘g‘ri typeofni toping

// let qiymat = null;
// console.log(typeof qiymat);





// New info 

// DateType 
// 1) String -> matn
let ism = "Laziz";
console.log("Ism:", ism);       
console.log(typeof ism);            


// 2) Number -> son 
let yosh = 20;
let pi = 3.14;
console.log("Yosh:" + yosh);
console.log(typeof yosh);


// 3) boolean - ha yoki yoq.
let dasturchi = true;
console.log("Dasturchimi ?", dasturchi);
console.log(typeof dasturchi);


// 4) undefined - hali hech nima yoq 
let rang;
console.log("Rang:", rang);
console.log(typeof rang);


// 5) null - ataylab bosh qilingan 
let natija = null;
console.log("Natija:", natija);
console.log(typeof natija);


// 6) symbol - noyob belgi 
let id = Symbol("user_id");
console.log("ID:", id);
console.log(typeof id);



// 7) bigint - juda katta sonlar 
let kattaSonlar = 878684646994464487946545444n;
console.log("Katta son:", kattaSonlar);
console.log(typeof kattaSonlar);

