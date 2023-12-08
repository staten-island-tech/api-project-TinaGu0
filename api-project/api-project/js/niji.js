
const URL = `https://corsproxy.io/?https://www.nijisanji.jp/_next/data/qn3MdhaKNyN63H2JwZiWb/ja/talents.json`;

async function getData(URL){
    try {
        const response = await fetch(URL); 
        const data = await response.json()
        console.log(data); 
        data.pageProps.allLivers.forEach((livers) => { console.log(livers) 
        });
        module.exports = {data};
    } catch (error) {
        
    }
}
 getData(URL); 

