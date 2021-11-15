
//const { listenerCount } = require("process");

let select = document.querySelector('select');
//const li = document.querySelector('ul');
const h1 = document.querySelector('h1');
const main = document.querySelector('main');
//const option = document.querySelector('option');
select.onchange = function() {
    const choice = select.value;
    h1.textContent = choice;
    main.innerHTML = "toytoaster.html";
}

function getHTML (choice) {
    choice.toLowercase();
    var arr = choice.split(" ");
    let currentLink = "";
    for(let i = 0; i < arr.length(); i ++) {
        currentLink = currentLink + arr[i];
    } 
    currentLink = currentLink + ".html";
}

