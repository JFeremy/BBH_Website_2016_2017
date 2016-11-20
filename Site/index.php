<?
/*	session_start();
	$_SESSION['titre'] = "Site du BBH: Brest Bretagne Handball - Pôle Formation";
	$_SESSION['Code_titre'] = "AC";
*/
	include("header.php");
	//define('WP_USE_THEMES', false); // aucun besoin d'utiliser le thème actif donc on le désactive
	//require('blog/wp-load.php'); // on include le "moteur" wordpress
?>
	<div class="container">
	  <h1 class="text-center">Contacter nous </h1>

	  <!-- Nav tabs -->
	  <ul class="nav nav-tabs nav-justified" role="tablist">
	    <li role="presentation" class="active"><a href="#admin" aria-controls="admin" role="tab" data-toggle="tab">Administration</a></li>
	    <li role="presentation"><a href="#coach" aria-controls="coach" role="tab" data-toggle="tab">Entraîneurs</a></li>
	    <li role="presentation"><a href="#web" aria-controls="web" role="tab" data-toggle="tab">Web</a></li>
	  </ul>
		<div class="row">
		  <!-- Tab panes -->
		  <div class="tab-content">
				</br>
		    <div role="tabpanel" class="tab-pane active" id="admin"></div>
		    <div role="tabpanel" class="tab-pane" id="coach"></div>
		    <div role="tabpanel" class="tab-pane" id="web"></div>
			</div>
	  </div>
	</div>

  <?php include("footer.php"); ?>
	<script src="assets/js/addContact.js"></script>
