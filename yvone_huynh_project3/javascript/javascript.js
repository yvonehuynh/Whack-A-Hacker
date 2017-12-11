
// GLOBAL DECLARATIONS BEFORE DOC READY

// variable for hacker person
const hackerPerson = document.querySelectorAll(".hacker-person");
/* Scoreboard variable */
let score = 0;
/* Timer variable */
let timer = 300;
// initial countdown timer
let coundDownTimer = 3;




///////////////


function hideMe(staff1, staff2, staff3, staff4) {
    $(staff1).hide();
    $(staff2).hide();
    $(staff3).hide();
    $(staff4).hide();
}

//////////////

// Document Ready Starts
$(document).ready(function() {
    $(".end-game").hide();
    $(".womp").hide();

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

    $(".hacker-person").each(function(i,el) {
        window.setTimeout(function() { 
            $(el).addClass("bounceInUp");
        }, Math.random() *1000);
    });

    // when a hacker is clicked, the user gain a point, hackers go back down to their laptops, and continue to animate up and down again
      $(".hacker-person").on("click", function(){
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

      $(".hard-panel").on("click", function (e) {
          e.preventDefault();
          $('.start-game').hide();
          $(".end-game").fadeIn();
          function gameCountDown() {
              $(".get-ready").text(` ${coundDownTimer}`);
              coundDownTimer = coundDownTimer - 1;
              if (coundDownTimer < 0) {
                  window.setTimeout(function () {
                      // Move to a new location or you can do something else
                    window.location.href = "hard-level.html";
                      coundDownTimer = 0;
                  });
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
          }, Math.random() * 4000);
      }); // end randomized animation function

      // user chooses level of difficulty
      // user is led to the game countdown page

      //////////////////// BONUS ROUND /////////////////////


      $(".bonus-level").on("click", function (e) {
          e.preventDefault();
          $('.start-game').hide();
          /*  $('.countdown').fadeIn(); */
          $(".end-game").fadeIn();
          function gameCountDown() {
              $(".get-ready").text(` ${coundDownTimer}`);
              coundDownTimer = coundDownTimer - 1;
              if (coundDownTimer < 0) {
                  window.setTimeout(function () {
                      // Move to a new location or you can do something else
                      /* $(".end-game").fadeOut(); */
                      window.location.href = "bonus-round.html";
                      coundDownTimer = 0;
                  });
              }
          }
          let time = setInterval(gameCountDown, 1000);
      }); // end hard level button animation function

      // if you click on Heather, their catchphrase shows up, player loses game
/*       $(".special").on("click", function(){
          score = 0;
          $(".scoreboard").text(`${score}`);
          clearInterval(time);
          timer = 0;
          $(".time-number").text(` ${timer}`);
          $(".hard-level").hide();
          $(".womp").fadeIn();
          $(".cto-hit").hide();
          $(".kristen-hit").hide();
          $(".tiff-hit").hide();
          $(".sylvia-hit").hide();
      }) // end Heather click event

      // if you click on Ryan, their catchphrase shows up, player loses game
      $(".cto").on("click", function(){
          score = 0;
          $(".scoreboard").text(`${score}`);
          clearInterval(time);
          timer = 0;
          $(".time-number").text(` ${timer}`);
          $(".hard-level").hide();
          $(".womp").fadeIn();
          $(".ceo-hit").hide();
          $(".kristen-hit").hide();
          $(".tiff-hit").hide();
          $(".sylvia-hit").hide();
      }) // end Ryan click event

      // if you click on Kristen, their catchphrase shows up, player loses game
      $(".super-kristen").on("click", function () {
          score = 0;
          $(".scoreboard").text(`${score}`);
          clearInterval(time);
          timer = 0;
          $(".time-number").text(` ${timer}`);
          $(".hard-level").hide();
          $(".womp").fadeIn();
          $(".ceo-hit").hide();
          $(".cto-hit").hide();
          $(".tiff-hit").hide();
          $(".sylvia-hit").hide();
          $(".kristen-hit").fadeIn();
      }) // end super-kristen click event

      // if you click on tiff, their catchphrase shows up, player loses game
      $(".super-tiff").on("click", function () {
          score = 0;
          $(".scoreboard").text(`${score}`);
          clearInterval(time);
          timer = 0;
          $(".time-number").text(` ${timer}`);
          $(".hard-level").hide();
          $(".womp").fadeIn();
          $(".ceo-hit").hide();
          $(".cto-hit").hide();
          $(".kristen-hit").hide();
          $(".sylvia-hit").hide();
      }) // end super-tiff click event

      // if you click on Sylvia, their catchphrase shows up, player loses game
      $(".super-sylvia").on("click", function () {
          score = 0;
          $(".scoreboard").text(`${score}`);
          clearInterval(time);
          timer = 0;
          $(".time-number").text(` ${timer}`);
          $(".hard-level").hide();
          $(".womp").fadeIn();
          $(".ceo-hit").hide();
          $(".cto-hit").hide();
          $(".kristen-hit").hide();
          $(".tiff-hit").hide();
      }) // end super-sylvia click event

 */

    function timeRanOut() {
        score = 0;
        $(".scoreboard").text(`${score}`);
        clearInterval(time);
        timer = 0;
        $(".time-number").text(` ${timer}`);
        $(".hard-level").hide();
        $(".womp").fadeIn();
    };
    
      // if heather is hit
    $(".special").on("click", function () {
        timeRanOut();
        hideMe(".cto-hit", ".kristen-hit", ".tiff-hit", ".sylvia-hit")
    });
    // if Ryan is hit
    $(".cto").on("click", function () {
        timeRanOut();
        hideMe(".ceo-hit", ".kristen-hit", ".tiff-hit", ".sylvia-hit")
    });
    // if Kristen is hit
    $(".super-kristen").on("click", function () {
        timeRanOut();
        hideMe(".cto-hit", ".ceo-hit", ".tiff-hit", ".sylvia-hit")
    });
    // if Tiff is hit
    $(".super-tiff").on("click", function () {
        timeRanOut();
        hideMe(".cto-hit", ".kristen-hit", ".ceo-hit", ".sylvia-hit")
    });
    // if Sylvia is hit
    $(".super-sylvia").on("click", function () {
        timeRanOut();
        hideMe(".cto-hit", ".kristen-hit", ".tiff-hit", ".ceo-hit")
    });
      
}); // end document ready
    
