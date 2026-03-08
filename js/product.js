function openProduct(name){

let cake=cakes.find(c=>c.name===name);

let product=document.getElementById("product");

document.getElementById("catalog").classList.add("hidden");

product.classList.remove("hidden");

product.innerHTML=`

<img src="${cake.img}">

<h2>${cake.name}</h2>

<p>${cake.desc}</p>

<h3>${cake.price} €</h3>

<button onclick="orderCake('${cake.name}')">Заказать</button>

`;

}
