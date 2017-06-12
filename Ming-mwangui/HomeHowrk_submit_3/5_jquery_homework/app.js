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

//attach remore question button for first 2 buttons
$("#surveyList li").append($('<button>').html("Remove question"));

//variable for elements
$('#addQuestion').attr("disabled","disabled");

//flag
var checkInput = false;
var buttonLength = 2;

//validation for input filed
$('#question').keyup( function () {
    if ($('#question').val().length > 0) {
        checkInput = true;
        $('#addQuestion').removeAttr("disabled");
        $('#addQuestion').css('opacity', '1');
    } else {
        $('#addQuestion').attr("disabled","disabled");
        $('#addQuestion').css('opacity', '0.7');
    }
});

//add new question
$('#addQuestion').on('click', false, function(e) {
    if ( checkInput ) {
        //create jquery elements
        var $newLi = $('<li class="form-group padout"></li>');
        var $newQuestion = $('<label class="label"></label>');

        $newQuestion.append($('#question').val());
        $newLi.append($newQuestion);

        var $anser = $('<input type="text" class="form-control">');
        $newLi.append($anser);

        var $removeButton = $('<button>').text("Remove question");
        $removeButton.addClass('answer');
        $newLi.append($removeButton);

        $('#surveyList').append($newLi);

        $('#question').val('');
        checkInput = false;
        $('#addQuestion').attr("disabled","disabled");
        $('#addQuestion').css('opacity', '0.7');
        buttonLength ++;

        //remove jquery question button
        $removeButton.on('click', false, function (e) {
            if (buttonLength > 2){
                buttonLength --;
                $(this).parent().remove();
            } else {
                alert('Chain at least 2 methods');
            }
        });
    }
});


//remove question button if list in the HTML
$('button').on('click', false, function (e) {
    if (buttonLength > 2 ) {
        $(this).parent().remove();
        buttonLength --;
    } else {
        alert('Chain at least 2 methods');
    }
});




