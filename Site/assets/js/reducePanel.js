/* Script permettant de n'avoir qu'un panel de déroulé à la fois */
function reducePanel(panel_part, link, id) {
  var id_a = '#' + id;
  $.each($(panel_part), function (index, value) {
    if (link != '#' + $(value).attr('id')) {
      $(value).attr('aria-expanded', false);
      $(value).removeClass('in');
      $(id_a).attr('aria-expanded', false);
    }
  });
}
