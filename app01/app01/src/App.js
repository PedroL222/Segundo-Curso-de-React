import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Hearder';
import Main from './components/Corpo/Main';

function App() {

  const projetos = [{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}, {nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}  ];

  return (
    <section>
      <Header/>
      <Main projetos={projetos}/>
    </section>
  )
}

export default App;
