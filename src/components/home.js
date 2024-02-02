import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import FOOTER from './Footer';

function Home() {

    document.title = "Neuronex24";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="NEURONEX'24" slogan="Velammal Institute of Technology" desc="" link="intro" arrow="true" />
            </Content>
            <Content>
                <Section title="UI | UX" slogan='From pixels to perfection' desc="In the UI and UX design workshop, participants delve into crafting visually appealing interfaces (UI) and optimizing user experiences (UX). Through hands-on exercises, they learn design principles, usability techniques, and collaboration strategies. The workshop fosters practical skills, empowering attendees to create engaging digital solutions that prioritize both aesthetics and user satisfaction." link="/ui-ux" leftbtn="CUSTOM ORDER" regLink="https://docs.google.com/forms/d/e/1FAIpQLSd-jhPrAdL04xyLuAV0OkBwy0fTtSHjtvkeJ9drC2VCrxMW-Q/viewform?usp=sf_link" rightbtn="EXISTING INVENTORY" backgroundImg="ui.png"/>
            </Content>
            <Content>
                <Section title="AR | VR" slogan="Unlock Virtual Horizons!" desc="Immerse yourself in the future of technology with our AR/VR workshop! Discover the fundamentals of Augmented and Virtual Reality, explore cutting-edge applications, and gain hands-on experience in creating immersive experiences. Whether you're a beginner or an enthusiast, join us for a journey into the captivating realms of AR and VR technology." link="/ar-vr" leftbtn="CUSTOM ORDER" regLink="https://docs.google.com/forms/d/e/1FAIpQLSd-jhPrAdL04xyLuAV0OkBwy0fTtSHjtvkeJ9drC2VCrxMW-Q/viewform?usp=sf_link" rightbtn="EXISTING INVENTORY" backgroundImg="ar.png"/>
            </Content>
            <Content>
                <Section title="BUG BASH CHALLENGE" slogan="Our code, your solution" desc="Join our Symposium's Debugging Round to showcase your coding prowess! Tackle challenging bugs, demonstrate problem-solving skills, and compete against the best. In the Coding Round, unleash your creativity with hands-on challenges, showcasing your ability to craft efficient and innovative solutions. Elevate your coding journey with us!" link="/bug-bash-challenge" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="bug.png"/>
            </Content>
            <Content>
                <Section title="UTOPIA UI" slogan="Where pixels meet purpose" desc="Level up your design game: Push the boundaries of your skill in UI/UX. A great oppurtunity to showcase your UI designer skills. The competition on! Unleash your UI creativity and dominate the competition, build the interface  that transports users to another world." link="/utopia-ui" leftbtn="ORDER NOW" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" rightbtn="LEARN MORE" backgroundImg="ui.png"/>
            </Content>
            <Content>
                <Section title="CODE SPRINT SHOWDOWN" slogan="Hack the impossible" desc="Build,Break ,innovate join the 'codesprint showdown' revolution,Gear up,hacker!,The coding marathon is on ,level up your skills,design for good win big,launch your ideas." link="/code-sprint-shutdown" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="coding.png"/>
            </Content>
            <Content>
                <Section title="PAPER PINNACLE" slogan="Ideas and innovations ignite" desc="A paper pinnacle program in our symposium is an event where students present and discuss their original work on a specific topic. This program usually includes an abstract, a presentation, and a Q&A session. The goal is to share new knowledge and get feedback from the audience." link="/paper-pinnacle" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="paper.png" />
            </Content>
            <Content>
                <Section title="TECH UNLEASHED EXPO" slogan="Unleash your potential! Unleash your tech!" desc="Gear up to Greek out! Buckle up for the ultimate project playground. From blueprints to breakthroughs 'Tech Unleashed' Expo allows you to present all your creations. The competitions on!!! Unleash the future.. Dive into mind blowing projects shaping tomorrow." link="/tech-unleashed-expo" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="tech.png"/>
            </Content>
            <Content>
                <Section title="MARVEL MASTERY" slogan="A battleground for the fastest nerves in your brain " desc="Calling all tech enthusiasts! Get ready to put your knowledge to the test in our thrilling technical quiz event. Challenge yourself with mind-boggling questions, solve brain teasers, and compete against other brilliant minds. It's the perfect opportunity to showcase your expertise and win exciting prizes!Get ready for an adrenaline-fueled quiz extravaganza!" link="/marvel-mastery" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="marvel.png"/>
            </Content>
            <Content>
                <Section title="FF X BGMI" slogan="Eat,Sleep,BGMI,Free Fire,Repeat" desc="Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival.PlayerUnknown's Battlegrounds (PUBG) is a popular battle royale game that drops players onto an island where they compete to be the last person or team standing. Developed by PUBG Corporation." link="/ff-bgmi" leftbtn="CUSTOM ORDER" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" rightbtn="EXISTING INVENTORY" backgroundImg="ff.png"/>
            </Content>
            <Content>
                <Section title="ISEKAI-BAKA'S" slogan="The only true fear is the fear of the unknown code geass" desc="Calling all anime fans, weebs, and shonen enthusiasts! Dust off your knowledge scrolls and prepare to unleash your inner otaku! We’re throwing an anime quiz event that will challenge your expertise, ignite your fandom, and leave you shouting “Dattebayo!” with glee." link="/isekai-baka" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="isekai.png"/>
            </Content>
            <Content>
                <Section title="FLICKER FUSION" slogan="Dive into the reel of emotions" desc="Lights, camera, action! At the symposium’s short film event, witness the magic of storytelling unfold on the big screen. Be prepared to laugh,cry and be moved by these incredible films crafted by talented filmmakers. It’s an event you won’t want to miss!" link="/flicker-fusion" leftbtn="ORDER NOW" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" rightbtn="LEARN MORE" backgroundImg="flicker.png"/>
            </Content>
            <Content>
                <Section title="VIBRATO VISION" slogan="Beat the Beats, Master the Melodies!" desc="Experience the intriguing game Vibrato Vision, created especially for the symposium, and lose yourself in its rhythmic exhilaration. As you touch, swipe, and groove to the beats, test your musical prowess and advance through the levels of melodic proficiency. Vibrato Vision offers gamers an immersive gameplay experience and a dynamic soundtrack, making it an unforgettable symposium for all music lovers." link="/vibrato-vision" leftbtn="CUSTOM ORDER" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" rightbtn="EXISTING INVENTORY" backgroundImg="vibrato.png" />
            </Content>
            <Content>
                <Section title="BOX BASH CHALLENGE" slogan="Idhu namma aatam machi" desc="Box cricket is a fast-paced and condensed version of traditional cricket,usually played in a confined space or on a small pitch. It is popular in urban areas were space is limited. Teams typically consist of 5 players, and the game emphasizes quick runs and tight bowling. The playing area is often surrounded by walls or boards, creating an enclosed BOX that adds an extra element of strategy to the game." link="/box-bash-league" leftbtn="CUSTOM ORDER" regLink="https://docs.google.com/forms/d/e/1FAIpQLScE79igEfEmwlCVL-BeYkvoDu1UBMCGjlaHhCMWEDDbPb-BMQ/viewform?usp=sf_link" rightbtn="EXISTING INVENTORY" backgroundImg="box.png"/>
            </Content>
            <Content>
                <Section title="SHADOW CONSPIRACY" slogan="In the game of shadows,the only rule is strike first" link="/shadow-conspiracy" desc="Gather 2-3 comrades and brave the shadow conspiracy, where cunning riddles and clues guard a shadow of suspicious cases. Outwit the shadow as you navigate escalating difficulty and elimination. Can you unravel the mysteries and claim the prize. The shadow conspiracy awaits…" regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="shadow.png"/>
            </Content>
            <Content>
                <Section title="MEME MIND SUMMIT" slogan="Who needs words when you have memes" link="/meme-mind-summit" desc="Think you’ve got the next viral meme? We dare you to prove it. Unleash your inner meme lord in this “ Meme Mind Summit”. The laugh challenge is on. Drop those tired punchlines and whip up some viral gold in our meme creation showdown." regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="CUSTOM ORDER" rightbtn="EXISTING INVENTORY" backgroundImg="meme.png"/>
            </Content>
            <Content>
                <Section title="FRAME BY FRAME" slogan="In the Web of Victory, Every connection counts!" link="/frame-by-frame" desc="Frame by frame sounds like a fun and challenging game where proverbs meet picture puzzles!  You'd have to decipher the proverb's meaning, analyze the image, and then merge them perfectly to reveal the whole picture and unlock the next proverb-picture combo. It's a brain-teasing blend of wisdom and visual wit, promising hours of puzzling fun for proverb lovers and puzzle enthusiasts alike." regLink="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" leftbtn="ORDER NOW" rightbtn="LEARN MORE" backgroundImg="frame.png"/>
            </Content>
            <Content>
             <FOOTER/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home