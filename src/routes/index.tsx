import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/home'
import Solucoes from '../pages/solucoes'
import Sobre from '../pages/sobre'
import Parceiros from '../pages/parceiros'
import Contato from '../pages/contato'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/solucoes" element={<Solucoes />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/parceiros" element={<Parceiros />} />

          <Route path="/contato" element={<Contato />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes