const BASE_URL = 'http://localhost:9000/'

function subscribeToFormAddTaskSubmit(){
    const form = document.getElementById('form-register')
    form.addEventListener('submit', onSubmitFormSentInfo)
}

function onSubmitFormSentInfo(event){
    event.preventDefault()
    const nombre = document.getElementById('nombre-usuario').value
    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value
    const campos = { nombre, email, pass }
    sendInfo(campos)
        .then(console.log)
        .catch(console.error)
}

function sendInfo(campos){
    return fetch(`${BASE_URL}users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campos)
    })
        .then(response => response.json())
}


window.addEventListener('load', function(){
    subscribeToFormAddTaskSubmit()
})