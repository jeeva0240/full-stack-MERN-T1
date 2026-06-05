// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

// var num =10;
// var str ="hello";
// var undefined;
// var boolan =true;
// var Null =null;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefined);
// console.log(typeof Null);


// var arr =[10,20,30];
// console.log(typeof arr,arr);
// var  obj ={
//     name:"jeeva",
//     dept:["aids","ct"]
// }
// console.log(typeof obj,obj)
//arthimetic operator(+,-,*,%,/)
// var a =10;
// var b =20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);

// //logical operator(&&,||,!)

// var a ="true";
// var b ="false";

// console.log(a&&b)
// console.log(a||b)

// //relational operator(>,>=,<,<=,==,!=)

// a=10;
// b="20";
// console.log(a>b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a<b)

// a=2;
// console.log(a**a);
 
// var a =10;

// console.log(a--);
// console.log(--a);

// a =1;
// b =1;
// c =0;

// var result = a++ + --b + ++c - ++a + ++b  + c++ + b++ + a;
// console.log(result)
//conditional statements
// var a = 10;
// var b= 20;
// //if condition
// if(true){
//     //template literals
//     console.log("${a}+${b}=${a+b}")
// }

// var a;
// console.log(a);
// var a=10;

// var a =10;
// const b = 20;
// if(true){
//     console.log(a);
//     const  b =30;
//     console.log(b);



// }
// console.log(a);
// console.log(b);

// var mark =30;
// if(mark>=90){
//     console.log("o grade");
// }

// else if(mark>=70){
//     console.log("a grade");
// }
// else if(mark>=35){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }

// var a =10;
// var  result =a%2==0 ? "even" : "odd";
// console.log(result)

// mark = 30;
// var result = (mark>=90) ? "o grade":
//              (mark>=70) ? "a grade":
//              (mark>=35) ? "pass" :
//              "fail";
// console.log(result);

// var day =2;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");
//         break;
//     }
// }

// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val=10246;
// var count = 0;
// while(val>0){
//     count++;
//     val=Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("do...while")
// }
// while(false);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }

// function add(a=5,b=6){
//     console.log(a+b);
// }

// add();

// var demo =(a=5,b=6) => {
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr =[10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2);

// var [m1,m2,m3,m4,m5] = [95,96,97,98,100]
// console.log(m1,m2,m3,m4,m5);                 

// var {name,mobile,dept,email,isactive}={
//     name:"jeeva",
//     mobile:6383593277,
//     dept:["aids"],
//     email:"m.jeeva4520@gmail.com",
//     isactive:true
// }
// console.log(name,mobile,dept,email,isactive)

// var arr =[10,20,30,40,50];
// for (let index in arr){
//     console.log(index)
// }
// for (let value of arr){
//     console.log(value)
// }
// var obj ={
//     name:"jeeva",
//     dept:"aids",
//     mmobile:6383593277
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

var arr =[1,2,3,4,5];

var result = arr.map((val)=>(val*2));
console.log(result)

var even =arr.filter((val)=>val%2===0);
console.log(even)

var sum =arr.reduce((add,val)=>(add+val),0);
console.log(sum)