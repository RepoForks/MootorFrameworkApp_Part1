(function($) {

    "use strict";

    m.app.view("index").on("ready", function() {

        // create the firebase object
        var firebaseRef = new Firebase('https://burning-fire-1723.firebaseio.com');

        // create auth object
        var auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
            if (!error) {
                if (user) {
                    console.log(user);
                    window.location.href = "#userhome";
                }
            }
        });
        // form on submit event
        $("#myForm").on("submit", function() {
            var email = $('#txtEmail').val();
            var password = $('#txtPass').val();
            auth.login('password', {
                email: email,
                password: password
            });
            return false;
        });
    });

}(window.$));
