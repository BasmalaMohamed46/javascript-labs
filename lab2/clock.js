function convertClock(hour)
{
    if(hour>=0 && hour<=23)
    {
        if(hour==0)
        {
            return 12 + " AM";
        }
        else if(hour==12)
        {
            return 12 + " PM";
        }
        else if(hour >= 1 && hour <= 11)
        {
            return hour + " AM";
        }
        else
        {
            return (hour-12) + " PM";
        }

    }
    else
    {
        return "Invalid input, please enter a number between 0 and 23";
    }
}

var hour = prompt("Enter the hour: ");
var result = convertClock(Number(hour));
alert("Converted hour is " + result);