import { Profile, Activity, Comment } from './types';

const DEFAULT_ALBUM = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  'https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc36990695c1d275306304d333579770558c1&profile_id=164&oauth2_token_id=57447761',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  'https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc36990695c1d275306304d333579770558c1&profile_id=164&oauth2_token_id=57447761',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  'https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc36990695c1d275306304d333579770558c1&profile_id=164&oauth2_token_id=57447761',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
];

export const PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Fernanda',
    age: 25,
    location: 'CONCEPCIÓN',
    type: 'PLATINO',
    gender: 'Mujer',
    isVerified: true,
    hasVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    album: DEFAULT_ALBUM,
  },
  {
    id: '2',
    name: 'Maca Chilena',
    age: 28,
    location: 'CONCEPCIÓN',
    type: 'PLATINO',
    gender: 'Mujer',
    isVerified: true,
    hasVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    album: DEFAULT_ALBUM,
  },
  {
    id: '3',
    name: 'Natalia',
    age: 22,
    location: 'CONCEPCIÓN',
    type: 'ORO',
    gender: 'Mujer',
    isVerified: true,
    hasVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    album: DEFAULT_ALBUM,
  },
  {
    id: '4',
    name: 'Amyra',
    age: 20,
    location: 'CONCEPCIÓN',
    type: 'ORO',
    gender: 'Mujer',
    isVerified: true,
    hasVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    album: DEFAULT_ALBUM,
  },
  {
    id: '5',
    name: 'Génesis',
    age: 23,
    location: 'CONCEPCIÓN',
    type: 'ORO',
    gender: 'Mujer',
    isVerified: true,
    hasVideo: true,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    phone: '+56 9 2374 5654',
    likes: 35,
    weight: 86,
    height: 167,
    measurements: '100-76-115',
    description: 'Hola mi amor soy una espectacular escort mi figura es voluptuosa y tengo un gran carisma te garantizo q al probar mi gran cola y toda mi calentura no vas a dejar de comerme una y otra vez en la cama soy muy cariñosa y complaciente te daré un excitante trato de novia lleno de besos y caricias hago un sexo oral divino y hasta el final tendremos mucho sexo en todas la posiciónes q desees mi único objetivo es que te sientas cómodo a mi lado q te relajes te excites y te den ganas de volver a verme Servicio incluido Penetración en las posiciones q desees oral mutuo',
    servicesIncluded: ['Domicilio Propio', 'Oral con Condon', 'Servicios Normales', 'Sexo'],
    additionalServices: ['Americana', 'Anal', 'Atencion en Hoteles', 'Besos', 'Despedida de Solteros', 'Oral Natural', 'Rusa', 'Servicio a Domicilio', 'Sexo', 'Viajes'],
    album: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523264629844-40dd6bf17c2b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: '6',
    name: 'Baby Trans',
    age: 23,
    location: 'CONCEPCIÓN',
    type: 'ORO',
    gender: 'Travesti',
    isVerified: true,
    hasVideo: false,
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    album: DEFAULT_ALBUM,
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    profileName: 'BLANCA VIP',
    comment: 'Quitémonos esas ganas locas de coger sin parar.',
    time: 'HACE MEDIA HORA',
    location: 'Concepción',
  },
  {
    id: '2',
    profileName: 'BLANCA VIP',
    comment: 'Con ganas de sacarte toda la lechita con mi boquita mi amor',
    time: 'HACE MEDIA HORA',
    location: 'Concepción',
  },
  {
    id: '3',
    profileName: 'BLANCA VIP',
    comment: 'I love to masturbate you with my huge bubbys until you cum. Just thinking about it excites me.',
    time: 'HACE MEDIA HORA',
    location: 'Concepción',
  },
];

export const COMMENTS: Comment[] = [
  {
    id: '1',
    user: 'jjs',
    date: '2025-06-24 19:59',
    text: 'Tremenda mujer, lida, cariñosa, buena mosa❤️ tiene un cuerpo espectacular, buena cancha, bien rica🤤 para deleitar🍆💦',
  },
  {
    id: '2',
    user: 'fernando_89',
    date: '2025-09-13 18:34',
    text: 'Fui por el anal y acabe delicioso en su culo',
  },
  {
    id: '3',
    user: 'client68cade234903520250917',
    date: '2025-09-18 10:20',
    text: 'Génesis tiene un menso pavo que te deja loco',
  },
];

export const LOCATIONS = [
  'Santiago', 'Puerto Montt', 'Concepción', 'Rancagua', 'Temuco', 'Osorno', 'Valdivia', 'Punta Arenas', 'Castro', 'Pucon', 'Los Angeles', 'Chillan', 'Talca', 'Curico', 'Linares', 'Viña del Mar', 'Quillota', 'Valparaiso', 'Melipilla', 'San Fernando', 'Los Andes'
];
