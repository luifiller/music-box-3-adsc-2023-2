import React from "react";
import ItemMusica from "./components/ItemMusica";

function Musicas(nome, artista, genero, ano) {
  return (
    <>
      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>
      <div class="container">
        <div class="music-boxes">
          <ItemMusica
            nome="Como passar de semestre"
            artista="SprintBreakers"
            genero="Música da boa"
            ano="2023"
          />
          <ItemMusica
            nome="Estudei para a prova"
            artista="SprintBreakers"
            genero="Música da boa"
            ano="2023"
          />
          <ItemMusica
            nome="Passei de semestre"
            artista="SprintBreakers"
            genero="Música da boa"
            ano="2023"
          />
        </div>
      </div>
    </>
  );
}

export default Musicas;
