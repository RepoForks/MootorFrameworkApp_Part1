(function() {

    "use strict";
    // Created the Mootor app
    var app = m.app({
        views: [
            "index"
        ]
    });
    //default route
    app.route("^$", app.view("index"));
    app.route("^#userhome", app.view("userhome"));

    // initialize the app
    app.init();

}());
