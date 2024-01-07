import { DOMSelectors } from "./dom";
import "../css/blur.css";
import "./filters"
 
 //lowkey just trying this for funsies, ignore for grading (this includes blur.css)
 
const URL = `https://corsproxy.io/?https://www.nijisanji.jp/_next/data/qn3MdhaKNyN63H2JwZiWb/ja/talents.json`;
 function moreInfo() {
    const moreInfo = document.querySelectorAll("#showMore");
    moreInfo.forEach(function(button) {
        //add blur and make card 
        button.addEventListener("click", function() {
            if (DOMSelectors.blur.classList.contains("notBlur")) {
                DOMSelectors.blur.classList.add("block");
                DOMSelectors.blur.classList.remove("notBlur");
                let vtuber = button.textContent
                                
                function moreInfoCard() {
                    if (DOMSelectors.blur.classList.contains("block")) {
                        async function beegInfo(URL){
                            try {
                                const response = await fetch(URL); 
                                const data = await response.json();
                                const link = "https://www.nijisanji.jp"                
                                function one(arr) {
                                    arr.forEach((livers) => DOMSelectors.singleCard.insertAdjacentHTML("afterbegin", 
                                `
                                        <div class="aboveAll">
                                        <h2>✦ . 　⁺ 　 . ✦ . 　⁺ 　 . ✦</h2>
                                            <h3>English Name: ${livers.enName}</h3>    
                                            <h3>Jpn Name: ${livers.name}</h3>
                                            <h3>Subscribers: ${livers.subscriberCount}</h3>
                                                <img src="${link}${livers.images.head.url}" class="img" alt="Picture of ${livers.enName}"/>
                                            <h3>Sector: ${livers.profile.affiliation}</h3>
                                            <p>Order by EN Name : ${livers.orderByEnName}</p>
                                            <p>Order by Ruby : ${livers.orderByRuby}</p>
                                            <p>Order by ID :${livers.id}</p>
                                            <button id="byebye">Close</button>
                                            <h2>✦ . 　⁺ 　 . ✦ . 　⁺ 　 . ✦</h2>
                                        </div>
                                `
                                ))};
                                let person = data.pageProps.allLivers.filter((pp)=> pp.name === vtuber)
                                one(person);
                                byebye();
                                

                        } catch (error) {
                            console.log(error);
                            alert("MASSIVE SKILL ISSUE :skull:")
                        }

                    };
                    beegInfo(URL);
                    } else{
                        console.log("nvm bro");
                    }
                };

                moreInfoCard();
            }   
            else {}
        });

    
    });
};

 
function byebye() {
    const bye = document.querySelector("#byebye") 
    bye.addEventListener("click", function(){
    bye.parentElement.remove();
    DOMSelectors.blur.classList.add("notBlur");
    DOMSelectors.blur.classList.remove("block");
});        
}; 

export {moreInfo}