
const nameS = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (nameS.value === '' || nameS.value == null) {
        messages.push('Name is required')
    }

    if (email.length <= 6) {
        messages.push('email has to be longer than 6 characters')
    }
    if (email.length >= 20) {
        messages.push('email has to be less that 20 characters')
    }
    if(messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})
