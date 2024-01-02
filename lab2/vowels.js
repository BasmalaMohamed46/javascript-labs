var str=prompt("Enter a string: ");
var vowels=0;

for(var i=0;i<str.length;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
        vowels++;
    }
}
alert("The number of vowels in the string is: "+vowels);