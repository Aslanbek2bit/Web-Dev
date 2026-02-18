alert( null || 2 || undefined );
//2
alert( alert(1) || 2 || alert(3) );
//1, 2
alert( 1 && null && 2 );
//null
alert( alert(1) && alert(2) );
//1
alert( null || 2 && 3 || 4 );
//3
if(age >= 14 && age <= 90)

if(!(age >= 14 && age <= 90))
if(age < 14 || age > 90)

if (-1 || 0) alert( 'first' ); // will run
if (-1 && 0) alert( 'second' ); // will not
if (null || -1 && 1) alert( 'third' ); // will run

let login = prompt("Who is there", '');
if(login == "Admin") {
  let password = prompt("Password?", '');
  if(password === "TheMaster"){
    alert("Welcome!");
  } else if(password === '' || password === null) {
    alert("Caneled");
  } else {
    alert("Wrong password");
  }
} else if(login === '' || password === null){
  alert("Canceled");
} else {
  alert("I don't know u");
}

let a = 1, b = 1;

let c = ++a; // both of them 2
let d = b++; // d = 1, b = 2

let a = 2;

let x = 1 + (a *= 2);

//x = 5, a = 4

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

//10, -1, 1, 2, 6, 9px, $45, 2, NaN, -9   5, -14, 1, NaN, -2

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// because a and b are strings, so the result is 12
// to fix this, we need to convert a and b to numbers

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3

// now the result is 3

if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2, 3");
        break;
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

    let name = "Ilya";
    alert( `hello ${1}` ); // ?
    // hello 1
    alert( `hello ${"name"}` ); // ?
    // hello name
    alert( `hello ${name}` ); // ?
    // hello Ilya

  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>task1</title>
</head>
<body>
  <script>

    let planet;
    let currentUser;

  </script>
</body>
</html>

let i = 3;

while (i) {
  alert( i-- );
} // shows 1 as last


let i = 0;
while (++i < 5) alert( i );
//shows from 1 to 4

let i = 0;
while (i++ < 5) alert( i );
//shows from 0 to 4

for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );

//both will show from 0 to 4

for(int i = 2; i <= 10; i+=2){
    alert(i);
}

//task1.Is it possible to create functions A and B so that new A() == new B()? Answer: yes
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert( new A() == new B() ); // true

//task2.Create new Calculator
function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

//task3.Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  }
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);

  let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete"
delete user["name"];

let schedule = {};

function isEmpty(schedule) {
    for(let key in schedule){
        return false;
    }
    return true;
}

alert(isEmpty(schedule));

schedule["8:30"] = "go to school";

alert(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}

alert(sum);


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

//error, this doesnt work like that
//it should be more like this:
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
    let user = makeUser();

    alert(user.ref().name);
}


let calculator = {
    read() {
        let a = +prompt("a?", '');
        let b = +prompt("b?", '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };