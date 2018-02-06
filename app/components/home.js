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
    </div>

    <Footer />
  </div>;

export default Home;
