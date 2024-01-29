import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { Link } from 'react-router-dom';

import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <Link to='/'>
                <img src='/images/logo.svg' alt='logo'/>
            </Link>
            </div>
            {/* <Content>
                <div></div>
            </Content> */}
            <Content1>
                <a href='#' onClick={()=> setOpen(true)} >Event</a>
            </Content1>
            {open && 
            <div className='top'>
                <div className='close' onClick={()=> setOpen(false)}>
                    <CloseIcon/>
                </div>
            </div> 
            }       
            <SideNav show={open}/>
        </Wrapper>
        </>
    )
}

export default Header