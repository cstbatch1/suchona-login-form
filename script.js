document.getElementById("login-form").addEventListener
("submit", function(event){
    event.preventDefault();


    const userNumber = document.getElementById ("number").value;
    
    const userpassword =  document.getElementById("password").value;
    ("password").value;

    //for error message 
    const errorMessage = document.getElementById("error");

    //valid phone number
    const validNumber =/^01[0-9]{9}$/;
    const validpassword = /^[A-Za-z0-9]{4,11}$/;

    if(!validNumber.test(userNumber)){
        errorMessage.textContent = "please input  vaild number";
        errorMessage.style.color="red";
        return;

    }
    if(!validpassword.test(userpassword)){
        errorMessage.textContent = "please input vaild password";
        errorMessage.style.color="red";
        return; 
    }

    //input field clear

    document.getElementById("number").value="";
    document.getElementById("password").value="";

    //new window
    window.location.href="deshboard.html";

})
