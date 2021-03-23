import styled from 'styled-components'
import { IoHome, IoMenu} from 'react-icons/io5'
import {BiPlusMedical} from 'react-icons/bi'
import db from '../../Data/inicial_db.json'

import { useState } from 'react'
import {Link} from 'react-router-dom'







const Nav = styled.nav`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background-color:#000;
    padding:1.5em;
    border-top: 3px solid #fff;

    & div{
        display:flex;
        align-items:center;
        justify-content:space-evenly;

        & .navLinks{
            font-size:1.5em;
            color:#fff;
            cursor:pointer;
        }
    }

`

const CategoriesDiv = styled.div`
    position:fixed;
    top:0;

    height:8em;
    width:10em;
    padding:1.5em;

    display:flex;
    flex-direction:column;

    background-color:#fedd00;
    border:solid 2px #000;
    
    
    font-family: Helvetica, sans-serif;
    font-size:1.5em;
    font-weight:600;
    line-height:1.5em;

    z-index:99;


    & a{
        text-decoration:none;
        color:#000;
    }
`



export default function Navbar() {

    const [showMenu, SetShowMenu] = useState('-15em')

    


    function toggleMenu(){
        SetShowMenu(
            showMenu === '-15em'? '0':'-15em'
        )
    }

    
function CategoriesMenu(){


    
    return <CategoriesDiv style={{marginLeft:showMenu}}>

            {db.categories.map((categorie) => <Link to={`/map?categorie=${categorie.id}`} onClick={toggleMenu}>{categorie.title}</Link>)}


    
        </CategoriesDiv>
}

    


    return  <>

    <CategoriesMenu />
    
    <Nav>
            <div>

            <Link to="/"><div className='navLinks'><IoHome /></div></Link>
            <a onClick={toggleMenu}><div className='navLinks'><IoMenu /></div></a>
            <Link to="/newplace"><div className='navLinks'><BiPlusMedical /></div></Link>

            </div>
    </Nav>
    
    
    </>
    
    
}