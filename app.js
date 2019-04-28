$(document).ready(function () {

    //define game audio
    let gameAudio = new Audio("./assets/audio/Basketball-Game.mp3");
    let dribbleSound = new Audio("./assets/audio/Basketball-Bounce.mp3");

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
            answers: [" Shaquille O'Neal ", " Magic Johnson ", " Bill Russell ", " Kobe Bryant "],
            correctAnswer: " Bill Russell "
        },
        {
            question: "Which team has won the most titles?",
            answers: [" San Antonio Spurs ", " Boston Celtics ", " Golden State Warriors ", " Los Angeles Lakers "],
            correctAnswer: " Boston Celtics "
        },
        {
            question: "Which player has made the most three point shots in one game?",
            answers: [" Klay Thompson ", " Ray Allen ", " Steve Kerr ", " Stephen Curry "],
            correctAnswer: " Klay Thompson "
        },
        {
            question: "Which player has scored the most points in their entire professional career?",
            answers: [" Kobe Bryant ", " Michael Jordan ", " Kevin Durant ", " Kareem Abdul-Jabbar "],
            correctAnswer: " Kareem Abdul-Jabbar "
        },
        {
            question: "Which player goes by the nickname 'The Beard'?",
            answers: [" Dirk Nowitzki ", " James Harden ", " Larry Bird ", " Scottie Pippen "],
            correctAnswer: " James Harden "
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
                //put each question in its own h3  div in questions div
                $(".questions").append('<h3>' + questions[i].question + '</h3>');
                //go through each answer and add to question div
                for (var a = 0; a < questions[i].answers.length; a++) {
                    $(".questions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[a] + "'>" + questions[i].answers[a]);
                }
            }

            //show submit button
            $(".questions").append("<button id='submit'>Slam Dunk</button");

            //when submit button is pressed
            $("#submit").on("click", function () {
                //trigger game end function
                game.gameEnd();
            });
        },

        //end game function
        gameEnd: function () {
            //pause sound
            dribbleSound.pause();
            //stop timer
            clearInterval(gameTimer);
            //remove the timer
            $(".timer").remove();

            //play game end sound
            gameAudio.play();

            //check if question has been answered
            $.each($('input[name="question-0"]:checked'), function () {
                //compare answer and correct answer
                if ($(this).val() == questions[0].correctAnswer) {
                    //add one to correct if input is correct
                    game.correct++;
                } else {
                    //add one to incorrect if input is incorrect
                    game.incorrect++;
                }
            });
            //check if question has been answered
            $.each($('input[name="question-1"]:checked'), function () {
                //compare answer and correct answer
                if ($(this).val() == questions[1].correctAnswer) {
                    //add one to correct if input is correct
                    game.correct++;
                } else {
                    //add one to incorrect if input is incorrect
                    game.incorrect++;
                }
            });
            //check if question has been answered
            $.each($('input[name="question-2"]:checked'), function () {
                //compare answer and correct answer
                if ($(this).val() == questions[2].correctAnswer) {
                    //add one to correct if input is correct
                    game.correct++;
                } else {
                    //add one to incorrect if input is incorrect
                    game.incorrect++;
                }
            });
            //check if question has been answered
            $.each($('input[name="question-3"]:checked'), function () {
                //compare answer and correct answer
                if ($(this).val() == questions[3].correctAnswer) {
                    //add one to correct if input is correct
                    game.correct++;
                } else {
                    //add one to incorrect if input is incorrect
                    game.incorrect++;
                }
            });
            //check if question has been answered
            $.each($('input[name="question-4"]:checked'), function () {
                //compare answer and correct answer
                if ($(this).val() == questions[4].correctAnswer) {
                    //add one to correct if input is correct
                    game.correct++;
                } else {
                    //add one to incorrect if input is incorrect
                    game.incorrect++;
                }
            });

            //remove questions
            $(".questions").remove();
            //show results
            this.result();

        },
        result: function () {
            //display correct answers
            $("#final-results").append("<h3>Correct Answers: " + game.correct + "</h3>");
            //display incorrect answers
            $("#final-results").append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
            //display unanswered questions
            $("#final-results").append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)))
        },
    }
});