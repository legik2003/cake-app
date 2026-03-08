function openBuilder(){

document.getElementById("catalog").classList.add("hidden");
document.getElementById("product").classList.add("hidden");

let builder=document.getElementById("builder");

builder.classList.remove("hidden");

builder.innerHTML=`

<h2>Конструктор торта</h2>

<p>Выберите коржи и начинку</p>

<button onclick="selectLayer('шоколад')">Шоколад</button>
<button onclick="selectLayer('ваниль')">Ваниль</button>

<button onclick="sendBuilder()">Заказать</button>

`;

}

let builderCake=[];

function selectLayer(layer){

builderCake.push(layer);

alert("Добавлено: "+layer);

}

function sendBuilder(){

Telegram.WebApp.sendData(

JSON.stringify({

type:"builder",

layers:builderCake

})

);

}
