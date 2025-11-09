import Button from "../components/Button/Button";
import { useState } from "react";
import { giftList } from "../data/giftList";
import { Link } from "react-router-dom";

function GiftList() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const pessoaSelecionada = giftList.find(
    (pessoa) => pessoa.nome === selectedPerson
  );

  const handlePerson = (person) => {
    if (selectedPerson === person) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
    }
  };

  return (
    <div className="gift-container">
      <h1> Lista das Prendas de Natal</h1>

      <menu>
        <Button
          aoClicar={() => handlePerson("Marcelo")}
          isActive={selectedPerson === "Marcelo"}
        >
          Marcelo
        </Button>

        <Button
          aoClicar={() => handlePerson("Daniele")}
          isActive={selectedPerson === "Daniele"}
        >
          Daniele
        </Button>
      </menu>

      {!pessoaSelecionada ? (
        <div className="message">
          <p> Selecione uma pessoa para ver a lmista de prendas </p>
        </div>
      ) : (
        <div className="gift-card">
          <h2>{pessoaSelecionada.nome} pensa em comprar: </h2>
          {pessoaSelecionada.prendas && pessoaSelecionada.prendas.length > 0 ? (
            <ul>
              {pessoaSelecionada.prendas.map((prenda, index) => (
                <li key={index}>
                  <strong>{prenda.pessoa}:</strong> {prenda.produto} -{" "}
                  {prenda.valor}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-gifts">Sem prendas atribuídas </p>
          )}
        </div>
      )}
      <div className="btn-voltar">
        <Link to="/">
          <Button>Menu Principal</Button>
        </Link>
      </div>
    </div>
  );
}

export default GiftList;
