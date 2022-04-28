// Pack the forEach function into an IIFE
let countryRepository = (function () {
    let countryList = [];
    let apiURL = 'https://restcountries.com/v3.1/all'

    function add(country) {
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

    // Replace document.write with functions like createElement() and appendChild()
    function addListItem(country) {
        let countryList = document.querySelector('.country-list');
        let listCountry = document.createElement('li');
        listCountry.classList.add('group-list-item', 'col-lg-4', 'col-md-6');

        let button = document.createElement('button');
        button.innerText = country.name.common;
        button.classList.add('btn', 'btn-warning', 'btn-block');

        //link buttons to modal container
        button.setAttribute('data-target', '#modal-container');
        button.setAttribute('data-toggle', 'modal');

        listCountry.appendChild(button);
        countryList.appendChild(listCountry);
        button.addEventListener('click', function () {
            showDetails(country);
        });
    }

    // Add loadList function to fetch data from API
    function loadList() {
        return fetch(apiURL).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.forEach(function (item) {
                let country = {
                    name: item.name,
                    capital: item.capital,
                    population: item.population,
                    borders: item.borders,
                    flag: item.flag
                };
                add(country);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    // Add loadDetails function to load the detailed data for a given country
    function loadDetails(item) {
        return fetch(apiURL).then(function (response) {
            return response.json();
        }).then(function () {
            item.name,
                item.capital,
                item.population,
                item.borders,
                item.flag
        }).catch(function (e) {
            console.error(e);
        })
    }

    /* function loadDetails() {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        //Now we add the details to the items
        item.imageUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
    } */

    function showDetails(country) {
        loadDetails(country).then(function () {
            showModal(country);
        });
    }

    function showModal(country) {
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');

        modalTitle.empty();
        modalBody.empty();

        let nameElement = $('<h1>' + country.name.common + '</h1>');

        let capitalElement = $('<p>' + 'Capital: ' + country.capital + ' ' + '\'' + '</p>');

        let populationElement = $('<p>' + 'Population: ' + country.population + ' ' + '</p>');

        let bordersElement = $('<p>' + country.borders + '</p>');

        let flagElement = $('<p>' + country.flag + '</p>');

        /* let flagElement = document.createElement('img');
        imageElement.classList.add('country-img');
        imageElement.src = country.flag; */

        modalTitle.append(nameElement);
        modalBody.append(capitalElement);
        modalBody.append(populationElement);
        modalBody.append(bordersElement);
        modalBody.append(flagElement)
    }

    function find(countryName) {
        let result = countryList.filter(country => country.name.common === countryName);
        console.log(result[0]);
    }

    // The IIFE returns only an object with the same names for keys as values
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails, loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        find: find
    };
})();

/* console.log(countryRepository.getAll()) */

countryRepository.loadList().then(function () {
    countryRepository.getAll().forEach(function (country) {
        countryRepository.addListItem(country);
    });
});






