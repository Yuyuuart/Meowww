// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart =  document.querySelector(".kingdom2");
let closeCart =  document.querySelector("#close-cart");

//open
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close
closeCart.onclick = () => {
    cart.classList.remove("active");
}


//-----------//

