const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const superButtonDiv = document.getElementById("superButton");
const searchNewHeroDiv = document.getElementById("searchNewHero");
const inputSuperHeroDiv = document.getElementById("inputSuperHero");
const superButtonTextDiv = document.getElementById("superButtonText")

const newRandom = (num) => {
        return Math.floor(Math.random() * num + 1);
}

const getSuperHero = (id) => {
		var name = inputSuperHeroDiv.value;
		console.log(name);
		console.log(name.length);

        let url
		let condition = (name.length == 0);
		console.log(condition);

        if (condition) {
                url = `${BASE_URL}/${id}`
        }else{
                url = `${BASE_URL}/search/${name}`
        }

        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
				if (!condition){
					json = json.results[0]
				}
                const name  = `<h1>${json.name}</h1>`
                const intelligence  = `<p>${json.powerstats.intelligence}</p>`
                const strength  = `<p>${json.strength}</p>`
				superButtonDiv.innerHTML = `<img src="${json.image.url}" height =200px width = 200px />`
				superButtonTextDiv.innerText = `NickName :${name} , Name :${json.biography["full-name"]},Intelligence: ${intelligence}, Strength :${strength}`
            })


        // name 👉 base_url/search/batman
        // json.results[0].image.url

        // if we're seacrhing for a new superhero then , the json file is giving us an array of results , so we need to get the first result only , thats why json.results[0]

        // id: 👉 base_url/id
        // json.image.url

}

// superButtonDiv.onclick = () => getSuperHero(newRandom(731));    
searchNewHeroDiv.onclick = () => getSuperHero(newRandom(731),name);

