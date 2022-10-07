const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getSuperHero = (id) => {
        // name 👉 base_url/search/batman
        // json.results[0].image.url
        // id: 👉 base_url/id
        // json.image.url
        fetch(`${BASE_URL}/${id}`)
                .then(response => response.json())
                .then(json => {
                        console.log(json)
                        document.querySelectorAll('body').innerHTML += `<img src="${json.image.url}" height =200px width = 200px />`
        })
}
getSuperHero(245);