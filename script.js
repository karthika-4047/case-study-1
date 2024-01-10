//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

let arr1=[23,32,36,45,48,59,61,78]
console.log(arr1);
let num=arr1[0]
console.log("first number is: "+num);
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "not a prime number";
      }
    }
    return "number is prime";
  }
  let prime=isPrime(num)
  console.log(prime);

  //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

  for (let x = 0; x <= 15; x++) {
    console.log(x);
    if (x%2==0) {
      console.log('even');  }
    else {
      console.log('odd');
    }
  }

  //Write a JavaScript program to find the sum of squares of the elements of an array.

  function sumsq(arr2){
    var sum=0;
    for (let i = 0; i < arr2.length; i++) {
        sum+=arr2[i]**2;
        
    }
    return sum
}
var arr2=[1,2,3,4];
var result=sumsq(arr2);
console.log('the sum of squares is '+ result);

//Write a JavaScript program to find the most frequent item of an array


const arr3 = [1,5,2,4,3,2,1,6,8,2,2,7,4,2,9,2,1,2];

obj = {}; 
let el, 
  max = 0; 
for (let i = 0; i < arr3.length; i++) { 
  if (!obj[arr3[i]]) obj[arr3[i]] = 1; 
  else obj[arr3[i]]++; 
} 

for (const i in obj) { 
  if (max < obj[i]) { 
      max = obj[i]; 
      el = i; 
  } 
} 

console.log("The most occured element is: " + el);





