//object literals
const cart=document.getElementById("cart");

//ES6
function addproduct(name, category){
    return {
        name,category
    };
}

var getProduct=addproduct("ip12","smartphone");
console.log(getProduct);

cart.innerHTML=`Product 1: ${getProduct.name}, category ${getProduct.category}`;