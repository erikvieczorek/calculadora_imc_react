const calculateIMC = ({ altura, peso }) => {
    const imc = peso / (altura * altura);
    let classification;

    if (imc < 18.5) {
        classification = 'Abaixo do Peso';
    } else if (imc < 24.9) {
        classification = 'Peso Normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else if (imc < 34.9) {
        classification = 'Obesidade Grau 1';
    } else if (imc < 39.9) {
        classification = 'Obesidade Grau 2';
    } else {
        classification = 'Obesidade Grau 3';
    }

    return { imc, classification };
};

export default calculateIMC;
