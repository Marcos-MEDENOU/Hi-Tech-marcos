


let connexionAccess = document.querySelector("#openModal form fieldset:nth-child(2) a")
let linkConnexionToModal = document.querySelector("body>a[href='#openModal']")
let linkConnexionToModal2 = document.querySelector("a[href='#openModal2']")
console.log(linkConnexionToModal);
console.log(connexionAccess);
connexionAccess.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("coco");
    if (linkConnexionToModal.getAttribute("href") == "#openModal")
    {
        linkConnexionToModal.setAttribute("href", "#openModal2");
         linkConnexionToModal.style.visibility = "visible";
         linkConnexionToModal.style.zIndex = "999";

    }
    //Vérifier si href du premier a est bien #openModal
    //et si #openModal est sur visibility visible
    //et si #openModal2 est sur hidden

    





    //si oui on change le href du premier a en #openModal2
    //on met #openmodal2 sur visibility visible et #openModal1 sur hidden
    //et on met le zindex de #openModal tel que présent


    //si non on ramene le href du premier a en #openModal
    //on met #openModal2 sur hidden et #openModal1 sur visible
  
})

