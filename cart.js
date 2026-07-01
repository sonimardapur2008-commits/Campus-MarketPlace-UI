let user = localStorage.getItem("user");
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

let app = document.getElementById("app");

if(user){
    document.getElementById("userText").innerText = user;
}


document.getElementById("cartCount").innerText = cart.length;


if(localStorage.getItem("dark") === "on"){
    document.body.classList.add("dark");
}


if(!user){
    app.innerHTML = `
    <div class="login-block">
        <h2>Please login first 🔐</h2>
        <button onclick="login()">Login</button>
    </div>`;
}
else if(cart.length === 0){
    app.innerHTML = `
    <div class="empty">
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" style="width:220px;">
        <h2>Your Cart is Feeling Light 🛒</h2>
        <p style="color:gray;">Add something cool 😌</p>
        <button onclick="window.location.href='../main/index.html'" 
       style="padding:10px 20px;background:#f37d1c;color:white;border:none;border-radius:5px;">
    🛍️ Shop Now
</button>
    </div>`;
}
else {
    let html = "";
    let total = 0;

    cart.forEach((item,i)=>{
        total += item.price * (item.quantity || 1);

        html += `
        <div class="item">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity || 1}</p>
            </div>
            <span class="remove" onclick="removeItem(${i})">Remove</span>
        </div>`;
    });

    app.innerHTML = `
    <div class="main">
        <div class="cart-box" style="flex:2;">
            <h3>My Cart (${cart.length})</h3>
            ${html}
        </div>

        <div class="price-box" style="flex:1;">
            <h3>Total</h3>
            <p>Items: ${cart.length}</p>
            <h2>₹${total}</h2>
        </div>
    </div>`;
}

/* FUNCTIONS */
function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", 
        document.body.classList.contains("dark") ? "on" : "off"
    );
}

function toggleMenu(e){
    e.stopPropagation();
    let menu = document.getElementById("dropdown");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function logout(){
    localStorage.removeItem("user");
    location.reload();
}

function goAccount(){
    window.location.href = "../Account/account.html";
}

function goCart(){
    window.location.href = "cart.html";
}

function removeItem(i){
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function goBack(){
    window.location.href = "index.html";
}

function login(){
    let name = prompt("Enter name:");
    if(name){
        localStorage.setItem("user", name);
        location.reload();
    }
}

/* CLICK OUTSIDE CLOSE */
window.onclick = function(){
    let menu = document.getElementById("dropdown");
    if(menu) menu.style.display = "none";
}
