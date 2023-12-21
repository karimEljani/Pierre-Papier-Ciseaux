function jouer(choixJoueur) {
    // Options de l'ordinateur
    var options = ['pierre', 'papier', 'ciseaux'];
    var choixOrdinateur = options[Math.floor(Math.random() * 3)];
    var resultatElement = document.getElementById('resultat');

    // Comparaison des choix
    if (choixJoueur === choixOrdinateur) {
        resultatElement.innerText = "C'est une égalité!";
        resultatElement.style.color = 'blue';
    } else if (
        (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux') ||
        (choixJoueur === 'papier' && choixOrdinateur === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdinateur === 'papier')
    ) {
        resultatElement.innerText = "Vous avez gagné!";
        resultatElement.style.color = 'green';
    } else {
        resultatElement.innerText = "L'ordinateur a gagné!";
        resultatElement.style.color = 'red';
    }
}