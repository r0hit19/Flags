let main = document.querySelector('.container');

fetch('https://restcountries.com/v2/all').then(Response => Response.json()).then(data => {
    data.forEach((element, index) => {
        console.log(data[index].flag);
        const card = document.createElement('div');
        card.classList = "card";
        console.log(data[index].flag);

        let d = `
    <img src=${data[index].flag} alt=""/>
    <h2>${data[index].name}</h2>
    <p><b>Population :</b> ${data[index].population}</p>
    <p><b>Region :</b> ${data[index].region}</p>
    <p><b>Capital :</b> ${data[index].capital}</p>
`

        card.innerHTML += d;
        main.appendChild(card);
    });

});



//sort by population
function sortByPopulation() {
    fetch('https://restcountries.com/v2/all').then(Response => Response.json()).then(data => {
        data.sort((a, b) => { return b.population - a.population }).forEach((element, index) => {
            const card = document.createElement('div');
            card.classList = "card";

            let d = `
        <img src=${data[index].flag} alt=""}/>
        <h2>${data[index].name}</h2>
        <p><b>Population :</b> ${data[index].population}</p>
        <p><b>Region :</b> ${data[index].region}</p>
        <p><b>Capital :</b> ${data[index].capital}</p>
    `

            card.innerHTML += d;
            main.replaceChild(card, document.getElementsByClassName("card")[index]);
        })

    })
}
// sortByPopulation();


//sort by Name
function sortByNameDesc() {
    fetch('https://restcountries.com/v2/all').then(Response => Response.json()).then(data => {
        data.sort((a, b) => {
            if (a.name > b.name) return -1;
            else if (a.name < b.name) return 1;
            else return 0;
        }).forEach((element, index) => {
            console.log(data[index].name);
            const card = document.createElement('div');
            card.classList = "card";

            let d = `
        <img src=${data[index].flag} alt=" "/>
        <h2>${data[index].name}</h2>
        <p><b>Population :</b> ${data[index].population}</p>
        <p><b>Region :</b> ${data[index].region}</p>
        <p><b>Capital :</b> ${data[index].capital}</p>
    `

            card.innerHTML += d;
            main.replaceChild(card, document.getElementsByClassName("card")[index]);
        })
    })
}
// sortByNameDesc();
