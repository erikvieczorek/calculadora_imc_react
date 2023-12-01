import React from 'react';
import styles from './Result.module.css';

const Result = ({ imc, classification, onNewConsultation, onResetForm }) => {
    let message;

    const handleNewConsultationClick = () => {
        onNewConsultation();
        onResetForm(); // Limpa os campos do formulário
    };

    switch (classification) {
        case 'Abaixo do Peso':
            message = 'Você está abaixo do peso ideal. Consulte um médico para avaliação.';
            break;
        case 'Peso Normal':
            message = 'Parabéns! Seu peso está dentro da faixa considerada normal.';
            break;
        case 'Sobrepeso':
            message = 'Você está com sobrepeso. Considere adotar hábitos mais saudáveis.';
            break;
        case 'Obesidade Grau 1':
            message = 'Você está com obesidade grau 1. É importante buscar orientação médica.';
            break;
        case 'Obesidade Grau 2':
            message = 'Você está com obesidade grau 2. Consulte um médico para avaliação.';
            break;
        case 'Obesidade Grau 3':
            message = 'Atenção! Você está com obesidade grau 3. Procure ajuda médica imediatamente.';
            break;
        default:
            message = 'Resultados indisponíveis.';
    }

    return (
        <div className={styles.resultContainer}>
            <h2>Resultado:</h2>
            <p className={styles.resultValue}>IMC: {imc.toFixed(2)}</p>
            <div className={styles.resultMessage}>
                <p>Classificação: {classification}</p> <br/>
                <p>{message}</p>
            </div>
            <button onClick={handleNewConsultationClick} className={styles.resultButton}>
                Nova Consulta
            </button>
        </div>
    );
};

export default Result;
