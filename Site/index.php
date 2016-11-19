<? 	session_start();
	$_SESSION['titre'] = "Site du BBH: Brest Bretagne Handball - Pôle Formation";
	$_SESSION['Code_titre'] = "AC";

	include("header.php");
	//define('WP_USE_THEMES', false); // aucun besoin d'utiliser le thème actif donc on le désactive
	//require('blog/wp-load.php'); // on include le "moteur" wordpress
?>

	<h2>Brest Bretagne Handball - Pôle Formation</h2>

  <?php include("footer.php"); ?>
