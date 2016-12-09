/* Script permettant d'ajouter les équipes */
function addTeam(id,icon,title,donnees) {

    /* Création du titre et de la div des boutons*/
    var titre = $("<h4></h4>").
                addClass("text-center");
    var icone = $("<i></i>").
                addClass("fa").
                addClass("fa-" + icon);

    /* Assemblage */
    titre.append(icone).
          append(title);
    $(id).append(titre);

    /* Création des boutons */
    for (var i = 0; i < donnees.length; i++) {
        var btn = $("<div></div>").
            addClass("equipes_btn");

        if (donnees.length == 1)
            { btn.addClass("col-xs-offset-3 col-xs-6"); }
        else
            { btn.addClass("col-xs-6"); }

        var title_link = $('<a></a>').
            attr('type', 'button').
            addClass("btn").
            addClass("btn-default").
            addClass("btn-block").
            attr('href', donnees[i].lien);

        title_link.append(donnees[i].bouton);
        btn.append(title_link);
        $(id).append(btn);
    }
}
