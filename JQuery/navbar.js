$(document).ready(function() {
    const items = [
        { name: "tasty and healthy", price: "$15.99", oldPrice: "$20.99", image: "./images/menu-1.png" },
        { name: "tasty and healthy", price: "$4.00", oldPrice: "$5.00", image: "./images/menu-2.png" },
        { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-3.png" },
        { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-4.png" },
        { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-5.png" },
        { name: "tasty and healthy", price: "$4.50", oldPrice: "$5.50", image: "./images/menu-6.png" }
    ];

    const $flexContainer = $('#menu-container');

    items.forEach(item => {
        const $box = $('<div>').addClass('box');

        const $img = $('<img>').attr('src', item.image).attr('alt', item.name);
        const $h3 = $('<h3>').text(item.name);
        const $priceDiv = $('<div>').addClass('price').html(`${item.price} <span>${item.oldPrice}</span>`);
        const $addButton = $('<a>').attr('href', '#').addClass('btn').text('add to cart');

        $box.append($img, $h3, $priceDiv, $addButton);
        $flexContainer.append($box);
    });

    const $navbar = $('#navbar');
    $navbar.html(`
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="menu.html">Menu</a>
        <a href="review.html">Reviews</a>
        <a href="contact.html">Contact</a>
    `);
});