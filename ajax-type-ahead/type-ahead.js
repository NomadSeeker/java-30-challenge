const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities =[];
    let searchInput = document.querySelector('input');
    let ul = document.querySelector('ul'); 

    function handleSubmit(e) {
        e.preventDefault();
    };

    function findMatches(e) {
      
        ul.innerHTML = '';
        const str = e.target.value.toLowerCase();
        if(!str || str === ' ')
            return;

        const regex = new RegExp(str, 'gi');

        cities.forEach(city => {
            let cityName = city.city;
            let stateName = city.state;
            if(cityName.toLowerCase().includes(str) || stateName.toLowerCase().includes(str)) {
                cityName = cityName.replace(regex, '<mark class="highlight">$&</mark>');
                stateName = stateName.replace(regex, '<mark class="highlight">$&</mark>');
                ul.innerHTML += `<li><div>${cityName}, ${stateName}</div><div class='popu'>${city.population}</div></li>`;
            }
            
        });
    }

    //fetch cities using promises
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => cities.push(...data));

    async function getCities() {
        
        try {
            const response = await fetch(endpoint);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            cities = [...json];
        }catch(error){
            console.error(error);
        }
    }
    getCities();
    
    searchInput.addEventListener('change', findMatches);
    // searchInput.addEventListener('submit', findMatches);