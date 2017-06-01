/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"

*/

var createBtn = document.getElementById('new-thing-button');

createBtn.addEventListener('click', function (event) {
  event.preventDefault();

  var ul = document.getElementById('fav-list');
  var inputBox = document.getElementById('new-thing');
  var inputValue = document.getElementById('new-thing').value;

  if (inputValue.length == 0) {
    inputBox.style.border = '1px solid #ff0000';
    alert("you must type in a value!");
  } else {
    inputBox.style.border = '1px solid #ccc';
    var li = document.createElement('li');
    var newFavorite = document.createTextNode(inputValue);
    li.appendChild(newFavorite);
    ul.appendChild(li);
  }
  document.getElementById('new-thing').value = '';
});
