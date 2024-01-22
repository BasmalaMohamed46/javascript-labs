var gallery=document.getElementById("gallery");
var lBtn=document.getElementById("leftArrow");
var rBtn=document.getElementById("rightArrow");

var leftFun=function()
{
    for(var i=0;i<gallery.children.length;i++){
        var temp=gallery.children[i].src;
        gallery.children[i].setAttribute("src",gallery.children[i+1].src);
        gallery.children[i+1].setAttribute("src",temp);

    }  

}

lBtn.addEventListener("click",leftFun);

var rightFun=function()
{
    for(var i=gallery.children.length-1;i>0;i--){
        var temp=gallery.children[i].src;
        gallery.children[i].setAttribute("src",gallery.children[i-1].src);
        gallery.children[i-1].setAttribute("src",temp);

    }  

}

rBtn.addEventListener("click",rightFun);

setInterval(rightFun,3000);
