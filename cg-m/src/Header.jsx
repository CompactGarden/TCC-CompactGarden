import './style/header.css'
import { useState } from 'react'
import { List, X } from "@phosphor-icons/react"
import { Link } from 'react-router-dom'

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
                    <ul>
                        <li><Link to={'/'} style={{textDecoration: 'none', color: '#E6E8E6'}}>Home</Link></li>
                        <li><Link to={'/diferenciais'} style={{textDecoration: 'none', color: '#E6E8E6'}}>Diferenciais</Link></li>
                        <li><Link to={'/custos'} style={{textDecoration: 'none', color: '#E6E8E6'}}>Custos</Link></li>
                        <li><Link to={'/publico-alvo'} style={{textDecoration: 'none', color: '#E6E8E6'}}>Publico Alvo</Link></li>
                        <li><Link to={'/sobre'} style={{textDecoration: 'none', color: '#E6E8E6'}}>Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header