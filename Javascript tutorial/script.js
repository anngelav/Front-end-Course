// JavaScript source code

//creating array and printing all elements on the page
let cars = ["bmw", "volvo", "honda"];
document.getElementById("demo").innerHTML = cars;

//printing element by number
let bmw = cars[0];
document.getElementById("demo").innerHTML = bmw;

//printing length of the array
let len = cars.length;
document.getElementById("demo").innerHTML = len;

//printing last element of array
let last = cars[cars.length - 1];
document.getElementById("demo").innerHTML = last;

//printing element and index in the console
cars.forEach((item, index, array) => { console.log(item, index); });

//toString method
document.getElementById("demo").innerHTML = cars.toString();

//removing last element of the array and printing it on the page
let last1 = cars.pop();
document.getElementById("demo").innerHTML = last1;

//printing last element of array in the console
let last2 = cars[cars.length - 1];
console.log(last2);

//add a new element to the end of the array
cars.push("audi");
document.getElementById("demo").innerHTML = cars;

//remove the first element from an array
cars.shift();
document.getElementById("demo").innerHTML = cars;

//add an element at the beginning of an array
cars.shift("hyundai");
document.getElementById("demo").innerHTML = cars;

//create a new array by merging existing arrays
let bikes = ["yamaha", "suzuki", "royal enfield"];
let vehicles = cars.concat(bikes);
document.getElementById("demo").innerHTML = vehicles;

//sort an array in ascending order
vehicles.sort();
document.getElementById("demo").innerHTML = vehicles;

//reverse elements of an array in descending order
vehicles.reverse();
document.getElementById("demo").innerHTML = vehicles;

//the map() method creates a new array and performs a function on each array element
let num1 = [2, 3, 4, 5, 6, 7];
let num2 = num1.map(multiply);
function multiply(value) {
    return value * 2;
}
document.getElementById("demo").innerHTML = num2;

//the filter() method takes each element in an array and it applies a conditional statement against it
let num3 = num1.filter(comp);
function comp(value){
    return value > 4;
}
document.getElementById("demo").innerHTML = num3;

//the reduce() method reduces an array of values down to just one value using a function
let num4 = num1.reduce(sum);
function sum(total, value) {
    return total + value;
}
document.getElementById("demo").innerHTML = num4;