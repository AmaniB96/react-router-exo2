import './commander.css'
import Douglas from '../../public/assets/crew/image-douglas-hurley.webp'

export default function Commander() {
    


    return(
        <div className='commander'>
            <p>MEET YOUR CREW</p>

            <div className='crewContainer'>
                <div className='crewDetails'>
                    <h4>COMMANDER</h4>
                    <h2>DOUGLAS HURLEY</h2>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>

                <div className='crewImg'>
                    <img src={Douglas} alt="" />
                </div>
            </div>
        </div>
    )
}