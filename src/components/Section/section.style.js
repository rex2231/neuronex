import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color:  #e9ebf3;

    img {
        margin-top: 15px;
        margin-bottom: 10px;
        height: 50px;
    }

    .bg-img {
        width: 100vw;
        height: 100vh;
    }

    .arrow {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        color: black;
        height: 72vh;
    }

    .buttons {
        margin-bottom: 60px;
    }

    @media screen and (max-width: 600px) {
        img {
            height: 40px;
            width: fit;
        }
    }
`;

export const ContentTop = styled.div`
    text-align: center;
    padding-top: 16vh;
    
    h1 {
        font-weight: 400;
        letter-spacing: 0.5px;
        font-size: 2.5rem;
        color: ;
        font-weight:bold
    }

    p {
        font-size: 0.9rem;
        padding: 5px;
        color: blue;
    }

    a {
        text-decoration: underline;
        text-underline-position: under;
        display: inline-block;
        color: white;
        transition: color 200ms ease-in;

        :hover {
            color: var(--teslaColor);
            text-decoration-thickness: 2px;
        }
    }
`;

export const ContentMid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
        padding: 12px 20px;
        width: 260px;
        height: 35px;
        border-radius: 20px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.6px;
        opacity: 0.9;

        margin: 10px;

        :hover {
            cursor: pointer;
        }
    }

    .left button {
        background-color: rgba(23, 26, 32, 1);
        color: white;
    }

    

    @media screen and (max-width: 600px) {
        flex-direction: column;
        .left, .right {
            display: flex;
            justify-content: center;
        }
        .left button {
            margin-right: 0;
            margin-bottom: 15px;
        }
        button {
            width: 90%;
            padding: 5px 10px;
        }
    }

    .imageElement {
        width: 40vw;
        height: 60vh;
    }

    @media screen and (min-width: 650px){
        .imageElement {
            width:30vw;
            height:60vh;
        }
        .description-element{
            align-self: center;
            width: 700px;
            margin-left: 60px;
            font-weight: bold;
            font-family: sans;
            font-size: 20px;
            padding: 100px;
            padding-right: 0;
        }
        .image-container{
            max-width: 40vw;
        }
        .image-element {
            animation: none;
            display: flex;
        }
        .flex-container {
            display: flex;
            justify-content: space-evenly;
            min-width: 100vw;
        }
        

        .text-element{
            text-align: justify;
        }
    
    }
    
    @media screen and (max-width: 750px){
        .imageElement {
            width:100vw;
            height:400px;
        }
        .right button {
            width: 90vw;
        }
        .description-element{
            display: none;
            align-self: center;
        }
        .image-element {
            animation: none;
        }
    
    }
    
`;

export const Content = styled.div`
    .Info-bar {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        h2 {
            color: white;
            font-weight: 400;
            font-size: 1.8rem;
            letter-spacing: 0.6px;
        }

        p {
            padding-top: 8px;
            color: white;
            font-weight: 200;
            font-size: 0.8rem;
            letter-spacing: 0.3px;
        }

        button {
            outline: none;
            border: white solid 4px;
            border-radius: 20px;
            padding: 8px 55px;
            background-color: transparent;
            color: white;
            transition: all 300ms ease-in;
            cursor: pointer;

            :hover {
                background-color: white;
                color: #141414;
            }
        }

        @media screen and (max-width: 600px) {
            .hp {
                display: none;
            }

            .order_btn {
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top: 20px;
            }

            button {
                width: 90%;
                padding: 10px auto;
            }

            .Specs {
                margin: 10px 12px;
            }

            h2 {
                font-size: 1.5rem;
            }

            p {
                font-size: 0.7rem;
            }
        }
    }

    .Specs {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 40px;
    }
`;
