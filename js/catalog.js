function showCatalog(cat){

let catalog=document.getElementById("catalog");

catalog.classList.remove("hidden");

document.getElementById("product").classList.add("hidden");
document.getElementById("builder").classList.add("hidden");

let html="<div class='catalog'>";

cakes.filter(c=>c.category===cat).forEach(c=>{

html+=`

<div class="card" onclick="openProduct('${c.name}')">

<img src="${c.img}">

<div class="card-body">

<h4>${c.name}</h4>

<div class="price">${c.price} €</div>

</div>

</div>

`;

});

html+="</div>";

catalog.innerHTML=html;

}
