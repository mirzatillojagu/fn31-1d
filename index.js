
// ### **1. IIFE (Immediately Invoked Function Expression) ga oid 2 ta:**

// 1. IIFE yordamida massiv ichidagi sonlarning yig‘indisini hisoblaydigan dastur tuzing.  
// (function(arr) {
//     console.log(arr.reduce((sum, num) => sum + num, 0));
// })([1, 2, 3, 4]); 


// 2. IIFE yordamida berilgan ikki sonning ko‘paytmasini hisoblab, natijani konsolga chiqaring.
// (function(a, b) {
//     console.log(a * b);
// })(3, 5); 


// ### **2. Object, array copy ga oid 3 ta:**

// 3. Ob'ektning ichki ob'ektlarini ham chuqur nusxalashni amalga oshiradigan funksiyani tuzing
// function addobject(arr) {
//     return JSON.parse(JSON.stringify(arr));
// }
// console.log(addobject({ person: { name: "Ali" } }));


// ### **3. Pure function ga oid 2 ta:**

// 1. Berilgan ikkita massivni birlashtiradigan va yangi massiv qaytaradigan funksiyani yozing.  
// function concatArray(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
// console.log(concatArray([1, 2, 3, 4], [5, 6, 7, 8]));

// ### **4. Callback function ga oid 2 ta:**### **

// 1. Berilgan massivning har bir elementiga callback funksiyasini qo‘llab, natijani qaytaradigan funksiyani yozing
// function map(arr, ) {
//     return arr.map(v => v * 2);
// }
// console.log(map([1, 2, 3])); 

// 2. Callback funksiyasi yordamida berilgan massivdan faqat toq sonlarni qaytaradigan dastur tuzing. 
// function filter(arr) {
//     return arr.filter(v => v % 2 !== 0);
// }
// console.log(filter([1, 2, 3, 4])); 



// ### **6. Object metodlariga oid 3 ta:**


// 1. Ob'ektdagi barcha kalitlarni qaytaruvchi funksiyani yozing.  
// function objectkeys(obj) {
//     return Object.keys(obj)
// }
// console.log(objectkeys({name: "merseders", age: 2024, weight: 2000}));


// 2. Ob'ektdagi barcha qiymatlarni qaytaruvchi funksiyani yozing. 
// function objectVal(obj) {
//     return Object.values(obj)
// }
// console.log(objectVal({name: "merseders", age: 2024, weight: 2000}));



// 3. Ob'ektni kalitlari va qiymatlarini massiv sifatida qaytaruvchi funksiyani yozing.  

// function Objectentries(obj) {
//     return Object.entries(obj)
// }
// console.log(Objectentries({name: "merseders", age: 2024, weight: 2000}));


// ### **7. JSON ga oid 2 ta:**

// 1. Ob'ektni JSON formatiga o‘tkazuvchi va qaytadan ob'ektga aylantiruvchi funksiyani yozing// function jsonObject(obj) {
//     let res = JSON.stringify(obj);
//     return JSON.parse(res);
// }
// console.log(jsonObject({ name: "Abror", age: 10 }));

// 2. JSON formatidagi matnni o‘qib, undagi ma'lumotni ob'ektga aylantiradigan funksiyani tuzing.  
// function jsonparse(obj) {
//     return JSON.parse(obj10
// }
// console.log(jsonparse('{"name": "Abror", "age": 10}'));



// ### **8. String metodlariga oid 15 ta:**

// 1. Matndan barcha bo‘sh joylarni olib tashlaydigan funksiyani yozing.  
// function trimarray(str) {
//     return str.replace(/\s+/g, "").trim();
// }

// console.log(trimarray("salom     abror"));


// 2. Berilgan so‘zni katta harfga aylantiradigan funksiyani yozing.
// function touppercase(arr) {
//     return arr.toUpperCase(arr)
// }
// console.log(touppercase("abrorjon"));

// 3. Matndagi birinchi harfni katta qilib, qolgan qismini kichik qilib qaytaradigan funksiyani yozing. 
// function capitalize(arr) {
//     return arr.charAt(0).toUpperCase() +arr.slice(1).toLowerCase();
// }
// console.log(capitalize("abrorjon"));


// 4. Matnning oxiridagi ortiqcha bo‘sh joylarni olib tashlaydigan funksiyani yozing. 

// function trimendaarr(arr) {
//     return arr.trimEnd()
// }
// console.log(trimendaarr("abror      "));


// 5. Matn ichidan so‘zlarni ajratib massiv qaytaruvchi funksiyani tuzing.  
// function splitarr(arr) {
//     return arr.split(" ")
// }
// console.log(splitarr("salom"));


// 6. Matnni orqadan oldinga o‘zgartiruvchi funksiyani yozing. 
// function reveresArray(arr) {
//     return arr.split("").reverse().join("")
// }
// console.log(reveresArray("abror"));


// 9. Matn ichidan ma'lum bir indeksdan boshlab yangi matn qaytaradigan funksiyani yozing.  
// function add(arr, str) {
//     return arr.slice(str);
// }
// console.log(add("salom", 2));


// 10. Matnni ma'lum bir uzunlikka kesib, qolgan qismini olib tashlaydigan funksiyani yozing.
// function slicearray(arr, str) {
//     return arr.slice(0, str);
// }
// console.log(slicearray("salom abror", 5));

// 11. Matndan ma'lum bir so‘zni boshqasiga almashtiruvchi funksiyani yozing.  
// function replaceArray(arr, str1, str2) {
//     return arr.replace(str1, str2);
// }
// console.log(replaceArray("salom abror", "xayr", "abror"));

// 12. Matndagi barcha katta harflarni kichikka o‘zgartiruvchi funksiyani tuzing.  
// function tolovercasearray(str) {
//     return str.toLowerCase();
// }
// console.log(tolovercasearray("Abror"));