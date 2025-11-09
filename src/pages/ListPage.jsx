import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useState } from "react";
import { marceloGifts, danieleGifts } from "../data/shoppingList";

function ListPage() {
  const [description, setDescription] = useState(null);

  function changeList(subject) {
    setDescription(subject);
  }

  const currentList =
    description === "Marcelo"
      ? marceloGifts
      : description === "Daniele"
      ? danieleGifts
      : [];

  return (
    <>
      <p>PÁGINA DE LISTA DE COMPRAS</p>
      <Link to="/">voltar</Link>

      <menu>
        <Button
          aoClicar={() => changeList("Marcelo")}
          isActive={description === "Marcelo"}
        >
          Marcelo
        </Button>

        <Button
          aoClicar={() => changeList("Daniele")}
          isActive={description === "Daniele"}
        >
          Daniele
        </Button>
      </menu>

      {description && (
        <div>
          <h2>Lista de {description}</h2>

          {currentList.length > 0 ? (
            <ul>
              {currentList.map((gift, index) => (
                <li key={index}>
                  <strong>{gift.person}:</strong> {gift.product} - {gift.value}€
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem prendas atribuídas</p>
          )}
        </div>
      )}
    </>
  );
}

export default ListPage;
