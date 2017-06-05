# Brest Bretagne Handball
<a href="http://brest-bretagnehandball.com" target="_blank"><small>http://brest-bretagnehandball.com</small></a>
<h1>Sommaire</h1>
<ol>
  <li>Introduction</li>
  <li>Hébergement et Structure</li>
  <li>Blog</li>
  <li><a href="https://scorenco.com/">Score n'Co</a></li>
  <li>Informations</li>
</ol>
<hr>
<h1>1 - Introduction</h1>
<p>Le site est composé de trois éléments.</p>
  <ul>
    <li>Blog -> Utilisation du CMS Wordpress</li>
    <li>Statistique  -> Utilisation des widgets provenant de <a href="https://scorenco.com/">Score n'Co</a></li>
    <li>Information  -> Programmation en HTML / CSS / Javascript / PHP</li>
  </ul>
<p>Les informations sont gérées en NoSQL avec du JSON pour la partie Information, et via une base de données MySQL pour la partie Blog. Pour les statistiques, les informations affichés via les widgets proposés par <a href="https://scorenco.com/">Score n'Co</a>.</p>

  <hr>

  <h1>2 - Hébergement et Structure</h1>
  <p>Le site est héberger chez OVH sur un serveur dédié.</p>
  <p>Le prix par mois est de 2,99€ HT.</p>
  <p>Le nom de domaine associé est brest-bretagnehandball.com</p>
  <p>Voici l'arborescence des documents sur le serveur:</p>
  <ul>
    <li><strong>assets</strong></li>
    <ul>
      <li><strong>css</strong></li>
      <ul>
        <li><em>style.css</em></li>
      </ul>
    </ul>
    <ul>
      <li><strong>images</strong></li>
      <ul>
        <li><em>favicon.ico</em></li>
        <li><em>background_body.png</em></li>
        <li><em>bhhfavicon.png</em></li>
        <li><em>handball.png</em></li>
        <li><em>ico_fb.png</em></li>
        <li><em>ico_gg.png</em></li>
        <li><em>ico_nl.png</em></li>
        <li><em>ico_yt.png</em></li>
        <li><em>logo_bbh.png</em></li>
        <li><em>logo_comite29.png</em></li>
        <li><em>logo_handtv.png</em></li>
	      <li><em>logo_lf.png</em></li>
	      <li><em>logo_lh.png</em></li>
	      <li><em>organigrammebhh_2016-2017.png</em></li>
      </ul>
    </ul>
    <ul>
      <li><strong>js</strong></li>
      <ul>
	      <li><em>addCoach.js</em></li>
	      <li><em>addContact.js</em></li>
	      <li><em>addSalle.js</em></li>
	      <li><em>addSitePlanEquipes.js</em></li>
	      <li><em>addTeam.js</em></li>
	      <li><em>changeTeamName.js</em></li>
	      <li><em>changeUrl.js</em></li>
	      <li><em>iframe_autoheight.js</em></li>
	      <li><em>loadTitle.js</em></li>
	      <li><em>manageContact.js</em></li>
	      <li><em>manageMap.js</em></li>
	      <li><em>manageNavBar.js</em></li>
	      <li><em>managePlanSiteEquipe.js</em></li>
	      <li><em>manageTeam.js</em></li>
	      <li><em>reducePanel.js</em></li>
      </ul>
    </ul>
    <ul>
      <li><strong>json</strong></li>
      <ul>
        <li><em>coach.json</em></li>
        <li><em>contact.json</em></li>
        <li><em>equipe.json</em></li>
        <li><em>salle.json</em></li>
      </ul>
    </ul>
    <ul>
      <li><strong>php</strong></li>
      <ul>
        <li><strong>functions</strong></li>
        <ul>
          <li><em>f_create_page.php</em></li>
          <li><em>f_find_equipe_widget.php</em></li>
        </ul>
        <li><strong>scripts</strong></li>
        <ul>
          <li><em>scripts_accueil.php</em></li>
          <li><em>scripts_contact.php</em></li>
          <li><em>scripts_equipe.php</em></li>
          <li><em>scripts_listeequipe.php</em></li>
          <li><em>scripts_salle.php</em></li>
        </ul>
      </ul>
    </ul>
    <li><strong>blog</strong></li>
      <ul>
        <li><em>"Organiser par Wordpress"</em></li>
      </ul>
    <li><em>accueil.php</em></li>
    <li><em>blog.php</em></li>
    <li><em>club.php</em></li>
    <li><em>contact.php</em></li>
    <li><em>entrainement.php</em></li>
    <li><em>equipe_entrainement.php</em></li>
    <li><em>equipe.php</em></li>
    <li><em>equipes.php</em></li>
    <li><em>footer.php</em></li>
    <li><em>header.php</em></li>
    <li><em>index.php</em></li>
    <li><em>photo.php</em></li>
    <li><em>salle.php</em></li>
  </ul>

  <hr>

  <h1>2 - Blog</h1>
  <h2>Intégration</h2>
  <p>Le blog WordPress se trouve à l'url suivante : <a href="http://brest-bretagnehandball.com/blog/" target="_blank">http://brest-bretagnehandball.com/blog/</a></p>
  <p>L'url de connexion est la suivante: <a href=" http://brest-bretagnehandball.com/blog/wp-login.php" target="_blank"> http://brest-bretagnehandball.com/blog/wp-login.php</a></p>

  <p>L’objectif n’est pas d’avoir un site et un blog séparé mais bien d’avoir les deux ensembles et que le passage de l’un à l’autre soit le plus transparent possible pour l’utilisateur.
