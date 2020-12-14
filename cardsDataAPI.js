function fetchCardData() {
    fetch("https://purevnorov.github.io/npt.github.io/cards.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.data);
      const html = data.data
        .map(cards => {
          return `
            <li class="card-li">                            
                <a href="#">
                    <div class="card-container">
                        <div class="card-img" style="background-image: url('zuragnuud/${cards.img_url}')">
                        </div>
                        <div class="card-content">
                            <h5 >${cards.h}</h5>
                            <p>${cards.p}</p>
                        </div>
                    </div>
                </a>
            </li>
          `
        })
        .join("");
      console.log(html);
      document.querySelector(".card-ul").insertAdjacentHTML("afterbegin", html)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  fetchCardData();