const getshowID = document.getElementById('demo');
const kanyeaApiLoadQuate = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => getshowID.innerText = data.quote)
}
