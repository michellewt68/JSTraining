//ambil element
const products=document.getElementById('products')
const allProducts ="https://fakestoreapi.com/products"

function createNode(element){
    return document.createElement(element)
}

function append(parent, elem){
    return parent.appendChild(elem)   
}

fetch(allProducts)
.then(response=>response.json())
.then((json)=>{
    console.log(json)
    json.map((product)=>{
        let li=createNode("li")
        let img=createNode("img")
        let span1=createNode("span")
        let span2=createNode("span")

        img.setAttribute("width","200")

        span1.innerHTML=`${product.title}`
        img.src=product.image;
        span2.innerHTML=`Price: ${product.price}`

        append(li,img)
        append(li,span)
        append(products,li)
    })
})
.catch((error)=>console.log(error))