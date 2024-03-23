/*-------------------------------1-------------------------------*/

function compareObjects(obj1,obj2){
  return  Object.keys(obj2).every(key=>obj1.hasOwnProperty(key) && obj1[key]===obj2[key]);
}
console.log("Question 1");
console.log(compareObjects({ name: 'basmala', age: 23, height: 170 }, { age: 23, height: 170  })); // true
console.log(compareObjects({ age: 23, height: 170 }, { name: 'basmala', age: 23, height: 170  })); // false

/*-------------------------------2-------------------------------*/

const copy_to_Clipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };
    copy_to_Clipboard('Basmala');


/*-------------------------------3-------------------------------*/


function csvToArray(str){
   var strArray=str.split("\n");
   strArray=strArray.map(item=>item.split(","));
   return strArray;
}

console.log(csvToArray('a,b\nc,d')); // [['a', 'b'], ['c', 'd']]

/*-------------------------------4-------------------------------*/

function csvTo2DArray(str){
    var strArray=str.split("\n");
    var keys=strArray[0].split(",");
    var values=strArray.slice(1);
    var result=values.map(item=>{
        var obj={};
        item.split(",").forEach((element,index)=>{
            obj[keys[index]]=element;
        });
        return obj;
    });
    return result;
}

console.log(csvTo2DArray('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

/*-------------------------------5-------------------------------*/

function arrayToCSV(arr, columns) {
    var header=columns.join(",");
    var result = arr.map(item => {
        return columns.map(column => item[column] || " ' ' ").join(',');
    });
    return header+ "\n" + result.join('\n');
}
console.log(arrayToCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'])); 

/*-------------------------------6-------------------------------*/

var findValue=(obj,key)=>
    key in obj
    ? obj[key]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return findValue(val, key);
      }, undefined);


const test = {
    first: {
      second: {
        third: 'data'
      }
    }
  };

  console.log(findValue(test, 'third')); // data
  console.log(findValue(test, 'forth')); // undefined

/*-------------------------------7-------------------------------*/

function numberToArray(num){
    return Array.from(num.toString()).map(i => parseInt(i));
}
console.log(numberToArray(12345)); // [1, 2, 3, 4, 5]

/*-------------------------------8-------------------------------*/

function filterArray(arr,...args){
    arr.forEach((item,index)=>{
        if(args.includes(item)){
            arr.splice(index,1);
        }
    });
    return arr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3,5)); // [1, 2, 4]

/*-------------------------------9-------------------------------*/

function combinations(arr){
    return arr.reduce((acc, curr) => 
    acc.concat(acc.map(r => [curr].concat(r))), [[]]);
}
console.log(combinations([1, 2, 3]));

/*-------------------------------10-------------------------------*/

function extractValues(arr,indexes){
    var result=arr.filter((item,index)=>{
       return indexes.includes(index)
    });
    return result;
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(extractValues(arr, [1, 4]));//['b', 'e']

/*-------------------------------11-------------------------------*/

function randomHexColorCode(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6); 
}
console.log(randomHexColorCode());

/*-------------------------------12-------------------------------*/

const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(removeNonASCII('äÄçÇéÉêbasmalaöÖÐþúÚ'));//basmala

/*-------------------------------13-------------------------------*/

function stringToBytes(str){
    return new Blob([str]).size;
}

console.log(stringToBytes('Hello World')); // 11

/*-------------------------------14-------------------------------*/

function replaceKeys(obj1, keys){
   return Object.keys(obj1).reduce(
        (acc, key) => ({
          ...acc,
          ...{ [keys[key] || key]: obj1[key] }
        }),
        {});
}

const obj2 = { name: 'Basmala', job: 'Programmer', height: 170 };
console.log(obj2);
result = replaceKeys(obj2,{ name: 'fullName', job: 'software Engineer' });
console.log(result);

/*-------------------------------15-------------------------------*/

function min(arr,comparator= (a, b) => a - b)  {
return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
}
 
function max(arr,comparator= (a, b) => b - a)  {
    return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
}

console.log(min([1, 2, 3, 4, 5])); // 1
console.log(max([1, 2, 3, 4, 5])); // 5

/*-------------------------------16-------------------------------*/

function all(arr,fn){
    return arr.every(fn);
}

console.log(all([4, 2, 3], x => x > 1)); // true
console.log(all([1, 2, 3], x => x > 1)); // false

/*-------------------------------17-------------------------------*/

function splitArray(arr,filterArr){
    var result=[[],[]];
    arr.map((item,index)=>{
        filterArr[index] ? result[0].push(item) : result[1].push(item);
    })
    return result;
}

console.log(splitArray([1, 2, 3, 4], [true, true, false, true])); // [[1, 2, 4], [3]]
console.log(splitArray([1, 2, 3, 4], [false, false, false, false])); // [[], [1, 2, 3, 4]]

/*-------------------------------18-------------------------------*/

function removeLeft(arr,n){
    return arr.slice(n);
}

console.log(removeLeft([1, 2, 3], 1)); // [2, 3]
console.log(removeLeft([1, 2, 3], 2)); // [3]

/*-------------------------------19-------------------------------*/

function removeRight(arr,n){
    return arr.slice(-n);
}

console.log(removeRight([1, 2, 3], 1));
console.log(removeRight([1, 2, 3], 2));

/*-------------------------------20-------------------------------*/

function extendHexColor(shortHex){
    return "#"+shortHex.split('').map(x => x + x).join('');
}

console.log(extendHexColor('05a')); // #0055aa

/*-------------------------------21-------------------------------*/

function everyNth(arr,n){
    return arr.filter((item,index)=>item%n===0);
}

console.log(everyNth([1, 2, 3, 4, 5, 6], 1)); // [1, 2, 3, 4, 5, 6]
console.log(everyNth([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]

/*-------------------------------22-------------------------------*/

function filterNonUnique(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===arr.lastIndexOf(item));
}

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filterNonUnique([1, 2, 3, 4])); 

/*-------------------------------23-------------------------------*/

function filterNonUniqueBy(arr,fn){
    return arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
}

console.log(filterNonUniqueBy([1, 2, 2, 3, 4, 4, 5],(a, b) => a === b));

/*-------------------------------24-------------------------------*/

function decapitalize(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(decapitalize('Basmala')); // 'basmala'

/*-------------------------------25-------------------------------*/

function createPairs(arr1,arr2){
    var result=[];
     arr1.map(item=>
        {
           return arr2.map(item2=>{
                result.push([item,item2]);
            });
        })
    return result;
}

console.log(createPairs([1, 2], ['a', 'b'])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

/*-------------------------------26-------------------------------*/

function yesOrNo(str){
    if(str.toLowerCase()==="yes" || str.toLowerCase()==="y"){
        return true;
    }
    else if(str.toLowerCase()==="no" || str.toLowerCase()==="n"){
        return false;
    }
    else{
        return "Invalid Input";
    }
}
console.log(yesOrNo('Y')); 
console.log(yesOrNo('yes'));  
console.log(yesOrNo('No')); 

/*-------------------------------27-------------------------------*/

const union_With = (a, b, comp) =>
 Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));

/*-------------------------------28-------------------------------*/

const time_taken = callback => {
    const result = callback();
    return result;
  };
  console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms"); 
  console.log("Time taken: " + time_taken(() => Math.sqrt(225))+" ms");
  console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6)))+" ms");

/*-------------------------------29-------------------------------*/

const to_Safe_Integer = num =>
 Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
console.log(to_Safe_Integer('5.2'));
console.log(to_Safe_Integer('5.52'));

/*-------------------------------30-------------------------------*/

function filterElements(arr,...args){
    return arr.filter(item=>!args.includes(item));
}

console.log(filterElements([1, 2, 3, 4, 5], 3,5)); // [1, 2, 4]

