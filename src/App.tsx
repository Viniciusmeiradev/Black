import {useState} from 'react'
import {Shield, ShieldCheck, LockKeyhole, Zap, Handshake, ArrowRight, Play, ChevronDown, Menu, X,} from 'lucide-react'

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
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dcae37]">
              <Shield className="h-8 w-8 text-[#eab52e]" />
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
        </div>
       
      </section>
    </main>
  )
}

export default App
