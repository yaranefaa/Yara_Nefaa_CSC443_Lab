$("li").hide();
$("li").show();
$("li[class='test']").hide();
let count=0;
$("button[name='cc']").on("click",function(){
    if (count%2==0){
        $("li").css({'color':'blue'});
        count=count+1;
    }
    else{
        $("li").css({'color':'black'});
        count=count+1;
    }
})