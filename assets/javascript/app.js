$(document).ready(function () {

    //define game audio
    // let gameAudio = new Audio("./assets/audio/Basketball Game.mp3");
    // let slamDunkSound = new Audio("./assets/audio/Basketball Slam Dunk.mp3");
    // let dribbleSound = new Audio("./assets/audio/Basketball Bounce.mp3");
    // let backboardSound = new Audio("./assets/audio/Basketball Backboard.mp3");

    //set multiple choice buttons
    $(":radio").wrap("<span style='background-color:red'>")

    //on start button click

    $("#start-button").on("click", function () {
        //remove buttons
        $("#start-button").remove();
        $(".jumbotron").remove();
        //go through each question in array
        for (var i = 0; i < questions.length; i++) {
            //put each question in its own h2 div
            $(".questions").append('<h2>' + questions[i].question + '</h2>');
            //go through each answer and add to question div
            for (var a = 0; a < questions[i].answers.length; a++) {
                $(".questions").append("<input type='radio' name='question-" + i + "' value='"+questions[i].answers[a]+ "'>")
            }
        }

    });

    //create array of questions
    let questions = [
        {
            question: "q1",
            answers: ["hi", "there", "good", "friend"],
            correctAnswer: "hi"
        },
        {
            question: "y",
            answers: ["t", "e", "s", "t"],
            correctAnswer: "t"

        }];

    //keep track of game scores and time
    //create timer
    //timer should be 15 seconds per question
    //questions are shown in question area div
    //multiple choice options

    //game ends when
    //user answers all questions and presses 'slam dunk' button
    //timer runs out

    //when game ends
    //display correct answers
    //display incorrect answers
    //display unanswered questions
    //display game reset button






});

