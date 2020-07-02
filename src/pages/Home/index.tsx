import React from 'react';
import { FiCamera, FiFeather, FiCheckCircle } from 'react-icons/fi'
import { Link } from "react-router-dom";
import './styles.css';

import logo from '../../assets/images/darth-vader.svg'


const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} className="logo" alt="ProjetoFramework" />
        </header>
        <main>
          <h1>Desafio Técnico Padawans</h1>
          <p>Resolução do teste proposto no Programa de Estágio 2020 framework padawans. <br /> Candidato: Rodrigo Silva de Souza</p>
          <Link to="/albuns">
            <span>
              <FiCamera />
            </span>
            <strong>Acessar Album</strong>
          </Link>
          <Link to="/posts">
            <span>
              <FiFeather />
            </span>
            <strong>Acessar Postagens</strong>
          </Link>
          <Link to="/todos">
            <span>
              <FiCheckCircle />
            </span>
            <strong>Acessar TO-DOs</strong>
          </Link>
        </main>
      </div>
    </div>

  )
}

export default Home