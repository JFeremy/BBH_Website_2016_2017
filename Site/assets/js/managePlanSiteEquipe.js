/* Script permettant de charger la liste des équipes dans le plan du site */
$(function() {
    $.getJSON('assets/json/equipe.json', function(equipe) {
        addSitePlanEquipes('#link_ecole',equipe.ecole);
        addSitePlanEquipes('#link_feminin',equipe.feminin);
        addSitePlanEquipes('#link_masculin',equipe.masculin);
    });
});
