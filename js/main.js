// dark mode for website
let btnDark = document.getElementById("btnDark");
let body = document.querySelector("body");


let theme = () =>{
    if (btnDark.textContent == "Dark Mode") {
        body.style.background = "black";
        body.style.color = "#fff";
        btnDark.textContent = "Normal";
        btnDark.style.background = "rgba(214, 214, 213, 1)";
        btnDark.style.color = "black";

    } else {
        body.style.background = "#fff";
        body.style.color = "black";
        btnDark.textContent = "Dark Mode";
        btnDark.style.background = "black";
        btnDark.style.color = "#fff";
    }
}




btnDark.addEventListener("click", theme);







































