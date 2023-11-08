// Сложить два числа
let a,b,c;
a=-10;
b=15;
c=a+b;
// Вернуть наиболшее из 3х числел
console.log("Сложить два числа - ",c);
if ((a>b) && (a>c)) {
    console.log("Вернуть наиболшее из 3х числел - ",a)
} else 
if ((b>a) && (b>c)) {
    console.log("Вернуть наиболшее из 3х числел - ",b)
} else 
if ((c>b) && (c>a)) {
    console.log("Вернуть наиболшее из 3х числел - ",c)
} 
// Вернуть самую длинную строку
let Text_1="топот";
let Text_2="мышь";
let Text_3="абажур";
if ((Text_1.length>Text_2.length) && (Text_1.length>Text_3.length)) {
    console.log("Вернуть самую длинную строку - ",Text_1)
} else 
if ((Text_2.length>Text_1.length) && (Text_2.length>Text_3.length)) {
    console.log("Вернуть самую длинную строку - ",Text_2)
} else 
if ((Text_3.length>Text_1.length) && (Text_3.length>Text_2.length)) {
    console.log("Вернуть самую длинную строку - ",Text_3)
} 
//Является ли слова палиндромом?
let n1 = Text_1.length-1;
for ( let i = 0; i < n1/2; i++)  {
    if (Text_1[i]==Text_1[n1-i]){
        console.log(Text_1," - слово палиндром");
    } else 
    console.log(Text_1," - слово не палиндром");
}
let n2 = Text_2.length-1;
for ( let i = 0; i < n2/2; i++)  {
    if (Text_2[i]==Text_2[n2-i]){
        console.log(Text_2," - слово палиндром");
    } else 
    console.log(Text_2," - слово не палиндром");
}
let n3 = Text_3.length-1;
for ( let i = 0; i < n3/2; i++)  {
    if (Text_3[i]==Text_3[n3-i]){
        console.log(Text_3," - слово палиндром");
    } else 
    console.log(Text_3," - слово не палиндром");
}
//сумма элементов массива
let massiv = [5,2,1,3,4];
let result = massiv.reduce((sum, current) => sum + current, 0);
console.log("сумма элементов массива - ",result);
//сортировка
for (let j = massiv.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
    if (massiv[i] > massiv[i + 1]) {
        let temp = massiv[i];
        massiv[i] = massiv[i + 1];
        massiv[i + 1] = temp;
    }
    }
}
  console.log("Отфильтровать массив чисел -",massiv);
//массив объектов 
let object = [{ name: "Bob", age: 50}, { name: "Jane", age: 64}, { name: "Jack", age: 25}];

let find = object.find(index => index.age == 50);  
object.splice(find,1);
console.log("Отфильтровать массив объектов - ",object);
//склонировать объект
let object_2 = { name: "Bob", age: 50, children: [ { name: "Marie", age: 16}, { name: "Jame", age: 12} ] };
let clone = {}
for (let key in object_2) {
    clone[key] = object_2[key];
}
console.log("Склонировать объект  - ",clone);