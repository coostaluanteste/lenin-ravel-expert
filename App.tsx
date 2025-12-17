
import React, { useState } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Target, 
  Zap, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK, IMAGES, TRUST_REASONS, STEPS } from './constants';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const IconMap: Record<string, any> = {
    Target, Zap, ShieldCheck, UserCheck
  };

  const CtaButton = ({ className = "", text = "Agendar primeira consulta gratuita no WhatsApp" }) => (
    <div className={`flex flex-col items-center gap-3 w-full max-w-md ${className}`}>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-8 rounded-full transition-all duration-300 cta-shadow transform hover:scale-105 active:scale-95"
      >
        <MessageCircle size={24} className="animate-pulse" />
        <span className="text-sm md:text-lg uppercase tracking-tight">{text}</span>
      </a>
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Resposta rápida • Sem compromisso</span>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-green-500/30">
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-end md:justify-center overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Lênin Ravel Hero" 
            className="w-full h-full object-cover object-top md:object-center opacity-80"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 pb-12 text-center flex flex-col items-center gap-6">
          <div className="space-y-2">
            <p className="text-green-500 font-bold uppercase tracking-widest text-sm mb-2">Nutrição Esportiva de Elite</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight uppercase">
              Eu sou <span className="text-green-500">Lênin Ravel</span>,<br /> seu nutricionista em Natal
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light">
              Transformo o físico comum em um corpo <span className="text-white font-bold">estético e performático</span> através de ciência e estratégia.
            </p>
          </div>
          
          <CtaButton className="mt-4" />
        </div>
      </section>

      {/* Quem sou eu */}
      <section className="py-24 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-green-500/10 rounded-2xl blur-xl transition-all group-hover:bg-green-500/20" />
          <img 
            src={IMAGES.expert[0]} 
            alt="Lênin Ravel Autoridade" 
            className="relative w-full aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">O que eu faço não é <span className="text-green-500 italic">apenas</span> dieta.</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Minha missão é simples: levar você ao seu auge físico com o máximo de clareza e acompanhamento. Não acredito em restrições absurdas, mas sim em estratégia de alto nível para quem busca resultados de verdade.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Foco 100% em resultados estéticos e performance",
              "Acompanhamento direto e humanizado",
              "Metodologia validada por centenas de transformações",
              "Protocolos adaptados à sua rotina real"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold uppercase">Resultados <span className="text-green-500">Reais</span></h2>
            <p className="text-white/60">A prova de que a estratégia certa transforma qualquer corpo.</p>
          </div>

          <div className="space-y-20">
            <Gallery 
              title="Antes e Depois" 
              images={IMAGES.results} 
              onImageClick={setSelectedImage} 
            />
            
            <Gallery 
              title="O que dizem os atletas" 
              images={IMAGES.feedbacks} 
              onImageClick={setSelectedImage} 
            />
          </div>

          <p className="text-center text-xs text-white/30 italic">
            *Resultados podem variar de pessoa para pessoa. Comprometimento é fundamental.
          </p>
        </div>
      </section>

      {/* Por que confiar */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_REASONS.map((reason, i) => {
            const Icon = IconMap[reason.icon];
            return (
              <div key={i} className="glass-card p-8 rounded-2xl hover:border-green-500/30 transition-colors group">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <Icon size={28} className="text-green-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase font-display">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-16 bg-green-950/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-display font-bold uppercase italic tracking-tighter">
            "Sua evolução não pode mais esperar por uma segunda-feira."
          </h2>
          <CtaButton text="Quero marcar minha consulta gratuita" />
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold uppercase">3 Passos para o seu <span className="text-green-500">Novo Físico</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent z-0" />
          {STEPS.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-black border-2 border-green-500 rounded-full flex items-center justify-center text-2xl font-display font-bold text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold uppercase">{step.title}</h3>
              <p className="text-white/60 max-w-[250px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mais Provas - Expert & Bastidores */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold uppercase mb-2">Bastidores e <span className="text-green-500">Atendimento</span></h2>
            <p className="text-white/60">Experiência premium e personalizada em Natal/RN.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMAGES.expert.slice(1).map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden glass-card group cursor-pointer" onClick={() => setSelectedImage(src)}>
                <img src={src} alt="Bastidores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 container mx-auto px-6 text-center space-y-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-display font-bold uppercase leading-none italic">
            Pronto para ser a sua <span className="text-green-500">melhor versão?</span>
          </h2>
          <p className="text-xl text-white/70">
            A primeira consulta de avaliação é por minha conta. Vamos conversar sobre seus objetivos e como eu vou te ajudar a chegar lá.
          </p>
        </div>
        <CtaButton />
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest">Lênin Ravel</h3>
            <div className="space-y-2 text-sm text-white/50">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} className="text-green-500" />
                Edifício Hermes 880 (Av. Hermes da Fonseca, 880, Tirol) - Natal/RN
              </p>
              <p>Clínica La Beligi (3º andar - 301)</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-1">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              &copy; {new Date().getFullYear()} LÊNIN RAVEL • TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Button */}
      <div className="fixed bottom-6 left-6 right-6 z-[50] md:hidden">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-2xl animate-float"
        >
          <MessageCircle size={20} />
          <span className="text-xs uppercase">Agendar Consulta Gratuita</span>
        </a>
      </div>
    </div>
  );
};

export default App;
