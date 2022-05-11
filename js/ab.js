
/* icon */
let icon = document.querySelector(".icon");
let links = document.querySelector(".links");

links.style.display = "none";

icon.onclick = function() {

    if(links.style.display === "none") {
        links.style.display = "block";
    }else {
        links.style.display = "none"
    };
}