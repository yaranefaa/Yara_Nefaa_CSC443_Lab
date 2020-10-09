

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
