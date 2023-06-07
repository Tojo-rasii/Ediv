$("#section-LD").hide(0);
$("#theme").click(function (params) {
    $("#section-LD").slideToggle(500);
    $("#filet").fadeOut(1000);
});
// $(document).ready(
//     function (params) {
//         $("#menu").click(function (params) {

//         });
//     }
// )
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var body = document.getElementById("body");
var navbar = document.getElementById("navbar");

//light mode
light.addEventListener("click", function () {
    light.style.backgroundColor = "#0075a3";
    light.style.color = "white";
    body.style.backgroundColor = "white";
    body.style.color = "var(--color7)";
    navbar.style.backgroundColor = "white";
    body.style.transition = "0.2s";
    navbar.style.transition = "0.2s";
});

//dark mode
dark.addEventListener("click", function () {
    dark.style.backgroundColor = "#0075a3";
    dark.style.color = "white";
    body.style.backgroundColor = "var(--color7)";
    body.style.color = "white";
    navbar.style.backgroundColor = "var(--color7)";
});
