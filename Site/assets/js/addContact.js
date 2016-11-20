/* Script permettant de charger les contacts */
$(function() {
    $.getJSON('assets/json/contact.json', function(donnees) {
        addContact('#admin','admin',donnees.admin);
        addContact('#coach','coach',donnees.coach);
        addContact('#web','web',donnees.web);
    });
});

/* Script permettant d'ajouter les contacts */
function addContact(id,part,donnees) {
  for (var i = 0; i < donnees.length; i++) {
    var part_name = part + i;
    /* Création des éléments */
    var div_col = $("<div></div>").
                  addClass('col-md-4');
    var div_panel_group = $('<div></div>').
                  addClass('panel-group').
                  attr('id', 'accordion').
                  attr('role', 'tablist').
                  attr('aria-multiselectable', 'false');
    var div_panel = $('<div></div>').
                  addClass('panel').
                  addClass('panel-default');
    var div_panel_heading = $('<div></div>').
                  addClass('panel-heading').
                  attr('role', 'tab');
    var div_panel_title = $('<h4></h4>').
                  addClass('panel-title');
    var title_link = $('<a></a>').
                  attr('role', 'button').
                  attr('data-toggle', 'collapse').
                  attr('data-parent', '#accordion').
                  attr('aria-expanded', 'false');
    var div_panel_content = $('<div></div>').
                  addClass('panel-collapse').
                  addClass('collapse').
                //	addClass('in').
                  attr('role', 'tabpanel');
    var div_panel_body = $('<div></div>').
                  addClass('panel-body');
    var caret = $('<span></span>').
                  addClass('caret');

    /* Modification des élements */
    div_panel_heading.attr('id', 'heading' + part_name);
    title_link.attr('href', '#collapse' + part_name).
               attr('aria-controls', 'collapse' + part_name).
               text(donnees[i].poste);
    div_panel_content.attr('id', 'collapse' + part_name).
                      attr('aria-labelledby', 'heading' + part_name);
    //<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
    var name = $('<span></span>').
        addClass('glyphicon').addClass('glyphicon-user').append('&nbsp;' + donnees[i].nom);
    var phone = $('<span></span>').
        addClass('glyphicon').addClass('glyphicon-phone').append('&nbsp;' + donnees[i].telephone);
    var mail = $('<span></span>').
        addClass('glyphicon').addClass('glyphicon-envelope').append('&nbsp;' + donnees[i].email);

    /* Association des éléments */
      // Titre
    title_link.append(caret);
    div_panel_title.append(title_link);
    div_panel_heading.append(div_panel_title);
      // Contenue
    div_panel_body.append(name).append('</br>');
    switch (donnees[i].nbinfo) {
      case 'T+E':
        div_panel_body.append(mail).append('</br>');
        div_panel_body.append(phone);
        break;
      case 'T':
        div_panel_body.append(phone);
        break;
      case 'E':
        div_panel_body.append(mail);
        break;
      default:
        div_panel_body.append(mail).append('</br>');
        div_panel_body.append(phone);
    }
    div_panel_content.append(div_panel_body);

    div_panel.append(div_panel_heading);
    div_panel.append(div_panel_content);
    div_panel_group.append(div_panel);
    div_col.append(div_panel_group);
    $(id).append(div_col);
  }
}
