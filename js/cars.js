document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("car-form");
  const wrapper = document.querySelector(".wrapper");

  function renderCar(car) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = car.id || Date.now(); // unique id fallback
    card.innerHTML = `
      <img name="card-image" src="${car.image}" alt="Car Image" width="200"/>
      <h2>${car.name}</h2>
      <p>Brand: ${car.brand}</p>
      <p>Price: ${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Is New: ${car.isNew}</p>
    `;
    wrapper.appendChild(card);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const color = form.color.value;
    const isNew = form.isNew.value;

    const car = {
      name,
      brand,
      price,
      color,
      isNew,
      image: "../assets/car-line-shadow-circle-icon-design-vector.jpg",
    };

    renderCar(car);
    form.reset();
  });
});
