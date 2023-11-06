import "../style/home.css"

import Header from '../Header'
function Home() {
    return (
        <>
        <Header />
            <main>
                <p className="p-home">Uma solução baseada em Arduino para as suas hortas domésticas.</p>
                
                <img id="arduino" src="https://cdn.discordapp.com/attachments/811424378969260032/1155540840958136410/14-147325_arduino-uno-isometric-art-arduino-uno-black-and-removebg-preview_2.png" alt="" />
                
                <p className="p-home">A AgroGate vem trabalhando no seu primeiro projeto voltado à Agricultura Doméstica para 2023.</p>

                <img id="estrutura" src="https://cdn.discordapp.com/attachments/1146644165799727256/1155636722571423754/image_4.png" alt="" />
                
                <p className="p-home">Apresentamos o CompactGarden, um dispositivo que automatiza e monitora a sua plantação a todo o momento.</p>
            </main>
            </>
    )
}

export default Home