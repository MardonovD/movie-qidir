const input = document.querySelector(".movie__value");

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const ress = document.querySelector(".ress");
const ortga = document.querySelector(".ortga");
let inpVal;

const searchMovie = async function () {
  const res = await fetch(
    `https://omdbapi.com/?s=${inpVal}&page=1&apikey=fc1fef96`
  );
  const resJSON = await res.json();
  const obj = resJSON.Search;
  console.log(resJSON);
  ress.innerHTML = "";
  obj.map((val) => {
    render(val);
  });

  viewChiqarish();
  ortga.classList.toggle("hidden");
};

const viewChiqarish = function () {
  container.classList.toggle("hidden");
};

const tozalash = function () {
  input.innerHTML = "";
};

function clickk() {
  btn.addEventListener("click", function () {
    inpVal = input.value;
    searchMovie();
    input.value = "";
  });
}

clickk();

const render = function (malumot) {
  const html = ` 
 
  <div class="cart">
    <div class="image">
      <img src="${malumot.Poster}" alt="rasm bor" />
    </div>
    <div class="title">
      <p>MOVIE:${malumot.Title}</p>
    </div>
    <div class="years">
      <p>YEARS:${malumot.Year}</p>
    </div>
  </div>
 
`;
  ress.insertAdjacentHTML("afterbegin", html);
};

ortga.addEventListener("click", function () {
  viewChiqarish();
  ress.innerHTML = "";

  ortga.classList.toggle("hidden");
});
