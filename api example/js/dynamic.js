const loadCountries=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res=>res.json())
    .then(data=>displayCountries(data))
}
loadCountries();
//const displayCountries=countries=>{
    const countriesDiv=document.getElementById('countries');
    countriesDiv.forEach(country=>{
        console.log(country);

        const div=document.getElementById('div');
    div.classList.add('country')
    div.innerHTML=
    <h3>${country.name}<h3/>
    <button onclick=loadCountryByName('${country.name}')>Details<button/>

        
    });

    const loadCountryByName=name=>{
        const url=`https://restcountries.com/v3.1/name/${name}`
        fetch (url)
        .then(res=res.json())
        .then(data=>console.log(data));
    }
    //const div=document.getElementById('div');
    //div.classList.add('country')


    const displayCountriesDetail=country=>{
        const countryDiv=document.getElementById('country-detail');
        countryDiv.innerHTML=`
      <h5>${country.name}<h5/>
      <p>population:${country.population}<p/>
      <img width="200px" src="{country.flag}">`

    }








    countriesDiv.appendChild(div);
//});


}