import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
        <Wrapper show={show}>
            <Content>
                <div style={{color:"black"}}>WorkShop</div>
                <Link to='/ui-ux'><li>UI/UX</li></Link>
                <Link to='/ar-vr'><li>AR/VR</li></Link>
                <div style={{color:"black"}}>Technical Event</div>
                <Link to='/bug-bash-challenge'><li>Bug Bash Challenge</li></Link>
                <Link to='/utopia-ui'><li>Utopia UI</li></Link>
                <Link to='/code-sprint-shutdown'><li>Code Sprint Showdown</li></Link>
                <Link to='/paper-pinnacle'><li>Paper Pinnacle</li></Link>
                <Link to='/tech-unleashed-expo'><li>Tech Unleashed Expo</li></Link>
                <Link to='/marvel-mastery'><li>Marvel Mastery</li></Link>
                <div style={{color:"black"}}>Non-Technical Event</div>
                <Link to='/ff-bgmi'><li>FFXBGMI</li></Link>
                <Link to='/isekai-baka'><li>Isekai-Baka's</li></Link>
                <Link to='/flicker-fusion'><li>Flicker Fusion</li></Link>
                <Link to='/vibrato-vision'><li>Vibrato Vision</li></Link>
                <Link to='/box-bash-league'><li>Box Bash League</li></Link>
                <Link to='/shadow-conspiracy'><li>Shadown Conspiracy</li></Link>
                <Link to='/meme-mind-summit'><li>Meme Mind Summit</li></Link>
                <Link to='/frame-by-frame'><li>Frame By Frame</li></Link>
            </Content>
        </Wrapper>
    )
}

export default SideNav