//DATA
let categories = [
    {
        id: 00,
        img: "./assets/imgs/tarta.png",
        text: "Tartas"
    },
    {
        id: 01,
        img: "./assets/imgs/crosaint.png",
        text: "Bolleria"
    },
    {
        id: 02,
        img: "./assets/imgs/pan.png",
        text: "Pan"
    }
]

let catPanes = [
    {
        idNum: 0,
        img:"/assets/img-Cards/pan222.png",
        title:"PAN DE CAMPO",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"/assets/img-Cards/croissants.png",
        title:"CROISSANTS",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"/assets/img-Cards/pan.png",
        title:"PAN AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"/assets/img-Cards/rodajas.png",
        title:"PAN BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"/assets/img-Cards/pbt.png",
        title:"PAN CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"/assets/img-Cards/tartachoco.png",
        title:"PAN DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"/assets/img-Cards/brownie.png",
        title:"PAN EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"/assets/img-Cards/cheesecake.png",
        title:"PAN FFFFFF",
        precio:"€2,80",
    },
]


let catBolleria = [
    {
        idNum: 0,
        img:"/assets/img-Cards/pan222.png",
        title:"Bollo XXXXXX",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"/assets/img-Cards/croissants.png",
        title:"Bollo YYYYYY",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"/assets/img-Cards/pan.png",
        title:"Bollo AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"/assets/img-Cards/rodajas.png",
        title:"Bollo BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"/assets/img-Cards/pbt.png",
        title:"Bollo CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"/assets/img-Cards/tartachoco.png",
        title:"Bollo DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"/assets/img-Cards/brownie.png",
        title:"Bollo EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"/assets/img-Cards/cheesecake.png",
        title:"Bollo FFFFFF",
        precio:"€2,80",
    },
]

let catTartas = [
    {
        idNum: 0,
        img:"/assets/img-Cards/pan222.png",
        title:"Tarta XXXXXX",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"/assets/img-Cards/croissants.png",
        title:"Tarta YYYYYYY",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"/assets/img-Cards/pan.png",
        title:"Tarta AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"/assets/img-Cards/rodajas.png",
        title:"Tarta BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"/assets/img-Cards/pbt.png",
        title:"Tarta CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"/assets/img-Cards/tartachoco.png",
        title:"Tarta DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"/assets/img-Cards/brownie.png",
        title:"Tarta EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"/assets/img-Cards/cheesecake.png",
        title:"Tarta FFFFFF",
        precio:"€2,80",
    },
]

//Declaración de funciones

function readArrayAndPrintbySectionID(array,funtionToDo,id){
    for (const i of array) {
        funtionToDo(id,i)
    }
}
function addCardscodebyID(id,element){
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

function addCategoriesButtons(id,i){
    catBut = document.getElementById(id)
    catBut.innerHTML += `<button class="CatButton">
                            <img class="ButtonIMG" src="${i.img}" tag="Tartas"></img>
                            <h2 class="ButtonText">${i.text}</h2>
                        </button>` 
}


//Escribo Codigo HTML en Main ID "main_categories"

readArrayAndPrintbySectionID(categories,addCategoriesButtons,"main_categories")





