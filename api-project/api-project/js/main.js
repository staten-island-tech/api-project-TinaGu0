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
            arr.forEach((livers) => DOMSelectors.profiles.insertAdjacentHTML("beforeend", 
        `
            <div class="profile">
                <h2>${data.pageProps}</h2>    
                <h3>${data.pageProps}</h3>
                <h3>${data.pageProps}</h3>
                <img src="${data.pageProps}" />
                <h3>${data.pageProps}</h3>
            </div>
        `
        ))};
        cards(data.pageProps.allLivers);

    } catch (error) {
        
    }
};

 getData(URL); 