Pour ce faire, l’intégration du blog se fait par le code suivant présent sur <strong>index.php</strong> :</p>
  <code>define('WP_USE_THEMES', false); // aucun besoin d'utiliser le thème actif donc on le désactive
  require('blog/wp-load.php'); // on include le "moteur" WordPress</code>
  <p>La première ligne sert à enlever de l'affichage du thème au niveau de WordPress, c'est pour cela que si on va sur le blog (<a href="http://brest-bretagnehandball.com/blog/" target="_blank">http://brest-bretagnehandball.com/blog/</a>), on ne voit qu'un fond blanc.</p>
  <p>La deuxième ligne charge le "moteur" WordPress sur le site, grâce à cela, on va pouvoir utiliser les méthodes proposées par WordPress dans le site, comme par exemple pour charger les articles ou les catégories.</p>

  <h2>Les extensions</h2>
  <p>Plusieurs extensions sont installées</p>
  <ul>
  	<li><h3>Disable Comments</h3></li>
  	<li>Comme son nom l’indique, cette extension enlève l’opportunité de mettre des commentaires aux articles. La raison est simple, il n’y à pas ce besoin de commentaire, et de plus, il faudrait un modérateur pour gérer les commentaires, et aucuns bénévoles n’a le temps pour ce rôle. Cette fonction est plutôt assuré par la page Facebook et son administrateur.</li>
  	<li><h3>Google for WordPress</h3></li>
  	<li>Cette extension va nous permettre de pouvoir ajouter des éléments provenant de Google, comme le calendrier, ou des fichiers présents sur le Google Drive du club.</li>
  	<li><h3>MailPoet Newsletters</h3></li>
  	<li>Il s’agit ici d’une extension qui s’occupe des newsletters, cela permet aux utilisateurs de pouvoir s’abonner à une newsletter selon la fréquence de réception qu’ils préfèrent. On peut également paramétrer l’apparence de celle-ci ainsi que le contenue. C’est un outil clés en main.</li>
  </ul>

  <h2>Parmétrage</h2>
  <h3>Comptes</h3>
  <p>Il y a 3 types de comptes de paramétrer :</p>
  <ul>
  <li>Rédacteur : Permet seulement d’ajouter ou modifier des articles et de pages.</li>
  <li>Modérateur : Rédacteur + permet la suppression d’articles, modification des catégories, de la newsletters.</li>
  <li>Administrateur :Modérateur + accès à tout le paramétrage, l’ajout/suppression de comptes, d’extensions, gestion des mises à jours, etc...</li>
  </ul>

  <h2>Fonctionnement</h2>
  <p>Il y a deux moyens avec notre configuration de WordPress pour transmettre de l’information, il y a les pages et les articles. Comment savoir celui à utiliser pour une information ?</p>
  <p>Nous utilisons les articles pour toutes les informations ayant une durée de vie dont l’intérêt est court dans le temps (prochaines rencontres, soirées, etc …). Les pages quant à elles, sont très peu nombreuses(c’est une volonté) et utilisées pour des informations qui ne changent qu’à chaque nouvelle saison, (explication du fonctionnement des astreintes, instructions pour devenir bénévole, …).</p>
  <p>Les articles sont rangés par catégories afin de les retrouvés plus rapidement.</p>

  <hr>

  <h1>3 - <a href="https://scorenco.com/">Score n'Co</a></h1>
  <h2>Description</h2>
  <p><a href="https://scorenco.com/">Score n'Co</a> est une startup Nantaise qui développe des solutions Mobile et Web afin de permettre aux clubs, joueurs, et supporters de pouvoir profiter, partager, et se regrouper autour de leurs sports.</p>

  <h2>Paramétrage</h2>
  <p>Il suffit de créer un compte, d'enregistrer son club et ensuite de créer les widgets en rapport à ce que l'on souhaite montrer (Prochains matchs, statistiques, calendrier, etc ...)</p>
  <p>Ensuite, le site nous fourni un code HTML afin de pouvoir l'ajouter à notre site web. Mais également disponible sur l'application mobile.</p>

  <h2>Utilisation</h2>
  <p>L'utilisation des widgets de Score n'Co permet d'obtenir un ensemble d'information provenant de la <a href="http://www.ff-handball.org/">Fédération Française de Handball</a>.</p>
  <p>Ces informations peuvent être brutes mais, ou bien traitées comme par exemple pour les comptes à rebours avant les prochains matchs.</p>
  <p>Le seul inconvénient est que nous devenons donc dépendant de la Fédération et qu'en cas d'erreur sur celle-ci, nous affichons également des erreurs sans pouvoir les corriger. Cependant, cette startup offre tellement que ce léger inconvénient n’est pas gênant.</p>
  <hr>

  <h1>4 - Informations</h1>
  <h2>Langages</h2>

  <h3>HTML / CSS</h3>
  <p>Le HTML et le CSS sont des langages de base en développement de site web. Le HTML est utilisé afin d’afficher les éléments. Il est également parfois générer par du Javascript afin de rendre le site plus dynamique. Le langage HTML permet d’afficher des éléments de manière statique, le seul moyen de modifier ce qui est affiché est de recharger la page.
Le CSS permet d’ajouter du design à notre site, il sert également aux animations.</p>

  <h3>PHP</h3>
  <p>Le langage PHP est le moins présents en terme de quantité de ligne de code, cependant c’est le plus utile.</p>
  <p>Tout les codes HTML sont enregistrer avec l’extension PHP.
Cela nous permet d’imbriquer du code HTML dans d’autres codes HTML via la méthode PHP « include »,mais aussi de charger les scripts Javascript en fonction de la page. On évite donc par exemple, de recopier le code du pied de page autant de fois que l’on a une page. On peut donc le modifier plus facilement.</p>
  <p>Le PHP est donc utilisé afin de simplifier le fonctionnement et l’évolution du site.
Grâce à ce langage, on a créé un « moteur de template ». C’est à dire que l’on part d’une page et en fonction de ce que l’on veut, on va créer la page dynamiquement et on a donc pas besoin d’écrire toutes pages mais juste les moyens de les afficher.</p>

  <h3>Javascript</h3>
  <p>Le Javascript est utilisé pour rendre le site plus dynamique ainsi que pour généraliser  et simplifier le code.</p>
  <p>Les scripts commençant par « add » permettent l’ajout d’information à la page provenant des fichiers JSON. </p>
  <p>Ceux commençant par « change » vont modifier des informations sur la page, comme l’URL ou le titre. Cela permet de créer une page standard pour toutes les équipes et non pour chaque équipe afin d’éviter de dupliquer du code inutilement. On a donc une page standard et on vient changer son URL et titre.</p>
  <p>Les scripts commençant par « manage » sont utilisés pour lancer les scripts précédents, ils orchestres les autres dans leur fonctionnement.</p>
  <p>Les autres scripts servent au design et à l’ajustement du site de manière responsive.</p>

  <h3><a href="http://www.json.org/json-fr.html">JSON</a></h3>
  <p>Le langage JSON est utilisé afin de stocker des données dans des fichiers. Il est utilisé pour stocker les contacts, coachs, équipes et salles. Ce format permet une utilisation très simple avec du Javascript. On peut comme cela ne pas utiliser de base de données relationnelle et donc permettre à des novices de programmation de modifier très simplement les informations car ce format à l’avantage d’être lisible sas avoir de connaissance en programmation.
</p>

  <h2>Frameworks</h2>
  <h1><a href="http://getbootstrap.com/getting-started/">BootStrap</a></h1>
  <p>BootStrap est un framework offrant la possibilité de concevoir notre site responsive sans avoir besoin de tout faire nous même, il permet de gagner du temps sur le design en évitant la conception de toutes les méthodes pour afficher le moindre élément afin de garder une certaine homogénéité.</p>

  <h3><a href="https://jquery.com/">JQuery</a></h3>
  <p>JQuery est un framework Javascript mettant à disposition des outils Javascript performant et puissant sans avoir besoin de tout faire. Il offre une certaine abstraction dans l’utilisation du Javascript.</p>

  <h2>Fonctionnement</h2>
  <p>Voici comment le site fonctionne. On utilise l’URL afin de définir la page à laquelle on souhaite accéder. A chaque fois que l’on charge une page, on charge la même page (index.php), on extrait les informations contenus dans l’URL  (index.php), on envoi ces informations dans une fonction PHP permettant de savoir la page à afficher (f_create_page.php). Cette méthode nous permet de dire le titre le la page, son contenue ainsi que les scripts à charger.
Une fois cela fait, on charge la page en fonction du code contenue dans la page, ainsi que dans les scripts.</p>

  <hr>
