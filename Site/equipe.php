<?php
include("f_find_equipe_widget.php");
// On détermine l'équipe choisie
if (empty($_GET['equipe']) || !isset($_GET['equipe'])) {
	$page_equipe = 'equipe';
}
else {
	$page_equipe = $_GET['equipe'];
}

list ($equipe_nom,$match_id,$stat_id) = find_equipe_widget($page_equipe);
echo '<p id="equipe_nom" class="hidden">'.$equipe_nom.'</p>';

if ($equipe_nom != 'EQUIPE INTROUVABLE') { ?>

	<div class="row">
		<div class="table-responsive">
			<div class="col-md-6 col-md-offset-3">
				<h3 class="text-center">Entrainements</h3>
			    <table class="table">
					<!-- ligne: Entete -->
			        <tr>
			            <th>Jours</th><!-- Jours -->
			            <th>Horaires</th><!-- Horaires -->
			            <th><a href="index.php?page=salles">Salles</a></th><!-- Salles -->
			            <th><a href="index.php?page=contact">Entraîneurs</a></th><!-- Entraîneurs -->
			        </tr>

					<?php include("equipe_entrainement.php");  ?>
			    </table>
			</div>
		</div>
	</div>

	<?php
	if (($match_id != '') &&
		($stat_id != '')) { ?>
		<div class="row"> <?php

		for ($i=0; $i < 2; $i++) {
				if ($i == 1) { $widget_id = $match_id; }
				else { $widget_id = $stat_id; }
				?>
				<div class="col-md-6">
					<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js"></script>
					<script>if(!window._rsz){window._rsz=function(){var i=iFrameResize({checkOrigin:false,interval:100});};if(document.readyState!="loading"){_rsz()}else{document.addEventListener("DOMContentLoaded",_rsz)}}</script>

					<iframe id=<?php echo '"'. $widget_id . '"'; ?>
						src=<?php echo '"https://scorenco.com/widget/'. $widget_id . '/?auto_height=true"'; ?> style="display: block; width: 100%; overflow: auto; margin: auto; border-width: 0px;" scrolling="no"></iframe>
					</div> <?php
			} ?>
		</div> <?php
	}
} ?>
