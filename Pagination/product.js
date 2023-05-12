let api = 'https://dummyjson.com/products';
const list = document.querySelector('.carousel-inner');
const head = document.getElementById('header');
const con = document.getElementById('content');
let params = (new URL(document.location)).searchParams;
let id = params.get("id");
console.log(id);

function read() {
    let ulr = `https://dummyjson.com/products?skip=${id-1}&limit=${id}`
    fetch(ulr).then(res => res.json()).then(data => {
        const products = data.products;
        head.innerHTML = `${products[0].title}`;
        
        for (const p of products) {
            let img = p.images;
            for (const i of img) {
                list.innerHTML += `<div class="carousel-item">
                                    <img class="d-block w-100" src="${i}" alt="First slide">
                                </div>`
            };
            let act = document.querySelector('.carousel-item');
            act.classList.add('active');
        }
        console.log(products[id-1].rating);
    con.innerHTML = `<p>DiscountPercentage: ${products[0].discountPercentage}</p>
                        <p>Rating: ${products[0].rating}</p>
                        <p>Stock: ${products[0].stock}</p>
                        <p>Brand: ${products[0].brand}</p>
                        <p>Category: ${products[0].category}</p>`
    });
    
}

read();
