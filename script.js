//library of questions
var gameInProgress = false
var questionCounter = 0
var userInput = false
var questions = [
  {
    ask: "What is my name?",
    answer: "sean"
  },

  {
    ask: "what is 3*3?",
    answer: 9
  },

  {
    ask: "what is 3/3?",
    answer: 1
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

    //display the question
    $('#flashcard div.display').html(questions[questionCounter].ask);

    //change the button to submit
    $('#answerbox input.start').val('Submit');
    console.log('the game started')
    }
  else if (userInput == false) {

    //take user input
    var userAnswer = $('#answerbox input.input').val()
    console.log(userAnswer);
    console.log(questions[questionCounter].answer);

    if (userAnswer == (questions[questionCounter].answer)) {
      questionCounter = questionCounter + 1;
      $('h2').html('Correct!');
      $('input.input').css('background','#2B8A9B')
      $('#answerbox input.start').val('next');
      userInput = true;
    } else {
      $('h2').html('Try Again');
      $('input.input').css('background','#E06C75')
    }



  } else if (gameInProgress == true, userInput == true) {

    if (questions.length == questionCounter) {
      console.log('you are done') } else {
    $('#flashcard div.display').html(questions[questionCounter].ask);
    userInput = false;
    $('input.input').css('background','white')
    $('#answerbox input.start').val('Submit');
    $('h2').html('Question')
    }

  } else if (questions.length == questionsCounter) {
    console.log('you are done')
  }

})








// Have questions stored.
//   [store]
// When I hit a start button I want it to ask me a random question.
//
//   Load one of the stored questions.
//
// I want to be able to insert an answer to the question.
//
//   Create an input box.
//
// Check to see if the answer is correct.
//
//     if correct - move on to the next question.
//
//     if incorrect - redisplay the question and tell the user to try again.
//
//
//
//
// Bonuses
//
// I want to be able to count the number of rights and the number of wrongs.
//
// I want to be able to add my own flashcards.
//
// I want to know the total number of flashcards.
//
// I want to know the percent I got correct.
