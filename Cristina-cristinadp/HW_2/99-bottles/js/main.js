var unorderedList = document.createElement("ul");	
document.body.appendChild(unorderedList);



for (counter = 99; counter >= 1; counter--) {
		var li1 = document.createElement("li");
		var text1 = document.createTextNode(counter + " bottles of beer on the wall,");
		li1.appendChild(text1);
		unorderedList.appendChild(li1);
	if (counter < 99) {
		var li2 = document.createElement("li");
		var text2 = document.createTextNode(counter + " bottles of beer on the wall");
		li2.appendChild(text2);
		unorderedList.appendChild(li2);
	}
		var li3 = document.createElement("li");
		var text3 = document.createTextNode(counter + " " + "bottles of beer. Take one down and pass it around");
		li3.appendChild(text3);
		unorderedList.appendChild(li3);
	if (counter === 1) {
		var li4 = document.createElement("li");
		var text4 = document.createTextNode(counter + " " + "bottle of beer on the wall," + counter + " bottle of beer");
		li4.appendChild(text4);
		unorderedList.appendChild(li4);
		var li5 = document.createElement("li");
		var text5 = document.createTextNode("Take one down and pass it around, no more bottles of beer on the wall.");
		li5.appendChild(text5);
		unorderedList.appendChild(li5);
		var li6 = document.createElement("li");
		var text6 = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer");
		li6.appendChild(text6);
		unorderedList.appendChild(li6);
		var li7 = document.createElement("li");
		var text7 = document.createTextNode("Go to the store and buy some more, 99 bottles of beer on the wall.") 
		li7.appendChild(text7);
		unorderedList.appendChild(li7);
	}
};


// for (counter = 99; counter >= 1; counter = counter -1) {
// 		console.log(counter+ " " +"bottles of beer on the wall,"); 
// 	if (counter < 99) {
// 		console.log(counter + " bottles of beer on the wall.");
// 	}
// 		console.log(counter + " " + "bottles of beer. \n") 
// 		console.log("Take one down and pass it around");
// 	if (counter === 1) {
// 		console.log(counter + " bottle of beer on the wall," + counter + " bottle of beer.");
// 		console.log("Take one down and pass it around, no more bottles of beer on the wall.");
// 		console.log("No more bottles of beer on the wall, no more bottles of beer."); 
// 		console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
// 	}
// };