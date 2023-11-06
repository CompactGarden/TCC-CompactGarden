import './style/header.css'
import { useState } from 'react'
import { List, X } from "@phosphor-icons/react"

function Header() {
    const [oc, setOc] = useState(false)
    function handleIcon() {
        if (oc) {
            setOc(false)
            return
        }
        setOc(true)
    }

    return (
        <>
            <header>
                <button onClick={handleIcon}>{oc == true ? <X size={32} /> : <List size={32} />}</button>

                <h1>AgroGate</h1>
            </header>
            
            <div className={`menu ${oc == true ? '' : 'fechado'}`}>
                <hr />
                <nav>
                    <ul id='ul'>
                        <li><Link to={'/'}>Página Principal</Link></li>
                        <li><Link to={'/diferenciais'}>Diferenciais do nosso projeto</Link></li>
                        <li><Link to={'/custos'}>Custos e componentes</Link></li>
                        <li><Link to={'/sobre'}>Mais sobre a AgroGate</Link></li>
                        <li><Link to={'/publico-alvo'}>Publico Alvo</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header