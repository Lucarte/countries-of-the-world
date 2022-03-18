// pack the forEach function into an IIFE
let countryRepository = (function () {
    let countryList = [
        {
            name: 'Colombia',
            capital: 'Bogota',
            population: 80000000,
            borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN']
        },
        {
            name: 'USA',
            capital: 'Washington D.C.',
            population: 330000000,
            borders: ['CAN', 'MEX']
        },
        {
            name: 'Germany',
            capital: 'Berlin',
            population: 11000,
            borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE']
        }
    ];

    function add (country) {
        if (
            typeof country === 'object' && 
            'name' in country &&
            'capital' in country &&
            'population' in country &&
            'borders' in country
        ) {
            countryList.push(country);
        } else {
        console.log('this does not belong to country');    
        }
    }

    function getAll() {
        return countryList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

console.log(countryRepository.getAll())

// for function
/* for (let i=0; i < countryList.length; i++) {    
    if (countryList[i].population >= 100000000) {
        document.write (`<p>${countryList[i].name} (capital: ${countryList[i].capital}) ${"--Wow! This one is one of the ten most populated countries in the world!!!"} </p>`);
    } else if (countryList[i].population < 72000) {
        document.write (`<p>${countryList[i].name} (capital: ${countryList[i].capital}) ${'--This is a tiny country!!!'} </p>`);
    } else {
        document.write (`<p>${countryList[i].name} (capital: ${countryList[i].capital}) ${'--This is an average populated country'} </p>`);
};}  */


// forEach function
/* document.write('===COUNTRIES OF THE WOLRD===');
repository.forEach ( country => {
    if (country.population >= 100000000) {
    document.write (`<p>${country.name} (capital: ${country.capital}) ${"--Wow! This one is one of the ten most populated countries in the world!!!"} </p>`);
    } else if (country.population < 72000) {
        document.write (`<p>${country.name} (capital: ${country.capital}) ${'--This is a tiny country!!!'} </p>`);
    } else {
        document.write (`<p>${country.name} (capital: ${country.capital}) ${'--This is an average populated country'} </p>`);
}}); */

countryRepository.getAll().forEach(function(country) {
    /* countryRepository.addListItem(country); */
});



 
