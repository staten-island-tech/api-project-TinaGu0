import "../css/style.css"
import "./themes"
import "./niji"



const DOMSelectors = {
    profiles: document.querySelector(".profiles")
}
 
function cards(arr) {
    arr.forEach((allLivers) => DOMSelectors.profiles.insertAdjacentHTML("beforeend", 
`
    <div class="profile">
        <h2>${allLivers.name}</h2>    
        <h3>${allLivers.enName}</h3>
        <h3>${genshinCharacters.vision}</h3>
        <img src="${allLivers.head}" />
        <h3>${allLivers.subscriberCount}</h3>
    </div>
`
))};

cards(URL)  



