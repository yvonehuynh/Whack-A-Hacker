
// GLOBAL DECLARATIONS BEFORE DOC READY

/* Scoreboard variable */
let score = 0;
/* Timer variable */
let timer = 20;
// initial countdown timer
let coundDownTimer = 3;




// Document Ready Starts
$(document).ready(function () {
    // when page loads, hide the end game panels
    $(".end-game").hide();
    $(".womp").hide();

    // 1.
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
                    // Move to a new location
                    window.location.href = "easy-level.html";
                    coundDownTimer = 0;
                });
            }
        }
        let time = setInterval(gameCountDown, 1000);
    }); // end easy level button animation function

    // 2.
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
            // when all above conditions are met, make timer stay at 0
            timer = 0;
        }
    }
    // run stopWatch function at intervals of 1 second
    let time = setInterval(stopWatch, 1000);

    // 3.
    // hackers are jumping from the bottom of the screen at random times
    // at a random time, the class of bounceInUp is added to the element
    $(".hacker-person").each(function (i, el) {
        window.setTimeout(function () {
            $(el).addClass("bounceInUp");
        }, Math.random() * 3000);
    });

    // 4.
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

    // 5.
    // user is led to the game countdown page
    function timeRanOut() {
        score = 0;
        $(".scoreboard").text(`${score}`);
        // stop all timer functionality
        clearInterval(time);
        // clear the game timer, and display it on the page
        timer = 0;
        $(".time-number").text(` ${timer}`);
        $(".womp").fadeIn();
    }; // end timeRanoUT function

    // 6.
    // page will reset when this button is clicked
    $(".reset").on('click', function () {
        window.location.reload(true);
    }); // end of page reload function

}); // end document ready

