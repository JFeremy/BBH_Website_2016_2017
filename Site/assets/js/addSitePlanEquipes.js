/* Script permettant d'ajouter les équipes dans le plan du site */
function addSitePlanEquipes(id,donnees) {
    /* Création des boutons */
    for (var i = donnees.length-1; i >= 0; i--) {
        var p = $("<p></p>").
            addClass("text-center").
            addClass("footer_section3");

        var a = $('<a></a>').
            attr('href', donnees[i].lien);

        a.append(donnees[i].nom);
        p.append(a);
        $(id).after(p);
    }
}
