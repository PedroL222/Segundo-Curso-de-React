import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Hearder';
import Main from './components/Corpo/Main';

function App() {

  // Projeto da pasta components_exercicio1

  // const [categoria,setCategoria] = useState("");

  // const carros = [ 
  //   {categoria: "Esporte", preco: 110000,modelo: "Golf"},
  //   {categoria: "Esporte", preco: 120000,modelo: "Camaro"},
  //   {categoria: "VUV", preco: 83000,modelo: "HRV"},
  //   {categoria: "SUV", preco: 200000,modelo: "T-Cross"},
  //   {categoria: "Utilitário", preco: 90000,modelo: "Hillux"},
  // ]

  // const linhas=(cat)=>{
  //   const li=[];
  //   carros.forEach((carro)=>{
  //     if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat == ''){
  //       li.push(
  //         <tr>
  //           <td>{carro.categoria}</td>
  //           <td>{carro.preco}</td>
  //           <td>{carro.modelo}</td>
  //         </tr>
  //       );
  //     }
  //   })
  //   return li
  // }

  // const TabelaCarros=(cat)=>{
  //    return(
  //     <table border={"1"} style={{borderCollapse: "collapse"}}>
  //       <thead>
  //         <tr>
  //           <th>Categoria</th><th>Preco</th><th>Modelo</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {linhas(cat)}
  //       </tbody>
  //     </table>
  //    )
  // }

  // const pesquisaCategoria=(cat,scat)=>(
  //   <div>
  //     <label htmlFor="">Digite uma categoria</label>
  //     <input type="text" value={cat} onChange={(e)=>setCategoria(e.target.value)} />
  //   </div>
  // )


  

  // return(
  //   <>
  //     {pesquisaCategoria(categoria)}
  //     {TabelaCarros(categoria)}
  //   </>
  // )

  // Projeto da pasta components_exercicio1

  // Projeto da pasta components
  
  localStorage.setItem("nome","pedro");
  localStorage.getItem("nome");

  const [num,setNum] = useState(0);
  

  const projetos = [{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}, {nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"},{nome:"Jogo da velha", data:2023, desc:"um jogo da velha"}  ];

  return (
    <section>
      <Header/>
      <Main projetos={projetos} num={num} setNum={setNum}/>
      
    </section>
  )

  // Projeto da pasta components

}

export default App;
