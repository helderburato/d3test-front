import React, { Component } from 'react';
import InputField from '../InputField';
import Button from '../Button';

class FormPayment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="form form__horizontal" action="#">
        <div className="form__buttons__address form__row">
          <p className="form__legend">Endereço de cobrança</p>

          <Button className="button__success button">É o mesmo da entrega</Button>
          <Button>É diferente da entrega</Button>
        </div>

        <div className="form__row">
          <label htmlFor="cep">CEP</label>
          <InputField className="input-field input-field__cep" name="cep" id="cep" />
          <a className="form__link" href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm" target="_blank">
            Não sei meu CEP
          </a>
        </div>

        <div className="form__row">
          <p className="form__legend">Confirme seu endereço de cobrança</p>

          <div className="input__group">
            <label htmlFor="logradouro">Logradouro</label>
            <div className="input__group__after">
              <InputField className="input-field__street input-field" name="logradouro" id="logradouro" />
            </div>
          </div>
          <div className="input__group">
            <label htmlFor="numero">Número</label>
            <div className="input__group__after">
              <InputField name="numero" id="numero" />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default FormPayment;