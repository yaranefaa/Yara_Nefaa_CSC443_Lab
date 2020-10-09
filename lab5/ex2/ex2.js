document.getElementById("btn").addEventListener("click",()=>{
    let rand=[1,-1];
    let horizontalDir=rand[Math.floor(Math.random()*2)];
    let verticalDir=1;
    if(horizontalDir==1){
        verticalDir=-1;
    }
    else{
        verticalDir=1;
    }
   
    console.log(horizontalDir);
    console.log(verticalDir);
    let width=document.getElementById("width").value;
    let height=document.getElementById("height").value;
    let verticalS=document.getElementById("verticalS").value;
    document.getElementById("rectangle").style.width=width;
    document.getElementById("rectangle").style.height=height;
    document.getElementById("rectangle").style.backgroundColor="#555";
    
    let rectangle=document.getElementById("rectangle");
    let content=document.getElementById("content");
    content.parentNode.removeChild(content);
    

    setTimeout(moveRectangle(rectangle,verticalDir,verticalS),10000);
    moveRectangle(rectangle,verticalDir,verticalS);
});
function moveRectangle(r,v,s){
    
    let rectPos=0;
    let f=0;
    while(f=0){
    if(v==1){
    
            r.style.left=rectPos;
            rectPos=rectPos+s;
        }else{
        
            r.style.top=rectPos;
            rectPos=rectPos+s;
        }
    }

    

}
