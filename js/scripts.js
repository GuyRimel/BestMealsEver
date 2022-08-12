let favoriteFood = "snow crab";
document.write('my favorite food is ' + favoriteFood + '<br><br>- - - - - - - - - - - - <br>');

function sayHelloWorld() {
    alert('Hello World');
}

document.write(parseInt('2') + 2);

let userName = 'Kassandra';
let userAge = 25;
let message = `Hello, my name is ${userName}. I'm ${userAge} and I'm ready to party! ;D`;

console.log(message);

let car = {
    color: 'red',
    mpg: '10'
};

let shortObject = { name: 'Bob' };

console.log(`${shortObject.name} said, "The car is ${userName}'s, is ${car.color}, and gets ${car.mpg} miles per gallon."`);

let annesAge = 27;
let anne = {
    name: 'Anne',
    age: annesAge,
    child: {
        name: "Joe",
        age: 2
    }
};

delete anne.age;
console.log(`Anne is ${anne.age}. ${anne.child.name} is ${anne.child.age}`);

let user = {};
user.email = 'test@test.com';
user.age = 27;

console.log(user.email);

let currentUserName = 'sammy';

let userAges = {
    anne: 27,
    sam: 112,
    megan: 97
}

userAges[currentUserName] = 113;

console.log(userAges[currentUserName]);

let arrayOne = [1, 2, 3];
let arrayTwo = [
    1,
    'two',
    arrayOne,
    { age: 5 }
];

arrayTwo[2][2] = 'dog';

console.log(arrayTwo[2][0]);