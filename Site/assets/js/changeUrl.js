// Code permettant de modifier l'url
var urlChange = '/Sites/BBH_Website_2016_2017/Site/';

switch (window.location.pathname) {
    case '/Sites/BBH_Website_2016_2017/Site/page_test.php':
        urlChange += "TEST";
        break;
    case '/Sites/BBH_Website_2016_2017/Site/index.php':
        urlChange += "Accueil";
        break;
}
history.pushState(null, null, urlChange);
