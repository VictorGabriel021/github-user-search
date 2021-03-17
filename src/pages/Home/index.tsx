import React from  'react';
import './styles.scss';
import Button from '../../core/components/Button';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">
        Desafio do Capítulo 3, <br />
        Bootcamp DevSuperior
    </h1>
    <div className="home-content">
      <p className="home-text">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
      </p>
      <p className="home-text">
        Favor observar as instruções passadas no capítulo sobre a <br />
        elaboração deste projeto.
      </p>
      <p className="home-text">
        Este design foi adaptado a partir de Ant Design System for Figma, 
        de <br /> Mateusz Wierzbicki: <span className="home-email">antforfigma@gmail.com</span>
      </p>
    </div>
    <Link to="/search">
      <Button title='Começar' />
    </Link>
  </div>
);

export default Home;