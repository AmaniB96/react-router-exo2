import Nav from '../components/Nav'
import './home.css'

export default function Home() {

    return(
        <>
        <Nav></Nav>

        <div className='home'>
            <div className='homeText'>
                <h4>SO, YOU WANT TO TRAVEL TO</h4>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinly go to outer space and not hover kind of the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience! </p>
            </div>

            <div className='explore'>
                <p>EXPLORE</p>
            </div>
        </div>
        </>
    )
    
}