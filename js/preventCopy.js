var currentInnerHtml;
var element = new Image();
var elementWithHiddenContent = document.querySelector("body");
var innerHtml = elementWithHiddenContent.innerHTML;

element.__defineGetter__("id", function() {
    currentInnerHtml = "Please exit the dev tools to carry on using the website.";
});

setInterval(function() {
    currentInnerHtml = innerHtml;
    console.log(element);
    console.clear();
    elementWithHiddenContent.innerHTML = currentInnerHtml;
}, 0005);
