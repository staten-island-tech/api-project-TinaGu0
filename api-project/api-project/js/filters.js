
const DOMSelectors = {
    profiles: document.querySelector(".profiles"),
    meow: document.querySelectorAll("#meow"),
    woof: document.querySelector("#woof"),
    everybody: document.querySelector("#everybody"),
};


const URL = `https://corsproxy.io/?https://www.nijisanji.jp/_next/data/qn3MdhaKNyN63H2JwZiWb/ja/talents.json`;

async function getData(URL){
    try {
        const response = await fetch(URL); 
        const data = await response.json();
        console.log(data); 
        data.pageProps.allLivers.forEach((livers) => { console.log()});
        const link = "https://www.nijisanji.jp"

        function cards(arr) {
            arr.forEach((livers) => DOMSelectors.profiles.insertAdjacentHTML("beforeend", 
        `
            <div class="profile">
                <h2>${livers.enName}</h2>    
                <h3>${livers.name}</h3>
                <h3>Subscribers: ${livers.subscriberCount}</h3>
                <img src="${link}${livers.images.head.url}" class="img"/>
                <h3>${livers.profile.affiliation}</h3>
            </div>
        `
        ))};
        cards(data.pageProps.allLivers);
        
        DOMSelectors.meow.forEach((btn)=> btn.addEventListener("click", function(){
            let arrays = btn.textContent
            let newArr = data.pageProps.allLivers.filter((pp)=> pp.profile.affiliation.includes(arrays))
            remove();
            cards(newArr);
        }));

        DOMSelectors.everybody.forEach((everybody)=> everybody.addEventListener("click", function() {
            remove();
            cards(data.pageProps.allLivers);
        }));


    } catch (error) {
        
    }
};

 getData(URL); 


 function remove() {
    const div = document.querySelectorAll(".profile");
    div.forEach((bye)=> bye.remove());
};



 export {DOMSelectors};