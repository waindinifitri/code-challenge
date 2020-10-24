/**
 * Make a script to show name and score of the students in a class:
 * A teacher currently check an examination and describe the range of the score (A-E) below:
 - 80 - 100: A
 - 65 - 79: B
 - 50 - 64: C
 - 35 - 49: D
 - 0 - 34: E

 Show the score and name of student when teacher input the name and score!

NOTED:
If the score of student less than 0 or more than 100, that should be "Invalid Score"
example : 
name = 'Rocky'
score = '90'
output : 'Score of Rocky is A!'
name = 'John Doe'
score = '0'
output : 'Score of John Doe is invalid!'
**/

name = "Andi";
score = 150;

//code here
if (score >= 80 && score <=100){
    console.log("Score of " + name + " is A!");
} else if (score >=65 && score <80) {
    console.log("Score of " + name + " is B!");
} else if (score >=50 && score <65) {
    console.log("Score of " + name + " is C!");
} else if (score >=35 && score <50) {
    console.log("Score of " + name + " is D!");
} else if (score >=0 && score <35) {
    console.log("Score of " + name + " is E!");
} else
 (console.log("Score of " + name + " is invalid!"));


 /**
---------------------
First Letter Grouping
-------------------- 

There is a varibale that called `name`.
Make a script to show the name in a what group like the following below:
- If the first alphabet of the `name` are a, b, c, d so it will be "The first group geng!"
- If the first alphabet of the `name` is e, f, g, h so it will be "The second group geng!"
- Another one is "The Last group!"

exp:
- `name` = 'apson', output: 'The first group geng!'
- `name` = 'fattah', output: 'The scond group geng!'
- `name` = 'werren', output: 'The Last group!'
- `name` = 'sisca', output: 'The Last group!'

*/

var name = 'Kafka';

//code here
var alphabet = name.substring(0, 1);

var first = ['a', 'b', 'c', 'd'];
var second = ['e', 'f', 'g', 'h'];

if (alphabet == first[0] || alphabet == first[1] || alphabet == first[2] || alphabet == first[3]) {
    console.log('The first group geng!');
} else if (alphabet == second[0] || alphabet == second[1] || alphabet == second[2] || alphabet == second[3]) {
    console.log('The second group geng!');
} else (
    console.log('The last group!')
);

/**
--------------------
String Manipulators!
--------------------
Make some function :
1. addTitle, taht have 4 parameters, there are `name1`, `name2`, `name3` dan `name4`.
   Function will add 'Mr. ' dan ', ' in every name and return the value.
   Example:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'
2. changeSpacesWith, that have 2 parameter, there are `str` dan `to`.
   Function will replace the space in `str` with value that we are give through `to` parameter, and return the value.
   Example:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'
3. cutString, that had 1 parameter, `str`.
   Function will cut the string to have 6 characters and return the value.
   Example:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'
RULES:
- No use regex
- No use slice, split, splice, substring
*/

var name1 = 'Steve Fox';
var name2 = 'Jin Kazama';
var name3 = 'Eddie Gordo';
var name4 = 'Geese Howard';

var person = name.substring(0, 1);
var identity = ['Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard'];


function addTitle (person1, person2, person3, person4) {
    if (person == identity[0] && person == identity[1] && person == identity[2] && person == identity[3]) {
        console.log("Mr. " + person1 + "," + "Mr. " + person2 + "," + "Mr. " + person3 + "," +  "Mr. " + person4 + ".")
    }
  }
  
  function changeSpacesWith (str, to) {
    // Code disini
  }
  
  function cutString (str) {
    // Code disini
  }
