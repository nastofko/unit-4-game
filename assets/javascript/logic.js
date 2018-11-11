$(document).ready(function () {
    // Handler for .ready() called.

    console.log('test');

    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#loss").text(losses);

    var randNumber = Math.floor(Math.random() * 120) + 19;
    var counter = 0;

    var crystalNum = [];

    for (var i = 0; i < 4; i++) {
        var crystalRand = Math.floor((Math.random() * 12) + 1);
        crystalNum.push(crystalRand);
    }

    $(".randomNum").text("Random Number: " + randNumber);


    for (var i = 0; i < crystalNum.length; i++) {

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");
        imageCrystal.addClass("crystal_img");
        imageCrystal.attr("src", "./assets/images/crystal.jpg");

        imageCrystal.attr("data-crystalvalue", crystalNum[i]);

        $(".images").append(imageCrystal);

    }

    function reset() {
        counter = 0;
        $('#yourScore').text(counter);
        randNumber = Math.floor(Math.random() * 120) + 19
        $(".randomNum").text("Random Number: " + randNumber);
        
    }

    $('.crystal-image').on('click', function () {
        counter = counter + parseInt($(this).attr('data-crystalvalue'))
        

        $('#yourScore').text(counter);


        if (counter === randNumber) {
            $('#message').text("You Won!");
            wins++;
            $('#wins').text(wins);
            console.log(wins);
            reset();


        } else if (counter > randNumber) {

            $('#message').text("You lose!");
            losses++;
            $('#loss').text(losses);
            console.log(losses);
            reset();
        }



    })


});