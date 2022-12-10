
window.onload = () => {
  const citiesElement = document.getElementById('cities');
  
  cities.forEach((city) => {
    let option = document.createElement('option');
    option.value = city;
    option.text = city;
    citiesElement.appendChild(option);
    });
};