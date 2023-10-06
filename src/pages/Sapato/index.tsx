import styles from './Sapato.module.scss';
import Logo from 'assets/logo.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Sapato(){
    const [busca, setBusca] = useState(""); 
    return(
    <main>
        <nav className={styles.modelos}>
            <img src={Logo} alt="Logo do sapato" className={styles.img}/>
        </nav>


        <header className={styles.header}>
            <div className={styles.header__text}>
             Descontos de 40%
            </div>
        </header>      
        <section className={styles.sapato}>
            <h3 className={styles.sapato__titulo}>Sapatos na promoção!</h3>
            <Buscador busca={busca} setBusca={setBusca}/> 
            <div className={styles.sapato__filtros}>
            <Filtros/>
            </div>
        </section>
    </main>
    );
} 