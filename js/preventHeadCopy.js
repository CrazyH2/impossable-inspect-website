var hcurrentInnerHtml;
var helement = new Image();
var helementWithHiddenContent = document.querySelector("head");
var hinnerHtml = helementWithHiddenContent.innerHTML;

helement.__defineGetter__("id", function() {
    hcurrentInnerHtml = "";
});

setInterval(function() {
    hcurrentInnerHtml = hinnerHtml;
    console.log(helement);
    console.clear();
    helementWithHiddenContent.innerHTML = hcurrentInnerHtml;
}, 0005);