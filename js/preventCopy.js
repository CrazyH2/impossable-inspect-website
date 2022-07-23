var currentInnerHtml;
var element = new Image();
var elementWithHiddenContent = document.querySelector("#element-to-hide");
var innerHtml = elementWithHiddenContent.innerHTML;

element.__defineGetter__("id", function() {
    var show_hide = "stop";
    export var show_hide;
    currentInnerHtml = "";
});

setInterval(function() {
    currentInnerHtml = innerHtml;
    var show_hide = "start";
    export var show_hide;
    console.log(element);
    console.clear();
    elementWithHiddenContent.innerHTML = currentInnerHtml;
}, 1000);

