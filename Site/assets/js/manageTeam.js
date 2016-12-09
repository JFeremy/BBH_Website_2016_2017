/* Script permettant de charger les équipes */
$(function() {
    $.getJSON('assets/json/equipe.json', function(equipe) {
        addTeam('#equipeEcole','child','Ecole de hand',equipe.ecole);
        addTeam('#equipeFeminin','female','Equipes Féminines',equipe.feminin);
        addTeam('#equipeMasculin','male','Equipes Masculines',equipe.masculin);
    });
});
