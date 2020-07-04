import React from "react";
import { Link } from "react-router-dom";

const Filling = () => (
  <div>
    <section id="header">
      <div>
        <Link to="/">&lt ATRAS</Link>
      </div>
      <div>
        <h1>T Í T U L O</h1>
      </div>
    </section>
    <section id="questions">
      <h1>Preguntas</h1>
    </section>
    <section id="footer">
      <button>¡ENVIAR!</button>
    </section>
  </div>
);

export default Filling;
