(function () {
    'use strict';

    var triggerElement = document.querySelector('.speech-input__icon');

    var listenUp = function() {
        artyom.on(['ok *'] , true).then((i,wildcard) => {
            let words = wildcard.split(" ");
            let trigger = words.indexOf("y******");
            if(trigger !== -1) {
                words = words.splice(trigger + 1);
                let request = words.reduce((acc, val) => acc + "+" + val, "");

                window.open('https://www.youporn.com/search/?query=' + request);
            }

            triggerElement.className = 'speech-input__icon';
            artyom.fatality();
        }); 

        // Start the commands !
        artyom.initialize({
            lang: "fr-FR", // GreatBritain english
            continuous: true, // Listen forever
            soundex: true,// Use the soundex algorithm to increase accuracy
            debug: true, // Show messages in the console
            listen: true // Start to listen commands !
        }).then(() => {
            console.log("Artyom has been succesfully initialized");
        }).catch((err) => {
            console.error("Artyom couldn't be initialized: ", err);
        });
    };


    /*** events hookup */

    var speakUp = function(e) {
        if(e.target.className.indexOf('active') !== -1) {
            triggerElement.className = 'speech-input__icon';
            artyom.fatality();
            return;
        }
        e.target.className += " active";

        listenUp();
    };

    triggerElement.addEventListener('click', speakUp);

}) ();

