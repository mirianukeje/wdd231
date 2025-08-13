import { fetchJson } from './fetcher.js';
import { renderProducts } from './products.js';

const productsContainer = document.querySelector('#products');

async function displayProducts() {
    try {
        if (productsContainer) {
            const products = await fetchJson('data/products.json');
            renderProducts(products, productsContainer);
        }
    } catch (error) {
        console.error('Error loading the products:', error);
    }
}

displayProducts();