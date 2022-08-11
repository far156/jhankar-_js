const loadQuotes=() =>{
    fetch('https://api.kanye.rest/')
    .then (res=>res.json())
    .then(data=>console.log(data))
}

const displayQuote= quote=>{
    console.log(quote.quote)

    const quoteElement=document.getElementById('quote');
    quoteElement.innerText=quote;


}