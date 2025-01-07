let background1 = document.querySelectorAll(".myElement");

for(let i=0; i<background1.length; i++){
    background1[i].addEventListener("click", function(event){
        event.currentTarget.classList.remove("greenBg");
        event.currentTarget.classList.add("transition");
        event.currentTarget.classList.add("yellowBg");
    });
}