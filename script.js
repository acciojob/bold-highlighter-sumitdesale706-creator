let link = document.querySlector("a");
let strong = document.querySelectorAll("strong");

link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", return_normal);

function highlight() {
     strong.style.color = "rgb(0, 128, 0)";
}

function return_normal() {
     strong.style.color = "rgb(0, 0, 0)";
}
