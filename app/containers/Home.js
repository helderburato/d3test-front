import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Steps from '../components/Steps';
import FormPayment from '../components/FormPayment';
import PurchaseDetail from '../components/PurchaseDetail';
import AlertBox from '../components/AlertBox';

const Home = props =>
  <div>
    <Header />

    <div className="content">
      <h1>Cadastro</h1>

      <Steps active="4" />

      <AlertBox />

      <div className="content__wrapper wrapper">
        <div className="block-form col">
          <h2 className="title__payment">Pagamento</h2>

          <FormPayment />
        </div>
        <div className="block-detail col">
          <h2>Detalhes da Compra</h2>

          <PurchaseDetail />
        </div>
      </div>
    </div>

    <Footer />
  </div>;

export default Home;
