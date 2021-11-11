import {products} from "./data.js";
//console.log(products);

function createProduct(parent, ImgUrl, imgTitle){
    const product = document.createElement("div");
    product.className = "product";

    createImg(product, ImgUrl, imgTitle, textTitle, textPrice);
    createText(product, textTitle, textPrice);
    parent.appendChild(product);
}

function createImg(parent, imgUrl, imgTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = imgTitle;

    parent.appendChild(image);
}

function createText(parent, textTitle, textPrice){
    const title = document.createElement('h4');
    title.textContent = textTitle;

    const price = document.createElement('p');
    price.textContent = textPrice;

    parent.append(title, price);
}

const wrapperProducts = document.querySelector('.wrapper__products');
const imgUrl = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
const textTitle = "Fjallravct - Foldsack No. 1 Backpack, Fits 15 Laptops";
const textPrice = 109
createProduct(wrapperProducts, imgUrl, textTitle, textTitle, textPrice);





/*
<div class="produ
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
    <h4>Fjallravct - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
    <p>109.95 €</p>
</div>
*/