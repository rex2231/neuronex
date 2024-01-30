import React from "react";

import { Wrapper } from "./modely.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const BOX = () =>{

    document.title = "BOX BASH LEAGUE";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="BOX BASH LEAGUE" 
                backgroundImg="model_y_1.jpeg" 
                arrow="true" 
                range='330'
                speed='3.5'
                top='155'
            />
            <Interior/>
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default BOX;