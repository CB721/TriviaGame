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
            // $(".questions").append("<button id="slam-button">Slam Dunk</button>");
        },

        //end game function
        gameEnd: function () {
            //pause sound
            dribbleSound.pause();
            //stop timer
            clearInterval(gameTimer);
            //remove the timer and questions
            $(".timer").remove();
            $(".questions").remove();
            //play game end sound
            gameAudio.play();
            console.log('hi');
            //check if question has been answered
            $.each($("input[name='question-0']:checked"), function () {
                console.log(this);
                //add one to correct if input is correct answer
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    //add one to incorrect if input isn't correct
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-1']:checked"), function () {
                //add one to correct if input is correct answer
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    //add one to incorrect if input isn't correct
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"), function () {
                //add one to correct if input is correct answer
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    //add one to incorrect if input isn't correct
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"), function () {
                //add one to correct if input is correct answer
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    //add one to incorrect if input isn't correct
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"), function () {
                //add one to correct if input is correct answer
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    //add one to incorrect if input isn't correct
                    game.incorrect++;
                }
            });

            //show results
            this.result();

            //display game reset button
        },
        result: function () {
            //stop timer
            // clearInterval(timing());
            //display correct answers
            $(".questions").append("<h3>Correct Answers: " + this.correct + "</h3>");
            //display incorrect answers
            $(".questions").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            //display unanswered questions
            $(".questions").append("<h3>Unanswered: " + (questions.length - (this.correct + this.incorrect)))
        }

    }


    //trigger gameEnd function when
    //if user answers all questions and presses 'slam dunk' button
    //play slam dunk audio on click
    //if timer runs out
    //play backboard sound, use timeout function



});

