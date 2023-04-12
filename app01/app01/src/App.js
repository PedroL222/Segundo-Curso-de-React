import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Hearder';
import Main from './components/Corpo/Main';

function App() {

  const [num,setNum] = useState(0);
  

  const projetos = [{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}, {nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}  ];

  return (
    <section>
      <Header/>
      <Main projetos={projetos} num={num} setNum={setNum}/>
      
    </section>
  )
}

export default App;
