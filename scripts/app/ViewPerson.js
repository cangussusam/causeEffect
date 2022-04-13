
const nome = document.querySelector('#name__output')
const zip = document.querySelector('#zip__output')
const street = document.querySelector('#street__output')
const city = document.querySelector('#city__output')
const state = document.querySelector('#state__output')
const country = document.querySelector('#country__output')
const telephone = document.querySelector('#phone__output')
const birthday = document.querySelector('#bday__output')
const email = document.querySelector('#email__output')


class ViewPerson {

    constructor(person) {


        this.person = person

        nome.innerHTML = person.name
        zip.innerHTML = person.zip
        street.innerHTML = person.street
        city.innerHTML = person.city
        state.innerHTML = person.state
        country.innerHTML = person.country
        telephone.innerHTML = person.telephone
        birthday.innerHTML = person.birthday
        email.innerHTML = person.email

    }
    
    
}