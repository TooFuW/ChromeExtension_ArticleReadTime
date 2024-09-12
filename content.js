var pageText = document.body.innerText;
var $output = document.getElementById("output");
console.log(pageText);

// Capture Ctrl+F
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        customSearch();
    }
});

// Fonction de recherche améliorée
function customSearch() {
    let searchTerm = prompt("Entrez un terme à rechercher :");
    if (searchTerm) {
        let regex = new RegExp(searchTerm, 'gi');
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