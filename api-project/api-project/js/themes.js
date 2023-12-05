
document.querySelector("#switchTheme").addEventListener("click", function() {
    if (document.body.classList.contains("normal")) {
        document.body.classList.add("imPomu");
        document.body.classList.remove("normal");
    }
    else {
        document.body.classList.add("normal");
        document.body.classList.remove("imPomu");
    }
    
});