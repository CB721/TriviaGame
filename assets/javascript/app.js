$(document).ready(function () {

    //define game audio
    let gameAudio = new Audio("./assets/audio/Basketball Game.mp3");
    let slamDunkSound = new Audio("./assets/audio/Basketball Slam Dunk.mp3");
    let dribbleSound = new Audio("./assets/audio/Basketball Bounce.mp3");
    let backboardSound = new Audio("./assets/audio/Basketball Backboard.mp3");
 

    //set multiple choice buttons
    $(":radio").wrap("<span style='background-color:red'>")

    //on start button click

    $("#start-button").on("click", function () {
        //remove start button and background
        $("#start-button").remove();
        $(".jumbotron").remove();
        game.startGame();
    });

    //create array of questions
    let questions = [
        {
            question: "q1",
            answers: ["hi", "there", "good", "friendly neighbor, won't you be mine?"],
            correctAnswer: "hi"
        },
        {
            question: "y",
            answers: ["t", "e", "s", "t"],
            correctAnswer: "t"

        }];

    //keep track of game scores and time
    let game = {
        correct: 0,
        incorrect: 0,
        timeCount: 24,
        //create timer
        timing: function () {
            game.timeCount--;
            $(".timer").html(game.timeCount);
            //when time runs out
            if (game.timeCount <= 0) {
                game.gameEnd();
            }
        },

        //start game function
        startGame: function () {
            //remove start button and background
            $("#start-button").remove();
            $(".jumbotron").remove();
            //play game audio
            dribbleSound.play();
            //starts timer
            gameTimer = setInterval(game.timing, 1000);
            //places timer on html
            $(".questions").prepend('<h2>Time Remaining: <span class="timer">24</span> Seconds </h2>');
            //go through each question in array
            for (var i = 0; i < questions.length; i++) {
                //put each question in its own h2 div in questions div
                $(".questions").append('<h3>' + questions[i].question + '</h3>');
                //go through each answer and add to question div
                for (var a = 0; a < questions[i].answers.length; a++) {
                    $(".questions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[a] + "'>")
                }
            }
        },

        //end game function
        gameEnd: function () {
            dribbleSound.pause();
            gameAudio.play();
        }
    }






    //game ends when
    //user answers all questions and presses 'slam dunk' button
    //timer runs out

    //when game ends
    //display correct answers
    //display incorrect answers
    //display unanswered questions
    //display game reset button






});

