window.onload = function(loadText) {

var beerBottles
for  (counter = 100; counter >= 1; counter-- ) {
  if (counter === 1) {
    beerBottles = "bottle";
  } else {
    beerBottles = "bottles";
  }
  if (counter < 100) {
   var firstLine = document.getElementById(line1);
   var firstLineText = document.createTextNode(counter + " " + beerBottles + " " + "of beer on the wall, " + counter + " " + beerBottles + " of beer.");
   firstLine.appendChild(firstLineText);
   document.line1.appendChild(firstLine);
   
   var secondLine = document.getElementById(line2);
   var secondLineText = document.createTextNode("Take one down and pass it around, " + (counter-1) + " " + beerBottles + " of beer on the wall.");
   secondLine.appendChild(secondLineText);
   document.line2.appendChild(secondLine);
  }
  /*
  if (counter === 1) {
   console.log(counter + " " + beerBottles + " " + "of beer on the wall, " + counter + " " + beerBottles + " of beer.");
   console.log("Take one down and pass it around, no more bottles of beer on the wall.");
   console.log("No more bottles of beer on the wall, no more bottles of beer.");
   console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  } */
 }

}