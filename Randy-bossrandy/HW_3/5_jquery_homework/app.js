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

function addMissingRemoveButton() {

    //***Loop every list item.
    $("#surveyList li").each(function () {

        //***Add a button if doesnt exist on each 'li'.
        if ($(this).has('button').length === 0) {
            addRemoveButton(this);
        }

    });
}

function addRemoveButton(li) {
    var $removeButton = $('<button>').html("Remove question");
    $(li).append($removeButton);
}

$('#surveyList').on('click', 'li button', function (e) {
    //***Removes the buttons parent element which is the 'li'.
    $(this).parent().remove();
});

$('#addQuestion').on('click', function (e) {
    e.preventDefault();

    //***If question text is empty, leave function.
    var $newQuestion = $('#question');
    if ($newQuestion.val().length === 0)
        return;

    //***Create label and add new question text. Remove text from new question box after.
    var $questionLabel = $('<label>').text($newQuestion.val());
    $newQuestion.val('');

    //***Create text inuput.
    var $questionText = $('<input/>').attr({ type: 'text' }).addClass('form-control');

    //***Create new list item and add new question and text input.
    var $questionItem = $('<li>').addClass("form-group padout");
    $questionItem.append($questionLabel);
    $questionItem.append($questionText);

    //***Add new list item to list.
    $('#surveyList').append($questionItem);

    //***Add remove button to this new 'li'.
    addRemoveButton($questionItem);
});

//***Run when the document is loaded.
window.onload = function () {

    //***Add remove button on existing questions (if they don't exist).
    addMissingRemoveButton();

}