var slideIndex = 1;
var i;
var slides = document.getElementsByClassName("slide-img");
slides[slideIndex].style.display = "block";

function display() {
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex == 3) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = 2;
    }
    console.log(slideIndex);
    if (slideIndex >= 0 && slideIndex < 3) {
        slides[slideIndex].style.display = "block";
    }
}

document.getElementById("next").onclick = function () {
    slideIndex++;
    display();

};
document.getElementById("prev").onclick = function () {
    slideIndex--;
    display();

};


//tabs

function showTab(x) {
    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    if (x !== null) {
        contents[x].style.display = "block";
    }
}

contents = document.getElementsByClassName("tabContent");
showTab(null);

document.getElementById("summary-btn").onclick = function () {
    showTab(0)
};
document.getElementById("practical-btn").onclick = function () {

    showTab(1)

};
document.getElementById("contact-btn").onclick = function () {
    showTab(2)

};
document.getElementById("button").disabled = true;
document.getElementById("fullname").onkeyup = function () {

    if (document.getElementById("fullname").value == "" || document.getElementById("email").value == "" ||
        document.getElementById("textarea").value == "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
};
document.getElementById("email").onkeyup = function () {


    if (document.getElementById("fullname").value == "" || document.getElementById("email").value == "" ||
        document.getElementById("textarea").value == "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
};
document.getElementById("textarea").onkeyup = function () {


    if (document.getElementById("fullname").value == "" || document.getElementById("email").value == "" ||
        document.getElementById("textarea").value == "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
};

let number = 1;
window.setInterval(function () {
    number ++;
    document.getElementById("counter-number").innerHTML = number;
    console.log(number)
},250);

