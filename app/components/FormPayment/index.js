import React, { Component } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import SelectBox from '../SelectBox';

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
                options={['SC', 'SP']}
              />
            </div>
          </div>

          <div className="input__group input__group__break">
            <label htmlFor="cidade">Cidade</label>
            <div className="input__group__field input__group__field__city input__group__select">
              <SelectBox 
                name="cidade" 
                options={['São Paulo']}
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default FormPayment;