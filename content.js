// Ajouter l'écouteur d'événement pour le bouton de recherche
const $searchButton = document.getElementById("searchBtn");
const $searchText = document.getElementById("searchText");
$searchButton.addEventListener("click", () => customSearch($searchText.value));

// Disable Ctrl+F
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
    }
});

// Récupérer le texte de la page active
function getPageText() {
    chrome.runtime.sendMessage({ action: 'executeScript' }, function(response) {
        console.log(response);
    });
}

// Fonction de recherche améliorée
function customSearch(text) {
    getPageText();
    if (text) {
        let regex = new RegExp(text, 'gi');
        let matches = bodyText.match(regex);
        if (matches) {
            console.log(`Trouvé ${matches.length} occurrences`);
        }
        else {
            console.log("Aucun résultat trouvé");
        }
    }
}