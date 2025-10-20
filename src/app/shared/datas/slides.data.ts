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
{ type: 'page', title:"cover", image: '/assets/illustrations/0.png', imageClass: `${FREE_IMG} mx-auto`, imageStyle: zoomVW(70), 
overlays: [
  {
    x: 30,
    y: 25,
    text: `Il était autrefois un pays où les nuits étaient sombres, et le ciel couvrait cette contrée comme un drap noir. La lune n'y sortait jamais, pas une seule étoile ne scintillait dans l'obscurité.
Les ténèbres y régnaient comme à la création du monde.`,
    anchor: 'center',
    w: 40
  }
]
},
    
  // ➜ Ici on zoome à 200vw
{
  type: 'page',
  title: 'Page 4',
  text: 'Texte de la page 4',
  image: '/assets/illustrations/1.png',          // ← fond statique
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
    w: 40
  }





  ]
},

  // ➜ Ici à 50vw (change 50 par ce que tu veux)
  { type: 'page', title: 'Page 2', text: 'Texte de la page 2', image: '/assets/illustrations/2.2.png', imageClass: FREE_IMG, imageStyle: zoomVW(70), 

  overlays: [
    {
  x: 0, y: 68, w: 23, text: '',
  anchor: 'center',
  class: 'anim-bush-lr',
  style: {
    backgroundImage: 'url(/assets/illustrations/buisson1.png)',
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
    backgroundImage: 'url(/assets/illustrations/buisson2.png)',
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
  x: 74, y: -10, w: 23, text: '',
  anchor: 'center',
  class: 'anim-tree',
  style: {
    backgroundImage: 'url(/assets/illustrations/arbre1.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'translate(-50%, -50%)', // car anchor center
    aspectRatio: '2 / 3',               // ← mets le vrai ratio de ton PNG (ex: 2:3)
    display: 'block',
    '--sway-deg': '1deg',
    '--sway-duration': '3000ms',
    zIndex: '6'
  }
},
{
  x: 14, y: 9, w: 22, text: '',
  anchor: 'center',
  class: 'anim-tree',
  style: {
    backgroundImage: 'url(/assets/illustrations/arbre2.png)',
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
  x: 20, y: 72, w: 30, text: '',          // ← passe 8 → 10 (plus grand)
  anchor: 'center',
  class: 'walk-ltr',
  style: {
    backgroundImage: 'url(/assets/illustrations/perso.png)',
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
    y: 25,
    text: `Quatre jeunes hommes de ce pays partirent un jour en voyage et arrivèrent dans un autre royaume où tous les soirs, lorsque le soleil se couchait derrière la montagne, s'allumait dans les cimes d'un chêne un disque étincelant qui répandait au loin une douce lumière.`,
    anchor: 'center',
    w: 40
  }


]
  },

  // Les autres slides restent “normaux” (tu peux leur ajouter imageClass: FREE_IMG, imageStyle: zoomVW(…) quand tu veux)
  { type: 'page', title: 'Page 3', text: 'Texte de la page 3', 
    image: '/assets/illustrations/3.png' ,
    imageStyle: zoomVW(70) ,
    overlays: [
      { x: 30, y: 25, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. MSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.', anchor: 'center', w: 40 },
    
      // Dans "overlays" de la page voulue
{
  x: 50, y: 40, w: 0, text: '',
  anchor: 'center',
  class: 'moon-circle-halo',
  style: {
    left: '50%', top: '40%',            // positionne le halo
    transform: 'translate(-50%, -50%)', // centre le cercle
    zIndex: '6'
  }
}





    ]
  },
  { type: 'page', title: 'Page 4', text: 'Texte de la page 4', image: '/assets/illustrations/5.png' , imageStyle: zoomVW(50) },
  { type: 'page', title: 'Page 5', text: 'Texte de la page 5', image: '/assets/illustrations/page-5.jpg' },
  { type: 'page', title: 'Page 6', text: 'Texte de la page 6', image: '/assets/illustrations/page-6.jpg' },
  { type: 'page', title: 'Page 7', text: 'Texte de la page 7', image: '/assets/illustrations/page-7.jpg' },
  { type: 'page', title: 'Page 8', text: 'Texte de la page 8', image: '/assets/illustrations/page-8.jpg' },
  { type: 'page', title: 'Page 9', text: 'Texte de la page 9', image: '/assets/illustrations/page-9.jpg' },
  { type: 'page', title: 'Page 10', text: 'Texte de la page 10', image: '/assets/illustrations/page-10.jpg' },
  { type: 'page', title: 'Page 11', text: 'Texte de la page 11', image: '/assets/illustrations/page-11.jpg' },
  { type: 'page', title: 'Page 12', text: 'Texte de la page 12', image: '/assets/illustrations/page-12.jpg' },
  { type: 'page', title: 'Page 13', text: 'Texte de la page 13', image: '/assets/illustrations/page-13.jpg' },
  { type: 'page', title: 'Page 14', text: 'Texte de la page 14', image: '/assets/illustrations/page-14.jpg' },
  { type: 'page', title: 'Page 15', text: 'Texte de la page 15', image: '/assets/illustrations/page-15.jpg' },
  { type: 'page', title: 'Page 16', text: 'Texte de la page 16', image: '/assets/illustrations/page-16.jpg' },
  { type: 'page', title: 'Page 17', text: 'Texte de la page 17', image: '/assets/illustrations/page-17.jpg' },
  { type: 'page', title: 'Page 18', text: 'Texte de la page 18', image: '/assets/illustrations/page-18.jpg' },

  { type: 'back', title: 'Dernière de couverture', text: 'Noms étudiants — logos', image: '/assets/illustrations/back.jpg' }
];
