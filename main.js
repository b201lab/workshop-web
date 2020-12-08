function startup() {
  const api_key = "3ee7bfd02355e005675bfd9fd060e70a";
  const lat = -7.282356;
  const lon = 112.7927366;

  const cuaca = document.getElementById("cuaca");
  const suhu = document.getElementById("suhu");

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=id&units=metric&appid=${api_key}`
    )
    .then((response) => {
      console.log(response.data);

      const weather = response.data.weather;
      cuaca.innerHTML = weather[0].description;

      const temp = response.data.main;
      suhu.innerHTML = temp.temp;
    });
}
