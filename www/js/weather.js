const seasonElement = document.getElementById('season');

const getWeatherData = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&units=metric&appid=cf69c92863d970365f0e437714652ace');
    return await response.json();
};

const getDateBasedSeason = () => {
    const month = new Date().getMonth() + 1; // getMonth() returns 0-11, add 1 to make it 1-12
    const date = new Date().getDate();

    // Date-based season determination
    if ((month === 2 && date >= 15) || (month >= 3 && month <= 4)) {
        return 'Spring (Vasant Ritu)';
    } else if (month >= 5 && month <= 6) {
        return 'Summer (Grishma Ritu)';
    } else if (month >= 7 && month <= 9) {
        return 'Monsoon (Varsha Ritu)';
    } else if (month >= 10 && month <= 11) {
        return 'Autumn (Sharad Ritu)';
    } else if ((month === 12) || (month === 1) || (month === 2 && date < 15)) {
        return 'Winter (Shishir Ritu)';
    }
};

const getWeatherBasedSeason = (temperature, description) => {
    if (description.includes('rain') || description.includes('thunderstorm')) {
        return 'Monsoon (Varsha Ritu)';
    } else if (temperature >= 30) {
        return 'Summer (Grishma Ritu)';
    } else if (temperature >= 20 && temperature < 30) {
        return 'Spring (Vasant Ritu)';
    } else if (temperature >= 10 && temperature < 20) {
        return 'Autumn (Sharad Ritu)';
    } else if (temperature < 10) {
        return 'Winter (Shishir Ritu)';
    }
};

const determineFinalSeason = (dateSeason, weatherSeason) => {
    // Logic to combine date-based and weather-based season predictions
    if (dateSeason === weatherSeason) {
        return dateSeason;
    }

    // If date-based season is Monsoon or Winter, prioritize it due to specific weather patterns
    if (dateSeason === 'Monsoon (Varsha Ritu)' || dateSeason === 'Winter (Shishir Ritu)') {
        return dateSeason;
    }

    // Use weather-based season as a fallback if it makes more sense
    if (weatherSeason === 'Monsoon (Varsha Ritu)' || weatherSeason === 'Winter (Shishir Ritu)') {
        return weatherSeason;
    }

    // If seasons are different but neither is Monsoon or Winter, use a combination or majority decision
    if (weatherSeason && (dateSeason === 'Spring (Vasant Ritu)' || dateSeason === 'Autumn (Sharad Ritu)')) {
        if (weatherSeason === 'Summer (Grishma Ritu)') {
            return 'Summer (Grishma Ritu)';
        }
    }

    return dateSeason; // Default to date-based season if no overriding logic applies
};

const displaySeason = async () => {
    try {
        const weatherData = await getWeatherData();
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        const dateSeason = getDateBasedSeason();
        const weatherSeason = getWeatherBasedSeason(temperature, description);

        const finalSeason = determineFinalSeason(dateSeason, weatherSeason);
        seasonElement.textContent = finalSeason;

        const summer=`<ul class="text">
    <li><b>Heat and Drought:</b> Use mulch, rainwater harvesting, and drought-resistant crops to combat high temperatures (25-45°C) and droughts.</li>
    <li><b>Suitable Crops:</b> Plant maize, millets, moong dal, okra, and watermelon for summer.</li>
    <li><b>Irrigation:</b>  Irrigation during cooler times and use drip systems to conserve water.</li>
    <li><b>Pest Management:</b> Regularly monitor for pests and use integrated pest management (IPM) techniques.</li>
    <li><b>Preparation:</b> Test soil, use organic matter, and practice crop rotation to maintain soil health and fertility.</li>
    </ul>
    <a href="" class="link">Learn More</a>`

        const winter = `<ul class="text">
                    <li><b>Cold and Frost: </b> Use mulch, cover crops, and cold-tolerant varieties like wheat, barley, and mustard to protect against low temperatures and frost.</li>
                    <li><b>Suitable Crops:</b> Plant chickpeas, spinach, carrots, peas, and cauliflower for winter</li>
                    <li><b>Irrigation:</b>  Adjust schedules for lower evaporation rates and use furrow irrigation to conserve water.</li>
                    <li><b>Pest Management:</b>  Monitor pests and use IPM techniques suited for winter.</li>
                    <li><b>Preparation:</b> Test soil, add organic matter, and plan crop rotations for soil fertility and health in winter.</li>
                </ul>
                <a href="" class="link">Learn More</a>`

        const autumn=`<ul class="text">
  <li><strong>Cold and Frost:</strong> Use mulch, cover crops, and cold-tolerant varieties like wheat, barley, and mustard to protect against low temperatures and frost.</li>
  <li><strong>Suitable Crops:</strong> Plant chickpeas, spinach, carrots, peas, and cauliflower for winter.</li>
  <li><strong>Irrigation:</strong> Adjust schedules for lower evaporation rates and use furrow irrigation to conserve water.</li>
  <li><strong>Pest Management:</strong> Monitor pests and use IPM techniques suited for winter.</li>
  <li><strong>Preparation:</strong> Test soil, add organic matter, and plan crop rotations for soil fertility and health in winter.</li>
</ul>
<a href="" class="link">Learn More</a>`


        const monsoon = `<ul class="text">
  <li><strong>Heavy Rainfall:</strong> Prepare for heavy rainfall by ensuring proper drainage and using waterlogging-resistant crops.</li>
  <li><strong>Suitable Crops:</strong> Plant rice, maize, pulses, and vegetables like beans and tomatoes that thrive in monsoon conditions.</li>
  <li><strong>Irrigation:</strong> Manage irrigation carefully to avoid waterlogging and nutrient leaching.</li>
  <li><strong>Pest Management:</strong> Monitor for diseases and pests thriving in moist conditions; use IPM strategies.</li>
  <li><strong>Preparation:</strong> Test soil, improve drainage, and ensure field readiness for sowing and harvesting during breaks in rainfall.</li>
</ul>
<a href="" class="link">Learn More</a>`



        const spring = `<ul class="text">
  <li><strong>Optimal Growth Conditions:</strong> Ensure optimal soil temperature and moisture levels for early planting and growth.</li>
  <li><strong>Suitable Crops:</strong> Plant crops like wheat, barley, peas, potatoes, and cabbage that thrive in spring conditions.</li>
  <li><strong>Irrigation:</strong> Monitor soil moisture closely and adjust irrigation schedules as temperatures rise.</li>
  <li><strong>Pest Management:</strong> Begin pest monitoring early and use preventive measures like crop rotation and biological controls.</li>
  <li><strong>Preparation:</strong> Prepare fields, ensure seed quality, and plan for regular maintenance tasks to maximize spring crop yields.</li>
</ul>
<a href="" class="link">Learn More</a>`


        const container = document.getElementById('container');

        if(finalSeason==="Summer (Grishma Ritu)"){
            container.innerHTML=summer;
        }
        else if(finalSeason==="Spring (Vasant Ritu)"){
            container.innerHTML=spring
        }
        else if(finalSeason==="Autumn (Sharad Ritu)"){
            container.innerHTML=autumn
        }
        else if(finalSeason==="Monsoon (Varsha Ritu)"){
            container.innerHTML=monsoon;
        }
        else if(finalSeason==="Winter (Shishir Ritu)"){
            container.innerHTML=winter;
        }




        return finalSeason
    } catch (error) {
        // seasonElement.textContent = 'Unable to fetch season data.';
        console.error('Error fetching weather data:', error);
    }
}

displaySeason()

