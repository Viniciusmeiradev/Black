import {useState} from 'react'
import {Shield, ShieldCheck, LockKeyhole, Zap, Handshake, ArrowRight, Play, ChevronDown, Menu, X,} from 'lucide-react'
import Footer from './components/Footer'

function App(){
  const [menuOpen, setMenuOpen] = useState(false)
  const features = [
    {
    icon: ShieldCheck,
    title: 'Proteção Avançada',
    description: 'Segurança para seus dados e sistemas.',
  },
  {
    icon: Zap, 
    title: 'Resposta Rápida',
    description: 'Monitoramento e respostas a ameaças.',
  },
  {
    icon: Handshake,
    title: 'Suporte Especializado',
    description: 'Profissionais preparados para proteger.',
  },
  {
    icon: LockKeyhole,
    title: 'Confiança em Cada Detalhe',
    description: 'Sua segurança é nossa prioridade.',
  },]

  return(
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="relative z-50 border-b border-white/10 bg-black/90">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-12">


          {/*logo*/}
          <a href="/logo_blackvincis.png" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl ">
              <img src="/logo_blackvincis.png" alt="Black Vincis" className="h-56 w-64 object-contain"/>
            </div>
            <span className="text-xl font-extrabold tracking-wide">BLACK<span className="text-[#eab52e]">VINCIS</span></span>
          </a>

          {/*MenuSite*/}
          <div className="hidden items-center gap-9 lg:flex">
            <a href="#solucoes" className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#eab52e]">Inicio</a>

            <a href="#servicos" className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#eab52e]">Soluções <ChevronDown size={16} /></a>

            <a href="#sobre" className="text-sm text-gray-300 transition hover:text-[#eab52e]">Sobre Nós</a>

            <a href="#blog" className="text-sm text-gray-300 transition hover:text-[#eab52e]">Parceiros</a>

            <a href="#contato" className="text-sm text-gray-300 transition hover:text-[#eab52e]">Contato</a>
          </div>
          <a href="#contato" className="hidden items-center gap-3 rounded-full border border-[#eab52e] px-6 py-3 text-sm font-medium text-[#eab52e] transition hover:bg-[#eab52e] hover:text-black lg:flex">Proteja sua empresa<ArrowRight size={18} /></a>
  

          {/*Botao Mobile*/}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#eab52e] lg:hidden" arial-label = "Abrir menu"> {menuOpen ? <X size={28}/> : <Menu size={28}/> } </button>
        </nav>


        {/*Menu Mobile*/}
        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-6 border-b border-white/10 bg-[#080808] p-7 lg:hidden">"
            {[
              ['Inicio', '#inicio'],
              ['Soluçoes', '#soluçoes'],
              ['Sobre Nós', '#sobre'],
              ['Parceiros', '#parceiros'],
              ['Contato', '#contato'],
            ].map(([label, link]) => (
              <a key={label}  
                href={link}  
                onClick ={() => setMenuOpen(false)}  
                className="text-gray-300 transition hover:text-[#eab52e]">
                {label}
              </a>
            ))}
          </div>
        )}
      </header> 

      <section className="relative mx-auto flex min-h-[780px] max-w-[1500px] items-center px-6 py-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(201,146,31,0.13),transparent_55%)]"/>
        <div className="relative z-20 w-full lg:w-[58%]">
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.5em] text-[#eab52e]">Cibersegurança de verdade</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[76px]">Protegendo o seu<br />mundo digital<br />
            <span className="text-[#eab52e]">contra ameaças reais.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">Soluções avançadas em cibersegurança para proteger seus dados, sua empresa e seu futuro.</p>


          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#solucoes" className="flex items-center gap-3 rounded-full bg-[#eab52e] px-7 py-4 font-semibold text-black transition hover:bg-[#ffd05b] hover:shadow-[0_0_30px_rgba(234,181,46,0.25)]"> 
              <ShieldCheck size={22} />Conheça nossas soluções<ArrowRight size={19}/>
            </a>

            <a href="#sobre" className="flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 font-medium transition hover:border-[#eab52e] hover:text-[#eab52e]">
              <Play size={20} /> Assistir vídeo
            </a>

          </div>
        </div>


        {/*Background Imagem */}
        <div className="pointer-events-none absolute right-[-5%] top-1/2 hidden h-[720px] w-[58%] -translate-y-1/2 lg:block">
          <img src="/cyber_cobra.png" className="h-full w-full object-cover object-[85%_center] opacity-90"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',}}
          />
        </div>
      </section>


      <section  id="solucoes" className="relative border-t border-white/10 bg-[#080808] px-6 py-12 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {const Icon = feature.icon
            return( <div key = {feature.title}  className="flex items-center gap-4 border-b border-white/10 pb-6 transition hover:border-[#eab52e] lg:border-b-0 lg:border-r lg:pb-0">
              <Icon className="h-9 w-9 shrink-0 text-[#eab52e]"/>

              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                 <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
      

      {/*Serviços */}
      <section  id="servicos" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#eab52e]">Nossas soluções</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Segurança digital para um mundo em constante evolução.</h2>
          <p className="mt-6 leading-relaxed text-gray-400"> Protegemos empresas contra riscos digitais através de tecnologia, estratégia e inteligência em segurança.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Segurança de Redes', description: 'Proteção de infraestrutura, redes e ambientes corporativos.',
            },
            {
              title: 'Testes de Intrusão', description: 'Identificação de vulnerabilidades antes que sejam exploradas.',
            },
            {
              title: 'Proteção de Dados', description: 'Estratégias para manter informações seguras e confidenciais.',
            },
            ].map((service) => (<article key={service.title} 
            className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-8 transition hover:-translate-y-2 hover:border-[#eab52e]/60">
              <ShieldCheck className="mb-6 h-10 w-10 text-[#eab52e]" />
              <h3 className="text-xl font-bold"> {service.title} </h3>
              <p className="mt-4 leading-relaxed text-gray-400"> {service.description} </p>
              <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#eab52e]">Saiba mais <ArrowRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      
      {/*Sobre */}
      <section id="sobre" className="border-y border-white/10 bg-[#0a0a0a] px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1200px] text-center">
            <Shield className="mx-auto mb-6 h-14 w-14 text-[#eab52e]" />
            <h2 className="text-4xl font-bold"> Sua segurança é nossa missão. </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400"> Acreditamos que a segurança digital deve ser uma prioridade.
              Trabalhamos para proporcionar proteção, confiança e tranquilidade para empresas que desejam crescer com segurança.
            </p>
          </div>
      </section>

      
      {/*Contatos */}
      <section id="contato" className="px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#eab52e]"> Fale com nossos especialistas</p>
        <h2 className="mt-5 text-4xl font-bold sm:text-5xl"> Proteja seu futuro digital. </h2>
        <p className="mx-auto mt-5 max-w-xl text-gray-400"> Entre em contato e descubra como podemos ajudar a proteger sua empresa.</p>
        <a href="blackvincisadm@gmail.com"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#eab52e] px-8 py-4 font-semibold text-black transition hover:bg-[#ffd05b]">
            Entre em contato <ArrowRight size={19} />
        </a>
      </section>



      <section id="mercado" className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#eab52e]/5 blur-[150px]" />
        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* COLUNA ESQUERDA */}
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#eab52e]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#eab52e]">Por que agora?</span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-[56px]"> O mundo digital está sob ataque.
              <span className="block text-white">O mercado precisa de{' '} <span className="text-[#eab52e]">você.</span></span>
            </h2>
          </div>
        </div>

      </section>


      




      
      {/*Rodape */}
      <Footer />
    </main>
  )
}

export default App
