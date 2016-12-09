<?php
/* Fonction permettant de sélectionner les id pour les widgets */
	function find_equipe_widget($equipe_code)
	{
		/* Chargement du fichier JSON */
		$json = file_get_contents('assets/json/equipe.json');
		$data = json_decode($json, true);

		/* On parcours les types d'équipes */
		foreach($data as $data_type => $data_equipes) {

			/* On parcours les équipes */
			foreach($data_equipes as $data_equipe => $data_equipe_id) {
				if ($data_equipe_id['id'] == $equipe_code) {
					$equipe_nom = $data_equipe_id['nom'];
					$match_id = $data_equipe_id['match_id'];
					$stat_id = $data_equipe_id['stat_id'];
					break;
				}
			}
		}

		/* Retourne les valeurs */
		if (empty($equipe_nom) || !isset($equipe_nom)) {
			$equipe_nom = 'EQUIPE INTROUVABLE';
		}
		if (empty($match_id) || !isset($match_id)) {
			$match_id = '';
		}
		if(empty($stat_id) || !isset($stat_id)) {
			$stat_id = '';
		}

		return array ($equipe_nom,$match_id,$stat_id);
	}
?>
