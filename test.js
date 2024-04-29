// const email =  "lLpXw@example.com";
// console.log(email.trim());
// console.log(email.length);
// console.log(email.indexOf("@"));
// console.log(email.lastIndexOf("o"));

// let domain = email.slice(-8,10);
// console.log(domain);

// const password = "password";
// const phoneNumber = "123456789";

// console.table([ email, password, phoneNumber]);

// let user = "88abc"

// console.log(typeof user)

// let user2 = Number(user)
// console.log(typeof user2)
// console.log(user2)

// let user = 55
// let user2 = -user
// console.log( user2)

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

// let url = "https://www.google.com"
// console.log(url.replace("https://", "parth://"))
// console.log(url.includes("google.com"))
// console.log(url.split("/"))

// let number = new Number(123)
// console.log(number)

// console.log(number.toFixed(1)) // 123.0
// console.log(number.toPrecision(3)) // 123

// let hundred = 1000000;
// console.log(hundred.toLocaleString())// 1,000,000

// Math
// console.log(Math.abs(-10)) // 10
// console.log(Math.round(4.4)) // 4
// console.log(Math.ceil(4.4)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.floor(Math.random()*100)+1) // 1 to 100 + 1

// max and min
// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random()*(max-min+1))+min) // 10 to 20 + 10

// const course = {
//     name: "Javascript",
//     price: 100,
//     discount: 0.1
// }

// const {name: courseName} = course

// console.log(courseName)

// const [,,animal] = ["dog", "cat", "parth"]
// console.log(animal)

// const [d,c,animal] = ["dog", "cat", "parth"];
// console.log(d);
// console.log(c);
// console.log(animal);

// function pattern1() {
//     let n = 5;
//     let result = ''; // Store the result
//     for (let i = n; i >= 1; i--) {
//       let str = "* ";
//       result += str.repeat(i) + '\n'; // Add each line to the result
//     }
//     return result; // Return the result
//   }
  
//   function pattern2() {
//     let n = 5;
//     let result = ''; // Store the result
//     for (let i = n; i >= 1; i--) {
//       let str = "* ";
//       let space = "  ";
//       result += space.repeat(n - i) + str.repeat(i) + '\n'; // Add each line to the result
//     }
//     return result; // Return the result
//   }
  
//   console.log(pattern1() + pattern2()); // Concatenate the results of pattern1 and pattern2
  