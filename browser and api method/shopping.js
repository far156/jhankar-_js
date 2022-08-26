
const displayLocalStorageCart=()=>{
const cart=getCart();
for (const name in cart){
    displayProduct(name);

}
}

const placeOrder=()=>{
    document.getElementById('products').textContent='';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();























const addItem=()=>{
    const nameField=name.nameField=document.getElementById('product-name');
    const name=nameField.value;
    if(!name){
        return;
    }
    //display in ui
    displayProduct(name);

    //add to local storage
    addProductTocart(name);


    nameField.value='';

}
const displayProduct=name=>{
    const ul=document.getElementById('products')
    const li=document.getElementById('li');
    li.innerText=name;
    ul.appendChild(li);


}
const getCart=()=>{
    localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);

    }
    else{
        cartObj={};
    }
    return cartObj;

}
const addProductTocart=name=>{
    const cart=getCart();
    if(cart[name]){
        cart[nmae]=cart[name]+1;
    }
    cart[name]=1;
    const cartStringfield=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfield)
}