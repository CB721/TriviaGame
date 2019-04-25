$(document).ready(function () {

    //define game audio
    let gameAudio = new Audio("./assets/audio/Basketball-Game.mp3");
    let slamDunkSound = new Audio("./assets/audio/Basketball-Slam Dunk.mp3");
    let dribbleSound = new Audio("./assets/audio/Basketball-Bounce.mp3");
    let backboardSound = new Audio("./assets/audio/Basketball-Backboard.mp3");

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
            question: "Which player has won the most titles?",
            answers: ["Shaquille O'Neal", "Magic Johnson", "Bill Russell", "Kobe Bryant"],
            correctAnswer: "Bill Russell"
        },
        {
            question: "Which team has won the most titles?",
            answers: ["San Antonio Spurs", "Boston Celtics", "Golden State Warriors", "Los Angeles Lakers"],
            correctAnswer: "Boston Celtics"

        },
        {
            question: "Which player has made the most three point shots in one game?",
            answers: ["Klay Thompson", "Ray Allen", "LeBron James", "Stephen Curry"],
            correctAnswer: "Klay Thompson"

        },
        {
            question: "Which player has scored the most points in their entire professional career?",
            answers: ["Kobe Bryant", "Michael Jordan", "Kevin Durant", "Kareem Abdul-Jabbar"],
            correctAnswer: "Kareem Abdul-Jabbar"

        },
        {
            question: "Which player goes by the nickname 'The Beard'?",
            answers: ["Dirk Nowitzki", "James Harden", "Larry Bird", "Scottie Pippen"],
            correctAnswer: "James Harden"

        }];



    let game = {
        //keep track of game scores
        correct: 0,
        incorrect: 0,
        timeCount: 24,
        unanswered: 0,
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
            $(".questions").prepend('<h2>Shot Clock: <span class="timer">24</span> Seconds </h2>');
            //go through each question in array
            for (var i = 0; i < questions.length; i++) {
                console.log(questions[i].question);
                //put each question in its own h3  div in questions div
                $(".questions").append('<h3>' + questions[i].question + '</h3>');
                //go through each answer and add to question div
                for (var a = 0; a < questions[i].answers.length; a++) {
                    $(".questions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[a] + "'>" + questions[i].answers[a])
                }
            }
            
        },
        //show submit button

        //end game function
        gameEnd: function () {
            //pause sound
            dribbleSound.pause();
            //remove the timer and questions
            $(".timer").remove();
            $(".questions").remove();
            //play game end sound
            gameAudio.play();
            //check if question has been answered
            for (var q = 0; q < questions.length; q++) {
                $.each($("input[name='question-0']:checked"), function () {
                    //add one to correct if input is correct answer
                    if ($(this).val() == questions[q].correctAnswer) {
                        console.log(this);
                        game.correct++;
                        console.log(game.correct);
                    } else {
                        //add one to incorrect if input isn't correct
                        game.incorrect++;
                        console.log(game.incorrect);
                    }
                });
            }



            //display correct answers
            //display incorrect answers
            //display unanswered questions
            //display game reset button
        },

    }


    //trigger gameEnd function when
    //if user answers all questions and presses 'slam dunk' button
    //play slam dunk audio on click
    //if timer runs out
    //play backboard sound, use timeout function



});

