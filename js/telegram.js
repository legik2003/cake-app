Telegram.WebApp.expand();

function orderCake(name){

Telegram.WebApp.sendData(

JSON.stringify({

type:"cake",

name:name

})

);

}
