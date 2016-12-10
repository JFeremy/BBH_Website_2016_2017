<?php
/* Fonction permettant de sélectionner les éléments pour composer la page */
	function create_page($page_code)
	{
		$titre = '';
		$contenue = '';
		$scripts = '';

		switch ($page_code) {
			case "accueil":
				$titre = 'Brest Bretagne Handball - Pôle Formation';
				$contenue = 'accueil.php';
				$scripts = '';
			break;
			case "blog":
				$titre = 'Fil info';
				$contenue = 'blog.php';
				$scripts = '';
			break;
			case "club":
				$titre = 'Le BBH';
				$contenue = 'club.php';
				$scripts = '';
			break;
			case "equipes":
				$titre = 'Les équipes';
				$contenue = 'equipes.php';
				$scripts = 'assets/php/scripts/scripts_listeequipe.php';
			break;
			case "equipe":
				$titre = 'EQUIPE';
				$contenue = 'equipe.php';
				$scripts = 'assets/php/scripts/scripts_equipe.php';
			break;
			case "salles":
				$titre = 'Les salles';
				$contenue = 'salle.php';
				$scripts = 'assets/php/scripts/scripts_salle.php';
			break;
			case "entrainements":
				$titre = 'Les entraînements';
				$contenue = 'entrainement.php';
				$scripts = '';
			break;
			case "photo":
				$titre = 'La galerie photo';
				$contenue = 'photo.php';
				$scripts = '';
			break;
			case "contact":
				$titre = 'Contactez nous';
				$contenue = 'contact.php';
				$scripts = 'assets/php/scripts/scripts_contact.php';
			break;

			default:
				$titre = 'Brest Bretagne Handball - Pôle Formation';
				$contenue = 'accueil.php';
				$scripts = '';
		}

		/* Retourne les valeurs */
		return array ($titre,$contenue,$scripts);
	}
?>
