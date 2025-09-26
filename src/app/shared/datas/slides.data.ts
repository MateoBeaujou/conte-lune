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
      { x: 30, y: 25, text: 'La Lune', anchor: 'center', w: 40, style: { 'font-family': '"Bauer Bodoni", Georgia, "Times New Roman", serif',
           'font-size': 'clamp(28px, 6vw, 100px)' }}
    ]},
  // ➜ Ici on zoome à 200vw
{ type: 'page', title: "backcover", image: '/assets/illustrations/2.png', imageClass: `${FREE_IMG} mx-auto`, imageStyle: zoomVW(70) },


  // ➜ Ici à 50vw (change 50 par ce que tu veux)
  { type: 'page', title: 'Page 2', text: 'Texte de la page 2', image: '/assets/illustrations/3.png', imageClass: FREE_IMG, imageStyle: zoomVW(70), },

  // Les autres slides restent “normaux” (tu peux leur ajouter imageClass: FREE_IMG, imageStyle: zoomVW(…) quand tu veux)
  { type: 'page', title: 'Page 3', text: 'Texte de la page 3', 
    image: '/assets/illustrations/4.png' ,
    imageStyle: zoomVW(70) ,
    overlays: [
      { x: 30, y: 25, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. MSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.', anchor: 'center', w: 40 }
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
