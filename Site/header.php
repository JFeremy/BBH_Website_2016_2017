<!DOCTYPE HTML>
<html>
	<head>
		<title>titre</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" type="image/png" href="images/bbhfavicon.png" />

		<!-- CSS BOOTSTRAP -->
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- CSS BBH -->
		<link rel="stylesheet" href="assets/css/style.css" />
		<!-- JS FONTAWESOME -->
		<script src="https://use.fontawesome.com/eef56b002c.js"></script>
		<!-- JS ALERTJS -->
		<!--script type="text/javascript" src="assets/js/alertjs.js"></script-->
	</head>

	<body>
	<?php //include("popup.php"); ?>

		<!-- nav_BEGIN -->
		<nav id="BBH_navbar" class="navbar navbar-default navbar-fixed-top BBH_navbar_top">
			<div class="container-fluid">
				<!-- Titre grands écrans -->
				<h4 class="BBH_title hidden-xs"><a id="Title_nav" class="Title_nav_effet" href="index.php">Brest Bretagne Handball</a></h4>

				<!-- Menu petit écran -->
				<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<!-- Permet de former le bouton hamburger pour le menu -->
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				</button>
				<!-- TItre petits écrans -->
				<a class="navbar-brand visible-xs" href="index.php">Brest Bretagne Handball</a>
				</div>

				<!-- Menu grand écran -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav nav-justified">
						<li class="BBH_nav BBH_nav_accueil"><a href="index.php?page=accueil">Accueil</a></li>
						<li class="BBH_nav BBH_nav_blog"><a href="index.php?page=blog">Fil Info</a></li>
						<li class="BBH_nav BBH_nav_club" role="presentation" class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="index.php?page=club" role="button" aria-haspopup="true" aria-expanded="false">
							Le Club <span class="caret"></span></a>
							<ul class="dropdown-menu nav_link">
								<li><a href="index.php?page=club">Infomations</a></li>
								<li><a href="index.php?page=equipes">Equipes</a></li>
								<li><a href="index.php?page=entrainements">Entrainements</a></li>
								<li><a href="index.php?page=salles">Salles</a></li>
							</ul>
						</li>
						<li class="BBH_nav BBH_nav_astreinte"><a href="index.php?page=astreinte">Astreintes</a></li>
						<li class="BBH_nav BBH_nav_photo"><a href="index.php?page=photo">Photos</a></li>
						<li class="BBH_nav BBH_nav_contact"><a href="index.php?page=contact">Contact</a></li>
						<li class="BBH_nav"><a href="http://www.brest-bretagnehandball.fr/" target="_blanc">Pôle Haut Niveau</a></li>
					</ul>
				</div><!-- navbar-collapse_END -->
			</div><!-- container-fluid_END -->
		</nav><!-- nav_END -->
