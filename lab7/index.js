


$("#submit_btn").on("click",function(){

  /*  let data = {};
    data.username = $('#username').val();
    data.password = $('#password').val();
    data.cc_password = $('#cc_password').val();
    data.birthday = $('#birthday').val();*/

    /*console.log("button clicked");
    console.log($("#username").val());*/
    $.ajax({
        
        type: 'POST',
        url: "./signup.php",
        data: {
            username:$("#username").val(),
            password:$("#password").val(),
            cc_password:$("#cc_password").val(),
            birthday:$("#birthday").val()
        },
        
        
        success: function (response) {
            $("#page").html(response);
            
            console.log("ajax success");
            if(response=="1"){
                alert("successfully added!");
                window.location.replace("./welcome.html");

            }else{
                if(response=="-1"){
                    alert("user already exists");
                    window.location.replace("./signup.html");
                }else{
                    alert("password do not match");
                    window.location.replace("./signup.html");
                }
            }
            
        },
        error: function(jqxhr, status, exception) {
            console.log(exception);
        }
    });
        
}
);
