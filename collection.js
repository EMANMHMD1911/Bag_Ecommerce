function black(){
    var bags = document.querySelectorAll(".img");
    var p1 = document.querySelector(".p1");
    
    var p2 = document.querySelector(".p2");
    var p3 = document.querySelector(".p3");
    for (var i = 0; i < 4; i++) {
        bags[i].src = `/img/black/${i + 1}.jpg`
    }

    p1.style.color = "black"
    p1.style.textDecoration = "underline";
    p2.style.textDecoration = "none"
    p2.style.color = "#808080"
    p3.style.textDecoration = "none"
    p3.style.color = "#808080"
}
function brown() {
    var bags = document.querySelectorAll(".img");
    var p1 = document.querySelector(".p1");
    
    var p2 = document.querySelector(".p2");
    var p3 = document.querySelector(".p3");
    for (var i = 0; i < 4; i++) {
        bags[i].src = `/img/brown/${i + 1}.jpg`
    }

    p2.style.color = "black"
    p2.style.textDecoration = "underline";
    p1.style.textDecoration = "none"
    p1.style.color = "#808080"
    p3.style.textDecoration = "none"
    p3.style.color = "#808080"


}

function caramel() {
    var bags = document.querySelectorAll(".img");
    var p1 = document.querySelector(".p1");
    
    var p2 = document.querySelector(".p2");
    var p3 = document.querySelector(".p3");
    for (var i = 0; i < 4; i++) {
        bags[i].src = `/img/caramel/${i + 1}.jpg`;
    }

    p3.style.color = "black"
    p3.style.textDecoration = "underline";
    p1.style.textDecoration = "none"
    p2.style.textDecoration = "none"
    p2.style.color = "#808080"
    p1.style.color = "#808080"

}