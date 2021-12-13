
let button = document.querySelector('button')
let h1 = document.querySelector('h1')



button.addEventListener('click', () => {
  
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
 
    let newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor

    if (r + g + b < 150 ){
        h1.style.color = 'white'
    } else {
        h1.style.color = 'black'
    }
})