// dans slides.data.ts
export type Slide = {
  type: 'cover' | 'page' | 'back';
  title: string;
  text?: string;
  image?: string;
  imageClass?: string;
  imageStyle?: { [k: string]: string };
  overlayHtml?: string;              
  overlayClass?: string;    
  overlayStyle?: { [k: string]: string };
  overlays?: Overlay[];
};

export type Overlay = {
  x: number;                 // en %
  y: number;                 // en %
  text: string;
  w?: number;                // largeur en %
  anchor?: 'center' | 'topleft';
  class?: string | string[] | { [klass: string]: boolean };
  style?: { [prop: string]: string };
};

// ====== Helpers réutilisables pour TOUS les slides ======
const FREE_IMG = 'max-w-none max-h-none block'; // enlève les limites par défaut
const zoomVW = (vw: number) => ({
  width: `${vw}vw`,
  height: 'auto',
  maxWidth: 'none',
  maxHeight: 'none'
});
// Exemple d’un zoom par scale, si tu préfères (optionnel)
// const scale = (n: number) => ({ transform: `scale(${n})`, transformOrigin: 'center' });

export const SLIDES: Slide[] = [
{ type: 'page', title:"cover", image: 'assets/illustrations/cover.png', imageClass: `${FREE_IMG} mx-auto`, imageStyle: zoomVW(70), 

},
    
  // ➜ Ici on zoome à 200vw
{
  type: 'page',
  title: 'Page 4',
  text: 'Texte de la page 4',
  image: 'assets/illustrations/1.png',          // ← fond statique
  imageClass: `${FREE_IMG}`,                      // pas d’anim ici
  imageStyle: zoomVW(70),
  overlays: [
    // Arbre au-dessus du fond, qui bouge
   
  {
  x: 0, y: 0, w: 0,                // ignorés (on pilote en px)
  text: '',
  anchor: 'topleft',
  class: 'light-square px-pos',    // <-- position au pixel + glow animé
  style: {
    /* --- Position & taille en PX --- */
    '--px-x': '788px',             // position X depuis le coin haut-gauche du slide
    '--px-y': '290px',             // position Y (px)
    '--px-w': '20px',              // largeur du carré (px)
    '--px-h': '50px',              // hauteur du carré (px)
    '--px-rot': '0deg',            // rotation si besoin

    /* --- Apparence du carré lumineux (entièrement réglable) --- */
    '--ls-fill': '#EDCB6A',        // couleur
    '--ls-alpha': '100%',
    '--ls-radius': '4px',
    '--ls-border': '0px',
    '--ls-border-color': 'rgba(237,203,106,0.6)',
    blur: '4px',

    

    zIndex: '8'
  }
},
{
  x: 0, y: 0, w: 0,                // ignorés (on pilote en px)
  text: '',
  anchor: 'topleft',
  class: 'light-square px-pos',    // <-- position au pixel + glow animé
  style: {
    /* --- Position & taille en PX --- */
    '--px-x': '385px',             // position X depuis le coin haut-gauche du slide
    '--px-y': '395px',             // position Y (px)
    '--px-w': '55px',              // largeur du carré (px)
    '--px-h': '59px',              // hauteur du carré (px)
    '--px-rot': '0deg',  
    '--ls-delay': '1000ms',
    

    /* --- Apparence du carré lumineux (entièrement réglable) --- */
    '--ls-fill': '#EDCB6A',        // couleur
    '--ls-alpha': '100%',
    '--ls-radius': '4px',
    '--ls-border': '0px',
    '--ls-border-color': 'rgba(237,203,106,0.6)',
    
    

    zIndex: '8'
  }
},
{
  x: 0, y: 0, w: 0,                // ignorés (on pilote en px)
  text: '',
  anchor: 'topleft',
  class: 'light-square px-pos',    // <-- position au pixel + glow animé
  style: {
    /* --- Position & taille en PX --- */
    '--px-x': '518px',             // position X depuis le coin haut-gauche du slide
    '--px-y': '570px',             // position Y (px)
    '--px-w': '59px',              // largeur du carré (px)
    '--px-h': '50px',              // hauteur du carré (px)
    '--px-rot': '0deg',  
    '--ls-delay': '700ms',
    

    /* --- Apparence du carré lumineux (entièrement réglable) --- */
    '--ls-fill': '#EDCB6A',        // couleur
    '--ls-alpha': '100%',
    '--ls-radius': '4px',
    '--ls-border': '0px',
    '--ls-border-color': 'rgba(237,203,106,0.6)',
    
    

    zIndex: '8'
  }
},

  {
    x: 70,
    y: 15,
    text: `Il était autrefois un pays où les nuits étaient sombres, et le ciel couvrait cette contrée comme un drap noir. La lune n'y sortait jamais, pas une seule étoile ne scintillait dans l'obscurité.
Les ténèbres y régnaient comme à la création du monde.`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  }





  ]
},

  // ➜ Ici à 50vw (change 50 par ce que tu veux)
  { type: 'page', title: 'Page 2', text: 'Texte de la page 2', image: 'assets/illustrations/2.2.png', imageClass: FREE_IMG, imageStyle: zoomVW(70), 

  overlays: [
    {
  x: 0, y: 68, w: 23, text: '',
  anchor: 'center',
  class: 'anim-bush-lr',
  style: {
    backgroundImage: 'url(assets/illustrations/buisson1.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // centre l'overlay
    aspectRatio: '1 / 1',               // ajuste si ton PNG n'est pas carré
    '--shake-duration': '2500ms',        // vitesse
    '--shake-x': '-1.6%',               // amplitude vers la gauche (le reste est relatif)
    '--shake-delay': '0ms',
    zIndex: '8'
  }
},
{
  x: 78, y: 66, w: 23, text: '',
  anchor: 'center',
  class: 'anim-bush-lr',
  style: {
    backgroundImage: 'url(assets/illustrations/buisson2.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // centre l'overlay
    aspectRatio: '1 / 1',               // ajuste si ton PNG n'est pas carré
    '--shake-duration': '2500ms',        // vitesse
    '--shake-x': '-1.6%',               // amplitude vers la gauche (le reste est relatif)
    '--shake-delay': '180ms',
    zIndex: '8',
     
  }
},

{
  x: 14, y: 9, w: 22, text: '',
  anchor: 'center',
  class: 'anim-tree',
  style: {
    backgroundImage: 'url(assets/illustrations/arbre2.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // car anchor center
    aspectRatio: '2 / 3',               // ← mets le vrai ratio de ton PNG (ex: 2:3)
    display: 'block',
    '--sway-deg': '1deg',
    '--sway-duration': '3000ms',
    '--shake-delay': '2800ms',
    zIndex: '6'
  }
},
{
  x: 20, y: 72, w: 35, text: '',          // ← passe 8 → 10 (plus grand)
  anchor: 'center',
  class: 'walk-ltr',
  style: {
    backgroundImage: 'url(assets/illustrations/perso.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)',   // ton base-transform si tu veux
    aspectRatio: '2 / 3',                  // ratio de ton PNG
    '--walk-distance': '45vw',
    '--walk-duration': '59s',
    zIndex: '6'
  }
},
{
    x: 55,
    y: 23,
    text: `Quatre jeunes hommes de ce pays partirent un jour en voyage et arrivèrent dans un autre royaume où tous les soirs, lorsque le soleil se couchait derrière 
    la montagne, s'allumait dans les cimes d'un chêne un disque étincelant qui répandait au loin une douce lumière. 
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '9',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },

{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 78,                   // % depuis la gauche
  y: 9,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '10vw',
    '--lh-speed': '1600ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '8'
  }
},

{ x: 85, y: 20, w: 30, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/arbre1.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '6'
  }
},

{ x: 85, y: 20, w: 10, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/lune.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},

]
  },

  // Les autres slides restent “normaux” (tu peux leur ajouter imageClass: FREE_IMG, imageStyle: zoomVW(…) quand tu veux)
  { type: 'page', title: 'Page 3', text: 'Texte de la page 3', 
    image: 'assets/illustrations/4.png' ,
    imageStyle: zoomVW(70) ,
    overlays: [
      {
    x: 55,
    y: 25,
    text: `Cela permettait aux gens de tout bien voir et distinguer, même si la lumière n'était pas aussi forte et éclatante que celle du soleil.
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },
    
     {
  x: 69, y: 28, w: 6, text: '',
  anchor: 'center',
  class: 'smoke-soft', // ou 'smoke-soft smoke-soft--bold' si tu veux plus visible
  style: {
    transform: 'translate(-50%, -50%)',
    '--smk-w': '6vw',   // largeur de la zone de fumée
    '--smk-h': '22vw',  // hauteur de montée
    '--puff-1': '2.6vw','--puff-2': '3.0vw',
    '--smk-alpha': '.45','--smk-blur': '1.2px',
    '--rise-1': '4.6s','--rise-2': '5.0s',
    '--delay-1': '0s','--delay-2': '1.2s',
    zIndex: '8'
  }
},
{
  x: 46, y: 24, w: 6, text: '',
  anchor: 'center',
  class: 'smoke-soft', // ou 'smoke-soft smoke-soft--bold' si tu veux plus visible
  style: {
    transform: 'translate(-50%, -50%)',
    '--smk-w': '6vw',   // largeur de la zone de fumée
    '--smk-h': '22vw',  // hauteur de montée
    '--puff-1': '2.6vw','--puff-2': '3.0vw',
    '--smk-alpha': '.45','--smk-blur': '1.2px',
    '--rise-1': '4.6s','--rise-2': '5.0s',
    '--delay-2': '0s','--delay-3': '1.2s',

    zIndex: '8'
  }
},

{
  x: 27, y: 7, w: 6, text: '',
  anchor: 'center',
  class: 'smoke-soft', // ou 'smoke-soft smoke-soft--bold' si tu veux plus visible
  style: {
    transform: 'translate(-50%, -50%)',
    '--smk-w': '6vw',   // largeur de la zone de fumée
    '--smk-h': '22vw',  // hauteur de montée
    '--puff-1': '2.6vw','--puff-2': '3.0vw',
    '--smk-alpha': '.45','--smk-blur': '1.2px',
    '--rise-1': '4.6s','--rise-2': '5.0s',
    '--delay-2': '0s','--delay-3': '1.2s',

    zIndex: '8'
  }
},

{
  x: 23, y: 6, w: 6, text: '',
  anchor: 'center',
  class: 'smoke-soft', // ou 'smoke-soft smoke-soft--bold' si tu veux plus visible
  style: {
    transform: 'translate(-50%, -50%)',
    '--smk-w': '6vw',   // largeur de la zone de fumée
    '--smk-h': '22vw',  // hauteur de montée
    '--puff-1': '2.6vw','--puff-2': '3.0vw',
    '--smk-alpha': '.45','--smk-blur': '1.2px',
    '--rise-1': '4.6s','--rise-2': '5.0s',
    '--delay-0': '0s','--delay-1': '1.2s',

    zIndex: '8'
  }
},

{
  x: 50, y: 81, w: 30, text: '',
  anchor: 'center',
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',                             // mets le bon ratio si besoin
    backgroundImage: 'url("assets/illustrations/perso2.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'block',
    zIndex: '6'
  }
},

{
  x: 70, y: 81, w: 25, text: '',
  anchor: 'center',
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',                             // mets le bon ratio si besoin
    backgroundImage: 'url("assets/illustrations/perso3.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'block',
    zIndex: '6'
  }
}





]
  },

  { type: 'page', title: 'Page 4', text: 'Texte de la page 4', image: 'assets/illustrations/5.png' , imageStyle: zoomVW(70), 

overlays: [
  {
    x: 25,
    y: 25,
    text: `Les voyageurs s'arrêtèrent et, abasourdis, demandèrent au paysan qui passait par là avec son chariot quelle était cette lumière.
- C'est la lune, répondit le paysan. Notre maire l'a achetée pour trois écus et l'a attachée au sommet du chêne. Tous les jours il doit y rajouter de l'huile et bien la nettoyer pour qu'elle brille comme il faut. Nous lui payons ce service un écu chacun.
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },

  {
  x: 85, y: 55, w: 8.2, text: '',
  anchor: 'center',
  class: 'walk-diag', // ou 'walk-diag walk-once' pour une seule fois
  style: {
    backgroundImage: 'url("assets/illustrations/paysan.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    /* base (garde ton centrage) */
    '--base-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    zIndex: '8',

    /* trajectoire & vitesse */
    '--dx': '-28vw',   // ← droite → gauche (NEGATIF)
    '--dy': '12vw',    // ↓ descend (POSITIF)
    '--dur': '30s',    // plus grand = plus lent
    '--delay': '0ms',
    '--iter': '1',
    animationFillMode: 'forwards',

    /* grossissement progressif */
    '--start-scale': '1',
    '--end-scale': '4'
  }
},

{
  x: 20, y: 82.5, w: 35, text: '',
  anchor: 'center',
  class: 'walk-x', // ou 'walk-x walk-once' pour 1 seule fois
  style: {
    backgroundImage: 'url("assets/illustrations/perso5.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '--base-transform': 'translate(-50%, -50%)',
    '--walk-distance': '5vw',   // distance à parcourir (augmente/diminue)
    '--walk-duration': '8s',    // vitesse (↑ = plus lent)
    '--walk-delay': '0ms',
    '--walk-iter': '1',   // mets '1' si tu utilises pas la classe walk-once
    animationFillMode: 'forwards',

    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    zIndex: '3'
  }
}




]

  },


  { type: 'page', title: 'Page 5', text: 'Texte de la page 5', image: 'assets/illustrations/6&7.png', imageStyle: zoomVW(70), 

overlays: [
  {
    x: 25,
    y: 25,
    text: `Le paysan partit en cahotant, et l'un des jeunes hommes siffla :
— Une telle lampe nous serait bien utile chez nous ! Nous avons un chêne aussi grand que celui-ci, nous pourrions l'y accrocher. 
Quel plaisir de ne plus marcher en tâtonnant !
— Savez-vous ce que nous allons faire ? lança le deuxième. 



`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
 ,
},

{
  x: 25, y: 72, w: 50, text: '',
  anchor: 'center',
  class: 'talk',
  style: {
    backgroundImage: 'url("assets/illustrations/perso7.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '--base-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    zIndex: '8',

    /* réglages doux (tu peux garder tels quels) */
    '--talk-speed': '1100ms',  // vitesse (↑ = plus lent)
    '--talk-ease': 'ease-in-out',
    '--talk-delay': '0ms'
  }
},

{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 58,                   // % depuis la gauche
  y: 38,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '10vw',
    '--lh-speed': '1900ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',
    

    // Toujours au-dessus du fond
    zIndex: '9'
  }
},
{ x: 65, y: 50, w: 60, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/arbre1.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '6'
  }
},

{ x: 65, y: 50, w: 15, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/lune.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},


]


   },


  { type: 'page', title: 'Page 6', text: 'Texte de la page 6', image: 'assets/illustrations/8.png' , imageStyle: zoomVW(70), 

overlays: [
  {
    x: 65,
    y: 25,
    text: `Nous irons chercher un cheval et une charrette et nous emporterons la lune avec nous. Ils n'auront qu'à s'en acheter une autre.
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },

  {
  x: 20, y: 80, w: 40, text: '',
  anchor: 'center',
  class: 'walk-x', // ou 'walk-x walk-once' pour 1 seule fois
  style: {
    backgroundImage: 'url("assets/illustrations/perso8.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '--base-transform': 'translate(-50%, -50%)',
    '--walk-distance': '25vw',   // distance à parcourir
    '--walk-duration': '30s',    // vitesse (↑ = plus lent)
    '--walk-delay': '0ms',
    '--walk-iter': '1',   // mets '1' ou utilise 'walk-once' pour arrêter au bout
    animationFillMode: 'forwards',

    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    zIndex: '8'
  }
},

{ x: 70, y:70, w: 40, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/img8.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},




]

  },
  { type: 'page', title: 'Page 7', text: 'Texte de la page 7', image: 'assets/illustrations/9.png' , imageStyle: zoomVW(70), 

overlays: [
  {
  x: 25,
  y: 25,
  text: `Je sais bien grimper, dit le troisième, je la décrocherai.
Le quatrième trouva un cheval et une charrette et le troisième grimpa sur l'arbre. Il fit un trou dans le 
disque lumineux, passa une corde à travers le trou et fit descendre la lune. Dès que la lune étincelante fut 
dans la charrette, ils lui passèrent une couverture pour que personne ne s'aperçoive du vol. Ils transportèrent 
la lune sans encombre jusque dans leur pays et l'accrochèrent sur le haut chêne.`,

  anchor: 'center',
  w: 40,
  style: {
    zIndex: '9',
    color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
  }
},

{
  x: 58, y: 72, w: 20, text: '',
  anchor: 'center',
  class: 'climb-infinite',
  style: {
    backgroundImage: 'url(assets/illustrations/perso1-img9.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    display: 'block',
    zIndex: '8',
    '--climb-angle': '-12deg',
    '--climb-distance': '34vh',
    '--climb-duration': '8s',
    '--climb-delay': '0ms'
  }
},

{
  x:15, y: 77, w: 40, text: '',
  anchor: 'center',
  class: 'walk-x', // ou 'walk-x walk-once' pour 1 seule fois
  style: {
    backgroundImage: 'url("assets/illustrations/charrette-lune.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '--base-transform': 'translate(-50%, -50%)',
    '--walk-distance': '40vw',   // distance à parcourir
    '--walk-duration': '50s',    // vitesse (↑ = plus lent)
    '--walk-delay': '0ms',
    '--walk-iter': '1',   // mets '1' ou utilise 'walk-once' pour arrêter au bout
    animationFillMode: 'forwards',

    transform: 'translate(-50%, -50%)',
    aspectRatio: '2 / 3',
    zIndex: '8'
  }
}



]

  },


  { type: 'page', title: 'Page 8', text: 'Texte de la page 8', image: 'assets/illustrations/10.png', imageStyle: zoomVW(70), 

overlays: [
  {
    x: 25,
    y: 85,
    text: `Et tout le monde se réjouit, les jeunes et les vieux, de cette nouvelle lampe dont la lumière pâle se 
    répandait dans les champs et dans les prés, et jusque dans les cuisines et les chambrettes.
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },

  { x: 50, y: 40, w: 25, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/lune.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},
{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 36,                   // % depuis la gauche
  y: 14,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '20vw',
    '--lh-speed': '1600ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '6'
  }
}

]


  },
  { type: 'page', title: 'Page 9', text: 'Texte de la page 9', image: 'assets/illustrations/11.png', imageStyle: zoomVW(70),

    overlays: [
      {
        x: 55,
        y: 25,
        text: `Des grottes dans la montagne sortirent des lutins et des petits génies en petits 
        manteaux rouges et ils se mirent à danser la ronde dans les prés.
`,
        anchor: 'center',
        w: 40,
        style: {
          zIndex: '8',
          color: '#fff',
        lineHeight: '1.4',
        background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
        padding: '12px 16px',
        borderRadius: '10px'
        }
      },

{
  x: 50, y: 60, w: 35,                    // position (%) + largeur (%)
  text: '',
  anchor: 'center',
  // pas besoin d’animation CSS ici, le GIF s’anime tout seul
  style: {
    backgroundImage: 'url(assets/illustrations/lutins.gif)', // ← ton GIF
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)',   // car anchor:'center'
    aspectRatio: '1 / 1',                 // adapte si ton GIF n’est pas carré
    display: 'block',
    zIndex: '8'
  }
}





    ]
   },



  { type: 'page', title: 'Page 10', text: 'Texte de la page 10', image: 'assets/illustrations/10.png', imageStyle: zoomVW(70), 

    overlays: [
  {
    x: 25,
    y: 15,
    text: `Notre quatuor de voyageurs prit la lune en charge. 
    Ils ajoutaient de l'huile, nettoyaient la mèche et percevaient pour leur travail un écu par semaine.
`,
    anchor: 'center',
    w: 40,
    style: {
      zIndex: '8',
      color: '#fff',
    lineHeight: '1.4',
    background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
    padding: '12px 16px',
    borderRadius: '10px'
    }
  },

  { x: 50, y: 40, w: 25, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/lune.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},
{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 36,                   // % depuis la gauche
  y: 14,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '20vw',
    '--lh-speed': '1600ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '6'
  }
},
 { x: 50, y: 84.2, w: 35, text: '', 
  style: {
    transform: 'translate(-50%, -50%)',
    aspectRatio: '1 / 1',
    backgroundImage: 'url("assets/illustrations/perso-img9.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '7'
  }
},


]

  },
  { type: 'page', title: 'Page 11', text: 'Texte de la page 11', image: 'assets/illustrations/12.2.png', imageStyle: zoomVW(70), 

    overlays: [
      {
        x: 25,
        y: 25,
        text: `Mais le temps passa et ils devinrent vieux et grisonnants, 
        et lorsque l'un d'eux tomba malade et sentit que ses jours étaient comptés, il exigea qu'on mit dans son cercueil un quart de la lune en tant que sa propriété.
        Après sa mort, le maire grimpa sur l'arbre, découpa un quart de la lune avec des ciseaux de jardinier et on le mit dans le cercueil du défunt. La lune perdit 
        un peu de son éclat, mais pour le moment cela ne se voyait pas trop.
`,
        anchor: 'center',
        w: 40,
        style: {
          zIndex: '8',
          color: '#fff',
        lineHeight: '1.4',
        background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
        padding: '12px 16px',
        borderRadius: '10px'
        }
      },
      {
  x: 0, y: 68, w: 23, text: '',
  anchor: 'center',
  class: 'anim-bush-lr',
  style: {
    backgroundImage: 'url(assets/illustrations/buisson1.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // centre l'overlay
    aspectRatio: '1 / 1',               // ajuste si ton PNG n'est pas carré
    '--shake-duration': '2500ms',        // vitesse
    '--shake-x': '-1.6%',               // amplitude vers la gauche (le reste est relatif)
    '--shake-delay': '0ms',
    zIndex: '8'
  }
},
{
  x: 78, y: 66, w: 23, text: '',
  anchor: 'center',
  class: 'anim-bush-lr',
  style: {
    backgroundImage: 'url(assets/illustrations/buisson2.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // centre l'overlay
    aspectRatio: '1 / 1',               // ajuste si ton PNG n'est pas carré
    '--shake-duration': '2500ms',        // vitesse
    '--shake-x': '-1.6%',               // amplitude vers la gauche (le reste est relatif)
    '--shake-delay': '180ms',
    zIndex: '8',
     
  }
},

     








    ]
  },
  { type: 'page', title: 'Page 12', text: 'Texte de la page 12', image: 'assets/illustrations/13.png', imageStyle: zoomVW(70),  

    overlays: [
      {
        x: 25,
        y: 25,
        text: `Quelque temps après, le deuxième décéda on l'enterra avec le deuxième quart de la lune, et la lumière baissa un peu plus. Et elle faiblit encore lorsque 
        le troisième mourut et emporta, lui aussi, son quart de lune avec lui. Et dès qu'ils enterrèrent le quatrième, l'obscurité totale d'autrefois envahit à nouveau 
        tout le pays. Et chaque fois que les gens sortaient de chez eux sans leur lanterne, ils se cognaient les uns aux autres.
`,
        anchor: 'center',
        w: 40,
        style: {
          zIndex: '8',
          color: '#fff',
        lineHeight: '1.4',
        background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
        padding: '12px 16px',
        borderRadius: '10px'
        }
      },

      {
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 5,                   // % depuis la gauche
  y: 74,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '5vw',
    '--lh-speed': '1600ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '6'
  }
},
{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 30,                   // % depuis la gauche
  y: 74,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '5vw',
    '--lh-speed': '1700ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '6'
  }
},
{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 50,                   // % depuis la gauche
  y: 74,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '5vw',
    '--lh-speed': '1800ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',

    // Toujours au-dessus du fond
    zIndex: '6'
  }
},

{
  // Place le coin haut-gauche du halo à (x%, y%)
  x: 70,                   // % depuis la gauche
  y: 74,                   // % depuis le haut
  w: 0,                    // on n’utilise pas w, la taille vient de --lh-size
  text: '',
  anchor: 'topleft',       // IMPORTANT: pas de transform de centrage
  class: 'lunar-halo-boost',
  style: {
    // Taille & rendu (tu peux mettre des px si tu préfères)
    '--lh-size': '5vw',
    '--lh-speed': '1900ms',
    '--lh-blur': '18px',
    '--lh-op-min': '.65',
    '--lh-op-max': '.95',
    '--lh-glow-blur': '20px',
    '--lh-glow-alpha': '.9',
    

    // Toujours au-dessus du fond
    zIndex: '6'
  }
},
{
  x: 65, y: 8.2, w: 40, text: '',
  anchor: 'center',
  class: 'anim-tree',
  style: {
    backgroundImage: 'url(assets/illustrations/arbre3.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // car anchor center
    aspectRatio: '2 / 3',               // ← mets le vrai ratio de ton PNG (ex: 2:3)
    display: 'block',
    '--sway-deg': '1deg',
    '--sway-duration': '3000ms',
    '--shake-delay': '2800ms',
    zIndex: '6'
  }
},

    ]
  },


  { type: 'page', title: 'Page 13', text: 'Texte de la page 13', image: 'assets/illustrations/page-13.jpg', imageStyle: zoomVW(70),  

    overlays: [
      {
        x: 55,
        y: 25,
        text: `
`,
        anchor: 'center',
        w: 40,
        style: {
          zIndex: '8',
          color: '#fff',
        lineHeight: '1.4',
        background: 'rgba(0,0,0,0.55)',  // fond sombre transluscent
        padding: '12px 16px',
        borderRadius: '10px'
        }
      },

      
    ]
  },


  { type: 'page', title: 'Page 14', text: 'Texte de la page 14', image: 'assets/illustrations/page-14.jpg' },
  { type: 'page', title: 'Page 15', text: 'Texte de la page 15', image: 'assets/illustrations/page-15.jpg' },
  { type: 'page', title: 'Page 16', text: 'Texte de la page 16', image: 'assets/illustrations/page-16.jpg' },
  { type: 'page', title: 'Page 17', text: 'Texte de la page 17', image: 'assets/illustrations/page-17.jpg' },
  { type: 'page', title: 'Page 18', text: 'Texte de la page 18', image: 'assets/illustrations/page-18.jpg' },

  { type: 'back', title: 'Dernière de couverture', text: 'Noms étudiants — logos', image: 'assets/illustrations/back.jpg' }
];
