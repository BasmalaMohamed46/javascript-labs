var email=document.getElementById("email");
var password=document.getElementById("password");

function errPrint(inputId, errMsg) {
    document.getElementById(inputId).innerHTML = errMsg;
}

function emailValidation(emailValue){
    var emailErr=true;
    if(emailValue==""){
        errPrint("emailErr","Email is Empty, Please Enter an Email");
        email.style.border="2px solid red";
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(emailValue)===false){
            errPrint("emailErr",`Please Enter Email in Correct Format (user@example.com)`);
            email.value="";
            email.style.border="2px solid red";
        }
        else{
            errPrint("emailErr","");
            emailErr=false;
            email.style.border="";
        }
    }
    return emailErr;
}

function passwordValidation(passwordValue){
    var passwordErr=true;
    if(passwordValue==""){
        errPrint("passwordErr","Password is Empty, Please Enter a Password");
        password.style.border="2px solid red";
    }
    else{
        var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(regex.test(passwordValue)===false){
            errPrint("passwordErr",`Password should contain small, capital letters, numbers and not less than 8 characters`);
            password.value="";
            password.style.border="2px solid red";
        }
        else{
            errPrint("passwordErr","");
            passwordErr=false;
            password.style.border="";
        }
    }
    return passwordErr;
}

function formValidation(){
    var emailVal=email.value;
    var passwordVal=password.value;
    var emailErrVal=emailValidation(emailVal);
    var passErrVal=passwordValidation(passwordVal);

    if((emailErrVal || passErrVal) == true)
    {
        return false;
    }
    else
    {
         var fullData=`Your Email is: ${emailVal} \n Your Password is: ${passwordVal}`;
         alert(fullData);

    }

}

