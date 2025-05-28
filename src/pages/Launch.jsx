import './launch.css'
import Vehicle from '../../public/assets/technology/image-launch-vehicle-portrait.jpg'

export default function Launch() {
    


    return(
        <div className='launch'>

            <div className='technoText'>
                <span>THE TERMINOLOGY...</span>
                <h2>LAUNCH VEHICLE</h2> 
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
            

            <div className='technoImg'>
                <img src={Vehicle} alt="" />
            </div>

        </div>
    )
}