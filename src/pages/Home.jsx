
import Navbar from '../components/Navbar';
import styled, {keyframes} from 'styled-components'
import homeGif from '../assets/img/homeGif.gif'

import {fadeIn} from 'react-animations'


const fadeInAnimation = keyframes`${fadeIn}`

const Main = styled.main`
    text-align:center;

    animation: 1s ${fadeInAnimation};

    color:#fff;

    & h1{
      font-size:4sem;
    }
    & p{
      font-size:1.5em;
    }

    & img{
      height:50vh;
      border-radius:3px;
    }

`


function Home() {
  return (
    <div className="App">
      <Main>
        <h1>
          Bem vindo ao #PARTIU
        </h1>
        <p>
          Aqui você encontra lugares para se sentir em casa
        </p>

        <img src={homeGif} alt="Garoto e cachorro dançando"/>

      </Main>

      <Navbar />
    </div>
  );
}

export default Home;
