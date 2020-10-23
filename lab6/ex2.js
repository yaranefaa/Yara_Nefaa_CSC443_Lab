let color=0;
$("button[id='color']").on("click", function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(color%2==0){
        $("div[class='box']").css({'background-color':randomColor});
        color=color+1;
    }else{
        $("div[class='box']").css({'background-color':'white'});
        color=color+1;
    }


})

let border=0;
$("button[id='border']").on("click", function(){
    if(border%2==0){
        $("div[class='box']").css({'border-radius':'5px'});
        border=border+1;
    }else{
        $("div[class='box']").css({'border-radius':'0px'});
        border=border+1;
    }


})
$("button[id='add']").on("click", function(){
   
        let newbox=document.createElement("div");
        newbox.classList.add("box");
   
        $("div[class='boxes']").append(newbox);



})