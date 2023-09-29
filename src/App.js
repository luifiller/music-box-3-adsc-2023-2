import React from "react";
import api from "./api";
import { useState } from "react";

function App() {
  const [musicas, setMusicas] = useState([]);

  function listar() {
    const objeto = [
      {
        nome: "In the Ghetto",
        artista: "Eloise Corwin",
        genero: "Electronic",
        ano: 67779,
        imagem: "https://loremflickr.com/640/480/sports",
        id: "1",
      },
      {
        nome: "Mrs Robinson",
        artista: "Fredrick Harris",
        genero: "Blues",
        ano: 43083,
        imagem: "https://loremflickr.com/640/480/people",
        id: "2",
      },
      {
        nome: "Stranger On the Shore",
        artista: "Sandy Schuster",
        genero: "Pop",
        ano: 64388,
        imagem: "https://loremflickr.com/640/480/animals",
        id: "3",
      },
      {
        nome: "Grenade",
        artista: "Beverly Powlowski",
        genero: "Metal",
        ano: 61366,
        imagem: "https://loremflickr.com/640/480/nature",
        id: "4",
      },
    ];

    console.log(api.get());

    api
      .get()
      .then((res) => {
        console.log(res);
        console.log("Músicas => ", res.data);

        if (res.status === 200) {
          console.warn("AAIII ZÉ DA MANGA!!");
        }

        setMusicas(res.data);
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      })
      .finally(() => {
        console.table(objeto);
      });
  }

  return (
    <>
      <h1>Hello, Alt!</h1>

      <button onClick={listar}>Listar</button>
      {musicas.map((musica) => (
        <div key={musica.id}>
          <h1>{musica.nome}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
