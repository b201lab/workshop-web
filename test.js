function startup() {
  const api_key = "3ee7bfd02355e005675bfd9fd060e70a";
  const lat = "-7.2821281";
  const lon = "112.7951278";

  console.log("HIA");

  const suhu = document.getElementById("suhu");

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    )
    .then(function (response) {
      console.log(response.data);

      var deskripsi = response.data.weather[0];
      console.log(`CUACA ${deskripsi.description}`);

      suhu.innerHTML = deskripsi.description;
    });
}
