(function () {
    'use strict';

    var okyouporn = okyouporn || {};
    var api = artyom.getNativeApi();


    artyom.on(['OK Youporn *'], true).then((i, wildcard) => {
        window.open('https://www.youporn.com/search/?query=' + wildcard);
    });

    artyom.initialize({
        lang:"fr-FR",
        debug:true, // Show what recognizes in the Console
        listen:true, // Start listening after this
        speed:1, // speech speed
        soundex: true, // Use the soundex algorithm to increase accuracy
        continuous: true, // listen forever and ever and ever       
        mode:"normal", // This parameter is not required as it will be normal by default
    });


}) ();

