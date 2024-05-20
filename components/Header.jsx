import './Header.css'
function Header(){
    return(
        <div className="header">
            <div className="Head">
                <img src={require('../img/image.png')} className="logo" alt=""   />
                <nav className="nav">
                    <a href='#j' >generer un document <i class="fa-solid fa-chevron-down"></i></a>
                    <a href="#h">Realiser un Previsonnel</a>
                    <a href="#G"> Nos services</a>
                    <a href="#G">La vision lazzy</a>
                    <button className='nav_button'> Nous contacter</button>
                </nav>
                <div className='generer'>
                    <div className='Administratif'>
                        <h4>Administratif</h4>
                        <p>
                            Creation en linge de documents bes a la gestion administrative de votre entreprise
                        </p>
                    </div>
                    <div className='Bancaire'>
                        <h4>Bancaire</h4>
                        <p>
                            Creation en ligne de documents pour simplifier vos realtion bancaaires
                        </p>
                    </div>
                    <div className='Immobilier'>
                        <h4>Immobilier</h4>
                        <p>
                            Creation en ligne d'attestation et autre documents immobilier
                        </p>
                    </div>
                    <div className='Juridique'>
                        <h4>Juridique</h4>
                        <p>
                            Création en ligne de doguments jundique pour cus factiter yox demarches
                        </p>
                    </div>
                </div>
                <div className='contacter'>
                    <p>Commencez des maintenant en creant votre premier document !</p>
                    <img src={require('../img/image (17).png')} className='' alt="contacter_img" />
                </div>
            </div>
            <section>
                <h1>Notre Vision</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel modi quasi  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia?repellat totam, quis aut dolorum. Delectus, perferendis alias? Expedita voluptate odio vero temporibus minus quis consequuntur quasi, autem nemo.</p>
            </section>
        </div>
    );
}



export default Header