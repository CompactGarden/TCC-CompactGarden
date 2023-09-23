import "../style/home.css"
import { List } from "@phosphor-icons/react"
function Home() {
    return (
        <>
            <header>
                <div className="menu">
                    <button> <List size={32} /> </button>
                </div>
                <h1>AgroGate</h1>
            </header>
            
            <main>
                <p class="Home">Uma solução baseada em Arduino para as suas hortas domésticas.</p>
                <img src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg" alt="" />
                <p class="Home">A AgroGate vem trabalhando no seu primeiro projeto voltado à Agricultura Doméstica para 2023.</p>
            </main>
        </>
    )
}

export default Home