/* Script permettant d'ajouter les équipes */
function addTeam(id,icon,title,donnees) {

    /* Création du titre et de la div des boutons*/
    var titre = $("<h4></h4>").
                addClass("text-center");
    var icone = $("<i></i>").
                addClass("fa").
                addClass("fa-" + icon);
    var div_group = $("<div></div>").
                addClass("btn-group-vertical").
                addClass("col-md-6").
                attr("role","group").
                attr("aria-label","...");

    /* Assemblage */
    titre.append(icone).
          append(title);
    $(id).append(titre).
          append(div_group);

    /* Création des boutons */
    for (var i = 0; i < donnees.length; i++) {
        var icon = $('<span></span>').
            addClass('glyphicon').
            addClass('glyphicon-new-window').
            attr('aria-hidden','true');
        var title_link = $('<a></a>').
            attr('type', 'button').
            addClass("btn").
            addClass("btn-default").
            addClass("btn-block").
            attr('href', donnees[i].lien);
        title_link.append(donnees[i].nom)
                  .append(icon);
        $(id).append(title_link);
    }
}
