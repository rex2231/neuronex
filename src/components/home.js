import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="NEURONEX" desc="Order Online for " link="Touchless Delivery" arrow="true"/>
            </Content>
            <Content>
                <Section title="UI | UX" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="AR | VR" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="BUG BASH CHALLENGE" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="UTOPIA UI" desc="Lowest Cost Solar Panels in America" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-panel.jpg"/>
            </Content>
            <Content>
                <Section title="CODE SPRINT SHUTDOWN" desc="Produce Clean Energy From Your Roof" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-roof.jpg"/>
            </Content>
            <Content>
                <Section title="PAPER PINNACLE" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="TECH UNLEASHED EXPO" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="MARVEL MYSTERY" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="FF X BGMI" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="ISEKAI-BAKA'S" desc="Lowest Cost Solar Panels in America" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-panel.jpg"/>
            </Content>
            <Content>
                <Section title="FLICKER FUSION" desc="Produce Clean Energy From Your Roof" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-roof.jpg"/>
            </Content>
            <Content>
                <Section title="VIBRATO VISION" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="BOX BASH CHALLENGE" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="SHADOWN CONSPIRACY" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="MEME MIND SUMMIT" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="FRAME BY FRAME" desc="Produce Clean Energy From Your Roof" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="solar-roof.jpg"/>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home