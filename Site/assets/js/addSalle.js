/* Script permettant de charger les salles */
$(function() {
  $.getJSON('assets/json/salle.json', function(donnees) {
    addSalle('#salle',donnees.salle);
  });
});

function addSalle(id,donnees) {
  var nb_row = Math.round(donnees.length / 3);
  /* Création des lignes */
  for (var j = 0; j < nb_row; j++) {
      var div_row = $("<div></div>").
                    addClass('row');//.
                    //css('margin', '10px 0');
      $(id).append(div_row);
  }

  for (var i = 0; i < donnees.length; i++) {
    /* Numéro de la ligne */
    var row =  Math.floor(i / 3);
    /* Création des éléments */
    var div_col = $("<div></div>").
                  addClass('col-md-4').
                  css('padding-bottom', '10px');
    var div_panel = $('<div></div>').
                  addClass('panel').
                  addClass('panel-info');
    var div_panel_heading = $('<div></div>').
                  addClass('panel-heading');
    var div_panel_title = $('<h4></h4>').
                  addClass('panel-title').
                  addClass('text-center').
                  html(donnees[i].label);
    var div_panel_body = $('<div></div>').
                  addClass('panel-body');
    var div_content = $('<div></div>').
                  attr('id', 'content');
    var contentString =
      '<div id="content">' +
        '<address>' +
          '<strong>' + donnees[i].nom + '</strong><br>' +
          donnees[i].adresse + '<br>' +
          donnees[i].codePostal + ', ' + donnees[i].commune + '<br>' +
          donnees[i].latitude + ', ' + donnees[i].longitude + '<br>' +
          '<a href="' + donnees[i].itineraire + '" target="_blank" class="btn btn-primary btn-xs text-center">Itinéraire</a>' +
        '</address>' +
      '</div>';
      /*
      <div class="panel panel-primary">
        <div class="panel-heading">Panel heading without title</div>
        <div class="panel-body">
        Panel content
        </div>
      </div>
      */
    /* Association des éléments */
      /* Titre */
    div_panel_heading.append(div_panel_title);
      /* Contenue */
    div_content.append(contentString);
    div_panel_body.append(div_content);
      /* Panel */
    div_panel.append(div_panel_heading);
    div_panel.append(div_panel_body);
      /* Colonne */
    div_col.append(div_panel);

    $(id).children('.row').eq(row).append(div_col);
  }
}
