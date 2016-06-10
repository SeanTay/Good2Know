//library of questions
var gameInProgress = false
var questionCounter = 0
var userInput = false
var questions = [
  {
    ask: "In what city did he grow up?",
    answer: "charlotte"
  },

  {
    ask: "Where did he go to college?",
    answer: "nc state"
  },

  {
    ask: "What did he study in undergrad?",
    answer: "mechanical engineering"
  },

  {
    ask: "What is his favorite color?",
    answer: "gray"
  },

  {
    ask: "Which mid-west state did he live in?",
    answer: "michigan"
  },

  {
    ask: "In what country was he born?",
    answer: "burma"
  }
]

//shuffle the questions
function shuffle(questions) {
  var currentIndex = questions.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = temporaryValue;
  }
  return questions;
}
shuffle(questions);

//start the game
$('.start').on('click',function(){

  if(gameInProgress == false){              // **there are a lot of if/else statements
    gameInProgress = true                   // **perhaps you could use a switch statement in place of one of them to improve readability
    // **if not, make sure all the if/else statements indenting is correct (including brackets etc)
    //display the question on the front
    $('#flashcard div.display').html(questions[questionCounter].ask);
    $('h2').html('Question');

    //display the answer on the back
    $('#flashcard div.display2').html(questions[questionCounter].answer);
    //change the button to submit
    $('#answerbox input.start').val('Guess');
    console.log('the game started')
  }  // **changed indenting
  else if (userInput == false) {

    //take user input
    var userAnswer = $('#answerbox input.input').val().toLowerCase();
    console.log(userAnswer);
    console.log(questions[questionCounter].answer);

    // if the user gets it right change the following stuff
    if (userAnswer == (questions[questionCounter].answer)) {

      //get the next question ready and tell the user its right
      questionCounter = questionCounter + 1;
      $('h3').html('Correct!');
      $('#card').toggleClass('flipped');
      $('input.input').css('background','#2B8A9B')
      $('#answerbox input.start').val('Next');
      userInput = true;
    }
    //if the user do not get it right tell user to try again
    // **changed indent here
    else {
      $('h2').html('Try Again');
      $('input.input').css('background','#E06C75')
    }


  // if the user get it right the button is now next
  } else if (gameInProgress == true, userInput == true) {
    //check to see if there're any more cards left
    if (questions.length == questionCounter) {

      $('#answerbox input.start').val('Again');
      $('#flashcard div.display2').html('');
      gameInProgress = false;
      userInput = false;
      $('h2').html('Thanks for playing!');
      $('#flashcard div.display').html('');
      $('#card').toggleClass('flipped');
      questionCounter = 0;
    //   //show the next question
    } else {
      $('#flashcard div.display').html(questions[questionCounter].ask);
      $('#card').toggleClass('flipped');
      userInput = false;
      $('input.input').css('background','white').val('').focus();
      $('#answerbox input.start').val('Guess');
      $('h2').html('Question')
      //delay showing the answer on the background
      window.setTimeout(function(){
        $('#flashcard div.display2').html(questions[questionCounter].answer);
      },2000);
    } // **end of else statement
  } //**end of else if statement
})

$('input.flip.btn').on('click', function(){
  $('#card').toggleClass('flipped');
});

$('input.add.btn').on('click',function(){
  //prompt for a question to be added
  var userQ = prompt('What is the question?','Enter here.');
  var userA = prompt('What is the answer?','Enter here.')
  alert('New card added!')
  //add to the array
  var userQA = {
    ask: userQ,
    answer: userA,
  }
  questions.push(userQA);

});

// Bonuses
//
// I want to be able to count the number of rights and the number of wrongs.
//
// I want to be able to add my own flashcards.
//
// I want to know the total number of flashcards.
//
// I want to know the percent I got correct.
