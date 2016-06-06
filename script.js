//library of questions
var questions = [
  {
    ask: "What is 3+3?",
    answer: "6"
  },

  {
    ask: "what is 3*3?",
    answer: "9"
  },

  {
    ask: "what is 3/3?",
    answer: "1"
  }
]

//start the game
$('.start').on('click',function(){

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

  //display the question
  $('#flashcard div.display').html(questions[0].ask);

  //change the button to submit
  $('#flashcard input.start').val('submit');

  //take the user input
  var userinput = $('#flashcard input.input').val()
  console.log(userinput);

  //compare it to the answer
  if (userinput === $('question[0].answer')){
    console.log('you are right')
  } else {
    console.log('try again')
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
