// Javascriptda 3 hil tarzda ozgaruvchi elon qilish mumkin 

// ozgaruvchi ozi nima ? 
// ozgaruvchi bu xotirada malumot saqlaydigon quti 

// let ozgaruvhcisi 
// let ism = "Laziz";

// Var -- eski maktabning uslubi 
// var yosh = 25;
// yosh = 30;
// console.log(yosh);

// Var havfli 
// var - global va function scopega ega 
// Agar {} block ichida elon qilinsa ham, blokdan tashqarida ishlaydi 


// Exampel 
// {
//   var test = "Salom";
// }
// console.log(test);



// 2) Let - hozirgi zamon Js dasturchilarning tanlovi 

// let rang = "qizil";
// rang = "Yashil";
// console.log(rang);

// Xususiyatlari 
// Bloch scope - faqat {} block ichida ishlaydi 
// Ozgartirish mumkin 
// Ozgarmas emas 


// Exampel 
// {
//   let son = 10;
//   console.log(son);
// }
// console.log(son);



// 3) const - doimiy ozgaruvchi (constant)
// const PI = 3.14;
// PI = 3.1415;

// Xususiyatlari
// doimiy Ozgarmas qiymat 
// Bloch scope 
// Dastur davomida bir marotaba belgilanish kerak 

// Exampel
// var misolli (yomon)

// if (true) {
//   var ism = "Laziz";
// }
// console.log(ism); // chiqadi (global bolib ketgan )


// // Let misolli (Yaxshi)
// if (true) {
//   let name = "Laziz";
// }
// console.log(name);  // ReferenceError 


// // const misolli
// const yosh = 25;
// yosh = 30;  // X xatolik 



// Scope ozi nima ? 
// Scope - bu (qamrov doyirasi tushunchasi )



// Qiziqarli faktlar 
// 1) var bilan siz bir o‘zgaruvchini 100 marta qayta e’lon qila olasiz — JS jim turadi 😐
// 2) let va const esa xato beradi — bu sizni tartibga soladi ✅
// 3) const orqali yaratilgan array yoki object o‘zgarishi mumkin, faqat manzili o‘zgarmaydi.

// Exampel 
// const user = { name: "Ali" };
// user.name = "Vali"; // bu mumkin 
// user = { name: "Hasan" }; // Xatlik




// Xulosa 
// Var - eski va otmishda qolgan, xatoga sabab boladi 
// let - asosiy vosita, block scope bilan ishlaydi 
// const -- qatiy qiymatlar uchun ozgarmaydi 



// Task 
//🧩 1-vazifa: let bilan ism va yosh saqlang

// let ism = "Laziz";
// let yosh = 20;


// Task 2) Ushbu o‘zgaruvchilarni quyidagi formatda console.log() bilan chiqarish:

// let ism = "Laziz";
// let yosh = 20;
// console.log("Ismim:", ism);
// console.log("Yoshim:", yosh,"da");



// Task 3) Ixtiyoriy: let bilan boshqa biror qiziq hobi, shior yoki orzu ham kiriting:

// let orzu = "Senior dasturchi bolish";
// console.log("Orzum:", orzu)



// Task 4 Ummumiy Natija 
// let ism = "Laziz";
// let yosh = 20;
// let orzu = "Senior dasturchi bolish";

// console.log("Ismim:" + ism);
// console.log("Yoshim:"+yosh);
// console.log("Orzum:"+orzu);




// New task 2 
// const PI = 3.14;
// let radius = 5;
// let yuza = 2 * PI * radius;
// console.log("Aylana yuzasi:" + yuza);



// Togri javop 
// const PI = 3.14;
// let radius = 5;
// let yuza = PI * radius * radius;
// console.log("Aylana yuza: " + yuza);




// New Task 


// Task 1 
// let ism = "Laziz";
// let yosh = 20;
// let shax = "Toshkent";
// let ish = "Kod yozuvchi Front Developer";

// console.log("Ismim:" + ism);
// console.log("Yoshim:" + yosh);
// console.log("Shahrim:" + shax);
// console.log("Hodim:" + ish);


// Task 2 
// const PI = 3.14;
// const radius = 7;
// let yuza = PI * radius * radius;
// let uzunlik = 2 * PI * radius ;

// console.log("Aylana yuzasi:" + yuza);
// console.log("Aylana uzunligi:" + uzunlik);



