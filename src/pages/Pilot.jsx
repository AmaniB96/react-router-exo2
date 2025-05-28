import Victor from '../../public/assets/crew/image-victor-glover.webp'

export default function Pilot() {

    return(
        <div className='commander'>
            <span>02</span>
            <p>MEET YOUR CREW</p>

            <div className='crewContainer'>
                <div className='crewDetails'>
                    <h4>PILOT</h4>
                    <h2>Victor Glover</h2>
                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                </div>

                <div className='crewImg'>
                    <img src={Victor} alt="" />
                </div>
            </div>
        </div>
    )
}