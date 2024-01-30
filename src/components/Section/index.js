import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper,ContentTop,ContentMid,Content } from './section.style'

function Section({ title,desc,backgroundImg,link,leftbtn,rightbtn,arrow,range,speed,hp,top }) {
   
    return (
        <Wrapper>
            <ContentTop>
                <h2>{title}</h2>
                <p>{desc}</p>
            </ContentTop> 
            <div className='arrow-space'>
                {!arrow &&
                <ContentMid className='image-element'>
                        <img className="imageElement" src={`/images/${backgroundImg}`}/>
                </ContentMid>}
                <ContentMid className={arrow ? '' : 'buttons'} >
                
                    {leftbtn &&
                        <div className='right'>
                            <Link to={{ pathname: link }}><button>MORE DETAILS</button></Link>
                    </div>
                    }
                    {rightbtn && 
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-jhPrAdL04xyLuAV0OkBwy0fTtSHjtvkeJ9drC2VCrxMW-Q/viewform?usp=sf_link">
                        <div className='left'>
                            <button>REGISTER NOW</button>
                        </div>
                        </a>
                    }
                </ContentMid>
                {range && 
                <Content>
                    <div className="Info-bar">
                        <div className="Specs" >
                            <h2>{range} mi</h2>
                            <p>Range (EPA est.)</p>
                        </div>
                        <div className="Specs" >
                            <h2>{speed}s</h2>
                            <p>0-60 mph*</p>
                        </div>
                        <div className="Specs" >
                            <h2>{top} mph</h2>
                            <p>Top Speed</p>
                        </div>
                        {hp && 
                        <div className="Specs hp" >
                            <h2>{hp} hp</h2>
                            <p>Peak Power</p>
                        </div>
                        }
                        <div className="order_btn">
                            <button> ORDER NOW </button>
                        </div>
                    </div>
                </Content>
                }
                {arrow && 
                    <div className='arrow'>
                        <img src='/images/down-arrow.svg' alt='arrow'/>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Section
