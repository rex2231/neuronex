import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
        <Wrapper show={show}>
            <Content>
                <div style={{color:"black"}}>WorkShop</div>
                <Link to='/models'><li>UI/UX</li></Link>
                <Link to='/model3'><li>AR/VR</li></Link>
                <div style={{color:"black"}}>Technical Event</div>
                <Link to='/modelx'><li>Bug Bash Challenge</li></Link>
                <Link to='/modely'><li>Utopia UI</li></Link>
                <Link to='/models'><li>Code Sprint Shutdown</li></Link>
                <Link to='/model3'><li>Paper Pinnacle</li></Link>
                <Link to='/modelx'><li>Tech Unleashed Expo</li></Link>
                <Link to='/modely'><li>Marvel Mastery</li></Link>
                <div style={{color:"black"}}>Non-Technical Event</div>
                <Link to='/models'><li>FFXBGMI</li></Link>
                <Link to='/model3'><li>Isekai-Baka's</li></Link>
                <Link to='/modelx'><li>Flicker Fusion</li></Link>
                <Link to='/modely'><li>Vibrato Vision</li></Link>
                <Link to='/models'><li>Box Bash League</li></Link>
                <Link to='/model3'><li>Shadown Conspiracy</li></Link>
                <Link to='/modelx'><li>Meme Mind Summit</li></Link>
                <Link to='/modely'><li>Frame By Frame</li></Link>
            </Content>
        </Wrapper>
    )
}

export default SideNav