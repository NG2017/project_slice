function pageLoad (){

    /*
    to do app letrehozasa
    min 10 sor, minden sorba checkbox,amivel ki lehet piálni, mellett szöveges mező, hogy mit akarunk ideírni
    minden sorhoz legyen törlés is
    min 10 sor, de bővíthető legyen
    */

    //0. tegyuk egy valtozoba a root div-et
    let rootDiv = document.getElementById("root");

    //1. egy valtozoba belekerül az egy sornyi html kod: div, checkbox, text, delete gomb - közös classnévvel
    let standardRow = `
    <div class="row">
        <input type="checkbox" name="" id="">
        <input type="text" name="" id="" placeholder="ide írd a feladatot..">
        <button class="deleteBtn">Delete</button>
    </div>
    `;

    //2. el kell menteni a sorok szamat valtozoba
    let rowNumbers = 10;

    //3. for ciklusben letrehozunk 10 masolatot a szabvanysorbol
    for (let index = 0; index < rowNumbers; index++) {
        rootDiv.insertAdjacentHTML("beforeend", standardRow);
    }

    //4. add gomb hozzaadasa a rooton kivul
    let createBtn = `<button id="newBtn">New row</button>`;
    rootDiv.insertAdjacentHTML("beforeend", createBtn);

  
    //5. click-esemeny az addra es letre kell hozni egy fuggveny, hogy mi tortenjen, adja hozza az uj sort
    let createBtnMakeRow = document.getElementById("newBtn");
    function makeNewRow() {
        rootDiv.insertAdjacentHTML("afterbegin", standardRow);
    }
    createBtnMakeRow.addEventListener("click", makeNewRow);

    //6. ki kell jelolni az osszes torles gombot es amelyikre kattintunk, azt torolje ki QS-ral
    let deleteButtons = rootDiv.querySelectorAll(".deleteBtn");
    console.log(deleteButtons);

    //7. forciklussal vegig a tombon es a hosszusagatol fuggoen es mindegyikre rakjuk ra egy kattintasfigyelot, amihez keszitunk egy fuggvenyt
    function deleteThisRow(o) {
        
        console.log(o.target);
        console.log(o.target.parentElement);
        o.target.parentElement.remove();


    }
    
    for (let index = 0; index < deleteButtons.length; index++) {      
        deleteButtons[index].addEventListener("click", deleteThisRow);

    }

    //8. az elkeszult tablzatban kitoroljuk az adott sort?



}
window.addEventListener("load", pageLoad);