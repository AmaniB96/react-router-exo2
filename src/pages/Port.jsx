import SpacePort from '../../public/assets/technology/image-spaceport-portrait.jpg'

export default function Port() {
    


    return(
        <div className='launch'>

            <div className='technoText'>
                <span>THE TERMINOLOGY...</span>
                <h2>SPACEPORT</h2> 
                <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </div>
            

            <div className='technoImg'>
                <img src={SpacePort} alt="" />
            </div>

        </div>
    )
}