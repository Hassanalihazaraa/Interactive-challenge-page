let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("slide-img");
slides[slideIndex].style.display = "block";

function display() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex == slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= 0 && slideIndex < slides.length) {
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
    showTab(0);
    window.scrollTo(0,document.body.scrollHeight/2)
};
document.getElementById("practical-btn").onclick = function () {
    showTab(1);
    window.scrollTo(0,document.body.scrollHeight/2)
};
document.getElementById("contact-btn").onclick = function () {
    showTab(2);
    window.scrollTo(0,document.body.scrollHeight/2)
};

//form validation
document.getElementById("button").disabled = true;

function emptycheck() {
    if (document.getElementById("fullname").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("textarea").value == "") {
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("button").disabled = false;
    }
}

document.getElementById("fullname").onkeyup = function () {
    emptycheck()
};
document.getElementById("email").onkeyup = function () {
    emptycheck()
};
document.getElementById("textarea").onkeyup = function () {
    emptycheck()
};

let number = 1;
window.setInterval(function () {
    number++;
    document.getElementById("counter-number").innerHTML = number;
    console.log(number)
}, 250);

