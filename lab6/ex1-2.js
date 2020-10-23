$("button[id='button_change']").on("click",function(){
    $("span[class='cow_color']").text( $("input[id='input_color']").val());
   
})