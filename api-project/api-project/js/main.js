import "../css/style.css"


const URL = `https://api.quotable.io/random`;

async function getData(URL){
    try {
        //requesting a response REST API's 
        const response = await fetch(URL); 
        if(response.status != 200) {
            throw new Error(response.statusText);
        }
        console.log(error, ":(");
        //convert response to json 
        const data = await response.json()
        console.log(response); 
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        
    }
}
 getData(URL); 




console.log("hi")