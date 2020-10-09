
// Display date in format "Tuesday 10 PM :12 :30"

// let d=new Date();
// let daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log("today is:", daylist[d.getDay()]);
// let hours = (hoursnum)=>{
//     if(hoursnum==20){
//         return (8) + " PM";
//     }
//     if(hoursnum<=10){
//         return (hoursnum) + " AM";
//     }
//     if(hoursnum%10!=0){
//         return (hoursnum%10)-2 + " PM";
//     }


// };
// console.log("current time:",hours(d.getHours()),":"+d.getMinutes(),":"+d.getSeconds());

// Print on click

// document.getElementById("print").addEventListener("click", ()=>{
//     window.print();
// } );

// date format dd/mm/yyyy

// let date= new Date();
// console.log(date.getDate()+"/" + (parseInt(date.getMonth())+parseInt(1)) + "/" + date.getFullYear());

// Area of a triangle 

// let area= (x,y,z) => {
//     let parameter=x+y+z;
//     let a=Math.sqrt(parameter*(parameter-x)*(parameter-y)*(parameter-z));
//     return a;
// };
// console.log(area(2,3,4));

// Reverse String

// let reverse= (str)=>{
//     let arrstr=str.split("");
//     let reversed=arrstr.reverse();
//     let newarr=reversed.join("");
//     return newarr;

// };
// console.log(reverse("try"));

// Reverse String(another method)

// let reverse= (str)=>{
//     let arrstr=str.split("");
//     let reversedstr=[];
//     let j=0;
//     for (let i=str.length;i>=0;i--){
//         reversedstr[j]=arrstr[i];
//         j++;
//     }
//     return reversedstr.join("");

// };
// console.log(reverse("try"));

// leap year method

//  let yearleap= (year)=>{
//     if(year%4==0){
//         if(year%100==0){
//             if(year%400==0){
//                 console.log("The year is a leap year.")
//             }else{
//                 console.log("The year is not a leap year.")
//             }
//         }else{
//             console.log("The year is a leap year.");
//         }
//     }else{
//         console.log("The year is not a leap year.");
//     }
//  };
//  console.log(yearleap(1996));

// 1st January is a sunday between years 2014 and 2050

// let ifsunday=()=>{
//     let str="";
//     for(let i=2014;i<=2050;i++){
//         let d=new Date(i, 0 ,1);
//         if(d.getDay()==0){
//             str+="In " + i + " 1st Jan is a sunday.\n";
//         }
//     }
//     return str;
// };
// console.log(ifsunday());

// divide and multiply

// document.getElementById("multiply").addEventListener("click",()=>{
    
//     let num1=document.getElementById("num1").value;
//     let num2=document.getElementById("num2").value;
//     let m=(parseInt(num1))*(parseInt(num2));
//     let e=document.createElement("h1");
//     e.innerText="Multiplied:"+m;
//     document.body.appendChild(e);
   
    
// },false);

// document.getElementById("divide").addEventListener("click",()=>{
//     num1=document.getElementById("num1").value;
//     num2=document.getElementById("num2").value;
//     d=(parseInt(num1))/(parseInt(num2));
//     text1=document.createElement("h1");
//     text1.innerHTML="Just divided: "+d;
//     document.body.appendChild(text1);
    
    
// });
let idx=-1;
document.getElementById("changeDay").addEventListener("click",()=>{
    let days=["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"];
    if(idx>5){
        idx=0;
    }
    else{
        idx++;
    }
    document.getElementById("day").innerHTML=days[idx];

    
})

let idx1=-1;
document.getElementById("changeMonth").addEventListener("click",()=>{
    let months=["February","March","April","May","June","July","August","Spetember","October","November","December","January"];
    if(idx1>10){
        idx1=0;
    }
    else{
        idx1++;
    }
    document.getElementById("month").innerHTML=months[idx1];

    
})
