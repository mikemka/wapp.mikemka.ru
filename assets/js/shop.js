function addProduct(_id, title, short_description, thumbnail) {
    const newShopItem = document.createElement("a");
    newShopItem.classList.add('shop-item');
    newShopItem.setAttribute('href', `#${_id}`);

    const newCardImage = document.createElement("div");
    newCardImage.classList.add('img');
    newCardImage.setAttribute('style', `background-image: url('https://chat.mikemka.ru${thumbnail}');`);

    const newCardTitle = document.createElement("p");
    newCardTitle.classList.add('title');
    newCardTitle.innerText = title;
    
    const newCardDesc = document.createElement("p");
    newCardDesc.innerText = short_description;

    newShopItem.appendChild(newCardImage);
    newShopItem.appendChild(newCardTitle);
    newShopItem.appendChild(newCardDesc);
    
    document.getElementById('shop-items').appendChild(newShopItem);
}

function loadProducts() {
    fetch('https://chat.mikemka.ru/shop/api/v1/products/?format=json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
        const products = myJson['products'];
        console.log(products);
        for (const product of products) {
            addProduct(product['id'], product['title'], product['short_description'], product['thumbnail']);
        }
    });
}

function pageOnload() {
    loadProducts();
}

window.onload = pageOnload;
