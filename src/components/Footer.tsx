import { Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d9f4fc] via-[#ffffff] to-[#e5f5ff] text-black">

      {/* CONTEÚDO PRINCIPAL */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-8 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-16">

        {/* LOGO */}
        <div className="flex flex-col items-center gap-8 lg:items-start">

          <img
            src="/logo-blackvincis.png"
            alt="Black Vincis"
            className="h-40 w-48 object-contain"
          />

          <a
            href="#contato"
            className="rounded-xl bg-[#f04427] px-9 py-5 text-xl font-medium text-white transition duration-300 hover:bg-[#d9361b] hover:shadow-lg"
          >
            Entre em Contato
          </a>

        </div>

        {/* CONTATO */}
        <div>
          <h2 className="mb-7 text-3xl font-medium">
            Contato
          </h2>

          <div className="flex flex-col gap-8 text-base">

            <a
              href="mailto:blackvincisadm@gmail.com"
              className="flex items-center gap-2 transition hover:text-[#f04427]"
            >
              <Mail size={18} />
              E-mail: blackvincisadm@gmail.com
            </a>

            <a
              href="https://wa.me/5531993028579"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[#f04427]"
            >
              <Phone size={18} />
              Whatsapp: (31)99302-8579
            </a>

            <a
              href="tel:1036790700"
              className="flex items-center gap-2 transition hover:text-[#f04427]"
            >
              Zangi: 10-3679-0700
            </a>

            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Belo Horizonte - MG
            </p>

          </div>
        </div>

        {/* CATEGORIAS */}
        <div>
          <h2 className="mb-7 text-3xl font-medium">
            Categorias
          </h2>

          <ul className="flex flex-col gap-5 text-base">

            <li>
              <a href="#servicos" className="transition hover:text-[#f04427]">
                Serviços
              </a>
            </li>

            <li>
              <a href="#sobre" className="transition hover:text-[#f04427]">
                Quem Somos
              </a>
            </li>

            <li>
              <a href="#parceiros" className="transition hover:text-[#f04427]">
                Parceiros
              </a>
            </li>

            <li>
              <a href="#contato" className="transition hover:text-[#f04427]">
                Contatos
              </a>
            </li>

          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h2 className="mb-7 text-3xl font-medium">
            Siga-nos
          </h2>

          <ul className="flex flex-col gap-5 text-base">

            <li>
              <a
                href="https://www.instagram.com/blackvincis_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-[#f04427]"
              >
                Instagram: Blackvincis_oficial
              </a>
            </li>

            <li>
              <a
                href="https://www.hackerone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#f04427]"
              >
                Hackerone: Black Vincis
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* LINHA DIVISÓRIA */}
      <div className="mx-8 border-t border-black/70 lg:mx-16" />

      {/* RODAPÉ INFERIOR */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row lg:px-16">

        <div className="flex flex-wrap justify-center gap-8 text-sm">

          <a href="/privacy-policy" className="transition hover:text-[#f04427]">
            Privacy Policy
          </a>

          <a href="/terms" className="transition hover:text-[#f04427]">
            Terms & Conditions
          </a>

          <a href="/accessibility" className="transition hover:text-[#f04427]">
            Accessibility Statement
          </a>

        </div>

        <p className="text-sm text-black/60">
          © {new Date().getFullYear()} Black Vincis. Todos os direitos reservados.
        </p>

      </div>

    </footer>
  )
}

export default Footer