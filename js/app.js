import { fetchData, fillSkeleton } from "./main.js";
import { renderUsersPage } from "./users.js";

const wrapper = document.querySelector(".wrapper");

function renderRecipe(data) {
  data.recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = recipe.id;
    card.innerHTML = `
            <img name="card-image" src=${recipe.image} alt="">
            <h3>${recipe.name}</h3>
            <p>Rating: ${recipe.rating}</p>
        `;
    wrapper.appendChild(card);
  });
}

window.onload = () => {
  fillSkeleton();
  fetchData("recipes", renderRecipe);
};
