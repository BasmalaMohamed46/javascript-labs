var myTime=document.getElementById("time");
var days=document.getElementById("days");
var setAlarm=document.getElementById("setAlarm");
var clearAlarm=document.getElementById("clearAlarm");
var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");

var showTime=function(){
   var now=new Date();
   myTime.innerHTML=now.toLocaleTimeString(); 
   for(var i=0;i<days.children.length;i++){
    if(now.getDay()==i){
        days.children[i].style.backgroundColor="green";
    }
   }
}

setInterval(showTime,1000);

var alarmTimeOut=function(){
    alert("Alarm Timeout");
};
var timeOutId;
setAlarm.addEventListener("click",function(){
    var hours=parseInt(hour.value)*60*60*1000;
    var minutes=parseInt(minute.value)*60*1000;
    var seconds=parseInt(second.value)*1000;
    var total=hours+minutes+seconds;
    timeOutId=setTimeout(alarmTimeOut,total);
    resetValues();
});

clearAlarm.addEventListener("click",function(){
    clearTimeout(timeOutId);
});

var resetValues=function(){
    hour.value="0";
    minute.value="0";
    second.value="0";
}