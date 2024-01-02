do{
age=prompt("Enter your age: ");
nage=Number(age)
if(nage<0)
{
    alert("Age is negative, Please enter a valid age");
}
else if(nage>=1&&nage<=10){
    alert("You are a child");
}
else if(nage>=11&&nage<=18){
    alert("You are a teenager");
}
else if(nage>=19&&nage<=50){
    alert("You are a grown up");
}
else if(nage>50){
    alert("You are old");
}

}while(age)
