const makeRandColor = function() {
 let r = Math.floor(Math.random() * 255);
 let g = Math.floor(Math.random() * 255);
 let b = Math.floor(Math.random() * 255);
 return `rgb(${r}, ${g}, ${b})`
}




for(let i = 0; i < 15; i++){
       let header = document.createElement("h1")
        header.innerHTML = 'Click Me Daddy'
        document.body.appendChild(header)
}


let buttons = document.querySelectorAll('button');
let h1s = document.querySelectorAll('h1');


const colorize = function() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}



for (let button of buttons){
    button.addEventListener('click', colorize)
}

for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}


