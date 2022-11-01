import "../../Styles/main.css"
import "../../Styles/mainTablet.css"
import "../../Styles/mainDesktop.css"
import "../../Styles/Products-Users/mainProductsUser.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const ContendHome=()=>{
    return(
        <body>
            <Header/>
            <main className="main">
                <section class="main-section">
                    <div class="main-section__img">
                        <a href="">UKE MOCHI</a>
                    </div>
                </section>
                <h2 class="main-title">Nuestros Productos</h2>
                <section class="product-container ">
                    <a href="/candys" class="product-card product-card-galletas product-card__background">
                        <div class="product-card__text">
                            <span>Galleter&iacute;a</span>
                        </div>
                    </a>
                    <a href="/candys" class="product-card product-card-chocolate product-card__background">
                        <div class="product-card__text">
                            <span>Chocolates</span>
                        </div>
                    </a>
                    <a href="/candys" class="product-card product-card-confeti product-card__background">
                        <div class="product-card__text">
                            <span>Confiter&iacute;a</span>
                        </div>
                    </a>
                    <a href="/candys" class="product-card product-card-fitness product-card__background">
                        <div class="product-card__text">
                            <span>Fitness</span>
                        </div>
                    </a>
                    <a href="/candys" class="product-card product-card-picante product-card__background">
                        <div class="product-card__text">
                            <span>Picante</span>
                        </div>
                    </a>
                </section>
            </main>
            <Footer/>
        </body>
    )
}

export default ContendHome;