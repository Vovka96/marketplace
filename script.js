let productsGrid = document.getElementById('product-grid');
let productsArray = [];
let url = 'https://my-json-server.typicode.com/Vovka96/marketplace';

fetch (url + '/products')
    .then (async function(response) {
        let products = await response.json()
        productsGrid.innerHTML = null;
        products.forEach(p => {
            productsArray.push(p);
            let pElem = document.createElement('div');
            pElem.classList.add('product')
            pElem.innerHTML = `
            <h2 class='product-name>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
            <p class='product-price'><b>Price: </b>${p.price}$</p>
            <p class='product-description'><b>Description: </b>${p.description}</p>
            <a href='userProfile.html'>Seller profile</a>
            <button>Buy</button>
            `;
            productsGrid.append(pElem);
        });
    })