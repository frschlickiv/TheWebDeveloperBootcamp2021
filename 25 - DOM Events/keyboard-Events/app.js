document.querySelector('button').addEventListener('click', function(e){
    console.log(e)
})

const input  = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e.key)
    console.log(e.code)
})

// input.addEventListener('keyup', function() {
//     console.log('KEYUP')
// })


// ************ Parameters in the eventListener are basically a variable representation of the event object.
// ************ The code above can help you see the different key/values of an object in the console.