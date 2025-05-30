let hamburger = document.getElementById("hamburger");
let nav = document.querySelector("nav");

hamburger.addEventListener("click",()=>{
  nav.classList.toggle("show");
})

function setupSearch() {
  let input = document.getElementById('searchInput');
  input.addEventListener('input', handleSearchInput);
}

function handleSearchInput(event) {
  let query = event.target.value.toLowerCase();
  filterAnimes(query);
}

function filterAnimes(query) {
  let animeCards = document.querySelectorAll('.anime');

  for (let i = 0; i < animeCards.length; i++) {
    let titleElement = animeCards[i].querySelector('h3');
    let title = titleElement ? titleElement.textContent.toLowerCase() : '';

    if (title.includes(query)) {
      animeCards[i].style.display = 'block';
    } else {
      animeCards[i].style.display = 'none';
    }
  }
}
document.addEventListener('DOMContentLoaded', setupSearch);