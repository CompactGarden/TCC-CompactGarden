import "../style/costs.css"
import Header from '../Header'

function Costs() {
    return (
        <>
        <Header />
           <main>
                <h2 id="title-cos">Custos e componentes</h2>
                <img id="img-cos"src="https://cdn.discordapp.com/attachments/882373576676753519/1155660906802462740/image.png" alt="" />
                <p className="p-cos">GreenHut ainda é um produto em desenvolvimento, e portanto não tem preço de venda determinado.</p>
                <p className="p-cos">Entretanto, é possível ter um valor de base levantado de acordo com os componentes eletrônicos escolhidos, que serão comprados de um fornecedor:</p>

                <ul id="list-cos">
                    <li>Arduino (UNO R3) - ~R$100,00</li>
                    <li>Fiação geral - ~R$26,00</li>
                    <li>Sensores e atuadores - ~R$155,0</li>
                    <li>Bateria (9V) - ~R$10,00</li>
                </ul>
           </main>
           </>
    )
}
export default Costs