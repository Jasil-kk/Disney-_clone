import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();
  return (
    <Nav>
      <Logo src="./Disney Plus/images/logo.svg"/>

      {
        
      }
      <NavMenu>
        <a>
          <img src="/Disney Plus/images/home-icon.svg" alt='home icon'/>
          <span>HOME</span>
        </a>

        <a>
          <img src="/Disney Plus/images/search-icon.svg" alt='home icon'/>
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/Disney Plus/images/watchlist-icon.svg" alt='home icon'/>
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/Disney Plus/images/original-icon.svg" alt='home icon'/>
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src="/Disney Plus/images/movie-icon.svg" alt='home icon'/>
          <span>MOVIES</span>
        </a>

        <a>
          <img src="/Disney Plus/images/series-icon.svg" alt='home icon'/>
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg onClick={()=> navigate('/login')}  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
  `
const NavMenu = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
     display: flex;
     align-items: center;
     padding: 0 12px;
     cursor: pointer;

     img {
        height: 20px;
     }

     span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform: scaleX(0)
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
         }
     }

     &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
     }

    
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`