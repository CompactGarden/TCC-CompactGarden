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
                        <li><a href="/">Página Principal</a></li>
                        <li><a href="/diferenciais">Diferenciais do nosso projeto</a></li>
                        <li><a href="/custos">Custos e componentes</a></li>
                        <li><a href="/sobre">Mais sobre a AgroGate</a></li>
                        <li><a href="/publico-alvo">Publico Alvo</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header