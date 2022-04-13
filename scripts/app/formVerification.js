const inputs = document.querySelectorAll('.form__input')

inputs.forEach(input => {

    input.addEventListener('blur', (event => {
        validation(event.target)
    }))
    
})

function validation(input) {
    const dataType = input.dataset.type

    if(validators[dataType]){
        validators[dataType](input)
    }

    if(input.validity.valid){
        input.parentElement.querySelector('.error__mensage').innerHTML = ''
    }else{
        input.parentElement.querySelector('.error__mensage').innerHTML = showError(dataType, input)
    }
}

const validators = {
    bday:input => bdayValidity(input),
    zip:input => zipValidity(input),
    country:input => countryValidity(input),
}

function showError(inputType, input){

    let mensage = ''

    typeOfErrors.forEach(error => {
        if(input.validity[error]) {
            mensage = errorMensages[inputType][error]
        }
    })

    return mensage    
}

function bdayValidity(input) {

    const date = new Date
    const receivedDate = new Date(input.value)
    let mensage = ''

    if(date <= receivedDate){
        mensage = 'A data digitada não é válida'    
    }

    input.setCustomValidity(mensage)
}

function zipValidity(input){
    const zip = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${zip}/json/`

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(zipData => {
                zipFields(zipData)
            })
        }
}

function zipFields(zipData){

    document.querySelector('[data-type="street"]').value = zipData.logradouro
    document.querySelector('[data-type="city"]').value = zipData.localidade
    document.querySelector('[data-type="state"]').value = zipData.uf

}

function countryValidity(input){

    const options = document.querySelectorAll('option')
    let optionFound = false,
        mensage = ''

    options.forEach(option => {
        
        for(let i = 0; i<options.length; i++){

            if(option.value == input.value){
                optionFound = true
                break
            }
        }
    })

    if(!optionFound){
        mensage = 'Selecione um país válido'
    }else{
        mensage = ''
    }
    input.setCustomValidity(mensage)

}

const typeOfErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const errorMensages = {

    name: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    zip: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido.',
        customError: 'Não foi possível buscar o CEP.'
    },
    street: {
        valueMissing: 'O campo de rua não pode estar vazio.'
    },
    city: {
        valueMissing: 'O campo de cidade não pode estar vazio.'
    },
    state: {
        valueMissing: 'O campo de estado não pode estar vazio.'
    },
    country: {
        valueMissing: 'O campo de país não pode estar vazio.',
        customError: 'Selecione um país válido'

    },
    phone: {
        valueMissing: 'O campo de telefone não pode estar vazio.',  
        patternMismatch: 'O Telefone digitado não é válido'
    },
    bday: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'A data digitada não é válida'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    }

}
