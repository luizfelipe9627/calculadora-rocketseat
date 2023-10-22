import React from "react";

import { GlobalStyles } from "./components/GlobalStyles";
import Button from "./components/Button";

import * as B from "./components/ButtonStyled";
import * as D from "./components/DisplayStyled";
import * as C from "./components/CalculadoraStyled";

import Divisor from "./assets/svg/divisor.svg";
import Igual from "./assets/svg/igual.svg";
import IgualResultado from "./assets/svg/igual-resultado.svg";
import Menos from "./assets/svg/menos.svg";
import Adicao from "./assets/svg/adicao.svg";
import Multiplicacao from "./assets/svg/multiplicacao.svg";

function App() {
  const [primeiroOperando, setPrimeiroOperando] = React.useState("");
  const [segundoOperando, setSegundoOperando] = React.useState("");
  const [operacao, setOperacao] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  // Função handleNumberClick responsável por adicionar os números no display.
  const handleNumberClick = (numero) => {
    if (!operacao) {
      setPrimeiroOperando(primeiroOperando + numero);
    } else {
      setSegundoOperando(segundoOperando + numero);
    }
  };

  // Função handleClickOperador responsável por adicionar os operadores no display.
  const handleClickOperador = (operador) => {
    if (primeiroOperando && segundoOperando) {
      calcularResultado();
    }
    setOperacao(operador);
  };

  // Função calcularResultado responsável por calcular o resultado da operação.
  const calcularResultado = () => {
    const primeiro = parseFloat(primeiroOperando);
    const segundo = parseFloat(segundoOperando);

    let resultadoCalculado;

    if (operacao === "+") {
      resultadoCalculado = primeiro + segundo;
    } else if (operacao === "-") {
      resultadoCalculado = primeiro - segundo;
    } else if (operacao === "*") {
      resultadoCalculado = primeiro * segundo;
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo;
    }

    setResultado(resultadoCalculado.toString());
    setPrimeiroOperando(resultadoCalculado.toString());
    setSegundoOperando("");
    setOperacao("");
  };

  // Função handleClickIgual responsável por calcular o resultado da operação.
  const handleClickIgual = () => {
    if (primeiroOperando && segundoOperando) {
      calcularResultado();
    }
  };

  // Função handleClickLimparC responsável por limpar todos os campos.
  const handleClickLimparC = () => {
    setPrimeiroOperando("");
    setSegundoOperando("");
    setOperacao("");
    setResultado("");
  };

  // Função handleClickLimparCE responsável por limpar o último campo digitado.
  const handleClickLimparCE = () => {
    if (segundoOperando) {
      setSegundoOperando(segundoOperando.slice(0, -1));
    } else if (operacao) {
      setOperacao("");
    } else if (primeiroOperando) {
      setPrimeiroOperando(primeiroOperando.slice(0, -1));
    }
  };

  return (
    <C.Calculadora>
      <GlobalStyles />

      <C.ContainerCalculadora>
        <D.Display>
          <D.Operacao>
            <p>
              {primeiroOperando !== ""
                ? `${primeiroOperando} ${operacao} ${segundoOperando}`
                : "0"}
            </p>
          </D.Operacao>

          <D.Resultado>
            <span>
              <img src={IgualResultado} alt="Igual" />
            </span>
            <p>{resultado ? resultado : "0"}</p>
          </D.Resultado>
        </D.Display>

        <B.ButtonContainer>
          <Button
            background="#2d2a37"
            color="#975DFA"
            gridColumn="1 / 3"
            event={handleClickLimparCE}
          >
            CE
          </Button>
          <Button background="#2d2a37" event={handleClickLimparC}>
            C
          </Button>
          <Button background="#462878" event={() => handleClickOperador("/")}>
            <img src={Divisor} alt="Divisão" />
          </Button>
        </B.ButtonContainer>

        <B.ButtonContainer>
          <Button background="#2d2a37" event={() => handleNumberClick("7")}>
            7
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("8")}>
            8
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("9")}>
            9
          </Button>
          <Button background="#462878" event={() => handleClickOperador("*")}>
            <img src={Multiplicacao} alt="Multiplicação" />
          </Button>
        </B.ButtonContainer>

        <B.ButtonContainer>
          <Button background="#2d2a37" event={() => handleNumberClick("4")}>
            4
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("5")}>
            5
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("6")}>
            6
          </Button>
          <Button background="#462878" event={() => handleClickOperador("-")}>
            <img src={Menos} alt="Subtração" />
          </Button>
        </B.ButtonContainer>

        <B.ButtonContainer>
          <Button background="#2d2a37" event={() => handleNumberClick("1")}>
            1
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("2")}>
            2
          </Button>
          <Button background="#2d2a37" event={() => handleNumberClick("3")}>
            3
          </Button>
          <Button background="#462878" event={() => handleClickOperador("+")}>
            <img src={Adicao} alt="Adição" />
          </Button>
        </B.ButtonContainer>

        <B.ButtonContainer>
          <Button background="#2d2a37" event={() => handleNumberClick("0")}>
            0
          </Button>
          <Button
            background="#2d2a37"
            fontSize="36px"
            event={() => handleNumberClick(".")}
          >
            .
          </Button>
          <Button
            background="#7F45E2"
            gridColumn="3 / 5"
            event={handleClickIgual}
          >
            <img src={Igual} alt="Igual" />
          </Button>
        </B.ButtonContainer>
      </C.ContainerCalculadora>
    </C.Calculadora>
  );
}

export default App;
