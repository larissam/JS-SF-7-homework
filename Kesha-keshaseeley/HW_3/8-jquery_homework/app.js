/*
Create a customizable survey form.

The index.html file includes a form, which contains 2 sample questions as illustrations.
A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

In addition to creating the functionality described above, your final code should also do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/

// var id = $.select('id')
// id.each(fucntion() {
// })

window.onload = function() {

  $("#surveyList li").html(function() {
      var $removeButton = $('<button>').html("Remove question");
      $removeButton.addClass('deletebtn');
      $(this).append($removeButton);
  });

  // add event listener to button using remove li
  $('#surveyList').delegate('.deletebtn', 'click', removeLi);

  // targeting the addQuestion button
  // JS
  var addQuestion = document.getElementById('addQuestion');
  // JQ
  // var $addQuestion = $('#addQuestion').click(function(event){
  //   event.preventDefault();
  //   var $question = $('#question');
  //   // var $surveyList = $('#surveyList');
  //   var $surveyListFirstChild = $
  // });

  addQuestion.addEventListener("click", function(event){
    event.preventDefault();
    var question = document.getElementById('question');
    // targeting surveryList
    var surveyList = document.getElementById('surveyList');
    // targeting the first child to model new li
    var surveyListFirstChild = surveyList.firstElementChild;
    // generates new li clone
    var newLi = surveyListFirstChild.cloneNode(true);
    // target the label and remove text
    var newLiLabel = newLi.firstElementChild;
    // get value inside the label and change it
    newLiLabel.innerHTML = question.value;
    // add new li to ol
    surveyList.appendChild(newLi);

  });

};

function removeLi (event) {
  event.preventDefault();
  $(this).parent().remove();
}
