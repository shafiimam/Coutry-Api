fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayData(data))

const displayData = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
                <h3 clas="country-name">${country.name}</h3>
                <img class="flag" src="${country.flag}">
                <p>${country.capital}</p>
                <button onclick="displayCountryDetails('${country.name}')">show details</button>
            `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    })

}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderCountryInformation(data[0]))
}

const renderCountryInformation = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h1>Name:${country.name}</h1>
        <p>Population:${country.population}</p>
        <p>Area:${country.area}</p>
    `;
}