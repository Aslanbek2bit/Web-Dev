let str = "Hello";

str.test = 5;

alert(str.test);

undefined (no strict mode)
An error (strict mode).

//task1.Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

//task2.Why 6.35.toFixed(1) == 6.3?
alert( (6.35 * 10).toFixed(20) ); // 63.5

//task3.Repeat until the input is a number
function readNumber() {
    let num;
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
  }
  alert(`Read: ${readNumber()}`);

//task4.An occasional infinite loop. 
let i = 0;
while (i != 10) {
    i += 0.2;
  }
//Answer: Because i would never equal 10

//task5.A random number from min to max
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

//task6.A random integer from min to max
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  alert( randomInteger(1, 3) );

  //task1.
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  alert( ucFirst("john") ); // John

//task2.Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

//task3.Truncate the text
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

//task4.Extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  //task1.rray copied?
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); //4

//task2.Let’s try 5 array operations.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//task3.Calling in an array context
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // a,b,function(){...}

//task4.Sum input numbers
function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("A number please?", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  alert( sumInput() );

//task5.A maximal subarray
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
    return maxSum;
  }
  alert( getMaxSubSum([-1, 2, 3, -9]) ); 
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  alert( getMaxSubSum([-2, -1, 1, 2]) ); 
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
  alert( getMaxSubSum([1, 2, 3]) ); 
  alert( getMaxSubSum([-1, -2, -3]) ); 

  //task1.Write the function camelize(str)
function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }

//task2.
function filterRange(arr, a, b) {
    return arri.filter(item => (a <= item && item <= b));
  }
  let arri = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  alert( filtered ); // 3,1 (matching values)
  alert( arr ); // 5,3,8,1 (not modified)

//task3.Filter range "in place"
function filterRangeInPlace(ar, a, b) {
    for (let i = 0; i < ar.length; i++) {
      let val = ar[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  let ar = [5, 3, 8, 1];
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  alert( ar ); // [3, 1]

//task4.Sort in decreasing order
let arra = [5, 2, 1, -10, 8];
arra.sort((a, b) => b - a);
alert( arra );

//task5.
function copySorted(arru) {
    return arru.slice().sort();
  }
  
  let arru = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr );

//task6.
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

//task7.
let johnn = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary

//task8.
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

//task9.
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  let johnh = { name: "John", age: 25 };
  let petei = { name: "Pete", age: 30 };
  let maryu = { name: "Mary", age: 28 };
  let arre = [ pete, john, mary ];
  sortByAge(arr);
  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

//task10.
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let arrb = [1, 2, 3];
  shuffle(arr);
  alert(arr);

//task11.
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  let arr = [ john, pete, mary ];
  alert( getAverageAge(arr) ); // 28

//task12.
function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }
  let stringg = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  alert( unique(strings) ); // Hare, Krishna, :-O

//task13.
function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  alert( unique(strings) ); // Hare, Krishna, :-O

  //task1.Filter unique array members
function unique(arr) {
    return Array.from(new Set(arr));
  }

//task2.Filter anagrams
function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  alert( aclean(arr) );

//task3.Iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); 

//task1.Filter unique array members
function unique(arr) {
    return Array.from(new Set(arr));
  }

//task2.Filter anagrams
function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  alert( aclean(arr) );

//task3.Iterable keys
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); 

//task1.
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let readMessages = new WeakSet();
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  readMessages.add(messages[0]);
  alert("Read message 0: " + readMessages.has(messages[0])); 
  messages.shift();

//task2.
let messagess = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let readMap = new WeakMap();
  readMap.set(messagess[0], new Date(2017, 1, 1));

  //task1.
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum; // 650
  }
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  alert( sumSalaries(salaries) );

//task2.
function count(obj) {
    return Object.keys(obj).length;
  }

  //task1.
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

//task2.
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
  }
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) );

//task3.
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { 
      day = 7;
    }
    return day;
  }

//task4.
function getDateAgo(data, days) {
    let dataCopy = new Date(data);
    dataCopy.setData(data.getData() - days);
    return dataCopy.getData();
  }
  let data = new Data(2015, 0, 2);
  alert( getDataAgo(date, 1) ); // 1, (1 Jan 2015)
  alert( getDataAgo(date, 2) ); // 31, (31 Dec 2014)
  alert( getDataAgo(date, 365) ); // 2, (2 Jan 2014)

//task5.
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
  alert( getLastDayOfMonth(2013, 1) ); // 28

//task6.
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }
  alert( getSecondsToday() );

//task7.
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }

//task8.
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }

//task1.
let user = {
    nname: "John",
    years: 30
  };
  let {nname, years: age, isAdmin = false} = user;
  alert(nname ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

//task2.
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
    return maxName;
  }

//task1.
let user = {
    name: "John Smith",
    age: 35
  };
  let user2 = JSON.parse(JSON.stringify(user));

//task2.
let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  room.occupiedBy = meetup;
  meetup.self = meetup;
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));

  function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
        result *= x;
    }
  
    return result;
}
  
let x = prompt("x?", "");
let n = prompt("n?", "");
  
if (n <= 0) {
    alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>task1</title>
</head>
<body>
    <script>
        let name = prompt("What is your name?", ''); //Miras Ibrayev
        alert(`Your name is ${name}`); 
  </script>
</body>
</html>

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed.");
    () => alert("You canceled the execution.");
  );

  5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//true, false, true, true, false, false, false


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }


//no, cuz return already does the else's function 

function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?"); 
  }

function checkAge(age) {
    return (age > 18) || confirm("Did your parents allow you?"); 
  }

  function findmin(a, b){
    if(a < b) return a;
    else return b;
}

function pow(x, n) {
    return x**n;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>task1</title>
</head>
<body>
  <script>
  alert( "I'm JavaScript!" );
  </script>
</body>
</html>

if ("0") {
    alert( 'Hello' );
  }
  // Yes, because "0" is a string, so it is true

  let name = promt("What is the official name of JavaScript?", "");

if(name == "ECMAScript"){
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

let num = prompt("Enter a number?", "");
if(num > 0) {
    alert("1")
} else if(num < 0) {
    alert("-1")
} else {
    alert("0")
}

let result = (a + b < 4) ? 'Below' : "Over";