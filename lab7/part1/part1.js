var userName=document.getElementById("username");
var password=document.getElementById("password");
var submitBtn=document.getElementById("submitBtn");
var msgDiv=document.getElementById("msg");

function validate(){
    var login=
    {
        username:userName.value,
        pass:password.value
    }
    if(login.username=="admin" && login.pass=="123")
    {
         msgDiv.innerHTML="Welcome";
         msgDiv.style.color="green";
    }
    else
    {
        msgDiv.innerHTML="Not Registered";
        msgDiv.style.color="red";
    }
}

submitBtn.onclick=validate;