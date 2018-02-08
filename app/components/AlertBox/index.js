import React, { Component } from 'react';

class AlertBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideAlertBox: false
    };
  }

  handleClick(event) {
    this.setState({
      hideAlertBox: event.target.value
    });
  }

  render() {
    let classAlertBox = (this.state.hideAlertBox ? 'alert-box__hidden alert-box' : 'alert-box');

    return(
      <div className={classAlertBox}>
        <div className="alert-box__wrapper content__wrapper wrapper">
          <button value={true} onClick={this.handleClick.bind(this)} type="button" className="alert-box__close"></button>

          <p className="alert-box__required">
            Preenchimento obrigatório
          </p>

          <h3 className="alert-box__title">Falha ao processar os dados do cartão.</h3>

          <p className="alert-box__message">
            Verifique se as informações do seu cartão de crédito estão corretas (Nome, Número, Data de Validade, Código de Segurança).
            Se o problema persistir você pode usar outro cartão de crédito ou escolher como forma de pagamento o boleto bancário. Ou 
            então, se preferir, entre em contato com o seu banco ou administradora de cartão de crédito e tente realizar a compra
            novamente.
          </p>
        </div>
      </div>
    )
  }
}

export default AlertBox;