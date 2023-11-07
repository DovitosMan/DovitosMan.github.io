let a,b,c;
a=10;
b=15;
//вернуть наибольшее число
c=a+b;
if ((a>b) && (a>c)) {
    console.log(a)
} else 
if ((b>a) && (b>c)) {
    console.log(b)
} else 
if ((c>b) && (c>a)) {
    console.log(c)
} 
//вернуть набольшую строку
let Text_1="топот";
let Text_2="мышь";
let Text_3="абажур";
if ((Text_1.length>Text_2.length) && (Text_1.length>Text_3.length)) {
    console.log(Text_1)
} else 
if ((Text_2.length>Text_1.length) && (Text_2.length>Text_3.length)) {
    console.log(Text_2)
} else 
if ((Text_3.length>Text_1.length) && (Text_3.length>Text_2.length)) {
    console.log(Text_3)
} 
//палиндом
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