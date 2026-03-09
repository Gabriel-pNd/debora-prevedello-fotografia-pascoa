import Image from "next/image";
import { Check, CheckCircle2 } from "lucide-react";

export default function Home() {
  const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Ol%C3%A1%2C%20D%C3%A9bora!%20Adorei%20a%20proposta%20das%20Mini%20Sess%C3%B5es%20de%20P%C3%A1scoa%20e%20gostaria%20de%20saber%20as%20datas%20dispon%C3%ADveis.";

  return (
    <main className="w-full bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-foreground pb-24 lg:pb-0">

      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-between py-12 lg:py-24">
        {/* Full screen background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_8218.jpg"
            alt="Mini Sessões de Páscoa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 warm-overlay-soft"></div>
        </div>

        <div className="relative z-10 text-center w-full px-6 lg:px-12 mt-12 lg:mt-24 flex flex-col items-center">
          <div className="w-16 h-1 bg-border/50 rounded-full mb-8 lg:mb-12"></div>
          <p className="text-secondary font-medium tracking-[0.2em] text-sm uppercase mb-6 drop-shadow-sm">
            — 2026 —
          </p>
          <h1 className="font-heading text-6xl lg:text-8xl text-on-dark tracking-tight leading-[1.05] mb-8 lg:mb-12 drop-shadow-md">
            Mini Sessões<br />de Páscoa
          </h1>
          <p className="text-on-dark/95 text-xl lg:text-3xl font-medium max-w-[90%] lg:max-w-[70%] mx-auto leading-snug drop-shadow-md">
            Uma proposta leve pra registrar<br className="hidden md:block" /> essa fase do seu pequeno.
          </p>
        </div>

        <div className="relative z-10 w-[90%] max-w-lg text-center pb-8 opacity-90 backdrop-blur-md bg-black/15 py-6 px-4 mx-auto mt-16 rounded-3xl glass-warm">
          <img
            src="/images/logo-light.svg"
            alt="Débora Prevedello Fotografia"
            className="w-40 lg:w-48 mx-auto opacity-95 drop-shadow-sm"
          />
          <p className="text-on-dark/80 text-[10px] lg:text-xs tracking-widest uppercase mt-4">Débora Prevedello Fotografia</p>
        </div>
      </section>

      {/* ─── PROPOSTA ─── */}
      <section className="relative w-full py-24 lg:py-40 px-6 lg:px-12 bg-surface">
        <div className="noise-soft absolute inset-0 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

          <h2 className="font-heading text-4xl lg:text-6xl text-text-strong mb-12 leading-tight">
            Tem fases que a gente<br />
            só percebe o quanto eram bonitas<br />
            <span className="text-primary italic">quando já passaram.</span>
          </h2>

          <p className="text-xl lg:text-2xl text-text-tertiary mb-16 border-t-2 border-primary/20 pt-8 mt-4 uppercase tracking-widest">
            Essa não precisa ser uma delas.
          </p>

          <p className="text-lg lg:text-2xl text-foreground/80 leading-relaxed lg:leading-loose mb-20 max-w-3xl">
            As mini sessões de Páscoa foram pensadas pra registrar essa fase do seu pequeno de forma leve, prática e acolhedora.
          </p>

          <div className="bg-surface-2 rounded-3xl p-8 lg:p-12 border border-border/10 shadow-warm-md flex flex-col sm:flex-row items-center gap-6 lg:gap-8 w-full max-w-2xl transform hover:-translate-y-1 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-medium text-2xl text-text-strong mb-1">O foco é o seu pequeno.</p>
              <p className="text-lg text-text-tertiary">Sempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── O QUE SÃO ─── */}
      <section className="relative w-full py-24 lg:py-40 px-6 lg:px-12 bg-background">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <h2 className="font-heading text-5xl lg:text-7xl text-text-strong mb-6 leading-[1.1]">
                O que são as<br />Mini Sessões?
              </h2>
              <div className="inline-block py-3 px-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mt-8">
                Ensaios realizados somente até 29/03/2026
              </div>
            </div>

            <div className="lg:w-2/3 space-y-12 lg:space-y-16">
              <div className="flex gap-6 lg:gap-10">
                <span className="text-primary/30 font-heading text-5xl lg:text-7xl -mt-2">1</span>
                <div>
                  <h3 className="font-medium text-2xl lg:text-3xl text-text-strong mb-3">Cenário delicado</h3>
                  <p className="text-base lg:text-lg text-text-tertiary leading-relaxed">Montado peça por peça, com carinho e atenção a cada detalhe. Tons suaves, madeira natural e muita delicadeza.</p>
                </div>
              </div>

              <div className="flex gap-6 lg:gap-10">
                <span className="text-primary/30 font-heading text-5xl lg:text-7xl -mt-2">2</span>
                <div>
                  <h3 className="font-medium text-2xl lg:text-3xl text-text-strong mb-3">Proposta leve</h3>
                  <p className="text-base lg:text-lg text-text-tertiary leading-relaxed">Sessão rápida, prática e fácil de encaixar na rotina. Sem produção exagerada, sem complicação.</p>
                </div>
              </div>

              <div className="flex gap-6 lg:gap-10">
                <span className="text-primary/30 font-heading text-5xl lg:text-7xl -mt-2">3</span>
                <div>
                  <h3 className="font-medium text-2xl lg:text-3xl text-text-strong mb-3">Foco no bebê</h3>
                  <p className="text-base lg:text-lg text-text-tertiary leading-relaxed">O protagonista é o seu pequeno. Os pais podem participar de alguns registros, mas o centro é ele.</p>
                </div>
              </div>

              <div className="flex gap-6 lg:gap-10">
                <span className="text-primary/30 font-heading text-5xl lg:text-7xl -mt-2">4</span>
                <div>
                  <h3 className="font-medium text-2xl lg:text-3xl text-text-strong mb-3">Três opções claras</h3>
                  <p className="text-base lg:text-lg text-text-tertiary leading-relaxed">Escolha a que faz mais sentido pro momento de vocês. Simples, sem confusão.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PACOTES ─── */}
      <section className="relative w-full py-24 lg:py-40 px-6 lg:px-12 bg-surface">
        <div className="noise-soft absolute inset-0 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto">

          <h2 className="font-heading text-5xl lg:text-7xl text-text-strong mb-20 text-center">
            Qual faz mais sentido<br />pra vocês?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">

            {/* ESSENCIAL */}
            <div className="editorial-card p-8 lg:p-10 bg-surface flex flex-col">
              <div className="mb-6">
                <h3 className="font-heading text-3xl text-text-strong mb-2">Essencial</h3>
                <p className="text-sm text-text-tertiary h-10">Pra quem quer começar de forma simples e leve.</p>
              </div>

              <div className="mb-8">
                <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Valor</p>
                <p className="font-heading text-4xl text-primary">R$ 190</p>
              </div>

              <div className="h-px w-full bg-border/40 mb-8"></div>

              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> 1 look
                </li>
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> 15 digitais
                </li>
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> Até 40 min
                </li>
              </ul>

              <p className="text-xs italic text-text-tertiary/80 text-center bg-background rounded-xl p-4 mt-auto">
                A porta de entrada perfeita pra conhecer a experiência.
              </p>
            </div>

            {/* TRADICIONAL */}
            <div className="editorial-card p-8 lg:p-10 border-primary/30 bg-[#fdfaf5] shadow-warm-xl flex flex-col relative md:-translate-y-4 md:scale-[1.05] z-10 transition-transform duration-500 hover:-translate-y-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-dark text-xs lg:text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-md whitespace-nowrap">
                Mais recomendado
              </div>

              <div className="mb-6 mt-2">
                <h3 className="font-heading text-3xl text-text-strong mb-2">Tradicional</h3>
                <p className="text-sm text-text-tertiary h-10">A escolha mais completa — e a que eu mais indico.</p>
              </div>

              <div className="mb-8">
                <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Valor</p>
                <p className="font-heading text-5xl text-primary">R$ 390</p>
              </div>

              <div className="h-px w-full bg-primary/20 mb-8"></div>

              <ul className="space-y-5 mb-10 flex-grow">
                <li className="flex items-center gap-4 text-base lg:text-lg font-medium text-foreground">
                  <Check className="w-6 h-6 text-primary" /> Até 2 looks
                </li>
                <li className="flex items-center gap-4 text-base lg:text-lg font-medium text-foreground">
                  <Check className="w-6 h-6 text-primary" /> 30 impressas 10x15
                </li>
                <li className="flex items-center gap-4 text-base lg:text-lg font-medium text-foreground">
                  <Check className="w-6 h-6 text-primary" /> 30 fotos digitais
                </li>
                <li className="flex items-center gap-4 text-base lg:text-lg font-medium text-foreground">
                  <Check className="w-6 h-6 text-primary" /> Caixa personalizada
                </li>
                <li className="flex items-center gap-4 text-base lg:text-lg font-medium text-foreground">
                  <Check className="w-6 h-6 text-primary" /> Sessão de até 1 hora
                </li>
              </ul>

              <p className="text-sm italic text-primary font-medium text-center bg-primary/5 rounded-xl p-4 mt-auto">
                O melhor equilíbrio entre valor e experiência.
              </p>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full mt-6 bg-primary text-on-dark text-center py-4 rounded-full font-bold shadow-md hover:bg-primary-hover transition-colors">
                QUERO ESTE PACOTE
              </a>
            </div>

            {/* LEGADO */}
            <div className="editorial-card p-8 lg:p-10 bg-surface flex flex-col">
              <div className="mb-6">
                <h3 className="font-heading text-3xl text-text-strong mb-2">Legado</h3>
                <p className="text-sm text-text-tertiary h-10">Pra quem quer guardar essa fase com tudo que ela merece.</p>
              </div>

              <div className="mb-8">
                <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Valor</p>
                <p className="font-heading text-4xl text-primary">R$ 1.190</p>
              </div>

              <div className="h-px w-full bg-border/40 mb-8"></div>

              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> 3 looks
                </li>
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> 60 digitais
                </li>
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> Álbum 20x20
                </li>
                <li className="flex items-center gap-3 text-base text-foreground">
                  <Check className="w-5 h-5 text-primary/50" /> Até 2h
                </li>
              </ul>
              <p className="text-xs italic text-text-tertiary/80 text-center bg-background rounded-xl p-4 mt-auto">
                Um registro que vira herança. De verdade.
              </p>
            </div>

          </div>

          <div className="bg-primary/5 mx-auto max-w-2xl border border-primary/20 rounded-3xl p-8 lg:p-12 text-center mt-16 md:mt-24 shadow-sm">
            <h4 className="font-heading text-2xl lg:text-3xl text-primary mb-4">Se está em dúvida, vai de Tradicional.</h4>
            <p className="text-base lg:text-lg text-text-strong">
              É a opção que eu mais indico — e a mais escolhida.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TUDO QUE VOCE PRECISA SABER ─── */}
      <section className="relative w-full py-24 lg:py-40 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">

          <div className="md:w-1/2">
            <h2 className="font-heading text-5xl lg:text-6xl text-text-strong mb-16">
              Tudo que você<br />precisa saber
            </h2>

            <div className="space-y-10">
              <div className="border-b border-border/40 pb-8">
                <h3 className="font-medium text-xl lg:text-2xl text-text-strong mb-3 text-primary">
                  Onde
                </h3>
                <p className="text-base lg:text-lg text-text-tertiary">No centro de Balneário Camboriú, em estúdio próprio.</p>
              </div>

              <div className="border-b border-border/40 pb-8">
                <h3 className="font-medium text-xl lg:text-2xl text-text-strong mb-3 text-primary">
                  Quando
                </h3>
                <p className="text-base lg:text-lg text-text-tertiary">Ensaios somente até 29/03. Agenda curtinha, horários por ordem de reserva.</p>
              </div>

              <div className="border-b border-border/40 pb-8">
                <h3 className="font-medium text-xl lg:text-2xl text-text-strong mb-3 text-primary">
                  Pra quem
                </h3>
                <p className="text-base lg:text-lg text-text-tertiary">Bebês e crianças pequenas. Pais podem participar de alguns registros, mas o foco é o seu pequeno.</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pt-32">
            <h3 className="font-heading text-4xl lg:text-5xl text-text-strong mb-8">O que vestir?</h3>
            <p className="text-lg text-text-tertiary mb-10">Cores que combinam com o cenário e deixam tudo mais harmônico:</p>

            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-5 py-3 bg-white border border-border/20 rounded-full text-sm font-medium text-foreground shadow-sm">Branco</span>
              <span className="px-5 py-3 bg-[#F5F5F0] border border-border/20 rounded-full text-sm font-medium text-foreground shadow-sm">Off White</span>
              <span className="px-5 py-3 bg-[#6B705C] border border-border/20 rounded-full text-sm font-medium text-white shadow-sm">Verde Oliva</span>
              <span className="px-5 py-3 bg-[#DDBEA9] border border-border/20 rounded-full text-sm font-medium text-foreground shadow-sm">Bege</span>
              <span className="px-5 py-3 bg-[#A5A58D] border border-border/20 rounded-full text-sm font-medium text-white shadow-sm">Marrom</span>
              <span className="px-5 py-3 bg-primary border border-primary/40 rounded-full text-sm font-medium text-on-dark shadow-md">Terracota</span>
            </div>

            <p className="text-sm lg:text-base italic text-text-tertiary/90 leading-relaxed bg-surface p-6 lg:p-8 border border-border/30 rounded-2xl shadow-sm">
              <span className="font-bold text-text-strong not-italic text-lg mb-2 block">Dica:</span> evite roupas com estampas muito grandes, logos ou cores neon. O cenário é suave — roupas em tons neutros e naturais deixam o resultado mais bonito.
            </p>
          </div>

        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative w-full py-24 lg:py-40 px-6 lg:px-12 bg-surface">
        <div className="noise-soft absolute inset-0 z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-heading text-5xl lg:text-6xl text-text-strong mb-16 text-center">
            Perguntas Frequentes
          </h2>

          <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/20 hover:border-primary/40 transition-colors">
              <h4 className="font-medium text-xl lg:text-2xl text-text-strong mb-4">E se meu bebê chorar durante a sessão?</h4>
              <p className="text-base text-text-tertiary leading-relaxed">A gente espera. Sem pressa, sem estresse. Se ele quiser mamar, a gente para. Se quiser dormir, a gente fotografa dormindo. A sessão inteira é no ritmo dele.</p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/20 hover:border-primary/40 transition-colors">
              <h4 className="font-medium text-xl lg:text-2xl text-text-strong mb-4">Preciso saber posar?</h4>
              <p className="text-base text-text-tertiary leading-relaxed">De jeito nenhum. Eu conduzo tudo — onde ficar, como segurar, o que fazer com as mãos. Essa parte é comigo. Você só precisa vir.</p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/20 hover:border-primary/40 transition-colors">
              <h4 className="font-medium text-xl lg:text-2xl text-text-strong mb-4">Quanto tempo pra receber as fotos?</h4>
              <p className="text-base text-text-tertiary leading-relaxed">As fotos digitais ficam prontas em até 7 dias úteis. Pra quem escolheu a caixa personalizada ou o álbum, o prazo de entrega depende do fornecedor — mas eu te mantenho atualizada.</p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/20 hover:border-primary/40 transition-colors">
              <h4 className="font-medium text-xl lg:text-2xl text-text-strong mb-4">E se eu precisar remarcar?</h4>
              <p className="text-base text-text-tertiary leading-relaxed">Imprevistos acontecem, e tá tudo bem. Uma remarcação é sem custo nenhum. A partir da segunda, tem uma taxa de 20% do valor da sessão.</p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/20 hover:border-primary/40 transition-colors md:col-span-2">
              <h4 className="font-medium text-xl lg:text-2xl text-text-strong mb-4">Posso levar irmãos mais velhos?</h4>
              <p className="text-base text-text-tertiary leading-relaxed">Pode, sim! Só preciso combinar antes, porque o limite é de 3 crianças aparecendo juntas nas fotos. Me conta a idade deles que a gente organiza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA / FINAL CTA ─── */}
      <section className="relative w-full overflow-hidden bg-background">

        <div className="pt-24 lg:pt-40 pb-16 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl lg:text-6xl text-text-strong mb-16">Como funciona?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shadow-sm border border-primary/20">1</div>
              <div>
                <h4 className="font-medium text-xl text-text-strong mb-2">Escolha o pacote</h4>
                <p className="text-sm lg:text-base text-text-tertiary leading-relaxed">Essencial, Tradicional ou Legado. Se tiver dúvida, eu te ajudo.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shadow-sm border border-primary/20">2</div>
              <div>
                <h4 className="font-medium text-xl text-text-strong mb-2">Agende no Whats</h4>
                <p className="text-sm lg:text-base text-text-tertiary leading-relaxed">A gente combina o melhor horário pra vocês.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shadow-sm border border-primary/20">3</div>
              <div>
                <h4 className="font-medium text-xl text-text-strong mb-2">Venha conosco</h4>
                <p className="text-sm lg:text-base text-text-tertiary leading-relaxed">Eu cuido de toda a direção. Você só precisa vir.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shadow-sm border border-primary/20">4</div>
              <div>
                <h4 className="font-medium text-xl text-text-strong mb-2">Receba o registro</h4>
                <p className="text-sm lg:text-base text-text-tertiary leading-relaxed">Fotos digitais em até 7 dias úteis. Entrega física no prazo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary px-6 lg:px-12 py-24 lg:py-32 text-center text-on-dark relative w-full mt-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-6xl mb-12 leading-relaxed lg:leading-tight">
              Daqui um tempo,<br className="hidden md:block" />
              quando você abrir essas fotos,<br />
              vai lembrar exatamente<br />
              desse rostinho,<br />
              dessa fase.
            </h2>
            <p className="text-2xl lg:text-3xl font-medium mb-16 text-on-dark/90">
              Vamos registrar?
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank" rel="noopener noreferrer"
              className="mx-auto w-fit bg-white text-primary font-bold px-10 py-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center gap-4 text-lg hover:scale-105 transition-transform duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.259-.464-2.4-1.485-.888-.795-1.488-1.774-1.666-2.071-.173-.301-.018-.462.13-.611.134-.133.301-.347.453-.523.146-.175.197-.301.296-.502.1-.197.052-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.374-.275.3-1.047 1.02-1.047 2.486s1.072 2.88 1.221 3.076c.15.2 2.095 3.194 5.076 4.484.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              FALAR NO WHATSAPP
            </a>

            <p className="mt-16 text-sm text-on-dark/60 font-medium tracking-widest uppercase">
              Débora Prevedello Fotografia © 2026
            </p>
          </div>
        </div>
      </section>

      {/* Floating CTA for Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50 bg-gradient-to-t from-background via-background/90 to-transparent">
        <a
          href={WHATSAPP_LINK}
          target="_blank" rel="noopener noreferrer"
          className="w-full bg-primary text-on-dark py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          AGENDAR MINHA SESSÃO
        </a>
      </div>

    </main>
  );
}
