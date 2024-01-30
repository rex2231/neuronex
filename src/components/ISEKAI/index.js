import React from "react";

import { Wrapper } from "./modely.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const ISEKAI = () =>{

    document.title = "ISEKAI-BAKA'S";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="ISEKAI-BAKA'S" 
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

export default ISEKAI;