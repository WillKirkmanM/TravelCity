document.addEventListener('DOMContentLoaded', () => {
    // List of countries
    const countries = [
        "United States", "Canada", "United Kingdom", "France", "Germany", 
        "Italy", "Spain", "Japan", "Australia", "Brazil", "Mexico", 
        "China", "India", "South Africa", "Egypt", "Greece"
    ];

    // Populate datalist
    const datalist = document.getElementById('countries');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        datalist.appendChild(option);
    });

    // Set random default country
    const locationInput = document.getElementById('location');
    locationInput.value = countries[Math.floor(Math.random() * countries.length)];

    // Set default dates
    const today = new Date();
    const checkInDate = today.toISOString().split('T')[0];
    
    const checkOutDate = new Date();
    checkOutDate.setDate(today.getDate() + 5);
    
    document.getElementById('check-in').value = checkInDate;
    document.getElementById('check-out').value = checkOutDate.toISOString().split('T')[0];
});