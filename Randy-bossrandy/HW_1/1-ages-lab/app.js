/*
    When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design
    a program that will let users know what legal privileges U.S. citizens enjoy based on their age.

    Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. 
    See the conditions below:

    - If you are under 16,      you cannot do much outside of going to school
    - If you are 16 or older,   you can drive
    - If you 18 or older,       you can vote
    - If you are 21 or older,   you can drink alcohol
    - If you are 25 or older,   you can rent a car
    - If you are 35 or older,   you can run for president
    - If you are 62 or older,   you collect social security benefits

    The results that your program provides should be only the most recent privilege based on the provided age.
*/

//***Ask for age.
var age = prompt("give me your age");
console.log(age);

//***Hold privilage in index of milesetone age.
var stuff = [];
stuff[0] = "you cannot do much outside of going to school"
stuff[16] = "you can drive"
stuff[18] = "you can vote"
stuff[21] = "you can drink alcohol"
stuff[25] = "you can rent a car"
stuff[35] = "you can run for president"
stuff[62] = "you collect social security benefits"

//***Loop in reverse order of array and find first index that is NOT 'undefined' and above entered age.
for (i=stuff.length-1; i>=0; i--) {
        
    if (typeof stuff[i] !== 'undefined' && age >= i) {
        console.log(stuff[i]);
        break;
    }
}
