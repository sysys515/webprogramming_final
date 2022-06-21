$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?lat=37.3615&lon=126.9349&appid=88ba6eefbcb475a011ce3415faa83299&units=metric",
  function (data) {
    let temp = data.main.temp;
    let maxTemp = data.main.temp_max;
    let minTemp = data.main.temp_min;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let clouds = data.clouds.all;
    let icon = data.weather[0].icon;

    $(".temp").append(temp + "°C");
    $(".icon").append(
      '<img src="https://openweathermap.org/img/w/' + icon + '.png"/>'
    );
    $(".maxtemp").append(maxTemp + "°C");
    $(".mintemp").append(minTemp + "°C");
    $(".feelslike").append(feelsLike + "°C");
    $(".humidity").append(humidity + "%");
    $(".clouds").append(clouds + "%");

    let clothes = document.querySelector(".clothes");
    if (temp < 5) {
      clothes.innerHTML = `<li>패딩</li><li>두꺼운코트</li><li>목도리</li><li>기모제품</li>`;
    } else if (5 <= temp < 9) {
      clothes.innerHTML = `<li>코트</li><li>가죽자켓</li><li>히트텍</li><li>니트</li><li>레깅스</li>`;
    } else if (9 <= temp < 12) {
      clothes.innerHTML = `<li>자켓</li><li>트렌치코트</li><li>야상</li><li>니트</li><li>청바지</li><li>스타킹</li>`;
    } else if (12 <= temp < 17) {
      clothes.innerHTML = `<li>자켓</li><li>가디건</li><li>야상</li><li>스타킹</li><li>청바지</li><li>면바지</li>`;
    } else if (17 <= temp < 20) {
      clothes.innerHTML = `<li>얇은 니트</li><li>맨투맨</li><li>가디건</li><li>청바지</li>`;
    } else if (20 <= temp < 23) {
      clothes.innerHTML = `<li>얇은 가디건</li><li>긴팔</li><li>면바지</li><li>청바지</li>`;
    } else if (23 <= temp < 28) {
      clothes.innerHTML = `<li>반팔</li><li>얇은 셔츠</li><li>반바지</li><li>면바지</li>`;
    } else {
      clothes.innerHTML = `<li>민소매</li><li>반팔</li><li>반바지</li><li>원피스</li>`;
    }
  }
);

// const url =
//   "https://api.openweathermap.org/data/2.5/weather?lat=37.3615&lon=126.9349&appid=88ba6eefbcb475a011ce3415faa83299&units=metric";

//   function getWeather() {
//       fetch(url)
//         .then(function (res) {
//           return res.json();
//         })
//         .then(function (json) {
//           weatherData(json);
//         });
//     }

// function weatherData(data) {
//   // let city = document.querySelector(".search");
//   const temp = document.querySelector(".temp");
//   const icon = document.querySelector(".icon");
//   const humi = document.querySelector(".humi");
//   const maxtemp = document.querySelector(".maxtemp");
//   const mintemp = document.querySelector(".mintemp");
//   const feelsLike = document.querySelector(".");

//   city.append(`${data.main.name}`);
//   temp.append(`${data.main.temp}°C`);
//   icon.append(data.weather.icon);
//   icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherIcon}.png'>`;
//   maxtemp.append(`최고온도:${data.main.temp_max}°C`);
//   mintemp.append(`최저온도:${data.main.temp_min}°C`);
//   feelsLike.append(`${data.main.feels_like}`);
//   humi.append(`습도:${data.main.humidity}`);
//   clouds.append(`구름:${data.clouds.all}`);
//   sunrise.append(data.sys.sunrise);
//   sunset.append(data.sys.sunset);
// }
