/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
var imgList = ["image1.png", "image2.png", "image3.png"];
console.log("Question 1: " + imgList);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var newImgList = imgList[0];
console.log("Question 2: " + newImgList);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var lengthOfimgList = imgList.length;
console.log("Question 3: " + lengthOfimgList);

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var lastArray = imgList[imgList.length-1];
console.log("Question 4: " + lastArray);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var Question5 = [1,2,3,4];
for (var i =0; i < Question5.length; i++) {
    Question5[i]++;
};
console.log("Question5: ", Question5);

/*Note:
- Alternative forEach
var Question5 = [1,2,3,4];
Question5.forEach(function (item, index) {
    console.log(index,item );
    Question5[index] = item + 1;
});
console.log("Question5: ", Question5);

- Alternative map
 var Question5 = [1,2,3,4].map(function(e){
     console.log("e: ", e);
     return e + 1;
 });
console.log("Question5: ", Question5);
 */



/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


// Your code here

    var total = 0;
    //average
    for (var i = 0; i < Question5.length; i++) {
         //console.log(Question5[i]);
        total += Question5[i];
    };
    var average = total / (Question5.length);
    console.log("Question6: " , average);
