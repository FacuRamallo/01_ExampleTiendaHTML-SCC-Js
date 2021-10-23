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
        img:"./assets/imgs/pan.png.png",
        title:"PAN DE CAMPO",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"./assets/imgs/pan.png.png",
        title:"CROISSANTS",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"./assets/imgs/pan.png.png",
        title:"PAN AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"./assets/imgs/pan.png.png",
        title:"PAN BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"./assets/imgs/pan.png.png",
        title:"PAN CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"./assets/imgs/pan.png.png",
        title:"PAN DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"./assets/imgs/pan.png.png",
        title:"PAN EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"./assets/imgs/pan.png.png",
        title:"PAN FFFFFF",
        precio:"€2,80",
    },
]


let catBolleria = [
    {
        idNum: 0,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo XXXXXX",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo YYYYYY",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"./assets/imgs/pan.png.png",
        title:"Bollo FFFFFF",
        precio:"€2,80",
    },
]

let catTartas = [
    {
        idNum: 0,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta XXXXXX",
        precio:"€0,45",
    },
    {
        idNum: 01,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta YYYYYYY",
        precio:"€1,20",
    },
    {
        idNum: 02,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta AAAAA",
        precio:"€2,60",
    },
    {
        idNum: 03,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta BBBBBB",
        precio:"€3,60",
    },
    {
        idNum: 04,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta CCCCC",
        precio:"€0,60",
    },
    {
        idNum: 05,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta DDDDDD",
        precio:"€1,60",
    },
    {
        idNum: 06,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta EEEEEE",
        precio:"€2,10",
    },
    {
        idNum: 07,
        img:"./assets/imgs/pan.png.png",
        title:"Tarta FFFFFF",
        precio:"€2,80",
    },
]

//Declaración de funciones

function ReadArrayAndPrintbySectionID(array,funtionToDo,id){
    for (const i of array) {
        funtionToDo(id,i)
    }
}
function AddCardscodebyID(id,i){
    boxcard = document.getElementById(id)
    boxcard.innerHTML +=    `<section class="cards-main" onclick="openProduct(${i.id})">
                                    <button class="card">
                                        <div class="card-body">
                                            <img class="imgCards" src="${i.img}" alt="">
                                            <h5 class="card-title">${i.title}</h5>
                                            <p class="card-text"> ${i.precio}</p>
                                        </div>
                                        <button class="CardButton">ADD</button>
                                    </button>
                            </section>`
}

function AddCategoriesButtons(id,i){
    catBut = document.getElementById(id)
    catBut.innerHTML += `<button class="CatButton" onclick="OpenCatList(${i.id})">
                            <img class="ButtonImg" src="${i.img}" tag="Tartas"></img>
                            <h2 class="ButtonText">${i.text}</h2>
                        </button>` 
}


//Escribo Codigo HTML en Main ID "main_categories"

ReadArrayAndPrintbySectionID(categories,AddCategoriesButtons,"main_categories")


//Escribo Codigo HTML en Main ID "main_listProducts"

function OpenCatList(id){
    let categori= id;
    let arrayToDisplay; 
    if (categori == 00) {
        arrayToDisplay = catTartas;
    } else if (categori == 01) {
        arrayToDisplay = catBolleria;
    } else {
        arrayToDisplay = catPanes;
    }

    let mainCategories = document.getElementById("main_categories"); 
    mainCategories.classList.toggle('displaynone') //agrego clase "displaynone" a section mainCategories para que deje verse en pantalla
    ReadArrayAndPrintbySectionID(arrayToDisplay,AddCardscodebyID,"main_ListProducts");
}

//Escribo Codigo HTML en Main ID "main_ProductCard"

funtion OpenProductCard(id){
    
}