/*-------------------------------31-------------------------------*/
{
    const getArrayExceptFirst = (arr) => {
      if (arr.length === 1) {
        return arr;
      } else {
        return arr.slice(1);
      }
    };
  
    // Test
    const array = [1, 2, 3, 4, 5];
    console.log(getArrayExceptFirst(array));
  }
  
  /*-------------------------------32-------------------------------*/
  {
    const sumWithMapping = (arr, mappingFunc) => {
      return arr.map(mappingFunc).reduce((acc, val) => acc + val, 0);
    };
  
    // Test
    const array = [1, 2, 3, 4, 5];
    const mappingFunction = (num) => num * 2;
    console.log(sumWithMapping(array, mappingFunction));
  }
  
  /*-------------------------------33-------------------------------*/
  {
    const getRandomNumberInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };
  
    // Test
    console.log(getRandomNumberInRange(10, 20));
  }
  
  /*-------------------------------34-------------------------------*/
  {
    const getRandomIntegerInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    // Test
    console.log(getRandomIntegerInRange(10, 20));
  }
  
  /*-------------------------------35-------------------------------*/
  {
    const getRandomIntegerInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const getRandomIntegers = (n, min, max) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push(getRandomIntegerInRange(min, max));
      }
      return result;
    };
  
    // Test
    console.log(getRandomIntegers(5, 10, 20));
  }
  
  /*-------------------------------36-------------------------------*/
  {
    const invokeFunctions = (...funcs) => {
      return funcs.map((func) => func());
    };
  
    // Test
    const add = (a, b) => {
      return a + b;
    };
  
    const subtract = (a, b) => {
      return a - b;
    };
  
    const result = invokeFunctions(
      () => add(3, 5),
      () => subtract(10, 7)
    );
    console.log(result);
  }
  
  /*-------------------------------37-------------------------------*/
  {
    const sortByProperty = (arr, prop, order = "asc") => {
      const sortOrder = order === "asc" ? 1 : -1;
      return arr.sort((a, b) => (a[prop] - b[prop]) * sortOrder);
    };
  
    const data = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Doe", age: 20 },
    ];
  
    // Test
    const sortedData = sortByProperty(data, "age", "asc");
    console.log(sortedData);
  }
  
  /*-------------------------------38-------------------------------*/
  {
    const padString = (str, length, char = " ") => {
      if (str.length >= length) return str;
      const paddingLength = length - str.length;
      const padding = char
        .repeat(Math.ceil(paddingLength / char.length))
        .substring(0, paddingLength);
      return padding + str + padding;
    };
  
    // Test
    const paddedStr = padString("hello", 10, "*");
    console.log(paddedStr);
  }
  
  /*-------------------------------39-------------------------------*/
  {
    const removeKeys = (obj, keys) => {
      const newObj = { ...obj };
      keys.forEach((key) => delete newObj[key]);
      return newObj;
    };
  
    // Test
    const obj = { a: 1, b: 2, c: 3 };
    const updatedObj = removeKeys(obj, ["a", "c"]);
    console.log(updatedObj);
  }
  
  /*-------------------------------40-------------------------------*/
  {
    const keyValuePairsToArray = (obj) => {
      return Object.entries(obj);
    };
  
    // Test
    const obj = { a: 1, b: 2, c: 3 };
    const keyValueArray = keyValuePairsToArray(obj);
    console.log(keyValueArray);
  }
  
  /*-------------------------------41-------------------------------*/
  {
    const createObjectFromPairs = (pairs) => {
      return Object.fromEntries(pairs);
    };
  
    // Test
    const pairs = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ];
    const newObj = createObjectFromPairs(pairs);
    console.log(newObj);
  }
  
  /*-------------------------------42-------------------------------*/
  {
    const coalesce = (validateFn, ...args) => {
      return args.find((arg) => validateFn(arg));
    };
  
    // Test
    const isValid = (val) => val !== undefined && val !== null;
    const result = coalesce(isValid, null, undefined, 0, "", "hello");
    console.log(result);
  }
  
  /*-------------------------------43-------------------------------*/
  {
    const variadicFunction = (fn) => {
      return (...args) => {
        return fn(args);
      };
    };
  
    // Test
    const sum = (nums) => nums.reduce((acc, val) => acc + val, 0);
    const variadicSum = variadicFunction(sum);
    console.log(variadicSum(1, 2, 3, 4));
  }
  
  /*-------------------------------44-------------------------------*/
  {
    const removeFalseValues = (arr) => {
      return arr.filter(Boolean);
    };
  
    // Test
    const data = [0, 1, false, true, "", "hello", null, undefined];
    const filteredData = removeFalseValues(data);
    console.log(filteredData);
  }
  
  /*-------------------------------45-------------------------------*/
  {
    const splitIntoGroups = (arr, filterFn) => {
      return arr.reduce(
        (result, current) => {
          result[filterFn(current) ? 0 : 1].push(current);
          return result;
        },
        [[], []]
      );
    };
  
    // Test
    const data = [1, 2, 3, 4, 5, 6];
    const isEven = (num) => num % 2 === 0;
    const groupedData = splitIntoGroups(data, isEven);
    console.log(groupedData);
  }
  
  /*-------------------------------46-------------------------------*/
  {
    const curry = (fn) => {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn(...args);
        } else {
          return function (...moreArgs) {
            return curried(...args, ...moreArgs);
          };
        }
      };
    };
  
    // Test
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    console.log(curriedAdd(1)(2)(3));
  }
  
  /*-------------------------------47-------------------------------*/
  {
    const deepCompare = (a, b) => {
      if (a === b) return true;
      if (
        typeof a !== "object" ||
        typeof b !== "object" ||
        a === null ||
        b === null
      )
        return false;
  
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  
      if (keysA.length !== keysB.length) return false;
  
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepCompare(a[key], b[key])) return false;
      }
  
      return true;
    };
  
    // Test
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 1 } };
    console.log(deepCompare(obj1, obj2));
  }
  
  /*-------------------------------48-------------------------------*/
  {
    const getFunctionPropertyNames = (obj, includeInherited = false) => {
      const propNames = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          propNames.push(key);
        }
      }
      if (includeInherited) {
        const proto = Object.getPrototypeOf(obj);
        if (proto !== null) {
          propNames.push(...getFunctionPropertyNames(proto, true));
        }
      }
      return propNames;
    };
  
    // Test
    const obj = {
      method1() {},
      method2() {},
      prop1: 10,
    };
    const functionProps = getFunctionPropertyNames(obj, true);
    console.log(functionProps);
  }
  
  /*-------------------------------49-------------------------------*/
  {
    const getPropertiesBySelectors = (obj, selectors) => {
      const result = {};
      selectors.forEach((selector) => {
        if (obj.hasOwnProperty(selector)) {
          result[selector] = obj[selector];
        }
      });
      return result;
    };
  
    // Test
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const selectors = ["a", "c", "e"];
    const selectedProps = getPropertiesBySelectors(obj, selectors);
    console.log(selectedProps);
  }
  
  /*-------------------------------50-------------------------------*/
  {
    const integerToSuffixedString = (num) => {
      const suffix = num >= 12 ? "pm" : "am";
      const hour = num > 12 ? num - 12 : num;
      return `${hour}${suffix}`;
    };
  
    // Test
    console.log(integerToSuffixedString(10));
    console.log(integerToSuffixedString(15));
  }
  
  /*-------------------------------51-------------------------------*/
  {
    const getCurrentURLParameters = () => {
      const params = new URLSearchParams(window.location.search);
      const paramsObj = {};
      for (const [key, value] of params) {
        paramsObj[key] = value;
      }
      return paramsObj;
    };
  
    // Test
    console.log(getCurrentURLParameters());
  }
  
  /*-------------------------------52-------------------------------*/
  {
    const groupArrayElements = (arr, fn) => {
      const result = {};
      arr.forEach((item) => {
        const key = fn(item);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
      });
      return result;
    };
  
    // Test
    const data = [1, 2, 3, 4, 5, 6];
    const groupedData = groupArrayElements(data, (item) =>
      item % 2 === 0 ? "even" : "odd"
    );
    console.log(groupedData);
  }
  
  /*-------------------------------53-------------------------------*/
  {
    const initialize2DArray = (rows, cols, value) => {
      return Array.from({ length: rows }, () => Array(cols).fill(value));
    };
  
    // Test
    console.log(initialize2DArray(3, 3, 0));
  }
  
  /*-------------------------------54-------------------------------*/
  {
    const initializeArrayWithRange = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    };
  
    // Test
    console.log(initializeArrayWithRange(1, 5));
  }
  
  /*-------------------------------55-------------------------------*/
  {
    const joinAndNormalizeURL = (...segments) => {
      const joinedURL = segments.join("/");
      const url = new URL(joinedURL, "https://example.com");
      return url.href;
    };
  
    // Test
    console.log(joinAndNormalizeURL("path", "to", "resource"));
  }
  
  /*-------------------------------56-------------------------------*/
  {
    const areAllElementsEqual = (arr) => {
      return arr.every((val) => val === arr[0]);
    };
  
    // Test
    console.log(areAllElementsEqual([1, 1, 1, 1]));
    console.log(areAllElementsEqual([1, 2, 3, 4]));
  }
  
  /*-------------------------------57-------------------------------*/
  {
    const computeAverage = (arr, mapFn) => {
      const mappedValues = arr.map(mapFn);
      const sum = mappedValues.reduce((acc, val) => acc + val, 0);
      return sum / arr.length;
    };
  
    // Test
    const data = [1, 2, 3, 4, 5];
    const average = computeAverage(data, (num) => num * 2);
    console.log(average);
  }
  
  /*-------------------------------58-------------------------------*/
  {
    const splitValuesByPredicate = (arr, predicateFn) => {
      return arr.reduce(
        (result, current) => {
          result[predicateFn(current) ? 0 : 1].push(current);
          return result;
        },
        [[], []]
      );
    };
  
    // Test
    const data = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    const groupedData = splitValuesByPredicate(data, isEven);
    console.log(groupedData);
  }
  
  /*-------------------------------59-------------------------------*/
  {
    const invokeWithContext = (fn, context, ...args) => {
      return fn.apply(context, args);
    };
  
    const context = { value: 10 };
  
    function addValue(num) {
      return this.value + num;
    }
  
    // Test
    const result = invokeWithContext(addValue, context, 5);
    console.log(result);
  }
  
  /*-------------------------------60-------------------------------*/
  {
    const invokeMethodByKey = (obj, key, ...args) => {
      const method = obj[key];
      if (typeof method === "function") {
        return method.apply(obj, args);
      } else {
        throw new Error(`${key} is not a function in the object.`);
      }
    };
  
    const person = {
      name: "John",
      greet(greeting) {
        return `${greeting}, ${this.name}!`;
      },
    };
  
    // Test
    const result = invokeMethodByKey(person, "greet", "Hello");
    console.log(result);
  }
  
  /*-------------------------------61-------------------------------*/
  {
    const castToArray = (value) => {
      return Array.isArray(value) ? value : [value];
    };
  
    const arr1 = castToArray("hello");
    const arr2 = castToArray([1, 2, 3]);
  
    // Test
    console.log(arr1);
    console.log(arr2);
  }
  
  /*-------------------------------62-------------------------------*/
  {
    const chainAsyncFunctions = (...fns) => {
      return (initialValue) => {
        return fns.reduce(async (acc, fn) => {
          return fn(await acc);
        }, initialValue);
      };
    };
  
    // Test
    const asyncAddOne = async (num) => num + 1;
    const asyncMultiplyByTwo = async (num) => num * 2;
  
    const chainedAsyncFunctions = chainAsyncFunctions(
      asyncAddOne,
      asyncMultiplyByTwo
    );
    chainedAsyncFunctions(3).then((result) => {
      console.log(result);
    });
  }
  
  /*-------------------------------63-------------------------------*/
  {
    const cloneRegExp = (regexp) => {
      const flags = regexp.flags;
      return new RegExp(regexp.source, flags);
    };
  
    // Test
    const regex1 = /test/gi;
    const regex2 = cloneRegExp(regex1);
  
    console.log(regex2);
  }
  
  /*-------------------------------64-------------------------------*/
  {
    const firstNonNullArgument = (...args) => {
      return args.find((arg) => arg !== null && arg !== undefined);
    };
  
    // Test
    const result = firstNonNullArgument(null, undefined, 0, "", "hello");
    console.log(result);
  }
  
  /*-------------------------------65-------------------------------*/
  {
    const colorizeText = (text, colorCode) => {
      return `\x1b[${colorCode}m${text}\x1b[0m`;
    };
  
    // Test
    console.log(colorizeText("Hello, world!", 32));
  }
  
  /*-------------------------------66-------------------------------*/
  {
    const composeRight = (...fns) => {
      return (initialValue) => {
        return fns.reduceRight((acc, fn) => {
          return fn(acc);
        }, initialValue);
      };
    };
  
    // Test
    const addOne = (num) => num + 1;
    const multiplyByTwo = (num) => num * 2;
    const composedFn = composeRight(multiplyByTwo, addOne);
  
    console.log(composedFn(3));
  }
  
  /*-------------------------------67-------------------------------*/
  {
    const composeLeft = (...fns) => {
      return (initialValue) => {
        return fns.reduce((acc, fn) => {
          return fn(acc);
        }, initialValue);
      };
    };
  
    // Test
    const addOne = (num) => num + 1;
    const multiplyByTwo = (num) => num * 2;
    const composedFn = composeLeft(addOne, multiplyByTwo);
  
    console.log(composedFn(3));
  }
  
  /*-------------------------------68-------------------------------*/
  {
    const converge = (convergingFn, ...branchingFns) => {
      return (...args) => {
        const results = branchingFns.map((fn) => fn(...args));
        return convergingFn(...results);
      };
    };
  
    // Test
    const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
    const multiply = (a, b) => a * b;
    const subtract = (a, b) => a - b;
  
    const convergingFn = converge(sum, multiply, subtract);
    console.log(convergingFn(2, 3));
  }
  
  /*-------------------------------69-------------------------------*/
  {
    const groupByCount = (arr, fn) => {
      return arr.reduce((acc, val) => {
        const key = fn(val);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
    };
  
    // Test
    const data = [1, 2, 3, 4, 5];
    const groupCount = groupByCount(data, (num) =>
      num % 2 === 0 ? "even" : "odd"
    );
    console.log(groupCount);
  }
  
  /*-------------------------------70-------------------------------*/
  {
    const countValueInArray = (arr, value) => {
      return arr.filter((item) => item === value).length;
    };
  
    // Test
    const data = [1, 2, 3, 1, 4, 1, 5];
    const count = countValueInArray(data, 1);
    console.log(count);
  }
  
  /*-------------------------------71-------------------------------*/
  {
    const deepCloneObject = (obj) => {
      return JSON.parse(JSON.stringify(obj));
    };
  
    // Test
    const originalObject = { a: 1, b: { c: 2 } };
    const clonedObject = deepCloneObject(originalObject);
  
    console.log(clonedObject);
  }
  
  /*-------------------------------72-------------------------------*/
  {
    const detectDeviceType = () => {
      const userAgent = navigator.userAgent;
      if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent)) {
        return "Mobile Device";
      } else {
        return "Desktop/Laptop";
      }
    };
  
    // Test
    console.log(detectDeviceType());
  }
  
  /*-------------------------------73-------------------------------*/
  {
    const differenceWith = (arr1, arr2, fn) => {
      const set = new Set(arr2.map(fn));
      return arr1.filter((item) => !set.has(fn(item)));
    };
  
    // Test
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 4, 6];
    const result = differenceWith(arr1, arr2, (x) => x * 2);
    console.log(result);
  }
  
  /*-------------------------------74-------------------------------*/
  {
    const filterByComparator = (arr, comparatorFn) => {
      return arr.filter(comparatorFn);
    };
  
    // Test
    const data = [1, 2, 3, 4, 5];
    const filteredData = filterByComparator(data, (num) => num % 2 === 0);
    console.log(filteredData);
  }
  
  /*-------------------------------75-------------------------------*/
  {
    const computeEloRatings = (preRatings, kFactor = 32, ...results) => {
      const newRatings = [];
      for (let i = 0; i < preRatings.length; i++) {
        const actualScore = results[i] ? 1 : 0;
        const expectedScore =
          1 / (1 + 10 ** ((preRatings[i] - preRatings[i ? 0 : 1]) / 400));
        const newRating = preRatings[i] + kFactor * (actualScore - expectedScore);
        newRatings.push(Math.round(newRating));
      }
      return newRatings;
    };
  
    // Test
    const ratings = [1200, 1300];
    const updatedRatings = computeEloRatings(ratings, 32, true, false);
    console.log(updatedRatings);
  }
  
  /*-------------------------------76-------------------------------*/
  {
    const forEachRight = (arr, callback) => {
      for (let i = arr.length - 1; i >= 0; i--) {
        callback(arr[i], i, arr);
      }
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    forEachRight(numbers, (num) => console.log(num * 2));
  }
  
  /*-------------------------------77-------------------------------*/
  {
    const iterateObjectProperties = (obj, callback) => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          callback(key, obj[key]);
        }
      }
    };
  
    // Test
    const person = { name: "John", age: 30, city: "New York" };
    iterateObjectProperties(person, (key, value) =>
      console.log(`${key}: ${value}`)
    );
  }
  
  /*-------------------------------78-------------------------------*/
  {
    const invertObject = (obj, transformFn = (val) => val) => {
      const invertedObj = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = transformFn(key);
          invertedObj[obj[key]] = invertedObj[obj[key]]
            ? invertedObj[obj[key]].concat(value)
            : [value];
        }
      }
      return invertedObj;
    };
  
    // Test
    const data = { a: 1, b: 2, c: 1 };
    const invertedData = invertObject(data, (key) => key.toUpperCase());
    console.log(invertedData);
  }
  
  /*-------------------------------79-------------------------------*/
  {
    const longestIterable = (...args) => {
      return args.reduce((acc, val) => (val.length > acc.length ? val : acc), []);
    };
  
    // Test
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6, 7];
    const longest = longestIterable(arr1, arr2, "hello", [8, 9]);
    console.log(longest);
  }
  
  /*-------------------------------80-------------------------------*/
  {
    const luhnAlgorithm = (num) => {
      const digits = `${num}`.split("").map(Number);
      for (let i = digits.length - 2; i >= 0; i -= 2) {
        digits[i] *= 2;
        if (digits[i] > 9) digits[i] -= 9;
      }
      const sum = digits.reduce((acc, val) => acc + val, 0);
      return sum % 10 === 0;
    };
  
    // Test
    const creditCardNumber = 4111111111111111;
    console.log(luhnAlgorithm(creditCardNumber));
  }
  
  /*-------------------------------81-------------------------------*/
  {
    const createObjectWithKeys = (keysFn, obj) => {
      const newObj = {};
      for (let key of keysFn(Object.keys(obj))) {
        newObj[key] = obj[key];
      }
      return newObj;
    };
  
    // Test
    const keysFn = (keys) => keys.map((key) => key.toUpperCase());
    const originalObject = { a: 1, b: 2, c: 3 };
    const newObj = createObjectWithKeys(keysFn, originalObject);
    console.log(newObj);
  }
  
  /*-------------------------------82-------------------------------*/
  {
    const mapArrayToObj = (arr, mappingFn) => {
      const obj = {};
      arr.forEach((item) => (obj[item] = mappingFn(item)));
      return obj;
    };
  
    // Test
    const numbers = [1, 2, 3, 4];
    const mappedObj = mapArrayToObj(numbers, (num) => num * num);
    console.log(mappedObj);
  }
  
  /*-------------------------------83-------------------------------*/
  {
    const updateStringWithFunction = (str, updateFn) => {
      return str.split("").map(updateFn).join("");
    };
  
    // Test
    const originalStr = "hello";
    const updatedStr = updateStringWithFunction(originalStr, (char) =>
      char.toUpperCase()
    );
    console.log(updatedStr);
  }
  
  /*-------------------------------84-------------------------------*/
  {
    const createObjectWithFunctionValues = (obj, func) => {
      const newObj = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = func(obj[key]);
        }
      }
      return newObj;
    };
  
    // Test
    const data = { a: 1, b: 2, c: 3 };
    const updatedData = createObjectWithFunctionValues(data, (val) => val * 2);
    console.log(updatedData);
  }
  
  /*-------------------------------85-------------------------------*/
  {
    const maskString = (str, numCharsToKeep, maskChar = "*") => {
      return (
        str.slice(0, -numCharsToKeep).replace(/./g, maskChar) +
        str.slice(-numCharsToKeep)
      );
    };
  
    // Test
    const originalStr = "1234567890";
    const maskedStr = maskString(originalStr, 4, "#");
    console.log(maskedStr);
  }
  
  /*-------------------------------86-------------------------------*/
  {
    const maxAfterMapping = (arr, mapFn) => {
      return Math.max(...arr.map(mapFn));
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const maxSquared = maxAfterMapping(numbers, (num) => num ** 2);
    console.log(maxSquared);
  }
  
  /*-------------------------------87-------------------------------*/
  {
    const getNMaxElements = (arr, n) => {
      if (n >= arr.length) {
        return arr.sort((a, b) => b - a);
      }
      return arr.sort((a, b) => b - a).slice(0, n);
    };
  
    // Test
    const numbers = [10, 30, 50, 20, 40];
    const nMax = getNMaxElements(numbers, 2);
    console.log(nMax);
  }
  
  /*-------------------------------88-------------------------------*/
  {
    const getMedian = (arr) => {
      const sortedArr = arr.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedArr.length / 2);
      if (sortedArr.length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
      } else {
        return sortedArr[middleIndex];
      }
    };
  
    // Test
    const numbers = [5, 3, 8, 2, 9];
    const median = getMedian(numbers);
    console.log(median);
  }
  
  /*-------------------------------89-------------------------------*/
  {
    const negatePredicate = (predicateFn) => {
      return (...args) => !predicateFn(...args);
    };
  
    // Test
    const isEven = (num) => num % 2 === 0;
    const isOdd = negatePredicate(isEven);
    console.log(isOdd(5));
    console.log(isOdd(6));
  }
  
  /*-------------------------------90-------------------------------*/
  {
    const nestObjects = (
      flatArr,
      parentId = null,
      idKey = "id",
      parentIdKey = "parentId"
    ) => {
      const nestedObj = {};
      flatArr.forEach((item) => {
        if (item[parentIdKey] === parentId) {
          const children = nestObjects(flatArr, item[idKey], idKey, parentIdKey);
          if (Object.keys(children).length) {
            item.children = children;
          }
          nestedObj[item[idKey]] = item;
        }
      });
      return nestedObj;
    };
  
    // Test
    const flatData = [
      { id: 1, name: "Parent 1" },
      { id: 2, name: "Child 1", parentId: 1 },
      { id: 3, name: "Child 2", parentId: 1 },
      { id: 4, name: "Parent 2" },
    ];
    const nestedData = nestObjects(flatData);
    console.log(JSON.stringify(nestedData, null, 2));
  }
  
  /*-------------------------------91-------------------------------*/
  {
    const allFalse = (arr, predicateFn) => {
      return arr.every((item) => !predicateFn(item));
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const isNegative = (num) => num < 0;
    console.log(allFalse(numbers, isNegative));
  }
  
  /*-------------------------------92-------------------------------*/
  {
    const getArgumentAtIndex = (index, ...args) => {
      const adjustedIndex = index < 0 ? args.length + index : index;
      return args[adjustedIndex];
    };
  
    // Test
    console.log(getArgumentAtIndex(-1, 1, 2, 3));
    console.log(getArgumentAtIndex(1, "a", "b", "c"));
  }
  
  /*-------------------------------93-------------------------------*/
  {
    const removeEventListener = (element, eventName, handler) => {
      element.removeEventListener(eventName, handler);
    };
  
    // Test
    const button = document.getElementById("myButton");
    const handleClick = () => {
      console.log("Button clicked");
    };
    button.addEventListener("click", handleClick);
  
    removeEventListener(button, "click", handleClick);
  }
  
  /*-------------------------------94-------------------------------*/
  {
    const moveElementsToEnd = (arr, numElements) => {
      const movedElements = arr.splice(0, numElements);
      arr.push(...movedElements);
      return arr;
    };
  
    // Test
    const array = [1, 2, 3, 4, 5];
    const resultArray = moveElementsToEnd(array, 2);
    console.log(resultArray);
  }
  
  /*-------------------------------95-------------------------------*/
  {
    const addEventListenerWithDelegation = (
      container,
      eventName,
      selector,
      handler
    ) => {
      container.addEventListener(eventName, (event) => {
        if (event.target.matches(selector)) {
          handler(event);
        }
      });
    };
  
    // Test
    const list = document.getElementById("myList");
    addEventListenerWithDelegation(list, "click", "li", (event) => {
      console.log("Clicked on", event.target.textContent);
    });
  }
  
  /*-------------------------------96-------------------------------*/
  {
    const pickKeyValuePairs = (obj, keys) => {
      return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keys.includes(key))
      );
    };
  
    // Test
    const data = { a: 1, b: 2, c: 3, d: 4 };
    const keysToPick = ["a", "c"];
    const pickedData = pickKeyValuePairs(data, keysToPick);
    console.log(pickedData);
  }
  
  /*-------------------------------97-------------------------------*/
  {
    const createObjectBasedOnFunction = (obj, func) => {
      return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => func(value, key))
      );
    };
  
    // Test
    const data = { a: 1, b: 0, c: 3, d: 4 };
    const newObj = createObjectBasedOnFunction(data, (value) => value % 2 === 0);
    console.log(newObj);
  }
  
  /*-------------------------------98-------------------------------*/
  {
    const filterArrayObjects = (arr, conditionFn, keys) => {
      return arr.map((obj) =>
        keys.reduce((acc, key) => {
          if (conditionFn(obj[key])) {
            acc[key] = obj[key];
          }
          return acc;
        }, {})
      );
    };
  
    // Test
    const data = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 35 },
    ];
    const filteredData = filterArrayObjects(data, (age) => age > 30, ["name"]);
    console.log(filteredData);
  }
  
  /*-------------------------------99-------------------------------*/
  {
    const hashStringToNumber = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
      }
      return Math.abs(hash);
    };
  
    // Test
    const inputString = "hello world";
    const hashedNumber = hashStringToNumber(inputString);
    console.log(hashedNumber);
  }
  
  /*-------------------------------100-------------------------------*/
  {
    const groupByPosition = (...arrays) => {
      const maxLength = Math.max(...arrays.map((arr) => arr.length));
      const result = [];
      for (let i = 0; i < maxLength; i++) {
        result.push(arrays.map((arr) => arr[i]).filter(Boolean));
      }
      return result;
    };
  
    // Test
    const array1 = [1, 2, 3];
    const array2 = ["a", "b"];
    const combinedArray = groupByPosition(array1, array2, (a, b) => a + b);
    console.log(combinedArray);
  }
  
  /*-------------------------------101-------------------------------*/
  {
    const createObjectFromArrays = (keys, values) => {
      return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
    };
  
    // Test
    const propertyNames = ["name", "age", "gender"];
    const propertyValues = ["John Doe", 30, "Male"];
    const obj = createObjectFromArrays(propertyNames, propertyValues);
    console.log(obj);
  }
  
  /*-------------------------------102-------------------------------*/
  {
    const groupByPosition = (...arrays) => {
      const maxLength = Math.max(...arrays.map((arr) => arr.length));
      const result = [];
      for (let i = 0; i < maxLength; i++) {
        result.push(arrays.map((arr) => arr[i]));
      }
      return result;
    };
  
    // Test
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c"];
    const combinedArray = groupByPosition(array1, array2);
    console.log(combinedArray);
  }
  
  /*-------------------------------103-------------------------------*/
  {
    const stringToArrayOfWords = (str) => {
      return str.split(/\s+/).filter(Boolean);
    };
  
    // Test
    const sentence = "Hello world, how are you?";
    const wordsArray = stringToArrayOfWords(sentence);
    console.log(wordsArray);
  }
  
  /*-------------------------------104-------------------------------*/
  {
    const testValueWithPredicate = (value, predicateFn, fn) => {
      return predicateFn(value) ? fn(value) : value;
    };
  
    // Test
    const value = 5;
    const isEven = (num) => num % 2 === 0;
    const result = testValueWithPredicate(value, isEven, (num) => num * 2);
    console.log(result);
  }
  
  /*-------------------------------105-------------------------------*/
  {
    const isNumber = (value) => typeof value === "number" && !isNaN(value);
  
    // Test
    console.log(isNumber(5));
    console.log(isNumber("hello"));
  }
  
  /*-------------------------------106-------------------------------*/
  {
    const ungroupAndApply = (arr, fn) => {
      return arr.flatMap((subArr) => subArr.map(fn));
    };
  
    // Test
    const groupedArray = [[1, 2], [3, 4, 5], [6]];
    const ungroupedArray = ungroupAndApply(groupedArray, (num) => num * 2);
    console.log(ungroupedArray);
  }
  
  /*-------------------------------107-------------------------------*/
  {
    const distinctValuesFromRight = (arr, comparatorFn) => {
      const result = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        if (!result.some((item) => comparatorFn(item, arr[i]))) {
          result.unshift(arr[i]);
        }
      }
      return result;
    };
  
    // Test
    const array = [1, 2, 3, 2, 4, 5, 3];
    const distinctArray = distinctValuesFromRight(array, (a, b) => a === b);
    console.log(distinctArray);
  }
  
  /*-------------------------------108-------------------------------*/
  {
    const getUniqueValuesWithComparator = (arr, comparatorFn) => {
      return arr.filter((value, index, self) => {
        return self.findIndex((item) => comparatorFn(item, value)) === index;
      });
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5, 6];
    const uniqueNumbers = getUniqueValuesWithComparator(
      numbers,
      (a, b) => a % 2 === b % 2
    );
    console.log(uniqueNumbers);
  }
  
  /*-------------------------------109-------------------------------*/
  {
    const getNthElement = (arr, n) => {
      return n >= 0 ? arr[n] : arr[arr.length + n];
    };
  
    // Test
    const numbers = [10, 20, 30, 40, 50];
    console.log(getNthElement(numbers, 2));
    console.log(getNthElement(numbers, -1));
  }
  
  /*-------------------------------110-------------------------------*/
  {
    const getElementsFromTwoArrays = (arr1, arr2) => {
      return [...new Set([...arr1, ...arr2])];
    };
  
    // Test
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    console.log(getElementsFromTwoArrays(arr1, arr2));
  }
  
  /*-------------------------------111-------------------------------*/
  {
    const buildArray = (iteratorFn, seedValue, size) => {
      const result = [];
      let current = seedValue;
      for (let i = 0; i < size; i++) {
        result.push(current);
        current = iteratorFn(current);
      }
      return result;
    };
  
    // Test
    const multiplyByTwo = (num) => num * 2;
    console.log(buildArray(multiplyByTwo, 1, 5));
  }
  
  /*-------------------------------112-------------------------------*/
  {
    const unflattenObject = (obj) => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const keys = key.split(".");
        let nested = acc;
        for (let i = 0; i < keys.length - 1; i++) {
          const currentKey = keys[i];
          nested[currentKey] = nested[currentKey] || {};
          nested = nested[currentKey];
        }
        nested[keys[keys.length - 1]] = value;
        return acc;
      }, {});
    };
  
    // Test
    const flattenedObject = {
      "a.b.c": 1,
      "a.d.e": 2,
      f: 3,
    };
    console.log(unflattenObject(flattenedObject));
  }
  
  /*-------------------------------113-------------------------------*/
  {
    const unescapeHTML = (str) => {
      const div = document.createElement("div");
      div.innerHTML = str;
      return div.textContent || div.innerText || "";
    };
  
    // Test
    const escapedString = "&lt;p&gt;Hello &amp; world!&lt;/p&gt;";
    console.log(unescapeHTML(escapedString));
  }
  
  /*-------------------------------114-------------------------------*/
  {
    const uncurry = (fn, depth = 1) => {
      return (...args) => {
        let currentFn = fn;
        for (let i = 0; i < depth; i++) {
          currentFn = currentFn(args[i]);
        }
        return currentFn;
      };
    };
  
    // Test
    const add = (a) => (b) => (c) => a + b + c;
    const uncurriedAdd = uncurry(add, 3);
    console.log(uncurriedAdd(1, 2, 3));
  }
  
  /*-------------------------------115-------------------------------*/
  {
    const createFunctionIgnoringArgs = (fn) => {
      return (...args) => fn(args[0]);
    };
  
    // Test
    const printFirstArg = (arg) => {
      console.log(arg);
    };
    const printFirst = createFunctionIgnoringArgs(printFirstArg);
    printFirst(1, 2, 3);
  }
  
  /*-------------------------------116-------------------------------*/
  {
    const checkPredicateForAllElements = (collection, predicate) => {
      return collection.every(predicate);
    };
  
    // Test
    const numbers = [2, 4, 6, 8, 10];
    const isEven = (num) => num % 2 === 0;
    console.log(checkPredicateForAllElements(numbers, isEven));
  }
  
  /*-------------------------------117-------------------------------*/
  {
    const truncateString = (str, maxLength) => {
      return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };
  
    // Test
    const longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
    console.log(truncateString(longString, 20));
  }
  
  /*-------------------------------118-------------------------------*/
  {
    const applyFunctionToObjectKeys = (obj, fn, accumulator) => {
      for (let key in obj) {
        accumulator = fn(accumulator, obj[key], key);
      }
      return accumulator;
    };
  
    // Test
    const sumValues = (acc, value) => acc + value;
    const numbers = { a: 1, b: 2, c: 3 };
    console.log(applyFunctionToObjectKeys(numbers, sumValues, 0));
  }
  
  /*-------------------------------119-------------------------------*/
  {
    const getTomorrowDate = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toDateString();
    };
  
    // Test
    console.log(getTomorrowDate());
  }
  
  /*-------------------------------120-------------------------------*/
  {
    const convertToSnakeCase = (str) => {
      return str.replace(/\s+/g, "_").toLowerCase();
    };
  
    // Test
    const sentence = "Convert This String To Snake Case";
    console.log(convertToSnakeCase(sentence));
  }
  
  /*-------------------------------121-------------------------------*/
  {
    const convertToSafeInteger = (num) => {
      return Math.round(
        Math.max(
          Math.min(Number(num), Number.MAX_SAFE_INTEGER),
          Number.MIN_SAFE_INTEGER
        )
      );
    };
  
    // Test
    console.log(convertToSafeInteger("123"));
    console.log(convertToSafeInteger("12345678901234567890"));
  }
  
  /*-------------------------------122-------------------------------*/
  {
    const addOrdinalSuffix = (num) => {
      if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
      }
      switch (num % 10) {
        case 1:
          return num + "st";
        case 2:
          return num + "nd";
        case 3:
          return num + "rd";
        default:
          return num + "th";
      }
    };
  
    // Test
    console.log(addOrdinalSuffix(1));
    console.log(addOrdinalSuffix(22));
    console.log(addOrdinalSuffix(33));
    console.log(addOrdinalSuffix(100));
  }
  
  /*-------------------------------123-------------------------------*/
  {
    const convertToKebabCase = (str) => {
      return str.replace(/\s+/g, "-").toLowerCase();
    };
  
    // Test
    const sentence = "Convert This String To Kebab Case";
    console.log(convertToKebabCase(sentence));
  }
  
  /*-------------------------------124-------------------------------*/
  {
    const reduceArrayLikeToObject = (arrayLike, reducerFn, initialValue) => {
      return [...arrayLike].reduce(reducerFn, initialValue);
    };
  
    // Test
    const nodeList = document.querySelectorAll("div");
    const result = reduceArrayLikeToObject(
      nodeList,
      (acc, el) => {
        acc[el.id] = el.className;
        return acc;
      },
      {}
    );
    console.log(result);
  }
  
  /*-------------------------------125-------------------------------*/
  {
    const convertFloatToDecimal = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
    // Test
    const number = 1234567890.12345;
    console.log(convertFloatToDecimal(number));
  }
  
  /*-------------------------------126-------------------------------*/
  {
    const formatCurrency = (number, currencySymbol) => {
      return (
        currencySymbol + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    };
  
    // Test
    console.log(formatCurrency(123456.789, "$"));
  }
  
  /*-------------------------------127-------------------------------*/
  {
    const iterateCallbackNTimes = (callback, n) => {
      for (let i = 0; i < n; i++) {
        callback();
      }
    };
  
    // Test
    iterateCallbackNTimes(() => console.log("Hello"), 3);
  }
  
  /*-------------------------------128-------------------------------*/
  {
    const getRemovedElementsUntil = (arr, predicate) => {
      const removed = [];
      let index = 0;
      while (index < arr.length && !predicate(arr[index])) {
        removed.push(arr.splice(index, 1)[0]);
      }
      return removed;
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const isEven = (num) => num % 2 === 0;
    console.log(getRemovedElementsUntil(numbers, isEven));
    console.log(numbers);
  }
  
  /*-------------------------------129-------------------------------*/
  {
    const removeElementsUntil = (arr, predicateFn) => {
      while (!predicateFn(arr[arr.length - 1])) {
        arr.pop();
      }
      return arr;
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    console.log(removeElementsUntil(numbers, isEven));
  }
  
  /*-------------------------------130-------------------------------*/
  {
    const removeNElementsFromEnd = (arr, n) => {
      return arr.slice(0, -n);
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    console.log(removeNElementsFromEnd(numbers, 2));
  }
  
  /*-------------------------------131-------------------------------*/
  {
    const removeNElementsFromBeginning = (arr, n) => {
      return arr.slice(n);
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    console.log(removeNElementsFromBeginning(numbers, 2));
  }
  
  /*-------------------------------132-------------------------------*/
  {
    const getSymmetricDifferenceWithComparator = (arr1, arr2, comparatorFn) => {
      const symmetricDifference = [];
      arr1.forEach((item1) => {
        if (!arr2.some((item2) => comparatorFn(item1, item2))) {
          symmetricDifference.push(item1);
        }
      });
      arr2.forEach((item2) => {
        if (!arr1.some((item1) => comparatorFn(item1, item2))) {
          symmetricDifference.push(item2);
        }
      });
      return symmetricDifference;
    };
  
    // Test
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    const isEven = (num1, num2) => num1 % 2 === num2 % 2;
    console.log(getSymmetricDifferenceWithComparator(numbers1, numbers2, isEven));
  }
  
  /*-------------------------------133-------------------------------*/
  {
    const getSymmetricDifferenceWithFunction = (arr1, arr2, func) => {
      const symmetricDifference = [];
      arr1.forEach((item1) => {
        if (!arr2.some((item2) => func(item1) === func(item2))) {
          symmetricDifference.push(item1);
        }
      });
      arr2.forEach((item2) => {
        if (!arr1.some((item1) => func(item1) === func(item2))) {
          symmetricDifference.push(item2);
        }
      });
      return symmetricDifference;
    };
  
    // Test
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    const square = (num) => num * num;
    console.log(getSymmetricDifferenceWithFunction(numbers1, numbers2, square));
  }
  
  /*-------------------------------134-------------------------------*/
  {
    const getSymmetricDifference = (arr1, arr2) => {
      const set1 = new Set(arr1);
      const set2 = new Set(arr2);
      const difference = new Set(
        [...set1]
          .filter((x) => !set2.has(x))
          .concat([...set2].filter((x) => !set1.has(x)))
      );
      return Array.from(difference);
    };
  
    // Test
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    console.log(getSymmetricDifference(numbers1, numbers2));
  }
  
  /*-------------------------------135-------------------------------*/
  {
    const getSumOfPowers = (start, end, power) => {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += Math.pow(i, power);
      }
      return sum;
    };
  
    // Test
    console.log(getSumOfPowers(1, 3, 2));
  }
  
  /*-------------------------------136-------------------------------*/
  {
    const generatePermutations = (str) => {
      if (str.length <= 1) return [str];
      const permutations = [];
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const innerPermutations = generatePermutations(remainingChars);
        for (let perm of innerPermutations) {
          permutations.push(char + perm);
        }
      }
      return permutations;
    };
  
    // Test
    console.log(generatePermutations("abc"));
  }
  
  /*-------------------------------137-------------------------------*/
  {
    const stableSort = (arr, comparator) => {
      const indexedArr = arr.map((value, index) => [value, index]);
      indexedArr.sort((a, b) => {
        const result = comparator(a[0], b[0]);
        return result !== 0 ? result : a[1] - b[1];
      });
      return indexedArr.map((item) => item[0]);
    };
  
    // Test
    const arr = [{ value: 3 }, { value: 1 }, { value: 2 }];
    const sortedArr = stableSort(arr, (a, b) => a.value - b.value);
    console.log(sortedArr);
  }
  
  /*-------------------------------138-------------------------------*/
  {
    const mapToFunctionInputs = (fn) => {
      return (args) => fn(...args);
    };
  
    // Test
    const add = (a, b) => a + b;
    const mappedAdd = mapToFunctionInputs(add);
    console.log(mappedAdd([1, 2]));
  }
  
  /*-------------------------------139-------------------------------*/
  {
    const splitMultilineString = (str) => {
      return str.split(/\r?\n/);
    };
  
    // Test
    const multilineStr = `Line 1
    Line 2
    Line 3`;
    console.log(splitMultilineString(multilineStr));
  }
  
  /*-------------------------------140-------------------------------*/
  {
    const sortedLastIndexBy = (arr, n, fn) => {
      const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
      const val = fn(n);
      const index = arr
        .map(fn)
        .reverse()
        .findIndex((el) => (isDescending ? val <= el : val >= el));
      return index === -1 ? 0 : arr.length - index;
    };
  
    // Test
    console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x));
  }
  
  /*-------------------------------141-------------------------------*/
  {
    const findHighestIndex = (arr, val) => {
      let index = arr.findIndex((element) => element > val);
      return index === -1 ? arr.length : index;
    };
  
    // Test
    const arr = [10, 20, 30, 40, 50];
    const value = 35;
    console.log(findHighestIndex(arr, value));
  }
  
  /*-------------------------------142-------------------------------*/
  {
    const findLowestIndex = (arr, val) => {
      let index = arr.findIndex((element) => element >= val);
      return index === -1 ? arr.length : index;
    };
  
    // Test
    const arr = [10, 20, 30, 40, 50];
    const value = 35;
    console.log(findLowestIndex(arr, value));
  }
  
  /*-------------------------------143-------------------------------*/
  {
    const sortAlphabetically = (str) => str.split("").sort().join("");
  
    // Test
    const inputStr = "javascript";
    console.log(sortAlphabetically(inputStr));
  }
  
  /*-------------------------------144-------------------------------*/
  {
    const getCommonElements = (arr1, arr2) =>
      arr1.filter((element) => arr2.includes(element));
  
    // Test
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    console.log(getCommonElements(array1, array2));
  }
  
  /*-------------------------------145-------------------------------*/
  {
    const randomizeArray = (arr) => {
      return arr.sort(() => Math.random() - 0.5);
    };
  
    // Test
    const originalArray = [1, 2, 3, 4, 5];
    const randomizedArray = randomizeArray(originalArray);
    console.log(randomizedArray);
  }
  
  /*-------------------------------146-------------------------------*/
  {
    const shallowClone = (obj) => {
      return { ...obj };
    };
  
    // Test
    const originalObj = { name: "John", age: 30 };
    const clonedObj = shallowClone(originalObj);
    console.log(clonedObj);
  }
  
  /*-------------------------------147-------------------------------*/
  {
    const serializeCookie = (name, value) =>
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    // Test
    const cookieName = "username";
    const cookieValue = "john_doe";
    console.log(serializeCookie(cookieName, cookieValue));
  }
  
  /*-------------------------------148-------------------------------*/
  {
    const hashString = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
      }
      return Math.abs(hash);
    };
  
    // Test
    console.log(hashString("hello"));
  }
  
  /*-------------------------------149-------------------------------*/
  {
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
    // Test
    const arrayToPickFrom = [10, 20, 30, 40, 50];
    console.log(getRandomElement(arrayToPickFrom));
  }
  
  /*-------------------------------150-------------------------------*/
  {
    const runPromisesInSeries = (promises) => {
      return promises.reduce((promiseChain, currentPromise) => {
        return promiseChain.then((chainResults) =>
          currentPromise().then((currentResult) => [
            ...chainResults,
            currentResult,
          ])
        );
      }, Promise.resolve([]));
    };
  
    // Test
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    const promisesToRun = [
      () => delay(1000).then(() => "One"),
      () => delay(2000).then(() => "Two"),
      () => delay(3000).then(() => "Three"),
    ];
  
    runPromisesInSeries(promisesToRun).then((results) => {
      console.log(results);
    });
  }
  
  /*-------------------------------151-------------------------------*/
  {
    const runAsync = (fn) => {
      const worker = new Worker(
        URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
          type: "application/javascript; charset=utf-8",
        })
      );
      return new Promise((res, rej) => {
        worker.onmessage = ({ data }) => {
          res(data), worker.terminate();
        };
        worker.onerror = (err) => {
          rej(err), worker.terminate();
        };
      });
    };
  
    // Test
    const longRunningFunction = () => {
      let result = 0;
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 700; j++) {
          for (let k = 0; k < 300; k++) {
            result = result + i + j + k;
          }
        }
      }
      return result;
    };
  
    runAsync(longRunningFunction).then(console.log);
    runAsync(() => 10 ** 3).then(console.log);
    let outsideVariable = 50;
    runAsync(() => typeof outsideVariable).then(console.log);
  }
  
  /*-------------------------------152-------------------------------*/
  {
    const roundToDigits = (num, digits) => Number(num.toFixed(digits));
  
    // Test
    console.log(roundToDigits(3.14159, 2));
  }
  
  /*-------------------------------153-------------------------------*/
  {
    const reverseString = (str) => str.split("").reverse().join("");
  
    // Test
    console.log(reverseString("hello"));
  }
  
  /*-------------------------------154-------------------------------*/
  {
    const omitBy = (obj, fn) =>
      Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => !fn(value, key))
      );
  
    // Test
    const obj = { a: 1, b: 2, c: 3 };
    const newObj = omitBy(obj, (val) => val > 1);
    console.log(newObj);
  }
  
  /*-------------------------------155-------------------------------*/
  {
    const reject = (arr, predicate) => arr.filter((x) => !predicate(x));
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const newNumbers = reject(numbers, (x) => x % 2 === 0);
    console.log(newNumbers);
  }
  
  /*-------------------------------156-------------------------------*/
  {
    const reduceSuccessively = (arr, fn, initial) =>
      arr.reduce(
        (acc, val) => [
          ...acc,
          acc.length ? fn(acc.slice(-1)[0], val) : fn(initial, val),
        ],
        []
      );
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const sumArray = reduceSuccessively(numbers, (acc, val) => acc + val, 0);
    console.log(sumArray);
  }
  
  /*-------------------------------157-------------------------------*/
  {
    const redirectToURL = (url) => (window.location.href = url);
  
    // Test
    //redirectToURL("https://www.example.com");
  }
  
  /*-------------------------------158-------------------------------*/
  {
    const rearg =
      (fn, indexes) =>
      (...args) =>
        fn(...indexes.map((index) => args[index]));
  
    // Test
    const rearrangedFn = rearg((a, b, c) => [a, b, c], [2, 0, 1]);
    console.log(rearrangedFn(1, 2, 3));
  }
  
  /*-------------------------------159-------------------------------*/
  {
    const getLinesFromFile = async (filePath) => {
      const response = await fetch(filePath);
      const text = await response.text();
      return text.split("\n");
    };
  
    // Test
    //getLinesFromFile("path/to/file.txt").then((lines) => console.log(lines));
  }
  
  /*-------------------------------160-------------------------------*/
  {
    const filterMutate = (arr, fn) => {
      const indexesToRemove = [];
      arr.forEach((item, index) => {
        if (fn(item, index)) {
          indexesToRemove.push(index);
        }
      });
      indexesToRemove.reverse().forEach((index) => arr.splice(index, 1));
      return arr;
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = filterMutate(numbers, (x) => x % 2 === 0);
    console.log(filteredNumbers);
  }
  
  /*-------------------------------161-------------------------------*/
  {
    const filterOutAndGetRemoved = (arr, predicate) => {
      const removed = [];
      const filtered = arr.filter((item, index) => {
        if (predicate(item)) {
          removed.push(item);
          return false;
        }
        return true;
      });
      return removed;
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    console.log(filterOutAndGetRemoved(numbers, (x) => x % 2 === 0));
  }
  
  /*-------------------------------162-------------------------------*/
  {
    const asyncToPromise =
      (fn) =>
      (...args) =>
        new Promise((resolve, reject) => {
          fn(...args, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
  
    // Test
    const asyncFn = (x, callback) => {
      setTimeout(() => {
        callback(null, x * 2);
      }, 1000);
    };
  
    const promiseFn = asyncToPromise(asyncFn);
    promiseFn(5).then((result) => console.log(result));
  }
  
  /*-------------------------------163-------------------------------*/
  {
    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
  
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
      );
    };
  
    // Test
    console.log(formatBytes(123456789));
  }
  
  /*-------------------------------164-------------------------------*/
  {
    const pluralize = (word, number) => (number === 1 ? word : word + "s");
  
    // Test
    console.log(pluralize("apple", 1));
    console.log(pluralize("apple", 3));
  }
  
  /*-------------------------------165-------------------------------*/
  {
    const compose =
      (...fns) =>
      (x) =>
        fns.reduce((acc, fn) => fn(acc), x);
  
    // Test
    const add = (x) => (y) => x + y;
    const multiply = (x) => (y) => x * y;
  
    const addThenMultiply = compose(multiply(3), add(2));
    console.log(addThenMultiply(5));
  }
  
  /*-------------------------------166-------------------------------*/
  {
    const composeAsync =
      (...fns) =>
      (arg) =>
        fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
  
    // Test
    const sum = composeAsync(
      (x) => x + 1,
      (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
      (x) => x + 3,
      async (x) => (await x) + 4
    );
    (async () => {
      console.log(await sum(5));
    })();
  }
  
  /*-------------------------------167-------------------------------*/
  {
    const countNumbersLessThanOrEqualTo = (arr, num) =>
      (arr.filter((item) => item <= num).length / arr.length) * 100;
  
    // Test
    const numbers = [10, 20, 30, 40, 50];
    console.log(countNumbersLessThanOrEqualTo(numbers, 30));
  }
  
  /*-------------------------------168-------------------------------*/
  {
    const groupBy = (array, predicate) => {
      return array.reduce(
        (acc, value) => {
          const group = predicate(value) ? 0 : 1;
          acc[group].push(value);
          return acc;
        },
        [[], []]
      );
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    console.log(groupBy(numbers, isEven));
  }
  
  /*-------------------------------169-------------------------------*/
  {
    const partialRight =
      (fn, ...partials) =>
      (...args) =>
        fn(...args, ...partials);
  
    // Test
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetMorning = partialRight(greet, "Good morning");
    console.log(greetMorning("Malak"));
  }
  
  /*-------------------------------170-------------------------------*/
  {
    const partialLeft =
      (fn, ...partials) =>
      (...args) =>
        fn(...partials, ...args);
  
    // Test
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetEnthusiastically = partialLeft(greet, "Hello");
    console.log(greetEnthusiastically("Malak"));
  }
  
  /*-------------------------------171-------------------------------*/
  {
    const parseCookie = (cookieHeader) => {
      return cookieHeader
        .split(";")
        .map((pair) => pair.trim().split("="))
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    };
  
    // Test
    const cookieHeader = "name=John; age=30; city=New York";
    console.log(parseCookie(cookieHeader));
  }
  
  /*-------------------------------172-------------------------------*/
  {
    const transformArguments =
      (fn, transform) =>
      (...args) =>
        fn(...args.map(transform));
  
    // Test
    const add = (a, b) => a + b;
    const addTriple = transformArguments(add, (x) => 3 * x);
    console.log(addTriple(2, 4));
  }
  /*-------------------------------173-------------------------------*/
  {
    const getNthElement = (arr, n) => (n >= 0 ? arr[n] : arr[arr.length + n]);
  
    // Test
    const array = [1, 2, 3, 4, 5];
    console.log(getNthElement(array, 2));
    console.log(getNthElement(array, -1));
  }
  
  /*-------------------------------174-------------------------------*/
  {
    const nodeListToArray = (nodeList) => Array.from(nodeList);
  
    // Test
    const nodeList = document.querySelectorAll("h1");
    console.log(nodeListToArray(nodeList));
  }
  
  /*-------------------------------175-------------------------------*/
  {
    const getFastestFunctionIndex = (functionsArray) => {
      let times = functionsArray.map((func) => {
        let start = performance.now();
        func();
        let end = performance.now();
        return end - start;
      });
  
      return times.indexOf(Math.min(...times));
    };
  
    // Test
    let functionsArray = [
      () => {
        for (let i = 0; i < 1000000; i++) {}
      },
      () => {
        for (let i = 0; i < 5000000; i++) {}
      },
      () => {
        for (let i = 0; i < 3000000; i++) {}
      },
    ];
  
    console.log(getFastestFunctionIndex(functionsArray));
  }
  
  /*-------------------------------176-------------------------------*/
  {
    const getNMinimumElements = (arr, n) => {
      if (n >= arr.length) {
        return arr.sort((a, b) => a - b);
      } else {
        return arr
          .slice()
          .sort((a, b) => a - b)
          .slice(0, n);
      }
    };
  
    // Test
    let array = [5, 2, 8, 1, 9];
    console.log(getNMinimumElements(array, 2));
  }
  
  /*-------------------------------177-------------------------------*/
  {
    const getMinValueAfterMapping = (arr, mapFunc) => {
      let mappedArray = arr.map(mapFunc);
      return Math.min(...mappedArray);
    };
  
    // Test
    let numbers = [1, 2, 3, 4];
    let mapFunction = (x) => x * x;
    console.log(getMinValueAfterMapping(numbers, mapFunction));
  }
  
  /*-------------------------------178-------------------------------*/
  {
    const combineObjects = (...objects) => Object.assign({}, ...objects);
  
    // Test
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3 };
    console.log(combineObjects(obj1, obj2));
  }
  
  /*-------------------------------179-------------------------------*/
  {
    const compareObjects = (obj1, obj2, comparator) => {
      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);
  
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every((key) => comparator(obj1[key], obj2[key]));
    };
  
    // Test
    let object1 = { a: 1, b: 2 };
    let object2 = { a: 1, b: 3 };
    console.log(compareObjects(object1, object2, (a, b) => a === b));
  }
  
  /*-------------------------------180-------------------------------*/
  {
    const keysToLowerCase = (obj) =>
      Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
      }, {});
  
    // Test
    let originalObj = { Name: "John", Age: 30 };
    let newObj = keysToLowerCase(originalObj);
    console.log(newObj);
  }
  
  /*-------------------------------181-------------------------------*/
  {
    const getLastElement = (arr) => arr[arr.length - 1];
  
    // Test
    let array = [1, 2, 3, 4, 5];
    console.log(getLastElement(array));
  }
  
  /*-------------------------------182-------------------------------*/
  {
    const joinArrayElements = (arr, separator, endSeparator) =>
      arr.join(separator) + endSeparator;
  
    // Test
    let array = ["Hello", "World"];
    console.log(joinArrayElements(array, " ", "!"));
  }
  
  /*-------------------------------183-------------------------------*/
  {
    const isValidJSON = (str) => {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    };
  
    // Test
    let jsonString = '{"name": "John", "age": 30}';
    console.log(isValidJSON(jsonString));
  }
  
  /*-------------------------------184-------------------------------*/
  {
    const isUpperCase = (str) => str === str.toUpperCase();
  
    // Test
    let uppercaseStr = "HELLO";
    console.log(isUpperCase(uppercaseStr));
  }
  
  /*-------------------------------185-------------------------------*/
  
  {
    const isUndefined = (value) => {
      return typeof value === "undefined";
    };
  
    // Test
    let x;
    console.log(isUndefined(x));
  }
  
  /*-------------------------------186-------------------------------*/
  {
    const isSymbol = (value) => typeof value === "symbol";
  
    // Test
    console.log(isSymbol(Symbol()));
  }
  
  /*-------------------------------187-------------------------------*/
  {
    const isString = (arg) => typeof arg === "string";
  
    // Test
    console.log(isString("hello"));
  }
  
  /*-------------------------------188-------------------------------*/
  {
    const checkSortOrder = (arr) => {
      let ascSorted = arr.slice().sort((a, b) => a - b);
      let descSorted = arr.slice().sort((a, b) => b - a);
  
      if (JSON.stringify(arr) === JSON.stringify(ascSorted)) {
        return 1;
      } else if (JSON.stringify(arr) === JSON.stringify(descSorted)) {
        return -1;
      } else {
        return 0;
      }
    };
  
    // Test
    console.log(checkSortOrder([1, 2, 3]));
    console.log(checkSortOrder([3, 2, 1]));
    console.log(checkSortOrder([2, 1, 3]));
  }
  
  /*-------------------------------189-------------------------------*/
  {
    const isPromiseLike = (obj) => obj && typeof obj.then === "function";
  
    // Test
    console.log(isPromiseLike({ then: function () {} }));
  }
  
  /*-------------------------------190-------------------------------*/
  {
    const isPrimitive = (value) => value !== Object(value);
  
    // Test
    console.log(isPrimitive("hello"));
    console.log(isPrimitive({}));
  }
  
  /*-------------------------------191-------------------------------*/
  {
    const isPrime = (num) => {
      const boundary = Math.floor(Math.sqrt(num));
      for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
      return num >= 2;
    };
  
    // Test
    console.log(isPrime(11));
  }
  
  /*-------------------------------192-------------------------------*/
  {
    const isObjectFromObjectConstructor = (value) =>
      value instanceof Object && value.constructor === Object;
  
    // Test
    console.log(isObjectFromObjectConstructor(new Object()));
  }
  
  /*-------------------------------193-------------------------------*/
  {
    const isObjectLike = (value) => value !== null && typeof value === "object";
  
    // Test
    console.log(isObjectLike({}));
  }
  
  /*-------------------------------194-------------------------------*/
  {
    const isObject = (value) => value !== null && typeof value === "object";
  
    // Test
    console.log(isObject({}));
  }
  /*-------------------------------195-------------------------------*/
  {
    const isNumber = (value) => typeof value === "number" && !isNaN(value);
  
    // Test
    console.log(isNumber(42));
  }
  
  /*-------------------------------196-------------------------------*/
  {
    const isNull = (value) => value === null;
  
    // Test
    console.log(isNull(null));
  }
  
  /*-------------------------------197-------------------------------*/
  {
    const isLowerCase = (str) => str === str.toLowerCase();
  
    // Test
    console.log(isLowerCase("hello"));
  }
  
  /*-------------------------------198-------------------------------*/
  {
    const isFunction = (value) => typeof value === "function";
  
    // Test
    console.log(isFunction(() => {}));
  }
  
  /*-------------------------------199-------------------------------*/
  {
    const isEven = (number) => number % 2 === 0;
  
    // Test
    console.log(isEven(10));
  }
  
  /*-------------------------------200-------------------------------*/
  {
    const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;
  
    // Test
    console.log(isEmpty({}));
    console.log(isEmpty([]));
    console.log(isEmpty(new Map()));
    console.log(isEmpty(new Set()));
    console.log(isEmpty({ key: "value" }));
  }
  
  /*-------------------------------201-------------------------------*/
  {
    const isDivisible = (num, divisor) => num % divisor === 0;
  
    // Test
    console.log(isDivisible(12, 3));
  }
  
  /*-------------------------------202-------------------------------*/
  {
    const checkEvenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
  
    // Test
    console.log(checkEvenOrOdd(7));
  }
  
  /*-------------------------------203-------------------------------*/
  {
    const isBrowserEnvironment = () =>
      typeof window !== "undefined" && typeof document !== "undefined";
  
    // Test
    console.log(isBrowserEnvironment());
  }
  
  /*-------------------------------204-------------------------------*/
  {
    const isNativeBoolean = (value) => typeof value === "boolean";
  
    // Test
    console.log(isNativeBoolean(true));
  }
  
  /*-------------------------------205-------------------------------*/
  {
    const isArray = (value) => Array.isArray(value);
  
    // Test
    console.log(isArray([1, 2, 3]));
  }
  
  /*-------------------------------206-------------------------------*/
  {
    const isAnagram = (str1, str2) => {
      const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
      return cleanString(str1) === cleanString(str2);
    };
  
    // Test
    console.log(isAnagram("s ilent", "Silent"));
  }
  
  /*-------------------------------207-------------------------------*/
  {
    const isAbsoluteURL = (url) => {
      const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
      return regex.test(url);
    };
  
    // Test
    const urlString = "https://www.example.com/path/to/resource";
    console.log(isAbsoluteURL(urlString));
  }
  
  /*-------------------------------208-------------------------------*/
  {
    const checkType = (value, type) => typeof value === type;
  
    // Test
    console.log(checkType(42, "number"));
  }
  
  /*-------------------------------209-------------------------------*/
  {
    const getCommonElements = (arr1, arr2, comparator) => {
      return arr1.filter((item1) =>
        arr2.some((item2) => comparator(item1, item2))
      );
    };
  
    // Test
    const commonElements = getCommonElements(
      [1, 2, 3],
      [3, 4, 5],
      (a, b) => a === b
    );
    console.log(commonElements);
  }
  
  /*-------------------------------210-------------------------------*/
  {
    const applyFunction = (arr, func) => arr.map(func);
    const getCommonElements = (arr1, arr2) =>
      arr1.filter((value) => arr2.includes(value));
  
    // Test
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
  
    const modifiedArray1 = applyFunction(array1, (element) => element * 2);
    const modifiedArray2 = applyFunction(array2, (element) => element + 1);
  
    const commonElements = getCommonElements(modifiedArray1, modifiedArray2);
  
    console.log(commonElements);
  }
  
  /*-------------------------------211-------------------------------*/
  {
    function getCommonElements(arr1, arr2) {
      return arr1.filter((value) => arr2.includes(value));
    }
  
    // Test
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const commonElements = getCommonElements(array1, array2);
    console.log(commonElements);
  }
  
  /*-------------------------------212-------------------------------*/
  {
    const initializeNDArray = (val, ...args) =>
      args.length === 0
        ? val
        : Array.from({ length: args[0] }).map(() =>
            initializeNDArray(val, ...args.slice(1))
          );
  
    // Test
    console.log(initializeNDArray(1, 3));
  }
  
  /*-------------------------------213-------------------------------*/
  {
    const initializeArray = (length, value) => {
      return new Array(length).fill(value);
    };
  
    // Test
    const initializedArray = initializeArray(5, 2);
    console.log(initializedArray);
  }
  
  /*-------------------------------214-------------------------------*/
  {
    const initializeArrayWithRange = (end, start = 0, step = 1) =>
      Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
        (v, i, arr) => (arr.length - i - 1) * step + start
      );
  
    // Test
    const initializedArray = initializeArrayWithRange(10, 0, 2);
    console.log(initializedArray);
  }
  
  /*-------------------------------215-------------------------------*/
  {
    const initial = (arr) => arr.slice(0, -1);
  
    // Test
    console.log(initial([1, 2, 3]));
  }
  
  /*-------------------------------216-------------------------------*/
  {
    const indexOfAll = (arr, val) =>
      arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
  
    // Test
    console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
  }
  
  /*-------------------------------217-------------------------------*/
  {
    const isNumberInRange = (number, start, end) => {
      return number >= start && number <= end;
    };
  
    // Test
    const isInRange = isNumberInRange(5, 1, 10);
    console.log(isInRange);
  }
  
  /*-------------------------------218-------------------------------*/
  {
    const hz = (fn, iterations = 100) => {
      const before = performance.now();
      for (let i = 0; i < iterations; i++) fn();
      return (1000 * iterations) / (performance.now() - before);
    };
    const numbers = Array(10000)
      .fill()
      .map((_, i) => i);
  
    const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
    const sumForLoop = () => {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) sum += numbers[i];
      return sum;
    };
  
    // Test
    console.log(Math.round(hz(sumReduce)));
    console.log(Math.round(hz(sumForLoop)));
  }
  
  /*-------------------------------219-------------------------------*/
  {
    const hammingDistance = (num1, num2) =>
      ((num1 ^ num2).toString(2).match(/1/g) || "").length;
  
    // Test
    console.log(hammingDistance(5, 3));
  }
  
  /*-------------------------------220-------------------------------*/
  {
    const getNativeType = (value) => {
      return value === undefined
        ? "undefined"
        : value === null
        ? "null"
        : typeof value === "object"
        ? value.constructor.name.toLowerCase()
        : typeof value;
    };
  
    // Test
    console.log(getNativeType(5));
    console.log(getNativeType(null));
  }
  
  /*-------------------------------221-------------------------------*/
  {
    const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);
  
    // Test
    console.log(getColonTimeFromDate(new Date()));
  }
  /*-------------------------------222-------------------------------*/
  {
    const geometricProgression = (end, start = 1, step = 2) =>
      Array.from({
        length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
      }).map((v, i) => start * step ** i);
  
    // Test
    console.log(geometricProgression(256, 1, 4));
  }
  
  /*-------------------------------223-------------------------------*/
  {
    const gcd = (...arr) => {
      const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
      return [...arr].reduce((a, b) => _gcd(a, b));
    };
  
    // Test
    console.log(gcd(8, 36));
  }
  
  /*-------------------------------224-------------------------------*/
  {
    const removeHtmlTags = (inputString) => {
      return inputString.replace(/<[^>]*>/g, "");
    };
  
    // Test
    const stringWithTags =
      '<p>This is <b>bold</b> text with <a href="#">links</a>.</p>';
    const stringWithoutTags = removeHtmlTags(stringWithTags);
    console.log(stringWithoutTags);
  }
  
  /*-------------------------------225-------------------------------*/
  {
    const calculateStandardDeviation = (numbers) => {
      const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
      const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
      const averageSquaredDiff =
        squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;
      const standardDeviation = Math.sqrt(averageSquaredDiff);
  
      return standardDeviation;
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5];
    const stdDeviation = calculateStandardDeviation(numbers);
    console.log(stdDeviation);
  }
  
  /*-------------------------------226-------------------------------*/
  {
    const getRandomElements = (array, n) => {
      const result = [];
      const arrayCopy = [...array];
  
      for (let i = 0; i < n && arrayCopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        const randomElement = arrayCopy.splice(randomIndex, 1)[0];
        result.push(randomElement);
      }
      return result;
    };
  
    // Test
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomElements = getRandomElements(originalArray, 5);
    console.log(randomElements);
  }
  
  /*-------------------------------227-------------------------------*/
  {
    const removeElements = (arr, callback) => {
      return arr.filter(callback);
    };
  
    // Test
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filteredNumbers = removeElements(numbers, (num) => num % 2 === 0);
    console.log(filteredNumbers);
  }
  
  /*-------------------------------228-------------------------------*/
  {
    // Test
    function sampleFunction() {}
  
    console.log(sampleFunction.name);
  }
  
  /*-------------------------------229-------------------------------*/
  {
    const convertCamelCase = (inputString) => {
      const wordsArray = inputString.split(/(?=[A-Z])/);
      const convertedString = wordsArray.join(" ").toLowerCase();
      return convertedString;
    };
  
    // Test
    const camelCaseString = "camelCaseStringExample";
    const convertedString = convertCamelCase(camelCaseString);
    console.log(convertedString);
  }
  
  /*-------------------------------230-------------------------------*/
  {
    const formatMilliseconds = (milliseconds) => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
  
      const remainingSeconds = totalSeconds % 60;
      const remainingMinutes = totalMinutes % 60;
      const remainingHours = totalHours % 24;
      const remainingMilliseconds = milliseconds % 1000;
  
      return {
        days: totalDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
        milliseconds: remainingMilliseconds,
      };
    };
  
    // Test
    const milliseconds = 123456789;
    const formattedTime = formatMilliseconds(milliseconds);
    console.log(formattedTime);
  }
  
  /*-------------------------------231-------------------------------*/
  {
    const iterateObjectReverse = (obj, callback) => {
      const keys = Object.keys(obj);
      for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        callback(key, obj[key]);
      }
    };
  
    // Test
    const myObject = {
      name: "John",
      age: 30,
      city: "New York",
    };
    const printKeyValue = (key, value) => {
      console.log(`${key}: ${value}`);
    };
    iterateObjectReverse(myObject, printKeyValue);
  }
  
  /*-------------------------------232-------------------------------*/
  {
    const makeFirstArgLast = (func) => {
      return (...args) => {
        const [firstArg, ...restArgs] = args;
        return func(...restArgs, firstArg);
      };
    };
  
    // Test
    const addThreeNumbers = (num1, num2, num3) => {
      return num1 + num2 + num3;
    };
    const newFunction = makeFirstArgLast(addThreeNumbers);
    console.log(newFunction(1, 2, 3));
  }
  
  /*-------------------------------233-------------------------------*/
  {
    const flattenObject = (obj, parentKey = "", result = {}) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const newKey = parentKey ? `${parentKey}.${key}` : key;
          if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObject(obj[key], newKey, result);
          } else {
            result[newKey] = obj[key];
          }
        }
      }
      return result;
    };
  
    // Test
    const obj = { a: { b: 1 }, c: { d: { e: 5, f: 6 } }, g: 7 };
    const flattenedObj = flattenObject(obj);
    console.log(flattenedObj);
  }
  
  /*-------------------------------234-------------------------------*/
  {
    const flatten = (array, depth = 1) => {
      return array.flat(depth);
    };
  
    // Test
    const array = [1, [2, 3], [4, [5, 6]], 7];
    console.log(flatten(array, 2));
  }
  
  /*-------------------------------235-------------------------------*/
  {
    const findKey = (obj, func) =>
      Object.keys(obj).findLast((key) => func(obj[key]));
  
    // Test
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const key = findKey(obj, (value) => value % 2 === 0);
    console.log(key);
  }
  
  /*-------------------------------236-------------------------------*/
  {
    const findKey = (obj, func) => Object.keys(obj).find((key) => func(obj[key]));
  
    // Test
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const key = findKey(obj, (value) => value % 2 === 0);
    console.log(key);
  }
  
  /*-------------------------------237-------------------------------*/
  {
    const fibonacciSequence = (n) => {
      let sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      return n === 1 ? [0] : sequence.slice(0, n);
    };
  
    // Test
    console.log(fibonacciSequence(7));
  }
  
  /*-------------------------------238-------------------------------*/
  {
    const factorial = (number) => {
      return number < 0
        ? console.log("Negative numbers are not allowed!")
        : number <= 1
        ? 1
        : number * factorial(number - 1);
    };
  
    // Test
    console.log(factorial(5));
  }
  
  /*-------------------------------239-------------------------------*/
  {
    const escapeRegExp = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
  
    // Test
    const inputString = "Escape this string. ^[.*+?^${}()|[]\\]";
    const escapedString = escapeRegExp(inputString);
    console.log(escapedString);
  }
  
  /*-------------------------------240-------------------------------*/
  {
    const hasChild = (parentEl, childEl) => {
      parent = document.querySelector(parentEl);
      child = document.querySelector(childEl);
      return parent !== child && parent.contains(child) ? true : false;
    };
  
    // Test
    console.log(hasChild("body", "h1"));
  }
  
  /*-------------------------------241-------------------------------*/
  {
    const dropFromLeft = (array, func) => {
      while (array.length > 0 && !func(array[0])) {
        array.shift();
      }
      return array;
    };
  
    // Test
    console.log(dropFromLeft([7, 5, 3, 2, 1], (n) => n % 2 === 0));
  }
  
  /*-------------------------------242-------------------------------*/
  {
    const dropFromRight = (array, func) => {
      while (array.length > 0 && !func(array[array.length - 1])) {
        array.pop();
      }
      return array;
    };
  
    // Test
    console.log(dropFromRight([1, 2, 3, 5, 7], (n) => n % 2 === 0));
  }
  
  /*-------------------------------243-------------------------------*/
  {
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));
    };
  
    // Test
    console.log(calculateDistance(1, 2, 4, 8));
  }
  
  /*-------------------------------244-------------------------------*/
  {
    const arrayDifference = (arrayOne, arrayTwo) => {
      const output = [];
      output.push(...arrayOne.filter((element) => !arrayTwo.includes(element)));
      output.push(...arrayTwo.filter((element) => !arrayOne.includes(element)));
      return output;
    };
  
    // Test
    const arrayA = [1, 2, 3, 4, 5];
    const arrayB = [3, 4, 5, 6, 7];
    const difference = arrayDifference(arrayA, arrayB);
    console.log(difference);
  }
  
  /*-------------------------------245-------------------------------*/
  {
    const InvokeAfterTime = (func, period) => {
      return setTimeout(func, period);
    };
  
    // Test
    console.log(InvokeAfterTime(console.log("Hello World"), 3000));
  }
  
  /*-------------------------------246-------------------------------*/
  {
    const degreeToRadian = (angle) => {
      return (angle * Math.PI) / 180.0;
    };
  
    // Test
    console.log(degreeToRadian(90.0));
  }
  
  /*-------------------------------247-------------------------------*/
  {
    const assignDefaultValues = (obj, defaults) => {
      Object.keys(defaults).forEach((key) => {
        if (obj[key] === undefined) {
          obj[key] = defaults[key];
        }
      });
      return obj;
    };
  
    // Test
    const normalSettings = {
      a: 1,
      b: undefined,
    };
  
    const defaultSettings = {
      a: 2,
      b: true,
      c: false,
    };
  
    const updatedSettings = assignDefaultValues(normalSettings, defaultSettings);
    console.log(updatedSettings);
  }
  
  /*-------------------------------248-------------------------------*/
  {
    const deepFlatten = (array) => {
      return array.flat(Infinity);
    };
  
    // Test
    const array = [1, [2, 3], [4, [5, 6]], 7];
    console.log(deepFlatten(array));
  }
  
  /*-------------------------------249-------------------------------*/
  {
    // Test
    const currentUrl = window.location.href;
    console.log(currentUrl);
  }
  
  /*-------------------------------250-------------------------------*/
  {
    function createElement(string) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = string;
      return tempDiv.firstChild;
    }
  
    // Test
    const element = createElement("<span>Simple Example</span>");
    console.log(element);
  }
  
  /*-------------------------------251-------------------------------*/
  {
    // const fs = require("fs");
    // const JSONToFile = (obj, filename) =>
    //   fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
    // Test
    // JSONToFile({ test: "is passed" }, "testJsonFile");
  }
  
  /*-------------------------------252-------------------------------*/
  {
    const RGBToHex = (r, g, b) =>
      ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
  
    // Test
    const red = 255;
    const green = 128;
    const blue = 0;
    console.log(RGBToHex(red, green, blue));
  }
  
  /*-------------------------------253-------------------------------*/
  {
    const UUIDGeneratorBrowser = () =>
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
  
    // Test
    console.log(UUIDGeneratorBrowser());
  }
  
  /*-------------------------------254-------------------------------*/
  {
    // const crypto = require("crypto");
    // const UUIDGeneratorNode = () =>
    //   ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    //     (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
    //   );
    // Test
    // console.log(UUIDGeneratorNode());
  }
  
  /*-------------------------------255-------------------------------*/
  {
    const checkAny = (array, check) => {
      return array.some(check);
    };
  
    // Test
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log(checkAny(array, even));
  }
  
  /*-------------------------------256-------------------------------*/
  {
    const equals = (numOne, numTwo, limit = 0.0001) => {
      return Math.abs(numOne - numTwo) < limit;
    };
  
    // Test
    console.log(equals(4.9999, 5));
  }
  
  /*-------------------------------257-------------------------------*/
  {
    const CSV = (array) => {
      array.join(",");
    };
  
    // Test
    const elements = ["Fire", "Air", "Water"];
    console.log(elements.join());
  }
  
  /*-------------------------------258-------------------------------*/
  {
    const processArguments = (...args) => {
      const n = 3;
      const processedArgs = args.slice(0, n);
  
      console.log(processedArgs);
    };
  
    // Test
    processArguments(1, 2, 3, 4, 5);
  }
  
  /*-------------------------------259-------------------------------*/
  {
    // Test
    const str = "SGVsbG8=";
    console.log(atob(str));
  }
  
  /*-------------------------------260-------------------------------*/
  {
    const factorial = (n) => {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    };
  
    const binomialCoefficient = (n, k) => {
      if (k < 0 || k > n) {
        return 0;
      } else {
        return factorial(n) / (factorial(k) * factorial(n - k));
      }
    };
  
    // Test
    const n = 5;
    const k = 2;
    console.log(binomialCoefficient(n, k));
  }
  
  /*-------------------------------261-------------------------------*/
  {
    function isBottomVisible() {
      const documentHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return scrollPosition + windowHeight >= documentHeight;
    }
  
    // Test
    window.addEventListener("scroll", function () {
      if (isBottomVisible()) {
        console.log("Bottom of the page is visible");
      } else {
        console.log("Bottom of the page is not visible");
      }
    });
  }
  
  /*-------------------------------262-------------------------------*/
  {
    // Test
    const str = "Hello";
    console.log(btoa(str));
  }
  
  /*-------------------------------263-------------------------------*/
  {
    const stringCapitalize = (str) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    };
  
    // Test
    const string = "hello";
    console.log(stringCapitalize(string));
  }
  
  /*-------------------------------264-------------------------------*/
  {
    const stringCapitalizeEach = (str) => {
      return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
    };
  
    // Test
    const string = "information technology institute";
    console.log(stringCapitalizeEach(string));
  }
  //Note: This could work for 263 too
  
  /*-------------------------------265-------------------------------*/
  {
    const arrayChunk = (array, size) => {
      return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
      );
    };
  
    // Test
    const array = [1, 2, 3, 4, 5];
    console.log(arrayChunk(array, 3));
  }
  
  /*-------------------------------266-------------------------------*/
  {
    const clamp = (number, a, b) => {
      return Math.max(Math.min(number, Math.max(a, b)), Math.min(a, b));
    };
  
    // Test
    const number = 8;
    const a = 3;
    const b = 10;
    console.log(clamp(number, a, b));
  }
  
  /*-------------------------------267-------------------------------*/
  {
    const midPoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
  
    // Test
    console.log(midPoint([2, 2], [3, 3]));
  }
  
  /*-------------------------------268-------------------------------*/
  {
    const printArrayWithIndex = (array) => {
      for (let [index, item] of array.entries()) {
        console.log(`${index}: ${item}`);
      }
    };
  
    // Test
    const array = ["Red", "Green", "Black", "White"];
    printArrayWithIndex(array);
  }
  






