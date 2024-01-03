var num=prompt("Enter number of elements:");
var sum=0;
var avg=0;
var arr=[];
for(var i=0;i<num;i++)
{
    var n=Number(prompt("Enter number " + (i+1)));
    arr.push(n);  
}
for(var i=0;i<num;i++)
{
    sum+=arr[i];
}

avg=sum/num;
alert("Sum is: "+sum);
alert("Average is: "+avg);