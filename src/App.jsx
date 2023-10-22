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
import Porcentagem from "./assets/svg/porcentagem.svg";

function App() {
  // Criado os estados para armazenar os valores dos operadores e do resultado, começando com uma string vazia.
  const [primeiroNumero, setPrimeiroNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");
  const [operacao, setOperacao] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  // Função handleNumberClick responsável por adicionar os números no display.
  const handleNumberClick = (numero) => {
    // Verifica se o operador é diferente de vazio.
    if (!operacao) {
      setPrimeiroNumero(primeiroNumero + numero); // Adiciona o número clicado no primeiro número.
    }
    // Se o operador não estiver vazio, adiciona o número no segundo número.
    else {
      setSegundoNumero(segundoNumero + numero); // Adiciona o número clicado no segundo número.
    }
  };

  // Função handleClickOperador responsável por adicionar os operadores no display.
  const handleClickOperador = (operador) => {
    // Verifica se o primeiro número e o segundo número estão preenchidos.
    if (primeiroNumero && segundoNumero) {
      calcularResultado(); // Se estiverem preenchidos, chama a função calcularResultado para calcular o resultado da operação.
    }
    // Verifica se o primeiro número está preenchido.
    if (primeiroNumero) {
      setOperacao(operador); // Se estiver preenchido, adiciona o operador no estado operacao.
    }
  };

  // Função calcularResultado responsável por calcular o resultado da operação.
  const calcularResultado = () => {
    // Converte os números de string para number.
    const primeiro = Number(primeiroNumero);
    const segundo = Number(segundoNumero);

    let resultadoCalculado; // Variável que armazena o resultado da operação.

    // Verifica qual operação foi selecionada e realiza o cálculo.
    if (operacao === "+") {
      resultadoCalculado = primeiro + segundo; // Soma os dois números.
    } else if (operacao === "-") {
      resultadoCalculado = primeiro - segundo; // Subtrai os dois números.
    } else if (operacao === "*") {
      resultadoCalculado = primeiro * segundo; // Multiplica os dois números.
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo; // Divide os dois números.
    } else if (operacao === "%") {
      resultadoCalculado = (primeiro * segundo) / 100; // Calcula a porcentagem dos dois números.
    }

    setResultado(resultadoCalculado.toString()); // Atualiza o estado resultado com o resultado da operação.
    setPrimeiroNumero(resultadoCalculado.toString()); // Atualiza o estado primeiroNumero com o resultado da operação no display.
    setSegundoNumero(""); // Limpa o estado segundoNumero.
    setOperacao(""); // Limpa o estado operacao.
  };

  // Função handleClickIgual responsável por calcular o resultado da operação.
  const handleClickIgual = () => {
    // Verifica se o primeiro número e o segundo número estão preenchidos/existem.
    if (primeiroNumero && segundoNumero) {
      calcularResultado(); // Se estiverem preenchidos, chama a função calcularResultado para calcular o resultado da operação.
    }
  };

  // Função handleClickLimparC responsável por limpar todos os campos.
  const handleClickLimparC = () => {
    // Limpa todos os estados.
    setPrimeiroNumero("");
    setSegundoNumero("");
    setOperacao("");
    setResultado("");
  };

  // Função handleClickLimparCE responsável por limpar o último campo digitado.
  const handleClickLimparCE = () => {
    // Verifica se o segundo número está preenchido.
    if (segundoNumero) {
      setSegundoNumero(segundoNumero.slice(0, -1)); // Se estiver preenchido, remove o último número digitado.
    }
    // Verifica se o operador está preenchido/existe.
    if (operacao) {
      setOperacao(""); // Remove o operador.
    }
    // Verifica se o primeiro número está preenchido/existe.
    if (primeiroNumero) {
      setPrimeiroNumero(primeiroNumero.slice(0, -1)); // Se estiver preenchido, remove o último número digitado.
    }
  };

  return (
    <C.Calculadora>
      <GlobalStyles />

      <C.ContainerCalculadora>
        <D.Display>
          <D.Operacao>
            <p>
              {/* Se o primeiro número for diferente de vazio, mostra o primeiro número, o operador e o segundo número. Se não, mostra 0. */}
              {primeiroNumero !== ""
                ? `${primeiroNumero} ${operacao} ${segundoNumero}`
                : "0"}
            </p>
          </D.Operacao>

          <D.Resultado>
            <span>
              <img src={IgualResultado} alt="Igual" />
            </span>
            {/* Se o resultado for diferente de vazio, mostra o resultado. Se não, mostra 0. */}
            <p>{resultado ? resultado : "0"}</p>
          </D.Resultado>
        </D.Display>

        <B.ButtonContainer>
          <Button
            background="#2d2a37"
            color="#975DFA"
            event={handleClickLimparCE}
          >
            CE
          </Button>
          <Button background="#2d2a37" event={handleClickLimparC}>
            C
          </Button>
          <Button background="#2d2a37" event={() => handleClickOperador("%")}>
            <img src={Porcentagem} alt="Porcentagem" />
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
