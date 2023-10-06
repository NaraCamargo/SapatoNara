import styles from './Sapato.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Sapato(){
    const [busca, setBusca] = useState(""); 
    return(
    <main>
        <nav className={styles.modelos}>
        </nav>

        <header className={styles.header}>
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