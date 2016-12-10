/* Script permettant de gérer la barre de navigation */

$(document).ready(function() {
  var offset = $(".BBH_title").height();
  var nav_mobile = $(".navbar-header").height();

  /* Si on est sur un grand écran : */
  if (nav_mobile == 0) {
    $(document).scroll(function(){
      var scrollTop = $(document).scrollTop();
      if(scrollTop > offset){
          $(".BBH_title").addClass('hidden');
          $("nav").addClass('BBH_navbar_scroll');
          $("nav").removeClass('BBH_navbar_top');
      }
      else {
          $(".BBH_title").removeClass('hidden');
          $("nav").removeClass('BBH_navbar_scroll');
          $("nav").addClass('BBH_navbar_top');
      }
    });
  }
  else {
    $("nav").addClass('BBH_navbar_scroll');
    $("nav").removeClass('BBH_navbar_top');
  }

  var page = $_GET('page');
  var liens = $(".BBH_nav");
  var lien = liens.children('a');

  for (var i = 0; i < liens.length; i++) {
      var adresse = lien[i].href;
      if (typeof adresse != "undefined" || adresse.indexOf("=") != 1) {
          var code = adresse.split("=");

          if (code.length > 1) {
              if (code[1].indexOf("&") == 1) {
                 var souscode = adresse.split("&");
                 code[1] = souscode[1];
              }

              if (page == code[1]) {
                  $('.BBH_nav_'+ page).addClass('active');
                  break;
              }
              else if ( (page == 'club' ||
                         page == 'equipes' ||
                         page == 'equipe' ||
                         page == 'entrainements' ||
                         page == 'salles') &&
                        (code[1] == 'club') ) {
                   $('.BBH_nav_'+code[1]).addClass('active');
                   break;
              }
          }
      }
      else {$('.BBH_nav_accueil').addClass('active');}
  }
});

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}

window.parent.document.title = $('#titre_page').text();
