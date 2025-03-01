const loadButton = document.getElementById("loadButton");
const loader = document.getElementById("loader");
const gallery = document.getElementById("gallery");

async function fetchPhotos() {
  try {
    loader.style.display = "flex";

    const serverAnswer = await fetch("https://dog.ceo/api/breeds/image/random/20");

    if (!serverAnswer.ok) {
      throw new Error("Ошибка при загрузке фотографий");
    }

    const data = await serverAnswer.json();

    gallery.innerHTML = "";

    data.message.forEach((photoUrl) => {
      const img = document.createElement("img");
      img.src = photoUrl;
      img.alt = "Фотография собаки";
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error("Произошла ошибка:", error);
    gallery.innerHTML = "<p>Не удалось загрузить фотографии. Попробуйте ещё раз.</p>";
  } finally {

    loader.style.display = "none";
  }
}

loadButton.addEventListener("click", (event) => {
  // event.preventDefault(); // 
  fetchPhotos();
});