//library of questions
var gameInProgress = false
var questionCounter = 0
var userInput = false
var questions = [
  {
    ask: "In which city did he grow up?",
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
    ask: "Where was he born?",
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

  if(gameInProgress == false){
    gameInProgress = true

    //display the question on the front
    $('#flashcard div.display').html(questions[questionCounter].ask);
    $('h2').html('Question');

    //display the answer on the back
    $('#flashcard div.display2').html(questions[questionCounter].answer);
    //change the button to submit
    $('#answerbox input.start').val('Submit');
    console.log('the game started')
    }
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
      $('#answerbox input.start').val('next');
      userInput = true;
    }
      //if the user do not get it right tell user to try again
      else {
      $('h2').html('Try Again');
      $('input.input').css('background','#E06C75')
    }


  // if the user get it right the button is now next
  } else if (gameInProgress == true, userInput == true) {
    //check to see if there're any more cards left
    if (questions.length == questionCounter) {

      $('#answerbox input.start').val('Again');
      $('h3').html('Thanks for playing!');
      $('#flashcard div.display2').html('');
      gameInProgress = false;
      userInput = false;
      questionCounter = 0;
      $('#card').toggleClass('flipped');
    //   //show the next question
    } else {
      $('#flashcard div.display').html(questions[questionCounter].ask);
      $('#card').toggleClass('flipped');
      userInput = false;
      $('input.input').css('background','white').val('');
      $('#answerbox input.start').val('Submit');
      $('h2').html('Question')
      //delay showing the answer on the background
      window.setTimeout(function(){
        $('#flashcard div.display2').html(questions[questionCounter].answer);
      },2000);
    }
  }
})

$('input.flip.btn').on('click', function(){
  $('#card').toggleClass('flipped');
})

// Bonuses
//
// I want to be able to count the number of rights and the number of wrongs.
//
// I want to be able to add my own flashcards.
//
// I want to know the total number of flashcards.
//
// I want to know the percent I got correct.
