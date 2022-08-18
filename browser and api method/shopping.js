const addItem=()=>{
    const nameField=name.nameField=document.getElementById('product-name');
    const name=nameField.value;


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
    cart[name]=1;
    const cartStringfield=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfield)
}