import { CourseItem, ReviewItem, ServiceItem } from '../types';

export const ATELIER_INFO = {
  name: 'Nicole Vinti Atelier & Image Consulting',
  founder: 'Nicole Vinti',
  tagline: 'Haute Coiffure, Total Emotion & Sartorial Beauty',
  address: 'Via E. Ferrario, 24',
  city: 'Gallarate',
  province: 'VA',
  cap: '21013',
  country: 'Italia',
  phone: '+39 0331 777600',
  whatsapp: '+39 347 8899210',
  whatsappDirectUrl: 'https://wa.me/393478899210?text=Buongiorno%20Nicole%20Vinti%20Atelier,%20desidero%20maggiori%20informazioni%20o%20prenotare%20un%20appuntamento',
  email: 'info@nicolevinti.it',
  geo: {
    lat: 45.66063,
    lng: 8.79321,
    mapsUrl: 'https://maps.google.com/?q=Via+E.+Ferrario+24+Gallarate+VA'
  },
  openingHours: [
    { day: 'Lunedì', hours: 'Chiuso (Giorno dedicato alla Formazione Academy)' },
    { day: 'Martedì', hours: '09:00 – 18:30' },
    { day: 'Mercoledì', hours: '09:00 – 18:30' },
    { day: 'Giovedì', hours: '09:30 – 20:00 (Apertura Serale Lounge)' },
    { day: 'Venerdì', hours: '09:00 – 18:30' },
    { day: 'Sabato', hours: '08:30 – 18:00' },
    { day: 'Domenica', hours: 'Chiuso' }
  ],
  awards: [
    { year: '2014', title: 'Italian Hairdressing Award', note: 'Vincitrice Categoria Avant-Garde' },
    { year: '2002', title: 'International Salon London', note: 'Riconoscimento Mondiale Stilisti Emergenti' },
    { year: '2013', title: 'Il Piacere di Piacersi', note: 'Pioniera del Primo Concept Total Look in Italia' },
    { year: 'Membro', title: 'ICD Intercoiffure Mondial', note: 'Sezione Italia Haute Coiffure di Prestigio' },
    { year: 'Media', title: 'Festival di Sanremo & X Factor', note: 'Lead Celebrity Hair & Image Stylist' }
  ]
};

