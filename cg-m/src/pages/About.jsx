import { List } from "@phosphor-icons/react"
import "../style/about.css"

function About() {
    return (
        <>
            <header>
                <div className="menu">
                    <button> <List size={32} /> </button>
                </div>
                <h1>AgroGate</h1>
            </header>

            <main>
                <p class="Abt">Apresentamos o Compact Garden, um dispositivo que automatiza e monitora a sua planta a todo o momento.</p>
                <img src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg" alt="" />
                <p class="Abt">A AgroGate vem trabalhando no seu primeiro projeto voltado à Agricultura Doméstica para 2023.</p>
            </main>
        </>
    )
}
export default About