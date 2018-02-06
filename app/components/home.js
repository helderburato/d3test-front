import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Steps from './Steps';

const Home = props =>
  <div>
    <Header />

    <div className="content">
      <h1>Cadastro</h1>

      <Steps active="4" />

      <div className="content__wrapper">
        <div className="block-form col">
          <h2>Pagamento</h2>
        </div>
        <div className="block-detail col">
          <h2>Detalhes da Compra</h2>
        </div>
      </div>
    </div>

    <Footer />
  </div>;

export default Home;
