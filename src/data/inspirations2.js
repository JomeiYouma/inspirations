/*
 * ─── Données ────────────────────────────────────────────────────────────────
 *
 * AXES
 *   x : E, vecteur d'émotion (ce que ça me procure), sur 100.
 *   y : P, vecteur de production (la part de mon travail qui y fait appel), sur 100.
 *   Chaque axe va de la plus petite valeur des entrées à 100 (voir src/scale.js).
 *
 * ENTRÉE
 *   id       identifiant court, sert aussi de numéro affiché ("01", "02"…)
 *   title    nom de l'inspiration
 *   x, y     scores E et P (sur 100)
 *   image    image du point, recadrée en cercle. Mettre les fichiers dans
 *            /public/images et écrire '/images/mon-fichier.jpg'.
 *            Tant que le fichier n'existe pas, un halo tramé le remplace.
 *   text     paragraphe. Les doubles sauts de ligne créent des paragraphes.
 *   media    liste de contenus :
 *              { type: 'image', src: '/images/x.jpg', caption: '…' }
 *              { type: 'video', src: '/videos/x.mp4', caption: '…' }   (fichier)
 *              { type: 'embed', src: 'https://www.youtube.com/embed/ID' } (YouTube, Vimeo…)
 *              { type: 'audio', src: '/musics/x.mp3' }
 *   links    liens vers l'œuvre, ouverts dans un nouvel onglet :
 *              { label: 'Instagram', href: 'https://…' }
 *
 * Les notes de travail (sources, vérifications) vivent dans notes.local.md,
 * à la racine, hors du dépôt.
 *
 * Les images externes doivent autoriser le CORS pour être tramées ;
 * le plus simple est de tout placer dans /public.
 */

export const axes = {
  x: { label: "vecteur d'émotion", short: 'E' },
  y: { label: 'vecteur de production', short: 'P' }
};

// Texte d'introduction du dossier ; conservé ici, pas affiché pour l'instant.
export const prelude = `L'inspiration est pour moi un concept spontané dont la logique m'échappe souvent — sans doute parce que mon expression artistique ne se résume qu'aux pas balancés d'une valse d'émotions et de sentiments qui me traversent. Il m'est donc plus familier de répondre à cette attente en convoquant une création de référence ou une esthétique personnellement développée, plutôt que de témoigner d'une « inspiration » tant fantasmée.

D'ailleurs, la majorité des expériences qui ont forgé mon inspiration viennent probablement d'un agrégat de mes expériences personnelles plutôt que de telle ou telle œuvre précise. C'est en partie ce qui rend l'exercice difficile : au-delà de la recherche d'esthétiques qui m'attirent, ou de valeurs que j'aimerais faire miennes ou suivre, expliquer comment une œuvre, une personne ou une expérience m'inspire relève souvent de l'intuition plus que de l'analyse.

Cette idée d'un agrégat plutôt que d'une source unique trouve un écho dans la réflexion que propose Gilles Vallée dans Est-ce que l'inspiration existe ? — un article qui interroge, à travers plusieurs voix d'artistes et d'écrivains, si l'inspiration relève de la grâce ponctuelle ou de l'accumulation par le travail.`;

