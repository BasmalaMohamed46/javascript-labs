// Part 1
class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      var perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of shape ${this.name} = ${perimeter}`);
    }
  }

    var square = new Shape('square', 4, 5);
    square.calcPerimeter(); //20
    var triangle = new Shape('triangle', 3, 3);
    triangle.calcPerimeter(); //9


// Part 2
class Square extends Shape {
    constructor(sideLength) {
      super('square', 4, sideLength);
    }
  
    calcArea() {
      var area = this.sideLength * this.sideLength;
      console.log(`Square Area = ${area}`);
    }
  }


    var square2 = new Square(6);
    square2.calcPerimeter(); //24
    square2.calcArea(); //36


// Part 3
class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
  
    static calculate(n = 1) {
      return n * 3;
    }
  }

class SquaredTriple extends Triple {
    static longDescription;
    static description= 'I square the triple of any number you provide';
  
    static calculate(n) {
      var tripleResult = super.calculate(n);
      return tripleResult * tripleResult;
    }
  }
 
  console.log(Triple.description); // 'I triple any number you provide'
  console.log(Triple.calculate()); // 3
  console.log(Triple.calculate(6)); // 18
  
  console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
  console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // undefined
  console.log(SquaredTriple.customName); // 'Tripler' (static property is inherited)
  
 