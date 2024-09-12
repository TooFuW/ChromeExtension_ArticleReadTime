const $searchButton = document.getElementById("searchBtn");
const $searchText = document.getElementById("searchText");
//$searchButton.addEventListener("click", customSearch($searchText.value));

// Capture Ctrl+F
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        customSearch($searchText.value);
    }
});

// Fonction de recherche améliorée
function customSearch(text) {
    if (text) {
        let regex = new RegExp(text, 'gi');
        let bodyText = document.body.innerText;
        let matches = bodyText.match(regex);
        
        if (matches) {
            alert(`Trouvé ${matches.length} occurrences`);
        }
        else {
            alert("Aucun résultat trouvé");
        }
    }
}