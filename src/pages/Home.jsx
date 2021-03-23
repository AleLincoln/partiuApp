
import Navbar from '../components/Navbar';
import styled from 'styled-components'

const Main = styled.main`
    text-align:center;

    & h1{
      font-size:4em;
    }
    & p{
      font-size:1.5em;
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
      </Main>

      <Navbar />
    </div>
  );
}

export default Home;
