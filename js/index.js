let count = 1;
let totalPrice = 0;
let totalDiscount = 0;

document.getElementById("FirstCard").addEventListener('click', function() {
    const productName = document.getElementById("firstName").innerText;
    addProductToList(productName);
    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);
});

document.getElementById("secondCard").addEventListener('click', function() {
    const productName = document.getElementById("secondName").innerText;
    addProductToList(productName);
 
    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);

});

document.getElementById("thirdCard").addEventListener('click', function() {
    const productName = document.getElementById("thirdName").innerText;
    addProductToList(productName);

    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);

});
document.getElementById("fourthCard").addEventListener('click', function() {
    const productName = document.getElementById("fourthName").innerText;
    addProductToList(productName);

    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);

});
document.getElementById("fifthCard").addEventListener('click', function() {
    const productName = document.getElementById("fifthName").innerText;
    addProductToList(productName);

    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);

});
document.getElementById("sixthCard").addEventListener('click', function() {
    const productName = document.getElementById("sixthName").innerText;
    addProductToList(productName);

    const productPrice = parseFloat(this.getAttribute("data-product-price"));
    const productDiscount = 0; 
    updateTotal(productPrice, productDiscount);

});

document.getElementById("couponInput").addEventListener('input', function() {
    const couponInput = document.getElementById("couponInput");
    const couponButton = document.getElementById("coupone");

    if (couponInput.value === "SELL200" && totalPrice >= 200) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }
});


function addProductToList(productName) {
    const productList = document.getElementById("productList");
    const listItem = document.createElement("li");
    listItem.textContent = `${count}. ${productName}`;
    productList.appendChild(listItem);

    count++; 

    updatePurchaseButtonState(); 
}


document.getElementById("coupone").addEventListener('click', function() {
     const couponInput = document.getElementById("couponInput");
 
     if (couponInput.value === "SELL200" && totalPrice >= 200 ) {
         applyDiscount();
     }
 });

 function applyDiscount() {
     const discountPercentage = 0.20; 
 
     totalDiscount = totalPrice * discountPercentage;
 
     const total = totalPrice - totalDiscount;
 
     document.getElementById("price").textContent = totalPrice.toFixed(2);
     document.getElementById("discount").textContent = totalDiscount.toFixed(2);
     document.getElementById("total").textContent = total.toFixed(2);
 
     updatePurchaseButtonState(); 
 }


function updateTotal(price, discount) {
    totalPrice += price;
    totalDiscount += discount;

    const total = totalPrice - totalDiscount;

    document.getElementById("price").textContent = totalPrice.toFixed(2);
    document.getElementById("discount").textContent = totalDiscount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);

    updatePurchaseButtonState(); 
}


function updatePurchaseButtonState() {
    const purchaseButton = document.getElementById("purchase");
    const couponeButton = document.getElementById("coupone");
    if(totalPrice >=200){
     couponeButton.disabled=false
    }else{
     couponeButton.disabled=true
    }

    if (totalPrice > 0) {
        purchaseButton.disabled = false; 
    } else {
        purchaseButton.disabled = true; 
    }
}





document.getElementById("home").addEventListener('click', function() {
     location.reload();
 });

 
