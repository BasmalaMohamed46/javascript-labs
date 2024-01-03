//1
//Object.values()
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]


////////////////////////////////////////////////////////////////////////////////////////////////////////


//2
//Object.keys()
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object2));
  // expected output: Array ["a", "b", "c"]

////////////////////////////////////////////////////////////////////////////////////////////////////////


//3
//Object.entries()
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const object3 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object3)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed


////////////////////////////////////////////////////////////////////////////////////////////////////////


//4
//Object.assign()
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }


////////////////////////////////////////////////////////////////////////////////////////////////////////


//5
//Object.create()
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"


////////////////////////////////////////////////////////////////////////////////////////////////////////


//6
//Object.seal()
//The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.

const object4 = {
    property1: 42
  };
  
  Object.seal(object4);
  object4.property1 = 33;
  console.log(object4.property1);
  // expected output: 33
  
  delete object4.property1; // cannot delete when sealed
  console.log(object4.property1);
  // expected output: 33


////////////////////////////////////////////////////////////////////////////////////////////////////////


//7
//Object.freeze()
//The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42


////////////////////////////////////////////////////////////////////////////////////////////////////////


//8
//Object.toString()
//The toString() method returns a string representing the object.

function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());
  // Expected output: "Gabby"

  
////////////////////////////////////////////////////////////////////////////////////////////////////////



//9
//Object.valueOf()
//The valueOf() method of Object instances converts the this value to an object. This method is meant to be overridden by derived objects for custom type conversion logic.

function MyNumberType(n) {
    this.number = n;
  }

    MyNumberType.prototype.valueOf = function() {
        return this.number;
    };

    const object5 = new MyNumberType(4);
    console.log(object5 + 3);
    // expected output: 7


////////////////////////////////////////////////////////////////////////////////////////////////////////


//10
//Object.hasOwn()
//The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

const object6 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object6, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object6, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object6, 'undeclaredPropertyValue'));
  // Expected output: false
  




