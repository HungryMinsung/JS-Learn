const title = document.querySelector("div.hello:first-child h1");

    function clicker(){
        title.style.color = "red";
    }

title.addEventListener("click", clicker);