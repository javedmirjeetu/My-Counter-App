"use strict";

var addOne = function addOne() {
    count++;
    console.log("Added One", count);
    render();
};
var subOne = function subOne() {
    count--;
    console.log("sub one", count);
    render();
};

var resetAll = function resetAll() {
    count = 0;
    render();
};

var count = 0;

var render = function render() {
    var counterTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { id: "counter", className: "counter" },
            " ",
            count
        ),
        React.createElement(
            "a",
            { "class": "waves-effect waves-light btn", onClick: addOne },
            "ADD 1"
        ),
        React.createElement(
            "a",
            { "class": "waves-effect waves-light btn", onClick: subOne },
            "SUB 2"
        ),
        React.createElement(
            "a",
            { "class": "waves-effect waves-light btn", onClick: resetAll },
            "Reset"
        )
    );

    var myApp = document.querySelector("#my-app");

    ReactDOM.render(counterTemplate, myApp);
};
render();
