import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InputField from './InputField';

const Home = props =>
  <div>
    <Header />

    <div className="content">
      <h1>Cadastro</h1>

      <InputField name="cep" />
    </div>

    <Footer />
  </div>;

export default Home;
