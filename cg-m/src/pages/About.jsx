import '../style/about.css'
import Header from '../Header'

function About() {
    return (
        <>
        <Header />
        <main id='main-abt'>
            <h2 class="title-abt">Sobre a AgroGate®</h2>

            <p class="p-abt">AgroGate é uma nova startup voltada para soluções de baixo custo na área da Agricultura Doméstica, com base em dispositivos Arduino de fácil usabilidade e manutenção.</p>

            <h2 className="title-abt">Sementes que podem ser plantadas</h2>

            <p class="p-abt">Nosso projeto oferece suporte aos mais diversos tipos de semente</p>

            <div id="grid">
                <div id="f1">
                    <img src="data:image/jpeg;base64,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" alt="" className="img-abt" />
                    <p className="st-abt">Peperomias</p>

                    <img src="https://images.tcdn.com.br/img/img_prod/648834/acorus_gramineus_variegata_237_1_20190726133024.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Acorus Gramineus</p>  
                                      
                    <img src="https://cdn.awsli.com.br/600x450/1539/1539472/produto/168138207/d9090efbb4.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Avenca Variegata</p>
                    
                    <img src="https://images.homify.com/image/upload/v1624196558/p/diy/photos/zrxpjyxjwfddhcqgakuj.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Selaginella</p>

                </div>

                <div id="f2">
                    <img src="https://cdn.awsli.com.br/600x450/2446/2446161/produto/171045621/3796f3e75b.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Cheflera Mini</p>

                    <img src="https://cdn.awsli.com.br/300x300/163/163535/produto/148688631/1dd1cc4a1e.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Zamioculca Mini</p>  
                                      
                    <img src="https://cdn.awsli.com.br/600x450/2446/2446161/produto/202717644/fotor_2023-2-10_22_44_13-quxfdg.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Caladium Mini</p>
                    
                    <img src="https://imagens-revista.vivadecora.com.br/uploads/2021/06/Fitonia-para-decorar-a-casa-charmosa-Foto-Balcony-Garden-Web.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Fitônia</p>
                </div>

                <div id="f3">
                <img src="https://images.squarespace-cdn.com/content/v1/5e96210039051266f7fcbf4e/1598153691476-VV5V8WX3TPLDHF86ZHP3/Devils+Backbone+alt.jpg?format=1500w" alt="" className="img-abt" />
                    <p className="st-abt">Mini Pedilanthus</p>

                    <img src="https://d5gag3xtge2og.cloudfront.net/producao/33015156/G/img_20221125_192923.webp" alt="" className="img-abt" />
                    <p className="st-abt">Sedum Oro</p>  
                                      
                    <img src="https://acdn.mitiendanube.com/stores/002/064/189/products/cryptanthus-acaulis-11-4303c6f4dd7e3c938616591265138033-640-0.png" alt="" className="img-abt" />
                    <p className="st-abt">Bromélia Cryptanthus</p>

                    <img src="https://cdn.awsli.com.br/600x1000/2441/2441441/produto/190115589/33f29f1922.jpg" alt="" className="img-abt" />
                    <p className="st-abt">Monanthes</p>
                </div>
            </div>

            <div id="span-abt">
                <span>AgroGate - 2023</span>
                <span>UNASP - Campus - SP</span>
            </div>
        </main>
        </>
    )
}
export default About