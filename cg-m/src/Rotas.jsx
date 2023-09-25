import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Diff from "./pages/Diff"
import Costs from './pages/Costs'
import About from './pages/About'
import Target from './pages/Target'
import Header from './Header'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/diferenciais' element={<Diff />} />
            <Route path='/custos' element={<Costs/>}/>
            <Route path='/sobre' element={<About />} />
            <Route path='/publico-alvo' element={<Target />} />
            <Route element={<Header />}/>
        </Routes>
    )
}

export default Rotas