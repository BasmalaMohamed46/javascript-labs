var shape=prompt("Enter shape (circle, triangle, square, rectangle, parallelogram, trapezium, ellipse): ");
var area=0;

switch(shape)
{
    case "circle":
        var radius=prompt("Enter radius: ");
        area=Math.PI*radius*radius;
        alert("Area is: " + area);
        break;
    case "triangle":
        var base=prompt("Enter base: ");
        var height=prompt("Enter height: ");
        area=0.5*base*height;
        alert("Area is: " + area);
        break;
    case "square":
        var side=prompt("Enter side: ");
        area=side*side;
        alert("Area is: " + area);
        break;
    case "rectangle":
        var length=prompt("Enter length: ");
        var width=prompt("Enter width: ");
        area=length*width;
        alert("Area is: " + area);
        break;
    case "parallelogram":
        var base=prompt("Enter base: ");
        var height=prompt("Enter height: ");
        area=base*height;
        alert("Area is: " + area);
        break;
    case "trapezium":
        var base1=prompt("Enter base1: ");
        var base2=prompt("Enter base2: ");
        var height=prompt("Enter height: ");
        area=0.5*(base1+base2)*height;
        alert("Area is: " + area);
        break;
    case "ellipse":
        var a=prompt("Enter a: ");
        var b=prompt("Enter b: ");
        area=Math.PI*a*b;
        alert("Area is: " + area);
        break;
    default:
        alert("Invalid shape.");
        break;
}
