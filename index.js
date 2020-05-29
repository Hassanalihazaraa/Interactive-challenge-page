var slideIndex =1;
var i;
var slides = document.getElementsByClassName("slide-img");
slides[slideIndex - 1].style.display = "block";

function display() {
    if (slideIndex > slides.length) {
        slideIndex =1;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.getElementById("next").onclick = function () {
    slideIndex++;
    display();

};
document.getElementById("prev").onclick = function () {
    slideIndex--;
    display();

};
console.log(slideIndex);