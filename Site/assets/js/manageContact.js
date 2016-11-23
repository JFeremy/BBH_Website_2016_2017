/* Script permettant de charger les contacts */
$(function() {
    $.getJSON('assets/json/contact.json', function(contact) {
        addContact('#admin','admin',contact.admin);
        addContact('#web','web',contact.web);
    });
    $.getJSON('assets/json/coach.json', function(coach) {
        addCoach('#coach','coach',coach.equipe,coach.coach);
    });
});

function reduceContact(panel_part, link, id) {
  var id_a = '#' + id;
  $.each($(panel_part), function (index, value) {
    if (link != '#' + $(value).attr('id')) {
      $(value).attr('aria-expanded', false);
      $(value).removeClass('in');
      $(id_a).attr('aria-expanded', false);
    }
  });
}
