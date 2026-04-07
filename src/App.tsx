import React from 'react';
import { Profile, Comment } from './types';
import { PROFILES, COMMENTS, LOCATIONS } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProfileCard } from './components/ProfileCard';
import { Sidebar } from './components/Sidebar';
import { 
  ChevronRight, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Heart, 
  Share2, 
  Star,
  ArrowLeft,
  Play,
  CheckCircle2,
  ThumbsUp,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function App() {
  const [selectedProfile, setSelectedProfile] = React.useState<Profile | null>(null);
  const [filter, setFilter] = React.useState('Todas');

  React.useEffect(() => {
    // @ts-ignore
    Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: true,
      Thumbs: false,
      Carousel: {
        dots: false,
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullScreen", "download", "close"],
        },
      },
      // Ensure thumbnails are not shown even if plugin is active
      on: {
        ready: (fancybox) => {
          // @ts-ignore
          if (fancybox.plugins.Thumbs) {
            // @ts-ignore
            fancybox.plugins.Thumbs.hide();
          }
        }
      }
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, []);

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    window.scrollTo(0, 0);
  };

  const filteredProfiles = PROFILES.filter(p => {
    if (filter === 'Todas') return true;
    if (filter === 'Mujeres') return p.gender === 'Mujer';
    if (filter === 'Travestis') return p.gender === 'Travesti';
    return true;
  });

  const platinoProfiles = filteredProfiles.filter(p => p.type === 'PLATINO');
  const oroProfiles = filteredProfiles.filter(p => p.type === 'ORO');

  return (
    <div className="min-h-screen bg-[#111] text-gray-200 font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {!selectedProfile ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Breadcrumbs & Location */}
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span className="hover:text-white cursor-pointer">Inicio</span>
                  <ChevronRight size={12} />
                  <span className="text-white">Escorts en Concepción</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                   <div className="bg-red-600 p-2 rounded-full mb-1">
                      <MapPin size={24} className="text-white" />
                   </div>
                   <h1 className="text-2xl font-bold text-white">Concepción</h1>
                   <p className="text-sm text-gray-400">Todos los anuncios</p>
                </div>
              </div>

              {/* Location Grid */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {LOCATIONS.map(loc => (
                  <button 
                    key={loc}
                    className={`px-3 py-1 text-[10px] font-bold uppercase rounded-sm border transition-colors ${
                      loc === 'Concepción' 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-[#1a1a1a] border-gray-800 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="flex items-center gap-6 mb-8 border-b border-gray-800 pb-4 overflow-x-auto no-scrollbar">
                <span className="text-white font-bold text-sm uppercase whitespace-nowrap">Filtros</span>
                {['Todas', 'Mujeres', 'Hombres', 'Travestis', '+40 Maduras', 'Videollamadas'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`text-xs font-medium uppercase whitespace-nowrap transition-colors ${
                      filter === f ? 'text-red-500' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Featured Avatars */}
              <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar mb-8">
                {PROFILES.map(p => (
                  <div key={p.id} className="flex flex-col items-center gap-2 min-w-[80px]">
                    <div className="w-16 h-16 rounded-full border-2 border-gray-700 p-0.5 overflow-hidden cursor-pointer hover:border-red-500 transition-colors">
                      <img 
                        src={p.imageUrl} 
                        alt={p.name} 
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-gray-400 uppercase truncate w-full text-center">{p.name}</span>
                  </div>
                ))}
              </div>

              {/* Advanced Filters Bar */}
              <div className="bg-[#1a1a1a] p-4 rounded-sm border border-gray-800 mb-8 flex flex-wrap items-center gap-4">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Filtro Avanzado</div>
                <select className="bg-[#222] border border-gray-700 text-xs px-3 py-1.5 rounded text-gray-300 outline-none">
                  <option>Servicios Incluidos</option>
                </select>
                <select className="bg-[#222] border border-gray-700 text-xs px-3 py-1.5 rounded text-gray-300 outline-none">
                  <option>Servicios Adicionales</option>
                </select>
                <select className="bg-[#222] border border-gray-700 text-xs px-3 py-1.5 rounded text-gray-300 outline-none">
                  <option>Ordenar por</option>
                </select>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-green-500 font-bold uppercase">Disponible Ahora</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-12">
                  {/* Platino Section */}
                  {platinoProfiles.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 mb-6">
                        <Star size={18} className="text-blue-500 fill-blue-500" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Anuncios Platino</h2>
                        <span className="text-[10px] text-gray-500 ml-2">Selección exclusiva de escorts destacadas</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {platinoProfiles.map(p => (
                          <ProfileCard key={p.id} profile={p} onClick={handleProfileClick} />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Oro Section */}
                  {oroProfiles.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 mb-6">
                        <Star size={18} className="text-yellow-500 fill-yellow-500" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Anuncios Oro</h2>
                        <span className="text-[10px] text-gray-500 ml-2">Escorts con perfil verificado y destacado</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {oroProfiles.map(p => (
                          <ProfileCard key={p.id} profile={p} onClick={handleProfileClick} />
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <Sidebar />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Back & Breadcrumbs */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setSelectedProfile(null)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Volver al listado</span>
                </button>
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <span>Inicio</span>
                  <ChevronRight size={10} />
                  <span>Concepción</span>
                  <ChevronRight size={10} />
                  <span className="text-white">{selectedProfile.name}</span>
                </div>
              </div>

              <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                {/* New Header Structure: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {/* Column 1: Visual (Video) */}
                  <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-[320px] rounded-full overflow-hidden border-2 border-red-600/30 shadow-[0_0_20px_rgba(220,38,38,0.2)] group bg-black">
                      <video 
                        src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc36990695c1d275306304d333579770558c1&profile_id=164&oauth2_token_id=57447761"
                        poster={selectedProfile.imageUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter animate-pulse pointer-events-none">
                        En Vivo
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Essential Info & Actions */}
                  <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-[9px] font-black px-2 py-0.5 rounded uppercase">{selectedProfile.type}</span>
                        <span className="text-green-500 text-[9px] font-bold flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> DISPONIBLE
                        </span>
                      </div>
                      
                      <h1 className="text-3xl font-black text-white mb-1 tracking-tight">
                        {selectedProfile.name} <span className="text-gray-500 font-light text-2xl">/ {selectedProfile.age}</span>
                      </h1>
                      
                      <div className="flex items-center gap-2 text-red-500 mb-6">
                        <MapPin size={14} />
                        <span className="text-xs font-bold uppercase tracking-widest">{selectedProfile.location}</span>
                      </div>

                      {/* Quick Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#222] p-3 rounded-xl border border-gray-800/50">
                          <div className="text-[9px] text-gray-500 font-bold uppercase mb-1">Estatura</div>
                          <div className="text-sm font-black text-white">{selectedProfile.height || 0} cm</div>
                        </div>
                        <div className="bg-[#222] p-3 rounded-xl border border-gray-800/50">
                          <div className="text-[9px] text-gray-500 font-bold uppercase mb-1">Peso</div>
                          <div className="text-sm font-black text-white">{selectedProfile.weight || 0} kg</div>
                        </div>
                        <div className="bg-[#222] p-3 rounded-xl border border-gray-800/50">
                          <div className="text-[9px] text-gray-500 font-bold uppercase mb-1">Medidas</div>
                          <div className="text-sm font-black text-white">{selectedProfile.measurements || 'N/A'}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <a 
                          href={`tel:${selectedProfile.phone}`}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all transform active:scale-95 text-sm uppercase"
                        >
                          <Phone size={18} /> Llamar Ahora
                        </a>
                        <button className="flex-1 bg-white hover:bg-gray-100 text-black py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all transform active:scale-95 text-sm uppercase">
                          <MessageCircle size={18} /> Chat Privado
                        </button>
                      </div>
                      <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-black flex items-center justify-center gap-2 transition-all transform active:scale-95 text-sm uppercase">
                        <MessageCircle size={18} /> WhatsApp Directo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Description & Services */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                      <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <Star size={14} className="text-red-600" /> Sobre Mí
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">
                        {selectedProfile.description || 'No hay descripción disponible.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                        <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Servicios Base</h3>
                        <div className="flex flex-wrap gap-2">
                          {(selectedProfile.servicesIncluded || []).map(s => (
                            <span key={s} className="bg-red-600/10 text-red-500 text-[9px] font-black px-3 py-1.5 rounded-full border border-red-600/20 uppercase">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                        <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Extras Premium</h3>
                        <div className="flex flex-wrap gap-2">
                          {(selectedProfile.additionalServices || []).map(s => (
                            <span key={s} className="bg-gray-800 text-gray-400 text-[9px] font-black px-3 py-1.5 rounded-full border border-gray-700 uppercase">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Verification & Interaction */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl text-white shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 size={24} />
                        <span className="font-black text-sm uppercase tracking-tighter">Perfil Verificado</span>
                      </div>
                      <p className="text-[10px] leading-relaxed opacity-90 font-medium">
                        Este perfil ha sido validado por nuestro equipo. Las fotos y videos corresponden a la persona real.
                      </p>
                    </div>

                    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-center flex-1 border-r border-gray-800">
                          <div className="text-xl font-black text-white">{selectedProfile.likes || 0}</div>
                          <div className="text-[8px] text-gray-500 font-bold uppercase">Likes</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-xl font-black text-white">100%</div>
                          <div className="text-[8px] text-gray-500 font-bold uppercase">Real</div>
                        </div>
                      </div>
                      <button className="w-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white py-3 rounded-xl font-black text-[10px] uppercase transition-all border border-red-600/20 flex items-center justify-center gap-2">
                        <Heart size={14} /> Dar Me Gusta
                      </button>
                    </div>
                  </div>
                </div>

                  {/* Album / Gallery Section */}
                  {selectedProfile.album && selectedProfile.album.length > 0 && (
                    <div className="space-y-6 bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div className="flex items-center gap-2">
                          <Grid size={18} className="text-red-600" />
                          <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Galería Multimedia</h3>
                        </div>
                        <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest bg-[#222] px-3 py-1 rounded-full border border-gray-800">
                          {selectedProfile.album.length} Archivos
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {selectedProfile.album.map((url, idx) => {
                          const isVideo = url.includes('.mp4') || url.includes('vimeo') || url.includes('youtube');
                          return (
                            <a 
                              key={idx} 
                              href={url}
                              data-fancybox="gallery"
                              data-caption={`${selectedProfile.name} - ${isVideo ? 'Video' : 'Foto'} ${idx + 1}`}
                              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-zoom-in border border-gray-800 shadow-lg bg-[#222] transition-all hover:border-red-600/50"
                            >
                              {isVideo ? (
                                <div className="w-full h-full flex items-center justify-center bg-black">
                                  <video src={url} className="w-full h-full object-cover opacity-60" />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                      <Play size={20} className="text-white fill-white ml-0.5" />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <img 
                                  src={url} 
                                  alt={`${selectedProfile.name} gallery ${idx}`} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Comments */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">Comentarios ({COMMENTS.length})</h3>
                    <div className="bg-[#1a1a1a] rounded-sm border border-gray-800 overflow-hidden">
                      <div className="divide-y divide-gray-800">
                        {COMMENTS.map(comment => (
                          <div key={comment.id} className="p-6 flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#333] flex-shrink-0 flex items-center justify-center">
                               <ThumbsUp size={20} className="text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-red-500 font-bold text-sm">{comment.user}</span>
                                <span className="text-[10px] text-gray-500">{comment.date}</span>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">{comment.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Premium Content */}
                  <div className="bg-[#1a1a1a] p-8 rounded-sm border border-gray-800 text-center space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">Contenido Premium</h3>
                    <p className="text-sm text-gray-400">Envia una solicitud o notificacion a {selectedProfile.name}, sobre de que te gustaria comprar y ver un video de pago.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-bold text-sm transition-colors">
                      Solicitar
                    </button>
                  </div>

                  <div className="text-center text-gray-500 text-sm font-bold py-8">
                    @ESCORT18871
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        {/* SEO Text Section (Bottom of list) */}
        {!selectedProfile && (
          <div className="mt-16 space-y-8">
            <div className="bg-[#1a1a1a] p-6 rounded-sm border border-gray-800">
              <h2 className="text-red-600 font-bold text-lg mb-4">Sexo en Concepción</h2>
              <p className="text-[10px] text-gray-500 mb-4">2015-09-25 00:41:05</p>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                Disculpen lo directo de nuestro título en el artículo de hoy, pero debo decir que Concepcion es un de las ciudades donde mas sexo con escorts hay en Chile, esto se debe a la gran oferta de las mismas en la ciudad penalista y es curioso que la forma ...
              </p>
              <button className="mt-4 text-xs font-bold text-gray-500 border border-gray-700 px-4 py-1 rounded hover:bg-[#222] transition-colors">Leer mas</button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom CTA */}
      <div className="bg-red-600 py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="text-white font-bold text-sm">Si eres agencia o quieres publicarte como independiente!</span>
          <button className="bg-transparent border border-white text-white px-4 py-1.5 rounded-sm font-bold text-xs hover:bg-white hover:text-red-600 transition-all">
            HAGA CLIC AQUÍ
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
