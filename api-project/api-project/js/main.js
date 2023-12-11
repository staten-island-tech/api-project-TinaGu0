import "../css/style.css"
import "./themes"
import "./niji"



const DOMSelectors = {
    profiles: document.querySelector(".profiles")
}


const URL = `https://corsproxy.io/?https://www.nijisanji.jp/_next/data/qn3MdhaKNyN63H2JwZiWb/ja/talents.json`;

async function getData(URL){
    try {
        const response = await fetch(URL); 
        const data = await response.json();
        console.log(data); 
        data.pageProps.allLivers.forEach((livers) => { console.log(livers)});

        function cards(arr) {
            arr.forEach((data) => DOMSelectors.profiles.insertAdjacentHTML("beforeend", 
        `
            <div class="profile">
                <h2>${data.pageProps.allLivers.name}</h2>    
                <h3>${data.pageProps.allLivers.enName}</h3>
                <h3>${data.pageProps.allLivers.name}</h3>
    /*           <img src="${data.pageProps.allLivers.images.head}" /> */
                <h3>${data.pageProps.allLivers.subscriberCount}</h3>
            </div>
        `
        ))};
        cards(ee);

    } catch (error) {
        
    }
};

 getData(URL); 



