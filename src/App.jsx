// App.jsx
import React, { useState } from 'react';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import calculateIMC from './components/Calc/Calc';

const App = () => {
  const [result, setResult] = useState(null);
  const [formValues, setFormValues] = useState({ altura: '', peso: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleCalculate = ({ altura, peso }) => {
    // Verifica se altura e peso têm valores antes de calcular
    if (altura && peso) {
      const result = calculateIMC({ altura, peso });
      setResult(result);
      setErrorMessage(''); // Limpa a mensagem de erro se houver
    } else {
      setErrorMessage('Altura e peso são obrigatórios para calcular o IMC.');
    }
  };

  const handleNewConsultation = () => {
    setResult(null);
    setFormValues({ altura: '', peso: '' });
    setErrorMessage(''); // Limpa a mensagem de erro ao iniciar nova consulta
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <Form onCalculate={handleCalculate} formValues={formValues} setFormValues={setFormValues} />
      {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
      {result && <Result {...result} onNewConsultation={handleNewConsultation} onResetForm={handleNewConsultation} />}
    </div>
  );
};

export default App;
