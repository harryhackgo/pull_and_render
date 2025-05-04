import { fetchData, fillSkeleton } from "./main.js";

function renderUser(data) {
  const users = document.querySelector(".users");
  data.users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = user.id;
    card.innerHTML = `
            <img name="card-image" src=${user.image} alt="">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>${user.email}</p>
        `;
    users.appendChild(card);
  });
}

window.onload = () => {
  fillSkeleton();
  fetchData("users", renderUser);
};

export function renderUsersPage() {
  fillSkeleton();
  fetchData("users", renderUser);
}
