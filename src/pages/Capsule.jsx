import SpaceCapsule from '../../public/assets/technology/image-space-capsule-portrait.jpg'

export default function Capsule() {
    


    return(
        <div className='launch'>

            <div className='technoText'>
                <span>THE TERMINOLOGY...</span>
                <h2>SPACE CAPSULE</h2> 
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
            

            <div className='technoImg'>
                <img src={SpaceCapsule} alt="" />
            </div>

        </div>
    )
}