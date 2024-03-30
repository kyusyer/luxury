
function cardSwitching() {
    var card1 = document.querySelector("#about-card-1")
    var card2 = document.querySelector("#about-card-2")
    var card3 = document.querySelector("#about-card-3")

    console.log("start switch")

    // setTimeout(() => {
    //     console.log("card1")

    card1.style.display = "flex";
    card2.style.display = "none";
    card3.style.display = "none";

    // }, 2000)

    setTimeout(() => {
        console.log("card2")

        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";

    }, 3000)




    setTimeout(() => {
        console.log("card3")

        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";

    }, 6000)

}




document.addEventListener('DOMContentLoaded', function () {

    setInterval(cardSwitching, 9000);
}





)