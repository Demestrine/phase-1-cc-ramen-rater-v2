// Display all ramens
function displayRamens() {
  fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => {
      ramens.forEach(renderRamenImage);
      if (ramens.length > 0) showRamenDetail(ramens[0]); // optional advanced
    });
}

// Render each ramen image
function renderRamenImage(ramen) {
  const menu = document.getElementById('ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener('click', () => handleClick(ramen));
  menu.appendChild(img);
}

// Handle click to show ramen details
function handleClick(ramen) {
  showRamenDetail(ramen);
}

// Update DOM with ramen details
function showRamenDetail(ramen) {
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.detail-image').alt = ramen.name;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
}

// Listen to form submit and add new ramen to menu
function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', e => {
    e.preventDefault();

    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target['new-comment'].value
    };

    renderRamenImage(newRamen);
    form.reset();
  });
}

// Main function to start app
function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);
