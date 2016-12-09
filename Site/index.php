<?
include("f_create_page.php");
$page_code = '';

// Evalue le code de la page que l'on souhaite afficher
if (empty($_GET['page']) || !isset($_GET['page'])) {
	$page_code = 'accueil';
}
else {
	$page_code = $_GET['page'];
}

list ($page_titre, $page_contenue, $page_scripts) = create_page($page_code);

include("header.php");
//define('WP_USE_THEMES', false); // aucun besoin d'utiliser le thème actif donc on le désactive
//require('blog/wp-load.php'); // on include le "moteur" wordpress

	echo '<!-- content_BEGIN -->';
	echo '<div class="content">';

		echo '<!-- container_BEGIN -->';
		echo '<div class="container">';
			echo'<h1 id="titre_page" class="text-center">'.$page_titre.'</h1>';
			include($page_contenue);
		echo '</div>';
		echo '<!-- container_END -->';

	echo '</div> ';
	echo '<!-- .content -->';


include("footer.php");

if ($page_scripts != '') {
	require($page_scripts);
}

?>
