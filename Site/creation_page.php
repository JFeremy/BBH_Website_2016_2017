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

			case "club":
				$titre = 'Le BBH';
				$contenue = 'club.php';
				$scripts = '';
			break;
			case "salles":
				$titre = 'Les salles';
				$contenue = 'salle.php';
				$scripts = 'scripts_salle.php';
			break;
			case "entrainements":
				$titre = 'Les entraînements';
				$contenue = 'entrainement.php';
				$scripts = '';
			break;

			case "contact":
				$titre = 'Contactez nous';
				$contenue = 'contact.php';
				$scripts = 'scripts_contact.php';
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
