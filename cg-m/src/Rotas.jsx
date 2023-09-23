import { Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<About />} />
        </Routes>
    )
}

export default Rotas