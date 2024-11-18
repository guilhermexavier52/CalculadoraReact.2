import { useState } from 'react';
import './Calculadora.css'

function CalculadoraSimples() {
    const [expressao, setExpressao] = useState('');
    const [resultado, setResultado] = useState('');

    const handleClick = (value) => {
        setExpressao((prevExpressao) => prevExpressao + value);
    };

    const calcularResultado = () => {
        try {
            
            if (!/^[\d+*/.-]+$/.test(expressao)) {
                throw new Error('Expressão inválida');
            }

            
            const resultadoCalculado = Function('"use strict"; return (' + expressao + ')')();
            setResultado(resultadoCalculado);
        } catch (error) {
            setResultado('Erro ao calcular');
        }
    };

    const limparTudo = () => {
        setExpressao('');
        setResultado('');
    };

    return (
        <div className="calculadora-container">
            <h2>Calculadora Simples</h2>
            <input
                type="text"
                value={expressao}
                readOnly
                
            />
            <div  className="teclado">

                {['1', '2', '3', '+'].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {['4', '5', '6', '-'].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {['7', '8', '9', '*'].map((val) => (
                    <button key={val} onClick={() => handleClick(val)}>{val}</button>
                ))}
                {['0', '.', '/', '='].map((val) => (
                    <button
                        key={val}
                        onClick={val === '=' ? calcularResultado : () => handleClick(val)}
                    >
                        {val}
                    </button>
                ))}
            </div>
            <button className='limpar' onClick={limparTudo} >Limpar</button>
            <div>
                <p>Resultado: {resultado}</p>
            </div>
        </div>
    );
}

export default CalculadoraSimples;
