import Mark from '../../public/assets/crew/image-mark-shuttleworth.webp'

export default function Specialist() {

    return(
        <div className='commander'>
            <span>02</span>
            <p>MEET YOUR CREW</p>

            <div className='crewContainer'>
                <div className='crewDetails'>
                    <h4>SPECIALIST</h4>
                    <h2>Mark Shuttleworth</h2>
                    <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>

                <div className='crewImg'>
                    <img src={Mark} alt="" />
                </div>
            </div>
        </div>
    )
}