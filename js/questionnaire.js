/*!
 * Questionnaire.js
 */

/* VAR AND FUNCTION FOR FRATERNITY AND SORORITY BUTTONS */
var greekOrganization = "";

$('.org-btn').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    console.log(buttonClicked);
    
    // store it in greekOrganization
    greekOrganization = buttonClicked;
    console.log(greekOrganization);
    
});


/* VAR AND FUNCTION FOR ATTRIBUTE BUTTONS */
var clickedArray = [];

$('.number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();
    console.log(buttonClicked);
    
    // store it as the last element in the array
    clickedArray.push(buttonClicked);
    console.log(clickedArray);
    
});