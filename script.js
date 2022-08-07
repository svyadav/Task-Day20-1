fetch("https://api.thecatapi.com/v1/images/search?limit=20", {
  method: "GET",
})
  .then((data) => data.json())
  .then((response) => {
    let name = "";
    response.map((value) => {
      name += `
      <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
          <img src="${value.url}" class="card-img-top img-fluid images" alt="...">
          <div class="card-body">
            <h5 class="card-title">Cats</h5>
            <p class="card-text">Description 
            <p>Height:${value.height}</p>
            <p>Width: ${value.width}</p>
            </p>

          </div>
        </div>
        </div>`;
    });
    document.getElementById("cat").innerHTML = name;
  })
  .catch((er) => console.log(er));
