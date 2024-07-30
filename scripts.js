

document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('menu-container');

    if (flexContainer) {
        const items = [
            { name: "tasty and healthy", price: "$15.99", oldPrice: "$20.99", image: "./images/menu-1.png" },
            { name: "tasty and healthy", price: "$4.00", oldPrice: "$5.00", image: "./images/menu-2.png" },
            { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-3.png" },
            { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-4.png" },
            { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-5.png" },
            { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-6.png" }
        ];

        items.forEach(item => {
            const box = document.createElement('div');
            box.classList.add('box');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            const h3 = document.createElement('h3');
            h3.textContent = item.name;

            const priceDiv = document.createElement('div');
            priceDiv.classList.add('price');
            priceDiv.innerHTML = `${item.price} <span>${item.oldPrice}</span>`;

            const addButton = document.createElement('a');
            addButton.href = "#";
            addButton.classList.add('btn');
            addButton.textContent = "add to cart";

            box.appendChild(img);
            box.appendChild(h3);
            box.appendChild(priceDiv);
            box.appendChild(addButton);

            flexContainer.appendChild(box);
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <a href="index.html">Home</a>
            <a href="login.html">Login</a>
            <a href="about.html">About</a>
            <a href="menu.html">Menu</a>
           
            <a href="review.html">Reviews</a>
            <a href="contact.html">Contact</a>
        `;
    }
});

