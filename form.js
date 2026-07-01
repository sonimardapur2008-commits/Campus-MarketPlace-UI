
function openForm(category) {
    window.location.href = '../SellForm/SellForm.html?category=' + encodeURIComponent(category);
}


window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    if(category) {
        document.getElementById('category').value = category;
        document.getElementById('selectedCategory').innerText = "Selected Category: " + category;
    }
});


function saveProduct(event) {
    event.preventDefault();

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = function () {

        const product = {
            name: document.getElementById("itemName").value,
            price: document.getElementById("price").value,
            seller: document.getElementById("sellerName").value,
            email: document.getElementById("email").value,
            contact: document.getElementById("contact").value,
            room: document.getElementById("room").value,
            age: document.getElementById("age").value,
            category: document.getElementById("category").value.toLowerCase().trim().replace(/\s/g, ""),
            image: reader.result
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];

        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));

        // 🔥 category ke hisaab se redirect
        let categoryPage = product.category.toLowerCase().replace(/\s/g, "") + ".html";

        window.location.href = "../categories/" + categoryPage;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image!");
    }
}
      

        
