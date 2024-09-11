// Sélectionnez toutes les images de la page
const images = document.querySelectorAll("img");

// URL de l'image locale (elle est exposée via web_accessible_resources)
const imageUrl = chrome.runtime.getURL("icon.png");

// Remplace chaque image par l'image locale
images.forEach((img) => {
    img.src = imageUrl;
});