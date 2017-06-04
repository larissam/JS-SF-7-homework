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

//attach remore quextion button for first 2 buttons
$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});

//variable for elements
var $addNewBtn = $('#addQuestion');
$addNewBtn.attr("disabled","disabled");
$addNewBtn.css('opacity', '0.4');
var $input = $('#question');
var checkInput = false;
var buttonLength = 2;

//validation for input filed
$input.keyup( function () {
    if ($input.val().length > 0) {
        checkInput = true;
        $addNewBtn.removeAttr("disabled");
        $addNewBtn.css('opacity', '1');
    }
});

//add new question
$addNewBtn.on('click', function(e) {
    e.preventDefault();
    var val = $('#question').val();

    if ( checkInput) {
        var $newLi = $('<li class="form-group padout"></li>');
        var $newQuestion = $('<label class="label"></label>');
        var $newString =  val;
        $newQuestion.append($newString);
        $newLi.append($newQuestion);

        var $anser = $('<input type="text" class="form-control">');
        $newLi.append($anser);

        var $removeButton = $('<button>').text("Remove question");
        $removeButton.addClass('answer');
        $newLi.append($removeButton);

        $('#surveyList').append($newLi);

        $('#question').val('');
        checkInput = false;
        $addNewBtn.attr("disabled","disabled");
        $addNewBtn.css('opacity', '0.4');
        buttonLength ++;

        console.log("buttonLength: ", buttonLength );

        $removeButton.on('click', function (e) {
            if (buttonLength > 2){
                e.preventDefault();
                buttonLength --;
                e.preventDefault();
                $(this).parent().remove();
            } else {
                e.preventDefault();
                alert('Chain at least 2 methods');
            }
        });
    }
});

//validation for remove button
$('button').on('click', function (e) {
    if (buttonLength > 2 ) {
        e.preventDefault();
        $(this).parent().remove();
        buttonLength --;
    } else {
        e.preventDefault();
        alert('Chain at least 2 methods');
    }
});




