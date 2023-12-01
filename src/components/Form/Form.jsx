import React from 'react';
import { useMask } from '@react-input/mask';
import styles from './Form.module.css';

const Form = ({ onCalculate, formValues, setFormValues }) => {
    const { altura, peso } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate({ altura, peso });
    };

const alturaInputRef = useMask({ mask: '_.__', replacement: { _: /\d/ } });
const pesoInputRef = useMask({mask: '___', replacement: {_: /\d/} });

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.formLabel}>
                Altura (m):
                <input
                    type="text"
                    placeholder="Ex: 1.75"
                    value={altura}
                    onChange={(e) => setFormValues({ ...formValues, altura: e.target.value })}
                    className={styles.formInput}
                    ref={alturaInputRef}
                />
            </label>
            <label className={styles.formLabel}>
                Peso (kg):
                <input
                    type="text"
                    placeholder="Ex: 75"
                    value={peso}
                    onChange={(e) => setFormValues({ ...formValues, peso: e.target.value })}
                    className={styles.formInput}
                    ref={pesoInputRef}
                />
            </label>
            <button type="submit" className={styles.formButton}>
                Calcular
            </button>
        </form>
    );
};

export default Form;
