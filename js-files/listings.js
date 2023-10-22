const cardsArr = JSON.parse(window.localStorage.getItem('airbnb_data'));
const index = window.localStorage.getItem("activeCardIndex");

const activeCard = cardsArr[index];






document.querySelector('.title').textContent = activeCard.name;

document.querySelector('.top-desc').innerHTML = `
<p><i class="fa-regular fa-star" style="color: #d71952;"></i> ${activeCard.rating} · </p>
<p class="review-count">${activeCard.reviewsCount} reviews · </p>
<p>${activeCard.isSuperhost ? '<i class="fa-solid fa-medal" style="color: #d71952;"></i> Superhost ·' : ''}</p>
<p>${activeCard.name}</p>
`


document.getElementById('image').innerHTML = `
    <div class="left">
        <img src="${activeCard.images[0]}" alt="Place">
    </div>
    <div class="right" style="width:45%">
        <img src="${activeCard.images[1]}" alt="Place">
        <img src="${activeCard.images[2]}" alt="Place">
        <img src="${activeCard.images[3]}" alt="Place">
        <img src="${activeCard.images[4]}" alt="Place">
    </div>
`

document.getElementById("properties").innerHTML = `
<p>${activeCard.persons} guests · </p>
<p>${activeCard.bedrooms} bedroom · </p>
<p>${activeCard.beds} bed · </p>
<p>${activeCard.bathrooms} bath</p>
`

const profile = document.getElementById("profile-pic");

profile.innerHTML = `
<img src= ${activeCard.hostThumbnail} alt="" class="rounded-image">
`

if(activeCard.isSuperhost){
    const baj = document.createElement("img");
    baj.id = "badge";
    baj.src = "./images/Airbnb Superhost Badge.png";
    profile.appendChild(baj);
}



document.getElementById('sleep').innerHTML = `
        <img src="${activeCard.images[0]}" alt="">
        <strong><p>${activeCard.bedrooms} Bedroom</p><strong>
        <p style="font-size: 13px;">${activeCard.beds} queen bed</p>
`

console.log(document.getElementById('sleep'));



document.querySelector(".host>.top").innerHTML = `
<img src="${activeCard.hostThumbnail}" alt="">
<div class="info">
    <h4>Hosted by Ghazal</h4>
    <p>Joined May 2021</p>
</div>
`


document.querySelector(".reviews>.heading>h2").textContent = `
    ${activeCard.rating} · ${activeCard.reviewsCount} reviews
`


document.querySelector(".card").innerHTML = `
                <div class="price-and-ratings" style="display: flex; justify-content: space-between;">
                    <p id="price">${activeCard.price.priceItems[0].title.split(' x ')[0]} /night</p>
                    <p id="rating-and-reviews"><i class="fa-regular fa-star" style="color: #d71952;"></i> ${activeCard.rating} · <span style="text-decoration: underline;">${activeCard.reviewsCount} reviews</span></p>
                </div>
                <table id="booking-details-table" border="1px">
                    <tr>
                        <td>
                            <p>CHECK-IN</p>
                            <h5>2/19/2022</h5>
                        </td>
                        <td>
                            <p>CHECK-OUT</p>
                            <h5>2/19/2022</h5>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>GUESTS</p>
                            <h5>2 guests</h5>
                        </td>
                    </tr>
                </table>
                <button style="display: flex; justify-content: center; padding: 10px; background-color: #d71952; color: white;">Reserve</button>
                <p style="text-align: center;">You won’t be charged yet</p>

                <table id="price-break">
                    <tbody>
                        <tr>
                            <td>$79 x 7 nights</td>
                            <td>$555</td>
                        </tr>
                        <tr>
                            <td>Weekly discount</td>
                            <td style="color: #10B981;">-$28</td>
                        </tr>
                        <tr>
                            <td>Cleaning fee</td>
                            <td>$62</td>
                        </tr>
                        <tr>
                            <td>Service fee</td>
                            <td>$83</td>
                        </tr>
                        <tr>
                            <td>Occupancy taxes and fees</td>
                            <td>$29</td>
                        </tr> 
                        <tr style = "border-top: black solid 1px;">
                            <td>Total</td>
                            <td>$701</td>
                        </tr> 
                    </tbody> 
                </table>
            
            </div>`