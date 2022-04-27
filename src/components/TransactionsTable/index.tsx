import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdraw">- R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
