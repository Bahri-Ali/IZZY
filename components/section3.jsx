import './section3.css'
function Section3(){
    const steps = [
        {
            icon: '✏️',
            title: 'Choisissez et remplissez votre document',
            description: 'Sélectionnez le document qui correspond à votre besoin et remplissez-le en ligne.'
        },
        {
            icon: '✔️',
            title: 'Vérifiez vos informations',
            description: 'Après la saisie des informations nécessaires, vérifiez-les avant génération de votre document.'
        },
        {
            icon: '⬇️',
            title: 'Téléchargez votre document',
            description: 'Votre document est prêt ! Vous n’avez plus qu’à le télécharger et en profiter.'
        }
    ]
    return(
    //     <div >
    //         <h2 >Comment ça fonctionne ?</h2>
    //         <div>
    //         {steps.map((step, index) => (
    //             <div key={index}>
    //                 <div >{step.icon}</div>
    //                 <h3 >{step.title}</h3>
    //                 <p>{step.description}</p>
    //             </div>
    //         ))}
    //     </div>
    // </div>
        <div className="section3">
            <img src={require('../img/image (1).png')} className='img_sectio3' alt="" />
            <div className='description'>
                <h4 >IZZY  LEX</h4>
                <h2>Comment ca fonctione?</h2>
            </div>
            <div className='section3_main'>
                <div>
                    <img src={require('../img/image (13).png')} alt="" className='f1' />
                    <h3>Choisissez et remplissez votre document</h3>
                    <p> elit. Enim aperiam aliquam sunt error officia quod?</p>
                </div>
                <img src={require('../img/image (5).png')} alt="" />
                <div>
                    <img src={require('../img/image (8).png')} alt="" className='divBC'/>
                    <h3>Verifiez vos information</h3>
                    <p> adipisicing elit. Accusantium nulla doloremque, exercitationem eaque quas fugit animi doloribus.</p>
                </div>
                <img src={require('../img/image (4).png')} alt="" className='f2'/>
                <div>
                    <img src={require('../img/image (6).png')} alt="" />
                    <h3>Telechargez votre document</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetu</p>
                </div>
            </div>
        </div>
    )
}


export default Section3