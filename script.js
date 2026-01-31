function orderNow(product, price) {
    let phone = "916000107631"; // your WhatsApp number
    let message = `Hello, I want to buy ${product} for ₹${price}`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
