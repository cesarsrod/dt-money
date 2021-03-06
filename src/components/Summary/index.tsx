import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas"></img>
        </header>

        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="entradas"></img>
        </header>

        <strong>- R$ 500</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas"></img>
        </header>

        <strong>R$ 500</strong>
      </div>
    </Container>
  );
}
