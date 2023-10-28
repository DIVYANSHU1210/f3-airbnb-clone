const cardsArr = JSON.parse(window.localStorage.getItem('airbnb_data'));



const cardsSection = document.querySelector(".cards");

let locations = [];
function addDataToHTML(){
    cardsArr.forEach((element, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                            <div id="card-image"><img src=${element.images[0]} alt=""></div>
                            <div style = "width : 100%">
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
                                <div style="display: flex; justify-content: space-between; width: 100%;">
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

        const directionsButton = document.createElement("button");
        directionsButton.className = "direction-Btn";
        directionsButton.innerText = "Get Directions";

        directionsButton.addEventListener("click", function(event) {
            event.stopPropagation();
            openDirections(element.lat, element.lng);
        });

        const bookingCostButton = document.createElement("button");
        bookingCostButton.className = "booking-cost";
        bookingCostButton.innerText = "booking-cost";

        bookingCostButton.addEventListener("click", function(event){
            event.stopPropagation();
            openBookingCostBreakdown();
        })


        card.appendChild(directionsButton);

        card.appendChild(bookingCostButton);
        
        



        function openDirections(lat, lng) {
            // Open Google Maps directions in a new tab
            const url = `https://www.google.com/maps/dir//${lat},${lng}`;
            window.open(url, "_blank");
        }


        locations.push([element.name, element.lat, element.lng]);
        card.addEventListener("click", ()=>{
            window.localStorage.setItem("activeCardIndex" , index);
            window.location.href= './listings.html';
        })                

        cardsSection.appendChild(card);
    });
    
}

addDataToHTML();
                //id
var map = L.map('map').setView([locations[0][1], locations[0][2]], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);



for(let i = 0; i<locations.length; i++){
    var marker = new L.marker([locations[i][1], locations[i][2]]).bindPopup(locations[i][0]).addTo(map);
}