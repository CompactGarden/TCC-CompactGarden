import "../style/costs.css"
import Header from '../Header'

function Costs() {
    return (
        <>
        <Header />
           <main>
                <h2 id="title-cos">Custos e componentes</h2>
                <img id="img-cos"src="https://cdn.discordapp.com/attachments/882373576676753519/1155660906802462740/image.png" alt="" />
                <p className="p-cos">CompactGarden é um produto de baixo custo, sendo os dispositivos Arduino seus componentes mais caros.</p>

                <ul id="list-cos">
                    <li>Arduino (UNO R3) - ~R$100,00</li>
                    <li>Fiação geral - ~R$40,00</li>
                    <li>Sensores e atuadores - ~R$155,00</li>
                    <li>Pote - ~R$35,00</li>
                    <li>Mangueira - ~ R$17,00</li>

                </ul>
           </main>
           </>
    )
}
export default Costs