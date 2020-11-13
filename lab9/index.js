$("#bt_post").on("click",function(){

    $.ajax({
        url:"http://localhost:8081/",
        type:"post",
        data:{name:$("#txt_name").val(),description:$("#area_desc").val(),url:$("#txt_url").val(),gender:$("input[name='gender']:checked").val(),birthday:$("#birthday").val(),color:$("#color").val()},
        dataType:"text",
        success: function(txt){
            if(txt.includes("Already added")){
                
                window.location.replace(`./public/${txt.split(":")[1]}.html`);
               
            }else{
                alert(txt+ ": Info added");
                let w = window.open('about:blank');          
                w.document.open();
                w.document.write(txt);
                w.document.close();
            }
            
        }
    })
})

/*$("#bt_getcars").on("click",function(){

    $.ajax({
        url:"http://localhost:8081/getcars",
        type:"get",
        dataType:"json",
        success: function(obj){
            console.log(obj);
            let newtab=document.createElement("table");
            obj.forEach((val) => {
                let newtr=document.createElement("tr");
                let newtd1=document.createElement("td");
                let newtd2=document.createElement("td");
                let newtd3=document.createElement("td");
                newtd1=val.model+"    ";
                newtd2=val.plateNb+"    ";
                newtd3=val.owner+"    ";
                newtr.append(newtd1);
                newtr.append(newtd2);
                newtr.append(newtd3);
                newtab.append(newtr);
            });
            
            document.body.append(newtab);
            
        }
    })
})*/