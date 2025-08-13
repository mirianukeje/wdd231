// products.js - Updated to render product cards with modal ordering

export function renderProducts(products, container) {
    container.innerHTML = '';  // Clear existing content

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = `Image of ${product.name}`;
        img.classList.add('product-photo');

        const nameEl = document.createElement('h3');
        nameEl.textContent = product.name;
        nameEl.classList.add('product-name');

        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = product.description;
        descriptionEl.classList.add('product-description');

        const priceEl = document.createElement('p');
        priceEl.innerHTML = `<strong>Price:</strong> $${product.price.toFixed(2)}`;
        priceEl.classList.add('product-price');

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Order Now';
        buyButton.classList.add('btn', 'product-buy-btn');
        buyButton.addEventListener('click', () => {
            openOrderModal(product);
        });

        card.appendChild(img);
        card.appendChild(nameEl);
        card.appendChild(descriptionEl);
        // card.appendChild(priceEl);
        card.appendChild(buyButton);

        container.appendChild(card);

        // Create modal for this product
        createProductModal(product, container.parentElement);
    });
}

function createProductModal(product, parentContainer) {
    const modal = document.createElement('dialog');
    modal.id = `modal-product-${product.id}`;

    modal.innerHTML = `
        <div class="mod-header">
            <h3 id="title-product-${product.id}">Order ${product.name}</h3>
            <button class="close-btn">❌</button>
        </div>
        <div id="desc-product-${product.id}" class="product-order-content">
            <p><strong>${product.name}:</strong> $${product.price.toFixed(2)}</p>
          
            <p><strong>To Order:</strong></p>
            <p>Call us at: <strong>(555) 123-456</strong></p>
            <p>Please reference Product ID: <strong>${product.id}</strong> when calling.</p>
            <p>Our customer service team is available Monday-Friday, 9 AM - 6 PM EST.</p>
        </div>
    `;

    // Add close functionality
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });

    parentContainer.appendChild(modal);
}

function openOrderModal(product) {
    const modal = document.getElementById(`modal-product-${product.id}`);
    if (modal) {
        modal.showModal();
    }
}
