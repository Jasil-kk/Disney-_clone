import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

  return (<>
  
    <Container>
        <CTA>
            <CTALogoOne src="/Disney Plus/images/cta-logo-one.svg"/>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                Get Premier to Raya and the Last Dragon for an additional fee with a Disney+ subscription, As of 03/26/22, the price of Disney+ and The Disney Bundle will Lorem ipsum dolor sit amet increased by $1.
            </Description>
            <CTALogoTwo src="/Disney Plus/images/cta-logo-two.png"/>

            <Button onClick={()=> navigate('/disney')}>Admin-section</Button>
        </CTA>
    </Container>
    </>
    
  )
}

export default Login

const Button = styled.button`
    font-size: 20px;
    background-color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-family: 'Bungee Spice', cursive;
    margin-top: 30px;
    cursor: pointer;
`

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;


    &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/Disney Plus/images/login-background.jpg");
        z-index: -1;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.3px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
 width: 90%;
`