export const inspirations = [
  {
    id: '01',
    title: 'U',
    x: 24,
    y: 56,
    image: '/images/u-icon.jpg',
    text: `U est un film d'animation de Serge Élissalde et Grégoire Solotareff, sorti en octobre 2006, produit par Prima Linea, avec des chansons de Sanseverino. Mona, orpheline, vit dans un château au bord de la mer avec deux rats, Goomi et Monseigneur, qui la maltraitent. Ses larmes font apparaître U, une licorne qui promet de rester aussi longtemps que Mona aura besoin d'elle. Puis Mona grandit. Une famille de musiciens, les Wéwés, s'installe dans la forêt, elle tombe amoureuse de leur guitariste, un chat nommé Kulka, et la licorne devient peu à peu inutile sans que personne ait à le lui dire.

Je l'ai vu chez mes parents, très jeune, et il m'a mis mal à l'aise. Il m'a même paru médiocre. Par contre, beaucoup d'éléments me sont restés en tête, notamment des scènes visuelles comme l'entrée du château, la forêt décorée à l'occasion d'une fête dont les traits bougent au son de la guitare… C'était aussi la première fois où j'ai saisi l'existence d'une idée en sous-texte. Il a fallu y revenir plusieurs fois, à plusieurs moments de ma vie. Chercher ce que les auteurs voulaient montrer et comment ça se traduisait dans l'image et le son, c'était la première fois que je me posais ce genre de questions, et ça m'a finalement fait grandement apprécier ce film (il est amusant de constater sur la version en ligne sur YouTube dans l'espace commentaire que c'est le cas d'un nombre phénoménal de spectateurs).

Le film porte l'idée suivante : un lien n'existe que tant que quelqu'un en a besoin, et s'éteint avec ce besoin. Le bonheur des uns fait le malheur des autres, dans cet ordre, et une seule relation y suffit. Esthétiquement parlant, beaucoup d'idées passent par les formes des corps. Les rats sont mous et gris, ils traînent leur laideur comme un vêtement trop grand, Mona s'allonge et se stylise en grandissant, Kulka a une silhouette de chanteur de rock. Quand il me faut donner un caractère à une forme ou à un animal, c'est ce film qui me revient.

Tout cela sous des décors peints à l'aquarelle, entre la forêt en plein soleil et les nuits du château froides et humides.`,
    links: [
      { label: 'Bande-annonce', href: 'https://www.allocine.fr/video/player_gen_cmedia=18701556&cfilm=108974.html' },
      { label: 'Fiche du film, Unifrance', href: 'https://www.unifrance.org/film/26738/u' },
      { label: 'Fiche distributeur, Gebeka Films', href: 'https://www.gebekafilms.com/fiches-films/u/' }
    ],
    media: [
      { type: 'image', src: '/images/u-image-a.jpg' },
      { type: 'image', src: '/images/u-image-b.jpg' },
      { type: 'audio', src: '/musics/u-music.mp3' }
    ]
  },
  {
    id: '02',
    title: 'Daft Punk',
    x: 84,
    y: 91,
    image: '/images/daftpunk-icon.jpg',
    text: `Daft Punk, ce sont deux Français, Thomas Bangalter et Guy-Manuel de Homem-Christo, actifs de 1993 à 2021. Quatre albums studio, de Homework en 1997 à Random Access Memories en 2013, un disque live, Alive 2007, et la bande originale de TRON: Legacy, enregistrée avec un orchestre de quatre-vingt-cinq musiciens. Le premier morceau que j'ai entendu, au collège, est « Veridis Quo », mais ce n'est pas par là que ça a compté.

Leur musique parle de technologie, d'un point de vue différent dans chaque album. Et chaque album prend le contre-pied du précédent. Discovery est chaud et disco, construit sur des samples de soul et de funk découpés comme le fait le hip-hop. Human After All, enregistré en six semaines, est sec, répétitif, volontairement froid. Random Access Memories répond au tout-numérique en faisant jouer des musiciens en studio, Nile Rodgers et Giorgio Moroder parmi eux.

Leur ambition ne connaît visiblement pas de limites. Homework a été fait dans la chambre de Bangalter, d'où son titre, et quelques années plus tard les deux robots jouaient à Coachella, sur une scène ayant mis les bandes de LED en rupture de stock dans tous les États-Unis, mixant leurs trois albums. Sur Alive 2007, « One More Time » est mixé avec « Aerodynamic » : mes 7 minutes préférées de leur carrière.

J'en tire une tendance à me permettre ce que j'aime plutôt que ce qui se fait — surtout dans un cadre de composition musicale. Et leur musique me sert à me concentrer, ou à me plonger dans l'univers qu'elle crée, quand elle ne passe pas directement dans mes mixtapes.`,
    links: [
      { label: 'Site officiel', href: 'https://www.daftpunk.com/' },
      { label: 'Discographie sur Spotify', href: 'https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi' },
      { label: 'Random Access Memories sur Spotify', href: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa' }
    ],
    media: [
      { type: 'image', src: '/images/daftpunk-image-a.jpg' },
      { type: 'image', src: '/images/daftpunk-image-c.png' },
      { type: 'image', src: '/images/daftpunk-image-d.jpg' }
    ]
  },
  {
    id: '03',
    title: 'Hirohiko Araki',
    x: 12,
    y: 45,
    image: '/images/araki-icon.jpg',
    text: `Hirohiko Araki dessine JoJo's Bizarre Adventure depuis 1987, neuf parties à ce jour, et son dessin est sorti du manga plus d'une fois : une commande du Louvre en 2009, Rohan au Louvre, des histoires pour Gucci exposées à Shinjuku puis dans les vitrines de la marque, et un livre de méthode, Manga in Theory and Practice, où il explique comment il compose une planche.

Cette œuvre est une de celles qui ont le plus formé mon œil, et pour une raison que je peux nommer : on ne sait jamais à quoi ressemblera la page suivante. Le style est outrancier, et il est instable depuis presque quarante ans. Les carrures de Phantom Blood, héritées de Hokuto no Ken, sont devenues les silhouettes longilignes de Steel Ball Run. Araki refuse de fixer une couleur à ses personnages et laisse chaque image décider de la sienne. Pour dessiner ses hommes, il dit regarder les mannequins des magazines de mode féminins, qui tordent les hanches et plient le cou, et il rattache ses poses à la sculpture italienne. D'où ces corps androgynes qui ne tiennent debout que par des tensions musculaires improbables, sur des fonds art nouveau où les onomatopées font partie du dessin. Chez un mangaka de cette longévité, ce refus de se stabiliser est rare, et c'est ce que je retiens avant le reste.
Ça m'a pas mal appris techniquement, parce que pour imiter ses poses il a fallu apprendre à regarder les corps et les visages, à les décomposer en volumes et en plans pour les faire tourner dans l'espace. Aussi, même si beaucoup de mes travaux cherchent une forme d'excentricité, Araki témoigne d'une force de caractère pour aller au bout d'une idée sans la tempérer que je trouve particulièrement inspirante.`,
    links: [
      { label: 'Yugo Kanno sur Spotify', href: 'https://open.spotify.com/artist/56DDzGJXY0xndL9wu9aHUD' },
      { label: 'Rohan au Louvre, éditions du Louvre', href: 'http://editions.louvre.fr/fr/les-ouvrages/bandes-dessinees-jeunesse/le-louvre-et-la-bande-dessinee/rohan-au-louvre.html' },
      { label: 'JoJo x Gucci, VIZ', href: 'https://www.viz.com/blog/posts/jojo-x-gucci-collabo-takes-over-the-world-1438' },
      { label: 'Portail officiel JoJo', href: 'https://jojo-portal.com/' }
    ],
    media: [
      { type: 'image', src: '/images/araki-image-b.jpg' },
      { type: 'image', src: '/images/araki-image-c.jpg' },
      { type: 'image', src: '/images/araki-image-d.jpg' }
    ]
  },
  {
    id: '04',
    title: "Jujutsu Kaisen",
    x: 76,
    y: 80,
    image: '/images/jjk-icon.jpg',
    text: `Jujutsu Kaisen est un manga de Gege Akutami, publié dans le Weekly Shōnen Jump de 2018 à 2024 et adapté par le studio MAPPA : une première saison en 2020, un film en 2021, une seconde saison en 2023. Pour l'animation, c'est un storyboard cosigné par Hakuyu Go et une animation clé du Français Vincent Chansard.

J'ai découvert JJK en 2020, à un moment où j'avais la possibilité de prendre le temps d'en discuter avec un groupe d'amis. On décortiquait chaque sortie, le plus souvent en confrontant nos attentes et interprétations. Une bonne part de ce que je sais sur la construction d'un personnage vient de ces discussions, et c'est là aussi que j'ai appris à lire une animation plan par plan.

Ce qui me sert vient de plusieurs endroits de l'œuvre à la fois. Akutami explique ses systèmes avec un luxe de détails presque scientifique, au point que le lecteur peut s'y perdre, et cette rigueur donne au récit une tenue rare dans le genre. La folie y est montrée souvent, et chaque fois sous une forme différente de la précédente. À l'écran, deux techniques d'animation coexistent, un trait net tant que les choses restent maîtrisées, un trait brut dès que l'action l'est, et on voit passer la frontière. Dans l'œuvre, chaque personnage vit l'amour d'une façon singulière, par obsession, par envie ou par procuration, et ce sous-texte est assez discret pour qu'une seconde lecture change le sens de la première.

On retrouve, pour finir, dans Jujutsu Kaisen, une théâtralisation de l'action qui me parle beaucoup. Les personnages se déplacent dans l'espace, et l'environnement est mis en scène pour eux. Lors des combats, on aperçoit très souvent des gestes similaires à ceux d'une danse, et la chorégraphie est pensée comme un spectacle.
Ajoutons à ça la bande originale de Hiroaki Tsutsumi, Yoshimasa Terui et Alisa Okehazama, et on obtient une œuvre qui inocule une énergie jouissive et puissante, que ce soit dans la gloire ou la tension.`,
    links: [
      { label: 'Site officiel de l\'anime', href: 'https://jujutsukaisen.jp/' },
      { label: 'Le manga, Shōnen Jump', href: 'https://www.shonenjump.com/j/rensai/jujutsu.html' },
      { label: 'Le manga en anglais, VIZ', href: 'https://www.viz.com/jujutsu-kaisen' },
      { label: 'Bande originale de la série sur Spotify', href: 'https://open.spotify.com/album/5QYGsl05fLEEE4fUjz4rkt' },
      { label: 'Vincent Chansard sur Instagram', href: 'https://www.instagram.com/vincentchansard/' }
    ],
    media: [
      { type: 'image', src: '/images/jjk-image-a.jpg' },
      { type: 'image', src: '/images/jjk-image-b.jpg' },
      { type: 'image', src: '/images/jjk-image-c.jpg' }
    ]
  },
  {
    id: '05',
    title: 'Le cirque du XIXᵉ siècle',
    x: 69,
    y: 75,
    image: '/images/cirque-icon.jpg',
    text: `Mon époque préférée dans l'histoire du cirque est celle de la fin du XIXᵉ siècle. C'est dans des œuvres telles que Le Soldat chamane de Robin Hobb, Le Prestige de Christopher Nolan, The Greatest Living Show de Toby Fox et Itoki Hana et l'arc Book of Circus de Black Butler que je retrouve la meilleure représentation fantaisiste de celle-ci.

Dans ce Londres qui rejette les atypiques, les marginaux, le cirque ramasse ceux que rejette Londres. Atypiques, marginaux, ils sont accueillis et exhibés. Dans les cabarets, chapiteaux une devise prévaut : émerveiller l'auditoire, lui faire vivre un impossible ! Au service de cet idéal, le cirque assume de manipuler son public et fait de cette manipulation un art en soi.

L'esthétique y est intéressante, les mécanismes et les automates de ces spectacles donnent une ambiance mi-festive, mi-inquiétante, qui saisit les spectateurs et leur coupe le souffle. À ça vient s'ajouter la valeur de tolérance entendue au sens strict, accepter ce qui dérange, que je reprends dès que je travaille une scénographie ou la construction d'une expérience, avec ce goût de dépasser ce qu'on croit possible sans perdre le sourire.`,
    links: [
      { label: 'Le Cirque de Seurat, musée d\'Orsay', href: 'https://www.musee-orsay.fr/en/artworks/le-cirque-3015' },
      { label: 'The Greatest Living Show, clip', href: 'https://www.youtube.com/watch?v=qFow8LkHtlU' },
      { label: 'Affiche de Chéret, Nouveau Cirque (Gallica)', href: 'https://gallica.bnf.fr/ark:/12148/btv1b9015728m' },
      { label: 'Cirque d\'Hiver', href: 'https://www.cirquedhiver.com/' }
    ],
    media: [
      { type: 'audio', src: '/musics/cirque-music.mp3', title: 'Julius Fučík, Entrée des gladiateurs (1897). United States Marine Band (domaine public)' },
      { type: 'image', src: '/images/cirque-image-a.jpg' },
      { type: 'image', src: '/images/cirque-image-b.jpg' },
      { type: 'image', src: '/images/cirque-image-c.jpg' }
    ]
  },
  {
    id: '06',
    title: 'Traité de sociologie du travail',
    x: 31,
    y: 50,
    image: '/images/sociologie-icon.jpg',
    text: `Le Traité de sociologie du travail est un ouvrage collectif en deux volumes, parus chez Armand Colin en 1961 et 1962 sous la direction de Georges Friedmann et Pierre Naville, et préparé pendant plus de cinq ans par leurs équipes. On y trouve l'emploi, l'entreprise, les qualifications, les valeurs du monde ouvrier et l'organisation de la vie dans une civilisation industrielle. Naville a eu plusieurs vies, poète surréaliste dans les années vingt et codirecteur de La Révolution surréaliste, militant trotskiste, puis sociologue.

Trouvé dans une boîte à livres, et j'y ai trouvé une façon d'observer l'objet « travail » d'un œil révélateur. Naville se demande ce que la machine fait à la pratique du travail et à la qualification du travailleur. Dans ses propres travaux, jusqu'à Vers l'automatisme social ? en 1963, il montre que l'automation fait éclater les métiers traditionnels : à une division de tâches isolées se substitue une répartition mobile de fonctions intégrées, et ce que vaut un travailleur dépend alors de sa place dans l'ensemble.

Je suis développeur, et cette question revient tous les jours avec les progrès de l'IA. Devant un tel outil, le devenir du technicien est un combat incessant. C'est quelque chose que je ne peux pas ignorer lors de la conception d'un objet, d'un système ou d'une interface. Je me dois de me demander qui va en faire quoi, dans quelles latitudes. La méthode du Traité compte autant que sa thèse : enquête, terrain, chiffres : une application de la méthode scientifique comme il se doit.`,
    links: [
      { label: 'Compte rendu du Traité, Persée (1961)', href: 'https://www.persee.fr/doc/rfsoc_0035-2969_1961_num_2_3_5947' },
      { label: 'Notice du Traité, BnF', href: 'https://catalogue.bnf.fr/ark:/12148/cb37356650j' },
      { label: 'Vers l\'automatisme social ?, Gallimard', href: 'https://www.gallimard.fr/catalogue/vers-l-automatisme-social/9782070247011' },
      { label: 'Compte rendu de Naville, Persée (1964)', href: 'https://www.persee.fr/doc/rfsoc_0035-2969_1964_num_5_3_6368' }
    ],
    media: [
      { type: 'image', src: '/images/sociologie-image-a.jpg' },
      { type: 'image', src: '/images/sociologie-image-b.jpg' }
    ]
  },
  {
    id: '07',
    title: "Le cycle d'Ender",
    x: 90,
    y: 93,
    image: '/images/ender-icon.jpg',
    text: `Le cycle d'Ender, d'Orson Scott Card, tient en quatre romans : La Stratégie Ender en 1985, La Voix des morts l'année suivante, Xénocide en 1991, Les Enfants de l'esprit en 1996. Ender Wiggin a six ans quand on l'envoie à l'École de guerre apprendre à combattre les Doryphores, une espèce extraterrestre. Ce premier tome, le plus connu, est surtout une entrée dans l'univers de Card. Ceux qui suivent changent de paradigme à chaque fois, et la science-fiction y devient le moyen de parler de pardon, de perte, de mémoire, de religion, de culpabilité, de manipulation, de maltraitance, et de la peur de l'autre.

À cela s'ajoute la cohérence de l'univers. Chaque technologie y est expliquée sur une base scientifique poussée, et les systèmes se répondent d'un tome à l'autre. C'est ce que j'ai retenu pour l'écriture : décrire les objets techniques de près, et surveiller la cohérence des systèmes avec autant de soin que l'intrigue. Il me reste aussi de ces quatre livres beaucoup de chemin fait comme lecteur, et l'habitude de prendre du recul sur ce qu'on m'a d'abord donné à croire.`,
    links: [
      { label: 'Site officiel d\'Orson Scott Card', href: 'http://www.hatrack.com/' },
      { label: 'La Stratégie Ender, page du livre', href: 'http://hatrack.com/osc/books/endersgame/' },
      { label: 'La nouvelle d\'origine (1977)', href: 'http://www.hatrack.com/osc/stories/enders-game.shtml' }
    ],
    media: [
      { type: 'image', src: '/images/ender-image-a.jpg' },
      { type: 'image', src: '/images/ender-image-b.jpg' }
    ]
  },
  {
    id: '08',
    title: 'Gigantisme et mégastructures',
    x: 89,
    y: 46,
    image: '/images/structure-icon.jpg',
    text: `Sous ce titre je range des constructions réelles ou imaginaires qui dépassent l'échelle humaine. La Tour de Babel, le cénotaphe de Newton dessiné par Boullée en 1784, le chœur de la cathédrale de Beauvais, les grandes orgues, dont celles de Passau et ses dix-sept mille tuyaux. Dans un autre style, la Cité sans fin de BLAME!, les architectures de Scorn, La Tour de Babylone de Ted Chiang, où des mineurs grimpent pendant des mois pour aller percer la voûte du ciel.

Ma sensibilité pour ces édifices s'explique par deux raisons. La première étant le vertige que cause la comparaison de la petitesse de notre propre personne face à l'exubérant gigantisme de ces constructions. Le prix matériel et humain que celles-ci ont coûté, les moyens colossaux qu'il a fallu arracher à la terre pour les construire. On peut lire dans ces bâtiments l'ambition de ceux qui les ont conçus, leurs aspirations, leur histoire.

La deuxième raison est le caractère immémorial de ces constructions. Ce sont des projets qui dépassent la vie de ceux qui les ont commencés, et qui continuent après eux. Il y a quelque chose de mystique à croire que l'on ne verra jamais la fin d'une construction, et à anticiper le passage de la main à des générations inconnues.

C'est peut-être ce qui rend ces constructions si ambivalentes à mes yeux. J'aime leur démesure précisément parce qu'elle est inutile : construire plus haut, plus grand, plus longtemps que ce que la nécessité impose. Mais cette démesure suppose des ressources arrachées à la terre, des quantités considérables de travail, souvent de la souffrance, et des conséquences écologiques que l'on ne peut pas ignorer. Il y a donc quelque chose d'à la fois admirable et inquiétant dans ces œuvres : leur beauté naît en partie de leur excès, mais c'est aussi cet excès qui en constitue le coût. Je ne cherche pas à résoudre cette contradiction ; c'est justement elle qui m'intéresse.`,
    links: [
      { label: 'La Tour de Babel, KHM Vienne', href: 'https://www.khm.at/en/artworks/turmbau-zu-babel-1511924' },
      { label: 'Orgues de St. John the Divine', href: 'https://www.stjohndivine.org/music/cathedral-organs' },
      { label: 'BLAME!, Kodansha', href: 'https://kodansha.us/series/blame/' }
    ],
    media: [
      { type: 'audio', src: '/musics/structure-music.m4a', title: 'Charles-Marie Widor, Symphonie gothique (1895), Moderato. Ulrich Brüggemann, orgue de la cathédrale de Cologne (CC BY-SA 4.0), extrait' },
      { type: 'image', src: '/images/structure-image-a.jpg' },
      { type: 'image', src: '/images/structure-image-b.jpg' },
      { type: 'image', src: '/images/structure-image-c.jpg' }
    ]
  },
  {
    id: '09',
    title: 'Louis de Funès',
    x: 80,
    y: 65,
    image: '/images/funes-icon.jpg',
    text: `Louis de Funès, 1914-1983, a été pianiste de bar avant d'être acteur, et il a attendu la cinquantaine, après vingt ans de petits rôles, pour devenir célèbre. Petit, nerveux, acide, manipulateur et gourmand, il est à peu près le même homme dans La Grande Vadrouille, Le Grand Restaurant, Oscar, Rabbi Jacob ou L'Avare.

C'est une de mes références favorites en matière d'humour, aimée très tôt, et je n'ai trouvé chez personne d'autre un style aussi reconnaissable. Son humour a l'air simple parce qu'il est visuel, mais il repose sur une technique de rythme, des accélérations, des silences, des répétitions calées à la fraction de seconde.

Ce que j'en fais, je ne peux pas le décrire avec précision, parce que c'est passé dans mon propre humour sans que je l'aie décidé. Je crois y reconnaître le goût du surjeu quand il est bien placé, des gestes qui se passent de dialogue, et une certaine forme d'amour acerbe.`,
    links: [
      { label: 'Musée Louis de Funès', href: 'https://museedefunes.fr/' },
      { label: 'La Grande Vadrouille, archive INA', href: 'https://www.ina.fr/ina-eclaire-actu/video/caf97063324/la-grande-vadrouille' },
      { label: 'Tournage à Meursault, archive INA', href: 'https://www.ina.fr/ina-eclaire-actu/video/dxc9810143876/tournage-du-film-la-grande-vadrouille-a-meursault-en-cote-d-or' },
      { label: 'Archives Louis de Funès, INA', href: 'https://mediaclip.ina.fr/en/catalogue/personalities/5235-louis-de-funes.html' }
    ],
    media: [
      { type: 'image', src: '/images/funes-image-a.jpg' },
      { type: 'image', src: '/images/funes-image-b.jpg' },
      { type: 'image', src: '/images/funes-image-c.jpg' }
    ]
  },
  {
    id: '10',
    title: 'Les Shadoks',
    x: 43,
    y: 67,
    image: '/images/shadoks-icon.jpg',
    text: `Les Shadoks sont une série animée, produite par le Service de la recherche de l'ORTF que dirigeait Pierre Schaeffer, et diffusée à partir du 29 avril 1968 par épisodes de deux ou trois minutes. Claude Piéplu y lit le texte de Jacques Rouxel ; Robert Cohen-Solal, du GRM, en écrit la musique. Les Shadoks sont des oiseaux ronds sur de longues pattes. Ils sont méchants, absurdes et égoïstes. Ils ne connaissent que quatre mots, ga, bu, zo, meu, et construisent pour rejoindre la Terre des machines qui ne marchent jamais.

J'ai découvert Les Shadoks bien après leur création, en regardant la série puis en lisant une bande dessinée et un livre qui lui sont consacrés. Ce qui m'a immédiatement plu, c'est l'impression qu'il n'y avait presque aucune limite à ce que la série pouvait inventer. Une situation pouvait partir dans n'importe quelle direction, une idée pouvait être poussée jusqu'à l'absurde, et rien n'obligeait le récit à revenir vers quelque chose de raisonnable. Les Shadoks semblent fonctionner selon leurs propres règles, mais surtout selon une imagination qui ne cherche jamais à se justifier.

C'est cette liberté qui m'inspire. Les Shadoks donnent une existence concrète à des idées qui, prises isolément, n'ont parfois aucun sens. Ils construisent des machines inutiles, trouvent des solutions à des problèmes qu'ils ont eux-mêmes créés et poursuivent leurs entreprises avec un sérieux imperturbable. Il y a quelque chose de libérateur dans cette manière de créer : une idée n'a pas besoin d'être utile, réaliste ou raisonnable pour mériter d'être développée. Il suffit parfois de lui donner ses propres règles et de voir jusqu'où elle peut aller. C'est une façon de penser que j'aimerais conserver dans mes propres projets : prendre une idée au sérieux, même lorsqu'elle semble absurde, et ne pas chercher trop vite à la ramener à quelque chose de raisonnable.`,
    links: [
      { label: 'Générique de 1968, INA', href: 'https://www.ina.fr/ina-eclaire-actu/video/i09169819/generique-des-shadoks' },
      { label: 'Premier épisode, INA', href: 'https://www.youtube.com/watch?v=hIsmvjD83VI' },
      { label: 'Tous les épisodes, chaîne INA', href: 'https://www.youtube.com/playlist?list=PLsbtzZi9n5PuBrx4gzlvFWsz3bIYnq9DB' },
      { label: 'L\'intégrale des Shadoks, INA', href: 'https://ina.fr/contenus-editoriaux/articles-editoriaux/l-integrale-des-shadoks' }
    ],
    media: [
      { type: 'image', src: '/images/shadoks-image-a.jpg' },
      { type: 'image', src: '/images/shadoks-image-b.jpg' }
    ]
  },
  {
    id: '11',
    title: 'Dessins techniques et anatomiques',
    x: 15,
    y: 78,
    image: '/images/dessin-icon.jpg',
    text: `Dès Vitruve au 1er siècle avant J.-C., les architectes et ingénieurs ont cherché à représenter les objets qu'ils construisaient ; les anatomistes leur ont emboîté le pas, cherchant à représenter les corps qu'ils étudiaient. Issus de ces travaux, les dessins techniques et anatomiques ont été publiés dans des traités, des manuels et des encyclopédies, et ils ont été reproduits dans des revues spécialisées. Leurs auteurs sont souvent restés anonymes, mais certains noms sont connus : Vésale, Gray, Bourgery et Jacob pour l'anatomie, Boullée, Boulle et Lequeu pour l'architecture.

Ces dessins ont à mes yeux une beauté particulière. Dans un but de réalisme le plus poussé, ils ont pour seule règle d'être exacts et complets, descriptifs et pédagogiques. Une coupe ou un éclaté ne correspondent à rien de visible dans la nature. Comme un bourgeon éclot en une rose, ils révèlent les différentes couches et intrications présentes dans leurs objets d'étude. Le trait peut y rester froid et mécanique. Il peut aussi trahir quelque chose de la personne qui a dessiné. Dans une planche de botanique, on devine la patience qu'il a fallu pour retirer une cuticule ou écarter des sépales sans rien déchirer, avant de dessiner ce qu'il y avait dessous.

Cette manière de décomposer les systèmes m'intéresse. J'aime zoomer, séparer, détailler les étapes d'un travail et montrer comment les morceaux s'articulent, et cela vaut pour un objet dessiné comme pour un projet ou même un bout de code.`,
    links: [
      { label: 'Vésale, Fabrica, NLM', href: 'https://www.nlm.nih.gov/exhibition/historicalanatomies/vesalius_home.html' },
      { label: 'Fabrica de 1543 numérisée', href: 'https://www.vesaliusfabrica.com/en/original-fabrica/the-art-of-the-fabrica/newly-digitized-1543-edition.html' },
      { label: 'Encyclopédie et planches, ENCCRE', href: 'https://enccre.academie-sciences.fr/encyclopedie/' },
      { label: 'David Macaulay, ses livres', href: 'https://www.penguinrandomhouse.com/authors/239040/david-macaulay/' }
    ],
    media: [
      { type: 'image', src: '/images/dessin-a.jpg' },
      { type: 'image', src: '/images/dessin-image-b.jpg' },
      { type: 'image', src: '/images/dessin-c.jpg' }
    ]
  },
  {
    id: '12',
    title: 'Jean-Sébastien Bach',
    x: 92,
    y: 62,
    image: '/images/bach-icon.jpg',
    text: `Jean-Sébastien Bach, 1685-1750, a été organiste à Arnstadt, Mühlhausen et Weimar, maître de chapelle à Köthen, puis cantor de Saint-Thomas à Leipzig jusqu'à sa mort, où il a écrit, les premières années, à peu près une cantate par semaine. Dans des œuvres comme L'Art de la fugue, la Passacaille en ut mineur ou la Chaconne de la deuxième Partita pour violon seul, il pousse la musique baroque vers une complexité vertigineuse.

Ce qui me plaît chez Bach, c'est d'avoir parfois l'impression d'être aux commandes d'un instrument-orchestre, faisant s'agiter les différentes voix, les entendre se répondre, se poursuivre et finir par se mêler dans un tumulte qui semble pouvoir déborder à tout instant. C'est puissant, virtuose, parfois presque chaotique, et pourtant d'une précision extrême. Une fugue peut partir d'une idée musicale très simple et en tirer une quantité considérable de matière. Bach n'a pas besoin de multiplier les idées pour créer de la richesse : il en prend une, la retourne, la superpose, la déplace, et continue de l'explorer jusqu'à lui faire dire tout ce qu'elle peut contenir.

C'est une manière de créer qui me parle particulièrement. Une idée n'a pas nécessairement besoin d'être remplacée par une autre dès qu'elle a été comprise ; elle peut être reprise, tordue, approfondie, jusqu'à révéler des choses qu'on ne soupçonnait pas au départ. J'aime cette sensation qu'une œuvre puisse devenir immense sans avoir besoin de partir d'une multitude d'idées. Chez Bach, quelques notes peuvent suffire à mettre en mouvement tout un monde.
`,
    links: [
      { label: 'Bach sur Spotify', href: 'https://open.spotify.com/artist/3JmhaLEL5bCwuY04KtAE98' },
      { label: 'Gould, Goldberg 1955 et 1981 sur Spotify', href: 'https://open.spotify.com/album/3tyRFzOYt5phb4gDW2HOgc' },
      { label: 'Chaconne BWV 1004, Netherlands Bach Society', href: 'https://www.youtube.com/watch?v=7y4lcQ7BTLw' },
      { label: 'Passacaille BWV 582, All of Bach', href: 'https://www.bachvereniging.nl/en/bwv/bwv-582' },
      { label: 'L\'Art de la fugue, All of Bach', href: 'https://www.bachvereniging.nl/en/bwv/bwv-1080' }
    ],
    media: [
      { type: 'image', src: '/images/bach-image-a.jpg' },
      { type: 'image', src: '/images/bach-image-b.jpg' },
      { type: 'audio', src: '/musics/bach-music.mp3', title: 'Toccata et fugue en ré mineur, BWV 565. Norbert Schenk, orgue (CC BY 4.0)' }
    ]
  },
  {
    id: '13',
    title: 'Blue Prince',
    x: 63,
    y: 55,
    image: '/images/blueprince-icon.jpg',
    text: `Blue Prince est un jeu vidéo de Tonda Ros, développé seul pendant huit ans sous le nom de Dogubomb et publié par Raw Fury en 2025. On y explore le manoir de Mount Holly, dont il faut trouver la mystérieuse quarante-sixième pièce alors qu'il n'en compte que quarante-cinq. À chaque porte, trois pièces sont proposées au hasard : on choisit, on construit son plan, et le lendemain tout recommence autrement.

J'y ai joué entre 2025 et 2026, et c'est par lui que j'ai découvert le draft, le principe qui consiste à choisir une carte parmi plusieurs. Le titre lui-même est un jeu de mots sur blueprint, le plan d'architecte, et drafting désigne aussi bien le fait de tirer une carte que de dessiner un plan. Ce genre de coïncidence est souvent le signe qu'une idée est juste, et ici elle l'est : la structure du jeu est son contenu. En même temps qu'on résout des énigmes, on résout le manoir lui-même, son histoire, celle de ses habitants, la raison d'être de chaque objet. Un indice vu le troisième jour sert le quarantième, et il faut tenir un carnet. Le tirage, en échange, refuse parfois pendant plusieurs journées la pièce dont on aurait besoin, et il faut accepter que le hasard fasse partie de la règle.

L'énigme qui m'est restée se trouve au sous-sol, derrière huit portes qui cachent chacune le sceau d'un royaume de l'histoire du jeu, à recomposer pièce par pièce. Un livre, Realm and Rune, donne le symbole central de chaque royaume et un seul sceau complet en exemple, celui de Fenn Aries. Le reste se déduit. Pour refaire celui de Corarica, il faut savoir qu'il y neige, qu'on y voyage par la route, que sa couleur est l'orange et qu'on y passe sa vie à étudier, et rien de cela n'est écrit nulle part. On le reconstitue à partir d'affiches de salle de classe, de passeports, de timbres, de lettres, c'est-à-dire en relisant tout ce qu'on croyait savoir de ces pays.

C'est cette façon de construire une énigme qui me plaît. Blue Prince ne cherche presque jamais à isoler une information et à demander de la trouver au bon endroit : il disperse les morceaux, puis laisse au joueur le soin de comprendre qu'ils appartiennent au même puzzle. Il n'y a pas nécessairement une méthode correcte pour y arriver, seulement ce qu'on est capable de remarquer, de retenir et de relier. J'aime cette confiance accordée au joueur, et l'idée qu'une bonne interface puisse fonctionner de la même manière : ne pas toujours montrer le chemin, mais donner assez de matière pour que plusieurs chemins deviennent possibles.
`,
    links: [
      { label: 'Page Steam', href: 'https://store.steampowered.com/app/1569580/Blue_Prince/' },
      { label: 'Site officiel', href: 'https://www.blueprincegame.com/' },
      { label: 'Page de l\'éditeur Raw Fury', href: 'https://rawfury.com/games/blue-prince/' }
    ],
    media: [
      { type: 'image', src: '/images/blueprince-image-a.jpg' },
      { type: 'image', src: '/images/blueprince-image-b.jpg' },
      { type: 'image', src: '/images/blueprince-image-c.jpg' }
    ]
  },
  {
    id: '14',
    title: 'Nigel Marven',
    x: 20,
    y: 28,
    image: '/images/nigel-icon.jpg',
    text: `Nigel Marven est un présentateur animalier britannique, zoologiste de formation. Il s'est fait connaître avec les documentaires-fictions d'Impossible Pictures, notamment *Chased by Dinosaurs* en 2002, *Sea Monsters* en 2003, où il parcourt les sept mers les plus dangereuses de l'histoire de la Terre, puis *Prehistoric Park* en 2006, où il ramène des espèces disparues dans un parc construit à notre époque.

J'adore les dinosaures, et *Prehistoric Park*, que j'ai vu très jeune, est une véritable madeleine de Proust. Mais ce n'est pas vraiment pour les dinosaures que je le garde ici. Ce qui m'intéresse, c'est la manière dont la série fait semblant d'être un documentaire animalier. On observe d'abord les animaux dans leur milieu, puis on les retrouve dans le parc, où les soigneurs découvrent leur comportement au fur et à mesure. Il faut alors trouver comment nourrir un mammouth, comment s'occuper d'un smilodon ou simplement comment faire fonctionner ce parc. Personne ne semble avoir toutes les réponses. Le documentaire avance avec eux.

La série doit beaucoup à cette manière de raconter. La caméra est à l'épaule, Marven commente ce qu'il voit, hésite, s'approche trop près des animaux et finit régulièrement par se mettre en danger. La vraisemblance ne vient donc pas seulement des effets spéciaux : elle vient surtout du fait que le spectateur partage le point de vue de quelqu'un qui découvre réellement ce qu'il a devant lui. Les animaux ne sont pas seulement des créatures à montrer, ils ont un comportement, des besoins et des contraintes auxquels il faut répondre.

C'est probablement ce que j'en ai gardé dans mes propres projets. Quand je construis un univers, un jeu ou une interface, j'aime qu'une idée ne soit pas seulement jolie ou intéressante en surface, mais qu'elle entraîne avec elle tout un ensemble de conséquences. Un objet doit avoir une raison d'être, un système doit avoir des contraintes, un monde doit pouvoir fonctionner même dans les détails auxquels le spectateur ne pense pas. Je retrouve souvent cette envie dans ma façon de développer : une fois qu'une idée m'intéresse, j'ai tendance à vouloir savoir comment elle fonctionnerait réellement, jusqu'à ses parties les moins visibles.

C'est aussi pour cela que *Prehistoric Park* m'est resté. Il ne se contente pas de montrer un parc rempli d'animaux disparus : il donne envie de réfléchir à ce que cela impliquerait de vraiment faire exister un tel endroit. Et c'est exactement le genre de question qui peut me faire passer d'une idée à un projet.
`,
    links: [
      { label: 'Site officiel', href: 'https://nigelmarven.com/' },
      { label: 'Instagram', href: 'https://www.instagram.com/nigelmarvenofficial/' }
    ],
    media: [
      { type: 'image', src: '/images/nigel-image-a.jpg' },
      { type: 'image', src: '/images/nigel-image-b.jpg' },
      { type: 'image', src: '/images/nigel-image-c.jpg' }
    ]
  },
  {
    id: '15',
    title: 'Nouvelles de Lovecraft',
    x: 64,
    y: 96,
    image: '/images/lovecraft-icon.jpg',
    text: `J'ai surtout découvert Lovecraft à travers ses nouvelles, et c'est ce format qui m'intéresse chez lui. Elles sont souvent courtes, mais donnent l'impression d'ouvrir sur quelque chose de beaucoup plus grand que ce qui est réellement raconté. J'aime cette sensation de sortir d'une histoire avec davantage de questions qu'en y entrant, sans avoir pour autant l'impression qu'il manque quelque chose.

Ce qui me plaît aussi, c'est la place laissée aux détails. Une description, un témoignage, un nom ou un objet peuvent sembler anodins avant de prendre un autre sens quelques pages plus loin. En lisant, je me surprends à revenir sur ce qui a été dit, à essayer de relier les éléments et à reconstruire ce que le texte ne donne jamais complètement.

C'est assez proche de la manière dont j'aime construire mes propres projets. Quand je développe quelque chose, j'ai tendance à accumuler des détails qui ne sont pas forcément visibles immédiatement : une règle derrière une mécanique, une information dans une interface, une explication qui n'apparaîtra qu'après plusieurs étapes. Je préfère souvent que quelqu'un puisse comprendre progressivement comment fonctionne ce que j'ai créé plutôt que de lui expliquer tout son fonctionnement dès le départ.

C'est particulièrement présent dans ma façon de concevoir des jeux et des outils. Je peux passer beaucoup de temps à construire la logique qui se trouve derrière une seule information affichée à l'écran, parce que je sais que cette profondeur finira par se ressentir dans l'ensemble. Les nouvelles de Lovecraft m'ont conforté dans cette idée : je n'ai pas besoin de tout montrer pour que ce que je construis paraisse plus vaste. Il suffit parfois de donner suffisamment d'éléments pour que la personne en face commence elle-même à faire les connexions.
`,
    links: [
      { label: 'Textes de Lovecraft, hplovecraft.com', href: 'https://www.hplovecraft.com/writings/texts/' },
      { label: 'The Call of Cthulhu, texte intégral', href: 'https://www.hplovecraft.com/writings/texts/fiction/cc.aspx' },
      { label: 'The Colour out of Space, texte intégral', href: 'https://www.hplovecraft.com/writings/texts/fiction/cs.aspx' },
      { label: 'Lovecraft en français, Wikisource', href: 'https://fr.wikisource.org/wiki/Auteur:Howard_Phillips_Lovecraft' }
    ],
    media: [
      { type: 'audio', src: '/musics/lovecraft-music.m4a', title: 'The Call of Cthulhu, début de la première partie, lu par Phil Chenevert (LibriVox, domaine public)' },
      { type: 'image', src: '/images/lovecraft-image-a.jpg' },
      { type: 'image', src: '/images/lovecraft-image-b.jpg' },
      { type: 'image', src: '/images/lovecraft-image-c.jpg' }
    ]
  },
  {
    id: '16',
    title: 'Rome',
    x: 99,
    y: 24,
    image: '/images/rome-icon.jpg',
    text: `Rome, la capitale de l'Italie, dans son décor actuel, c'est-à-dire dans tous ses décors à la fois.

J'en suis tombé amoureux à mon dernier passage en Italie, qui a été beaucoup trop court. La ville est une archive à ciel ouvert. Depuis le Palatin, on a sous les yeux plusieurs milliers d'années d'histoire rangées par époques, et l'on comprend avec un temps de retard qu'un monument antique était déjà un vestige pour tous ceux qui nous ont précédés. Les Romains du Moyen Âge y voyaient même une carrière. Le théâtre de Marcellus, achevé treize ans avant notre ère, est devenu forteresse puis palais, et ses étages supérieurs sont toujours habités. Les colonnes de granit qui portent la nef de Santa Maria in Trastevere viennent des thermes de Caracalla. Chaque époque a construit avec les pierres de la précédente sans la détruire tout à fait, et personne n'a planifié le résultat.

Ça a changé ma façon de voir les époques, et l'échelle de temps sur laquelle un lieu peut vivre, sans rapport avec la nôtre. On en revient avec un respect nouveau pour les bâtiments, et une attention au réemploi, cette façon de prendre une pièce ancienne et de la faire servir à autre chose sans effacer ce qu'elle a été. Piranèse, au XVIIIᵉ siècle, a gravé ces ruines plus de cent fois dans ses Vues de Rome, et c'est d'elles qu'il est parti pour ses Prisons imaginaires, des architectures qui n'existent nulle part.`,
    links: [
      { label: 'Parc archéologique du Colisée et Palatin', href: 'https://colosseo.it/' },
      { label: 'Office du tourisme de Rome', href: 'https://www.turismoroma.it/fr' },
      { label: 'Freud, Malaise dans la civilisation', href: 'https://classiques.uqam.ca/classiques/freud_sigmund_2/malaise_civilisation/malaise_civilisation.pdf' }
    ],
    media: [
      { type: 'audio', src: '/musics/rome-music.mp3', title: 'Ottorino Respighi, Les Pins de Rome, IV. Les Pins de la voie Appienne (1924). United States Army Band (domaine public)' },
      { type: 'image', src: '/images/rome-image-a.jpg' },
      { type: 'image', src: '/images/rome-image-b.jpg' },
      { type: 'image', src: '/images/rome-image-c.jpg' }
    ]
  },
  {
    id: '17',
    title: 'Sacré Graal',
    x: 32,
    y: 94,
    image: '/images/graal-icon.jpg',
    text: `Monty Python : Sacré Graal ! est un film de Terry Gilliam et Terry Jones, sorti en 1975 avec un budget modeste que Led Zeppelin et Pink Floyd ont en partie financé. Arthur et ses chevaliers cherchent le Graal sans chevaux, un écuyer entrechoquant derrière eux deux noix de coco. Ils croisent des paysans anarcho-syndicalistes qui leur expliquent le fonctionnement de leur commune, un Chevalier noir qui refuse d'avoir perdu même sans bras ni jambes, un lapin tueur, un pont gardé par trois questions. Un historien qui commentait le récit se fait tuer en plein exposé, et le film s'arrête quand la police arrive et embarque tout le monde.

C'est l'humour absurde anglais à son sommet, et il ne fonctionne que parce que personne, à l'écran, ne fait de clin d'œil. Les raisonnements sont rigoureux et seules les bases sont folles. Si une sorcière brûle comme du bois, et si le bois flotte comme un canard, alors une femme qui pèse le poids d'un canard est une sorcière. Cette rigueur a une source. Terry Jones était un médiéviste sérieux, auteur d'un livre sur le chevalier de Chaucer, et la boue et les querelles politiques des paysans sont plus proches de l'an 932, où le film se situe, que la plupart des films en armure. Il se moque de la légende arthurienne, ce que le folklore anglais a de plus solennel, en la connaissant, pendant que les animations de Gilliam découpent de vraies enluminures pour leur faire dire autre chose.

Ce que j'en tire est une conduite à tenir quand les moyens manquent : chercher la solution du côté du drôle plutôt que de s'enfermer dans le cadre prévu. Pas d'argent pour des chevaux, donc des noix de coco, et cette contrainte est devenue la blague la plus célèbre du film. Le cadre lui-même peut sauter, le récit s'interrompre, la police entrer dans le champ, et le sérieux du jeu suffit à tenir le tout.`,
    links: [
      { label: 'Site officiel des Monty Python', href: 'https://www.montypython.com/' },
      { label: 'Bande-annonce des 40 ans', href: 'https://www.youtube.com/watch?v=scD4_ZVDD-8' },
      { label: 'Chaîne YouTube officielle', href: 'https://www.youtube.com/user/MontyPython' }
    ],
    media: [
      { type: 'image', src: '/images/graal-image-a.jpg' },
      { type: 'image', src: '/images/graal-image-b.jpg' },
      { type: 'image', src: '/images/graal-image-c.jpg' }
    ]
  },
  {
    id: '18',
    title: 'La scène underground de Bristol, début des années 80',
    x: 96,
    y: 88,
    image: '/images/bristol-icon.jpg',
    text: `Je suis arrivé à Bristol par Massive Attack, puis j'ai progressivement remonté le fil jusqu'à The Wild Bunch, The Pop Group et toute cette scène qui s'est construite autour de la ville. Ce qui m'a accroché, ce n'est finalement pas seulement la musique. C'est cette impression que tout le monde se connaît, travaille ensemble, passe d'un projet à l'autre et mélange les disciplines sans vraiment demander la permission.

Il y a quelque chose de très direct dans ce qui en ressort. Les pochettes, les affiches, les clips, les graffitis, les peintures et les musiques n'essaient pas forcément d'être propres ou élégants. Il y a du collage, du grain, du texte, des formes découpées, des images qui se superposent. Ça peut être très travaillé, mais ça garde quelque chose de brut. J'aime particulièrement cette façon de ne pas cacher les moyens utilisés pour fabriquer l'image.

C'est une esthétique que j'ai fini par ramener directement dans mes propres travaux. Le tramage, les collages, les textures volontairement visibles et certains assemblages graphiques viennent en partie de là. Quand je fais une affiche, une interface ou un visuel, j'aime pouvoir laisser apparaître la matière et les morceaux qui le composent plutôt que de chercher à tout lisser.

Mais le plus important reste le côté collectif. Ce qui me plaît dans Bristol, c'est qu'une idée semble rarement rester attachée à une seule personne. Un musicien peut travailler avec un graphiste, un peintre avec un groupe, quelqu'un peut quitter un projet et en créer un autre avec les mêmes personnes. Ça me ressemble dans ma manière de travailler : mes projets sont rarement complètement séparés les uns des autres et j'aime beaucoup reprendre une idée, une technique ou une personne rencontrée ailleurs pour en faire quelque chose de différent.

Bristol me donne surtout envie de faire les choses plus directement : prendre une idée, trouver les gens avec qui la faire et voir ce que le mélange produit, plutôt que de chercher d'abord à savoir si le résultat correspond à une esthétique déjà définie.`,
    links: [
      { label: 'Massive Attack, site officiel', href: 'https://www.massiveattack.co.uk/' },
      { label: 'Discographie sur Spotify', href: 'https://open.spotify.com/artist/6FXMGgJwohJLUSr5nVlf9X' },
      { label: 'Heligoland sur Spotify', href: 'https://open.spotify.com/album/1F8y2bg9V9nRoy8zuxo3Jt' },
      { label: 'The Pop Group', href: 'https://www.thepopgroup.net/' },
      { label: 'Banksy, site officiel', href: 'https://banksy.co.uk/' }
    ],
    media: [
      { type: 'image', src: '/images/bristol-image-a.jpg' },
      { type: 'image', src: '/images/bristol-image-b.jpg' },
      { type: 'image', src: '/images/bristol-image-c.jpg' }
    ]
  },
  {
    id: '19',
    title: 'Giorgos Kazakis',
    x: 37,
    y: 74,
    image: '/images/kazakis-icon.jpg',
    text: `J'ai découvert le travail de Giorgos Kazakis à travers ses tatouages en lettrage. Ce qui m'attire avant tout, c'est leur esthétique : des formes noires, très denses, qui suivent le corps, se répètent et s'entremêlent jusqu'à donner l'impression d'une écriture ancienne ou inconnue. Même lorsque certaines lettres restent identifiables, c'est surtout leur dessin, leur rythme et la manière dont elles occupent la peau qui m'intéressent.

J'aime cette impression d'inscription rituelle que peuvent donner ses compositions. Une langue oubliée, une prière, un mantra, un sceau : ces références donnent aux formes une gravité particulière. Elles semblent avoir été écrites pour une raison précise, même lorsque leur signification nous échappe. Sur le corps, cette impression devient encore plus forte : le dessin épouse les muscles, les articulations et les mouvements, jusqu'à donner l'impression de le sceller ou de le recouvrir d'une nouvelle peau.

C'est principalement cette esthétique que j'emporte dans mon propre travail. J'aime prendre des lettres et les considérer d'abord comme des formes : les épaissir, les étirer, les répéter, les superposer, jusqu'à obtenir une masse graphique qui fonctionne presque comme un motif ou un symbole. Je peux alors m'en servir pour créer des alphabets fictifs, des logos, des inscriptions ou des éléments d'univers qui semblent appartenir à une culture qui existait avant même que je la dessine.

Chez Kazakis, j'aime cette manière de rendre l'écriture presque physique. Le texte devient une matière graphique, capable de donner une identité à une surface simplement par son rythme, sa densité et son mouvement.

`,
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/giorgos_kazakis/' },
      { label: 'Studio Transparent Platform, Berlin', href: 'https://www.transparentplatform.com/' }
    ],
    media: [
      { type: 'image', src: '/images/kazakis-image-a.jpg' },
      { type: 'image', src: '/images/kazakis-image-b.jpg' },
      { type: 'image', src: '/images/kazakis-image-c.jpg' }
    ]
  },
  {
    id: '20',
    title: 'M. C. Escher',
    x: 27,
    y: 39,
    image: '/images/escher-icon.png',
    text: `Ce qui m'intéresse chez Escher, ce n'est pas tellement l'illusion d'optique en elle-même, mais le moment où une construction parfaitement cohérente commence à produire quelque chose d'impossible. Dans *Relativity*, par exemple, chaque escalier fonctionne localement, chaque personnage semble simplement occuper sa place, mais l'ensemble ne peut plus être habité selon une seule logique. On comprend les morceaux séparément sans pouvoir les réunir dans un espace qui fonctionne réellement.

C'est une chose que je retrouve dans ma manière de concevoir. J'aime construire des systèmes où chaque élément possède sa propre logique, puis voir ce qui arrive lorsque ces logiques se rencontrent. Une mécanique de jeu peut être parfaitement compréhensible seule et devenir beaucoup plus intéressante lorsqu'elle entre en conflit avec une autre. Une règle de simulation peut produire un comportement inattendu sans que le système soit pour autant « cassé ». C'est souvent à cet endroit que je trouve quelque chose à explorer.

Escher me fait aussi réfléchir à la différence entre une règle et ce qu'elle permet de faire. Une contrainte géométrique très précise peut donner naissance à une quantité presque infinie de variations. Ses métamorphoses m'intéressent particulièrement pour cette raison : il ne remplace pas simplement une forme par une autre, il montre comment l'une peut progressivement devenir l'autre. La transformation elle-même devient le sujet.

C'est une approche que j'essaie de retrouver dans mes projets : plutôt que d'empiler des idées indépendantes, partir d'un principe et le laisser évoluer jusqu'à ce qu'il produise ses propres conséquences. Je suis souvent plus intéressé par ce qui apparaît entre deux règles que par les règles prises séparément. Escher m'inspire précisément pour ça : il montre qu'une construction peut être tellement rigoureuse qu'elle finit par produire du paradoxe.
`,
    links: [
      { label: 'Site officiel', href: 'https://mcescher.com/' },
      { label: 'Galerie des œuvres', href: 'https://mcescher.com/gallery/most-popular/' },
      { label: 'Musée Escher in Het Paleis', href: 'https://escherinhetpaleis.nl/en' }
    ],
    media: [
      { type: 'image', src: '/images/escher-image-a.png' },
      { type: 'image', src: '/images/escher-image-b.jpg' }
    ]
  }
];