export const SERVICES: ServiceItem[] = [
  // Taglio & Styling
  {
    id: 'taglio-nicole-vinti',
    name: 'Taglio Couture Nicole Vinti & Ritual',
    category: 'taglio',
    description: 'Diagnosi morfologica del viso, lavaggio rilassante con massaggio shiatsu al cuoio capelluto, taglio sartoriale scolpito a forbice a filo rasoio e piega d’autore a lunga tenuta.',
    duration: '60 min',
    priceFrom: '€ 95',
    badge: 'Firma di Nicole',
    features: ['Studio morfologico ed espressivo', 'Rituale rilassante cuoio capelluto', 'Finish e styling personalizzato', 'Guida al mantenimento a casa'],
    image: '/images/hair-styling_2.jpg'
  },
  {
    id: 'piega-haute-coiffure',
    name: 'Blowout & Styling Luxury Volume',
    category: 'taglio',
    description: 'Piega scultorea morbida, ad onde naturali o liscia a specchio, arricchita con infuso botanico protettivo per una lucentezza serica straordinaria.',
    duration: '45 min',
    priceFrom: '€ 45',
    features: ['Trattamento termo-protettore serico', 'Brushing con spazzole termiche in cinghiale', 'Fissaggio morbido antiumidità'],
    image: '/images/homepage-banner.jpg'
  },
  {
    id: 'rituale-trichologico',
    name: 'Rituale Rigenerativo Salon Emotion',
    category: 'taglio',
    description: 'Trattamento intensivo botox-fill e cheratina vegetale per riparare capelli sfibrati, con vapore ozonizzato e massaggio craniale decontratturante.',
    duration: '50 min',
    priceFrom: '€ 70',
    badge: 'Benessere Olistico',
    features: ['Analisi micro-camera cuoio capelluto', 'Miscela botanica personalizzata', 'Doccia sensoriale con cromoterapia'],
    image: '/images/banner2-hairbeauty.jpg'
  },

  // Colore
  {
    id: 'balayage-sartoriale',
    name: 'Balayage D’Autore & Gloss di Luce',
    category: 'colore',
    description: 'Schiariture tridimensionali dipinte a mano libera senza linee di demarcazione. Crea riflessi naturali baciati dal sole, sigillati da un bagno di luce e gloss nutritivo con pH acido.',
    duration: '120 min',
    priceFrom: '€ 160',
    badge: 'Più Richiesto',
    features: ['Mappatura cromatica individuale', 'Decoloranti a base di oli vegetali protettivi', 'Tonalizzazione Gloss personalizzata', 'Plex rigenerante incorporato'],
    image: '/images/acc-nicole.jpg'
  },
  {
    id: 'colore-puro-biologico',
    name: 'Colorazione Botanica Luxury Shine',
    category: 'colore',
    description: 'Colore privo di ammoniaca con oltre il 90% di ingredienti naturali, infuso di oli d’Argan e Jojoba. Copertura totale dei capelli bianchi nel rispetto assoluto della cute.',
    duration: '75 min',
    priceFrom: '€ 85',
    features: ['Zero pizzicori e formulazione ipoallergenica', 'Pigmenti puri ultra-brillanti', 'Massima durata e riflesso compatto'],
    image: '/images/hair-beauty-2.jpg'
  },
  {
    id: 'french-gloss-degrade',
    name: 'Degradé Couture & Color Melt',
    category: 'colore',
    description: 'Fusione armoniosa tra radice scura e lunghezze iridescenti, per una ricrescita impercettibile e un movimento cromatico raffinato e sofisticato.',
    duration: '110 min',
    priceFrom: '€ 140',
    features: ['Rinnovamento del contrasto naturale', 'Ideale per schiariture a bassa manutenzione', 'Trattamento antiossidante finale'],
    image: '/images/homepage-banner2.jpg'
  },

  // Hair Integration
  {
    id: 'hair-integration-infoltimento',
    name: 'Infoltimento Invisibile ad Alta Densità',
    category: 'integration',
    description: 'Tecnologia avanzata micro-membrana traspirante studiata per diradamenti localizzati o diffusi. Restituisce volume, pienezza e sicurezza con un effetto naturale al 100%.',
    duration: 'Su Progetto',
    priceFrom: 'Consulenza Riservata',
    badge: 'Specializzazione Esclusiva',
    features: ['Capelli veri 100% Remy di grado vergine europeo', 'Nessuna trazione sulle radici esistenti', 'Totalmente impercettibile al tatto e alla vista', 'Libertà completa: sport, piscina, mare e raccolti'],
    image: '/images/extension-capelli.jpg'
  },
  {
    id: 'extension-cheratina-haute-couture',
    name: 'Allungamento & Volume Sartoriale Luxury Extensions',
    category: 'integration',
    description: 'Applicazione a micro-punti piatti con tecnologia ultrasonica o cheratina purissima biocompatibile. Lunghezze vellutate e spessori omogenei senza danneggiare il capello naturale.',
    duration: '120-180 min',
    priceFrom: 'Da € 280',
    features: ['Selezione cromatica su campione personalizzato', 'Punti di giunzione microscopici', 'Durata impeccabile da 4 a 6 mesi', 'Kit di spazzolatura e haircare in omaggio'],
    image: '/images/extension-capelli.jpg'
  },

  // Sposa & Immagine
  {
    id: 'bridal-experience-couture',
    name: 'Bridal Royal Haute Coiffure & Make-Up',
    category: 'sposa',
    description: 'Il percorso sposa completo firmato Nicole Vinti. Include consulenza d’immagine sul vestito, analisi morfologica e armocromatica, 2 prove complete in atelier privato e assistenza esclusiva a domicilio/location nel giorno del matrimonio.',
    duration: 'Percorso Esclusivo',
    priceFrom: 'Da € 650',
    badge: 'Atelier Sposa VIP',
    features: ['Consulenza di stile totale con Nicole Vinti', '2 prove acconciatura & 2 prove make-up fotografico', 'Trattamento illuminante viso e capello pre-evento', 'Assistenza in location fino al cambio d’abito', 'Acconciatura per la mamma o damigella d’onore'],
    image: '/images/wedding-acconciatura.jpg'
  },
  {
    id: 'consulenza-total-look',
    name: 'Consulenza d’Immagine & Armocromia Total Look',
    category: 'consulenza',
    description: 'Il metodo "Il Piacere di Piacersi" ideato da Nicole Vinti. Studio approfondito del sottotono cutaneo (draping test), analisi della fisionomia facciale per il taglio ideale e definizione della palette colori per abbigliamento e accessori.',
    duration: '90 min',
    priceFrom: '€ 180',
    badge: 'Metodo Nicole Vinti',
    features: ['Test con drappi professionali e palette digitale', 'Progetto visivo di restyling taglio e colore', 'Dossier personalizzato da portare sempre con sé', 'Consigli pratici su occhiali, gioielli e scollature'],
    image: '/images/nicole-vinti_2.jpg'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Beatrice Visconti di Modrone',
    role: 'Cliente Storica & Collezionista',
    location: 'Varese / Milano',
    rating: 5,
    treatment: 'Hair Integration & Taglio Bespoke',
    date: 'Ottobre 2025',
    text: 'Nicole Vinti non è semplicemente una parrucchiera, è una scultrice e una vera artista dell’immagine. Dopo anni di ricerche ho trovato in lei la raffinatezza e la privacy che cercavo. L’infoltimento invisibile è indistinguibile e mi ha restituito una sicurezza impagabile. L’Atelier di Gallarate è un santuario di calma ed eleganza.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Elena R. Mandelli',
    role: 'Sposa Couture 2025',
    location: 'Lago Maggiore / Gallarate',
    rating: 5,
    treatment: 'Percorso Sposa Royal & Make-Up',
    date: 'Settembre 2025',
    text: 'Per il mio matrimonio a Villa d’Este volevo un’acconciatura regale ma naturale. Nicole ha studiato ogni dettaglio del mio abito in pizzo francese, creando un raccolto morbido che è rimasto perfetto fino all’alba. La sua presenza calma e professionale la mattina del matrimonio è stata una benedizione.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Vittoria Sforza',
    role: 'Executive Director & Imprenditrice',
    location: 'Busto Arsizio / Lugano',
    rating: 5,
    treatment: 'Balayage Sartoriale & Total Look',
    date: 'Gennaio 2026',
    text: 'Frequento l’atelier da oltre dieci anni. La maestria cromatica di Nicole non ha rivali: i suoi biondi non virano mai al giallo e la luce che dona al viso è magnetica. La seduta del giovedì sera con calice di bollicine è il mio appuntamento irrinunciabile.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    author: 'Camilla Castiglioni',
    role: 'Fashion Editor',
    location: 'Milano',
    rating: 5,
    treatment: 'Taglio Couture & Salon Emotion Ritual',
    date: 'Dicembre 2025',
    text: 'La precisione millimetrica con cui Nicole taglia i capelli ricorda l’alta sartoria milanese. Non segue le mode passeggere, ma valorizza l’unicità di chi ha di fronte. Consiglio vivamente la consulenza d’immagine prima del cambio look.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const COURSES: CourseItem[] = [
  {
    id: 'master-taglio-geometrico',
    title: 'Architettura del Taglio Geometrico & Deconnessioni',
    subtitle: 'Tecniche avanzate di scultura e proporzioni auree',
    duration: '2 Giorni (16 Ore Intensive)',
    level: 'Masterclass Elite',
    description: 'Corso intensivo hands-on tenuto personalmente da Nicole Vinti. Studio scientifico delle angolazioni, bilanciamento dei volumi, controllo delle linee e tecniche di texturizzazione sartoriale per saloni di alto livello.',
    program: [
      'Studio delle sezioni tridimensionali e della gravità del capello',
      'Geometrie pure: bob sagomati, pixie cut destrutturati e scalature invisibili',
      'L’uso forbice filo rasoio e micro-dentata',
      'Pratica su testine in capelli veri e modelle dal vivo',
      'Certificato ufficiale Master Nicole Vinti Academy'
    ],
    upcomingDates: ['19-20 Maggio 2026', '22-23 Giugno 2026', '14-15 Settembre 2026'],
    investment: '€ 1.200 + IVA (Max 6 partecipanti)',
    image: '/images/foto-nicole_1.jpg'
  },
  {
    id: 'master-hair-integration',
    title: 'Hair Integration & Extension Metodo Haute Couture',
    subtitle: 'Protocolli di infoltimento non chirurgico e micro-cheratina',
    duration: '3 Giorni (24 Ore Intensive)',
    level: 'Masterclass Elite',
    description: 'Impara la specializzazione più richiesta e redditizia nel settore beauty di lusso. Dalla diagnosi trichologica dell’infoltimento alle tecniche di micro-ancoraggio e manutenzione programmata per clienti esigenti.',
    program: [
      'Analisi del cuoio capelluto e selezione dei sistemi traspiranti',
      'Creazione di dime anatomiche su misura',
      'Integrazione perfetta di densità e colore',
      'Strategie commerciali e posizionamento per clienti alto-spendenti',
      'Kit professionale sartoriale con materiali e attrezzi incluso'
    ],
    upcomingDates: ['11-13 Ottobre 2026', '15-17 Novembre 2026'],
    investment: '€ 2.400 + IVA (Kit esclusivo incluso, Max 4 partecipanti)',
    image: '/images/extension-capelli.jpg'
  },
  {
    id: 'master-total-look-consulenza',
    title: 'Consulenza d’Immagine & Armocromia per Hairstylist',
    subtitle: 'Il metodo "Il Piacere di Piacersi"',
    duration: '2 Giorni (16 Ore)',
    level: 'Avanzato',
    description: 'Trasforma il tuo approccio da semplice esecutore a vero e proprio consulente globale di bellezza. Come condurre un’analisi armocromatica rapida ed efficace in poltrona per proporre colori e tagli irresistibili.',
    program: [
      'Teoria del colore applicata all’incarnato e all’iride',
      'I 4 sottotoni e le 16 stagioni cromatiche',
      'Morfologia del viso: ovale, quadrato, cuore, allungato',
      'Tecniche di comunicazione empatica e consulenza ad alto valore',
      'Set drappi professionali in dotazione per il salone'
    ],
    upcomingDates: ['28-29 Settembre 2026', '19-20 Ottobre 2026'],
    investment: '€ 980 + IVA (Drappi armocromia inclusi)',
    image: '/images/nicole2-banner-about-me.jpg'
  }
];

export const BRIDAL_GALLERY_IMAGES = [
  { url: '/images/wedding-img1.jpg', title: 'Raccolto Scultoreo Imperiale', subtitle: 'Villa Ponti, Varese' },
  { url: '/images/wedding-img2.jpg', title: 'Semiraccolto Ondulato con Tiara', subtitle: 'Grand Hotel Tremezzo, Como' },
  { url: '/images/wedding-img4.jpg', title: 'Chignon Basso Couture', subtitle: 'Stresa, Lago Maggiore' },
  { url: '/images/wedding-img5.jpg', title: 'Onde Romantiche e Punti Luce', subtitle: 'Villa d’Este, Cernobbio' },
  { url: '/images/wedding-img6.jpg', title: 'Intreccio Sartoriale Bohemien Chic', subtitle: 'Milano' },
  { url: '/images/nicole-sposa2.jpg', title: 'Velo e Acconciatura Eterea', subtitle: 'Atelier Nicole Vinti' }
];

export const SALON_GALLERY_IMAGES = [
  { url: '/images/salon-beauty.jpg', title: 'Atelier Salon Emotion', desc: 'Area relax e postazioni riservate a Gallarate' },
  { url: '/images/award_2014.jpg', title: 'Italian Hairdressing Award 2014', desc: 'Vincitrice Categoria Avant-Garde' },
  { url: '/images/banner2-hairbeauty.jpg', title: 'Trattamenti Hair Care & Rigenerazione', desc: 'Protocolli di benessere olistico' },
  { url: '/images/nicole-vinti_2.jpg', title: 'Nicole Vinti all’Opera', desc: 'Oltre 35 anni di maestria e ricerca' }
];

export const GIFT_CARD_EXPERIENCES = [
  {
    id: 'experience-gold',
    title: 'Esperienza Salon Emotion Deluxe',
    value: 195,
    tagline: 'Il Rituale di Rigenerazione Completo',
    includes: [
      'Consulenza diagnostica con Nicole Vinti',
      'Rituale rigenerativo Salon Emotion al vapore ozonizzato',
      'Taglio Couture personalizzato',
      'Styling Luxury Volume finish',
      'Infuso botanico e coccola relax in cabina'
    ],
    highlight: 'Ideale come pensiero di puro prestigio'
  },
  {
    id: 'experience-platinum',
    title: 'Esperienza Luce d’Autore & Balayage',
    value: 290,
    tagline: 'La Trasformazione Cromaticamente Sublime',
    includes: [
      'Balayage sartoriale a mano libera',
      'Gloss di luce acido antiossidante',
      'Taglio Couture o rimodellamento punte',
      'Trattamento protettivo Plex rigenerante',
      'Prodotto haircare da viaggio in omaggio'
    ],
    highlight: 'Il nostro trattamento più amato'
  },
  {
    id: 'experience-diamond',
    title: 'Percorso Total Look & Armocromia',
    value: 380,
    tagline: 'L’Esperienza di Stile Totale "Il Piacere di Piacersi"',
    includes: [
      'Consulenza d’immagine e analisi del colore armocromatica',
      'Dossier personalizzato con palette stampata e digitale',
      'Restyling completo taglio & tonalizzazione colore',
      'Make-up express correttivo',
      'Bottiglia di Champagne servita in salone'
    ],
    highlight: 'Regalo d’eccezione per occasioni speciali'
  }
];

export const FAQS = [
  {
    q: 'Come posso prenotare una consulenza o un appuntamento?',
    a: 'È possibile prenotare comodamente tramite il pulsante "Prenota Ora" del nostro sito, contattando la reception al numero +39 0331 777600 oppure scrivendo via WhatsApp alla nostra Concierge. Data l’alta richiesta, consigliamo di riservare con 1-2 settimane di anticipo.'
  },
  {
    q: 'Cosa differenzia il metodo Nicole Vinti da un salone tradizionale?',
    a: 'Nicole Vinti fonde l’haute coiffure sartoriale con la consulenza d’immagine olistica ("Il Piacere di Piacersi"). Ogni trattamento inizia con una diagnosi visiva e morfologica. Non applichiamo tagli o colori standard, ma creiamo un progetto su misura che valorizza la personalità, lo stile di vita e i lineamenti unici di ciascuna cliente.'
  },
  {
    q: 'Come funziona il percorso sposa e con quanto anticipo contattarvi?',
    a: 'Consigliamo di contattarci tra i 6 e i 12 mesi prima delle nozze. Il percorso include un primo incontro conoscitivo, studio dell’abito e del tema, due prove complete di acconciatura e make-up in atelier, trattamenti preparatori per capelli e pelle, e l’assistenza personale di Nicole nel giorno del matrimonio a domicilio o in villa.'
  },
  {
    q: 'L’Atelier dispone di parcheggio o aree riservate?',
    a: 'Sì, l’atelier si trova in Via E. Ferrario 24 a Gallarate, con comoda possibilità di parcheggio nelle immediate vicinanze e disponibilità di posteggio riservato su richiesta per le clienti che effettuano percorsi lunghi o bridal experience.'
  }
];
