var username=prompt("Enter username");
var password=prompt("Enter password");
if(username=="admin" && password=="421$$")
{
    alert("Welcome login success");
}
else if(username=="admin" && password!="421$$")
{
    alert("Wrong password");
}
else if(username!="admin" && password=="421$$")
{
    alert("Wrong username");
}
else
{
    alert("Wrong username and password");
}