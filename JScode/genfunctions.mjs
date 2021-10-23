export function readArrayAndPrintbySectionID(array,funtionToDo,id){
    for (const i of array) {
        funtionToDo(id,i)
    }
}

export function addCardscodebyID(id,element){
    boxcard = document.getElementById(id)
    boxcard.innerHTML +=    `<section class="cards-main" onclick="openProduct()">
                                    <button class="card">
                                        <div class="card-body">
                                            <img class="imgCards" src="${element.img}" alt="">
                                            <h5 class="card-title">${element.title}</h5>
                                            <p class="card-text"> ${element.precio}</p>
                                        </div>
                                        <button class="CardButton">ADD</button>
                                    </button>
                            </section>`
}

export function addCategoriesButtons(id){
    catBut = document.getElementById(id)
    catbut.innerHTML += `<button class="CatButton">
                            <img class="ButtonIMG" src="/assets/imgs-main/tarta.png" tag="Tartas"></img>
                            <h2 class="ButtonText">Tartas</h2>
                        </button>` 
}

