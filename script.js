document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    document.querySelector('.cart-btn').addEventListener('click', function() {
        document.querySelector('.cart-container').classList.toggle('active');
    });

    document.querySelector('.close-cart').addEventListener('click', function() {
        document.querySelector('.cart-container').classList.remove('active');
    });

    let cartItems = [];

    function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartEmptyMessage = document.querySelector('.cart-empty');

        cartItemsContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartEmptyMessage.style.display = 'block';
        } else {
            cartEmptyMessage.style.display = 'none';
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = item;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.getAttribute('data-item');
            cartItems.push(item);
            updateCart();
        });
    });

    const searchBar = document.getElementById('search-bar');
    const searchButton = document.querySelector('.search-icon');

    searchButton.addEventListener('click', function() {
        const query = searchBar.value;
        alert(`Searching for: ${query}`);
    });
});
