const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
// toggle을 활용한 간단한 클릭 이벤트