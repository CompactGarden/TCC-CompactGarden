import "../style/diff.css"
import Header from '../Header'

function Diff() {
    return (
        <>
        <Header />
        <main id='main-diff'>
            <h2 id="title-dif">Diferenciais do CompactGarden</h2>
            <img id="img-dif" src="https://cdn.discordapp.com/attachments/882373576676753519/1155628252833005578/lcd.webp" alt="" />
            <div className="functions">
                <p>Monitoramento 24/7 da umidade da terra, fornecida através de sensores.</p>
                <p>Irrigação automática, com base na umidade atual.</p>
                <p>Luzes Led para com o objetivo fotossintético no crescimento adequado de sua planta</p>
                <p>Alta eficiência energética, proporcionada pelo baixo consumo dos componentes Arduino.</p>
            </div>
        </main>
        </>
    )
}
export default Diff