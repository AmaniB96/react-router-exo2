import Anousheh from '../../public/assets/crew/image-anousheh-ansari.webp'

export default function Engineer() {

    return(
        <div className='commander'>
            <span>02</span>
            <p>MEET YOUR CREW</p>

            <div className='crewContainer'>
                <div className='crewDetails'>
                    <h4>ENGINEER</h4>
                    <h2>ANOUSHEH ANSARI</h2>
                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>

                <div className='crewImg'>
                    <img src={Anousheh} alt="" />
                </div>
            </div>
        </div>
    )
}