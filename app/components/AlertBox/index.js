import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlertBox extends Component {
  constructor(props, store) {
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

  cardFieldErrors(errors) {
    let cardFieldErrors = '';

    if (errors.card_name) {
      cardFieldErrors += 'Nome, ';
    }
    if (errors.card_number) {
      cardFieldErrors += 'Número, ';
    }
    if (errors.card_month || errors.card_year) {
      cardFieldErrors += 'Data de Validade, ';
    }
    if (errors.cvc) {
      cardFieldErrors += 'Código de Segurança';
    }

    if (this.checkHasSpaceInWord(cardFieldErrors)) {
      cardFieldErrors = cardFieldErrors.slice(0, -1);
    }

    return cardFieldErrors;
  }

  fieldErrors(errors) {
    let fieldErrors = '';

    if (errors.zipcode) {
      fieldErrors += 'CEP, ';
    }
    if (errors.street) {
      fieldErrors += 'Logradouro, ';
    }
    if (errors.number) {
      fieldErrors += 'Número, ';
    }
    if (errors.state) {
      fieldErrors += 'Estado, ';
    }
    if (errors.city) {
      fieldErrors += 'Cidade';
    }

    if (this.checkHasSpaceInWord(fieldErrors)) {
      fieldErrors = fieldErrors.slice(0, -1);
    }

    return fieldErrors;
  }

  checkHasSpaceInWord(word) {
    return word.charAt(word.length-1 ) == ", ";
  }

  render() {
    let classAlertBox = 'alert-box__hidden alert-box';
    if (!this.props.payment.valid && this.props.payment.valid !== undefined) {
      classAlertBox = 'alert-box';
    }

    if (this.state.hideAlertBox) {
      classAlertBox = 'alert-box__hidden alert-box';
    }

    let cardErrors = '';
    let fieldErrors = '';
    if (JSON.stringify(this.props.payment.errors) !== '{}') {
      cardErrors += this.cardFieldErrors(this.props.payment.errors);
      fieldErrors += this.fieldErrors(this.props.payment.errors);
    }

    let classTitleAlert = 'alert-box__title';
    let showMessageCard = 'alert-box__message__card__hidden';
    if (cardErrors !== '') {
      classTitleAlert = 'alert-box__title alert-box__title__hidden';
      showMessageCard = 'alert-box__message__card';
    }

    return(
      <div className={classAlertBox}>
        <div className="alert-box__wrapper content__wrapper wrapper">
          <button value={true} onClick={this.handleClick.bind(this)} type="button" className="alert-box__close"></button>

          <p className="alert-box__required">
            Preenchimento obrigatório
          </p>
          
          <h3 className={classTitleAlert}>Falha ao processar os dados do cartão.</h3>

          <p className="alert-box__message">
            <span className={(fieldErrors.length > 0 ? 'alert-box__fields' : 'alert-box__fields__hidden alert-box__fields')}>
              Os campos ({fieldErrors}) são obrigatórios, verifique se eles estão preenchidos.
            </span>
            Verifique se as informações do seu cartão de crédito estão corretas ({cardErrors}).
            <span className={showMessageCard}>
              Se o problema persistir você pode usar outro cartão de crédito ou escolher como forma de pagamento o boleto bancário. Ou 
              então, se preferir, entre em contato com o seu banco ou administradora de cartão de crédito e tente realizar a compra
              novamente.
            </span>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payment: state.payment
  }
};

export default connect(mapStateToProps)(AlertBox);