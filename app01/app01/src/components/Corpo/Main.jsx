import CardProjetos from './CardProjetos';
import styles from './Main.module.css';
import Form from '../form/Form';


function Main({projetos,num,setNum}){

    function mostrarDadosPessoais(e){
        e.preventDafault();
        
    }

    return(
        <main className={styles.main_container}>
            <h1>Seja bem vindo ao meu site em React</h1>
            <h2>Curso de React do canal CBF Cursos</h2>
            <h2>Esses são alguns dos meus projetos com html, css e javascript</h2>
            <section>
                {projetos.length > 0 &&
                     projetos.map((projeto, index)=>(
                        <CardProjetos key={index} projetos={projeto} />
                    ))
                }
            </section>
            <h1>Valor do Num vindo do useState</h1>
            <button onClick={()=>{setNum(num + 1)}}>Aumentar valor</button>
            <button onClick={()=>{setNum(num - 1)}}>Diminuir valor</button>

            <p>Valor:{num}</p>

            <Form onSubmit={mostrarDadosPessoais} />
           
        </main>
    )
}

export default Main