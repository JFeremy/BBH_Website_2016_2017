/* Script permettant d'ajouter les contacts */
function addContact(id,part,donnees) {
  var id_panel_groupe = 'accordion' + part;
  var div_panel_group = $('<div></div>').
                  addClass('panel-group').
                  attr('id', id_panel_groupe).
                  attr('role', 'tablist').
                  attr('aria-multiselectable', 'true');
  var nb_row = Math.round(donnees.length / 3);
  /* Création des lignes */
  for (var j = 0; j < nb_row; j++) {
      var div_row = $("<div></div>").
                    addClass('row').
                    css('margin', '10px 0');
      div_panel_group.append(div_row);
  }

  $(id).append(div_panel_group);
  for (var i = 0; i < donnees.length; i++) {
    /* Numéro de la ligne */
    var row =  Math.floor(i / 3);
    var part_name = part + i;
    /* Création des éléments */
    var div_col = $("<div></div>").
                  addClass('col-md-4').
                  css('padding-bottom', '10px');
    var div_panel = $('<div></div>').
                  addClass('panel').
                  addClass('panel-default');
    var div_panel_heading = $('<div></div>').
                  addClass('panel-heading').
                  attr('role', 'tab');
    var div_panel_title = $('<h3></h3>').
                  addClass('panel-title').
                  addClass('text-center');
    var title_link = $('<a></a>').
                  attr('role', 'button').
                  attr('data-toggle', 'collapse').
                  attr('data-parent', '#' + id_panel_groupe).
                  attr('aria-expanded', 'false');
    var div_panel_content = $('<div></div>').
                  addClass('panel-collapse').
                  addClass('collapse').
                  addClass('panel_' + part).
                //	addClass('in').
                  attr('aria-expanded', 'false').
                  attr('role', 'tabpanel');
    var div_panel_body = $('<div></div>').
                  addClass('panel-body');
    var caret = $('<span></span>').
                  attr('id', 'contact').
                  addClass('caret');
    var icone = $('<i></i>').
                  attr('id', 'contact').
                  addClass('fa');
    var name_txt = $('<p></p>');
    var phone_txt = $('<p></p>');
    var mail_txt = $('<p></p>');
    var name_ico = $('<i></i>').
                  attr('id', 'contact_info').
                  addClass('fa').
                  addClass('fa-user-circle');
    var phone_ico = $('<i></i>').
                  attr('id', 'contact_info').
                  addClass('fa').
                  addClass('fa-phone');
    var mail_ico = $('<i></i>').
                  attr('id', 'contact_info').
                  addClass('fa').
                  addClass('fa-envelope');

    /* Modification des élements */
    div_panel_heading.attr('id', 'heading' + part_name);
    icone.addClass(donnees[i].icones);
    title_link.append(icone);
    title_link.attr('href', '#collapse' + part_name).
               attr('aria-controls', 'collapse' + part_name).
               attr('id', part_name);
               //text(donnees[i].poste);
    div_panel_content.attr('id', 'collapse' + part_name).
                      attr('aria-labelledby', 'heading' + part_name);

    name_txt.append(name_ico).append(donnees[i].nom);
    phone_txt.append(phone_ico).append(donnees[i].telephone);
    mail_txt.append(mail_ico).append(donnees[i].email);

    /* Association des éléments */
      // Titre
    title_link.append(icone);
    title_link.append(donnees[i].poste);
    title_link.append(caret);
    div_panel_title.append(title_link);
    div_panel_heading.append(div_panel_title);
      // Contenue

    div_panel_body.append(name_txt);
    switch (donnees[i].nbinfo) {
      case 'T+E':
        div_panel_body.append(mail_txt);
        div_panel_body.append(phone_txt);
        break;
      case 'T':
        div_panel_body.append(phone_txt);
        break;
      case 'E':
        div_panel_body.append(mail_txt);
        break;
      default:
        div_panel_body.append(mail_txt);
        div_panel_body.append(phone_txt);
    }
    div_panel_content.append(div_panel_body);

    div_panel.append(div_panel_heading);
    div_panel.append(div_panel_content);
    div_col.append(div_panel);

    $('#' + id_panel_groupe).children('.row').eq(row).append(div_col);

    // Gestion des fenêtres
    $('#' + part_name).click(function() {
      reducePanel('.panel_' + part, $(this).attr('href'), $(this).attr('id'));
  	});
  }
}
