
function cardSwitching() {
    var card1 = document.querySelector("#about-card-1")
    var card2 = document.querySelector("#about-card-2")
    var card3 = document.querySelector("#about-card-3")



    setTimeout(() => {

        card1.style.display = "flex";
        card2.style.display = "none";
        card3.style.display = "none";

    }, 2000)

    setTimeout(() => {

        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";

    }, 2000)




    setTimeout(() => {

        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";

    }, 0)

}




document.addEventListener('DOMContentLoaded',function(){

    setInterval(cardSwitching, 2000);
}





)