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
                    <ul>
                        <li>item1</li>
                        <li>item2</li>
                        <li>item3</li>
                        <li>item4</li>
                        <li>item5</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header