/* Document Ready */


// variable for hacker person
const hackerPerson = document.querySelectorAll(".hacker-person");
/* Scoreboard variable */
let score = 0;
/* Timer variable */
let timer = 30;

// initial countdown timer
let coundDownTimer = 3;


// Document Ready Starts
$(document).ready(function () {
    $(".end-game").hide();
    $('.play-area').hide();
    $(".hard-level").hide();
    $(".game-info").hide();
    $(".reset-button").hide();
    // game is timed at 20 seconds
    /* 20 seconds timer function */
    /*     function stopWatch() {
            $(".time-number").text(` ${timer}`);
            timer = timer - 1;
            if (timer < 0) {
                $(".hacker-person").removeClass("animated", "bounceInUp");
                timer = 0;
            }
        }
        let time = setInterval(stopWatch, 1000); */

    function stopWatch() {
        $(".time-number").text(` ${timer}`);
        timer = timer - 1;
        if (timer < 0) {
            $('.play-area').fadeOut();
            $("header").fadeOut();
            $(".hard-level").fadeOut();
            $('.end-game').fadeIn();
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
        $(".catch-phrase").css({
            display: "block"
        });
        if ($(this).hasClass("bounceInUp")) {
            $(this).addClass("bounceOutDown").removeClass("bounceInUp");
        } else if ($(this).hasClass("bounceOutDown")) {
            $(this).addClass("bounceInUp").removeClass("bounceOutDown");
        }
    });

    // user clicks on START GAME button
    // user is redirected to a countdown timer in 3 seconds
    // game area fades in after 3 seconds

    /*       $(".start-button").on("click", function(e){
              e.preventDefault();
                $('.start-game').hide();
                $('.countdown').fadeIn();
                function gameCountDown() {
                    $(".get-ready").text(` ${coundDownTimer}`);
                    coundDownTimer = coundDownTimer - 1;
                    if (coundDownTimer < 0) {
                        window.setTimeout(function () {
                            // Move to a new location or you can do something else
                            window.location.href = "index.html";
                            coundDownTimer = 0;
                        });
                    }
                }
                let time = setInterval(gameCountDown, 1000);
          }); // end start button animation function */

    $(".easy-level").on("click", function (e) {
        e.preventDefault();
        $('.start-game').fadeOut();
        $(".end-game").fadeIn();
            $(".play-area").fadeIn();
    }); // end easy level button animation function

        function gameCountDown() {
            $(".get-ready").text(`${coundDownTimer}`);
            coundDownTimer = coundDownTimer - 1;
            if (coundDownTimer < 0) {
                $(".end-game").hide();
                $(".play-area").fadeIn();
                coundDownTimer = 0;
            }
        }
        let time = setInterval(gameCountDown, 1000);

    $(".hard-panel").on("click", function (e) {
        e.preventDefault();
        $('.start-game').fadeOut();
        $(".end-game").fadeIn();
        function gameCountDown() {
            $(".get-ready").text(` ${coundDownTimer}`);
            coundDownTimer = coundDownTimer - 1;
            if (coundDownTimer < 0) {
                $(".end-game").hide();
                $(".hard-level").fadeIn(1200);
            }
        }
        let time = setInterval(gameCountDown, 1000);
    }); // end hard level button animation function




    // page will reset when this button is clicked
    $(".reset").on('click', function () {
        window.location.reload(true);
    }); // end of page reload function

    // user is prompted to enter their name
    // User's name is displayed on the screen with the HTML "Hello _______, welcome to the game. Please click START to play!"
    // User is taken to the game area

    /*   function welcome() {
          const userName = prompt("Enter Your Name");
          $(".user-name").html(`<h2>Welcome ${userName} to the game!</h2>`);
          return userName;
      }
      welcome(); */


    //////////////// HARD LEVEL PAGE //////////
    // when the eggs are "popped", make them disappear!
    $(".eggs").on("click", function () {
        $(this).css({
            display: "none"
        })
        score++;
        $(".scoreboard").text(`${score}`);

    }); // end of click function for hard-level
    // egg people get called to animate at random times within 2 seconds
    $(".eggs").each(function (i, el) {
        window.setTimeout(function () {
            $(el).addClass("fadeInUp" || "fadeInUp2");
        }, Math.random() * 4000).css({
            delay: "2s"
        })
    });

    // user chooses level of difficulty
    // user is led to the game countdown page


}); // end document ready




// user is taken to another screen that shows their score
// button is available to restart the game




