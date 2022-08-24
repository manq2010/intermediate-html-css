const name = document.querySelector("#username")
const greetMeButton = document.querySelector(".greet-btn")
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener('click', (event) => {
   greetingOutput.innerText = `Hello ${name.value}`;
})

const formElement = document.querySelector('form');

if (formElement) {
    formElement.addEventListener('submit', (event) => {
        const formData = new FormData();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        event.preventDefault();
    })
}

if (req.xhr || req.headers.accept.indexOf('json') !== -1) {
    // return JSON
} else {
    // return HTML
}


const elm = document.getElementById('check-focus-here')
elm.addEventListener('focusin', (event) => {
  console.log(event.target, event.relatedTarget)
  // console.log(elm.contains(event.relatedTarget))
})

elm.addEventListener('focusout', (event) => {
  console.log(event.target, event.relatedTarget)
  console.log(elm.contains(event.relatedTarget))
})

