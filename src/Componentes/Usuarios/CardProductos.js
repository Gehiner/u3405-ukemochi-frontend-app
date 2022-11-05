import "../../Styles/main.css"
import "../../Styles/mainTablet.css"
import "../../Styles/mainDesktop.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const CardProductos=()=>{
    return(
        <body>
            <Header/>
            <main className="main">
                <h1>Galleter&iacute;a</h1>
                <section className="products">
                    <div className="card-Products">
                        <div className="card-Products__img">
                            <img src="https://i.ibb.co/cgrv3VM/galletas.webp" alt="Galleta"/>
                            <div className="card-Products__ranking">
                                <img src="https://i.ibb.co/fGXdyxw/Star-1.webp" alt="Estrella"/>
                                <span>4.5</span>
                            </div>
                            <div className="card-Products__cost">
                                <span>$5000</span>
                            </div>
                        </div>
                        <h2 className="card-Products__title">Galleta</h2>
                        <span className="card-Products__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore dolor accusamus nostrum dolorem saepe voluptatum delectus adipisci iste?
                        </span>
                        <span className="card-Products__key-words"> <b>KeyWords: </b><span>Crocante, dulce</span> </span>
                        <div className="card-Products__buttom">
                            <button className="card-Products__buttom--1">Agregar</button>
                            <div className="card-Products__buttom--2">
                                <button className="card-Products__buttom-less" >-</button>
                                <span className="card-Products__buttom-number" >0</span>
                                <button className="card-Products__buttom-plus">+</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </body>    
    )
}

export default CardProductos;