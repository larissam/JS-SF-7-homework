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

"use strict";


$(document).ready(function () {
    $("#surveyList li").each(function() {
        var $button = $('<button />').html('Remove question');
        $(this).append($button);
    });


    //event handler for submit
    $('#surveyBuilder').on('submit', function(evt) {
        var question, 
            $newLi;

        evt.preventDefault();
        //get question values
        question = $('#question').val().trim();
        $('#question').val('').focus();

        if (question === '') {
            return;
        }

        $newLi = $('<li class="form-group padout">');
        $newLi.append('<label>');
        $newLi.append('<input type="text" class="form-control">');
        $newLi.append('<button> Remove question </button>'); 
        $newLi.find('label').text(question);

        $('#surveyList').append($newLi);

        //with chaining
        // $('<li class="form-group padout"></li>')
        //     .append('<label></label>')
        //     .append('<input type="text" class="form-control" />')
        //     .append('<button>Remove question</button>')
        //     .appendTo('#surveyList')
        //     .find('label').text(question);

        
    });

    $('#finalSurvey').on('click', function(evt) {
        var $target;

        evt.preventDefault();
        
        $target = $(evt.target);
        if ($target.is('button')) {
            $target.parent().remove();
        }    
    });

});