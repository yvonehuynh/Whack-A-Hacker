
// GLOBAL DECLARATIONS BEFORE DOC READY

// variable for hacker person
const hackerPerson = document.querySelectorAll(".hacker-person");
/* Scoreboard variable */
let score = 0;
/* Timer variable */
let timer = 20;
// initial countdown timer
let coundDownTimer = 3;

// Document Ready Starts
$(document).ready(function () {
    $(".end-game").hide();
    $(".womp").hide();

    $(".instruction-head").on("click", function(){
        $(".instruction-body").toggle("show");
        console.log("boom");
    });

    // game is timed at 25 seconds
    function stopWatch() {
        $(".time-number").text(` ${timer}`);
        timer = timer - 1;
        if (timer < 0) {
            $('.play-area').hide();
            $("header").hide();
            $(".hard-level").hide();
            $('.end-game').fadeIn();
            $(".womp").hide();
            timer = 0;
        }
    }
    let time = setInterval(stopWatch, 1000);

    // hackers are jumping from their laptops, either randomly or at random times
    // at a random time, the class of bounceInUp is added to the element,
    // at a random time, the class of bounceInUp is removed

    $(".hacker-person").each(function (i, el) {
        window.setTimeout(function () {
            $(el).addClass("bounceInUp");
        }, Math.random() * 1000);
    });

    // when a hacker is clicked, the user gain a point, hackers go back down to their laptops, and continue to animate up and down again
    $(".hacker-person").on("click", function () {
        score++;
        $(".scoreboard").text(`${score}`);
        if ($(this).hasClass("bounceInUp")) {
            $(this).addClass("bounceOutDown").removeClass("bounceInUp");
        } else if ($(this).hasClass("bounceOutDown")) {
            $(this).addClass("bounceInUp").removeClass("bounceOutDown");
        }
    }); // end toggle class function for hacker-person

    // user clicks on START GAME button
    // user is redirected to a countdown timer in 3 seconds
    // game area fades in after 3 seconds

    $(".easy-level").on("click", function (e) {
        e.preventDefault();
        $('.start-game').hide();
        $(".end-game").fadeIn();
        function gameCountDown() {
            $(".get-ready").text(` ${coundDownTimer}`);
            coundDownTimer = coundDownTimer - 1;
            if (coundDownTimer < 0) {
                window.setTimeout(function () {
                    // Move to a new location or you can do something else
                    window.location.href = "easy-level.html";
                    coundDownTimer = 0;
                });
            }
        }
        let time = setInterval(gameCountDown, 1000);
    }); // end easy level button animation function

    // page will reset when this button is clicked
    $(".reset").on('click', function () {
        window.location.reload(true);
    }); // end of page reload function

    // user is led to the game countdown page

    // if you click on Heather, their catchphrase shows up, player loses game

    function timeRanOut() {
        score = 0;
        $(".scoreboard").text(`${score}`);
        clearInterval(time);
        timer = 0;
        $(".time-number").text(` ${timer}`);
        $(".hard-level").hide();
        $(".womp").fadeIn();
    };


}); // end document ready

