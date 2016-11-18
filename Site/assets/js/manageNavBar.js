/* Script permettant de gérer la barre de navigation */

$(document).ready(function() {
  var offset = $(".BBH_title").height();

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
});

var titre = sessionStorage.getItem("titre");
window.parent.document.title = titre;
