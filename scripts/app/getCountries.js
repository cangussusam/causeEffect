function getCountries(lang = 'pt-br') {
    const A = 65
    const Z = 90
    const countryName = new Intl.DisplayNames([lang], { type: 'region' });
    const countries = {}
    for (let i = A; i <= Z; ++i) {
        for (let j = A; j <= Z; ++j) {
            let code = String.fromCharCode(i) + String.fromCharCode(j)
            let name = countryName.of(code)
            if (code !== name) {
                countries[code] = name
            }
        }
    }
    return Object.values(countries)
}


function createCountryList() {

    getCountries().forEach(country => {

        const option = document.createElement('option')
        option.value = country
        document.querySelector('#countries').appendChild(option)
    })
}


createCountryList()
