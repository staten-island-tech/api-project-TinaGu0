const DOMSelectors = {
    profiles: document.querySelector(".profiles")
}


function cards(arr) {
    arr.forEach((allLivers) => DOMSelectors.profiles.insertAdjacentHTML("beforeend", 
`
    <div class="profile">
        <h2>${allLivers.enName}</h2>    
        <h3>${allLivers.region}</h3>
        <h3>${genshinCharacters.vision}</h3>
        <img src="${allLivers.img}" />
        <h3>${allLivers.height}</h3>
    </div>
`
))};

cards(URL)