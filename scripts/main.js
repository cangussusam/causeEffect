const nome = document.querySelector('#name__form')
const zip = document.querySelector('#zip__form')
const street = document.querySelector('#street__form')
const city = document.querySelector('#city__form')
const state = document.querySelector('#state__form')
const country = document.querySelector('#country__form')
const telephone = document.querySelector('#phone__form')
const birthday = document.querySelector('#bday__form')
const email = document.querySelector('#email__form')

let pessoa, number
let pessoas = []
let lista = document.querySelectorAll('.list__li')


function createLi() {
    var li = document.createElement('li')
    li.classList.add('list__li')

    li.textContent = pessoa.name

    document.querySelector('.list__ul').appendChild(li)

    return listas()
}

function transformNumber() {
    return number = telephone.value.replace(/\D/g, '')
}

function addTestPerson() {

    pessoas.push(pessoa = new Person('Samuel Cangussú', '12345-678', 'Rua Moreira', 'São Paulo', 
    'SP', 'Brasil', '1234-5678', '01-01-2001', 'email@email.com'))
    createLi()

    pessoas.push(pessoa = new Person('Rogério Alves', '42421-123', 'Rua Pereira', 'Belo Horizonte', 
    'BH', 'Brasil', '3129-4123', '01-01-1994', 'email@email.com'))
    createLi()

    pessoas.push(pessoa = new Person('Carla Ribeiro', '13244-154', 'Rua dos Anjos', 'Campinas', 
    'SP', 'Brasil', '9131-4123', '01-01-2005', 'email@email.com'))
    createLi()

        
    for(const list of lista) {
        list.addEventListener('click', function(){

            for(var i = 0; i<pessoas.length; i++){
                if(list.innerHTML === pessoas[i].name) {
                    const pessoa = new ViewPerson(pessoas[i])
                    document.querySelector('#table').classList.remove('output__table')

                }
            }
        })
    }
}

addTestPerson()

function listas() {
    return lista = document.querySelectorAll('.list__li')
}

function styleASide(){
    if(pessoas.length>7){
        document.querySelector('.list').style.height = "auto"
    }
}

document.querySelector('.submit__button').onclick = function(event) {
    
    const form =  document.querySelector('.form')

    if(form.checkValidity()) {
        event.preventDefault()

        transformNumber()
        
        pessoas.push(pessoa = new Person(nome.value, zip.value, street.value, city.value, 
            state.value, country.value, number, birthday.value, email.value))
    
        createLi()
        form.reset()
    }

    
    for(const list of lista) {
        list.addEventListener('click', function(){
    
            for(var i = 0; i<pessoas.length; i++){
                if(list.innerHTML === pessoas[i].name) {
                    const pessoa = new ViewPerson(pessoas[i])
                    document.querySelector('#table').classList.remove('output__table')
    
                }
            }
        })
    }

    styleASide()
}
