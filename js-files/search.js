const cardsArr = JSON.parse(window.localStorage.getItem('airbnb_data'));



const cardsSection = document.querySelector(".cards");


function addDataToHTML(){
    cardsArr.forEach((element, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                            <div id="card-image"><img src=${element.images[0]} alt=""></div>
                            <div>
                                <p id="type">${element.type}</p>
                                <h2 id="name">${element.name}</h2>
                                <hr style="width: 40px; margin-block: 20px;">
                                <p id="desc">${element.persons} guests · ${element.type} · ${element.beds} beds · ${element.bathrooms} bath</p>
                                <p id="amenities">${element.previewAmenities.reduce((prev, curr, index, array) => {
                                    if (index === array.length - 1) {
                                        return prev + `<span>${curr}</span>`;
                                    } else {
                                        return prev + `<span>${curr}</span> · `;
                                    }
                                }, '')}</p>
                                <hr style="width: 40px; margin-block: 20px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <h5 id="rating">${element.rating} <i class="fa-solid fa-star" style="color: #F59E0B;"></i> (300 reviews)</h5>
                                    <h5>
                                    ${
                                        element.price.priceItems[0].title.split(' x ')[0]
                                        // const title = result.price.priceItems[0].title; // This is "₹2,300 x 2 nights"
                                        // const parts = title.split(' x '); // Splitting the title
                                        // const firstPart = parts[0]; // This will be "₹2,300"
                                        // return firstPart;
                                    } 
                                    /night</h5>
                                </div>
                            </div>
                        `
        card.addEventListener("click", ()=>{
            window.localStorage.setItem("activeCardIndex" , index);
            window.location.href= './listings.html';
        })                

        cardsSection.appendChild(card);
    });
    
}

addDataToHTML();