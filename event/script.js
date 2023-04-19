const products = [];

let tbody = document.querySelector('#product-table tbody');
function addCar(car){
    tbody.innerHTML += `<tr>
                    <th scope="row">${car.id}</th>
                    <td>${car.model}</td>
                    <td>${car.year}</td>
                    <td>${car.price}$</td>
                    <td>${car.color}</td>
                    <td>${car.stutys}</td>
                    </tr>`;
}

function readCar(){
    let modelInput = document.getElementById('model');
    let priceInput = document.getElementById('price');
    let yearInput = document.getElementById('year');
    let colorInput = document.getElementById('color');
    let statusInput = document.getElementById('status');

    return {
        id: products.length+1,
        model: modelInput.value,
        price: priceInput.value,
        year: yearInput.value,
        color: colorInput.value,
        stutys: statusInput.value
    }

}
function readSearch() {
    let search = document.getElementById('searchq');
    return search.value;
}

const addBtn = document.getElementById('add-product-btn');
const clearBtn = document.getElementById('clear-all-btn');
const seaBtn = document.getElementById('seabtn');

addBtn.onclick = (event) => {
    event.preventDefault();
    let read = readCar();
    if (read.model=='' || read.price=='' || read.year=='' || read.color=='' || read.stutys=='') {
        alert("Заповніть всі поля!"); 
    }
    else{

        products.push(read);
        
        addCar(read);
        
    }
}
clearBtn.onclick = () => {
    tbody.innerHTML = '';
    products.splice(0);
}


seaBtn.onclick = (event) => {
    event.preventDefault();
    let sea = readSearch();
    tbody.innerHTML = '';
    /*
    for (let i = 0; i < products.length; i++) {
        if (products[i].model == sea){
            console.log(products[i]);
            addCar(products[i]);
    
        }
        if (sea == '') {
            addCar(products[i]);
        }
        
    }*/
    if (sea !== '') {
        
        for (let i = 0; i < products.length; i++) {
            
            let str = products[i].model;
            let searchTerm = sea;
            if (str.indexOf(searchTerm) !== -1) {
                addCar(products[i]);
            } 
            
        }
    }
    for (let i = 0; i < products.length; i++) {
        if (sea == '') {
            addCar(products[i]);
        }
    }
    
}
