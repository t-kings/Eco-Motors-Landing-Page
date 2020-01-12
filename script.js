window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("top_nav").style = "height:auto;transform: rotateX(0deg)";
    } else {
        document.getElementById("top_nav").style = "height:0px;transform: rotateX(90deg)";
    }
}