import styles from './CardProjetos.module.css';

function CardProjetos({projetos}){

    return(
        <div className={styles.cardProjetos_container}>
            <p>Nome: {projetos.nome}</p>
            <p>Data: {projetos.data}</p>
            <p>Descrição: {projetos.desc}</p>
        </div>
    )
}

export default CardProjetos