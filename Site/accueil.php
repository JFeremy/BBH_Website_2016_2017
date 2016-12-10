<!-- accueil_BEGIN -->
    <div class="col-md-6">
        <div class="col-md-6">
            <!-- Informations générales -->
            <div class="panel panel-default">
                <div class="panel-heading">Informations</div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <h3 class="panel-title text-center">
                            <a href="index.php?page=blog&blog=/blog/abonnez-vous/">Abonnez-vous !</a>
                        </h3>
                    </li>
                    <li class="list-group-item">
                        <h3 class="panel-title text-center">
                            <a href="index.php?page=blog&blog=/blog/devenez-benevole/">Devenir Bénévole !</a>
                        </h3>
                    </li>
                    <li class="list-group-item">
                        <h3 class="panel-title text-center">
                            <a href="index.php?page=blog&blog=/blog/category/astreintes/">Les Astreintes</a>
                        </h3>
                    </li>
                </ul>
            </div>
            <br>
            <!-- Evénements -->
            <div class="panel panel-default">
                <div class="panel-heading">Événements</div>
                <ul class="list-group">
                    <?php
                        $args = array(
                            'category_name' => 'evenement',
                            'showposts'=> 3,
                        );

                        $eventPosts = new WP_Query();
                        $eventPosts->query($args);

                        while ($eventPosts->have_posts()) : $eventPosts->the_post();
                            $article = get_permalink();?>

                            <li class="list-group-item text-center">
                                <h3 class="panel-title text-center">
                                    <a href=<?php echo '"index.php?page=blog&blog='.$article .'"'; ?> >
                                        <?php the_title(); ?>
                                    </a>
                                </h3>
                            </li>
                    <?php endwhile;	?>
                </ul>
            </div>
        </div>
        <!-- Artciles récents -->
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">Articles Récents</div>
                <ul class="list-group">
                    <?php
                        $recentPosts = new WP_Query();
                        $recentPosts->query('showposts=8');

                        while ($recentPosts->have_posts()) : $recentPosts->the_post();
                            $article = get_permalink();?>

                            <li class="list-group-item text-center">
                                <a href=<?php echo '"index.php?page=blog&blog='.$article .'"'; ?> >
                                    <?php the_title(); ?>
                                </a>
                            </li>
                    <?php endwhile;	?>
                </ul>
            </div>
        </div>
    </div>
    <!-- Stat généralœ -->
    <div class="col-md-6">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js"></script><script>if(!window._rsz){window._rsz=function() {var i=iFrameResize({checkOrigin:false,interval:100});};if(document.readyState!="loading"){_rsz()}else{document.addEventListener("DOMContentLoaded",_rsz)}}</script>
        <iframe id="583855416deb120c03fd230c" src="https://scorenco.com/widget/583855416deb120c03fd230c/?auto_height=true" style="display: block; width: 100%; overflow: auto; margin: auto; border-width: 0px;" scrolling="no"></iframe>
    </div>
</div>
<!-- accueil_END -->
