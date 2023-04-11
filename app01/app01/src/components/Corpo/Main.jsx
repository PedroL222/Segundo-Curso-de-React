import CardProjetos from './CardProjetos';
import Hora from './Hora';
import styles from './Main.module.css';


function Main({projetos}){

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
            {setInterval(()=>(
                <Hora />
            ),1000)}
        </main>
    )
}

export default Main