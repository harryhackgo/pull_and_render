const BASE_URL = "https://dummyjson.com";
export async function fetchData(endpoint, callback) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    callback(data);
  } catch (err) {
    console.log(err);
  } finally {
    document.querySelector(".skeleton").style.display = "none";
  }
}

export function fillSkeleton() {
  const skeleton = document.querySelector(".skeleton");
  const fragment = document.createDocumentFragment();
  Array(18)
    .fill()
    .forEach(() => {
      const skeletonItem = document.createElement("div");
      skeletonItem.className = "skeleton__item";
      skeletonItem.innerHTML = `
          <div class="skeleton__img skeleton__animation"></div>
          <div class="skeleton__line skeleton__animation"></div>
          <div class="skeleton__line skeleton__animation"></div>
      `;
      fragment.appendChild(skeletonItem);
    });
  skeleton.appendChild(fragment);
}
