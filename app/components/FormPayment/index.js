import React, { Component } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import SelectBox from '../SelectBox';
import { states, cities, months, years, plots } from '../../constants/formOptions';

class FormPayment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="form__horizontal form" action="#">
        <div className="form__buttons__address form__row">
          <p className="form__legend">Endereço de cobrança</p>

          <Button className="button__success button">É o mesmo da entrega</Button>
          <Button>É diferente da entrega</Button>
        </div>

        <div className="form__row">
          <div className="input__group">
            <label htmlFor="cep">CEP</label>
            <div className="input__group__field input__group__field__cep">
              <InputField
                className="input-field input-field__cep"
                type="tel"
                name="cep" 
                id="cep"
              />
            </div>
            <a className="form__link" href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm" target="_blank">
              Não sei meu CEP
            </a>
          </div>
        </div>

        <div className="form__row">
          <p className="form__legend">Confirme seu endereço de cobrança</p>

          <div className="input__group input__group__break">
            <label htmlFor="logradouro">Logradouro</label>
            <div className="input__group__field input__group__field__street input__group__mr25">
              <InputField 
                className="input-field__street input-field" 
                name="logradouro" 
                id="logradouro" 
              />
            </div>

            <label htmlFor="numero">Número</label>
            <div className="input__group__field input__group__field__number">
              <InputField
                type="tel"
                name="numero" 
                id="numero" 
              />
            </div>
          </div>

          <div className="input__group input__group__break">
            <label htmlFor="complemento">Complemento</label>
            <div className="input__group__field input__group__field__compl input__group__mr25">
              <InputField 
                className="input-field__street input-field" 
                name="complemento" 
                id="complemento" 
              />
            </div>

            <label htmlFor="estado">UF</label>
            <div className="input__group__field input__group__field__state input__group__select">
              <SelectBox 
                name="estado" 
                options={states}
              />
            </div>
          </div>

          <div className="input__group input__group__break">
            <label htmlFor="cidade">Cidade</label>
            <div className="input__group__field input__group__field__city input__group__select">
              <SelectBox 
                name="cidade" 
                options={ cities }
              />
            </div>
          </div>
        </div>

        <div className="form__row">
          <p className="form__legend">Dados do cartão</p>

          <div className="input__group input__group__break">
            <label htmlFor="card_number">Número</label>
            <div className="input__group__field input__group__field__card_number input__group__mr25">
              <InputField 
                type="tel"
                name="card_number" 
                id="card_number"
              />
            </div>

            <label htmlFor="card_name">Nome Completo</label>
            <div className="input__group__field input__group__field__card_name">
              <InputField
                name="card_name"
                id="card_name"
              />
            </div>
          </div>

          <div className="input__group input__group__break">
            <label htmlFor="card_date_month">Validade</label>
            <div className="input__group__field input__group__field__dates input__group__mr25">
              <div className="input__group__field input__group__field__month input__group__select">
                <SelectBox 
                  name="card_date_month"
                  options={ months }
                />
              </div>
              <div className="input__group__field input__group__field__year input__group__select">
                <SelectBox 
                  name="card_valid_year" 
                  options={ years }
                />
              </div>
            </div>

            <label htmlFor="card_code">Código de segurança</label>
            <div className="input__group__field">
              <InputField
                type="tel"
                name="card_code"
                id="card_code"
              />
            </div>
          </div>
        </div>

        <div className="form__row">
          <p className="form__legend">Valor e parcelamento</p>

          <div className="input__group input__group__break">
            <div className="input__group__field input__group__field__plots input__group__select">
              <SelectBox 
                name="plots"
                options={ plots }
              />
            </div>
          </div>
        </div>

        <div className="submit">
          <Button className="button__back button">Voltar</Button>
          <Button  type="submit" className="button__success button">Finalizar Compra</Button>
        </div>
      </form>
    )
  }
}

export default FormPayment;