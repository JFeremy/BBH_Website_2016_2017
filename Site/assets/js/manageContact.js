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
