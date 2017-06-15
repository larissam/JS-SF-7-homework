/*
    When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design
    a program that will let users know what legal privileges U.S. citizens enjoy based on their age.

    Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. 
    See the conditions below:

    - If you are under 16,          you cannot do much outside of going to school
    - If you are 16 or older,        you can drive
    - If you 18 or older,           you can vote
    - If you are 21 or older,          you can drink alcohol
    - If you are 25 or older,           you can rent a car
    - If you are 35 or older,           you can run for president
    - If you are 62 or older,           you collect social security benefits

    The results that your program provides should be only the most recent privilege based on the provided age.
*/

var age = prompt("give me your age");
console.log(age);

if(age<=16) {console.log("you cannot do much outside of going to school")};
if(age>=16 && age<18) {console.log("you can drive")};
if(age>=18 && age<21) {console.log("you can vote")};
if(age>=21 && age<25) {console.log("you can drink alcohol")};
if(age>=25 && age<35) {console.log("you can rent a car")};
if(age>=35 && age<62) {console.log("you can run for president")};
if(age>=62) {console.log("you collect social security benefits")};
