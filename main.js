(function () {
    'use strict';

    var okyouporn = okyouporn || {};

    artyom.on(['OK Youporn *'], true).then((i, wildcard) => {
        window.open('https://www.youporn.com/search/?query=' + wildcard);
    });

    artyom.initialize({
        lang:"fr-FR",
        debug:true, // Show what recognizes in the Console
        listen:true, // Start listening after this
        speed:0.9, // Talk a little bit slow
        mode:"normal" // This parameter is not required as it will be normal by default
    });


}) ();

