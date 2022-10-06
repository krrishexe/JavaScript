const superHeroDiv = document.getElementById('superHero');

console.log("run first");

async function getSuperHero() {
        const response = await fetch('https://superheroapi.com/api/2467543886757166/245',{
                'mode' : 'no-cors'
        });

        return response.json;
        // superHeroDiv.innerHTML = `<img src=${json.message} />`
}

getSuperHero()
.then((json) => {
        console.log(json);
})