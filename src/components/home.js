import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Neuronex24";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="NEURONEX" desc="Order Online for " link="ui-ux" arrow="true" backgroundImg/>
            </Content>
            <Content>
                <Section title="UI | UX" desc="From pixels to perfection" link="/ui-ux" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="ui.png"/>
            </Content>
            <Content>
                <Section title="AR | VR" desc="Unlock Virtual Horizons!" link="/ar-vr" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="ar.png"/>
            </Content>
            <Content>
                <Section title="BUG BASH CHALLENGE" desc="Our code, your solution" link="/bug-bash-challenge" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="bug.png"/>
            </Content>
            <Content>
                <Section title="UTOPIA UI" desc="Where pixels meet purpose" link="/utopia-ui" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="ui.png"/>
            </Content>
            <Content>
                <Section title="CODE SPRINT SHUTDOWN" desc="Hack the impossible" link="/code-sprint-shutdown" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="coding.png"/>
            </Content>
            <Content>
                <Section title="PAPER PINNACLE" desc="Ideas and innovations ignite" link="/paper-pinnacle" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="paper.png" />
            </Content>
            <Content>
                <Section title="TECH UNLEASHED EXPO" desc="Unleash your potential! Unleash your tech!" link="/tech-unleashed-expo" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="tech.png"/>
            </Content>
            <Content>
                <Section title="MARVEL MYSTERY" desc="A battleground for the fastest nerves in your brain " link="/marvel-mastery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="marvel.png"/>
            </Content>
            <Content>
                <Section title="FF X BGMI" desc="Eat,Sleep,BGMI,Free Fire,Repeat" link="/ff-bgmi" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="ff.png"/>
            </Content>
            <Content>
                <Section title="ISEKAI-BAKA'S" desc="The only true fear is the fear of the unknown" link="/isekai-baka" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="isekai.png"/>
            </Content>
            <Content>
                <Section title="FLICKER FUSION" desc="Dive into the reel of emotions" link="/flicker-fusion" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="flicker.png"/>
            </Content>
            <Content>
                <Section title="VIBRATO VISION" desc="Beat the Beats, Master the Melodies!" link="/vibrato-vision" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="vibrato.png" />
            </Content>
            <Content>
                <Section title="BOX BASH CHALLENGE" desc="Order Online for " link="/box-bash-league" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="box.png"/>
            </Content>
            <Content>
                <Section title="SHADOWN CONSPIRACY" desc="In the game of shadows,the only rule is strike first" link="/shadow-conspiracy" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="shadow.png"/>
            </Content>
            <Content>
                <Section title="MEME MIND SUMMIT" desc="Who needs words when you have memes" link="/meme-mind-summit" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="meme.png"/>
            </Content>
            <Content>
                <Section title="FRAME BY FRAME" desc="In the Web of Victory, Every connection counts!" link="/frame-by-frame" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="frame.png"/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home