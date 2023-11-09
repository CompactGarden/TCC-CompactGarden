import '../style/target.css'
import Header from '../Header'

function Target() {
    return (
        <>
        <Header />
            <main id='main-tar'>
                <h2 id='title-tar'>Objetivo e Público Alvo</h2>
                <p className='p-tar'>A AgroGate tem como objetivo oferecer um produto para pessoas que desejam ter um pouco de verde em suas casas, porém não têm tempo para monitorar suas plantas constantemente. Um produto fácil de instalar e usar, adequado para plantas de pequeno porte.</p>
                <img id="img-tar" src="https://cdn.discordapp.com/attachments/882373576676753519/1155628252539387994/cuidandodeplanta.png" alt="" />
                <p className='p-tar'>Um produto fácil de instalar e usar para plantas.</p>
            </main>
        </>
    )
}
export default Target