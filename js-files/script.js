document.getElementById('searchBtn').addEventListener('click', async(event) => {
    event.preventDefault()

    const location = document.getElementById('location').value;
    const startDate = document.getElementById('checkinDate').value;
    const endDate = document.getElementById('checkOutDate').value;
    const guests = document.getElementById('guests').value;

    // console.log('https://airbnb13.p.rapidapi.com/search-location?location=nainital&checkin=2023-10-29&checkout=2023-10-31&adults=1&children=0&infants=0&pets=0&page=1&currency=INR');
    if (location && startDate && endDate && guests && startDate < endDate) {
        const url = 'https://airbnb13.p.rapidapi.com/search-location?location=' + location + '&checkin=' + startDate + '&checkout=' + endDate + '&adults=' + guests + '&children=0&infants=0&pets=0&page=1&currency=INR';
        // console.log(url);
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0096ff1d18mshfaa3f18b67d7c35p194564jsnd9663dce8093',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) { // Check if the response is OK (status code 200)
                const result = await response.json(); // Use .json() to parse JSON response
                saveData(result.results);
            } 
            else {
                console.error('Response not OK:', response.status, response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
        return;
    }

    alert('Please fill all the search inputs.')
})




function saveData(hotelArray){
    if (hotelArray.length > 10) {
        hotelArray.splice(10);
    }
    // console.log(hotelArray);
    // window.hotelData = JSON.stringify(hotelArray);
    window.localStorage.setItem('airbnb_data', JSON.stringify(hotelArray))
    window.location.href = './search.html'
}

// console.log(window.hotelData);






















