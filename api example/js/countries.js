const loadCountries=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res=>res.json())
    .then(data=>displayCountries(data))
}


loadCountries();
const displayCountries=countries=>{
    const countriesDiv=document.getElementById('countries');
    const div=document.getElementById('div');
    div.classList.add('country')

   countries.forEach(country=>{
        const h3=document.createElement('h3');
       h3.innerText=country.name;
        div.appendChild(h3);
        const p=document.createElement('p');
        p.innerText=country.capital
        div.appendChild(p);
        countriesDiv.appendChild(div);



        console.log(country)
    });

    //for(const country of countries){
      //  console.log(country)
    //}
    //console.log(countries);
}
