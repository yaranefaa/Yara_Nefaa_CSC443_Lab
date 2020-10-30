$('#submit_btn').click(function(){

    let data = {};
    data.username = $('#username').val();
    data.password = $('#password').val();
    data.cc_password = $('#cc_password').val();
    data.birthday = $('#birthday').val();

    console.log("button clicked");
    $.ajax({
        
        type: "POST",
        url: "./signup.php",
        data: data,
        dataType: "text",
        cache: false,
        success: function (response) {
            alert(data.username);
        }
    });
        return false;
});