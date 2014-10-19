(function($) {

    "use strict";

    m.app.view("userhome").on("ready", function() {

        // create the firebase object
        var firebaseRef = new Firebase('https://burning-fire-1723.firebaseio.com');

        // create auth object
        var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
            if (!error) {
                if (user) {

                }
            }
        });

        // Logout click event
        $("#btnLogout").click(function() {
            auth.logout();
            window.location.href = "";
        });
    });

}(window.$));
