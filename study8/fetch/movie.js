const APIKEY = "키값";
const IMAGE_URL = "이미지url값"


const option = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
}

const now_playingURL = "URL값";
const now_playing = document.getElementById("now-playing");
fetch(now_playingURL,method)
  .then(response => response.json()) // json형태로 파싱해서 받음
  .then(response => { 
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_averages);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "* " + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      now_playing.appendChild(movie);
    })
  });

const popularURL = "URL값";
const popular = document.getElementById("popular");
fetch(popularURL,method)
  .then(response => response.json()) // json형태로 파싱해서 받음
  .then(response => { 
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_averages);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "* " + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      popular.appendChild(movie);
    })
  });

const top_ratedURL = "URL값";
const top_rated = document.getElementById("top_rated");
fetch(top_ratedURL,method)
  .then(response => response.json()) // json형태로 파싱해서 받음
  .then(response => { 
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_averages);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "* " + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      top_rated.appendChild(movie);
    })
  });

const upcomingURL = "URL값";
const upcoming = document.getElementById("upcoming");
fetch(upcomingURL,method)
  .then(response => response.json()) // json형태로 파싱해서 받음
  .then(response => { 
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_averages);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "* " + element.vote_averages;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      upcoming.appendChild(movie);
    })
  });
