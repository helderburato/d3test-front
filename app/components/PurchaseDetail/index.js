import React from 'react';

const PurchaseDetail = props =>
  <div className="purchase-detail">
    <h3>
      <strong>R$ 660,00</strong> em até 5x
    </h3>

    <p className="purchase-detail__text">Você terá direito a:</p>

    <ul className="purchase-detail__list">
      <li>
        <span className="highlighted">01</span> tênis especial para corrida
      </li>
      <li>
        <span className="highlighted">05</span> peças de vestuário para você correr melhor
      </li>
      <li>
        <span className="highlighted">05</span> acessórios para ajudar no seu desempenho
      </li>
      <li>
        Acompanhamento personalizado de profissionais de treino
      </li>
      <li>
        Apoio com dicas de nutrição
      </li>
      <li>
        Apoio exclusivo ao conteúdo do app <span className="highlight">EXP_</span>
      </li>
    </ul>
  </div>;

export default PurchaseDetail;