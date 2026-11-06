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
      
    </main>
  )
}
